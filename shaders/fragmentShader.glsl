#include <common>
#include <packing>
#include <lights_pars_begin>

// Visual Controls

uniform vec3 lightTint;
uniform vec3 rimTint;
uniform vec3 ambientTint;
uniform vec3 shadowTint;
uniform float tintStrength;

uniform float specularExp;
uniform float rimLightThreshold;
uniform float rimThreshold;
uniform float metallicBrightness;

uniform float outlineLightInfluence;
uniform float outlineBurnIntensity;
uniform float outlineMaxBrightness;
uniform bool isOutline;

uniform float exposure;
uniform float invGamma;
uniform float saturation;
uniform float hairSaturation;

// Textures

uniform sampler2D base;
uniform float aCutoff;
uniform float gCutoff;
uniform bool isFur;

uniform sampler2D outlineMask;
uniform bool hasOutlineMask;

uniform sampler2D nrm;
uniform bool hasNrm;

uniform sampler2D metallicMatCap;
uniform sampler2D ftm;
uniform bool hasFtm;

#ifdef IS_FACE

uniform sampler2D eyebrowsHet;
uniform sampler2D faceSdf;

#elif defined(IS_EYE)

uniform bool useEyeHighlights;
uniform sampler2D eyeHighlight;
uniform sampler2D eyeBottomHighlight;

uniform sampler2D eyeEm;
uniform float eyeDepth;

#else

uniform bool useMainTexA;

uniform sampler2D ramp;
uniform bool hasRamp;

#endif

#if defined(IS_HAIR)

uniform sampler2D hairHm;

uniform vec3 hairShadow;
uniform vec3 hairOffset;
uniform vec2 hairSolid;

uniform sampler2D bandUv;
uniform sampler2D bandNoise;
uniform sampler2D bandRamp;
uniform bool hasBands;

uniform vec3 bandFlow;
uniform vec3 bandEdge;
uniform vec3 bandPos;

uniform vec3 bandArea;
uniform vec3 bandScale;

uniform float bandTiling[6];

uniform vec3 bandWidth;
uniform vec3 bandMute;
uniform vec3 bandDown;
uniform vec3 bandUp;
uniform vec3 bandNoiseOffset;
uniform vec3 bandUseNoise;

uniform vec3 bandMask;
uniform vec3 bandHidden;
uniform vec3 bandDark;
uniform vec3 bandBright;

uniform float bandAdd;

#endif

// Denia

#if defined(HAS_MILKWAY) || defined(HAS_FX)
uniform sampler2D sparkle;
uniform float time;
uniform float sparkTimeSpeed;
uniform float starTiling;
uniform float invStarTiling;
uniform float invSparkleTiling;
#endif

#ifdef HAS_MILKWAY
uniform sampler2D milkway;
uniform sampler2D milkwayMask;
uniform bool shouldGlowRed;
uniform bool isDeniaChest;
uniform float sparkleTiling;
#endif

#ifdef HAS_FX
uniform sampler2D fx;
uniform bool addStars;
#endif

/* --- */

varying vec2 vUv;
varying vec2 vUv2;

varying vec4 vViewPos;
varying vec3 vViewDir;

varying vec3 vNormal;
varying vec3 vTangent;
varying vec3 vBitangent;

vec3 adjustSat(vec3 color, float sat) { return mix(vec3(dot(color, vec3(0.2126, 0.7152, 0.0722))), color, sat); }
float smootherstep(float edge0, float edge1, float x);
float GTTonemap(float x);

#ifdef IS_HAIR
vec3 hairBand(vec3 color, vec3 ramp, float mask, float light);
#endif

