I wanted an anime-style shader that runs on the web but couldn't find one anywhere... So I wrote my own :P

Note: Assets are downloaded on the first visit. Once cached, pages load in just 1–2 seconds on PC.

<p><img width="1360" height="768" alt="Anime-Style Shading of 3D Models (Three.js / GLSL)" src="https://github.com/user-attachments/assets/f6ea3355-f858-4276-8a8d-657710714c78" /></p>
<details>
<summary>Denia's Arms and Legs</summary>
<p align="center"><img width="882" height="498" alt="Denia's Arms and Legs (Three.js Anime Shader)" src="https://github.com/user-attachments/assets/fe0f1a73-d627-4d26-8bdb-d1b9a31608f6" /></p>
</details>
<p><img width="1360" height="768" alt="Anime-Style Shading of 3D Models (Three.js / GLSL)" src="https://github.com/user-attachments/assets/de91621b-da75-4ec9-b866-0d5c36000d4b" /></p>

## Compatibility URLs
| URL | Rim Lighting | Outlines | Comments |
|:---:|:---:|:---:|:---:|
| [Default](https://zaneatega.github.io/Three-js-Anime-Shader) | Screen-Space | ✅ | Intended appearance |
| [?outlines=false](https://zaneatega.github.io/Three-js-Anime-Shader?outlines=false) | Screen-Space | ❌ | For a few mobile devices |
| [?rim_compat=true](https://zaneatega.github.io/Three-js-Anime-Shader?rim_compat=true) | Fresnel | ✅ | For fewer mobile devices |
| [?outlines=false&rim_compat=true](https://zaneatega.github.io/Three-js-Anime-Shader?outlines=false&rim_compat=true) | Fresnel | ❌ | Likely unnecessary; in my testing across different mobile devices, only one or the other had issues, but never both. |

## Usage
Refer to `src/` and `shaders/` for implementation details

## License
Just show me what you're making with it! (credits appreciated)

## References
* [Mayacoda](https://www.maya-ndljk.com/blog/threejs-basic-toon-shader) - Vertex & Fragment Shaders Foundation
* [LoBeyJon - Anime Face Shadow in Unity URP](https://www.youtube.com/watch?v=LKR1ITdOeKM)
* [encore.moe](https://encore.moe/)
    * Hair Shading
    * Depth-Based Edge Detection
    * Helped me figure out how some textures are meant to be used
* [Jonn](https://wheresjonn.gumroad.com/) - Went over his shader in Blender to get a general idea of how Denia's arms and legs worked
* Game Assets: HoyoToon, sentination1999, encore.moe, & startorch.academy - Saved me quite a bit of time compared to digging through game files in FModel
