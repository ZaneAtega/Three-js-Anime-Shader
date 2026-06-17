#include <common>
#include <packing>
#include <lights_pars_begin>
// #include <shadowmap_pars_fragment>
// #include <shadowmask_pars_fragment>

// VISUAL CONTROLS

uniform vec3 lightTint;
uniform vec3 rimTint;
uniform vec3 ambientTint;
uniform vec3 shadowTint;
uniform float tintStrength;

uniform float specularExp;

uniform float rimThreshold;
uniform float rimAmount;

uniform float counterExposure;
uniform float invGamma;

uniform float saturation;
uniform float hairSaturation;

uniform float outlineBurnIntensity;
uniform float outlineLightInfluence;
uniform float outlineMaxBrightness;
uniform float outlineMaxBrightnessHair;
uniform bool isOutline;

// TEXTURES

uniform sampler2D base;
uniform float aCutoff;
uniform float gCutoff;
uniform bool isFur;

uniform sampler2D outlineMask;
uniform bool hasOutlineMask;

uniform sampler2D ftm;
uniform sampler2D metallicMatCap;
uniform bool hasFTM;

uniform sampler2D faceSDF;
uniform sampler2D het;
uniform bool isFace;

uniform sampler2D eyeHighlight;
uniform sampler2D eyeBottomHighlight;
uniform bool isEye;

uniform sampler2D hairHM;
uniform bool isHair;

// Denia

uniform sampler2D milkway;
uniform sampler2D sparkle;

uniform bool hasMilkway;
uniform bool shouldGlowRed;
uniform bool isDeniaChest;

uniform sampler2D milkwayMask;
uniform bool hasMilkwayMask;
uniform float milkwayMinG;

uniform sampler2D fx;
uniform bool hasFX;
uniform bool useSparkle;

/* --- */

varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vNormal;
varying vec4 vViewPos;
varying vec3 vViewDir;

const vec3 LUM = vec3(0.2126, 0.7152, 0.0722);
vec3 adjustSat(vec3 color, float sat) { return mix(vec3(dot(color, LUM)), color, sat); }

float GTTonemap(float x);

