I wanted an anime-style shader that runs on the web but couldn't find one anywhere... So I wrote my own :P

![Anime-Style Shading of 3D Models (Three.js / GLSL)](https://github.com/user-attachments/assets/de98dcf2-a49a-43f6-be5c-d6fde2650033)


## Usage
Just create a ShaderMaterial, set `lights` to `true`, and pass the required uniforms and shaders

Three.js r152:

<details>
<summary>Renderer</summary>

```js
antialias = true;
physicallyCorrectLights = true;
shadowMap.enabled = true;
shadowMap.type = THREE.VSMShadowMap;
toneMapping = THREE.ACESFilmicToneMapping;
toneMappingExposure = 0.3; // Compensating for SMAA/SSAA post-processing, which makes it look overexposed
```
</details>
<details>
<summary>Uniforms</summary>

```js
glossiness: { value: 2.0 },
counterExposure: { value: 0.35 }, // Compensating for SMAA/SSAA post-processing, which makes it look overexposed
saturation: { value: 1.05 },
hairSaturation: { value: 1.025 },

outlineBurnIntensity: { value: 0.2 },
outlineLightInfluence: { value: 0.667 },
outlineMaxBrightness: { value: 0.65 }
```
</details>
<details>
<summary>Miscellaneous</summary>
DirectionalLight.intensity = 0.5;<br>
UnrealBloomPass 0.25, 0.875, 0.425<br>
SMAAPass
</details>

## License
Just show me what you're making with it! (credits appreciated)

## References
* [Mayacoda](https://www.maya-ndljk.com/blog/threejs-basic-toon-shader) - Vertex and Fragment Shaders Foundation<br>
* [Jared Nyts](https://x.com/jared_nyts) WuWa Shader - GT Tonemapping Formula
