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

uniform float glossiness;
uniform float counterExposure;
uniform float saturation;
uniform float hairSaturation;

uniform bool isOutline;
uniform float outlineBurnIntensity;
uniform float outlineLightInfluence;
uniform float outlineMaxBrightness;
uniform float outlineMaxBrightnessHair;

// TEXTURES

uniform sampler2D base;
uniform float gCutoff;
uniform float aCutoff;

uniform sampler2D outlineMask;
uniform bool hasOutlineMask;

uniform sampler2D faceSDF;
uniform sampler2D eyeHighlight;
uniform sampler2D eyeBottomHighlight;
uniform sampler2D hairHM;

uniform bool isFace;
uniform bool isEye;
uniform bool isHair;
uniform bool isFur;

uniform sampler2D wenli;
uniform sampler2D sparkle;
uniform sampler2D ftm;

uniform bool hasWenli;
uniform bool isDeniaChest;

/* --- */

varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vNormal;
varying vec3 vViewDir;

const vec3 LUM = vec3(0.2126, 0.7152, 0.0722);
vec3 adjustSat(vec3 color, float sat) { return mix(vec3(dot(color, LUM)), color, sat); }

float GTTonemap(float x);

void main() {
    vec4 baseTex = texture2D(base, isFur ? vUv2 : vUv);
    vec3 diffuseColor = baseTex.rgb;

    if (
        distance(baseTex.rgb, vec3(0.0, 1.0, 0.0)) < gCutoff ||
        baseTex.a < aCutoff ||
        isOutline && hasOutlineMask && texture2D(outlineMask, vUv).r == 0.0
    ) discard;

    float NdotV = dot(vNormal, vViewDir);
    float facing = 1.0 - max(NdotV, 0.0);

    if (hasWenli) {
        vec3 wenliTex = texture2D(wenli, vViewDir.xy * 4.0).rgb;

        // Adapted from Jonn's Blender shader: wheresjonn.gumroad.com
        wenliTex += vec3(0.108, 0.386, 1.0) * clamp(pow(texture2D(sparkle, vViewDir.xy * 2.0).r, 11.67) * 1.760, 0.0, 1.0);
        if (!isDeniaChest) wenliTex += vec3(1.0, 0.0, 0.18) * clamp(pow(facing, 6.16) * 8.98, 0.0, 1.0); 

        if (isDeniaChest || texture2D(ftm, vUv).g > 0.37) {
            gl_FragColor = vec4(diffuseColor + wenliTex, 1.0);
            return;
        }
    }

    if (isEye) {
        diffuseColor = mix(
            mix(diffuseColor, vec3(1.0), texture2D(eyeHighlight, vUv).r),
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

        float angle = acos(RdotL) / 3.14159 * 2.0;
        angle = mix(angle - 1.0, 1.0 - angle, step(0.0, RdotL));
        lightDir *= step(angle, faceShadow);
    }

    float NdotL = max(dot(vNormal, lightDir), 0.0);
    float lightIntensity = NdotL; // * shadow;

    vec3 directionalLight = directionalLights[0].color * lightIntensity * lightTint;

    // Specular
    vec3 halfVector = normalize(lightDir + vViewDir);
    float NdotH = max(dot(vNormal, halfVector), 0.0);

    float specularIntensity = pow(NdotH, 1000.0 / glossiness); // Blinn-Phong
    specularIntensity *= lightIntensity;

    // Fresnel
    vec3 F0 = vec3(0.04);
    vec3 F = F0 + (1.0 - F0) * pow(1.0 - dot(halfVector, vViewDir), 5.0);

    vec3 specular = specularIntensity * directionalLights[0].color * F;
 
    // Rim Light
    float rimThreshold = 0.2;
    float rimIntensity = facing * pow(NdotL, rimThreshold);

    float rimAmount = 0.6;
    rimIntensity = smoothstep(rimAmount - 0.01, rimAmount + 0.01, rimIntensity);

    vec3 rim = rimIntensity * directionalLights[0].color * rimTint;

    // Final Lighting
    vec3 finalLighting = directionalLight + specular + rim;

    if (isOutline) {
        vec3 colorBurn = 1.0 - (1.0 - diffuseColor) / max(diffuseColor, 0.001);
        colorBurn = mix(isHair ? vec3(1.0) : diffuseColor, colorBurn, outlineBurnIntensity);

        vec3 outlineColor = colorBurn * mix(vec3(1.0), finalLighting, outlineLightInfluence);

        float brightness = max(outlineColor.r, max(outlineColor.g, outlineColor.b));
        float maxBrightness = isHair ? outlineMaxBrightnessHair : outlineMaxBrightness;
        if (brightness > maxBrightness) outlineColor *= maxBrightness / brightness;

        gl_FragColor = vec4(outlineColor, 1.0);
        return;
    }

    vec3 litColor = diffuseColor * (ambientLightColor * ambientTint + finalLighting);
    vec3 withShadowTint = litColor * mix(vec3(1.0), shadowTint, 1.0 - lightIntensity);

    // Color Grading
    vec3 correctExposure = withShadowTint * counterExposure; // Compensating for SMAA/SSAA post-processing, which makes it look overexposed

    if (isHair) correctExposure += directionalLight * texture2D(hairHM, vUv).r * 0.075; // Hair Highlights

    vec3 GT = vec3(GTTonemap(correctExposure.r), GTTonemap(correctExposure.g), GTTonemap(correctExposure.b));
    vec3 adjustedSat = adjustSat(GT, saturation);
    vec3 gamma = pow(adjustedSat, vec3(1.0 / 2.0875)); // Compensating for SMAA/SSAA

    vec3 finalColor = gamma;

    if (isHair) {
        finalColor = adjustSat(gamma, hairSaturation);
    } else if (isFur) {
        float rim = 1.0 - abs(NdotV); // double-sided
        rim = pow(rim, 3.25);
        gl_FragColor = vec4(finalColor, texture2D(base, vUv2).r * rim);
        return;
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

float GTTonemap(float x) {
    float l0 = (P - m) * l / a;
    float S1 = m + a * l0;
    float C2 = a * P / (P - S1);
    float S0 = m + l0;
    float S_x = P - (P - S1) * exp(-C2 * (x - S0) / P);
    float L_x = m + a * (x - m);
    float w2_x = (x < m + l) ? 0.0 : 1.0;
    float w0_x = 1.0 - smoothstep(0.0, m, x);
    float w1_x = 1.0 - w0_x - w2_x;
    float T_x = m * pow(x / m, c) + b;
    return T_x * w0_x + L_x * w1_x + S_x * w2_x;
}