void main() {
    gl_FragDepth = gl_FragCoord.z - float(isFace && texture2D(het, vUv).r > 0.5) * 0.2;

    vec4 baseTex = texture2D(base, isFur ? vUv2 : vUv);
    vec3 baseColor = baseTex.rgb;

    if (
        baseTex.a < aCutoff ||
        gCutoff > 0.0 && distance(baseTex.rgb, vec3(0.0, 1.0, 0.0)) < gCutoff ||
        isOutline && hasOutlineMask && texture2D(outlineMask, vUv).r == 0.0
    ) discard;

    float NdotV = dot(vNormal, vViewDir);
    float facing = 1.0 - max(NdotV, 0.0);

    if (hasMilkway) {
        vec3 milkwayTex = texture2D(milkway, vViewDir.xy * 4.0).rgb;

        milkwayTex += vec3(0.108, 0.386, 1.0) * texture2D(sparkle, vViewDir.xy * 4.0).r;

        if (shouldGlowRed) milkwayTex += vec3(1.0, 0.0, 0.18) * clamp(pow(facing, 2.05333) * 0.81636, 0.0, 1.0);

        if (isDeniaChest || (hasMilkwayMask ? texture2D(milkwayMask, vUv).g : texture2D(ftm, vUv).g) > milkwayMinG) {
            gl_FragColor = vec4(baseColor + milkwayTex, 1.0);
            return;
        }
    }

    if (isEye) {
        baseColor = mix(
            mix(baseColor, vec3(1.0), texture2D(eyeHighlight, vUv).r),
            vec3(1.0),
            texture2D(eyeBottomHighlight, vUv).r
        );
    }

    // Adjust Tints
    vec3 lightTint = adjustSat(lightTint, tintStrength);
    vec3 rimTint = adjustSat(rimTint, tintStrength);
    vec3 ambientTint = adjustSat(ambientTint, tintStrength);
    vec3 shadowTint = adjustSat(shadowTint, tintStrength);

    // Shadow Map from Mayacoda's toon shader - Uncomment if DirectionalLight.castShadow = true
    /*
    DirectionalLightShadow directionalShadow = directionalLightShadows[0];

    float shadow = getShadow(
        directionalShadowMap[0],
        directionalShadow.shadowMapSize,
        directionalShadow.shadowBias,
        directionalShadow.shadowRadius,
        vDirectionalShadowCoord[0]
    );
    */

    // Directional Light
    vec3 lightDir = directionalLights[0].direction;

    if (isFace) {
        vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), vNormal));
        float RdotL = dot(right.xy, lightDir.xy);

        float faceShadow = mix(
            texture2D(faceSDF, vec2(1.0 - vUv.x, vUv.y)).r,
            texture2D(faceSDF, vUv).r,
            step(0.5, RdotL * 0.5 + 0.5)
        );

        float angle = acos(RdotL) / PI * 2.0;
        angle = mix(angle - 1.0, 1.0 - angle, step(0.0, RdotL));
        lightDir *= step(angle, faceShadow);
    }

    float NdotL = max(dot(vNormal, lightDir), 0.0);
    float lightIntensity = NdotL; // * shadow;

    vec3 directionalLight = directionalLights[0].color * lightIntensity * lightTint;

    // Metallic
    if (hasFTM) {
        vec3 viewReflect = reflect(-vec3(vViewDir.z, vViewDir.y, -vViewDir.x), vNormal); // Rotate 90 about Y
        vec3 lightReflect = reflect(-vec3(lightDir.z, lightDir.y, -lightDir.x), vNormal);

        vec2 metallicUV = normalize(viewReflect + lightReflect * NdotL).xy;
        metallicUV = metallicUV * 0.5 + 0.5;

        float metallic = adjustSat(texture2D(metallicMatCap, metallicUV).rgb, 0.0).r;
        float metallicMask = step(0.667, texture2D(ftm, vUv).g);

        baseColor = mix(baseColor, baseColor * metallic, metallicMask);
        baseColor *= 1.0 + metallicMask;
    }

    // Specular (Blinn-Phong)
    vec3 halfVector = normalize(lightDir + vViewDir);
    float NdotH = max(dot(vNormal, halfVector), 0.0);
    float specularIntensity = pow(NdotH, specularExp) * lightIntensity;

    // Fresnel
    vec3 F0 = vec3(0.04);
    vec3 F = F0 + (1.0 - F0) * pow(1.0 - dot(halfVector, vViewDir), 5.0);
    vec3 specular = specularIntensity * directionalLights[0].color * F;
 
    // Rim Light
    float rimIntensity = facing * pow(NdotL, rimThreshold);
    rimIntensity = smoothstep(rimAmount - 0.01, rimAmount + 0.01, rimIntensity);
    vec3 rim = rimIntensity * directionalLights[0].color * rimTint;

    // Final Lighting
    vec3 finalLighting = directionalLight + specular + rim;

    if (isOutline) {
        vec3 colorBurn = 1.0 - (1.0 - baseColor) / max(baseColor, 0.001);
        colorBurn = mix(isHair ? vec3(1.0) : baseColor, colorBurn, outlineBurnIntensity);
        vec3 outlineColor = colorBurn * mix(vec3(1.0), finalLighting, outlineLightInfluence);

        float brightness = max(outlineColor.r, max(outlineColor.g, outlineColor.b));
        float maxBrightness = isHair ? outlineMaxBrightnessHair : outlineMaxBrightness;
        outlineColor *= min(1.0, maxBrightness / max(brightness, 0.001));

        gl_FragColor = vec4(outlineColor, 1.0);
        return;
    }

    vec3 litColor = baseColor * (ambientLightColor * ambientTint + finalLighting);
    vec3 withShadowTint = litColor * mix(vec3(1.0), shadowTint, 1.0 - lightIntensity);

    // Color Grading
    vec3 correctExposure = withShadowTint * counterExposure; // Compensating for SMAA/SSAA post-processing, which makes it look overexposed

    if (isHair) correctExposure += directionalLight * texture2D(hairHM, vUv).r * 0.075; // Hair Highlights

    vec3 GT = vec3(GTTonemap(correctExposure.r), GTTonemap(correctExposure.g), GTTonemap(correctExposure.b));
    vec3 adjustedSat = adjustSat(GT, saturation);
    vec3 finalColor = pow(adjustedSat, vec3(invGamma)); // Compensating for SMAA/SSAA

    if (isHair) {
        finalColor = adjustSat(finalColor, hairSaturation);
    } else if (isFur) {
        float rim = 1.0 - abs(NdotV); // double-sided
        rim = pow(rim, 3.25);
        gl_FragColor = vec4(finalColor, texture2D(base, vUv2).r * rim);
        return;
    }

    if (hasFX) {
        float stars = texture2D(fx, vUv * 4.0).r * texture2D(fx, vUv).a;
        if (useSparkle) finalColor += texture2D(sparkle, vViewDir.xy * abs(vViewPos.z) * 0.125).r * step(0.03, stars);
        else finalColor += stars;
    }

    gl_FragColor = vec4(finalColor, 1.0);
}

// GT Tonemap

const float P = 1.0;
const float m = 0.22;
const float l = 0.40;
const float a = 1.0;
const float c = 1.33;
const float b = 0.0;

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