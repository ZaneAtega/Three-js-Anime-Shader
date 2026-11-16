import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass.js";

import { config as cfg } from "./config.js";

const NO_OUTLINES = ["Eye", "Tacet", "Fur"];
const jsonCache = {};
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

function getGeometrySize(geometry, mb = true) {
    let bytes = 0;

    for (const attr of Object.values(geometry.attributes))
        bytes += attr.array.byteLength;

    if (geometry.index)
        bytes += geometry.index.array.byteLength;

    return mb ? (bytes / 1024 / 1024).toFixed(2) : bytes;
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

function createProxyGeometry(mesh, step = 1) {
    const positions = mesh.geometry.attributes.position;
    const count = positions.count;

    const pos = new THREE.Vector3();

    const center = new THREE.Vector3();
    for (let i = 0; i < count; i++) center.add(pos.fromBufferAttribute(positions, i));
    center.divideScalar(count);

    const axis = new THREE.Vector3(1, 0, 0);
    const simplified = new Float32Array(Math.ceil(count / step) * 3);
    let ptr = 0;

    for (let i = 0; i < count; i += step) {
        pos.fromBufferAttribute(positions, i);

        pos.sub(center);
        pos.applyAxisAngle(axis, -Math.PI / 2);
        pos.add(center);

        pos.applyMatrix4(mesh.matrixWorld);

        simplified[ptr++] = pos.x;
        simplified[ptr++] = pos.y;
        simplified[ptr++] = pos.z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(simplified, 3));

    /*
    const originalSize = getGeometrySize(mesh.geometry);
    const proxySize = getGeometrySize(geometry);
    console.log(`${originalSize}MB -> ${proxySize}MB (-${((1 - proxySize / originalSize) * 100).toFixed(2)}%)`);
    */

    return new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, visible: false }));
}

async function _getJson(url) {
    if (jsonCache[url])
        return jsonCache[url];

    jsonCache[url] = await fetch(url).then(r => r.ok ? r.json() : {}).catch(() => ({}));

    return jsonCache[url];
}

const _getColor = (c, fallback = [0.0, 0.0, 0.0]) => c ? [c.R, c.G, c.B] : fallback;

async function configureOutlineMats(mats, parts, texPrefix, scale) {
    const prefix = texPrefix.replace("T_", "MI_");
    const hiddenMat = new THREE.MeshBasicMaterial({ visible: false });

    let widths = [];

    for (const i in mats) {
        const mat = mats[i];

        if (NO_OUTLINES.includes(parts[i])) {
            mats[i] = hiddenMat;
            continue;
        }

        mat.defines = { IS_OUTLINE: true };
        mat.side = THREE.BackSide;
        mat.transparent = true;

        const {
            Scalars: scalars = {},
            Colors: colors = {},
            Switches: switches = {}
        } = await _getJson(`${prefix}${parts[i]}_OL.json`);

        const outlineColorTint = _getColor(colors.OutlineColorTint); // [0.2, 0.2, 0.2]
        mat.uniforms.useOutlineColorAsTint = { value: switches.UseMainTex };
        mat.uniforms.outlineColor = { value: switches.UseMainTex ? outlineColorTint : _getColor(colors.OutlineColor, outlineColorTint) };
        if (mat.uniforms.outlineColor.value.every(c => c === 0.0)) mat.defines.USE_COLOR_BURN_OUTLINES = true;

        if (parts[i] === "Bangs") continue;

        mat.uniforms.outlineWidth = { value: scalars.OutlineWidth * scale };
        if (mat.uniforms.outlineWidth.value) widths.push(mat.uniforms.outlineWidth.value);
    }

    if (widths.length < 1) return;

    const avgWidth = widths.reduce((a, b) => a + b, 0) / widths.length;

    for (const i in mats) {
        const mat = mats[i];
        if (NO_OUTLINES.includes(parts[i]) || mat.uniforms.outlineWidth?.value) continue;

        if (parts[i] !== "Bangs") {
            mat.uniforms.outlineWidth.value = avgWidth;
            continue;
        }

        const scalars = await _getJson(`${prefix}${parts[i]}_OL.json`);
        if (!scalars.MinWidth) scalars.MinWidth = 0.03 * scale;
        mat.uniforms.outlineWidth = { value: scalars.MinWidth }; // (scalars.MinWidth + Math.min(...widths)) / 2
    }
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

async function switchMat(instance) {
    document.body.classList.toggle("use-three-mat");

    if (instance.useThreeMat) {
        instance.dirLight.intensity = 1.0;
        instance.ambientLight.intensity = 1.0;

        instance.clone.visible = false;
        instance.headBone.quaternion.identity();
        instance.inf[instance.dict["E_Close"]] = 0;

        for (const suffix of ["_L", "_R", "_Up", "_Down"])
            instance.inf[instance.dict[`Pupil${suffix}`]] = 0;
    } else {
        instance.dirLight.intensity = cfg.DIR_LIGHT_INTENSITY;
        instance.ambientLight.intensity = 1.0;

        instance.clone.visible = true;
    }

    instance.materialApplier.applyMats();
}

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
        if (cMeshMats[i]?.uniforms) Object.assign(cMeshMats[i].uniforms, palette);
    }
}

