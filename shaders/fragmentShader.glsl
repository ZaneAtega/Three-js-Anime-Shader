#include <common>
#include <packing>
#include <lights_pars_begin>

// VISUAL CONTROLS

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

uniform float hairShine;

uniform float exposure;
uniform float invGamma;
uniform float saturation;
uniform float hairSaturation;

// TEXTURES

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

uniform sampler2D hairHm;
uniform bool isHair;

#ifdef IS_FACE

uniform sampler2D eyebrowsHet;
uniform sampler2D faceSdf;

#elif defined(IS_EYE)

uniform bool useEyeHighlights;
uniform sampler2D eyeHighlight;
uniform sampler2D eyeBottomHighlight;

uniform sampler2D eyeEm; // HDMF_EM
uniform float eyeDepth;

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

const vec3 LUM = vec3(0.2126, 0.7152, 0.0722);
vec3 adjustSat(vec3 color, float sat) { return mix(vec3(dot(color, LUM)), color, sat); }

float GTTonemap(float x);

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

        // This is correct but UV seams are visible :(
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

    float shadow = 1.0;
    vec3 lightDir = directionalLights[0].direction;

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
    shadow = min(shadow, step(angle, faceShadow));
#endif

    // Directional Light
    float NdotL = max(dot(normal, lightDir), 0.0);
    float lightIntensity = NdotL * shadow;
    vec3 lightTint = adjustSat(lightTint, tintStrength);
    vec3 directionalLight = lightIntensity * directionalLights[0].color * lightTint;

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

#ifdef IS_EYE
    if (useEyeHighlights)
       baseColor += texture2D(eyeHighlight, vUv).r + texture2D(eyeBottomHighlight, vUv).r;
#else
    if (isHair)
       baseColor += min(texture2D(hairHm, vUv).r * directionalLight, hairShine);
#endif

    vec3 color = baseColor * finalLighting;

#ifdef IS_EYE
       vec2 eyeUv = vUv - vec2(dot(vViewDir, vTangent), dot(vViewDir, vBitangent)) * eyeDepth;
       color = max(color, baseColor * texture2D(base, mix(eyeUv, vUv, texture2D(eyeEm, vUv).g)).rgb);
#endif

    // Color Grading
    color *= exposure;
    color = vec3(GTTonemap(color.r), GTTonemap(color.g), GTTonemap(color.b));
    color = pow(color, vec3(invGamma));
    color = adjustSat(color, saturation);

    if (isHair) {
        color = adjustSat(color, hairSaturation);
    } else if (isFur) {
        float rim = 1.0 - abs(NdotV); // double-sided
        rim = pow(rim, 3.25);
        gl_FragColor = vec4(color, texture2D(base, vUv2).r * rim);
        return;
    }

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