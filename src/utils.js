import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass.js";

import { config as cfg } from "./config.js";

let maxAnisotropy;

function setupThree(instance) {
    const scene = new THREE.Scene();
    scene.background = null;

    instance.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight);
    scene.add(instance.camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.physicallyCorrectLights = true;
    instance.renderer = renderer;

    maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    instance.canvas = renderer.domElement;
    document.querySelector(".menu").insertAdjacentElement("afterend", instance.canvas);

    instance.controls = new OrbitControls(instance.camera, instance.canvas);
    instance.controls.mouseButtons = {
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.PAN,
        RIGHT: THREE.MOUSE.PAN
    };

    instance.dirLight = new THREE.DirectionalLight(0xFFFFFF, instance.useThreeMat ? 1.0 : cfg.DIR_LIGHT_INTENSITY);
    instance.ambientLight = new THREE.AmbientLight(0xFFFFFF);
    scene.add(instance.dirLight, instance.ambientLight);

    instance.dirLightHelper = new THREE.DirectionalLightHelper(instance.dirLight, 10, 0xFFFFFF);
    instance.dirLightHelper.visible = false;
    scene.add(instance.dirLightHelper);

    instance.scene = scene;
}

function setupDepthTarget(instance) {
    instance.depthTarget = new THREE.WebGLRenderTarget(1, 1, {
        depthBuffer: true,
        depthTexture: new THREE.DepthTexture(1, 1)
    });

    cfg.DEFAULT_UNIFORMS.rimDepth.value = instance.depthTarget.depthTexture;

    instance.depthMaterial = new THREE.MeshBasicMaterial({
        colorWrite: false,
        side: THREE.DoubleSide
    });
}

function loadTex(url, colorSpace = THREE.SRGBColorSpace, flipY = true) {
    return new Promise((resolve) => {
        new THREE.TextureLoader().load(
            url,
            (tex) => {
                if (colorSpace === false)
                    colorSpace = THREE.NoColorSpace;

                tex.colorSpace = colorSpace;

                if (colorSpace === THREE.NoColorSpace) {
                    tex.generateMipmaps = false;
                    tex.minFilter = THREE.LinearFilter;
                }

                tex.anisotropy = maxAnisotropy;
                tex.flipY = url.endsWith("_Skin.png") ? false : flipY;
                resolve(tex);
            },
            undefined,
            () => resolve(null)
        );
    });
}

function pruneMorphTargets(mesh, keep) {
    const morphs = mesh.geometry.morphAttributes.position;
    const names = mesh.morphTargetDictionary;

    const empty = new THREE.BufferAttribute(new Float32Array(mesh.geometry.attributes.position.array.length), 3);

    for (let name in names) {
        if (keep.has(name)) continue;

        const oldBuffer = morphs[names[name]];
        morphs[names[name]] = empty;
        if (oldBuffer?.array) oldBuffer.array = null;
    }

    mesh.geometry.needsUpdate = true;
}

function postprocessing(instance) {
    instance.composer = new EffectComposer(instance.renderer);
    instance.composer.addPass(new RenderPass(instance.scene, instance.camera));

    instance.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.275, // strength // 0.25 0.35 // 0.325 0.275
        0.95, // radius // 0.875
        0.4 // threshold // 0.425
    );
    instance.bloomPass.renderToScreen = false;
    instance.composer.addPass(instance.bloomPass);

    const aaPass = new SMAAPass();
    aaPass.renderToScreen = true;
    instance.composer.addPass(aaPass);

    instance.renderer.outputEncoding = THREE.sRGBEncoding;
    instance.renderer.outputColorSpace = THREE.SRGBColorSpace;
}

function isFacingCamera(camera, mesh, flip) {
    const directionToCamera = new THREE.Vector3()
        .subVectors(camera.position, mesh.position)
        .normalize();

    const meshForward = new THREE.Vector3(0, 1, 0)
        .applyQuaternion(mesh.getWorldQuaternion(new THREE.Quaternion()));

    const dot = directionToCamera.dot(meshForward);

    return flip ? dot <= 0 : dot > 0;
}

const lerp = (a, b, n) => (1 - n) * a + n * b;

function updatePalette(useThreeMat, palette, meshMats, cMeshMats) {
    if (useThreeMat) return;

    palette = {
        lightTint: { value: new THREE.Color(palette.lightTint) },
        rimTint: { value: new THREE.Color(palette.rimTint) },
        ambientTint: { value: new THREE.Color(palette.ambientTint) },
        shadowTint: { value: new THREE.Color(palette.shadowTint) },
        tintStrength: { value: palette.tintStrength },
        isWarmPalette: { value: !palette.isCool }
    };

    for (const i in meshMats) {
        Object.assign(meshMats[i].uniforms, palette);
        if (cMeshMats[i].uniforms) Object.assign(cMeshMats[i].uniforms, palette);
    }
}

