import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

let gltfLoader = new GLTFLoader();

const _playClip = (mixer, clip) => mixer.clipAction(clip).setLoop(THREE.LoopRepeat, Infinity).play();

const _filterTrack = (name, mode, excl, incl) => {
    if (name.startsWith("Root") || name.startsWith("Bip001Head.")) return false;

    const isHair = name.includes("Hair");
    const isIncl = incl.some(bone => name.includes(bone));

    if (mode === "body")
        return !isHair && !isIncl;

    if (mode === "hair")
        return (isHair || isIncl) && !excl.some(bone => name.includes(bone));

    return true;
};

async function _getClip(url, mode = "body", excl = [], incl = []) {
    const gltf = await gltfLoader.loadAsync(url);

    if (mode === "all") {
        excl = incl = [];
    } else {
        excl = excl.map(i => `Bone_Hair${String(i).padStart(3, "0")}`);
        incl = incl.map(i => `Bone_Piao${String(i).padStart(3, "0")}`);
    }

    for (let i = 0; i < 1; i++) { // i < gltf.animations.length
        const anim = gltf.animations[i];
        anim.tracks = anim.tracks.filter(track => _filterTrack(track.name, mode, excl, incl));
    }

    return gltf.animations[0];
}

export async function playAnim(instance) {
    if (!instance.clipCache) instance.clipCache = {};

    instance.mixer?.stopAllAction();

    const mixer = new THREE.AnimationMixer(instance.mesh);

    let clip = instance.clipCache[instance.charName];
    let hairClip = instance.clipCache[`${instance.charName}Hair`];

    if (clip) _playClip(mixer, clip);
    if (hairClip) _playClip(mixer, hairClip);

    if (clip || hairClip) {
        instance.mixer = mixer;
        return;
    }

    const {
        startRot,
        startAnim,
        startPose,
        scale,
        hairAnimSource,
        hairAnimExcl: excl,
        hairAnimIncl: incl
    } = instance.activeChar;

    const isInit = !instance.existingModels[instance.charName];
    const animsPath = `${instance.ANIMS_PATH}${instance.charName}/`;

    if (startAnim) {
        clip = await _getClip(`${animsPath}${startAnim}.glb`, hairAnimSource === "body" ? "all" : "body", excl, incl);
        _playClip(mixer, clip);
        instance.clipCache[instance.charName] = clip;
    } else if (isInit && startPose) {
        instance.mixer?.uncacheRoot(instance.mesh);
        instance.mixer = null;

        const poseData = await (await fetch(`${animsPath}${startPose}.json`)).json();

        for (const [boneName, data] of Object.entries(poseData)) {
            const bone = instance.mesh.skeleton.getBoneByName(boneName);
            if (!bone) continue;

            bone.position.fromArray(data.position).multiplyScalar(scale * 100);
            bone.quaternion.fromArray(data.quaternion);
            bone.scale.fromArray(data.scale);
        }
    }

    if (isInit && startRot) {
        const rootBone = instance.mesh.skeleton.getBoneByName("Bip001Pelvis") || instance.mesh.skeleton.getBoneByName("腰");
        rootBone.rotateZ(THREE.MathUtils.degToRad(startRot.z));
        rootBone.rotateX(THREE.MathUtils.degToRad(startRot.x));
        rootBone.rotateY(THREE.MathUtils.degToRad(startRot.y));
    }

    if (hairAnimSource && hairAnimSource !== "body") {
        hairClip = await _getClip(`${animsPath}${hairAnimSource}.glb`, "hair", excl, incl);
        _playClip(mixer, hairClip);
        instance.clipCache[`${instance.charName}Hair`] = hairClip;
    }

    if (clip || hairClip)
        instance.mixer = mixer;
}