void main() {
#ifdef IS_FACE
    gl_FragDepth = gl_FragCoord.z - float(texture2D(eyebrowsHet, vUv).r > 0.5) * 0.2;
#else
    gl_FragDepth = gl_FragCoord.z;
#endif

    vec4 baseTex = texture2D(base, isFur ? vUv2 : vUv);
    vec3 baseColor = baseTex.rgb;

    if (
        baseTex.a < aCutoff ||
        gCutoff > 0.0 && distance(baseColor, vec3(0.0, 1.0, 0.0)) < gCutoff ||
        isOutline && hasOutlineMask && texture2D(outlineMask, vUv).r == 0.0
    ) discard;

    vec3 normal = vNormal;
    float isMetallic = 0.0;

    if (hasNrm) {
        vec4 nrm = texture2D(nrm, vUv);

        // This is correct but UV seams are visible
        /*
        vec3 tangentNormal = vec3(nrm.rg * 2.0 - 1.0, 0.0);
        tangentNormal.z = sqrt(1.0 - dot(tangentNormal.xy, tangentNormal.xy));

        mat3 tbn = mat3(vTangent, vBitangent, normal);
        normal = normalize(tbn * tangentNormal);
        */

        nrm.a = 1.0 - nrm.a;
        isMetallic = nrm.a * step(0.425, nrm.a);
    }

    float NdotV = dot(normal, vViewDir);
    float facing = 1.0 - max(NdotV, 0.0);

#if defined(HAS_MILKWAY) || defined(HAS_FX)
    vec2 time = vec2(time == 0.0 ? 1.0 : time * sparkTimeSpeed);
#endif

#ifdef HAS_MILKWAY
    vec3 milkwayTex = texture2D(milkway, vViewDir.xy * starTiling + invStarTiling * time).rgb;
    milkwayTex += vec3(0.108, 0.386, 1.0) * texture2D(sparkle, vViewDir.xy * sparkleTiling + invSparkleTiling * time).r;

    if (shouldGlowRed)
        milkwayTex += vec3(1.0, 0.0, 0.18) * clamp(pow(facing, 2.05333) * 0.81636, 0.0, 1.0);

    if (isDeniaChest || texture2D(milkwayMask, vUv).g > 0.5) {
        gl_FragColor = vec4(baseColor + milkwayTex, 1.0);
        return;
    }
#endif

    vec3 lightDir = directionalLights[0].direction;
    float NdotL = max(dot(normal, lightDir), 0.0);
    float lightIntensity = NdotL;

#ifdef IS_FACE
    vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), normal));
    float RdotL = dot(right.xy, lightDir.xy);

    float faceShadow = mix(
        texture2D(faceSdf, vec2(1.0 - vUv.x, vUv.y)).r,
        texture2D(faceSdf, vUv).r,
        step(0.5, RdotL * 0.5 + 0.5)
    );

    float angle = acos(RdotL) / PI * 2.0;
    angle = mix(angle - 1.0, 1.0 - angle, step(0.0, RdotL));
    lightIntensity = NdotL * step(angle, faceShadow);
#elif defined(IS_HAIR)
    vec4 hm = texture2D(hairHm, vUv);

    if (hasRamp) {
        float halfLambert = NdotL * 0.5 + 0.5;
        float width = max(hairShadow.y, 0.001);
        float offset = hairOffset.x * pow(max(hm.g * hairOffset.y, 0.00001), hairOffset.z);

        // Solid shadow, from both captured draws: alpha over 0.5 and Process, through a Width band centered on 0.5.
        float shadow = useMainTexA ? clamp((min(min(baseTex.a, 0.5) * 2.0 / hairSolid.x, 1.0) - (0.5 - hairSolid.y * 0.5)) / hairSolid.y, 0.0, 1.0) : 1.0;

        lightIntensity = smoothstep(0.0, 1.0, clamp((halfLambert - hairShadow.x + width + offset) / (width * 2.0), 0.0, 1.0)) * shadow;
    } else {
#ifdef USE_TANGENT_BASIS
        // The hair group feeds a constant (0, 1, 1) "normal map" through WuwaNormals: a fixed tilt along T and B
        float NdotL = dot(normalize(-vTangent + vBitangent + vNormal), lightDir); 
#endif

        lightIntensity = 1.0 - mix(
            smootherstep(0.06, 0.0, NdotL * 0.5),
            1.0,
            useMainTexA ? 1.0 - smoothstep(0.0, 0.26, baseTex.a) : 0.0
        );
    }
