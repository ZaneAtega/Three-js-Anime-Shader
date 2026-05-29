I wanted an anime-style shader that runs on the web but couldn't find one anywhere... So I wrote my own :P

<p align="center"><img width="882" height="498" alt="000000 cwopy" src="https://github.com/user-attachments/assets/3c42ec11-8031-409d-94ee-3580229a30f0" /></p>
<p><img width="1923" height="2172" alt="Anime-Style Shading of 3D Models (Three.js / GLSL)" src="https://github.com/user-attachments/assets/5b327c86-61d4-4572-beca-1b966302fa7f" /></p>
<p><img width="1923" height="2172" alt="Anime-Style Shading of 3D Models (Three.js / GLSL)" src="https://github.com/user-attachments/assets/0e8f6e81-0e95-41ee-981f-b1af41069be5" /></p>
<p><img width="1923" height="2172" alt="Anime-Style Shading of 3D Models (Three.js / GLSL)" src="https://github.com/user-attachments/assets/92f38c69-25b9-464a-833b-08f1f9b476d0" /></p>

## Usage
Just create a ShaderMaterial, set `lights` to `true`, and pass the required uniforms and shaders

<details>
<summary>Additional ShaderMaterial settings for fur</summary>

```js
material.transparent = true;
material.side = THREE.DoubleSide;
material.depthWrite = false;
```
</details>

Three.js r152:

<details>
<summary>Renderer</summary>

```js
antialias = true;
physicallyCorrectLights = true;
toneMapping = THREE.ACESFilmicToneMapping;
toneMappingExposure = 0.3; // Compensating for SMAA/SSAA post-processing, which makes it look overexposed
```
</details>
<details>
<summary>Uniforms</summary>

```js
glossiness: { value: 2.0 },

rimThreshold: { value: 0.2 },
rimAmount: { value: 0.6 },

// Compensating for SMAA/SSAA post-processing, which makes it look overexposed
counterExposure: { value: 0.35 }, 
gamma: { 2.0875 },

saturation: { value: 1.05 },
hairSaturation: { value: 1.025 },

outlineBurnIntensity: { value: 0.2 },
outlineLightInfluence: { value: 0.667 },
outlineMaxBrightness: { value: 0.3 }
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
* [Mayacoda](https://www.maya-ndljk.com/blog/threejs-basic-toon-shader) - Vertex & Fragment Shaders Foundation<br>
* [Jared Nyts](https://x.com/jared_nyts) WuWa Shader - MatCap Texture & GT Tonemapping Formula
* [Jonn](https://wheresjonn.gumroad.com/) - Went over his shader in Blender to get a general idea of how Denia's arms and legs worked
