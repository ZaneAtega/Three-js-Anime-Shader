export const config = {
    DEFAULT_UNIFORMS: {
        morphTextureStride: { value: 1 },

        aCutoff: { value: 0.0 },
        gCutoff: { value: 0.0 },
        isFur: { value: false },

        hasOutlineMask: { value: false },
        hasNrm: { value: false },
        hasFtm: { value: false },

        specularExp: { value: 10.0 },
        rimLightThreshold: { value: 0.2 },
        rimThreshold: { value: 0.7 },
        metallicBrightness: { value: 1.0 },

        exposure: { value: 0.5 }, // Adjust this first: face skin shouldn't look dull
        invGamma: { value: 1.0 / 1.55 }, // Focus on the skin (reduce exposure while increasing this)
        // You can also lower the brightness using DirectionalLight.intensity
        saturation: { value: 1.0 }, // Set this to a high value while tuning the two above
        hairSaturation: { value: 1.0 },

        isFace: { value: false },
        isHair: { value: false },

        time: { value: 0.0 },
        sparkTimeSpeed: { value: -0.05 },
        starTiling: { value: 4.0 },
        invSparkleTiling: { value: 0.0 },

        shouldGlowRed: { value: false },
        isDeniaChest: { value: false },
        sparkleTiling: { value: 4.0 },

        addStars: { value: true },

        outlineLightInfluence: { value: 0.667 },
        outlineBurnIntensity: { value: 1.0 },
        outlineMaxBrightness: { value: 0.25 }, // 0.35 // Tune this before light influence 
        isOutline: { value: false }
    },
    DIR_LIGHT_RADIUS: 100,
    DIR_LIGHT_INTENSITY: 0.4
};