function onWindowResize(instance) {
    const [w, h] = [window.innerWidth, window.innerHeight];

    instance.camera.aspect = w / h;
    instance.camera.updateProjectionMatrix();

    instance.bloomPass.setSize(w, h);

    instance.renderer.setSize(w, h, false);
    instance.renderer.setPixelRatio(window.devicePixelRatio);

    instance.videoBgWrapper.style.width = w > h ? "100%" : "auto";
    instance.videoBgWrapper.style.height = w > h ? "auto" : " 100%";
}

const ApplyMats = (instance) => {
    function applyPaletteUniforms(palettes, paletteIndex, uniforms) {
        if (paletteIndex === undefined) {
            const hr = new Date().getHours();
            paletteIndex = (hr > 6 && hr < 18) ? 2 : 3;
        }
        const palette = palettes[paletteIndex];

        for (const tint of ["lightTint", "rimTint", "ambientTint", "shadowTint"])
            uniforms[tint] = { value: new THREE.Color(palette[tint]) };

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

    const getColor = (c, fallback = [0.0, 0.0, 0.0]) => c ? [c.R, c.G, c.B] : fallback;

    const getAvgColor = (d, n) => {
        return d && n ? [
            (d.R + n.R) / 2,
            (d.G + n.G) / 2,
            (d.B + n.B) / 2
        ] : d ? [d.R, d.G, d.B] : n ? [n.R, n.G, n.B] : null;
    };

    async function applyPartDefinesUniforms(part, texPrefix, matData, defines, uniforms) {
        const { Scalars: scalars = {}, Colors: colors = {}, Switches: switches = {}, Textures: textures = {} } = matData;

        switch (part) {
            case "Face":
                defines.IS_FACE = true;

                uniforms.eyebrowsHet = { value: await loadTex(`${texPrefix}_EyebrowsHET.png`, false) };
                uniforms.faceSdf = { value: await loadTex(`${instance.TEXTURES_PATH}T_FemaleMFace01_SDF.png`, false) };
                uniforms.outlineMask = { value: await loadTex(`${instance.TEXTURES_PATH}Face_OutlineMask.png`, false) };

                break;
            case "Eye":
                defines.IS_EYE = true;
                texPrefix = `${instance.TEXTURES_PATH}Eyes/`;

                uniforms.eyeEm = { value: await loadTex(`${texPrefix}T_HDMF_EM.png`, false) };
                uniforms.eyeDepth = { value: 1.5 * (scalars.ParallaxHeight ?? 0.1) };

                uniforms.useEyeHighlights = { value: instance.charName !== "Denia_2" };
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

                uniforms.subsurfaceColor = { value: getColor(colors.SubsurfaceColor) }; // [0.3372, 0.3712, 0.5029]
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
            defines: defines,
            uniforms: Object.assign(Object.assign({}, THREE.UniformsLib.lights), uniforms),
            vertexShader: instance.vertexShader,
            fragmentShader: instance.fragmentShader
        });

        if (cfg.USE_SCREEN_SPACE_RIM)
            mat.fragmentShader = `#define USE_SCREEN_SPACE_RIM\n${mat.fragmentShader}`;

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
        useThreeMat = useThreeMat !== null ? useThreeMat : instance.useThreeMat;
        const mats = instance.cachedMats[`${instance.skin[0]}${useThreeMat}`] || [];

        if (mats.length > 1) {
            instance.mesh.material = mats;
            return;
        }

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

            const matDataPrefix = texPrefix.replace("T_", "MI_");
            let matData;

            const {
                Scalars: scalars = {},
                Colors: colors = {},
                Switches: switches = {},
                Textures: textures = {}
            } = matData = await (async () => {
                for (const suffix of ["", "1", "01", "2", "02"]) {
                    try {
                        const r = await fetch(`${matDataPrefix}${suffix}.json`);
                        if (r.ok) return await r.json();
                    } catch {}
                }
                return {};
            })();

            uniforms.useMainTexA = { value: switches.UseMainTexA > 0.5 };

            const emissionColor = colors.EmissionColor;

            if (emissionColor && switches.UseMainTexA && emissionColor.R + emissionColor.G + emissionColor.B > 0)
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

export { setupThree, setupDepthTarget, loadTex, pruneMorphTargets, ApplyMats, postprocessing, isFacingCamera, lerp, updatePalette, onWindowResize };