#endif

    vec3 directionalLight = lightIntensity * directionalLights[0].color * adjustSat(lightTint, tintStrength);

    // Specular (Blinn-Phong)
    float NdotH = max(dot(normal, normalize(lightDir + vViewDir)), 0.0);
    float specularIntensity = pow(NdotH, specularExp) * lightIntensity;

    // Fresnel
    vec3 F0 = vec3(0.04);
    vec3 F = F0 + (1.0 - F0) * pow(1.0 - NdotV, 5.0);
    vec3 specular = specularIntensity * F * directionalLights[0].color * lightTint;

    // Rim Light
    float rimIntensity = facing * pow(NdotL, rimLightThreshold);
    rimIntensity = smoothstep(rimThreshold - 0.01, rimThreshold + 0.01, rimIntensity);
    vec3 rim = rimIntensity * directionalLights[0].color * adjustSat(rimTint, tintStrength);

    // Final Lighting
    vec3 finalLighting = directionalLight + specular + rim;
    finalLighting += ambientLightColor * adjustSat(ambientTint, tintStrength);
    finalLighting *= mix(vec3(1.0), adjustSat(shadowTint, tintStrength), 1.0 - lightIntensity);

    // Metallic
    if (hasFtm) {
        float ftmG = texture2D(ftm, vUv).g;
        isMetallic = min(isMetallic + ftmG * step(0.667, ftmG), 1.0);
    }

    if (isMetallic > 0.0) {
        vec3 r = normalize(
            reflect(vViewDir, normal) +
            reflect(lightDir, normal) * NdotL
        );
        float m = 2.0 * sqrt(
            r.x * r.x +
            r.y * r.y +
            (r.z + 1.0) * (r.z + 1.0)
        );
        float metallic = adjustSat(texture2D(metallicMatCap, r.xy / m + 0.5).rgb, 0.0).r;

        baseColor = mix(baseColor, baseColor * metallic, isMetallic);
        baseColor *= 1.0 + isMetallic * metallicBrightness;
    }

    /* Final Color */

    if (isOutline) {
        vec3 outlineColor = mix(vec3(1.0), finalLighting, outlineLightInfluence);

        vec3 colorBurn = 1.0 - (1.0 - baseColor) / max(baseColor, 0.001);
        outlineColor *= mix(baseColor, colorBurn, outlineBurnIntensity);

        float brightness = max(outlineColor.r, max(outlineColor.g, outlineColor.b));
        outlineColor *= min(1.0, outlineMaxBrightness / max(brightness, 0.001));

        gl_FragColor = vec4(outlineColor, 1.0);
        return;
    }

    vec3 color;
    bool wasColorModified = false;

#ifdef IS_HAIR
    if (hasBands) {
        vec2 uvMap = texture2D(bandUv, vUv).rg;

        vec2 flatN = normalize(normal.xz + 0.0001);
        float facing = dot(vec3(flatN.x, 0.0, flatN.y), vViewDir);

        float pitch = (viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).z;
        vec3 pos = uvMap.y - bandFlow * pitch + bandEdge * (1.0 - NdotV);
        vec3 d = pos - bandPos;
        vec3 above = step(bandPos, pos);

        vec3 soft = clamp(bandArea * (facing * 2.0 - 1.0) + (1.0 - facing), bandScale, vec3(1.0));
        float n0 = (texture2D(bandNoise, vec2(bandTiling[0] * uvMap.x + bandTiling[1], 0.5)).r * 2.0 - 1.0) * bandTiling[2];
        float n1 = (texture2D(bandNoise, vec2(bandTiling[3] * uvMap.x + bandTiling[4], 0.5)).r * 2.0 - 1.0) * bandTiling[5] - n0;
        vec3 mute = (clamp(abs(d) / max(bandWidth, vec3(0.0001)), 0.0, 1.0) - 1.0) * bandMute + 1.0;
        vec3 shift = mix(bandDown, bandUp, above) * (n1 * (above * bandNoiseOffset + bandUseNoise) + n0) * mute;
        vec3 u = clamp((d + soft * bandWidth + shift) / max(vec3(0.0001), bandWidth * soft * 2.0), 0.0, 1.0);

        vec4 rim = texture2D(bandRamp, vec2(NdotV, 0.875));
        vec3 masks = mix(hm.rrr, hm.bbb, bandMask) * mix(rim.rrr, rim.ggg, bandHidden);
        vec3 light = mix(bandDark, bandBright, lightIntensity);

        color = hairBand(baseColor, texture2D(bandRamp, vec2(u.x, 0.125)).rgb, masks.x, light.x);
        color = hairBand(color, texture2D(bandRamp, vec2(u.y, 0.375)).rgb, masks.y, light.y);
        color = hairBand(color, texture2D(bandRamp, vec2(u.z, 0.625)).rgb, masks.z, light.z);
        wasColorModified = true;
    } else {
        float highlight = clamp(hm.r - lightIntensity, 0.0, 1.0) * smoothstep(0.5, 1.0, NdotV);

        // Highlight Old, but its colour is hand-picked per character in the blend: 
        // a fixed near-white turns dark hair into plastic, so the sheen follows the hair colour instead
        baseColor = mix(baseColor, baseColor * 2.0 + 0.05, clamp(highlight, 0.0, 1.0) * 0.5); // ponytail: 2.0, 0.05 and 0.5 eyeballed
    }
