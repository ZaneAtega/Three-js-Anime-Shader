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

async function getJson(url) {
    if (jsonCache[url])
        return jsonCache[url];

    jsonCache[url] = await fetch(url).then(r => r.ok ? r.json() : {}).catch(() => ({}));

    return jsonCache[url];
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

const getColor = (c, fallback = [0.0, 0.0, 0.0]) => c ? [c.R, c.G, c.B] : fallback;

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
        } = await getJson(`${prefix}${parts[i]}_OL.json`);

        const outlineColorTint = getColor(colors.OutlineColorTint); // [0.2, 0.2, 0.2]
        mat.uniforms.useOutlineColorAsTint = { value: switches.UseMainTex };
        mat.uniforms.outlineColor = { value: switches.UseMainTex ? outlineColorTint : getColor(colors.OutlineColor, outlineColorTint) };
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

        const scalars = await getJson(`${prefix}${parts[i]}_OL.json`);
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
        if (!NO_OUTLINES.includes(part)) outlineMats[i].uniforms.base = mats[i].uniforms.base;
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

export {
    setupThree, setupDepthTarget,
    getGeometrySize, pruneMorphTargets,
    getJson, loadTex, getColor, configureOutlineMats,
    postprocessing,
    createProxyGeometry,
    isFacingCamera, lerp,
    switchMat, updatePalette, switchSkin,
    onWindowResize
};