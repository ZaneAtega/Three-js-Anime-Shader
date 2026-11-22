import * as THREE from "three";

import { jsonCache, getJson, loadTex, getColor } from './utils.js';
import { config as cfg } from "../config/config.js";

export const ApplyMats = (instance) => {
    async function warmCache() {
        const urls = [];
        const json_urls = [];

        for (const part of instance.activeChar.parts) {
            let texPrefix = `${instance.TEXTURES_PATH}${instance.skin[0]}/${instance.skin[1]}${part}`;
            urls.push(`${texPrefix}_D.png`);

            const matData = texPrefix.replace("T_", "MI_")
            json_urls.push(`${matData}.json`);
            json_urls.push(`${matData}_OL.json`);

            switch (part) {
                case "Hair":
                case "Bangs":
                    urls.push(`${texPrefix}_HM.png`);
                    texPrefix = texPrefix.replace(part, "");

                    urls.push(`${texPrefix}_Skin.png`);

                    urls.push(`${texPrefix}Bangs_HN.png`);
                    urls.push(`${texPrefix}Hair_HR.png`);

                    break;
                case "Fur":
                    urls.push(`${instance.TEXTURES_PATH}T_Fur_M.png`);
                    break;
                case "Up":
                case "Down":
                case "Cloth":
                case "Alpha":
                case "Body":
                    let shouldHaveFtm = false;

                    switch (instance.charName) {
                        case "Denia_3":
                            break;
                        case "Denia":
                        case "Denia_2":
                            urls.push(`${texPrefix}_FTM.png`);
                            shouldHaveFtm = true;
                        default:
                            urls.push(`${texPrefix}_N.png`);
                    }

                    if (!shouldHaveFtm) urls.push(`${texPrefix}_ID.png`);

                    break;
            }
        }

        if (instance.charName.startsWith("Denia")) {
            const texPrefix = `${instance.TEXTURES_PATH}${instance.charName}/${instance.activeChar.texPrefix}`;

            switch (instance.charName) {
                case "Denia_2":
                    urls.push(`${texPrefix}Up_MilkwayMask.png`);
                case "Denia":
                    urls.push(`${texPrefix}Down_MilkwayMask.png`);

                    urls.push(`${texPrefix}Down_FX.png`);
                    urls.push(`${texPrefix}Hair_FX.png`);

                    if (instance.charName === "Denia") urls.push(`${texPrefix}Cloth_OutlineMask.png`);
                case "Denia_3":
                    urls.push(`${texPrefix}Cloth_MilkwayMask.png`);
                    break;
            }
        }

        await Promise.all(urls.map(url => new Promise(resolve => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = img.onerror = resolve;
            img.src = url;
        })));

        await Promise.all(json_urls.map(async url => {
            jsonCache[url] = await fetch(url).then(r => r.ok ? r.json() : {}).catch(() => ({}));
        }));
    }

    function applyPaletteUniforms(palettes, paletteIndex, uniforms) {
        if (paletteIndex === undefined) {
            const hr = new Date().getHours();
            paletteIndex = (hr > 6 && hr < 18) ? 2 : 3;
        }
        const palette = palettes[paletteIndex];

        for (const tint of ["light", "rim", "ambient", "shadow"])
            uniforms[`${tint}Tint`] = { value: new THREE.Color(palette[`${tint}Tint`]) };

        uniforms.tintStrength = { value: palette.tintStrength };
        uniforms.isWarmPalette = { value: !palette.isCool };

        return paletteIndex;
    };

    function setBandUniforms(uniforms, scalars) {
        const getBandVector = (property, fallback) => [0, 1, 2].map(i => scalars[`${i}_${property}`] ?? fallback);

        uniforms.bandFlow = { value: getBandVector("FlowMin", 0.0) };
        uniforms.bandEdge = { value: getBandVector("EdgeLift", 0.0) };
        uniforms.bandPos = { value: getBandVector("Position", 0.5) };

        uniforms.bandArea = { value: getBandVector("ScaleArea", 0.0) };
        uniforms.bandScale = { value: getBandVector("Scale", 1.0) };

        uniforms.bandTiling = { value: [
            scalars["1_TilingU"] ?? 1.0,
            scalars["1_OffsetU"] ?? 0.0,
            scalars["1_Intensity"] ?? 0.0,
            scalars["2_TilingU"] ?? 1.0,
            scalars["2_OffsetU"] ?? 0.0,
            scalars["2_Intensity"] ?? 0.0
        ]};

        uniforms.bandWidth = { value: getBandVector("Width", 0.2) };
        uniforms.bandMute = { value: getBandVector("UseMiddleMute", 0.0) };
        uniforms.bandDown = { value: getBandVector("NoiseDownIntensity", 0.0) };
        uniforms.bandUp = { value: getBandVector("NoiseUpIntensity", 0.0) };
        uniforms.bandNoiseOffset = { value: getBandVector("UseNoiseOffset", 0.0) };
        uniforms.bandUseNoise = { value: getBandVector("UseNoise", 1.0) };

        uniforms.bandMask = { value: getBandVector("HairMaskChannel", 0.0) };
        uniforms.bandHidden = { value: getBandVector("HairRimHiddenChannel", 0.0) };

        uniforms.bandDark = { value: getBandVector("HighlightColorIntensity_Dark", 1.0) };
        uniforms.bandBright = { value: getBandVector("HighlightColorIntensity", 1.0) };

        uniforms.bandAdd = { value: scalars.UseAdd ?? 0.0 };
    }

    const getAvgColor = (a, b) => {
        return a && b ? [
            (a.R + b.R) / 2,
            (a.G + b.G) / 2,
            (a.B + b.B) / 2
        ] : a ? [a.R, a.G, a.B] : b ? [b.R, b.G, b.B] : null;
    };

    async function applyPartDefinesUniforms(part, texPrefix, matData, defines, uniforms) {
        const { Scalars: scalars = {}, Colors: colors = {} } = matData;

        switch (part) {
            case "Face":
                defines.IS_FACE = true;

                uniforms.faceSdf = { value: await loadTex(`${instance.TEXTURES_PATH}T_FemaleMFace_SDF.png`, false) };
                uniforms.faceShadowWidth = { value: Math.max(scalars.SDFSmoothness ?? 0.025, scalars.ShadowWidth ?? 0.025) };

                uniforms.eyebrowsHet = { value: await loadTex(`${texPrefix}_EyebrowsHET.png`, false) };
                uniforms.outlineMask = { value: await loadTex(`${instance.TEXTURES_PATH}Face_OutlineMask.png`, false) };

                break;
            case "Eye":
                defines.IS_EYE = true;
                texPrefix = `${instance.TEXTURES_PATH}Eyes/`;

                uniforms.eyeEm = { value: await loadTex(`${texPrefix}T_HDMF_EM.png`, false) };
                uniforms.eyeDepth = { value: 1.5 * (scalars.ParallaxHeight ?? 0.1) };

                uniforms.useEyeHighlights = { value: instance.activeChar.useEyeHighlights !== false };
                if (!uniforms.useEyeHighlights.value) break;

                uniforms.eyeHighlight = { value: await loadTex(`${texPrefix}T_Highlight_1.png`, false) };
                uniforms.eyeHighlight2 = { value: await loadTex(`${texPrefix}BottomHighlight_1.png`, false) };

                break;
            case "Hair":
            case "Bangs":
                defines.IS_HAIR = true;
                uniforms.hairHm = { value: await loadTex(`${texPrefix}_HM.png`, false) };
                texPrefix = texPrefix.replace(part, "");

                if (instance.activeChar.outlineHbi !== undefined) {
                    uniforms.outlineBurnIntensity = { value: instance.activeChar.outlineHbi };
                    // uniforms.outlineMaxBrightness = { value: 1.0 };
                }

                if (part !== "Bangs") {
                    uniforms.hasRamp = { value: false };
                    break;
                }

                uniforms.ramp = { value: await loadTex(`${texPrefix}_Skin.png`) };
                uniforms.hasRamp = { value: !!uniforms.ramp.value };
                if (!uniforms.hasRamp.value) break;

                uniforms.hairShadow = { value: [
                    scalars.ShadowProcess ?? 0.7,
                    scalars.ShadowWidth ?? 0.05,
                    scalars.SolidShadow_RampPosition ?? 0.4
                ]};

                uniforms.hairOffset = { value: [
                    scalars.MaskShadowOffsetStrength ?? 0.0,
                    scalars.ShadowOffsetAdjustFactor ?? 1.0,
                    scalars.ShadowOffsetPower ?? 1.0
                ]};

                uniforms.hairSolid = { value: [
                    scalars.SolidShadowProcess ?? 0.5,
                    scalars.SolidShadowWidth ?? 0.8
                ]};

                uniforms.hasBands = { value: false };

                for (const [band, path] of Object.entries({
                    bandUv: `${texPrefix}Bangs_HN.png`,
                    bandNoise: `${instance.TEXTURES_PATH}T_HairNoise_M.png`,
                    bandRamp: `${texPrefix}Hair_HR.png`
                })) {
                    uniforms[band] = { value: await loadTex(path, false, band !== "bandRamp") };
                    if (!uniforms[band].value) return;
                }

                uniforms.hasBands.value = true;
                setBandUniforms(uniforms, scalars);

                break;
            case "Fur":
                // defines.USE_UV2 = true;
                uniforms.isFur = { value: true };
                uniforms.base = { value: await loadTex(`${instance.TEXTURES_PATH}T_Fur_M.png`) };
                break;
            case "Up":
            case "Down":
            case "Cloth":
            case "Alpha":
            case "Body":
                defines.IS_BODY = true;

                switch (instance.charName) {
                    case "Denia_3":
                        break;
                    case "Denia":
                    case "Denia_2":
                        uniforms.ftm = { value: await loadTex(`${texPrefix}_FTM.png`, false) };
                    default:
                        uniforms.nrm = { value: await loadTex(`${texPrefix}_N.png`, false) };
                }

                uniforms.hasFtm = { value: !!uniforms.ftm?.value };
                uniforms.hasNrm = { value: !!uniforms.nrm?.value };

                if (uniforms.hasNrm.value)
                    uniforms.metallicMatCap = { value: await loadTex(`${instance.TEXTURES_PATH}CharacterCubeMaps/T_MC_premake_D.png`) }; // 09 // Denia Denia_2 07

                if (uniforms.hasFtm.value) {
                    uniforms.hasId = { value: false };
                } else {
                    uniforms.idMap = { value: await loadTex(`${texPrefix}_ID.png`, false) }; 
                    uniforms.hasId = { value: !!uniforms.idMap?.value };
                }

                uniforms.subsurfaceColor = { value: getColor(colors.SubsurfaceColor) }; // [0.863, 0.46, 0.358] // [0.72, 0.51, 0.46]
                uniforms.skinSubsurfaceColor = { value: getColor(colors.SkinSubsurfaceColor) }; // [0.863, 0.46, 0.358] // [0.72, 0.51, 0.46]

                break;
        }
    }

    async function applyCharDefinesUniforms(part, texPrefix, defines, uniforms) {
        // const mcPrefix = `${instance.TEXTURES_PATH}CharacterCubeMaps/T_MC_premake`;

        switch (instance.charName) {
            /*
            case "Iuno":
                switch (part) {
                    case "Alpha":
                        uniforms.metallicMatCap = { value: await loadTex(`${mcPrefix}_D.png`) };
                        break;
                    case "Down":
                    // case "Shoes":
                        uniforms.metallicMatCap = { value: await loadTex(`${mcPrefix}05_D.png`) };
                        break;
                    case "Up":
                        uniforms.metallicMatCap = { value: await loadTex(`${mcPrefix}06_D.png`) };
                        break;
                }
                break;
            case "Galbrena":
                switch (part) {
                    case "Cloth":
                    case "Down":
                        uniforms.metallicMatCap = { value: await loadTex(`${mcPrefix}_D.png`) };
                        break;
                    case "Up":
                        uniforms.metallicMatCap = { value: await loadTex(`${mcPrefix}06_D.png`) };
                        break;
                }
                break;
            */
            case "Galbrena":
                switch (part) {
                    case "Up":
                    case "Down":
                        uniforms.subsurfaceColor.value = [0, 0, 0];
                        uniforms.skinSubsurfaceColor.value = [0, 0, 0];
                        break;
                }
                break;
            case "Denia":
                uniforms.time = { value: 1.0 };

                switch (part) {
                    case "Up":
                        uniforms.gCutoff = { value: 0.55 }; // 0.825
                        break;
                    case "Cloth":
                        uniforms.outlineMask = { value: await loadTex(`${texPrefix}_OutlineMask.png`, false) };
                        defines.HAS_MILKWAY = true;
                        uniforms.sparkleTiling = { value: 10.0 };
                        break;
                    case "Hair":
                        defines.HAS_FX = true;
                        uniforms.invSparkleTiling = { value: 1.0 / 6.0 };
                        uniforms.addStars = { value: false };
                        break;
                    case "Down":
                        defines.HAS_FX = true;
                        defines.HAS_MILKWAY = true;
                        uniforms.sparkleTiling = { value: 10.0 };
                        break;
                }

                break;
            case "Denia_2":
                uniforms.time = { value: 1.0 };

                switch (part) {
                    case "Fx":
                        uniforms.aCutoff = { value: 0.8 };
                        defines.HAS_MILKWAY = true;
                        uniforms.isDeniaChest = { value: true };
                        break;
                    case "Up":
                        uniforms.gCutoff = { value: 0.55 };
                        defines.HAS_MILKWAY = true;
                        uniforms.shouldGlowRed = { value: true };
                        uniforms.time = { value: 0.0 };
                        break;
                    case "Cloth":
                        defines.HAS_MILKWAY = true;
                        uniforms.sparkleTiling = { value: 10.0 };
                        break;
                    case "Hair":
                        defines.HAS_FX = true;
                        uniforms.invSparkleTiling = { value: 1.0 / 6.0 };
                        uniforms.addStars = { value: false };
                        break;
                    case "Down":
                        defines.HAS_FX = true;
                        defines.HAS_MILKWAY = true;
                        uniforms.sparkleTiling = { value: 10.0 };
                        uniforms.subsurfaceColor.value = [0, 0, 0];
                        break;
                }

                break;
            case "Denia_3":
                uniforms.time = { value: 1.0 };

                switch (part) {
                    case "Body":
                        uniforms.gCutoff = { value: 0.55 };
                        break;
                    case "Fx":
                        uniforms.aCutoff = { value: 0.8 };
                        defines.HAS_MILKWAY = true;
                        uniforms.isDeniaChest = { value: true };
                        break;
                    case "Cloth":
                        defines.HAS_MILKWAY = true;
                        uniforms.sparkleTiling = { value: 10.0 };
                        break;
                }
                break;
        }

        uniforms.hasOutlineMask = { value: !!uniforms.outlineMask?.value };
    }

    async function applyUniformsBasedOnDefines(part, defines, uniforms) {
        if (defines.HAS_MILKWAY || defines.HAS_FX)
            uniforms.invStarTiling = { value: 1.0 / uniforms.starTiling.value };

        if (defines.HAS_MILKWAY) {
            const milkway = await loadTex(`${instance.TEXTURES_PATH}T_Wenli_${part === "Cloth" ? 230046 : 10025}.png`);
            const sparkle = await loadTex(`${instance.TEXTURES_PATH}T_Sparkle_SDF.png`, false);

            milkway.wrapS = milkway.wrapT = sparkle.wrapS = sparkle.wrapT = THREE.RepeatWrapping;

            uniforms.milkway = { value: milkway };
            uniforms.sparkle = { value: sparkle };

            if (!uniforms.isDeniaChest.value)
                uniforms.milkwayMask = { value: await loadTex(`${instance.TEXTURES_PATH}${instance.charName}/${instance.activeChar.texPrefix}${part}_MilkwayMask.png`, false) };

            uniforms.invSparkleTiling = { value: 1.0 / uniforms.sparkleTiling.value };
        }

        if (defines.HAS_FX) {
            const fx = await loadTex(`${instance.TEXTURES_PATH}${instance.charName}/${instance.activeChar.texPrefix}${part}_FX.png`);
            fx.wrapS = fx.wrapT = THREE.RepeatWrapping;
            uniforms.fx = { value: fx };

            if (uniforms.sparkleTiling.value > 0.0) {
                const sparkle = await loadTex(`${instance.TEXTURES_PATH}T_Sparkle_SDF.png`, false);
                sparkle.wrapS = sparkle.wrapT = THREE.RepeatWrapping;
                uniforms.sparkle = { value: sparkle };
            }
        }
    }

    function createMat(defines, uniforms, part) {
        const mat = new THREE.ShaderMaterial({
            lights: true,
            // vertexColors: true,
            defines: defines,
            uniforms: Object.assign(Object.assign({}, THREE.UniformsLib.lights), uniforms),
            vertexShader: instance.vertexShader,
            fragmentShader: instance.fragmentShader
        });

        if (defines.IS_BODY) {
            mat.fragmentShader = `#define USE_TANGENT_BASIS\n${mat.fragmentShader}`;
        } else if (part === "Fur") {
            mat.transparent = true;
            mat.side = THREE.DoubleSide;
            mat.depthWrite = false;
        }

        return mat;
    }

    async function applyMats(useThreeMat = null, returnMatsOnly = false) {
        if (!instance.cachedMats) instance.cachedMats = {};

        useThreeMat = useThreeMat !== null ? useThreeMat : instance.useThreeMat;
        const mats = instance.cachedMats[`${instance.skin[0]}${useThreeMat}`] || [];

        if (mats.length > 1) {
            instance.mesh.material = mats;
            return;
        }

        await warmCache();

        for (const part of instance.activeChar.parts) {
            const texPrefix = `${instance.TEXTURES_PATH}${instance.skin[0]}/${instance.skin[1]}${part}`;

            if (useThreeMat) {
                mats.push(new THREE.MeshStandardMaterial({
                    map: await loadTex(`${texPrefix}_D.png`) ||
                         await loadTex(`${instance.TEXTURES_PATH}${instance.charName}/${instance.activeChar.texPrefix}${part}_D.png`)
                }));
                continue;
            }

            const defines = {};

            const uniforms = THREE.UniformsUtils.clone(cfg.DEFAULT_UNIFORMS);
            instance.paletteIndex = applyPaletteUniforms(instance.PALETTES, instance.paletteIndex, uniforms);
            uniforms.base = { value: await loadTex(`${texPrefix}_D.png`) };

            const matData = await getJson(`${texPrefix.replace("T_", "MI_")}.json`);
            const { Scalars: scalars = {}, Colors: colors = {}, Switches: switches = {} } = matData;

            uniforms.useMainTexA = { value: switches.UseMainTexA > 0.5 };

            const emissionColor = colors.EmissionColor;

            if (emissionColor && uniforms.useMainTexA.value && emissionColor.R + emissionColor.G + emissionColor.B > 0)
                uniforms.emissionColor = { value: [emissionColor.R, emissionColor.G, emissionColor.B] };

            uniforms.hasEmission = { value: !!uniforms.emissionColor?.value };

            await applyPartDefinesUniforms(part, texPrefix, matData, defines, uniforms);
            await applyCharDefinesUniforms(part, texPrefix, defines, uniforms);
            await applyUniformsBasedOnDefines(part, defines, uniforms);

            mats.push(createMat(defines, uniforms, part));
        }

        instance.cachedMats[`${instance.skin[0]}${useThreeMat}`] = mats;

        if (returnMatsOnly) return mats;
        else instance.mesh.material = mats;
    }

    return { applyMats };
};