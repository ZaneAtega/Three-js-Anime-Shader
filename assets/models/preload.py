from pathlib import Path

CHAR = "Denia"
PRELOAD_AS = "<link rel=preload as="
TEXTURES_URL = "assets/models/textures/"

TEXTURES = [
    "T_HairNoise_M",
    "T_FemaleMFace01_SDF", "Face_OutlineMask",
    "Eyes/T_HDMF_EM", "Eyes/T_Highlight_1", "Eyes/BottomHighlight_1",
    "CharacterCubeMaps/T_MC_premake_D"
]

if CHAR.startswith("Denia"):
    TEXTURES.extend(["T_Sparkle_SDF", "T_Wenli_10025", "T_Wenli_230046", "T_Fur_M"])

html = f"{PRELOAD_AS}fetch href=assets/models/{CHAR}.fbx crossorigin>"

for tex in TEXTURES:
    html += f"{PRELOAD_AS}image href={TEXTURES_URL}{tex}.png crossorigin>"

for file in (Path.cwd() / "textures" / CHAR).iterdir():
    html += f"{PRELOAD_AS}{'fetch' if file.suffix == '.json' else 'image'} href={TEXTURES_URL}{CHAR}/{file.name} crossorigin>"

print(html)