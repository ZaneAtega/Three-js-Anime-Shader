import { lerp } from "../utils/utils.js";

const defaults = { // -Z Forward, Y Up
    useEyeHighlights: true,

    headRotAxis: "x",
    // flipIsFacingCamera: false,
    headRotAxisUpDown: "z",

    // startRot: { x: 0, y: 0, z: 0 },

    camDistAxis: "z",
    camDistMult: 1,
    controlsOffset: { x: 0, y: 0, z: 0 },
    camOffset: { x: 0, y: 0, z: 0 },

    // rotHitbox: false,

    // inheritVoicelines: false,
    // inheritBGM: false
};

export const chars = {
    Iuno: {
        parts: ["Bangs", "Hair", "Face", "Up", "Down", "Alpha", "Eye", "Tacet"],
        texPrefix: "T_R2T1YounuoMd10011",
        scale: 1,

        startAnim: "Calm",
        hairAnimSource: "Shy",

        camDistMult: 1.2,
        controlsOffset: { x: lerp(5, -10, 0.05), y: -2, z: 0 },
        camOffset: { x: lerp(-6, -20, 0.05), y: 0, z: 0 },

        hitboxOffset: { x: 3.5, y: -1, z: 3.875 },

        msg: "Tap me, please?",
        voicelines: [
            "play_favor_word_younuo_atk_heavyatk01_01",
            "play_favor_word_younuo_atk_heavyatk01_03",
            "play_favor_word_younuo_com_fly_01",
            "play_favor_word_younuo_com_openbox_01",
            "play_favor_word_younuo_com_openbox_03",
            "play_favor_word_younuo_skill_exitskill_02",
            "play_favor_word_younuo_skill_exitskill_double_02",
            "play_favor_word_younuo_skill_qte_01",
            "play_favor_word_younuo_skill_qte_02",
            "play_favor_word_younuo_skill_qte_03",
            "play_favor_word_younuo_sys_jointeam_01",
            "play_favor_word_younuo_sys_jointeam_02"
        ]
    },
    Galbrena: {
        parts: ["Bangs", "Hair", "Face", "Up", "Down", "Cloth", "Eye"],
        texPrefix: "T_R2T1CalbrenaMd10011",

        scale: 0.01,
        flipIsFacingCamera: true,

        /*
        startAnim: "Stand",
        camDistMult: 0.95,
        controlsOffset: { x: 5, y: -2, z: 0 },
        camOffset: { x: 7, y: 0, z: 0 },
        hitboxOffset: { x: 4.75, y: -2.5, z: -2.5 },
        */

        startAnim: "Hand-on-Hip",
        hairAnimSource: "body",

        camDistMult: 1,
        controlsOffset: { x: 1.75, y: 0, z: 0 },
        camOffset: { x: 20, y: 0, z: 0 },

        hitboxOffset: { x: 4, y: -3, z: 1.5 },

        msg: "Tap me.",
        introVoicelines: ["play_favor_word_jiabeilina_sys_jointeam_01"],
        voicelines: [
            "play_favor_word_jiabeilina_com_openbox_03",
            "play_favor_word_jiabeilina_com_openbox_03_02",
            "play_favor_word_jiabeilina_sys_gacha",
            "play_favor_word_jiabeilina_sys_rankup03"
        ]
    },
    Denia: { 
        parts: ["Bangs", "Hair", "Face", "Up", "Down", "Cloth", "Fur", "Eye"],
        texPrefix: "T_R2T1DaniyaMd10011",

        scale: 0.01,
        flipIsFacingCamera: true,

        startAnim: "Shy",
        hairAnimSource: "body",
        // hairAnimExcl: [2], // Hair.glb
        // hairAnimIncl: [1, 2, 3, 60, 61, 65, 66], // Hair.glb

        controlsOffset: { x: 8, y: -3, z: 0 },
        camOffset: { x: 8, y: 0, z: 0 },

        rotHitbox: true,
        hitboxOffset: { x: 7.75, y: 85, z: -103.25 },

        msg: "Go ahead, tap me~",
        introVoicelines: ["937", "600-2", "905-1"],
        voicelines: ["015-1", "015-2", "063", "070-1", "070-2", "138", "176", "226", "238", "326", "432", "507-1", "507-2", "507-3", "527", "543", "570", "574", "600-1", "600-3", "662", "673", "863", "905-2"]
    },
    Denia_2: {
        parts: ["Face", "Cloth", "Fx", "Eye", "Bangs", "Hair", "Up", "Down"],
        useEyeHighlights: false,

        startAnim: "Complain",
        camDistMult: 1.1,
        controlsOffset: { x: 3, y: -2, z: 0 },
        camOffset: { x: 4, y: 0, z: 0 },
        hitboxOffset: { x: 3, y: 82, z: -94 },

        msg: "Tap me.",
        introVoicelines: null,
        voicelines: ["138", "226", "527", "673",   "025", "222", "270", "356", "361", "384", "396", "517", "589", "794", "985", "997"]
    },
    Denia_3: {
        parts: ["Body", "Cloth", "Fx", "Hair", "Eye", "Bangs", "Face", "Down"],

        headRotAxis: "y",
        headRotAxisUpDown: "x",

        startPose: "Hand-on-Hip",
        hairAnimSource: null,
        camDistMult: 1.175,
        controlsOffset: { x: 0, y: 0, z: 0 },
        hitboxOffset: { x: -95, y: 80, z: -93.75 },

        inheritVoicelines: true,
        inheritBGM: true
    }
    /*
    Augusta: {
        parts: ["Bangs", "Hair", "Face", "Up", "Down", "Cloth", "Alpha", "Eye", "Tacet"],
        texPrefix: "T_R2T1AogusitaMd10011"
    }
    */
};

for (const [char, v] of Object.entries(chars)) {
    let cfg = { ...defaults, ...v };
    if (cfg.startPose) cfg.startAnim = "";

    const split = char.split('_');

    if (isNaN(split.pop())) {
        cfg.voicelinesPath = char;
        cfg.bgmClass = char.toLowerCase();
        chars[char] = cfg;
        continue;
    }

    const joined = split.join('_');
    cfg = { ...chars[joined], ...cfg };
    cfg.voicelinesPath = cfg.inheritVoicelines ? joined : char
    cfg.bgmClass = (cfg.inheritBGM ? joined : char).toLowerCase();
    chars[char] = cfg;
 }