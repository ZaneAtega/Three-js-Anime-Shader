import * as THREE from "three";

let maxAnisotropy;

function setAnisotropy(renderer) {
    maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
}

function loadTex(url, colorSpace = THREE.SRGBColorSpace) {
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
                tex.flipY = !url.endsWith("_Skin.png");
                resolve(tex);
            },
            undefined,
            () => resolve(null)
        );
    });
}

export { setAnisotropy, loadTex };