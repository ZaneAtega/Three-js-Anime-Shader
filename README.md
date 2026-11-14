I wanted an anime-style shader that runs on the web but couldn't find one anywhere... So I wrote my own :P

<p align="center"><img width="882" height="498" alt="Anime-Style Shading of 3D Models (Three.js / GLSL)" src="https://github.com/user-attachments/assets/3c42ec11-8031-409d-94ee-3580229a30f0" /></p>
<p><img width="1923" height="2172" alt="Anime-Style Shading of 3D Models (Three.js / GLSL)" src="https://github.com/user-attachments/assets/5b327c86-61d4-4572-beca-1b966302fa7f" /></p>
<p><img width="1923" height="2172" alt="Anime-Style Shading of 3D Models (Three.js / GLSL)" src="https://github.com/user-attachments/assets/0e8f6e81-0e95-41ee-981f-b1af41069be5" /></p>
<p><img width="1923" height="2172" alt="Anime-Style Shading of 3D Models (Three.js / GLSL)" src="https://github.com/user-attachments/assets/92f38c69-25b9-464a-833b-08f1f9b476d0" /></p>

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