#elif defined(IS_EYE)
    if (useEyeHighlights)
       baseColor += texture2D(eyeHighlight, vUv).r + texture2D(eyeBottomHighlight, vUv).r;
#endif

    color = (wasColorModified ? color : baseColor) * finalLighting;

#ifdef IS_EYE
       vec2 eyeUv = vUv - vec2(dot(vViewDir, vTangent), dot(vViewDir, vBitangent)) * eyeDepth;
       color = max(color, baseColor * texture2D(base, mix(eyeUv, vUv, texture2D(eyeEm, vUv).g)).rgb);
#endif

    // Color Grading
    color *= exposure;
    color = vec3(GTTonemap(color.r), GTTonemap(color.g), GTTonemap(color.b));
    color = pow(color, vec3(invGamma));
    color = adjustSat(color, saturation);

#ifdef IS_HAIR
    color = adjustSat(color, hairSaturation);
#else
    if (isFur) {
        float rim = 1.0 - abs(NdotV); // double-sided
        rim = pow(rim, 3.25);
        gl_FragColor = vec4(color, texture2D(base, vUv2).r * rim);
        return;
    }
#endif

#ifdef HAS_FX
    if (addStars) {
        color += texture2D(fx, vUv * starTiling + invStarTiling * time).r * texture2D(fx, vUv).a;
    } else {
        float stars = texture2D(fx, vUv * starTiling).r * texture2D(fx, vUv).a;
        vec2 sparkleUv = vViewDir.xy * abs(vViewPos.z) * invSparkleTiling + invSparkleTiling * time;
        color += texture2D(sparkle, sparkleUv).r * step(0.05, stars) * 2.0;
    }
#endif

    gl_FragColor = vec4(color, 1.0);
}

#ifdef IS_HAIR

vec3 hairBand(vec3 color, vec3 ramp, float mask, float light) {
    vec3 r = ramp * 2.0 - 1.0;
    vec3 added = mask * r * light;

    // Dark ramp values multiply, bright ones add or screen
    return mix(
        color * (1.0 + mask * r),
        mix(1.0 - (1.0 - added) * (1.0 - color), added + color, bandAdd),
        step(vec3(0.5), ramp)
    );
}

#endif

float smootherstep(float edge0, float edge1, float x) {
    x = clamp((x - edge0)/(edge1 - edge0), 0.0, 1.0);
    return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

// GT Tonemap

const float P = 1.0; // max brightness
const float a = 1.0; // contrast
const float m = 0.22; // linear section start
const float l = 0.40; // linear section length
const float c = 1.33; // black tightness
const float b = 0.0; // pedestal

const float invP = 1.0;
const float invM = 4.54545;

const float l0 = 0.312; // (P - m) * l / a;
const float S1 = 0.532; // m + a * l0;
const float C2 = 2.13675; // a * P / (P - S1);
const float S0 = 0.532; // m + l0;

float GTTonemap(float x) {
    float S_x = P - (P - S1) * exp(-C2 * (x - S0) * invP);
    float L_x = m + a * (x - m);
    float w2_x = step(m + l, x);
    float w0_x = 1.0 - smoothstep(0.0, m, x);
    float w1_x = 1.0 - w0_x - w2_x;
    float T_x = m * pow(x * invM, c) + b;
    return T_x * w0_x + L_x * w1_x + S_x * w2_x;
}