async function switchSkin(instance, folder, texPrefix, newParts) {
    instance.skin = [folder, texPrefix];

    let mats = instance.cachedMats[`${folder}${instance.useThreeMat}`];

    if (mats) {
        instance.mesh.material = mats;
        instance.cMesh.material = instance.cachedMats[`${folder}Outlines`];
        return;
    }

    mats = instance.cachedMats[`${instance.charName}${instance.useThreeMat}`].map(mat => mat.clone());
    const outlineMats = instance.cachedMats[`${instance.charName}Outlines`].map(mat => mat.clone());

    for (const i in instance.activeChar.parts) {
        const part = instance.activeChar.parts[i];
        if (!newParts.includes(part)) continue;

        mats[i].uniforms.base = { value: await loadTex(`${instance.TEXTURES_PATH}${folder}/${texPrefix}${part}_D.png`) };
        if (part !== "Eye") outlineMats[i].uniforms.base = mats[i].uniforms.base; // NO_OUTLINES
    }

    instance.mesh.material = mats;
    instance.cMesh.material = outlineMats;

    instance.cachedMats[`${folder}${instance.useThreeMat}`] = mats;
    instance.cachedMats[`${folder}Outlines`] = outlineMats;
}

function onWindowResize(camera, renderer, composer, videoBgWrapper) {
    const [w, h] = [window.innerWidth, window.innerHeight];

    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h, false);

    composer.setSize(w, h);

    videoBgWrapper.style.width = w > h ? "100%" : "auto";
    videoBgWrapper.style.height = w > h ? "auto" : "100%";
}

const ApplyMats = (instance) => {
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

    const getAvgColor = (d, n) => {
        return d && n ? [
            (d.R + n.R) / 2,
            (d.G + n.G) / 2,
            (d.B + n.B) / 2
        ] : d ? [d.R, d.G, d.B] : n ? [n.R, n.G, n.B] : null;
    };

    async function applyPartDefinesUniforms(part, texPrefix, matData, defines, uniforms) {
        const { Scalars: scalars = {}, Colors: colors = {} } = matData;

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

                uniforms.subsurfaceColor = { value: _getColor(colors.SubsurfaceColor) }; // [0.863, 0.46, 0.358] // [0.72, 0.51, 0.46]
                uniforms.skinSubsurfaceColor = { value: _getColor(colors.SkinSubsurfaceColor) }; // [0.863, 0.46, 0.358] // [0.72, 0.51, 0.46]

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
        if (!instance.cachedMats) instance.cachedMats = [];

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

            const matData = await _getJson(`${texPrefix.replace("T_", "MI_")}.json`);
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

export { setupThree, setupDepthTarget, getGeometrySize, loadTex, pruneMorphTargets, ApplyMats, configureOutlineMats, postprocessing, createProxyGeometry, isFacingCamera, lerp, switchMat, updatePalette, switchSkin, onWindowResize };