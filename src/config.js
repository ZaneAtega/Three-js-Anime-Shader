import { Vector2, Vector3 } from 'three';

export const config = {
    DEFAULT_UNIFORMS: {
        exposure: { value: 0.5 }, // Start by tuning this; make sure the face doesn't look dull.
        invGamma: { value: 1.0 / 1.55 }, // Focus on the skin appearance; reduce exposure while increasing this.
        // DirectionalLight.intensity can also be reduced for a darker result.
        saturation: { value: 1.0 }, // Use a higher value while adjusting the two above.
        hairSaturation: { value: 1.0 },

        specularExp: { value: 20.0 },
        metallicBrightness: { value: 1.0 },

        // Fresnel-Based Rim — Adjust rimThreshold first with rimLightThreshold set to 0.2
        rimThreshold: { value: 0.7 }, // Increasingly selective toward 1.0
        rimLightThreshold: { value: 0.6 }, // x → 0.0 = More stylized; x → 1.0 = More physically intuitive (favors surfaces facing the light)

        // Screen-Space Rim
        rimWidth: { value: 0.204 * 2 }, // Adjust this first with ssRimLightThreshold set to 0.0
        rimLightStartOffset: { value: 0.08 }, // Adjust this with ssRimLightThreshold set to 1.0
        ssRimLightThreshold: { value: 1.0 },
        ssRimThreshold: { value: 0.75 },
        rimBrightness: { value: 1.0 },
        rimDepth: { value: null },
        rimScreen: { value: new Vector2(1, 1) },
        rimCamera: { value: new Vector3() },

        outlineLightInfluence: { value: 0.667 },
        outlineBurnIntensity: { value: 1.0 },
        outlineMaxBrightness: { value: 0.25 }, // 0.35 // Adjust this before light influence 
        isOutline: { value: false },

        morphTextureStride: { value: 1 },

        aCutoff: { value: 0.0 },
        gCutoff: { value: 0.0 },
        isFur: { value: false },
        hasNrm: { value: false },

        time: { value: 0.0 },
        sparkTimeSpeed: { value: -0.05 },
        starTiling: { value: 4.0 },
        invSparkleTiling: { value: 0.0 },
        sparkleTiling: { value: 4.0 },
        shouldGlowRed: { value: false },
        isDeniaChest: { value: false },
        addStars: { value: true }
    },
    DIR_LIGHT_RADIUS: 100,
    DIR_LIGHT_INTENSITY: 0.4,
    USE_SCREEN_SPACE_RIM: true
};