(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i) if (s.type === "childList") for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: true, subtree: true });
  function t(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(i) {
    if (i.ep) return;
    i.ep = true;
    const s = t(i);
    fetch(i.href, s);
  }
})();
/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const Ia = "152", Wn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, gi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Zh = 0, zo = 1, Kh = 2, gf = 3, vf = 0, Tl = 1, Jh = 2, mn = 3, Dn = 0, Ot = 1, cn = 2, yf = 2, Ln = 0, Ti = 1, wa = 2, ko = 3, Ho = 4, Qh = 5, yi = 100, $h = 101, eu = 102, Go = 103, Vo = 104, tu = 200, nu = 201, iu = 202, su = 203, El = 204, Al = 205, ru = 206, au = 207, ou = 208, lu = 209, cu = 210, hu = 0, uu = 1, du = 2, Ta = 3, fu = 4, pu = 5, mu = 6, xu = 7, or = 0, gu = 1, vu = 2, xn = 0, yu = 1, _u = 2, Mu = 3, bu = 4, Su = 5, Da = 300, Qn = 301, $n = 302, ds = 303, js = 304, ys = 306, Un = 1e3, Tt = 1001, Zs = 1002, at = 1003, Ea = 1004, _f = 1004, Hs = 1005, Mf = 1005, ct = 1006, Rl = 1007, bf = 1007, ei = 1008, Sf = 1008, ti = 1009, wu = 1010, Tu = 1011, Cl = 1012, Eu = 1013, qn = 1014, Pn = 1015, fs = 1016, Au = 1017, Ru = 1018, Ei = 1020, Cu = 1021, Wt = 1023, Pu = 1024, Lu = 1025, Zn = 1026, Ci = 1027, Iu = 1028, Du = 1029, Uu = 1030, Fu = 1031, Ou = 1033, xa = 33776, ga = 33777, va = 33778, ya = 33779, Wo = 35840, Xo = 35841, qo = 35842, Yo = 35843, Nu = 36196, jo = 37492, Zo = 37496, Ko = 37808, Jo = 37809, Qo = 37810, $o = 37811, el = 37812, tl = 37813, nl = 37814, il = 37815, sl = 37816, rl = 37817, al = 37818, ol = 37819, ll = 37820, cl = 37821, _a = 36492, Bu = 36283, hl = 36284, ul = 36285, dl = 36286, zu = 2200, ku = 2201, Hu = 2202, Ks = 2300, Js = 2301, Ma = 2302, Mi = 2400, bi = 2401, Qs = 2402, Ua = 2500, Pl = 2501, wf = 0, Tf = 1, Ef = 2, Ll = 3e3, In = 3001, Gu = 3200, Vu = 3201, ni = 0, Wu = 1, Kn = "", Ue = "srgb", hn = "srgb-linear", Il = "display-p3", Af = 0, ba = 7680, Rf = 7681, Cf = 7682, Pf = 7683, Lf = 34055, If = 34056, Df = 5386, Uf = 512, Ff = 513, Of = 514, Nf = 515, Bf = 516, zf = 517, kf = 518, Xu = 519, $s = 35044, Hf = 35048, Gf = 35040, Vf = 35045, Wf = 35049, Xf = 35041, qf = 35046, Yf = 35050, jf = 35042, Zf = "100", fl = "300 es", Aa = 1035;
class yn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return false;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const Rt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let gc = 1234567;
const Ai = Math.PI / 180, ps = 180 / Math.PI;
function Yt() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Rt[r & 255] + Rt[r >> 8 & 255] + Rt[r >> 16 & 255] + Rt[r >> 24 & 255] + "-" + Rt[e & 255] + Rt[e >> 8 & 255] + "-" + Rt[e >> 16 & 15 | 64] + Rt[e >> 24 & 255] + "-" + Rt[t & 63 | 128] + Rt[t >> 8 & 255] + "-" + Rt[t >> 16 & 255] + Rt[t >> 24 & 255] + Rt[n & 255] + Rt[n >> 8 & 255] + Rt[n >> 16 & 255] + Rt[n >> 24 & 255]).toLowerCase();
}
function ht(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Dl(r, e) {
  return (r % e + e) % e;
}
function Kf(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function Jf(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Gs(r, e, t) {
  return (1 - t) * r + t * e;
}
function Qf(r, e, t, n) {
  return Gs(r, e, 1 - Math.exp(-t * n));
}
function $f(r, e = 1) {
  return e - Math.abs(Dl(r, e * 2) - e);
}
function ep(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function tp(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function np(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function ip(r, e) {
  return r + Math.random() * (e - r);
}
function sp(r) {
  return r * (0.5 - Math.random());
}
function rp(r) {
  r !== void 0 && (gc = r);
  let e = gc += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function ap(r) {
  return r * Ai;
}
function op(r) {
  return r * ps;
}
function pl(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function qu(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Yu(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function lp(r, e, t, n, i) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), l = a(t / 2), c = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), d = a((e - n) / 2), f = s((n - e) / 2), m = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * h, l * u, l * d, o * c);
      break;
    case "YZY":
      r.set(l * d, o * h, l * u, o * c);
      break;
    case "ZXZ":
      r.set(l * u, l * d, o * h, o * c);
      break;
    case "XZX":
      r.set(o * h, l * m, l * f, o * c);
      break;
    case "YXY":
      r.set(l * f, o * h, l * m, o * c);
      break;
    case "ZYZ":
      r.set(l * m, l * f, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Xt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function He(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Qt = { DEG2RAD: Ai, RAD2DEG: ps, generateUUID: Yt, clamp: ht, euclideanModulo: Dl, mapLinear: Kf, inverseLerp: Jf, lerp: Gs, damp: Qf, pingpong: $f, smoothstep: ep, smootherstep: tp, randInt: np, randFloat: ip, randFloatSpread: sp, seededRandom: rp, degToRad: ap, radToDeg: op, isPowerOfTwo: pl, ceilPowerOfTwo: qu, floorPowerOfTwo: Yu, setQuaternionFromProperEuler: lp, normalize: He, denormalize: Xt };
class W {
  constructor(e = 0, t = 0) {
    W.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ht(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class We {
  constructor() {
    We.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  }
  set(e, t, n, i, s, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], f = n[5], m = n[8], g = i[0], x = i[3], p = i[6], _ = i[1], v = i[4], M = i[7], w = i[2], S = i[5], y = i[8];
    return s[0] = a * g + o * _ + l * w, s[3] = a * x + o * v + l * S, s[6] = a * p + o * M + l * y, s[1] = c * g + h * _ + u * w, s[4] = c * x + h * v + u * S, s[7] = c * p + h * M + u * y, s[2] = d * g + f * _ + m * w, s[5] = d * x + f * v + m * S, s[8] = d * p + f * M + m * y, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * s * h + n * o * l + i * s * c - i * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * a - o * c, d = o * l - h * s, f = c * s - a * l, m = t * u + n * d + i * f;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / m;
    return e[0] = u * g, e[1] = (i * c - h * n) * g, e[2] = (o * n - i * a) * g, e[3] = d * g, e[4] = (h * t - i * l) * g, e[5] = (i * s - o * t) * g, e[6] = f * g, e[7] = (n * l - c * t) * g, e[8] = (a * t - n * s) * g, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -i * c, i * l, -i * (-c * a + l * o) + o + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(eo.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(eo.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(eo.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const eo = new We();
function ju(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return true;
  return false;
}
const cp = { Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array };
function os(r, e) {
  return new cp[r](e);
}
function er(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
const vc = {};
function Vs(r) {
  r in vc || (vc[r] = true, console.warn(r));
}
function hs(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function to(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const hp = new We().fromArray([0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7, 1e-7, 0.9105199]), up = new We().fromArray([1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7, 0, 1.0982735]);
function dp(r) {
  return r.convertSRGBToLinear().applyMatrix3(up);
}
function fp(r) {
  return r.applyMatrix3(hp).convertLinearToSRGB();
}
const pp = { [hn]: (r) => r, [Ue]: (r) => r.convertSRGBToLinear(), [Il]: dp }, mp = { [hn]: (r) => r, [Ue]: (r) => r.convertLinearToSRGB(), [Il]: fp }, Kt = { enabled: true, get legacyMode() {
  return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
}, set legacyMode(r) {
  console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !r;
}, get workingColorSpace() {
  return hn;
}, set workingColorSpace(r) {
  console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
}, convert: function(r, e, t) {
  if (this.enabled === false || e === t || !e || !t) return r;
  const n = pp[e], i = mp[t];
  if (n === void 0 || i === void 0) throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
  return i(n(r));
}, fromWorkingColorSpace: function(r, e) {
  return this.convert(r, this.workingColorSpace, e);
}, toWorkingColorSpace: function(r, e) {
  return this.convert(r, e, this.workingColorSpace);
} };
let Bi;
class Ul {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Bi === void 0 && (Bi = er("canvas")), Bi.width = e.width, Bi.height = e.height;
      const n = Bi.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Bi;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = er("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let a = 0; a < s.length; a++) s[a] = hs(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(hs(t[n] / 255) * 255) : t[n] = hs(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class Si {
  constructor(e = null) {
    this.isSource = true, this.uuid = Yt(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++) i[a].isDataTexture ? s.push(no(i[a].image)) : s.push(no(i[a]));
      } else s = no(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function no(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Ul.getDataURL(r) : r.data ? { data: Array.from(r.data), width: r.width, height: r.height, type: r.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let xp = 0;
class rt extends yn {
  constructor(e = rt.DEFAULT_IMAGE, t = rt.DEFAULT_MAPPING, n = Tt, i = Tt, s = ct, a = ei, o = Wt, l = ti, c = rt.DEFAULT_ANISOTROPY, h = Kn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: xp++ }), this.uuid = Yt(), this.name = "", this.source = new Si(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new W(0, 0), this.repeat = new W(1, 1), this.center = new W(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new We(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === In ? Ue : Kn), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.needsPMREMUpdate = false;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Da) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Un:
        e.x = e.x - Math.floor(e.x);
        break;
      case Tt:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case Zs:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Un:
        e.y = e.y - Math.floor(e.y);
        break;
      case Tt:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case Zs:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  get encoding() {
    return Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Ue ? In : Ll;
  }
  set encoding(e) {
    Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === In ? Ue : Kn;
  }
}
rt.DEFAULT_IMAGE = null;
rt.DEFAULT_MAPPING = Da;
rt.DEFAULT_ANISOTROPY = 1;
class $e {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    $e.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], f = l[5], m = l[9], g = l[2], x = l[6], p = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - g) < 0.01 && Math.abs(m - x) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + g) < 0.1 && Math.abs(m + x) < 0.1 && Math.abs(c + f + p - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2, M = (f + 1) / 2, w = (p + 1) / 2, S = (h + d) / 4, y = (u + g) / 4, R = (m + x) / 4;
      return v > M && v > w ? v < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(v), i = S / n, s = y / n) : M > w ? M < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(M), n = S / i, s = R / i) : w < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(w), n = y / s, i = R / s), this.set(n, i, s, t), this;
    }
    let _ = Math.sqrt((x - m) * (x - m) + (u - g) * (u - g) + (d - h) * (d - h));
    return Math.abs(_) < 1e-3 && (_ = 1), this.x = (x - m) / _, this.y = (u - g) / _, this.z = (d - h) / _, this.w = Math.acos((c + f + p - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Et extends yn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new $e(0, 0, e, t), this.scissorTest = false, this.viewport = new $e(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (Vs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === In ? Ue : Kn), this.texture = new rt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.flipY = false, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : false, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ct, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : true, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : false, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = true;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Si(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Fa extends rt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = at, this.minFilter = at, this.wrapR = Tt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class gp extends Et {
  constructor(e = 1, t = 1, n = 1) {
    super(e, t), this.isWebGLArrayRenderTarget = true, this.depth = n, this.texture = new Fa(null, e, t, n), this.texture.isRenderTargetTexture = true;
  }
}
class Fl extends rt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = at, this.minFilter = at, this.wrapR = Tt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class vp extends Et {
  constructor(e = 1, t = 1, n = 1) {
    super(e, t), this.isWebGL3DRenderTarget = true, this.depth = n, this.texture = new Fl(null, e, t, n), this.texture.isRenderTargetTexture = true;
  }
}
class yp extends Et {
  constructor(e = 1, t = 1, n = 1, i = {}) {
    super(e, t, i), this.isWebGLMultipleRenderTargets = true;
    const s = this.texture;
    this.texture = [];
    for (let a = 0; a < n; a++) this.texture[a] = s.clone(), this.texture[a].isRenderTargetTexture = true;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, s = this.texture.length; i < s; i++) this.texture[i].image.width = e, this.texture[i].image.height = t, this.texture[i].image.depth = n;
      this.dispose();
    }
    return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this;
  }
  copy(e) {
    this.dispose(), this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.texture.length = 0;
    for (let t = 0, n = e.texture.length; t < n; t++) this.texture[t] = e.texture[t].clone(), this.texture[t].isRenderTargetTexture = true;
    return this;
  }
}
class mt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = s[a + 0], f = s[a + 1], m = s[a + 2], g = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = f, e[t + 2] = m, e[t + 3] = g;
      return;
    }
    if (u !== g || l !== d || c !== f || h !== m) {
      let x = 1 - o;
      const p = l * d + c * f + h * m + u * g, _ = p >= 0 ? 1 : -1, v = 1 - p * p;
      if (v > Number.EPSILON) {
        const w = Math.sqrt(v), S = Math.atan2(w, p * _);
        x = Math.sin(x * S) / w, o = Math.sin(o * S) / w;
      }
      const M = o * _;
      if (l = l * x + d * M, c = c * x + f * M, h = h * x + m * M, u = u * x + g * M, x === 1 - o) {
        const w = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= w, c *= w, h *= w, u *= w;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = s[a], d = s[a + 1], f = s[a + 2], m = s[a + 3];
    return e[t] = o * m + h * u + l * f - c * d, e[t + 1] = l * m + h * d + c * u - o * f, e[t + 2] = c * m + h * f + o * d - l * u, e[t + 3] = h * m - o * u - l * d - c * f, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), u = o(s / 2), d = l(n / 2), f = l(i / 2), m = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u - d * f * m;
        break;
      case "YXZ":
        this._x = d * h * u + c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u + d * f * m;
        break;
      case "ZXY":
        this._x = d * h * u - c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u - d * f * m;
        break;
      case "ZYX":
        this._x = d * h * u - c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u + d * f * m;
        break;
      case "YZX":
        this._x = d * h * u + c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u - d * f * m;
        break;
      case "XZY":
        this._x = d * h * u - c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u + d * f * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t !== false && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + o + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - l) * f, this._y = (s - c) * f, this._z = (a - i) * f;
    } else if (n > o && n > u) {
      const f = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / f, this._x = 0.25 * f, this._y = (i + a) / f, this._z = (s + c) / f;
    } else if (o > u) {
      const f = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - c) / f, this._x = (i + a) / f, this._y = 0.25 * f, this._z = (l + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / f, this._x = (s + c) / f, this._y = (l + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ht(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + i * c - s * l, this._y = i * h + a * l + s * o - n * c, this._z = s * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const f = 1 - t;
      return this._w = f * a + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(t * Math.cos(i), n * Math.sin(s), n * Math.cos(s), t * Math.sin(i));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class A {
  constructor(e = 0, t = 0, n = 0) {
    A.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(yc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(yc.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = l * t + a * i - o * n, h = l * n + o * t - s * i, u = l * i + s * n - a * t, d = -s * t - a * n - o * i;
    return this.x = c * l + d * -s + h * -o - u * -a, this.y = h * l + d * -a + u * -s - c * -o, this.z = u * l + d * -o + c * -a - h * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = i * l - s * o, this.y = s * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return io.copy(this).projectOnVector(e), this.sub(io);
  }
  reflect(e) {
    return this.sub(io.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ht(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const io = new A(), yc = new mt();
class en {
  constructor(e = new A(1 / 0, 1 / 0, 1 / 0), t = new A(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Sn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Sn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Sn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    if (e.updateWorldMatrix(false, false), e.boundingBox !== void 0) e.boundingBox === null && e.computeBoundingBox(), zi.copy(e.boundingBox), zi.applyMatrix4(e.matrixWorld), this.union(zi);
    else {
      const i = e.geometry;
      if (i !== void 0) if (t && i.attributes !== void 0 && i.attributes.position !== void 0) {
        const s = i.attributes.position;
        for (let a = 0, o = s.count; a < o; a++) Sn.fromBufferAttribute(s, a).applyMatrix4(e.matrixWorld), this.expandByPoint(Sn);
      } else i.boundingBox === null && i.computeBoundingBox(), zi.copy(i.boundingBox), zi.applyMatrix4(e.matrixWorld), this.union(zi);
    }
    const n = e.children;
    for (let i = 0, s = n.length; i < s; i++) this.expandByObject(n[i], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Sn), Sn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(Rs), Er.subVectors(this.max, Rs), ki.subVectors(e.a, Rs), Hi.subVectors(e.b, Rs), Gi.subVectors(e.c, Rs), Bn.subVectors(Hi, ki), zn.subVectors(Gi, Hi), ci.subVectors(ki, Gi);
    let t = [0, -Bn.z, Bn.y, 0, -zn.z, zn.y, 0, -ci.z, ci.y, Bn.z, 0, -Bn.x, zn.z, 0, -zn.x, ci.z, 0, -ci.x, -Bn.y, Bn.x, 0, -zn.y, zn.x, 0, -ci.y, ci.x, 0];
    return !so(t, ki, Hi, Gi, Er) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !so(t, ki, Hi, Gi, Er)) ? false : (Ar.crossVectors(Bn, zn), t = [Ar.x, Ar.y, Ar.z], so(t, ki, Hi, Gi, Er));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Sn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Sn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (bn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), bn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), bn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), bn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), bn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), bn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), bn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), bn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(bn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const bn = [new A(), new A(), new A(), new A(), new A(), new A(), new A(), new A()], Sn = new A(), zi = new en(), ki = new A(), Hi = new A(), Gi = new A(), Bn = new A(), zn = new A(), ci = new A(), Rs = new A(), Er = new A(), Ar = new A(), hi = new A();
function so(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    hi.fromArray(r, s);
    const o = i.x * Math.abs(hi.x) + i.y * Math.abs(hi.y) + i.z * Math.abs(hi.z), l = e.dot(hi), c = t.dot(hi), h = n.dot(hi);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return false;
  }
  return true;
}
const _p = new en(), Cs = new A(), ro = new A();
class un {
  constructor(e = new A(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : _p.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++) i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    Cs.subVectors(e, this.center);
    const t = Cs.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Cs, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (ro.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Cs.copy(e.center).add(ro)), this.expandByPoint(Cs.copy(e.center).sub(ro))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const wn = new A(), ao = new A(), Rr = new A(), kn = new A(), oo = new A(), Cr = new A(), lo = new A();
class lr {
  constructor(e = new A(), t = new A(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, wn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = wn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (wn.copy(this.origin).addScaledVector(this.direction, t), wn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ao.copy(e).add(t).multiplyScalar(0.5), Rr.copy(t).sub(e).normalize(), kn.copy(this.origin).sub(ao);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Rr), o = kn.dot(this.direction), l = -kn.dot(Rr), c = kn.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, f, m;
    if (h > 0) if (u = a * l - o, d = a * o - l, m = s * h, u >= 0) if (d >= -m) if (d <= m) {
      const g = 1 / h;
      u *= g, d *= g, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c;
    } else d = s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c;
    else d = -s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c;
    else d <= -m ? (u = Math.max(0, -(-a * s + o)), d = u > 0 ? -s : Math.min(Math.max(-s, -l), s), f = -u * u + d * (d + 2 * l) + c) : d <= m ? (u = 0, d = Math.min(Math.max(-s, -l), s), f = d * (d + 2 * l) + c) : (u = Math.max(0, -(a * s + o)), d = u > 0 ? s : Math.min(Math.max(-s, -l), s), f = -u * u + d * (d + 2 * l) + c);
    else d = a > 0 ? -s : s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(ao).addScaledVector(Rr, d), f;
  }
  intersectSphere(e, t) {
    wn.subVectors(e.center, this.origin);
    const n = wn.dot(this.direction), i = wn.dot(wn) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (s = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, wn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    oo.subVectors(t, e), Cr.subVectors(n, e), lo.crossVectors(oo, Cr);
    let a = this.direction.dot(lo), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    kn.subVectors(this.origin, e);
    const l = o * this.direction.dot(Cr.crossVectors(kn, Cr));
    if (l < 0) return null;
    const c = o * this.direction.dot(oo.cross(kn));
    if (c < 0 || l + c > a) return null;
    const h = -o * kn.dot(lo);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class _e {
  constructor() {
    _e.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  }
  set(e, t, n, i, s, a, o, l, c, h, u, d, f, m, g, x) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = s, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = m, p[11] = g, p[15] = x, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new _e().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Vi.setFromMatrixColumn(e, 0).length(), s = 1 / Vi.setFromMatrixColumn(e, 1).length(), a = 1 / Vi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = a * h, f = a * u, m = o * h, g = o * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = f + m * c, t[5] = d - g * c, t[9] = -o * l, t[2] = g - d * c, t[6] = m + f * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const d = l * h, f = l * u, m = c * h, g = c * u;
      t[0] = d + g * o, t[4] = m * o - f, t[8] = a * c, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = f * o - m, t[6] = g + d * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const d = l * h, f = l * u, m = c * h, g = c * u;
      t[0] = d - g * o, t[4] = -a * u, t[8] = m + f * o, t[1] = f + m * o, t[5] = a * h, t[9] = g - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const d = a * h, f = a * u, m = o * h, g = o * u;
      t[0] = l * h, t[4] = m * c - f, t[8] = d * c + g, t[1] = l * u, t[5] = g * c + d, t[9] = f * c - m, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const d = a * l, f = a * c, m = o * l, g = o * c;
      t[0] = l * h, t[4] = g - d * u, t[8] = m * u + f, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = f * u + m, t[10] = d - g * u;
    } else if (e.order === "XZY") {
      const d = a * l, f = a * c, m = o * l, g = o * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + g, t[5] = a * h, t[9] = f * u - m, t[2] = m * u - f, t[6] = o * h, t[10] = g * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Mp, e, bp);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Gt.subVectors(e, t), Gt.lengthSq() === 0 && (Gt.z = 1), Gt.normalize(), Hn.crossVectors(n, Gt), Hn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Gt.x += 1e-4 : Gt.z += 1e-4, Gt.normalize(), Hn.crossVectors(n, Gt)), Hn.normalize(), Pr.crossVectors(Gt, Hn), i[0] = Hn.x, i[4] = Pr.x, i[8] = Gt.x, i[1] = Hn.y, i[5] = Pr.y, i[9] = Gt.y, i[2] = Hn.z, i[6] = Pr.z, i[10] = Gt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], f = n[13], m = n[2], g = n[6], x = n[10], p = n[14], _ = n[3], v = n[7], M = n[11], w = n[15], S = i[0], y = i[4], R = i[8], b = i[12], T = i[1], N = i[5], B = i[9], D = i[13], O = i[2], k = i[6], Y = i[10], J = i[14], K = i[3], ie = i[7], ee = i[11], be = i[15];
    return s[0] = a * S + o * T + l * O + c * K, s[4] = a * y + o * N + l * k + c * ie, s[8] = a * R + o * B + l * Y + c * ee, s[12] = a * b + o * D + l * J + c * be, s[1] = h * S + u * T + d * O + f * K, s[5] = h * y + u * N + d * k + f * ie, s[9] = h * R + u * B + d * Y + f * ee, s[13] = h * b + u * D + d * J + f * be, s[2] = m * S + g * T + x * O + p * K, s[6] = m * y + g * N + x * k + p * ie, s[10] = m * R + g * B + x * Y + p * ee, s[14] = m * b + g * D + x * J + p * be, s[3] = _ * S + v * T + M * O + w * K, s[7] = _ * y + v * N + M * k + w * ie, s[11] = _ * R + v * B + M * Y + w * ee, s[15] = _ * b + v * D + M * J + w * be, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], f = e[14], m = e[3], g = e[7], x = e[11], p = e[15];
    return m * (+s * l * u - i * c * u - s * o * d + n * c * d + i * o * f - n * l * f) + g * (+t * l * f - t * c * d + s * a * d - i * a * f + i * c * h - s * l * h) + x * (+t * c * u - t * o * f - s * a * u + n * a * f + s * o * h - n * c * h) + p * (-i * o * h - t * l * u + t * o * d + i * a * u - n * a * d + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], f = e[11], m = e[12], g = e[13], x = e[14], p = e[15], _ = u * x * c - g * d * c + g * l * f - o * x * f - u * l * p + o * d * p, v = m * d * c - h * x * c - m * l * f + a * x * f + h * l * p - a * d * p, M = h * g * c - m * u * c + m * o * f - a * g * f - h * o * p + a * u * p, w = m * u * l - h * g * l - m * o * d + a * g * d + h * o * x - a * u * x, S = t * _ + n * v + i * M + s * w;
    if (S === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const y = 1 / S;
    return e[0] = _ * y, e[1] = (g * d * s - u * x * s - g * i * f + n * x * f + u * i * p - n * d * p) * y, e[2] = (o * x * s - g * l * s + g * i * c - n * x * c - o * i * p + n * l * p) * y, e[3] = (u * l * s - o * d * s - u * i * c + n * d * c + o * i * f - n * l * f) * y, e[4] = v * y, e[5] = (h * x * s - m * d * s + m * i * f - t * x * f - h * i * p + t * d * p) * y, e[6] = (m * l * s - a * x * s - m * i * c + t * x * c + a * i * p - t * l * p) * y, e[7] = (a * d * s - h * l * s + h * i * c - t * d * c - a * i * f + t * l * f) * y, e[8] = M * y, e[9] = (m * u * s - h * g * s - m * n * f + t * g * f + h * n * p - t * u * p) * y, e[10] = (a * g * s - m * o * s + m * n * c - t * g * c - a * n * p + t * o * p) * y, e[11] = (h * o * s - a * u * s - h * n * c + t * u * c + a * n * f - t * o * f) * y, e[12] = w * y, e[13] = (h * g * i - m * u * i + m * n * d - t * g * d - h * n * x + t * u * x) * y, e[14] = (m * o * i - a * g * i - m * n * l + t * g * l + a * n * x - t * o * x) * y, e[15] = (a * u * i - h * o * i + h * n * l - t * u * l - a * n * d + t * o * d) * y, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, h = s * o;
    return this.set(c * a + n, c * o - i * l, c * l + i * o, 0, c * o + i * l, h * o + n, h * l - i * a, 0, c * l - i * o, h * l + i * a, s * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, h = a + a, u = o + o, d = s * c, f = s * h, m = s * u, g = a * h, x = a * u, p = o * u, _ = l * c, v = l * h, M = l * u, w = n.x, S = n.y, y = n.z;
    return i[0] = (1 - (g + p)) * w, i[1] = (f + M) * w, i[2] = (m - v) * w, i[3] = 0, i[4] = (f - M) * S, i[5] = (1 - (d + p)) * S, i[6] = (x + _) * S, i[7] = 0, i[8] = (m + v) * y, i[9] = (x - _) * y, i[10] = (1 - (d + g)) * y, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Vi.set(i[0], i[1], i[2]).length();
    const a = Vi.set(i[4], i[5], i[6]).length(), o = Vi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], sn.copy(this);
    const c = 1 / s, h = 1 / a, u = 1 / o;
    return sn.elements[0] *= c, sn.elements[1] *= c, sn.elements[2] *= c, sn.elements[4] *= h, sn.elements[5] *= h, sn.elements[6] *= h, sn.elements[8] *= u, sn.elements[9] *= u, sn.elements[10] *= u, t.setFromRotationMatrix(sn), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a) {
    const o = this.elements, l = 2 * s / (t - e), c = 2 * s / (n - i), h = (t + e) / (t - e), u = (n + i) / (n - i), d = -(a + s) / (a - s), f = -2 * a * s / (a - s);
    return o[0] = l, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = d, o[14] = f, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a) {
    const o = this.elements, l = 1 / (t - e), c = 1 / (n - i), h = 1 / (a - s), u = (t + e) * l, d = (n + i) * c, f = (a + s) * h;
    return o[0] = 2 * l, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -d, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -f, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Vi = new A(), sn = new _e(), Mp = new A(0, 0, 0), bp = new A(1, 1, 1), Hn = new A(), Pr = new A(), Gt = new A(), _c = new _e(), Mc = new mt();
class qt {
  constructor(e = 0, t = 0, n = 0, i = qt.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const i = e.elements, s = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], f = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ht(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ht(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ht(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ht(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(ht(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-ht(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return _c.makeRotationFromQuaternion(e), this.setFromRotationMatrix(_c, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Mc.setFromEuler(this), this.setFromQuaternion(Mc, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
qt.DEFAULT_ORDER = "XYZ";
class Oa {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Sp = 0;
const bc = new A(), Wi = new mt(), Tn = new _e(), Lr = new A(), Ps = new A(), wp = new A(), Tp = new mt(), Sc = new A(1, 0, 0), wc = new A(0, 1, 0), Tc = new A(0, 0, 1), Ep = { type: "added" }, Ec = { type: "removed" };
class Ke extends yn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Sp++ }), this.uuid = Yt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ke.DEFAULT_UP.clone();
    const e = new A(), t = new qt(), n = new mt(), i = new A(1, 1, 1);
    function s() {
      n.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new _e() }, normalMatrix: { value: new We() } }), this.matrix = new _e(), this.matrixWorld = new _e(), this.matrixAutoUpdate = Ke.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.matrixWorldAutoUpdate = Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Oa(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Wi.setFromAxisAngle(e, t), this.quaternion.multiply(Wi), this;
  }
  rotateOnWorldAxis(e, t) {
    return Wi.setFromAxisAngle(e, t), this.quaternion.premultiply(Wi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Sc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(wc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Tc, e);
  }
  translateOnAxis(e, t) {
    return bc.copy(e).applyQuaternion(this.quaternion), this.position.add(bc.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Sc, e);
  }
  translateY(e) {
    return this.translateOnAxis(wc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Tc, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(Tn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Lr.copy(e) : Lr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(true, false), Ps.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Tn.lookAt(Ps, Lr, this.up) : Tn.lookAt(Lr, Ps, this.up), this.quaternion.setFromRotationMatrix(Tn), i && (Tn.extractRotation(i.matrixWorld), Wi.setFromRotationMatrix(Tn), this.quaternion.premultiply(Wi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Ep)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ec)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Ec);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), Tn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), Tn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Tn), this.add(e), e.updateWorldMatrix(false, true), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const a = this.children[i].getObjectsByProperty(e, t);
      a.length > 0 && (n = n.concat(a));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ps, e, wp), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ps, Tp, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === true || e === true) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null && n.matrixWorldAutoUpdate === true && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === true) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === true && o.updateWorldMatrix(false, true);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          s(e.shapes, u);
        }
        else s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(s(e.materials, this.material[l]));
      i.material = o;
    } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++) i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), f = a(e.animations), m = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), m.length > 0 && (n.nodes = m);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations, this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
      const i = e.children[n];
      this.add(i.clone());
    }
    return this;
  }
}
Ke.DEFAULT_UP = new A(0, 1, 0);
Ke.DEFAULT_MATRIX_AUTO_UPDATE = true;
Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const rn = new A(), En = new A(), co = new A(), An = new A(), Xi = new A(), qi = new A(), Ac = new A(), ho = new A(), uo = new A(), fo = new A();
let Ir = false;
class zt {
  constructor(e = new A(), t = new A(), n = new A()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), rn.subVectors(e, t), i.cross(rn);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    rn.subVectors(i, t), En.subVectors(n, t), co.subVectors(e, t);
    const a = rn.dot(rn), o = rn.dot(En), l = rn.dot(co), c = En.dot(En), h = En.dot(co), u = a * c - o * o;
    if (u === 0) return s.set(-2, -1, -1);
    const d = 1 / u, f = (c * l - o * h) * d, m = (a * h - o * l) * d;
    return s.set(1 - f - m, m, f);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, An), An.x >= 0 && An.y >= 0 && An.x + An.y <= 1;
  }
  static getUV(e, t, n, i, s, a, o, l) {
    return Ir === false && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ir = true), this.getInterpolation(e, t, n, i, s, a, o, l);
  }
  static getInterpolation(e, t, n, i, s, a, o, l) {
    return this.getBarycoord(e, t, n, i, An), l.setScalar(0), l.addScaledVector(s, An.x), l.addScaledVector(a, An.y), l.addScaledVector(o, An.z), l;
  }
  static isFrontFacing(e, t, n, i) {
    return rn.subVectors(n, t), En.subVectors(e, t), rn.cross(En).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return rn.subVectors(this.c, this.b), En.subVectors(this.a, this.b), rn.cross(En).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return zt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return zt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Ir === false && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ir = true), zt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  getInterpolation(e, t, n, i, s) {
    return zt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return zt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return zt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    Xi.subVectors(i, n), qi.subVectors(s, n), ho.subVectors(e, n);
    const l = Xi.dot(ho), c = qi.dot(ho);
    if (l <= 0 && c <= 0) return t.copy(n);
    uo.subVectors(e, i);
    const h = Xi.dot(uo), u = qi.dot(uo);
    if (h >= 0 && u <= h) return t.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0) return a = l / (l - h), t.copy(n).addScaledVector(Xi, a);
    fo.subVectors(e, s);
    const f = Xi.dot(fo), m = qi.dot(fo);
    if (m >= 0 && f <= m) return t.copy(s);
    const g = f * c - l * m;
    if (g <= 0 && c >= 0 && m <= 0) return o = c / (c - m), t.copy(n).addScaledVector(qi, o);
    const x = h * m - f * u;
    if (x <= 0 && u - h >= 0 && f - m >= 0) return Ac.subVectors(s, i), o = (u - h) / (u - h + (f - m)), t.copy(i).addScaledVector(Ac, o);
    const p = 1 / (x + g + d);
    return a = g * p, o = d * p, t.copy(n).addScaledVector(Xi, a).addScaledVector(qi, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Ap = 0;
class Pt extends yn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Ap++ }), this.uuid = Yt(), this.name = "", this.type = "Material", this.blending = Ti, this.side = Dn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.blendSrc = El, this.blendDst = Al, this.blendEquation = yi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Ta, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Xu, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ba, this.stencilZFail = ba, this.stencilZPass = ba, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const i = this[t];
      if (i === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ti && (n.blending = this.blending), this.side !== Dn && (n.side = this.side), this.vertexColors && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === true && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === true && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === true && (n.forceSinglePass = this.forceSinglePass), this.wireframe === true && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = this.flatShading), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures), a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
}
const Zu = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, an = { h: 0, s: 0, l: 0 }, Dr = { h: 0, s: 0, l: 0 };
function po(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class ue {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ue) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Kt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Kt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Kt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Kt.workingColorSpace) {
    if (e = Dl(e, 1), t = ht(t, 0, 1), n = ht(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = po(a, s, e + 1 / 3), this.g = po(a, s, e), this.b = po(a, s, e - 1 / 3);
    }
    return Kt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Ue) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], a = s.length;
      if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ue) {
    const n = Zu[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = hs(e.r), this.g = hs(e.g), this.b = hs(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = to(e.r), this.g = to(e.g), this.b = to(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ue) {
    return Kt.fromWorkingColorSpace(Ct.copy(this), e), Math.round(ht(Ct.r * 255, 0, 255)) * 65536 + Math.round(ht(Ct.g * 255, 0, 255)) * 256 + Math.round(ht(Ct.b * 255, 0, 255));
  }
  getHexString(e = Ue) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Kt.workingColorSpace) {
    Kt.fromWorkingColorSpace(Ct.copy(this), t);
    const n = Ct.r, i = Ct.g, s = Ct.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          l = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / u + 2;
          break;
        case s:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = Kt.workingColorSpace) {
    return Kt.fromWorkingColorSpace(Ct.copy(this), t), e.r = Ct.r, e.g = Ct.g, e.b = Ct.b, e;
  }
  getStyle(e = Ue) {
    Kt.fromWorkingColorSpace(Ct.copy(this), e);
    const t = Ct.r, n = Ct.g, i = Ct.b;
    return e !== Ue ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(an), an.h += e, an.s += t, an.l += n, this.setHSL(an.h, an.s, an.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(an), e.getHSL(Dr);
    const n = Gs(an.h, Dr.h, t), i = Gs(an.s, Dr.s, t), s = Gs(an.l, Dr.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ct = new ue();
ue.NAMES = Zu;
class _n extends Pt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new ue(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = or, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Cn = Rp();
function Rp() {
  const r = new ArrayBuffer(4), e = new Float32Array(r), t = new Uint32Array(r), n = new Uint32Array(512), i = new Uint32Array(512);
  for (let l = 0; l < 256; ++l) {
    const c = l - 127;
    c < -27 ? (n[l] = 0, n[l | 256] = 32768, i[l] = 24, i[l | 256] = 24) : c < -14 ? (n[l] = 1024 >> -c - 14, n[l | 256] = 1024 >> -c - 14 | 32768, i[l] = -c - 1, i[l | 256] = -c - 1) : c <= 15 ? (n[l] = c + 15 << 10, n[l | 256] = c + 15 << 10 | 32768, i[l] = 13, i[l | 256] = 13) : c < 128 ? (n[l] = 31744, n[l | 256] = 64512, i[l] = 24, i[l | 256] = 24) : (n[l] = 31744, n[l | 256] = 64512, i[l] = 13, i[l | 256] = 13);
  }
  const s = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
  for (let l = 1; l < 1024; ++l) {
    let c = l << 13, h = 0;
    for (; (c & 8388608) === 0; ) c <<= 1, h -= 8388608;
    c &= -8388609, h += 947912704, s[l] = c | h;
  }
  for (let l = 1024; l < 2048; ++l) s[l] = 939524096 + (l - 1024 << 13);
  for (let l = 1; l < 31; ++l) a[l] = l << 23;
  a[31] = 1199570944, a[32] = 2147483648;
  for (let l = 33; l < 63; ++l) a[l] = 2147483648 + (l - 32 << 23);
  a[63] = 3347054592;
  for (let l = 1; l < 64; ++l) l !== 32 && (o[l] = 1024);
  return { floatView: e, uint32View: t, baseTable: n, shiftTable: i, mantissaTable: s, exponentTable: a, offsetTable: o };
}
function Nt(r) {
  Math.abs(r) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), r = ht(r, -65504, 65504), Cn.floatView[0] = r;
  const e = Cn.uint32View[0], t = e >> 23 & 511;
  return Cn.baseTable[t] + ((e & 8388607) >> Cn.shiftTable[t]);
}
function zs(r) {
  const e = r >> 10;
  return Cn.uint32View[0] = Cn.mantissaTable[Cn.offsetTable[e] + (r & 1023)] + Cn.exponentTable[e], Cn.floatView[0];
}
const Cp = { toHalfFloat: Nt, fromHalfFloat: zs }, gt = new A(), Ur = new W();
class et {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = $s, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Ur.fromBufferAttribute(this, t), Ur.applyMatrix3(e), this.setXY(t, Ur.x, Ur.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) gt.fromBufferAttribute(this, t), gt.applyMatrix3(e), this.setXYZ(t, gt.x, gt.y, gt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) gt.fromBufferAttribute(this, t), gt.applyMatrix4(e), this.setXYZ(t, gt.x, gt.y, gt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) gt.fromBufferAttribute(this, t), gt.applyNormalMatrix(e), this.setXYZ(t, gt.x, gt.y, gt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) gt.fromBufferAttribute(this, t), gt.transformDirection(e), this.setXYZ(t, gt.x, gt.y, gt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array), s = He(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== $s && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class Pp extends et {
  constructor(e, t, n) {
    super(new Int8Array(e), t, n);
  }
}
class Lp extends et {
  constructor(e, t, n) {
    super(new Uint8Array(e), t, n);
  }
}
class Ip extends et {
  constructor(e, t, n) {
    super(new Uint8ClampedArray(e), t, n);
  }
}
class Dp extends et {
  constructor(e, t, n) {
    super(new Int16Array(e), t, n);
  }
}
class Na extends et {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Up extends et {
  constructor(e, t, n) {
    super(new Int32Array(e), t, n);
  }
}
class Ol extends et {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Fp extends et {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n), this.isFloat16BufferAttribute = true;
  }
  getX(e) {
    let t = zs(this.array[e * this.itemSize]);
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize] = Nt(t), this;
  }
  getY(e) {
    let t = zs(this.array[e * this.itemSize + 1]);
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 1] = Nt(t), this;
  }
  getZ(e) {
    let t = zs(this.array[e * this.itemSize + 2]);
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 2] = Nt(t), this;
  }
  getW(e) {
    let t = zs(this.array[e * this.itemSize + 3]);
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 3] = Nt(t), this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array)), this.array[e + 0] = Nt(t), this.array[e + 1] = Nt(n), this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array)), this.array[e + 0] = Nt(t), this.array[e + 1] = Nt(n), this.array[e + 2] = Nt(i), this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array), s = He(s, this.array)), this.array[e + 0] = Nt(t), this.array[e + 1] = Nt(n), this.array[e + 2] = Nt(i), this.array[e + 3] = Nt(s), this;
  }
}
class xe extends et {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
class Op extends et {
  constructor(e, t, n) {
    super(new Float64Array(e), t, n);
  }
}
let Np = 0;
const Zt = new _e(), mo = new Ke(), Yi = new A(), Vt = new en(), Ls = new en(), wt = new A();
class Ne extends yn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Np++ }), this.uuid = Yt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (ju(e) ? Ol : Na)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new We().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = true;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Zt.makeRotationFromQuaternion(e), this.applyMatrix4(Zt), this;
  }
  rotateX(e) {
    return Zt.makeRotationX(e), this.applyMatrix4(Zt), this;
  }
  rotateY(e) {
    return Zt.makeRotationY(e), this.applyMatrix4(Zt), this;
  }
  rotateZ(e) {
    return Zt.makeRotationZ(e), this.applyMatrix4(Zt), this;
  }
  translate(e, t, n) {
    return Zt.makeTranslation(e, t, n), this.applyMatrix4(Zt), this;
  }
  scale(e, t, n) {
    return Zt.makeScale(e, t, n), this.applyMatrix4(Zt), this;
  }
  lookAt(e) {
    return mo.lookAt(e), mo.updateMatrix(), this.applyMatrix4(mo.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Yi).negate(), this.translate(Yi.x, Yi.y, Yi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new xe(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new en());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new A(-1 / 0, -1 / 0, -1 / 0), new A(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) {
        const s = t[n];
        Vt.setFromBufferAttribute(s), this.morphTargetsRelative ? (wt.addVectors(this.boundingBox.min, Vt.min), this.boundingBox.expandByPoint(wt), wt.addVectors(this.boundingBox.max, Vt.max), this.boundingBox.expandByPoint(wt)) : (this.boundingBox.expandByPoint(Vt.min), this.boundingBox.expandByPoint(Vt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new un());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new A(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Vt.setFromBufferAttribute(e), t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s];
        Ls.setFromBufferAttribute(o), this.morphTargetsRelative ? (wt.addVectors(Vt.min, Ls.min), Vt.expandByPoint(wt), wt.addVectors(Vt.max, Ls.max), Vt.expandByPoint(wt)) : (Vt.expandByPoint(Ls.min), Vt.expandByPoint(Ls.max));
      }
      Vt.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++) wt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(wt));
      if (t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++) wt.fromBufferAttribute(o, c), l && (Yi.fromBufferAttribute(e, c), wt.add(Yi)), i = Math.max(i, n.distanceToSquared(wt));
      }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, a = t.uv.array, o = i.length / 3;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new et(new Float32Array(4 * o), 4));
    const l = this.getAttribute("tangent").array, c = [], h = [];
    for (let T = 0; T < o; T++) c[T] = new A(), h[T] = new A();
    const u = new A(), d = new A(), f = new A(), m = new W(), g = new W(), x = new W(), p = new A(), _ = new A();
    function v(T, N, B) {
      u.fromArray(i, T * 3), d.fromArray(i, N * 3), f.fromArray(i, B * 3), m.fromArray(a, T * 2), g.fromArray(a, N * 2), x.fromArray(a, B * 2), d.sub(u), f.sub(u), g.sub(m), x.sub(m);
      const D = 1 / (g.x * x.y - x.x * g.y);
      isFinite(D) && (p.copy(d).multiplyScalar(x.y).addScaledVector(f, -g.y).multiplyScalar(D), _.copy(f).multiplyScalar(g.x).addScaledVector(d, -x.x).multiplyScalar(D), c[T].add(p), c[N].add(p), c[B].add(p), h[T].add(_), h[N].add(_), h[B].add(_));
    }
    let M = this.groups;
    M.length === 0 && (M = [{ start: 0, count: n.length }]);
    for (let T = 0, N = M.length; T < N; ++T) {
      const B = M[T], D = B.start, O = B.count;
      for (let k = D, Y = D + O; k < Y; k += 3) v(n[k + 0], n[k + 1], n[k + 2]);
    }
    const w = new A(), S = new A(), y = new A(), R = new A();
    function b(T) {
      y.fromArray(s, T * 3), R.copy(y);
      const N = c[T];
      w.copy(N), w.sub(y.multiplyScalar(y.dot(N))).normalize(), S.crossVectors(R, N);
      const D = S.dot(h[T]) < 0 ? -1 : 1;
      l[T * 4] = w.x, l[T * 4 + 1] = w.y, l[T * 4 + 2] = w.z, l[T * 4 + 3] = D;
    }
    for (let T = 0, N = M.length; T < N; ++T) {
      const B = M[T], D = B.start, O = B.count;
      for (let k = D, Y = D + O; k < Y; k += 3) b(n[k + 0]), b(n[k + 1]), b(n[k + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new et(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let d = 0, f = n.count; d < f; d++) n.setXYZ(d, 0, 0, 0);
      const i = new A(), s = new A(), a = new A(), o = new A(), l = new A(), c = new A(), h = new A(), u = new A();
      if (e) for (let d = 0, f = e.count; d < f; d += 3) {
        const m = e.getX(d + 0), g = e.getX(d + 1), x = e.getX(d + 2);
        i.fromBufferAttribute(t, m), s.fromBufferAttribute(t, g), a.fromBufferAttribute(t, x), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, m), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, x), o.add(h), l.add(h), c.add(h), n.setXYZ(m, o.x, o.y, o.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(x, c.x, c.y, c.z);
      }
      else for (let d = 0, f = t.count; d < f; d += 3) i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) wt.fromBufferAttribute(e, t), wt.normalize(), e.setXYZ(t, wt.x, wt.y, wt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h);
      let f = 0, m = 0;
      for (let g = 0, x = l.length; g < x; g++) {
        o.isInterleavedBufferAttribute ? f = l[g] * o.data.stride + o.offset : f = l[g] * h;
        for (let p = 0; p < h; p++) d[m++] = c[f++];
      }
      return new et(d, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Ne(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], f = e(d, n);
        l.push(f);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u];
        h.push(f.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, s = true);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], u = s[c];
      for (let d = 0, f = u.length; d < f; d++) h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Rc = new _e(), pn = new lr(), Fr = new un(), Cc = new A(), ji = new A(), Zi = new A(), Ki = new A(), xo = new A(), Or = new A(), Nr = new W(), Br = new W(), zr = new W(), Pc = new A(), Lc = new A(), Ic = new A(), kr = new A(), Hr = new A();
class vt extends Ke {
  constructor(e = new Ne(), t = new _n()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Or.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = o[l], u = s[l];
        h !== 0 && (xo.fromBufferAttribute(u, e), a ? Or.addScaledVector(xo, h) : Or.addScaledVector(xo.sub(t), h));
      }
      t.add(Or);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Fr.copy(n.boundingSphere), Fr.applyMatrix4(s), pn.copy(e.ray).recast(e.near), !(Fr.containsPoint(pn.origin) === false && (pn.intersectSphere(Fr, Cc) === null || pn.origin.distanceToSquared(Cc) > (e.far - e.near) ** 2)) && (Rc.copy(s).invert(), pn.copy(e.ray).applyMatrix4(Rc), !(n.boundingBox !== null && pn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t)));
  }
  _computeIntersections(e, t) {
    let n;
    const i = this.geometry, s = this.material, a = i.index, o = i.attributes.position, l = i.attributes.uv, c = i.attributes.uv1, h = i.attributes.normal, u = i.groups, d = i.drawRange;
    if (a !== null) if (Array.isArray(s)) for (let f = 0, m = u.length; f < m; f++) {
      const g = u[f], x = s[g.materialIndex], p = Math.max(g.start, d.start), _ = Math.min(a.count, Math.min(g.start + g.count, d.start + d.count));
      for (let v = p, M = _; v < M; v += 3) {
        const w = a.getX(v), S = a.getX(v + 1), y = a.getX(v + 2);
        n = Gr(this, x, e, pn, l, c, h, w, S, y), n && (n.faceIndex = Math.floor(v / 3), n.face.materialIndex = g.materialIndex, t.push(n));
      }
    }
    else {
      const f = Math.max(0, d.start), m = Math.min(a.count, d.start + d.count);
      for (let g = f, x = m; g < x; g += 3) {
        const p = a.getX(g), _ = a.getX(g + 1), v = a.getX(g + 2);
        n = Gr(this, s, e, pn, l, c, h, p, _, v), n && (n.faceIndex = Math.floor(g / 3), t.push(n));
      }
    }
    else if (o !== void 0) if (Array.isArray(s)) for (let f = 0, m = u.length; f < m; f++) {
      const g = u[f], x = s[g.materialIndex], p = Math.max(g.start, d.start), _ = Math.min(o.count, Math.min(g.start + g.count, d.start + d.count));
      for (let v = p, M = _; v < M; v += 3) {
        const w = v, S = v + 1, y = v + 2;
        n = Gr(this, x, e, pn, l, c, h, w, S, y), n && (n.faceIndex = Math.floor(v / 3), n.face.materialIndex = g.materialIndex, t.push(n));
      }
    }
    else {
      const f = Math.max(0, d.start), m = Math.min(o.count, d.start + d.count);
      for (let g = f, x = m; g < x; g += 3) {
        const p = g, _ = g + 1, v = g + 2;
        n = Gr(this, s, e, pn, l, c, h, p, _, v), n && (n.faceIndex = Math.floor(g / 3), t.push(n));
      }
    }
  }
}
function Bp(r, e, t, n, i, s, a, o) {
  let l;
  if (e.side === Ot ? l = n.intersectTriangle(a, s, i, true, o) : l = n.intersectTriangle(i, s, a, e.side === Dn, o), l === null) return null;
  Hr.copy(o), Hr.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(Hr);
  return c < t.near || c > t.far ? null : { distance: c, point: Hr.clone(), object: r };
}
function Gr(r, e, t, n, i, s, a, o, l, c) {
  r.getVertexPosition(o, ji), r.getVertexPosition(l, Zi), r.getVertexPosition(c, Ki);
  const h = Bp(r, e, t, n, ji, Zi, Ki, kr);
  if (h) {
    i && (Nr.fromBufferAttribute(i, o), Br.fromBufferAttribute(i, l), zr.fromBufferAttribute(i, c), h.uv = zt.getInterpolation(kr, ji, Zi, Ki, Nr, Br, zr, new W())), s && (Nr.fromBufferAttribute(s, o), Br.fromBufferAttribute(s, l), zr.fromBufferAttribute(s, c), h.uv1 = zt.getInterpolation(kr, ji, Zi, Ki, Nr, Br, zr, new W()), h.uv2 = h.uv1), a && (Pc.fromBufferAttribute(a, o), Lc.fromBufferAttribute(a, l), Ic.fromBufferAttribute(a, c), h.normal = zt.getInterpolation(kr, ji, Zi, Ki, Pc, Lc, Ic, new A()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = { a: o, b: l, c, normal: new A(), materialIndex: 0 };
    zt.getNormal(ji, Zi, Ki, u.normal), h.face = u;
  }
  return h;
}
class ii extends Ne {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: s, depthSegments: a };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let d = 0, f = 0;
    m("z", "y", "x", -1, -1, n, t, e, a, s, 0), m("z", "y", "x", 1, -1, n, t, -e, a, s, 1), m("x", "z", "y", 1, 1, e, n, t, i, a, 2), m("x", "z", "y", 1, -1, e, n, -t, i, a, 3), m("x", "y", "z", 1, -1, e, t, n, i, s, 4), m("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new xe(c, 3)), this.setAttribute("normal", new xe(h, 3)), this.setAttribute("uv", new xe(u, 2));
    function m(g, x, p, _, v, M, w, S, y, R, b) {
      const T = M / y, N = w / R, B = M / 2, D = w / 2, O = S / 2, k = y + 1, Y = R + 1;
      let J = 0, K = 0;
      const ie = new A();
      for (let ee = 0; ee < Y; ee++) {
        const be = ee * N - D;
        for (let oe = 0; oe < k; oe++) {
          const V = oe * T - B;
          ie[g] = V * _, ie[x] = be * v, ie[p] = O, c.push(ie.x, ie.y, ie.z), ie[g] = 0, ie[x] = 0, ie[p] = S > 0 ? 1 : -1, h.push(ie.x, ie.y, ie.z), u.push(oe / y), u.push(1 - ee / R), J += 1;
        }
      }
      for (let ee = 0; ee < R; ee++) for (let be = 0; be < y; be++) {
        const oe = d + be + k * ee, V = d + be + k * (ee + 1), $ = d + (be + 1) + k * (ee + 1), ce = d + (be + 1) + k * ee;
        l.push(oe, V, ce), l.push(V, $, ce), K += 6;
      }
      o.addGroup(f, K, b), f += K, d += J;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ii(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ms(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Ft(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = ms(r[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function zp(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
function Ku(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : hn;
}
const Jn = { clone: ms, merge: Ft };
var kp = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Hp = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class _t extends Pt {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = kp, this.fragmentShader = Hp, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ms(e.uniforms), this.uniformsGroups = zp(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[i] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[i] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[i] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[i] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[i] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[i] = { type: "m4", value: a.toArray() } : t.uniforms[i] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions) this.extensions[i] === true && (n[i] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ba extends Ke {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new _e(), this.projectionMatrix = new _e(), this.projectionMatrixInverse = new _e();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class yt extends Ba {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ps * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Ai * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ps * 2 * Math.atan(Math.tan(Ai * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ai * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Ji = -90, Qi = 1;
class Ju extends Ke {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new yt(Ji, Qi, e, t);
    i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const s = new yt(Ji, Qi, e, t);
    s.layers = this.layers, s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), this.add(s);
    const a = new yt(Ji, Qi, e, t);
    a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(0, 1, 0), this.add(a);
    const o = new yt(Ji, Qi, e, t);
    o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(0, -1, 0), this.add(o);
    const l = new yt(Ji, Qi, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, 1), this.add(l);
    const c = new yt(Ji, Qi, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, -1), this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, a, o, l, c] = this.children, h = e.getRenderTarget(), u = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = xn, e.xr.enabled = false;
    const f = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, a), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = f, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(h), e.toneMapping = u, e.xr.enabled = d, n.texture.needsPMREMUpdate = true;
  }
}
class cr extends rt {
  constructor(e, t, n, i, s, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Qn, super(e, t, n, i, s, a, o, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Qu extends Et {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (Vs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === In ? Ue : Kn), this.texture = new cr(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : ct;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, i = new ii(5, 5, 5), s = new _t({ name: "CubemapFromEquirect", uniforms: ms(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Ot, blending: Ln });
    s.uniforms.tEquirect.value = t;
    const a = new vt(i, s), o = t.minFilter;
    return t.minFilter === ei && (t.minFilter = ct), new Ju(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const go = new A(), Gp = new A(), Vp = new We();
class Xn {
  constructor(e = new A(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = go.subVectors(n, t).cross(Gp.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(go), i = this.normal.dot(n);
    if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Vp.getNormalMatrix(e), i = this.coplanarPoint(go).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ui = new un(), Vr = new A();
class za {
  constructor(e = new Xn(), t = new Xn(), n = new Xn(), i = new Xn(), s = new Xn(), a = new Xn()) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], s = n[1], a = n[2], o = n[3], l = n[4], c = n[5], h = n[6], u = n[7], d = n[8], f = n[9], m = n[10], g = n[11], x = n[12], p = n[13], _ = n[14], v = n[15];
    return t[0].setComponents(o - i, u - l, g - d, v - x).normalize(), t[1].setComponents(o + i, u + l, g + d, v + x).normalize(), t[2].setComponents(o + s, u + c, g + f, v + p).normalize(), t[3].setComponents(o - s, u - c, g - f, v - p).normalize(), t[4].setComponents(o - a, u - h, g - m, v - _).normalize(), t[5].setComponents(o + a, u + h, g + m, v + _).normalize(), this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(ui);
  }
  intersectsSprite(e) {
    return ui.center.set(0, 0, 0), ui.radius = 0.7071067811865476, ui.applyMatrix4(e.matrixWorld), this.intersectsSphere(ui);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Vr.x = i.normal.x > 0 ? e.max.x : e.min.x, Vr.y = i.normal.y > 0 ? e.max.y : e.min.y, Vr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Vr) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function $u() {
  let r = null, e = false, t = null, n = null;
  function i(s, a) {
    t(s, a), n = r.requestAnimationFrame(i);
  }
  return { start: function() {
    e !== true && t !== null && (n = r.requestAnimationFrame(i), e = true);
  }, stop: function() {
    r.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(s) {
    t = s;
  }, setContext: function(s) {
    r = s;
  } };
}
function Wp(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, h) {
    const u = c.array, d = c.usage, f = r.createBuffer();
    r.bindBuffer(h, f), r.bufferData(h, u, d), c.onUploadCallback();
    let m;
    if (u instanceof Float32Array) m = r.FLOAT;
    else if (u instanceof Uint16Array) if (c.isFloat16BufferAttribute) if (t) m = r.HALF_FLOAT;
    else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
    else m = r.UNSIGNED_SHORT;
    else if (u instanceof Int16Array) m = r.SHORT;
    else if (u instanceof Uint32Array) m = r.UNSIGNED_INT;
    else if (u instanceof Int32Array) m = r.INT;
    else if (u instanceof Int8Array) m = r.BYTE;
    else if (u instanceof Uint8Array) m = r.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray) m = r.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return { buffer: f, type: m, bytesPerElement: u.BYTES_PER_ELEMENT, version: c.version };
  }
  function s(c, h, u) {
    const d = h.array, f = h.updateRange;
    r.bindBuffer(u, c), f.count === -1 ? r.bufferSubData(u, 0, d) : (t ? r.bufferSubData(u, f.offset * d.BYTES_PER_ELEMENT, d, f.offset, f.count) : r.bufferSubData(u, f.offset * d.BYTES_PER_ELEMENT, d.subarray(f.offset, f.offset + f.count)), f.count = -1), h.onUploadCallback();
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (r.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) && n.set(c, { buffer: c.buffer, type: c.type, bytesPerElement: c.elementSize, version: c.version });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u === void 0 ? n.set(c, i(c, h)) : u.version < c.version && (s(u.buffer, c, h), u.version = c.version);
  }
  return { get: a, remove: o, update: l };
}
class _s extends Ne {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, u = e / o, d = t / l, f = [], m = [], g = [], x = [];
    for (let p = 0; p < h; p++) {
      const _ = p * d - a;
      for (let v = 0; v < c; v++) {
        const M = v * u - s;
        m.push(M, -_, 0), g.push(0, 0, 1), x.push(v / o), x.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++) for (let _ = 0; _ < o; _++) {
      const v = _ + c * p, M = _ + c * (p + 1), w = _ + 1 + c * (p + 1), S = _ + 1 + c * p;
      f.push(v, M, S), f.push(M, w, S);
    }
    this.setIndex(f), this.setAttribute("position", new xe(m, 3)), this.setAttribute("normal", new xe(g, 3)), this.setAttribute("uv", new xe(x, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new _s(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Xp = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, qp = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Yp = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, jp = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Zp = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Kp = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Jp = "vec3 transformed = vec3( position );", Qp = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, $p = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, em = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, tm = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, nm = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, im = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, sm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, rm = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, am = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, om = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, lm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, cm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, hm = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, um = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, dm = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, fm = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, pm = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, mm = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, xm = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, gm = "gl_FragColor = linearToOutputTexel( gl_FragColor );", vm = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, ym = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, _m = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Mm = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, bm = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Sm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, wm = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Tm = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Em = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Am = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Rm = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Cm = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Pm = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Lm = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Im = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Dm = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Um = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, Fm = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Om = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Nm = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Bm = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, zm = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`, km = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Hm = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Gm = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Vm = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Wm = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Xm = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, qm = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Ym = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, jm = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`, Zm = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Km = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Jm = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Qm = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, $m = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, e0 = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, t0 = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, n0 = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, i0 = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, s0 = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`, r0 = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, a0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, o0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, l0 = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, c0 = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, h0 = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, u0 = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, d0 = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, f0 = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, p0 = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, m0 = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, x0 = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, g0 = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, v0 = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, y0 = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, _0 = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, M0 = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, b0 = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, S0 = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, w0 = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, T0 = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, E0 = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, A0 = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, R0 = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, C0 = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, P0 = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, L0 = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, I0 = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, D0 = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, U0 = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, F0 = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, O0 = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, N0 = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, B0 = `#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, z0 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const k0 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, H0 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, G0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, V0 = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, W0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, X0 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, q0 = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Y0 = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, j0 = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Z0 = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, K0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, J0 = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Q0 = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, $0 = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, ex = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, tx = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, nx = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ix = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, sx = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, rx = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ax = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, ox = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, lx = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, cx = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, hx = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, ux = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, dx = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fx = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, px = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, mx = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, xx = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, gx = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, vx = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, yx = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, ke = { alphamap_fragment: Xp, alphamap_pars_fragment: qp, alphatest_fragment: Yp, alphatest_pars_fragment: jp, aomap_fragment: Zp, aomap_pars_fragment: Kp, begin_vertex: Jp, beginnormal_vertex: Qp, bsdfs: $p, iridescence_fragment: em, bumpmap_pars_fragment: tm, clipping_planes_fragment: nm, clipping_planes_pars_fragment: im, clipping_planes_pars_vertex: sm, clipping_planes_vertex: rm, color_fragment: am, color_pars_fragment: om, color_pars_vertex: lm, color_vertex: cm, common: hm, cube_uv_reflection_fragment: um, defaultnormal_vertex: dm, displacementmap_pars_vertex: fm, displacementmap_vertex: pm, emissivemap_fragment: mm, emissivemap_pars_fragment: xm, encodings_fragment: gm, encodings_pars_fragment: vm, envmap_fragment: ym, envmap_common_pars_fragment: _m, envmap_pars_fragment: Mm, envmap_pars_vertex: bm, envmap_physical_pars_fragment: Um, envmap_vertex: Sm, fog_vertex: wm, fog_pars_vertex: Tm, fog_fragment: Em, fog_pars_fragment: Am, gradientmap_pars_fragment: Rm, lightmap_fragment: Cm, lightmap_pars_fragment: Pm, lights_lambert_fragment: Lm, lights_lambert_pars_fragment: Im, lights_pars_begin: Dm, lights_toon_fragment: Fm, lights_toon_pars_fragment: Om, lights_phong_fragment: Nm, lights_phong_pars_fragment: Bm, lights_physical_fragment: zm, lights_physical_pars_fragment: km, lights_fragment_begin: Hm, lights_fragment_maps: Gm, lights_fragment_end: Vm, logdepthbuf_fragment: Wm, logdepthbuf_pars_fragment: Xm, logdepthbuf_pars_vertex: qm, logdepthbuf_vertex: Ym, map_fragment: jm, map_pars_fragment: Zm, map_particle_fragment: Km, map_particle_pars_fragment: Jm, metalnessmap_fragment: Qm, metalnessmap_pars_fragment: $m, morphcolor_vertex: e0, morphnormal_vertex: t0, morphtarget_pars_vertex: n0, morphtarget_vertex: i0, normal_fragment_begin: s0, normal_fragment_maps: r0, normal_pars_fragment: a0, normal_pars_vertex: o0, normal_vertex: l0, normalmap_pars_fragment: c0, clearcoat_normal_fragment_begin: h0, clearcoat_normal_fragment_maps: u0, clearcoat_pars_fragment: d0, iridescence_pars_fragment: f0, output_fragment: p0, packing: m0, premultiplied_alpha_fragment: x0, project_vertex: g0, dithering_fragment: v0, dithering_pars_fragment: y0, roughnessmap_fragment: _0, roughnessmap_pars_fragment: M0, shadowmap_pars_fragment: b0, shadowmap_pars_vertex: S0, shadowmap_vertex: w0, shadowmask_pars_fragment: T0, skinbase_vertex: E0, skinning_pars_vertex: A0, skinning_vertex: R0, skinnormal_vertex: C0, specularmap_fragment: P0, specularmap_pars_fragment: L0, tonemapping_fragment: I0, tonemapping_pars_fragment: D0, transmission_fragment: U0, transmission_pars_fragment: F0, uv_pars_fragment: O0, uv_pars_vertex: N0, uv_vertex: B0, worldpos_vertex: z0, background_vert: k0, background_frag: H0, backgroundCube_vert: G0, backgroundCube_frag: V0, cube_vert: W0, cube_frag: X0, depth_vert: q0, depth_frag: Y0, distanceRGBA_vert: j0, distanceRGBA_frag: Z0, equirect_vert: K0, equirect_frag: J0, linedashed_vert: Q0, linedashed_frag: $0, meshbasic_vert: ex, meshbasic_frag: tx, meshlambert_vert: nx, meshlambert_frag: ix, meshmatcap_vert: sx, meshmatcap_frag: rx, meshnormal_vert: ax, meshnormal_frag: ox, meshphong_vert: lx, meshphong_frag: cx, meshphysical_vert: hx, meshphysical_frag: ux, meshtoon_vert: dx, meshtoon_frag: fx, points_vert: px, points_frag: mx, shadow_vert: xx, shadow_frag: gx, sprite_vert: vx, sprite_frag: yx }, de = { common: { diffuse: { value: new ue(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new We() }, alphaMap: { value: null }, alphaMapTransform: { value: new We() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new We() } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new We() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new We() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new We() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new We() }, normalScale: { value: new W(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new We() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new We() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new We() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new We() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new ue(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new ue(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new We() } }, sprite: { diffuse: { value: new ue(16777215) }, opacity: { value: 1 }, center: { value: new W(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new We() }, alphaMap: { value: null }, alphaTest: { value: 0 } } }, ln = { basic: { uniforms: Ft([de.common, de.specularmap, de.envmap, de.aomap, de.lightmap, de.fog]), vertexShader: ke.meshbasic_vert, fragmentShader: ke.meshbasic_frag }, lambert: { uniforms: Ft([de.common, de.specularmap, de.envmap, de.aomap, de.lightmap, de.emissivemap, de.bumpmap, de.normalmap, de.displacementmap, de.fog, de.lights, { emissive: { value: new ue(0) } }]), vertexShader: ke.meshlambert_vert, fragmentShader: ke.meshlambert_frag }, phong: { uniforms: Ft([de.common, de.specularmap, de.envmap, de.aomap, de.lightmap, de.emissivemap, de.bumpmap, de.normalmap, de.displacementmap, de.fog, de.lights, { emissive: { value: new ue(0) }, specular: { value: new ue(1118481) }, shininess: { value: 30 } }]), vertexShader: ke.meshphong_vert, fragmentShader: ke.meshphong_frag }, standard: { uniforms: Ft([de.common, de.envmap, de.aomap, de.lightmap, de.emissivemap, de.bumpmap, de.normalmap, de.displacementmap, de.roughnessmap, de.metalnessmap, de.fog, de.lights, { emissive: { value: new ue(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: ke.meshphysical_vert, fragmentShader: ke.meshphysical_frag }, toon: { uniforms: Ft([de.common, de.aomap, de.lightmap, de.emissivemap, de.bumpmap, de.normalmap, de.displacementmap, de.gradientmap, de.fog, de.lights, { emissive: { value: new ue(0) } }]), vertexShader: ke.meshtoon_vert, fragmentShader: ke.meshtoon_frag }, matcap: { uniforms: Ft([de.common, de.bumpmap, de.normalmap, de.displacementmap, de.fog, { matcap: { value: null } }]), vertexShader: ke.meshmatcap_vert, fragmentShader: ke.meshmatcap_frag }, points: { uniforms: Ft([de.points, de.fog]), vertexShader: ke.points_vert, fragmentShader: ke.points_frag }, dashed: { uniforms: Ft([de.common, de.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: ke.linedashed_vert, fragmentShader: ke.linedashed_frag }, depth: { uniforms: Ft([de.common, de.displacementmap]), vertexShader: ke.depth_vert, fragmentShader: ke.depth_frag }, normal: { uniforms: Ft([de.common, de.bumpmap, de.normalmap, de.displacementmap, { opacity: { value: 1 } }]), vertexShader: ke.meshnormal_vert, fragmentShader: ke.meshnormal_frag }, sprite: { uniforms: Ft([de.sprite, de.fog]), vertexShader: ke.sprite_vert, fragmentShader: ke.sprite_frag }, background: { uniforms: { uvTransform: { value: new We() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: ke.background_vert, fragmentShader: ke.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 } }, vertexShader: ke.backgroundCube_vert, fragmentShader: ke.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: ke.cube_vert, fragmentShader: ke.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: ke.equirect_vert, fragmentShader: ke.equirect_frag }, distanceRGBA: { uniforms: Ft([de.common, de.displacementmap, { referencePosition: { value: new A() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: ke.distanceRGBA_vert, fragmentShader: ke.distanceRGBA_frag }, shadow: { uniforms: Ft([de.lights, de.fog, { color: { value: new ue(0) }, opacity: { value: 1 } }]), vertexShader: ke.shadow_vert, fragmentShader: ke.shadow_frag } };
ln.physical = { uniforms: Ft([ln.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new We() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new We() }, clearcoatNormalScale: { value: new W(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new We() }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new We() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new We() }, sheen: { value: 0 }, sheenColor: { value: new ue(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new We() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new We() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new We() }, transmissionSamplerSize: { value: new W() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new We() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new ue(0) }, specularColor: { value: new ue(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new We() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new We() } }]), vertexShader: ke.meshphysical_vert, fragmentShader: ke.meshphysical_frag };
const Wr = { r: 0, b: 0, g: 0 };
function _x(r, e, t, n, i, s, a) {
  const o = new ue(0);
  let l = s === true ? 0 : 1, c, h, u = null, d = 0, f = null;
  function m(x, p) {
    let _ = false, v = p.isScene === true ? p.background : null;
    switch (v && v.isTexture && (v = (p.backgroundBlurriness > 0 ? t : e).get(v)), v === null ? g(o, l) : v && v.isColor && (g(v, 1), _ = true), r.xr.getEnvironmentBlendMode()) {
      case "opaque":
        _ = true;
        break;
      case "additive":
        n.buffers.color.setClear(0, 0, 0, 1, a), _ = true;
        break;
      case "alpha-blend":
        n.buffers.color.setClear(0, 0, 0, 0, a), _ = true;
        break;
    }
    (r.autoClear || _) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), v && (v.isCubeTexture || v.mapping === ys) ? (h === void 0 && (h = new vt(new ii(1, 1, 1), new _t({ name: "BackgroundCubeMaterial", uniforms: ms(ln.backgroundCube.uniforms), vertexShader: ln.backgroundCube.vertexShader, fragmentShader: ln.backgroundCube.fragmentShader, side: Ot, depthTest: false, depthWrite: false, fog: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(S, y, R) {
      this.matrixWorld.copyPosition(R.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(h)), h.material.uniforms.envMap.value = v, h.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, h.material.toneMapped = v.colorSpace !== Ue, (u !== v || d !== v.version || f !== r.toneMapping) && (h.material.needsUpdate = true, u = v, d = v.version, f = r.toneMapping), h.layers.enableAll(), x.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new vt(new _s(2, 2), new _t({ name: "BackgroundMaterial", uniforms: ms(ln.background.uniforms), vertexShader: ln.background.vertexShader, fragmentShader: ln.background.fragmentShader, side: Dn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(c)), c.material.uniforms.t2D.value = v, c.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, c.material.toneMapped = v.colorSpace !== Ue, v.matrixAutoUpdate === true && v.updateMatrix(), c.material.uniforms.uvTransform.value.copy(v.matrix), (u !== v || d !== v.version || f !== r.toneMapping) && (c.material.needsUpdate = true, u = v, d = v.version, f = r.toneMapping), c.layers.enableAll(), x.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function g(x, p) {
    x.getRGB(Wr, Ku(r)), n.buffers.color.setClear(Wr.r, Wr.g, Wr.b, p, a);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(x, p = 1) {
    o.set(x), l = p, g(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(x) {
    l = x, g(o, l);
  }, render: m };
}
function Mx(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, l = x(null);
  let c = l, h = false;
  function u(O, k, Y, J, K) {
    let ie = false;
    if (a) {
      const ee = g(J, Y, k);
      c !== ee && (c = ee, f(c.object)), ie = p(O, J, Y, K), ie && _(O, J, Y, K);
    } else {
      const ee = k.wireframe === true;
      (c.geometry !== J.id || c.program !== Y.id || c.wireframe !== ee) && (c.geometry = J.id, c.program = Y.id, c.wireframe = ee, ie = true);
    }
    K !== null && t.update(K, r.ELEMENT_ARRAY_BUFFER), (ie || h) && (h = false, R(O, k, Y, J), K !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(K).buffer));
  }
  function d() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function f(O) {
    return n.isWebGL2 ? r.bindVertexArray(O) : s.bindVertexArrayOES(O);
  }
  function m(O) {
    return n.isWebGL2 ? r.deleteVertexArray(O) : s.deleteVertexArrayOES(O);
  }
  function g(O, k, Y) {
    const J = Y.wireframe === true;
    let K = o[O.id];
    K === void 0 && (K = {}, o[O.id] = K);
    let ie = K[k.id];
    ie === void 0 && (ie = {}, K[k.id] = ie);
    let ee = ie[J];
    return ee === void 0 && (ee = x(d()), ie[J] = ee), ee;
  }
  function x(O) {
    const k = [], Y = [], J = [];
    for (let K = 0; K < i; K++) k[K] = 0, Y[K] = 0, J[K] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: k, enabledAttributes: Y, attributeDivisors: J, object: O, attributes: {}, index: null };
  }
  function p(O, k, Y, J) {
    const K = c.attributes, ie = k.attributes;
    let ee = 0;
    const be = Y.getAttributes();
    for (const oe in be) if (be[oe].location >= 0) {
      const $ = K[oe];
      let ce = ie[oe];
      if (ce === void 0 && (oe === "instanceMatrix" && O.instanceMatrix && (ce = O.instanceMatrix), oe === "instanceColor" && O.instanceColor && (ce = O.instanceColor)), $ === void 0 || $.attribute !== ce || ce && $.data !== ce.data) return true;
      ee++;
    }
    return c.attributesNum !== ee || c.index !== J;
  }
  function _(O, k, Y, J) {
    const K = {}, ie = k.attributes;
    let ee = 0;
    const be = Y.getAttributes();
    for (const oe in be) if (be[oe].location >= 0) {
      let $ = ie[oe];
      $ === void 0 && (oe === "instanceMatrix" && O.instanceMatrix && ($ = O.instanceMatrix), oe === "instanceColor" && O.instanceColor && ($ = O.instanceColor));
      const ce = {};
      ce.attribute = $, $ && $.data && (ce.data = $.data), K[oe] = ce, ee++;
    }
    c.attributes = K, c.attributesNum = ee, c.index = J;
  }
  function v() {
    const O = c.newAttributes;
    for (let k = 0, Y = O.length; k < Y; k++) O[k] = 0;
  }
  function M(O) {
    w(O, 0);
  }
  function w(O, k) {
    const Y = c.newAttributes, J = c.enabledAttributes, K = c.attributeDivisors;
    Y[O] = 1, J[O] === 0 && (r.enableVertexAttribArray(O), J[O] = 1), K[O] !== k && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](O, k), K[O] = k);
  }
  function S() {
    const O = c.newAttributes, k = c.enabledAttributes;
    for (let Y = 0, J = k.length; Y < J; Y++) k[Y] !== O[Y] && (r.disableVertexAttribArray(Y), k[Y] = 0);
  }
  function y(O, k, Y, J, K, ie) {
    n.isWebGL2 === true && (Y === r.INT || Y === r.UNSIGNED_INT) ? r.vertexAttribIPointer(O, k, Y, K, ie) : r.vertexAttribPointer(O, k, Y, J, K, ie);
  }
  function R(O, k, Y, J) {
    if (n.isWebGL2 === false && (O.isInstancedMesh || J.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
    v();
    const K = J.attributes, ie = Y.getAttributes(), ee = k.defaultAttributeValues;
    for (const be in ie) {
      const oe = ie[be];
      if (oe.location >= 0) {
        let V = K[be];
        if (V === void 0 && (be === "instanceMatrix" && O.instanceMatrix && (V = O.instanceMatrix), be === "instanceColor" && O.instanceColor && (V = O.instanceColor)), V !== void 0) {
          const $ = V.normalized, ce = V.itemSize, fe = t.get(V);
          if (fe === void 0) continue;
          const I = fe.buffer, Re = fe.type, Ie = fe.bytesPerElement;
          if (V.isInterleavedBufferAttribute) {
            const le = V.data, Se = le.stride, ne = V.offset;
            if (le.isInstancedInterleavedBuffer) {
              for (let j = 0; j < oe.locationSize; j++) w(oe.location + j, le.meshPerAttribute);
              O.isInstancedMesh !== true && J._maxInstanceCount === void 0 && (J._maxInstanceCount = le.meshPerAttribute * le.count);
            } else for (let j = 0; j < oe.locationSize; j++) M(oe.location + j);
            r.bindBuffer(r.ARRAY_BUFFER, I);
            for (let j = 0; j < oe.locationSize; j++) y(oe.location + j, ce / oe.locationSize, Re, $, Se * Ie, (ne + ce / oe.locationSize * j) * Ie);
          } else {
            if (V.isInstancedBufferAttribute) {
              for (let le = 0; le < oe.locationSize; le++) w(oe.location + le, V.meshPerAttribute);
              O.isInstancedMesh !== true && J._maxInstanceCount === void 0 && (J._maxInstanceCount = V.meshPerAttribute * V.count);
            } else for (let le = 0; le < oe.locationSize; le++) M(oe.location + le);
            r.bindBuffer(r.ARRAY_BUFFER, I);
            for (let le = 0; le < oe.locationSize; le++) y(oe.location + le, ce / oe.locationSize, Re, $, ce * Ie, ce / oe.locationSize * le * Ie);
          }
        } else if (ee !== void 0) {
          const $ = ee[be];
          if ($ !== void 0) switch ($.length) {
            case 2:
              r.vertexAttrib2fv(oe.location, $);
              break;
            case 3:
              r.vertexAttrib3fv(oe.location, $);
              break;
            case 4:
              r.vertexAttrib4fv(oe.location, $);
              break;
            default:
              r.vertexAttrib1fv(oe.location, $);
          }
        }
      }
    }
    S();
  }
  function b() {
    B();
    for (const O in o) {
      const k = o[O];
      for (const Y in k) {
        const J = k[Y];
        for (const K in J) m(J[K].object), delete J[K];
        delete k[Y];
      }
      delete o[O];
    }
  }
  function T(O) {
    if (o[O.id] === void 0) return;
    const k = o[O.id];
    for (const Y in k) {
      const J = k[Y];
      for (const K in J) m(J[K].object), delete J[K];
      delete k[Y];
    }
    delete o[O.id];
  }
  function N(O) {
    for (const k in o) {
      const Y = o[k];
      if (Y[O.id] === void 0) continue;
      const J = Y[O.id];
      for (const K in J) m(J[K].object), delete J[K];
      delete Y[O.id];
    }
  }
  function B() {
    D(), h = true, c !== l && (c = l, f(c.object));
  }
  function D() {
    l.geometry = null, l.program = null, l.wireframe = false;
  }
  return { setup: u, reset: B, resetDefaultState: D, dispose: b, releaseStatesOfGeometry: T, releaseStatesOfProgram: N, initAttributes: v, enableAttribute: M, disableUnusedAttributes: S };
}
function bx(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(c) {
    s = c;
  }
  function o(c, h) {
    r.drawArrays(s, c, h), t.update(h, s, 1);
  }
  function l(c, h, u) {
    if (u === 0) return;
    let d, f;
    if (i) d = r, f = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[f](s, c, h, u), t.update(h, s, u);
  }
  this.setMode = a, this.render = o, this.renderInstances = l;
}
function Sx(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const y = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(y) {
    if (y === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0) return "highp";
      y = "mediump";
    }
    return y === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const l = s(o);
  l !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", l, "instead."), o = l);
  const c = a || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === true, u = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), f = r.getParameter(r.MAX_TEXTURE_SIZE), m = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), g = r.getParameter(r.MAX_VERTEX_ATTRIBS), x = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), p = r.getParameter(r.MAX_VARYING_VECTORS), _ = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), v = d > 0, M = a || e.has("OES_texture_float"), w = v && M, S = a ? r.getParameter(r.MAX_SAMPLES) : 0;
  return { isWebGL2: a, drawBuffers: c, getMaxAnisotropy: i, getMaxPrecision: s, precision: o, logarithmicDepthBuffer: h, maxTextures: u, maxVertexTextures: d, maxTextureSize: f, maxCubemapSize: m, maxAttributes: g, maxVertexUniforms: x, maxVaryings: p, maxFragmentUniforms: _, vertexTextures: v, floatFragmentTextures: M, floatVertexTextures: w, maxSamples: S };
}
function wx(r) {
  const e = this;
  let t = null, n = 0, i = false, s = false;
  const a = new Xn(), o = new We(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || n !== 0 || i;
    return i = d, n = u.length, f;
  }, this.beginShadows = function() {
    s = true, h(null);
  }, this.endShadows = function() {
    s = false;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const m = u.clippingPlanes, g = u.clipIntersection, x = u.clipShadows, p = r.get(u);
    if (!i || m === null || m.length === 0 || s && !x) s ? h(null) : c();
    else {
      const _ = s ? 0 : n, v = _ * 4;
      let M = p.clippingState || null;
      l.value = M, M = h(m, d, v, f);
      for (let w = 0; w !== v; ++w) M[w] = t[w];
      p.clippingState = M, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += _;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, f, m) {
    const g = u !== null ? u.length : 0;
    let x = null;
    if (g !== 0) {
      if (x = l.value, m !== true || x === null) {
        const p = f + g * 4, _ = d.matrixWorldInverse;
        o.getNormalMatrix(_), (x === null || x.length < p) && (x = new Float32Array(p));
        for (let v = 0, M = f; v !== g; ++v, M += 4) a.copy(u[v]).applyMatrix4(_, o), a.normal.toArray(x, M), x[M + 3] = a.constant;
      }
      l.value = x, l.needsUpdate = true;
    }
    return e.numPlanes = g, e.numIntersection = 0, x;
  }
}
function Tx(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === ds ? a.mapping = Qn : o === js && (a.mapping = $n), a;
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === false) {
      const o = a.mapping;
      if (o === ds || o === js) if (e.has(a)) {
        const l = e.get(a).texture;
        return t(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new Qu(l.height / 2);
          return c.fromEquirectangularTexture(r, a), e.set(a, c), a.addEventListener("dispose", i), t(c.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: s };
}
class Ms extends Ba {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ls = 4, Dc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], _i = 20, vo = new Ms(), Uc = new ue();
let yo = null;
const vi = (1 + Math.sqrt(5)) / 2, $i = 1 / vi, Fc = [new A(1, 1, 1), new A(-1, 1, 1), new A(1, 1, -1), new A(-1, 1, -1), new A(0, vi, $i), new A(0, vi, -$i), new A($i, 0, vi), new A(-$i, 0, vi), new A(vi, $i, 0), new A(-vi, $i, 0)];
class ml {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    yo = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = true, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Bc(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Nc(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(yo), e.scissorTest = false, Xr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Qn || e.mapping === $n ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), yo = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: ct, minFilter: ct, generateMipmaps: false, type: fs, format: Wt, colorSpace: hn, depthBuffer: false }, i = Oc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Oc(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Ex(s)), this._blurMaterial = Ax(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new vt(this._lodPlanes[0], e);
    this._renderer.compile(t, vo);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new yt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(Uc), h.toneMapping = xn, h.autoClear = false;
    const f = new _n({ name: "PMREM.Background", side: Ot, depthWrite: false, depthTest: false }), m = new vt(new ii(), f);
    let g = false;
    const x = e.background;
    x ? x.isColor && (f.color.copy(x), e.background = null, g = true) : (f.color.copy(Uc), g = true);
    for (let p = 0; p < 6; p++) {
      const _ = p % 3;
      _ === 0 ? (o.up.set(0, l[p], 0), o.lookAt(c[p], 0, 0)) : _ === 1 ? (o.up.set(0, 0, l[p]), o.lookAt(0, c[p], 0)) : (o.up.set(0, l[p], 0), o.lookAt(0, 0, c[p]));
      const v = this._cubeSize;
      Xr(i, _ * v, p > 2 ? v : 0, v, v), h.setRenderTarget(i), g && h.render(m, o), h.render(e, o);
    }
    m.geometry.dispose(), m.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = x;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Qn || e.mapping === $n;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Bc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Nc());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new vt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Xr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, vo);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = Fc[(i - 1) % Fc.length];
      this._blur(e, i - 1, i, s, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", s), this._halfBlur(a, e, n, n, i, "longitudinal", s);
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new vt(this._lodPlanes[i], c), d = c.uniforms, f = this._sizeLods[n] - 1, m = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * _i - 1), g = s / m, x = isFinite(s) ? 1 + Math.floor(h * g) : _i;
    x > _i && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${_i}`);
    const p = [];
    let _ = 0;
    for (let y = 0; y < _i; ++y) {
      const R = y / g, b = Math.exp(-R * R / 2);
      p.push(b), y === 0 ? _ += b : y < x && (_ += 2 * b);
    }
    for (let y = 0; y < p.length; y++) p[y] = p[y] / _;
    d.envMap.value = e.texture, d.samples.value = x, d.weights.value = p, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: v } = this;
    d.dTheta.value = m, d.mipInt.value = v - n;
    const M = this._sizeLods[i], w = 3 * M * (i > v - ls ? i - v + ls : 0), S = 4 * (this._cubeSize - M);
    Xr(t, w, S, 3 * M, 2 * M), l.setRenderTarget(t), l.render(u, vo);
  }
}
function Ex(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - ls + 1 + Dc.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > r - ls ? l = Dc[a - r + ls - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, m = 6, g = 3, x = 2, p = 1, _ = new Float32Array(g * m * f), v = new Float32Array(x * m * f), M = new Float32Array(p * m * f);
    for (let S = 0; S < f; S++) {
      const y = S % 3 * 2 / 3 - 1, R = S > 2 ? 0 : -1, b = [y, R, 0, y + 2 / 3, R, 0, y + 2 / 3, R + 1, 0, y, R, 0, y + 2 / 3, R + 1, 0, y, R + 1, 0];
      _.set(b, g * m * S), v.set(d, x * m * S);
      const T = [S, S, S, S, S, S];
      M.set(T, p * m * S);
    }
    const w = new Ne();
    w.setAttribute("position", new et(_, g)), w.setAttribute("uv", new et(v, x)), w.setAttribute("faceIndex", new et(M, p)), e.push(w), i > ls && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Oc(r, e, t) {
  const n = new Et(r, e, t);
  return n.texture.mapping = ys, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function Xr(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Ax(r, e, t) {
  const n = new Float32Array(_i), i = new A(0, 1, 0);
  return new _t({ name: "SphericalGaussianBlur", defines: { n: _i, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${r}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: Nl(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Ln, depthTest: false, depthWrite: false });
}
function Nc() {
  return new _t({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Nl(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Ln, depthTest: false, depthWrite: false });
}
function Bc() {
  return new _t({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Nl(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Ln, depthTest: false, depthWrite: false });
}
function Nl() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Rx(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === ds || l === js, h = l === Qn || l === $n;
      if (c || h) if (o.isRenderTargetTexture && o.needsPMREMUpdate === true) {
        o.needsPMREMUpdate = false;
        let u = e.get(o);
        return t === null && (t = new ml(r)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), e.set(o, u), u.texture;
      } else {
        if (e.has(o)) return e.get(o).texture;
        {
          const u = o.image;
          if (c && u && u.height > 0 || h && u && i(u)) {
            t === null && (t = new ml(r));
            const d = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
            return e.set(o, d), o.addEventListener("dispose", s), d.texture;
          } else return null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) o[h] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: a };
}
function Cx(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function(n) {
    n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
  }, get: function(n) {
    const i = t(n);
    return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
  } };
}
function Px(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const m in d.attributes) e.remove(d.attributes[m]);
    d.removeEventListener("dispose", a), delete i[d.id];
    const f = s.get(d);
    f && (e.remove(f), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === true || (d.addEventListener("dispose", a), i[d.id] = true, t.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const m in d) e.update(d[m], r.ARRAY_BUFFER);
    const f = u.morphAttributes;
    for (const m in f) {
      const g = f[m];
      for (let x = 0, p = g.length; x < p; x++) e.update(g[x], r.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const d = [], f = u.index, m = u.attributes.position;
    let g = 0;
    if (f !== null) {
      const _ = f.array;
      g = f.version;
      for (let v = 0, M = _.length; v < M; v += 3) {
        const w = _[v + 0], S = _[v + 1], y = _[v + 2];
        d.push(w, S, S, y, y, w);
      }
    } else {
      const _ = m.array;
      g = m.version;
      for (let v = 0, M = _.length / 3 - 1; v < M; v += 3) {
        const w = v + 0, S = v + 1, y = v + 2;
        d.push(w, S, S, y, y, w);
      }
    }
    const x = new (ju(d) ? Ol : Na)(d, 1);
    x.version = g;
    const p = s.get(u);
    p && e.remove(p), s.set(u, x);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && c(u);
    } else c(u);
    return s.get(u);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function Lx(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(d) {
    s = d;
  }
  let o, l;
  function c(d) {
    o = d.type, l = d.bytesPerElement;
  }
  function h(d, f) {
    r.drawElements(s, f, o, d * l), t.update(f, s, 1);
  }
  function u(d, f, m) {
    if (m === 0) return;
    let g, x;
    if (i) g = r, x = "drawElementsInstanced";
    else if (g = e.get("ANGLE_instanced_arrays"), x = "drawElementsInstancedANGLE", g === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    g[x](s, f, o, d * l, m), t.update(f, s, m);
  }
  this.setMode = a, this.setIndex = c, this.render = h, this.renderInstances = u;
}
function Ix(r) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: i, update: n };
}
function Dx(r, e) {
  return r[0] - e[0];
}
function Ux(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function Fx(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new $e(), o = [];
  for (let c = 0; c < 8; c++) o[c] = [c, 0];
  function l(c, h, u) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === true) {
      const m = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, g = m !== void 0 ? m.length : 0;
      let x = s.get(h);
      if (x === void 0 || x.count !== g) {
        let k = function() {
          D.dispose(), s.delete(h), h.removeEventListener("dispose", k);
        };
        var f = k;
        x !== void 0 && x.texture.dispose();
        const v = h.morphAttributes.position !== void 0, M = h.morphAttributes.normal !== void 0, w = h.morphAttributes.color !== void 0, S = h.morphAttributes.position || [], y = h.morphAttributes.normal || [], R = h.morphAttributes.color || [];
        let b = 0;
        v === true && (b = 1), M === true && (b = 2), w === true && (b = 3);
        let T = h.attributes.position.count * b, N = 1;
        T > e.maxTextureSize && (N = Math.ceil(T / e.maxTextureSize), T = e.maxTextureSize);
        const B = new Float32Array(T * N * 4 * g), D = new Fa(B, T, N, g);
        D.type = Pn, D.needsUpdate = true;
        const O = b * 4;
        for (let Y = 0; Y < g; Y++) {
          const J = S[Y], K = y[Y], ie = R[Y], ee = T * N * 4 * Y;
          for (let be = 0; be < J.count; be++) {
            const oe = be * O;
            v === true && (a.fromBufferAttribute(J, be), B[ee + oe + 0] = a.x, B[ee + oe + 1] = a.y, B[ee + oe + 2] = a.z, B[ee + oe + 3] = 0), M === true && (a.fromBufferAttribute(K, be), B[ee + oe + 4] = a.x, B[ee + oe + 5] = a.y, B[ee + oe + 6] = a.z, B[ee + oe + 7] = 0), w === true && (a.fromBufferAttribute(ie, be), B[ee + oe + 8] = a.x, B[ee + oe + 9] = a.y, B[ee + oe + 10] = a.z, B[ee + oe + 11] = ie.itemSize === 4 ? a.w : 1);
          }
        }
        x = { count: g, texture: D, size: new W(T, N) }, s.set(h, x), h.addEventListener("dispose", k);
      }
      let p = 0;
      for (let v = 0; v < d.length; v++) p += d[v];
      const _ = h.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", _), u.getUniforms().setValue(r, "morphTargetInfluences", d), u.getUniforms().setValue(r, "morphTargetsTexture", x.texture, t), u.getUniforms().setValue(r, "morphTargetsTextureSize", x.size);
    } else {
      const m = d === void 0 ? 0 : d.length;
      let g = n[h.id];
      if (g === void 0 || g.length !== m) {
        g = [];
        for (let M = 0; M < m; M++) g[M] = [M, 0];
        n[h.id] = g;
      }
      for (let M = 0; M < m; M++) {
        const w = g[M];
        w[0] = M, w[1] = d[M];
      }
      g.sort(Ux);
      for (let M = 0; M < 8; M++) M < m && g[M][1] ? (o[M][0] = g[M][0], o[M][1] = g[M][1]) : (o[M][0] = Number.MAX_SAFE_INTEGER, o[M][1] = 0);
      o.sort(Dx);
      const x = h.morphAttributes.position, p = h.morphAttributes.normal;
      let _ = 0;
      for (let M = 0; M < 8; M++) {
        const w = o[M], S = w[0], y = w[1];
        S !== Number.MAX_SAFE_INTEGER && y ? (x && h.getAttribute("morphTarget" + M) !== x[S] && h.setAttribute("morphTarget" + M, x[S]), p && h.getAttribute("morphNormal" + M) !== p[S] && h.setAttribute("morphNormal" + M, p[S]), i[M] = y, _ += y) : (x && h.hasAttribute("morphTarget" + M) === true && h.deleteAttribute("morphTarget" + M), p && h.hasAttribute("morphNormal" + M) === true && h.deleteAttribute("morphNormal" + M), i[M] = 0);
      }
      const v = h.morphTargetsRelative ? 1 : 1 - _;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", v), u.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return { update: l };
}
function Ox(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    return i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER)), u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: a };
}
const ed = new rt(), td = new Fa(), nd = new Fl(), id = new cr(), zc = [], kc = [], Hc = new Float32Array(16), Gc = new Float32Array(9), Vc = new Float32Array(4);
function bs(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = zc[i];
  if (s === void 0 && (s = new Float32Array(i), zc[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, r[a].toArray(s, o);
  }
  return s;
}
function Mt(r, e) {
  if (r.length !== e.length) return false;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return false;
  return true;
}
function bt(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function ka(r, e) {
  let t = kc[e];
  t === void 0 && (t = new Int32Array(e), kc[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}
function Nx(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function Bx(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Mt(t, e)) return;
    r.uniform2fv(this.addr, e), bt(t, e);
  }
}
function zx(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Mt(t, e)) return;
    r.uniform3fv(this.addr, e), bt(t, e);
  }
}
function kx(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Mt(t, e)) return;
    r.uniform4fv(this.addr, e), bt(t, e);
  }
}
function Hx(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Mt(t, e)) return;
    r.uniformMatrix2fv(this.addr, false, e), bt(t, e);
  } else {
    if (Mt(t, n)) return;
    Vc.set(n), r.uniformMatrix2fv(this.addr, false, Vc), bt(t, n);
  }
}
function Gx(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Mt(t, e)) return;
    r.uniformMatrix3fv(this.addr, false, e), bt(t, e);
  } else {
    if (Mt(t, n)) return;
    Gc.set(n), r.uniformMatrix3fv(this.addr, false, Gc), bt(t, n);
  }
}
function Vx(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Mt(t, e)) return;
    r.uniformMatrix4fv(this.addr, false, e), bt(t, e);
  } else {
    if (Mt(t, n)) return;
    Hc.set(n), r.uniformMatrix4fv(this.addr, false, Hc), bt(t, n);
  }
}
function Wx(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function Xx(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Mt(t, e)) return;
    r.uniform2iv(this.addr, e), bt(t, e);
  }
}
function qx(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Mt(t, e)) return;
    r.uniform3iv(this.addr, e), bt(t, e);
  }
}
function Yx(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Mt(t, e)) return;
    r.uniform4iv(this.addr, e), bt(t, e);
  }
}
function jx(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function Zx(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Mt(t, e)) return;
    r.uniform2uiv(this.addr, e), bt(t, e);
  }
}
function Kx(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Mt(t, e)) return;
    r.uniform3uiv(this.addr, e), bt(t, e);
  }
}
function Jx(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Mt(t, e)) return;
    r.uniform4uiv(this.addr, e), bt(t, e);
  }
}
function Qx(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || ed, i);
}
function $x(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || nd, i);
}
function eg(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || id, i);
}
function tg(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || td, i);
}
function ng(r) {
  switch (r) {
    case 5126:
      return Nx;
    case 35664:
      return Bx;
    case 35665:
      return zx;
    case 35666:
      return kx;
    case 35674:
      return Hx;
    case 35675:
      return Gx;
    case 35676:
      return Vx;
    case 5124:
    case 35670:
      return Wx;
    case 35667:
    case 35671:
      return Xx;
    case 35668:
    case 35672:
      return qx;
    case 35669:
    case 35673:
      return Yx;
    case 5125:
      return jx;
    case 36294:
      return Zx;
    case 36295:
      return Kx;
    case 36296:
      return Jx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Qx;
    case 35679:
    case 36299:
    case 36307:
      return $x;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return eg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return tg;
  }
}
function ig(r, e) {
  r.uniform1fv(this.addr, e);
}
function sg(r, e) {
  const t = bs(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function rg(r, e) {
  const t = bs(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function ag(r, e) {
  const t = bs(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function og(r, e) {
  const t = bs(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, false, t);
}
function lg(r, e) {
  const t = bs(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, false, t);
}
function cg(r, e) {
  const t = bs(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, false, t);
}
function hg(r, e) {
  r.uniform1iv(this.addr, e);
}
function ug(r, e) {
  r.uniform2iv(this.addr, e);
}
function dg(r, e) {
  r.uniform3iv(this.addr, e);
}
function fg(r, e) {
  r.uniform4iv(this.addr, e);
}
function pg(r, e) {
  r.uniform1uiv(this.addr, e);
}
function mg(r, e) {
  r.uniform2uiv(this.addr, e);
}
function xg(r, e) {
  r.uniform3uiv(this.addr, e);
}
function gg(r, e) {
  r.uniform4uiv(this.addr, e);
}
function vg(r, e, t) {
  const n = this.cache, i = e.length, s = ka(t, i);
  Mt(n, s) || (r.uniform1iv(this.addr, s), bt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || ed, s[a]);
}
function yg(r, e, t) {
  const n = this.cache, i = e.length, s = ka(t, i);
  Mt(n, s) || (r.uniform1iv(this.addr, s), bt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || nd, s[a]);
}
function _g(r, e, t) {
  const n = this.cache, i = e.length, s = ka(t, i);
  Mt(n, s) || (r.uniform1iv(this.addr, s), bt(n, s));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || id, s[a]);
}
function Mg(r, e, t) {
  const n = this.cache, i = e.length, s = ka(t, i);
  Mt(n, s) || (r.uniform1iv(this.addr, s), bt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || td, s[a]);
}
function bg(r) {
  switch (r) {
    case 5126:
      return ig;
    case 35664:
      return sg;
    case 35665:
      return rg;
    case 35666:
      return ag;
    case 35674:
      return og;
    case 35675:
      return lg;
    case 35676:
      return cg;
    case 5124:
    case 35670:
      return hg;
    case 35667:
    case 35671:
      return ug;
    case 35668:
    case 35672:
      return dg;
    case 35669:
    case 35673:
      return fg;
    case 5125:
      return pg;
    case 36294:
      return mg;
    case 36295:
      return xg;
    case 36296:
      return gg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return vg;
    case 35679:
    case 36299:
    case 36307:
      return yg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return _g;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Mg;
  }
}
class Sg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = ng(t.type);
  }
}
class wg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = bg(t.type);
  }
}
class Tg {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const _o = /(\w+)(\])?(\[|\.)?/g;
function Wc(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function Eg(r, e, t) {
  const n = r.name, i = n.length;
  for (_o.lastIndex = 0; ; ) {
    const s = _o.exec(n), a = _o.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      Wc(t, c === void 0 ? new Sg(o, r, e) : new wg(o, r, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new Tg(o), Wc(t, u)), t = u;
    }
  }
}
class Sa {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      Eg(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== false && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Xc(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let Ag = 0;
function Rg(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function Cg(r) {
  switch (r) {
    case hn:
      return ["Linear", "( value )"];
    case Ue:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), ["Linear", "( value )"];
  }
}
function qc(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + Rg(r.getShaderSource(e), a);
  } else return i;
}
function Pg(r, e) {
  const t = Cg(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Lg(r, e) {
  let t;
  switch (e) {
    case yu:
      t = "Linear";
      break;
    case _u:
      t = "Reinhard";
      break;
    case Mu:
      t = "OptimizedCineon";
      break;
    case bu:
      t = "ACESFilmic";
      break;
    case Su:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Ig(r) {
  return [r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ks).join(`
`);
}
function Dg(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Ug(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = { type: s.type, location: r.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function ks(r) {
  return r !== "";
}
function Yc(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function jc(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Fg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function xl(r) {
  return r.replace(Fg, Og);
}
function Og(r, e) {
  const t = ke[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return xl(t);
}
const Ng = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Zc(r) {
  return r.replace(Ng, Bg);
}
function Bg(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++) i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Kc(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function zg(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === Tl ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Jh ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === mn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function kg(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap) switch (r.envMapMode) {
    case Qn:
    case $n:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case ys:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function Hg(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap) switch (r.envMapMode) {
    case $n:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function Gg(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap) switch (r.combine) {
    case or:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case gu:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case vu:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function Vg(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function Wg(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = zg(t), c = kg(t), h = Hg(t), u = Gg(t), d = Vg(t), f = t.isWebGL2 ? "" : Ig(t), m = Dg(s), g = i.createProgram();
  let x, p, _ = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (x = [m].filter(ks).join(`
`), x.length > 0 && (x += `
`), p = [f, m].filter(ks).join(`
`), p.length > 0 && (p += `
`)) : (x = [Kc(t), "#define SHADER_NAME " + t.shaderName, m, t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ks).join(`
`), p = [f, Kc(t), "#define SHADER_NAME " + t.shaderName, m, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== xn ? "#define TONE_MAPPING" : "", t.toneMapping !== xn ? ke.tonemapping_pars_fragment : "", t.toneMapping !== xn ? Lg("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", ke.encodings_pars_fragment, Pg("linearToOutputTexel", t.outputColorSpace), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(ks).join(`
`)), a = xl(a), a = Yc(a, t), a = jc(a, t), o = xl(o), o = Yc(o, t), o = jc(o, t), a = Zc(a), o = Zc(o), t.isWebGL2 && t.isRawShaderMaterial !== true && (_ = `#version 300 es
`, x = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + x, p = ["#define varying in", t.glslVersion === fl ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === fl ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
  const v = _ + x + a, M = _ + p + o, w = Xc(i, i.VERTEX_SHADER, v), S = Xc(i, i.FRAGMENT_SHADER, M);
  if (i.attachShader(g, w), i.attachShader(g, S), t.index0AttributeName !== void 0 ? i.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === true && i.bindAttribLocation(g, 0, "position"), i.linkProgram(g), r.debug.checkShaderErrors) {
    const b = i.getProgramInfoLog(g).trim(), T = i.getShaderInfoLog(w).trim(), N = i.getShaderInfoLog(S).trim();
    let B = true, D = true;
    if (i.getProgramParameter(g, i.LINK_STATUS) === false) if (B = false, typeof r.debug.onShaderError == "function") r.debug.onShaderError(i, g, w, S);
    else {
      const O = qc(i, w, "vertex"), k = qc(i, S, "fragment");
      console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(g, i.VALIDATE_STATUS) + `

Program Info Log: ` + b + `
` + O + `
` + k);
    }
    else b !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", b) : (T === "" || N === "") && (D = false);
    D && (this.diagnostics = { runnable: B, programLog: b, vertexShader: { log: T, prefix: x }, fragmentShader: { log: N, prefix: p } });
  }
  i.deleteShader(w), i.deleteShader(S);
  let y;
  this.getUniforms = function() {
    return y === void 0 && (y = new Sa(i, g)), y;
  };
  let R;
  return this.getAttributes = function() {
    return R === void 0 && (R = Ug(i, g)), R;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(g), this.program = void 0;
  }, this.name = t.shaderName, this.id = Ag++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = w, this.fragmentShader = S, this;
}
let Xg = 0;
class qg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === false && (a.add(i), i.usedTimes++), a.has(s) === false && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Yg(e), t.set(e, n)), n;
  }
}
class Yg {
  constructor(e) {
    this.id = Xg++, this.code = e, this.usedTimes = 0;
  }
}
function jg(r, e, t, n, i, s, a) {
  const o = new Oa(), l = new qg(), c = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let f = i.precision;
  const m = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function g(b) {
    return b === 1 ? "uv1" : b === 2 ? "uv2" : b === 3 ? "uv3" : "uv";
  }
  function x(b, T, N, B, D) {
    const O = B.fog, k = D.geometry, Y = b.isMeshStandardMaterial ? B.environment : null, J = (b.isMeshStandardMaterial ? t : e).get(b.envMap || Y), K = J && J.mapping === ys ? J.image.height : null, ie = m[b.type];
    b.precision !== null && (f = i.getMaxPrecision(b.precision), f !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", f, "instead."));
    const ee = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, be = ee !== void 0 ? ee.length : 0;
    let oe = 0;
    k.morphAttributes.position !== void 0 && (oe = 1), k.morphAttributes.normal !== void 0 && (oe = 2), k.morphAttributes.color !== void 0 && (oe = 3);
    let V, $, ce, fe;
    if (ie) {
      const nt = ln[ie];
      V = nt.vertexShader, $ = nt.fragmentShader;
    } else V = b.vertexShader, $ = b.fragmentShader, l.update(b), ce = l.getVertexShaderID(b), fe = l.getFragmentShaderID(b);
    const I = r.getRenderTarget(), Re = D.isInstancedMesh === true, Ie = !!b.map, le = !!b.matcap, Se = !!J, ne = !!b.aoMap, j = !!b.lightMap, te = !!b.bumpMap, ve = !!b.normalMap, he = !!b.displacementMap, Pe = !!b.emissiveMap, Le = !!b.metalnessMap, Ae = !!b.roughnessMap, Be = b.clearcoat > 0, Je = b.iridescence > 0, P = b.sheen > 0, E = b.transmission > 0, G = Be && !!b.clearcoatMap, se = Be && !!b.clearcoatNormalMap, re = Be && !!b.clearcoatRoughnessMap, pe = Je && !!b.iridescenceMap, L = Je && !!b.iridescenceThicknessMap, Q = P && !!b.sheenColorMap, H = P && !!b.sheenRoughnessMap, me = !!b.specularMap, Me = !!b.specularColorMap, Te = !!b.specularIntensityMap, ge = E && !!b.transmissionMap, we = E && !!b.thicknessMap, Fe = !!b.gradientMap, Ve = !!b.alphaMap, ut = b.alphaTest > 0, U = !!b.extensions, X = !!k.attributes.uv1, ae = !!k.attributes.uv2, ye = !!k.attributes.uv3;
    return { isWebGL2: h, shaderID: ie, shaderName: b.type, vertexShader: V, fragmentShader: $, defines: b.defines, customVertexShaderID: ce, customFragmentShaderID: fe, isRawShaderMaterial: b.isRawShaderMaterial === true, glslVersion: b.glslVersion, precision: f, instancing: Re, instancingColor: Re && D.instanceColor !== null, supportsVertexTextures: d, outputColorSpace: I === null ? r.outputColorSpace : I.isXRRenderTarget === true ? I.texture.colorSpace : hn, map: Ie, matcap: le, envMap: Se, envMapMode: Se && J.mapping, envMapCubeUVHeight: K, aoMap: ne, lightMap: j, bumpMap: te, normalMap: ve, displacementMap: d && he, emissiveMap: Pe, normalMapObjectSpace: ve && b.normalMapType === Wu, normalMapTangentSpace: ve && b.normalMapType === ni, metalnessMap: Le, roughnessMap: Ae, clearcoat: Be, clearcoatMap: G, clearcoatNormalMap: se, clearcoatRoughnessMap: re, iridescence: Je, iridescenceMap: pe, iridescenceThicknessMap: L, sheen: P, sheenColorMap: Q, sheenRoughnessMap: H, specularMap: me, specularColorMap: Me, specularIntensityMap: Te, transmission: E, transmissionMap: ge, thicknessMap: we, gradientMap: Fe, opaque: b.transparent === false && b.blending === Ti, alphaMap: Ve, alphaTest: ut, combine: b.combine, mapUv: Ie && g(b.map.channel), aoMapUv: ne && g(b.aoMap.channel), lightMapUv: j && g(b.lightMap.channel), bumpMapUv: te && g(b.bumpMap.channel), normalMapUv: ve && g(b.normalMap.channel), displacementMapUv: he && g(b.displacementMap.channel), emissiveMapUv: Pe && g(b.emissiveMap.channel), metalnessMapUv: Le && g(b.metalnessMap.channel), roughnessMapUv: Ae && g(b.roughnessMap.channel), clearcoatMapUv: G && g(b.clearcoatMap.channel), clearcoatNormalMapUv: se && g(b.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: re && g(b.clearcoatRoughnessMap.channel), iridescenceMapUv: pe && g(b.iridescenceMap.channel), iridescenceThicknessMapUv: L && g(b.iridescenceThicknessMap.channel), sheenColorMapUv: Q && g(b.sheenColorMap.channel), sheenRoughnessMapUv: H && g(b.sheenRoughnessMap.channel), specularMapUv: me && g(b.specularMap.channel), specularColorMapUv: Me && g(b.specularColorMap.channel), specularIntensityMapUv: Te && g(b.specularIntensityMap.channel), transmissionMapUv: ge && g(b.transmissionMap.channel), thicknessMapUv: we && g(b.thicknessMap.channel), alphaMapUv: Ve && g(b.alphaMap.channel), vertexTangents: ve && !!k.attributes.tangent, vertexColors: b.vertexColors, vertexAlphas: b.vertexColors === true && !!k.attributes.color && k.attributes.color.itemSize === 4, vertexUv1s: X, vertexUv2s: ae, vertexUv3s: ye, pointsUvs: D.isPoints === true && !!k.attributes.uv && (Ie || Ve), fog: !!O, useFog: b.fog === true, fogExp2: O && O.isFogExp2, flatShading: b.flatShading === true, sizeAttenuation: b.sizeAttenuation === true, logarithmicDepthBuffer: u, skinning: D.isSkinnedMesh === true, morphTargets: k.morphAttributes.position !== void 0, morphNormals: k.morphAttributes.normal !== void 0, morphColors: k.morphAttributes.color !== void 0, morphTargetsCount: be, morphTextureStride: oe, numDirLights: T.directional.length, numPointLights: T.point.length, numSpotLights: T.spot.length, numSpotLightMaps: T.spotLightMap.length, numRectAreaLights: T.rectArea.length, numHemiLights: T.hemi.length, numDirLightShadows: T.directionalShadowMap.length, numPointLightShadows: T.pointShadowMap.length, numSpotLightShadows: T.spotShadowMap.length, numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: b.dithering, shadowMapEnabled: r.shadowMap.enabled && N.length > 0, shadowMapType: r.shadowMap.type, toneMapping: b.toneMapped ? r.toneMapping : xn, useLegacyLights: r.useLegacyLights, premultipliedAlpha: b.premultipliedAlpha, doubleSided: b.side === cn, flipSided: b.side === Ot, useDepthPacking: b.depthPacking >= 0, depthPacking: b.depthPacking || 0, index0AttributeName: b.index0AttributeName, extensionDerivatives: U && b.extensions.derivatives === true, extensionFragDepth: U && b.extensions.fragDepth === true, extensionDrawBuffers: U && b.extensions.drawBuffers === true, extensionShaderTextureLOD: U && b.extensions.shaderTextureLOD === true, rendererExtensionFragDepth: h || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"), customProgramCacheKey: b.customProgramCacheKey() };
  }
  function p(b) {
    const T = [];
    if (b.shaderID ? T.push(b.shaderID) : (T.push(b.customVertexShaderID), T.push(b.customFragmentShaderID)), b.defines !== void 0) for (const N in b.defines) T.push(N), T.push(b.defines[N]);
    return b.isRawShaderMaterial === false && (_(T, b), v(T, b), T.push(r.outputColorSpace)), T.push(b.customProgramCacheKey), T.join();
  }
  function _(b, T) {
    b.push(T.precision), b.push(T.outputColorSpace), b.push(T.envMapMode), b.push(T.envMapCubeUVHeight), b.push(T.mapUv), b.push(T.alphaMapUv), b.push(T.lightMapUv), b.push(T.aoMapUv), b.push(T.bumpMapUv), b.push(T.normalMapUv), b.push(T.displacementMapUv), b.push(T.emissiveMapUv), b.push(T.metalnessMapUv), b.push(T.roughnessMapUv), b.push(T.clearcoatMapUv), b.push(T.clearcoatNormalMapUv), b.push(T.clearcoatRoughnessMapUv), b.push(T.iridescenceMapUv), b.push(T.iridescenceThicknessMapUv), b.push(T.sheenColorMapUv), b.push(T.sheenRoughnessMapUv), b.push(T.specularMapUv), b.push(T.specularColorMapUv), b.push(T.specularIntensityMapUv), b.push(T.transmissionMapUv), b.push(T.thicknessMapUv), b.push(T.combine), b.push(T.fogExp2), b.push(T.sizeAttenuation), b.push(T.morphTargetsCount), b.push(T.morphAttributeCount), b.push(T.numDirLights), b.push(T.numPointLights), b.push(T.numSpotLights), b.push(T.numSpotLightMaps), b.push(T.numHemiLights), b.push(T.numRectAreaLights), b.push(T.numDirLightShadows), b.push(T.numPointLightShadows), b.push(T.numSpotLightShadows), b.push(T.numSpotLightShadowsWithMaps), b.push(T.shadowMapType), b.push(T.toneMapping), b.push(T.numClippingPlanes), b.push(T.numClipIntersection), b.push(T.depthPacking);
  }
  function v(b, T) {
    o.disableAll(), T.isWebGL2 && o.enable(0), T.supportsVertexTextures && o.enable(1), T.instancing && o.enable(2), T.instancingColor && o.enable(3), T.matcap && o.enable(4), T.envMap && o.enable(5), T.normalMapObjectSpace && o.enable(6), T.normalMapTangentSpace && o.enable(7), T.clearcoat && o.enable(8), T.iridescence && o.enable(9), T.alphaTest && o.enable(10), T.vertexColors && o.enable(11), T.vertexAlphas && o.enable(12), T.vertexUv1s && o.enable(13), T.vertexUv2s && o.enable(14), T.vertexUv3s && o.enable(15), T.vertexTangents && o.enable(16), b.push(o.mask), o.disableAll(), T.fog && o.enable(0), T.useFog && o.enable(1), T.flatShading && o.enable(2), T.logarithmicDepthBuffer && o.enable(3), T.skinning && o.enable(4), T.morphTargets && o.enable(5), T.morphNormals && o.enable(6), T.morphColors && o.enable(7), T.premultipliedAlpha && o.enable(8), T.shadowMapEnabled && o.enable(9), T.useLegacyLights && o.enable(10), T.doubleSided && o.enable(11), T.flipSided && o.enable(12), T.useDepthPacking && o.enable(13), T.dithering && o.enable(14), T.transmission && o.enable(15), T.sheen && o.enable(16), T.opaque && o.enable(17), T.pointsUvs && o.enable(18), b.push(o.mask);
  }
  function M(b) {
    const T = m[b.type];
    let N;
    if (T) {
      const B = ln[T];
      N = Jn.clone(B.uniforms);
    } else N = b.uniforms;
    return N;
  }
  function w(b, T) {
    let N;
    for (let B = 0, D = c.length; B < D; B++) {
      const O = c[B];
      if (O.cacheKey === T) {
        N = O, ++N.usedTimes;
        break;
      }
    }
    return N === void 0 && (N = new Wg(r, T, b, s), c.push(N)), N;
  }
  function S(b) {
    if (--b.usedTimes === 0) {
      const T = c.indexOf(b);
      c[T] = c[c.length - 1], c.pop(), b.destroy();
    }
  }
  function y(b) {
    l.remove(b);
  }
  function R() {
    l.dispose();
  }
  return { getParameters: x, getProgramCacheKey: p, getUniforms: M, acquireProgram: w, releaseProgram: S, releaseShaderCache: y, programs: c, dispose: R };
}
function Zg() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && (a = {}, r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Kg(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function Jc(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Qc() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, d, f, m, g, x) {
    let p = r[e];
    return p === void 0 ? (p = { id: u.id, object: u, geometry: d, material: f, groupOrder: m, renderOrder: u.renderOrder, z: g, group: x }, r[e] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = m, p.renderOrder = u.renderOrder, p.z = g, p.group = x), e++, p;
  }
  function o(u, d, f, m, g, x) {
    const p = a(u, d, f, m, g, x);
    f.transmission > 0 ? n.push(p) : f.transparent === true ? i.push(p) : t.push(p);
  }
  function l(u, d, f, m, g, x) {
    const p = a(u, d, f, m, g, x);
    f.transmission > 0 ? n.unshift(p) : f.transparent === true ? i.unshift(p) : t.unshift(p);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || Kg), n.length > 1 && n.sort(d || Jc), i.length > 1 && i.sort(d || Jc);
  }
  function h() {
    for (let u = e, d = r.length; u < d; u++) {
      const f = r[u];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: i, init: s, push: o, unshift: l, finish: h, sort: c };
}
function Jg() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new Qc(), r.set(n, [a])) : i >= s.length ? (a = new Qc(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function Qg() {
  const r = {};
  return { get: function(e) {
    if (r[e.id] !== void 0) return r[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new A(), color: new ue() };
        break;
      case "SpotLight":
        t = { position: new A(), direction: new A(), color: new ue(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new A(), color: new ue(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new A(), skyColor: new ue(), groundColor: new ue() };
        break;
      case "RectAreaLight":
        t = { color: new ue(), position: new A(), halfWidth: new A(), halfHeight: new A() };
        break;
    }
    return r[e.id] = t, t;
  } };
}
function $g() {
  const r = {};
  return { get: function(e) {
    if (r[e.id] !== void 0) return r[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new W() };
        break;
      case "SpotLight":
        t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new W() };
        break;
      case "PointLight":
        t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new W(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return r[e.id] = t, t;
  } };
}
let ev = 0;
function tv(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function nv(r, e) {
  const t = new Qg(), n = $g(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0 };
  for (let h = 0; h < 9; h++) i.probe.push(new A());
  const s = new A(), a = new _e(), o = new _e();
  function l(h, u) {
    let d = 0, f = 0, m = 0;
    for (let N = 0; N < 9; N++) i.probe[N].set(0, 0, 0);
    let g = 0, x = 0, p = 0, _ = 0, v = 0, M = 0, w = 0, S = 0, y = 0, R = 0;
    h.sort(tv);
    const b = u === true ? Math.PI : 1;
    for (let N = 0, B = h.length; N < B; N++) {
      const D = h[N], O = D.color, k = D.intensity, Y = D.distance, J = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight) d += O.r * k * b, f += O.g * k * b, m += O.b * k * b;
      else if (D.isLightProbe) for (let K = 0; K < 9; K++) i.probe[K].addScaledVector(D.sh.coefficients[K], k);
      else if (D.isDirectionalLight) {
        const K = t.get(D);
        if (K.color.copy(D.color).multiplyScalar(D.intensity * b), D.castShadow) {
          const ie = D.shadow, ee = n.get(D);
          ee.shadowBias = ie.bias, ee.shadowNormalBias = ie.normalBias, ee.shadowRadius = ie.radius, ee.shadowMapSize = ie.mapSize, i.directionalShadow[g] = ee, i.directionalShadowMap[g] = J, i.directionalShadowMatrix[g] = D.shadow.matrix, M++;
        }
        i.directional[g] = K, g++;
      } else if (D.isSpotLight) {
        const K = t.get(D);
        K.position.setFromMatrixPosition(D.matrixWorld), K.color.copy(O).multiplyScalar(k * b), K.distance = Y, K.coneCos = Math.cos(D.angle), K.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), K.decay = D.decay, i.spot[p] = K;
        const ie = D.shadow;
        if (D.map && (i.spotLightMap[y] = D.map, y++, ie.updateMatrices(D), D.castShadow && R++), i.spotLightMatrix[p] = ie.matrix, D.castShadow) {
          const ee = n.get(D);
          ee.shadowBias = ie.bias, ee.shadowNormalBias = ie.normalBias, ee.shadowRadius = ie.radius, ee.shadowMapSize = ie.mapSize, i.spotShadow[p] = ee, i.spotShadowMap[p] = J, S++;
        }
        p++;
      } else if (D.isRectAreaLight) {
        const K = t.get(D);
        K.color.copy(O).multiplyScalar(k), K.halfWidth.set(D.width * 0.5, 0, 0), K.halfHeight.set(0, D.height * 0.5, 0), i.rectArea[_] = K, _++;
      } else if (D.isPointLight) {
        const K = t.get(D);
        if (K.color.copy(D.color).multiplyScalar(D.intensity * b), K.distance = D.distance, K.decay = D.decay, D.castShadow) {
          const ie = D.shadow, ee = n.get(D);
          ee.shadowBias = ie.bias, ee.shadowNormalBias = ie.normalBias, ee.shadowRadius = ie.radius, ee.shadowMapSize = ie.mapSize, ee.shadowCameraNear = ie.camera.near, ee.shadowCameraFar = ie.camera.far, i.pointShadow[x] = ee, i.pointShadowMap[x] = J, i.pointShadowMatrix[x] = D.shadow.matrix, w++;
        }
        i.point[x] = K, x++;
      } else if (D.isHemisphereLight) {
        const K = t.get(D);
        K.skyColor.copy(D.color).multiplyScalar(k * b), K.groundColor.copy(D.groundColor).multiplyScalar(k * b), i.hemi[v] = K, v++;
      }
    }
    _ > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === true ? (i.rectAreaLTC1 = de.LTC_FLOAT_1, i.rectAreaLTC2 = de.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === true ? (i.rectAreaLTC1 = de.LTC_HALF_1, i.rectAreaLTC2 = de.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = f, i.ambient[2] = m;
    const T = i.hash;
    (T.directionalLength !== g || T.pointLength !== x || T.spotLength !== p || T.rectAreaLength !== _ || T.hemiLength !== v || T.numDirectionalShadows !== M || T.numPointShadows !== w || T.numSpotShadows !== S || T.numSpotMaps !== y) && (i.directional.length = g, i.spot.length = p, i.rectArea.length = _, i.point.length = x, i.hemi.length = v, i.directionalShadow.length = M, i.directionalShadowMap.length = M, i.pointShadow.length = w, i.pointShadowMap.length = w, i.spotShadow.length = S, i.spotShadowMap.length = S, i.directionalShadowMatrix.length = M, i.pointShadowMatrix.length = w, i.spotLightMatrix.length = S + y - R, i.spotLightMap.length = y, i.numSpotLightShadowsWithMaps = R, T.directionalLength = g, T.pointLength = x, T.spotLength = p, T.rectAreaLength = _, T.hemiLength = v, T.numDirectionalShadows = M, T.numPointShadows = w, T.numSpotShadows = S, T.numSpotMaps = y, i.version = ev++);
  }
  function c(h, u) {
    let d = 0, f = 0, m = 0, g = 0, x = 0;
    const p = u.matrixWorldInverse;
    for (let _ = 0, v = h.length; _ < v; _++) {
      const M = h[_];
      if (M.isDirectionalLight) {
        const w = i.directional[d];
        w.direction.setFromMatrixPosition(M.matrixWorld), s.setFromMatrixPosition(M.target.matrixWorld), w.direction.sub(s), w.direction.transformDirection(p), d++;
      } else if (M.isSpotLight) {
        const w = i.spot[m];
        w.position.setFromMatrixPosition(M.matrixWorld), w.position.applyMatrix4(p), w.direction.setFromMatrixPosition(M.matrixWorld), s.setFromMatrixPosition(M.target.matrixWorld), w.direction.sub(s), w.direction.transformDirection(p), m++;
      } else if (M.isRectAreaLight) {
        const w = i.rectArea[g];
        w.position.setFromMatrixPosition(M.matrixWorld), w.position.applyMatrix4(p), o.identity(), a.copy(M.matrixWorld), a.premultiply(p), o.extractRotation(a), w.halfWidth.set(M.width * 0.5, 0, 0), w.halfHeight.set(0, M.height * 0.5, 0), w.halfWidth.applyMatrix4(o), w.halfHeight.applyMatrix4(o), g++;
      } else if (M.isPointLight) {
        const w = i.point[f];
        w.position.setFromMatrixPosition(M.matrixWorld), w.position.applyMatrix4(p), f++;
      } else if (M.isHemisphereLight) {
        const w = i.hemi[x];
        w.direction.setFromMatrixPosition(M.matrixWorld), w.direction.transformDirection(p), x++;
      }
    }
  }
  return { setup: l, setupView: c, state: i };
}
function $c(r, e) {
  const t = new nv(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function a(u) {
    n.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function l(u) {
    t.setup(n, u);
  }
  function c(u) {
    t.setupView(n, u);
  }
  return { init: s, state: { lightsArray: n, shadowsArray: i, lights: t }, setupLights: l, setupLightsView: c, pushLight: a, pushShadow: o };
}
function iv(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, a = 0) {
    const o = t.get(s);
    let l;
    return o === void 0 ? (l = new $c(r, e), t.set(s, [l])) : a >= o.length ? (l = new $c(r, e), o.push(l)) : l = o[a], l;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: i };
}
class Bl extends Pt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Gu, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class zl extends Pt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const sv = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, rv = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function av(r, e, t) {
  let n = new za();
  const i = new W(), s = new W(), a = new $e(), o = new Bl({ depthPacking: Vu }), l = new zl(), c = {}, h = t.maxTextureSize, u = { [Dn]: Ot, [Ot]: Dn, [cn]: cn }, d = new _t({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new W() }, radius: { value: 4 } }, vertexShader: sv, fragmentShader: rv }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const m = new Ne();
  m.setAttribute("position", new et(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const g = new vt(m, d), x = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Tl;
  let p = this.type;
  this.render = function(w, S, y) {
    if (x.enabled === false || x.autoUpdate === false && x.needsUpdate === false || w.length === 0) return;
    const R = r.getRenderTarget(), b = r.getActiveCubeFace(), T = r.getActiveMipmapLevel(), N = r.state;
    N.setBlending(Ln), N.buffers.color.setClear(1, 1, 1, 1), N.buffers.depth.setTest(true), N.setScissorTest(false);
    const B = p !== mn && this.type === mn, D = p === mn && this.type !== mn;
    for (let O = 0, k = w.length; O < k; O++) {
      const Y = w[O], J = Y.shadow;
      if (J === void 0) {
        console.warn("THREE.WebGLShadowMap:", Y, "has no shadow.");
        continue;
      }
      if (J.autoUpdate === false && J.needsUpdate === false) continue;
      i.copy(J.mapSize);
      const K = J.getFrameExtents();
      if (i.multiply(K), s.copy(J.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / K.x), i.x = s.x * K.x, J.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / K.y), i.y = s.y * K.y, J.mapSize.y = s.y)), J.map === null || B === true || D === true) {
        const ee = this.type !== mn ? { minFilter: at, magFilter: at } : {};
        J.map !== null && J.map.dispose(), J.map = new Et(i.x, i.y, ee), J.map.texture.name = Y.name + ".shadowMap", J.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(J.map), r.clear();
      const ie = J.getViewportCount();
      for (let ee = 0; ee < ie; ee++) {
        const be = J.getViewport(ee);
        a.set(s.x * be.x, s.y * be.y, s.x * be.z, s.y * be.w), N.viewport(a), J.updateMatrices(Y, ee), n = J.getFrustum(), M(S, y, J.camera, Y, this.type);
      }
      J.isPointLightShadow !== true && this.type === mn && _(J, y), J.needsUpdate = false;
    }
    p = this.type, x.needsUpdate = false, r.setRenderTarget(R, b, T);
  };
  function _(w, S) {
    const y = e.update(g);
    d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, f.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = true, f.needsUpdate = true), w.mapPass === null && (w.mapPass = new Et(i.x, i.y)), d.uniforms.shadow_pass.value = w.map.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, r.setRenderTarget(w.mapPass), r.clear(), r.renderBufferDirect(S, null, y, d, g, null), f.uniforms.shadow_pass.value = w.mapPass.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, r.setRenderTarget(w.map), r.clear(), r.renderBufferDirect(S, null, y, f, g, null);
  }
  function v(w, S, y, R) {
    let b = null;
    const T = y.isPointLight === true ? w.customDistanceMaterial : w.customDepthMaterial;
    if (T !== void 0) b = T;
    else if (b = y.isPointLight === true ? l : o, r.localClippingEnabled && S.clipShadows === true && Array.isArray(S.clippingPlanes) && S.clippingPlanes.length !== 0 || S.displacementMap && S.displacementScale !== 0 || S.alphaMap && S.alphaTest > 0 || S.map && S.alphaTest > 0) {
      const N = b.uuid, B = S.uuid;
      let D = c[N];
      D === void 0 && (D = {}, c[N] = D);
      let O = D[B];
      O === void 0 && (O = b.clone(), D[B] = O), b = O;
    }
    if (b.visible = S.visible, b.wireframe = S.wireframe, R === mn ? b.side = S.shadowSide !== null ? S.shadowSide : S.side : b.side = S.shadowSide !== null ? S.shadowSide : u[S.side], b.alphaMap = S.alphaMap, b.alphaTest = S.alphaTest, b.map = S.map, b.clipShadows = S.clipShadows, b.clippingPlanes = S.clippingPlanes, b.clipIntersection = S.clipIntersection, b.displacementMap = S.displacementMap, b.displacementScale = S.displacementScale, b.displacementBias = S.displacementBias, b.wireframeLinewidth = S.wireframeLinewidth, b.linewidth = S.linewidth, y.isPointLight === true && b.isMeshDistanceMaterial === true) {
      const N = r.properties.get(b);
      N.light = y;
    }
    return b;
  }
  function M(w, S, y, R, b) {
    if (w.visible === false) return;
    if (w.layers.test(S.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && b === mn) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse, w.matrixWorld);
      const B = e.update(w), D = w.material;
      if (Array.isArray(D)) {
        const O = B.groups;
        for (let k = 0, Y = O.length; k < Y; k++) {
          const J = O[k], K = D[J.materialIndex];
          if (K && K.visible) {
            const ie = v(w, K, R, b);
            r.renderBufferDirect(y, null, B, ie, w, J);
          }
        }
      } else if (D.visible) {
        const O = v(w, D, R, b);
        r.renderBufferDirect(y, null, B, O, w, null);
      }
    }
    const N = w.children;
    for (let B = 0, D = N.length; B < D; B++) M(N[B], S, y, R, b);
  }
}
function ov(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let U = false;
    const X = new $e();
    let ae = null;
    const ye = new $e(0, 0, 0, 0);
    return { setMask: function(Ee) {
      ae !== Ee && !U && (r.colorMask(Ee, Ee, Ee, Ee), ae = Ee);
    }, setLocked: function(Ee) {
      U = Ee;
    }, setClear: function(Ee, nt, it, At, Nn) {
      Nn === true && (Ee *= At, nt *= At, it *= At), X.set(Ee, nt, it, At), ye.equals(X) === false && (r.clearColor(Ee, nt, it, At), ye.copy(X));
    }, reset: function() {
      U = false, ae = null, ye.set(-1, 0, 0, 0);
    } };
  }
  function s() {
    let U = false, X = null, ae = null, ye = null;
    return { setTest: function(Ee) {
      Ee ? I(r.DEPTH_TEST) : Re(r.DEPTH_TEST);
    }, setMask: function(Ee) {
      X !== Ee && !U && (r.depthMask(Ee), X = Ee);
    }, setFunc: function(Ee) {
      if (ae !== Ee) {
        switch (Ee) {
          case hu:
            r.depthFunc(r.NEVER);
            break;
          case uu:
            r.depthFunc(r.ALWAYS);
            break;
          case du:
            r.depthFunc(r.LESS);
            break;
          case Ta:
            r.depthFunc(r.LEQUAL);
            break;
          case fu:
            r.depthFunc(r.EQUAL);
            break;
          case pu:
            r.depthFunc(r.GEQUAL);
            break;
          case mu:
            r.depthFunc(r.GREATER);
            break;
          case xu:
            r.depthFunc(r.NOTEQUAL);
            break;
          default:
            r.depthFunc(r.LEQUAL);
        }
        ae = Ee;
      }
    }, setLocked: function(Ee) {
      U = Ee;
    }, setClear: function(Ee) {
      ye !== Ee && (r.clearDepth(Ee), ye = Ee);
    }, reset: function() {
      U = false, X = null, ae = null, ye = null;
    } };
  }
  function a() {
    let U = false, X = null, ae = null, ye = null, Ee = null, nt = null, it = null, At = null, Nn = null;
    return { setTest: function(dt) {
      U || (dt ? I(r.STENCIL_TEST) : Re(r.STENCIL_TEST));
    }, setMask: function(dt) {
      X !== dt && !U && (r.stencilMask(dt), X = dt);
    }, setFunc: function(dt, jt, fn) {
      (ae !== dt || ye !== jt || Ee !== fn) && (r.stencilFunc(dt, jt, fn), ae = dt, ye = jt, Ee = fn);
    }, setOp: function(dt, jt, fn) {
      (nt !== dt || it !== jt || At !== fn) && (r.stencilOp(dt, jt, fn), nt = dt, it = jt, At = fn);
    }, setLocked: function(dt) {
      U = dt;
    }, setClear: function(dt) {
      Nn !== dt && (r.clearStencil(dt), Nn = dt);
    }, reset: function() {
      U = false, X = null, ae = null, ye = null, Ee = null, nt = null, it = null, At = null, Nn = null;
    } };
  }
  const o = new i(), l = new s(), c = new a(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, f = {}, m = /* @__PURE__ */ new WeakMap(), g = [], x = null, p = false, _ = null, v = null, M = null, w = null, S = null, y = null, R = null, b = false, T = null, N = null, B = null, D = null, O = null;
  const k = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Y = false, J = 0;
  const K = r.getParameter(r.VERSION);
  K.indexOf("WebGL") !== -1 ? (J = parseFloat(/^WebGL (\d)/.exec(K)[1]), Y = J >= 1) : K.indexOf("OpenGL ES") !== -1 && (J = parseFloat(/^OpenGL ES (\d)/.exec(K)[1]), Y = J >= 2);
  let ie = null, ee = {};
  const be = r.getParameter(r.SCISSOR_BOX), oe = r.getParameter(r.VIEWPORT), V = new $e().fromArray(be), $ = new $e().fromArray(oe);
  function ce(U, X, ae, ye) {
    const Ee = new Uint8Array(4), nt = r.createTexture();
    r.bindTexture(U, nt), r.texParameteri(U, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(U, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let it = 0; it < ae; it++) n && (U === r.TEXTURE_3D || U === r.TEXTURE_2D_ARRAY) ? r.texImage3D(X, 0, r.RGBA, 1, 1, ye, 0, r.RGBA, r.UNSIGNED_BYTE, Ee) : r.texImage2D(X + it, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, Ee);
    return nt;
  }
  const fe = {};
  fe[r.TEXTURE_2D] = ce(r.TEXTURE_2D, r.TEXTURE_2D, 1), fe[r.TEXTURE_CUBE_MAP] = ce(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (fe[r.TEXTURE_2D_ARRAY] = ce(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), fe[r.TEXTURE_3D] = ce(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), I(r.DEPTH_TEST), l.setFunc(Ta), he(false), Pe(zo), I(r.CULL_FACE), te(Ln);
  function I(U) {
    d[U] !== true && (r.enable(U), d[U] = true);
  }
  function Re(U) {
    d[U] !== false && (r.disable(U), d[U] = false);
  }
  function Ie(U, X) {
    return f[U] !== X ? (r.bindFramebuffer(U, X), f[U] = X, n && (U === r.DRAW_FRAMEBUFFER && (f[r.FRAMEBUFFER] = X), U === r.FRAMEBUFFER && (f[r.DRAW_FRAMEBUFFER] = X)), true) : false;
  }
  function le(U, X) {
    let ae = g, ye = false;
    if (U) if (ae = m.get(X), ae === void 0 && (ae = [], m.set(X, ae)), U.isWebGLMultipleRenderTargets) {
      const Ee = U.texture;
      if (ae.length !== Ee.length || ae[0] !== r.COLOR_ATTACHMENT0) {
        for (let nt = 0, it = Ee.length; nt < it; nt++) ae[nt] = r.COLOR_ATTACHMENT0 + nt;
        ae.length = Ee.length, ye = true;
      }
    } else ae[0] !== r.COLOR_ATTACHMENT0 && (ae[0] = r.COLOR_ATTACHMENT0, ye = true);
    else ae[0] !== r.BACK && (ae[0] = r.BACK, ye = true);
    ye && (t.isWebGL2 ? r.drawBuffers(ae) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae));
  }
  function Se(U) {
    return x !== U ? (r.useProgram(U), x = U, true) : false;
  }
  const ne = { [yi]: r.FUNC_ADD, [$h]: r.FUNC_SUBTRACT, [eu]: r.FUNC_REVERSE_SUBTRACT };
  if (n) ne[Go] = r.MIN, ne[Vo] = r.MAX;
  else {
    const U = e.get("EXT_blend_minmax");
    U !== null && (ne[Go] = U.MIN_EXT, ne[Vo] = U.MAX_EXT);
  }
  const j = { [tu]: r.ZERO, [nu]: r.ONE, [iu]: r.SRC_COLOR, [El]: r.SRC_ALPHA, [cu]: r.SRC_ALPHA_SATURATE, [ou]: r.DST_COLOR, [ru]: r.DST_ALPHA, [su]: r.ONE_MINUS_SRC_COLOR, [Al]: r.ONE_MINUS_SRC_ALPHA, [lu]: r.ONE_MINUS_DST_COLOR, [au]: r.ONE_MINUS_DST_ALPHA };
  function te(U, X, ae, ye, Ee, nt, it, At) {
    if (U === Ln) {
      p === true && (Re(r.BLEND), p = false);
      return;
    }
    if (p === false && (I(r.BLEND), p = true), U !== Qh) {
      if (U !== _ || At !== b) {
        if ((v !== yi || S !== yi) && (r.blendEquation(r.FUNC_ADD), v = yi, S = yi), At) switch (U) {
          case Ti:
            r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
            break;
          case wa:
            r.blendFunc(r.ONE, r.ONE);
            break;
          case ko:
            r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
            break;
          case Ho:
            r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", U);
            break;
        }
        else switch (U) {
          case Ti:
            r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
            break;
          case wa:
            r.blendFunc(r.SRC_ALPHA, r.ONE);
            break;
          case ko:
            r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
            break;
          case Ho:
            r.blendFunc(r.ZERO, r.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", U);
            break;
        }
        M = null, w = null, y = null, R = null, _ = U, b = At;
      }
      return;
    }
    Ee = Ee || X, nt = nt || ae, it = it || ye, (X !== v || Ee !== S) && (r.blendEquationSeparate(ne[X], ne[Ee]), v = X, S = Ee), (ae !== M || ye !== w || nt !== y || it !== R) && (r.blendFuncSeparate(j[ae], j[ye], j[nt], j[it]), M = ae, w = ye, y = nt, R = it), _ = U, b = false;
  }
  function ve(U, X) {
    U.side === cn ? Re(r.CULL_FACE) : I(r.CULL_FACE);
    let ae = U.side === Ot;
    X && (ae = !ae), he(ae), U.blending === Ti && U.transparent === false ? te(Ln) : te(U.blending, U.blendEquation, U.blendSrc, U.blendDst, U.blendEquationAlpha, U.blendSrcAlpha, U.blendDstAlpha, U.premultipliedAlpha), l.setFunc(U.depthFunc), l.setTest(U.depthTest), l.setMask(U.depthWrite), o.setMask(U.colorWrite);
    const ye = U.stencilWrite;
    c.setTest(ye), ye && (c.setMask(U.stencilWriteMask), c.setFunc(U.stencilFunc, U.stencilRef, U.stencilFuncMask), c.setOp(U.stencilFail, U.stencilZFail, U.stencilZPass)), Ae(U.polygonOffset, U.polygonOffsetFactor, U.polygonOffsetUnits), U.alphaToCoverage === true ? I(r.SAMPLE_ALPHA_TO_COVERAGE) : Re(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function he(U) {
    T !== U && (U ? r.frontFace(r.CW) : r.frontFace(r.CCW), T = U);
  }
  function Pe(U) {
    U !== Zh ? (I(r.CULL_FACE), U !== N && (U === zo ? r.cullFace(r.BACK) : U === Kh ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Re(r.CULL_FACE), N = U;
  }
  function Le(U) {
    U !== B && (Y && r.lineWidth(U), B = U);
  }
  function Ae(U, X, ae) {
    U ? (I(r.POLYGON_OFFSET_FILL), (D !== X || O !== ae) && (r.polygonOffset(X, ae), D = X, O = ae)) : Re(r.POLYGON_OFFSET_FILL);
  }
  function Be(U) {
    U ? I(r.SCISSOR_TEST) : Re(r.SCISSOR_TEST);
  }
  function Je(U) {
    U === void 0 && (U = r.TEXTURE0 + k - 1), ie !== U && (r.activeTexture(U), ie = U);
  }
  function P(U, X, ae) {
    ae === void 0 && (ie === null ? ae = r.TEXTURE0 + k - 1 : ae = ie);
    let ye = ee[ae];
    ye === void 0 && (ye = { type: void 0, texture: void 0 }, ee[ae] = ye), (ye.type !== U || ye.texture !== X) && (ie !== ae && (r.activeTexture(ae), ie = ae), r.bindTexture(U, X || fe[U]), ye.type = U, ye.texture = X);
  }
  function E() {
    const U = ee[ie];
    U !== void 0 && U.type !== void 0 && (r.bindTexture(U.type, null), U.type = void 0, U.texture = void 0);
  }
  function G() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function se() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function re() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function pe() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function L() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Q() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function H() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function me() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Me() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Te() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ge(U) {
    V.equals(U) === false && (r.scissor(U.x, U.y, U.z, U.w), V.copy(U));
  }
  function we(U) {
    $.equals(U) === false && (r.viewport(U.x, U.y, U.z, U.w), $.copy(U));
  }
  function Fe(U, X) {
    let ae = u.get(X);
    ae === void 0 && (ae = /* @__PURE__ */ new WeakMap(), u.set(X, ae));
    let ye = ae.get(U);
    ye === void 0 && (ye = r.getUniformBlockIndex(X, U.name), ae.set(U, ye));
  }
  function Ve(U, X) {
    const ye = u.get(X).get(U);
    h.get(X) !== ye && (r.uniformBlockBinding(X, ye, U.__bindingPointIndex), h.set(X, ye));
  }
  function ut() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.colorMask(true, true, true, true), r.clearColor(0, 0, 0, 0), r.depthMask(true), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === true && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, ie = null, ee = {}, f = {}, m = /* @__PURE__ */ new WeakMap(), g = [], x = null, p = false, _ = null, v = null, M = null, w = null, S = null, y = null, R = null, b = false, T = null, N = null, B = null, D = null, O = null, V.set(0, 0, r.canvas.width, r.canvas.height), $.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), l.reset(), c.reset();
  }
  return { buffers: { color: o, depth: l, stencil: c }, enable: I, disable: Re, bindFramebuffer: Ie, drawBuffers: le, useProgram: Se, setBlending: te, setMaterial: ve, setFlipSided: he, setCullFace: Pe, setLineWidth: Le, setPolygonOffset: Ae, setScissorTest: Be, activeTexture: Je, bindTexture: P, unbindTexture: E, compressedTexImage2D: G, compressedTexImage3D: se, texImage2D: Me, texImage3D: Te, updateUBOMapping: Fe, uniformBlockBinding: Ve, texStorage2D: H, texStorage3D: me, texSubImage2D: re, texSubImage3D: pe, compressedTexSubImage2D: L, compressedTexSubImage3D: Q, scissor: ge, viewport: we, reset: ut };
}
function lv(r, e, t, n, i, s, a) {
  const o = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, f = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), m = /* @__PURE__ */ new WeakMap();
  let g;
  const x = /* @__PURE__ */ new WeakMap();
  let p = false;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(P, E) {
    return p ? new OffscreenCanvas(P, E) : er("canvas");
  }
  function v(P, E, G, se) {
    let re = 1;
    if ((P.width > se || P.height > se) && (re = se / Math.max(P.width, P.height)), re < 1 || E === true) if (typeof HTMLImageElement < "u" && P instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && P instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && P instanceof ImageBitmap) {
      const pe = E ? Yu : Math.floor, L = pe(re * P.width), Q = pe(re * P.height);
      g === void 0 && (g = _(L, Q));
      const H = G ? _(L, Q) : g;
      return H.width = L, H.height = Q, H.getContext("2d").drawImage(P, 0, 0, L, Q), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + P.width + "x" + P.height + ") to (" + L + "x" + Q + ")."), H;
    } else return "data" in P && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + P.width + "x" + P.height + ")."), P;
    return P;
  }
  function M(P) {
    return pl(P.width) && pl(P.height);
  }
  function w(P) {
    return o ? false : P.wrapS !== Tt || P.wrapT !== Tt || P.minFilter !== at && P.minFilter !== ct;
  }
  function S(P, E) {
    return P.generateMipmaps && E && P.minFilter !== at && P.minFilter !== ct;
  }
  function y(P) {
    r.generateMipmap(P);
  }
  function R(P, E, G, se, re = false) {
    if (o === false) return E;
    if (P !== null) {
      if (r[P] !== void 0) return r[P];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + P + "'");
    }
    let pe = E;
    return E === r.RED && (G === r.FLOAT && (pe = r.R32F), G === r.HALF_FLOAT && (pe = r.R16F), G === r.UNSIGNED_BYTE && (pe = r.R8)), E === r.RG && (G === r.FLOAT && (pe = r.RG32F), G === r.HALF_FLOAT && (pe = r.RG16F), G === r.UNSIGNED_BYTE && (pe = r.RG8)), E === r.RGBA && (G === r.FLOAT && (pe = r.RGBA32F), G === r.HALF_FLOAT && (pe = r.RGBA16F), G === r.UNSIGNED_BYTE && (pe = se === Ue && re === false ? r.SRGB8_ALPHA8 : r.RGBA8), G === r.UNSIGNED_SHORT_4_4_4_4 && (pe = r.RGBA4), G === r.UNSIGNED_SHORT_5_5_5_1 && (pe = r.RGB5_A1)), (pe === r.R16F || pe === r.R32F || pe === r.RG16F || pe === r.RG32F || pe === r.RGBA16F || pe === r.RGBA32F) && e.get("EXT_color_buffer_float"), pe;
  }
  function b(P, E, G) {
    return S(P, G) === true || P.isFramebufferTexture && P.minFilter !== at && P.minFilter !== ct ? Math.log2(Math.max(E.width, E.height)) + 1 : P.mipmaps !== void 0 && P.mipmaps.length > 0 ? P.mipmaps.length : P.isCompressedTexture && Array.isArray(P.image) ? E.mipmaps.length : 1;
  }
  function T(P) {
    return P === at || P === Ea || P === Hs ? r.NEAREST : r.LINEAR;
  }
  function N(P) {
    const E = P.target;
    E.removeEventListener("dispose", N), D(E), E.isVideoTexture && m.delete(E);
  }
  function B(P) {
    const E = P.target;
    E.removeEventListener("dispose", B), k(E);
  }
  function D(P) {
    const E = n.get(P);
    if (E.__webglInit === void 0) return;
    const G = P.source, se = x.get(G);
    if (se) {
      const re = se[E.__cacheKey];
      re.usedTimes--, re.usedTimes === 0 && O(P), Object.keys(se).length === 0 && x.delete(G);
    }
    n.remove(P);
  }
  function O(P) {
    const E = n.get(P);
    r.deleteTexture(E.__webglTexture);
    const G = P.source, se = x.get(G);
    delete se[E.__cacheKey], a.memory.textures--;
  }
  function k(P) {
    const E = P.texture, G = n.get(P), se = n.get(E);
    if (se.__webglTexture !== void 0 && (r.deleteTexture(se.__webglTexture), a.memory.textures--), P.depthTexture && P.depthTexture.dispose(), P.isWebGLCubeRenderTarget) for (let re = 0; re < 6; re++) r.deleteFramebuffer(G.__webglFramebuffer[re]), G.__webglDepthbuffer && r.deleteRenderbuffer(G.__webglDepthbuffer[re]);
    else {
      if (r.deleteFramebuffer(G.__webglFramebuffer), G.__webglDepthbuffer && r.deleteRenderbuffer(G.__webglDepthbuffer), G.__webglMultisampledFramebuffer && r.deleteFramebuffer(G.__webglMultisampledFramebuffer), G.__webglColorRenderbuffer) for (let re = 0; re < G.__webglColorRenderbuffer.length; re++) G.__webglColorRenderbuffer[re] && r.deleteRenderbuffer(G.__webglColorRenderbuffer[re]);
      G.__webglDepthRenderbuffer && r.deleteRenderbuffer(G.__webglDepthRenderbuffer);
    }
    if (P.isWebGLMultipleRenderTargets) for (let re = 0, pe = E.length; re < pe; re++) {
      const L = n.get(E[re]);
      L.__webglTexture && (r.deleteTexture(L.__webglTexture), a.memory.textures--), n.remove(E[re]);
    }
    n.remove(E), n.remove(P);
  }
  let Y = 0;
  function J() {
    Y = 0;
  }
  function K() {
    const P = Y;
    return P >= l && console.warn("THREE.WebGLTextures: Trying to use " + P + " texture units while this GPU supports only " + l), Y += 1, P;
  }
  function ie(P) {
    const E = [];
    return E.push(P.wrapS), E.push(P.wrapT), E.push(P.wrapR || 0), E.push(P.magFilter), E.push(P.minFilter), E.push(P.anisotropy), E.push(P.internalFormat), E.push(P.format), E.push(P.type), E.push(P.generateMipmaps), E.push(P.premultiplyAlpha), E.push(P.flipY), E.push(P.unpackAlignment), E.push(P.colorSpace), E.join();
  }
  function ee(P, E) {
    const G = n.get(P);
    if (P.isVideoTexture && Be(P), P.isRenderTargetTexture === false && P.version > 0 && G.__version !== P.version) {
      const se = P.image;
      if (se === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (se.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Re(G, P, E);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, G.__webglTexture, r.TEXTURE0 + E);
  }
  function be(P, E) {
    const G = n.get(P);
    if (P.version > 0 && G.__version !== P.version) {
      Re(G, P, E);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, G.__webglTexture, r.TEXTURE0 + E);
  }
  function oe(P, E) {
    const G = n.get(P);
    if (P.version > 0 && G.__version !== P.version) {
      Re(G, P, E);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, G.__webglTexture, r.TEXTURE0 + E);
  }
  function V(P, E) {
    const G = n.get(P);
    if (P.version > 0 && G.__version !== P.version) {
      Ie(G, P, E);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, G.__webglTexture, r.TEXTURE0 + E);
  }
  const $ = { [Un]: r.REPEAT, [Tt]: r.CLAMP_TO_EDGE, [Zs]: r.MIRRORED_REPEAT }, ce = { [at]: r.NEAREST, [Ea]: r.NEAREST_MIPMAP_NEAREST, [Hs]: r.NEAREST_MIPMAP_LINEAR, [ct]: r.LINEAR, [Rl]: r.LINEAR_MIPMAP_NEAREST, [ei]: r.LINEAR_MIPMAP_LINEAR };
  function fe(P, E, G) {
    if (G ? (r.texParameteri(P, r.TEXTURE_WRAP_S, $[E.wrapS]), r.texParameteri(P, r.TEXTURE_WRAP_T, $[E.wrapT]), (P === r.TEXTURE_3D || P === r.TEXTURE_2D_ARRAY) && r.texParameteri(P, r.TEXTURE_WRAP_R, $[E.wrapR]), r.texParameteri(P, r.TEXTURE_MAG_FILTER, ce[E.magFilter]), r.texParameteri(P, r.TEXTURE_MIN_FILTER, ce[E.minFilter])) : (r.texParameteri(P, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(P, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (P === r.TEXTURE_3D || P === r.TEXTURE_2D_ARRAY) && r.texParameteri(P, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (E.wrapS !== Tt || E.wrapT !== Tt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(P, r.TEXTURE_MAG_FILTER, T(E.magFilter)), r.texParameteri(P, r.TEXTURE_MIN_FILTER, T(E.minFilter)), E.minFilter !== at && E.minFilter !== ct && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === true) {
      const se = e.get("EXT_texture_filter_anisotropic");
      if (E.magFilter === at || E.minFilter !== Hs && E.minFilter !== ei || E.type === Pn && e.has("OES_texture_float_linear") === false || o === false && E.type === fs && e.has("OES_texture_half_float_linear") === false) return;
      (E.anisotropy > 1 || n.get(E).__currentAnisotropy) && (r.texParameterf(P, se.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(E.anisotropy, i.getMaxAnisotropy())), n.get(E).__currentAnisotropy = E.anisotropy);
    }
  }
  function I(P, E) {
    let G = false;
    P.__webglInit === void 0 && (P.__webglInit = true, E.addEventListener("dispose", N));
    const se = E.source;
    let re = x.get(se);
    re === void 0 && (re = {}, x.set(se, re));
    const pe = ie(E);
    if (pe !== P.__cacheKey) {
      re[pe] === void 0 && (re[pe] = { texture: r.createTexture(), usedTimes: 0 }, a.memory.textures++, G = true), re[pe].usedTimes++;
      const L = re[P.__cacheKey];
      L !== void 0 && (re[P.__cacheKey].usedTimes--, L.usedTimes === 0 && O(E)), P.__cacheKey = pe, P.__webglTexture = re[pe].texture;
    }
    return G;
  }
  function Re(P, E, G) {
    let se = r.TEXTURE_2D;
    (E.isDataArrayTexture || E.isCompressedArrayTexture) && (se = r.TEXTURE_2D_ARRAY), E.isData3DTexture && (se = r.TEXTURE_3D);
    const re = I(P, E), pe = E.source;
    t.bindTexture(se, P.__webglTexture, r.TEXTURE0 + G);
    const L = n.get(pe);
    if (pe.version !== L.__version || re === true) {
      t.activeTexture(r.TEXTURE0 + G), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, E.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, E.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, E.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const Q = w(E) && M(E.image) === false;
      let H = v(E.image, Q, false, h);
      H = Je(E, H);
      const me = M(H) || o, Me = s.convert(E.format, E.colorSpace);
      let Te = s.convert(E.type), ge = R(E.internalFormat, Me, Te, E.colorSpace);
      fe(se, E, me);
      let we;
      const Fe = E.mipmaps, Ve = o && E.isVideoTexture !== true, ut = L.__version === void 0 || re === true, U = b(E, H, me);
      if (E.isDepthTexture) ge = r.DEPTH_COMPONENT, o ? E.type === Pn ? ge = r.DEPTH_COMPONENT32F : E.type === qn ? ge = r.DEPTH_COMPONENT24 : E.type === Ei ? ge = r.DEPTH24_STENCIL8 : ge = r.DEPTH_COMPONENT16 : E.type === Pn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), E.format === Zn && ge === r.DEPTH_COMPONENT && E.type !== Cl && E.type !== qn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), E.type = qn, Te = s.convert(E.type)), E.format === Ci && ge === r.DEPTH_COMPONENT && (ge = r.DEPTH_STENCIL, E.type !== Ei && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), E.type = Ei, Te = s.convert(E.type))), ut && (Ve ? t.texStorage2D(r.TEXTURE_2D, 1, ge, H.width, H.height) : t.texImage2D(r.TEXTURE_2D, 0, ge, H.width, H.height, 0, Me, Te, null));
      else if (E.isDataTexture) if (Fe.length > 0 && me) {
        Ve && ut && t.texStorage2D(r.TEXTURE_2D, U, ge, Fe[0].width, Fe[0].height);
        for (let X = 0, ae = Fe.length; X < ae; X++) we = Fe[X], Ve ? t.texSubImage2D(r.TEXTURE_2D, X, 0, 0, we.width, we.height, Me, Te, we.data) : t.texImage2D(r.TEXTURE_2D, X, ge, we.width, we.height, 0, Me, Te, we.data);
        E.generateMipmaps = false;
      } else Ve ? (ut && t.texStorage2D(r.TEXTURE_2D, U, ge, H.width, H.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, H.width, H.height, Me, Te, H.data)) : t.texImage2D(r.TEXTURE_2D, 0, ge, H.width, H.height, 0, Me, Te, H.data);
      else if (E.isCompressedTexture) if (E.isCompressedArrayTexture) {
        Ve && ut && t.texStorage3D(r.TEXTURE_2D_ARRAY, U, ge, Fe[0].width, Fe[0].height, H.depth);
        for (let X = 0, ae = Fe.length; X < ae; X++) we = Fe[X], E.format !== Wt ? Me !== null ? Ve ? t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, X, 0, 0, 0, we.width, we.height, H.depth, Me, we.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, X, ge, we.width, we.height, H.depth, 0, we.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? t.texSubImage3D(r.TEXTURE_2D_ARRAY, X, 0, 0, 0, we.width, we.height, H.depth, Me, Te, we.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, X, ge, we.width, we.height, H.depth, 0, Me, Te, we.data);
      } else {
        Ve && ut && t.texStorage2D(r.TEXTURE_2D, U, ge, Fe[0].width, Fe[0].height);
        for (let X = 0, ae = Fe.length; X < ae; X++) we = Fe[X], E.format !== Wt ? Me !== null ? Ve ? t.compressedTexSubImage2D(r.TEXTURE_2D, X, 0, 0, we.width, we.height, Me, we.data) : t.compressedTexImage2D(r.TEXTURE_2D, X, ge, we.width, we.height, 0, we.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? t.texSubImage2D(r.TEXTURE_2D, X, 0, 0, we.width, we.height, Me, Te, we.data) : t.texImage2D(r.TEXTURE_2D, X, ge, we.width, we.height, 0, Me, Te, we.data);
      }
      else if (E.isDataArrayTexture) Ve ? (ut && t.texStorage3D(r.TEXTURE_2D_ARRAY, U, ge, H.width, H.height, H.depth), t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, H.width, H.height, H.depth, Me, Te, H.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, ge, H.width, H.height, H.depth, 0, Me, Te, H.data);
      else if (E.isData3DTexture) Ve ? (ut && t.texStorage3D(r.TEXTURE_3D, U, ge, H.width, H.height, H.depth), t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, H.width, H.height, H.depth, Me, Te, H.data)) : t.texImage3D(r.TEXTURE_3D, 0, ge, H.width, H.height, H.depth, 0, Me, Te, H.data);
      else if (E.isFramebufferTexture) {
        if (ut) if (Ve) t.texStorage2D(r.TEXTURE_2D, U, ge, H.width, H.height);
        else {
          let X = H.width, ae = H.height;
          for (let ye = 0; ye < U; ye++) t.texImage2D(r.TEXTURE_2D, ye, ge, X, ae, 0, Me, Te, null), X >>= 1, ae >>= 1;
        }
      } else if (Fe.length > 0 && me) {
        Ve && ut && t.texStorage2D(r.TEXTURE_2D, U, ge, Fe[0].width, Fe[0].height);
        for (let X = 0, ae = Fe.length; X < ae; X++) we = Fe[X], Ve ? t.texSubImage2D(r.TEXTURE_2D, X, 0, 0, Me, Te, we) : t.texImage2D(r.TEXTURE_2D, X, ge, Me, Te, we);
        E.generateMipmaps = false;
      } else Ve ? (ut && t.texStorage2D(r.TEXTURE_2D, U, ge, H.width, H.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, Me, Te, H)) : t.texImage2D(r.TEXTURE_2D, 0, ge, Me, Te, H);
      S(E, me) && y(se), L.__version = pe.version, E.onUpdate && E.onUpdate(E);
    }
    P.__version = E.version;
  }
  function Ie(P, E, G) {
    if (E.image.length !== 6) return;
    const se = I(P, E), re = E.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, P.__webglTexture, r.TEXTURE0 + G);
    const pe = n.get(re);
    if (re.version !== pe.__version || se === true) {
      t.activeTexture(r.TEXTURE0 + G), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, E.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, E.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, E.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const L = E.isCompressedTexture || E.image[0].isCompressedTexture, Q = E.image[0] && E.image[0].isDataTexture, H = [];
      for (let X = 0; X < 6; X++) !L && !Q ? H[X] = v(E.image[X], false, true, c) : H[X] = Q ? E.image[X].image : E.image[X], H[X] = Je(E, H[X]);
      const me = H[0], Me = M(me) || o, Te = s.convert(E.format, E.colorSpace), ge = s.convert(E.type), we = R(E.internalFormat, Te, ge, E.colorSpace), Fe = o && E.isVideoTexture !== true, Ve = pe.__version === void 0 || se === true;
      let ut = b(E, me, Me);
      fe(r.TEXTURE_CUBE_MAP, E, Me);
      let U;
      if (L) {
        Fe && Ve && t.texStorage2D(r.TEXTURE_CUBE_MAP, ut, we, me.width, me.height);
        for (let X = 0; X < 6; X++) {
          U = H[X].mipmaps;
          for (let ae = 0; ae < U.length; ae++) {
            const ye = U[ae];
            E.format !== Wt ? Te !== null ? Fe ? t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, ae, 0, 0, ye.width, ye.height, Te, ye.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, ae, we, ye.width, ye.height, 0, ye.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Fe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, ae, 0, 0, ye.width, ye.height, Te, ge, ye.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, ae, we, ye.width, ye.height, 0, Te, ge, ye.data);
          }
        }
      } else {
        U = E.mipmaps, Fe && Ve && (U.length > 0 && ut++, t.texStorage2D(r.TEXTURE_CUBE_MAP, ut, we, H[0].width, H[0].height));
        for (let X = 0; X < 6; X++) if (Q) {
          Fe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, H[X].width, H[X].height, Te, ge, H[X].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, we, H[X].width, H[X].height, 0, Te, ge, H[X].data);
          for (let ae = 0; ae < U.length; ae++) {
            const Ee = U[ae].image[X].image;
            Fe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, ae + 1, 0, 0, Ee.width, Ee.height, Te, ge, Ee.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, ae + 1, we, Ee.width, Ee.height, 0, Te, ge, Ee.data);
          }
        } else {
          Fe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, Te, ge, H[X]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, we, Te, ge, H[X]);
          for (let ae = 0; ae < U.length; ae++) {
            const ye = U[ae];
            Fe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, ae + 1, 0, 0, Te, ge, ye.image[X]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, ae + 1, we, Te, ge, ye.image[X]);
          }
        }
      }
      S(E, Me) && y(r.TEXTURE_CUBE_MAP), pe.__version = re.version, E.onUpdate && E.onUpdate(E);
    }
    P.__version = E.version;
  }
  function le(P, E, G, se, re) {
    const pe = s.convert(G.format, G.colorSpace), L = s.convert(G.type), Q = R(G.internalFormat, pe, L, G.colorSpace);
    n.get(E).__hasExternalTextures || (re === r.TEXTURE_3D || re === r.TEXTURE_2D_ARRAY ? t.texImage3D(re, 0, Q, E.width, E.height, E.depth, 0, pe, L, null) : t.texImage2D(re, 0, Q, E.width, E.height, 0, pe, L, null)), t.bindFramebuffer(r.FRAMEBUFFER, P), Ae(E) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, se, re, n.get(G).__webglTexture, 0, Le(E)) : (re === r.TEXTURE_2D || re >= r.TEXTURE_CUBE_MAP_POSITIVE_X && re <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, se, re, n.get(G).__webglTexture, 0), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Se(P, E, G) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, P), E.depthBuffer && !E.stencilBuffer) {
      let se = r.DEPTH_COMPONENT16;
      if (G || Ae(E)) {
        const re = E.depthTexture;
        re && re.isDepthTexture && (re.type === Pn ? se = r.DEPTH_COMPONENT32F : re.type === qn && (se = r.DEPTH_COMPONENT24));
        const pe = Le(E);
        Ae(E) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, pe, se, E.width, E.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, pe, se, E.width, E.height);
      } else r.renderbufferStorage(r.RENDERBUFFER, se, E.width, E.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, P);
    } else if (E.depthBuffer && E.stencilBuffer) {
      const se = Le(E);
      G && Ae(E) === false ? r.renderbufferStorageMultisample(r.RENDERBUFFER, se, r.DEPTH24_STENCIL8, E.width, E.height) : Ae(E) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, se, r.DEPTH24_STENCIL8, E.width, E.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, E.width, E.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, P);
    } else {
      const se = E.isWebGLMultipleRenderTargets === true ? E.texture : [E.texture];
      for (let re = 0; re < se.length; re++) {
        const pe = se[re], L = s.convert(pe.format, pe.colorSpace), Q = s.convert(pe.type), H = R(pe.internalFormat, L, Q, pe.colorSpace), me = Le(E);
        G && Ae(E) === false ? r.renderbufferStorageMultisample(r.RENDERBUFFER, me, H, E.width, E.height) : Ae(E) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, me, H, E.width, E.height) : r.renderbufferStorage(r.RENDERBUFFER, H, E.width, E.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function ne(P, E) {
    if (E && E.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, P), !(E.depthTexture && E.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(E.depthTexture).__webglTexture || E.depthTexture.image.width !== E.width || E.depthTexture.image.height !== E.height) && (E.depthTexture.image.width = E.width, E.depthTexture.image.height = E.height, E.depthTexture.needsUpdate = true), ee(E.depthTexture, 0);
    const se = n.get(E.depthTexture).__webglTexture, re = Le(E);
    if (E.depthTexture.format === Zn) Ae(E) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, se, 0, re) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, se, 0);
    else if (E.depthTexture.format === Ci) Ae(E) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, se, 0, re) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, se, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function j(P) {
    const E = n.get(P), G = P.isWebGLCubeRenderTarget === true;
    if (P.depthTexture && !E.__autoAllocateDepthBuffer) {
      if (G) throw new Error("target.depthTexture not supported in Cube render targets");
      ne(E.__webglFramebuffer, P);
    } else if (G) {
      E.__webglDepthbuffer = [];
      for (let se = 0; se < 6; se++) t.bindFramebuffer(r.FRAMEBUFFER, E.__webglFramebuffer[se]), E.__webglDepthbuffer[se] = r.createRenderbuffer(), Se(E.__webglDepthbuffer[se], P, false);
    } else t.bindFramebuffer(r.FRAMEBUFFER, E.__webglFramebuffer), E.__webglDepthbuffer = r.createRenderbuffer(), Se(E.__webglDepthbuffer, P, false);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function te(P, E, G) {
    const se = n.get(P);
    E !== void 0 && le(se.__webglFramebuffer, P, P.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D), G !== void 0 && j(P);
  }
  function ve(P) {
    const E = P.texture, G = n.get(P), se = n.get(E);
    P.addEventListener("dispose", B), P.isWebGLMultipleRenderTargets !== true && (se.__webglTexture === void 0 && (se.__webglTexture = r.createTexture()), se.__version = E.version, a.memory.textures++);
    const re = P.isWebGLCubeRenderTarget === true, pe = P.isWebGLMultipleRenderTargets === true, L = M(P) || o;
    if (re) {
      G.__webglFramebuffer = [];
      for (let Q = 0; Q < 6; Q++) G.__webglFramebuffer[Q] = r.createFramebuffer();
    } else {
      if (G.__webglFramebuffer = r.createFramebuffer(), pe) if (i.drawBuffers) {
        const Q = P.texture;
        for (let H = 0, me = Q.length; H < me; H++) {
          const Me = n.get(Q[H]);
          Me.__webglTexture === void 0 && (Me.__webglTexture = r.createTexture(), a.memory.textures++);
        }
      } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && P.samples > 0 && Ae(P) === false) {
        const Q = pe ? E : [E];
        G.__webglMultisampledFramebuffer = r.createFramebuffer(), G.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, G.__webglMultisampledFramebuffer);
        for (let H = 0; H < Q.length; H++) {
          const me = Q[H];
          G.__webglColorRenderbuffer[H] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, G.__webglColorRenderbuffer[H]);
          const Me = s.convert(me.format, me.colorSpace), Te = s.convert(me.type), ge = R(me.internalFormat, Me, Te, me.colorSpace, P.isXRRenderTarget === true), we = Le(P);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, we, ge, P.width, P.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + H, r.RENDERBUFFER, G.__webglColorRenderbuffer[H]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), P.depthBuffer && (G.__webglDepthRenderbuffer = r.createRenderbuffer(), Se(G.__webglDepthRenderbuffer, P, true)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (re) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, se.__webglTexture), fe(r.TEXTURE_CUBE_MAP, E, L);
      for (let Q = 0; Q < 6; Q++) le(G.__webglFramebuffer[Q], P, E, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + Q);
      S(E, L) && y(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (pe) {
      const Q = P.texture;
      for (let H = 0, me = Q.length; H < me; H++) {
        const Me = Q[H], Te = n.get(Me);
        t.bindTexture(r.TEXTURE_2D, Te.__webglTexture), fe(r.TEXTURE_2D, Me, L), le(G.__webglFramebuffer, P, Me, r.COLOR_ATTACHMENT0 + H, r.TEXTURE_2D), S(Me, L) && y(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let Q = r.TEXTURE_2D;
      (P.isWebGL3DRenderTarget || P.isWebGLArrayRenderTarget) && (o ? Q = P.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(Q, se.__webglTexture), fe(Q, E, L), le(G.__webglFramebuffer, P, E, r.COLOR_ATTACHMENT0, Q), S(E, L) && y(Q), t.unbindTexture();
    }
    P.depthBuffer && j(P);
  }
  function he(P) {
    const E = M(P) || o, G = P.isWebGLMultipleRenderTargets === true ? P.texture : [P.texture];
    for (let se = 0, re = G.length; se < re; se++) {
      const pe = G[se];
      if (S(pe, E)) {
        const L = P.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, Q = n.get(pe).__webglTexture;
        t.bindTexture(L, Q), y(L), t.unbindTexture();
      }
    }
  }
  function Pe(P) {
    if (o && P.samples > 0 && Ae(P) === false) {
      const E = P.isWebGLMultipleRenderTargets ? P.texture : [P.texture], G = P.width, se = P.height;
      let re = r.COLOR_BUFFER_BIT;
      const pe = [], L = P.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Q = n.get(P), H = P.isWebGLMultipleRenderTargets === true;
      if (H) for (let me = 0; me < E.length; me++) t.bindFramebuffer(r.FRAMEBUFFER, Q.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + me, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, Q.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + me, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, Q.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Q.__webglFramebuffer);
      for (let me = 0; me < E.length; me++) {
        pe.push(r.COLOR_ATTACHMENT0 + me), P.depthBuffer && pe.push(L);
        const Me = Q.__ignoreDepthValues !== void 0 ? Q.__ignoreDepthValues : false;
        if (Me === false && (P.depthBuffer && (re |= r.DEPTH_BUFFER_BIT), P.stencilBuffer && (re |= r.STENCIL_BUFFER_BIT)), H && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, Q.__webglColorRenderbuffer[me]), Me === true && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [L]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [L])), H) {
          const Te = n.get(E[me]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, Te, 0);
        }
        r.blitFramebuffer(0, 0, G, se, 0, 0, G, se, re, r.NEAREST), f && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, pe);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), H) for (let me = 0; me < E.length; me++) {
        t.bindFramebuffer(r.FRAMEBUFFER, Q.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + me, r.RENDERBUFFER, Q.__webglColorRenderbuffer[me]);
        const Me = n.get(E[me]).__webglTexture;
        t.bindFramebuffer(r.FRAMEBUFFER, Q.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + me, r.TEXTURE_2D, Me, 0);
      }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Q.__webglMultisampledFramebuffer);
    }
  }
  function Le(P) {
    return Math.min(u, P.samples);
  }
  function Ae(P) {
    const E = n.get(P);
    return o && P.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && E.__useRenderToTexture !== false;
  }
  function Be(P) {
    const E = a.render.frame;
    m.get(P) !== E && (m.set(P, E), P.update());
  }
  function Je(P, E) {
    const G = P.colorSpace, se = P.format, re = P.type;
    return P.isCompressedTexture === true || P.format === Aa || G !== hn && G !== Kn && (G === Ue ? o === false ? e.has("EXT_sRGB") === true && se === Wt ? (P.format = Aa, P.minFilter = ct, P.generateMipmaps = false) : E = Ul.sRGBToLinear(E) : (se !== Wt || re !== ti) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", G)), E;
  }
  this.allocateTextureUnit = K, this.resetTextureUnits = J, this.setTexture2D = ee, this.setTexture2DArray = be, this.setTexture3D = oe, this.setTextureCube = V, this.rebindTextures = te, this.setupRenderTarget = ve, this.updateRenderTargetMipmap = he, this.updateMultisampleRenderTarget = Pe, this.setupDepthRenderbuffer = j, this.setupFrameBufferTexture = le, this.useMultisampledRTT = Ae;
}
function sd(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = Kn) {
    let o;
    if (s === ti) return r.UNSIGNED_BYTE;
    if (s === Au) return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === Ru) return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === wu) return r.BYTE;
    if (s === Tu) return r.SHORT;
    if (s === Cl) return r.UNSIGNED_SHORT;
    if (s === Eu) return r.INT;
    if (s === qn) return r.UNSIGNED_INT;
    if (s === Pn) return r.FLOAT;
    if (s === fs) return n ? r.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === Cu) return r.ALPHA;
    if (s === Wt) return r.RGBA;
    if (s === Pu) return r.LUMINANCE;
    if (s === Lu) return r.LUMINANCE_ALPHA;
    if (s === Zn) return r.DEPTH_COMPONENT;
    if (s === Ci) return r.DEPTH_STENCIL;
    if (s === Aa) return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === Iu) return r.RED;
    if (s === Du) return r.RED_INTEGER;
    if (s === Uu) return r.RG;
    if (s === Fu) return r.RG_INTEGER;
    if (s === Ou) return r.RGBA_INTEGER;
    if (s === xa || s === ga || s === va || s === ya) if (a === Ue) if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
      if (s === xa) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (s === ga) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (s === va) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (s === ya) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
      if (s === xa) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (s === ga) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (s === va) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (s === ya) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (s === Wo || s === Xo || s === qo || s === Yo) if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
      if (s === Wo) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (s === Xo) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (s === qo) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (s === Yo) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (s === Nu) return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === jo || s === Zo) if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
      if (s === jo) return a === Ue ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
      if (s === Zo) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (s === Ko || s === Jo || s === Qo || s === $o || s === el || s === tl || s === nl || s === il || s === sl || s === rl || s === al || s === ol || s === ll || s === cl) if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
      if (s === Ko) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (s === Jo) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (s === Qo) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (s === $o) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (s === el) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (s === tl) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (s === nl) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (s === il) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (s === sl) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (s === rl) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (s === al) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (s === ol) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (s === ll) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (s === cl) return a === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (s === _a) if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
      if (s === _a) return a === Ue ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
    } else return null;
    if (s === Bu || s === hl || s === ul || s === dl) if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
      if (s === _a) return o.COMPRESSED_RED_RGTC1_EXT;
      if (s === hl) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (s === ul) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (s === dl) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return s === Ei ? n ? r.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class rd extends yt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.cameras = e;
  }
}
class Yn extends Ke {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const cv = { type: "move" };
class Mo {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Yn(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Yn(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new A(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new A()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Yn(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new A(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new A()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = true;
        for (const g of e.hand.values()) {
          const x = t.getJointPose(g, n), p = this._getHandJoint(c, g);
          x !== null && (p.matrix.fromArray(x.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.jointRadius = x.radius), p.visible = x !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, m = 5e-3;
        c.inputState.pinching && d > f + m ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= f - m && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = false, s.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), i.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = false, i.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(cv)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Yn();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class ad extends rt {
  constructor(e, t, n, i, s, a, o, l, c, h) {
    if (h = h !== void 0 ? h : Zn, h !== Zn && h !== Ci) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Zn && (n = qn), n === void 0 && h === Ci && (n = Ei), super(null, i, s, a, o, l, h, n, c), this.isDepthTexture = true, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : at, this.minFilter = l !== void 0 ? l : at, this.flipY = false, this.generateMipmaps = false;
  }
}
class hv extends yn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, d = null, f = null, m = null;
    const g = t.getContextAttributes();
    let x = null, p = null;
    const _ = [], v = [], M = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Map(), S = new yt();
    S.layers.enable(1), S.viewport = new $e();
    const y = new yt();
    y.layers.enable(2), y.viewport = new $e();
    const R = [S, y], b = new rd();
    b.layers.enable(1), b.layers.enable(2);
    let T = null, N = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(V) {
      let $ = _[V];
      return $ === void 0 && ($ = new Mo(), _[V] = $), $.getTargetRaySpace();
    }, this.getControllerGrip = function(V) {
      let $ = _[V];
      return $ === void 0 && ($ = new Mo(), _[V] = $), $.getGripSpace();
    }, this.getHand = function(V) {
      let $ = _[V];
      return $ === void 0 && ($ = new Mo(), _[V] = $), $.getHandSpace();
    };
    function B(V) {
      const $ = v.indexOf(V.inputSource);
      if ($ === -1) return;
      const ce = _[$];
      ce !== void 0 && ce.dispatchEvent({ type: V.type, data: V.inputSource });
    }
    function D() {
      i.removeEventListener("select", B), i.removeEventListener("selectstart", B), i.removeEventListener("selectend", B), i.removeEventListener("squeeze", B), i.removeEventListener("squeezestart", B), i.removeEventListener("squeezeend", B), i.removeEventListener("end", D), i.removeEventListener("inputsourceschange", O);
      for (let V = 0; V < _.length; V++) {
        const $ = v[V];
        $ !== null && (v[V] = null, _[V].disconnect($));
      }
      T = null, N = null, e.setRenderTarget(x), f = null, d = null, u = null, i = null, p = null, oe.stop(), n.isPresenting = false, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(V) {
      s = V, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(V) {
      o = V, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(V) {
      c = V;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(V) {
      if (i = V, i !== null) {
        if (x = e.getRenderTarget(), i.addEventListener("select", B), i.addEventListener("selectstart", B), i.addEventListener("selectend", B), i.addEventListener("squeeze", B), i.addEventListener("squeezestart", B), i.addEventListener("squeezeend", B), i.addEventListener("end", D), i.addEventListener("inputsourceschange", O), g.xrCompatible !== true && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === false) {
          const $ = { antialias: i.renderState.layers === void 0 ? g.antialias : true, alpha: true, depth: g.depth, stencil: g.stencil, framebufferScaleFactor: s };
          f = new XRWebGLLayer(i, t, $), i.updateRenderState({ baseLayer: f }), p = new Et(f.framebufferWidth, f.framebufferHeight, { format: Wt, type: ti, colorSpace: e.outputColorSpace, stencilBuffer: g.stencil });
        } else {
          let $ = null, ce = null, fe = null;
          g.depth && (fe = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, $ = g.stencil ? Ci : Zn, ce = g.stencil ? Ei : qn);
          const I = { colorFormat: t.RGBA8, depthFormat: fe, scaleFactor: s };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(I), i.updateRenderState({ layers: [d] }), p = new Et(d.textureWidth, d.textureHeight, { format: Wt, type: ti, depthTexture: new ad(d.textureWidth, d.textureHeight, ce, void 0, void 0, void 0, void 0, void 0, void 0, $), stencilBuffer: g.stencil, colorSpace: e.outputColorSpace, samples: g.antialias ? 4 : 0 });
          const Re = e.properties.get(p);
          Re.__ignoreDepthValues = d.ignoreDepthValues;
        }
        p.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), oe.setContext(i), oe.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    };
    function O(V) {
      for (let $ = 0; $ < V.removed.length; $++) {
        const ce = V.removed[$], fe = v.indexOf(ce);
        fe >= 0 && (v[fe] = null, _[fe].disconnect(ce));
      }
      for (let $ = 0; $ < V.added.length; $++) {
        const ce = V.added[$];
        let fe = v.indexOf(ce);
        if (fe === -1) {
          for (let Re = 0; Re < _.length; Re++) if (Re >= v.length) {
            v.push(ce), fe = Re;
            break;
          } else if (v[Re] === null) {
            v[Re] = ce, fe = Re;
            break;
          }
          if (fe === -1) break;
        }
        const I = _[fe];
        I && I.connect(ce);
      }
    }
    const k = new A(), Y = new A();
    function J(V, $, ce) {
      k.setFromMatrixPosition($.matrixWorld), Y.setFromMatrixPosition(ce.matrixWorld);
      const fe = k.distanceTo(Y), I = $.projectionMatrix.elements, Re = ce.projectionMatrix.elements, Ie = I[14] / (I[10] - 1), le = I[14] / (I[10] + 1), Se = (I[9] + 1) / I[5], ne = (I[9] - 1) / I[5], j = (I[8] - 1) / I[0], te = (Re[8] + 1) / Re[0], ve = Ie * j, he = Ie * te, Pe = fe / (-j + te), Le = Pe * -j;
      $.matrixWorld.decompose(V.position, V.quaternion, V.scale), V.translateX(Le), V.translateZ(Pe), V.matrixWorld.compose(V.position, V.quaternion, V.scale), V.matrixWorldInverse.copy(V.matrixWorld).invert();
      const Ae = Ie + Pe, Be = le + Pe, Je = ve - Le, P = he + (fe - Le), E = Se * le / Be * Ae, G = ne * le / Be * Ae;
      V.projectionMatrix.makePerspective(Je, P, E, G, Ae, Be), V.projectionMatrixInverse.copy(V.projectionMatrix).invert();
    }
    function K(V, $) {
      $ === null ? V.matrixWorld.copy(V.matrix) : V.matrixWorld.multiplyMatrices($.matrixWorld, V.matrix), V.matrixWorldInverse.copy(V.matrixWorld).invert();
    }
    this.updateCamera = function(V) {
      if (i === null) return;
      b.near = y.near = S.near = V.near, b.far = y.far = S.far = V.far, (T !== b.near || N !== b.far) && (i.updateRenderState({ depthNear: b.near, depthFar: b.far }), T = b.near, N = b.far);
      const $ = V.parent, ce = b.cameras;
      K(b, $);
      for (let fe = 0; fe < ce.length; fe++) K(ce[fe], $);
      ce.length === 2 ? J(b, S, y) : b.projectionMatrix.copy(S.projectionMatrix), ie(V, b, $);
    };
    function ie(V, $, ce) {
      ce === null ? V.matrix.copy($.matrixWorld) : (V.matrix.copy(ce.matrixWorld), V.matrix.invert(), V.matrix.multiply($.matrixWorld)), V.matrix.decompose(V.position, V.quaternion, V.scale), V.updateMatrixWorld(true);
      const fe = V.children;
      for (let I = 0, Re = fe.length; I < Re; I++) fe[I].updateMatrixWorld(true);
      V.projectionMatrix.copy($.projectionMatrix), V.projectionMatrixInverse.copy($.projectionMatrixInverse), V.isPerspectiveCamera && (V.fov = ps * 2 * Math.atan(1 / V.projectionMatrix.elements[5]), V.zoom = 1);
    }
    this.getCamera = function() {
      return b;
    }, this.getFoveation = function() {
      if (!(d === null && f === null)) return l;
    }, this.setFoveation = function(V) {
      l = V, d !== null && (d.fixedFoveation = V), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = V);
    }, this.getPlanes = function() {
      return M;
    };
    let ee = null;
    function be(V, $) {
      if (h = $.getViewerPose(c || a), m = $, h !== null) {
        const ce = h.views;
        f !== null && (e.setRenderTargetFramebuffer(p, f.framebuffer), e.setRenderTarget(p));
        let fe = false;
        ce.length !== b.cameras.length && (b.cameras.length = 0, fe = true);
        for (let I = 0; I < ce.length; I++) {
          const Re = ce[I];
          let Ie = null;
          if (f !== null) Ie = f.getViewport(Re);
          else {
            const Se = u.getViewSubImage(d, Re);
            Ie = Se.viewport, I === 0 && (e.setRenderTargetTextures(p, Se.colorTexture, d.ignoreDepthValues ? void 0 : Se.depthStencilTexture), e.setRenderTarget(p));
          }
          let le = R[I];
          le === void 0 && (le = new yt(), le.layers.enable(I), le.viewport = new $e(), R[I] = le), le.matrix.fromArray(Re.transform.matrix), le.matrix.decompose(le.position, le.quaternion, le.scale), le.projectionMatrix.fromArray(Re.projectionMatrix), le.projectionMatrixInverse.copy(le.projectionMatrix).invert(), le.viewport.set(Ie.x, Ie.y, Ie.width, Ie.height), I === 0 && (b.matrix.copy(le.matrix), b.matrix.decompose(b.position, b.quaternion, b.scale)), fe === true && b.cameras.push(le);
        }
      }
      for (let ce = 0; ce < _.length; ce++) {
        const fe = v[ce], I = _[ce];
        fe !== null && I !== void 0 && I.update(fe, $, c || a);
      }
      if (ee && ee(V, $), $.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: $.detectedPlanes });
        let ce = null;
        for (const fe of M) $.detectedPlanes.has(fe) || (ce === null && (ce = []), ce.push(fe));
        if (ce !== null) for (const fe of ce) M.delete(fe), w.delete(fe), n.dispatchEvent({ type: "planeremoved", data: fe });
        for (const fe of $.detectedPlanes) if (!M.has(fe)) M.add(fe), w.set(fe, $.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: fe });
        else {
          const I = w.get(fe);
          fe.lastChangedTime > I && (w.set(fe, fe.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: fe }));
        }
      }
      m = null;
    }
    const oe = new $u();
    oe.setAnimationLoop(be), this.setAnimationLoop = function(V) {
      ee = V;
    }, this.dispose = function() {
    };
  }
}
function uv(r, e) {
  function t(x, p) {
    x.matrixAutoUpdate === true && x.updateMatrix(), p.value.copy(x.matrix);
  }
  function n(x, p) {
    p.color.getRGB(x.fogColor.value, Ku(r)), p.isFog ? (x.fogNear.value = p.near, x.fogFar.value = p.far) : p.isFogExp2 && (x.fogDensity.value = p.density);
  }
  function i(x, p, _, v, M) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(x, p) : p.isMeshToonMaterial ? (s(x, p), u(x, p)) : p.isMeshPhongMaterial ? (s(x, p), h(x, p)) : p.isMeshStandardMaterial ? (s(x, p), d(x, p), p.isMeshPhysicalMaterial && f(x, p, M)) : p.isMeshMatcapMaterial ? (s(x, p), m(x, p)) : p.isMeshDepthMaterial ? s(x, p) : p.isMeshDistanceMaterial ? (s(x, p), g(x, p)) : p.isMeshNormalMaterial ? s(x, p) : p.isLineBasicMaterial ? (a(x, p), p.isLineDashedMaterial && o(x, p)) : p.isPointsMaterial ? l(x, p, _, v) : p.isSpriteMaterial ? c(x, p) : p.isShadowMaterial ? (x.color.value.copy(p.color), x.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = false);
  }
  function s(x, p) {
    x.opacity.value = p.opacity, p.color && x.diffuse.value.copy(p.color), p.emissive && x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (x.map.value = p.map, t(p.map, x.mapTransform)), p.alphaMap && (x.alphaMap.value = p.alphaMap, t(p.alphaMap, x.alphaMapTransform)), p.bumpMap && (x.bumpMap.value = p.bumpMap, t(p.bumpMap, x.bumpMapTransform), x.bumpScale.value = p.bumpScale, p.side === Ot && (x.bumpScale.value *= -1)), p.normalMap && (x.normalMap.value = p.normalMap, t(p.normalMap, x.normalMapTransform), x.normalScale.value.copy(p.normalScale), p.side === Ot && x.normalScale.value.negate()), p.displacementMap && (x.displacementMap.value = p.displacementMap, t(p.displacementMap, x.displacementMapTransform), x.displacementScale.value = p.displacementScale, x.displacementBias.value = p.displacementBias), p.emissiveMap && (x.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, x.emissiveMapTransform)), p.specularMap && (x.specularMap.value = p.specularMap, t(p.specularMap, x.specularMapTransform)), p.alphaTest > 0 && (x.alphaTest.value = p.alphaTest);
    const _ = e.get(p).envMap;
    if (_ && (x.envMap.value = _, x.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === false ? -1 : 1, x.reflectivity.value = p.reflectivity, x.ior.value = p.ior, x.refractionRatio.value = p.refractionRatio), p.lightMap) {
      x.lightMap.value = p.lightMap;
      const v = r.useLegacyLights === true ? Math.PI : 1;
      x.lightMapIntensity.value = p.lightMapIntensity * v, t(p.lightMap, x.lightMapTransform);
    }
    p.aoMap && (x.aoMap.value = p.aoMap, x.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, x.aoMapTransform));
  }
  function a(x, p) {
    x.diffuse.value.copy(p.color), x.opacity.value = p.opacity, p.map && (x.map.value = p.map, t(p.map, x.mapTransform));
  }
  function o(x, p) {
    x.dashSize.value = p.dashSize, x.totalSize.value = p.dashSize + p.gapSize, x.scale.value = p.scale;
  }
  function l(x, p, _, v) {
    x.diffuse.value.copy(p.color), x.opacity.value = p.opacity, x.size.value = p.size * _, x.scale.value = v * 0.5, p.map && (x.map.value = p.map, t(p.map, x.uvTransform)), p.alphaMap && (x.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (x.alphaTest.value = p.alphaTest);
  }
  function c(x, p) {
    x.diffuse.value.copy(p.color), x.opacity.value = p.opacity, x.rotation.value = p.rotation, p.map && (x.map.value = p.map, t(p.map, x.mapTransform)), p.alphaMap && (x.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (x.alphaTest.value = p.alphaTest);
  }
  function h(x, p) {
    x.specular.value.copy(p.specular), x.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(x, p) {
    p.gradientMap && (x.gradientMap.value = p.gradientMap);
  }
  function d(x, p) {
    x.metalness.value = p.metalness, p.metalnessMap && (x.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, x.metalnessMapTransform)), x.roughness.value = p.roughness, p.roughnessMap && (x.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, x.roughnessMapTransform)), e.get(p).envMap && (x.envMapIntensity.value = p.envMapIntensity);
  }
  function f(x, p, _) {
    x.ior.value = p.ior, p.sheen > 0 && (x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), x.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (x.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, x.sheenColorMapTransform)), p.sheenRoughnessMap && (x.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, x.sheenRoughnessMapTransform))), p.clearcoat > 0 && (x.clearcoat.value = p.clearcoat, x.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (x.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, x.clearcoatMapTransform)), p.clearcoatRoughnessMap && (x.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, x.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (x.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, x.clearcoatNormalMapTransform), x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Ot && x.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (x.iridescence.value = p.iridescence, x.iridescenceIOR.value = p.iridescenceIOR, x.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], x.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (x.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, x.iridescenceMapTransform)), p.iridescenceThicknessMap && (x.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, x.iridescenceThicknessMapTransform))), p.transmission > 0 && (x.transmission.value = p.transmission, x.transmissionSamplerMap.value = _.texture, x.transmissionSamplerSize.value.set(_.width, _.height), p.transmissionMap && (x.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, x.transmissionMapTransform)), x.thickness.value = p.thickness, p.thicknessMap && (x.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, x.thicknessMapTransform)), x.attenuationDistance.value = p.attenuationDistance, x.attenuationColor.value.copy(p.attenuationColor)), x.specularIntensity.value = p.specularIntensity, x.specularColor.value.copy(p.specularColor), p.specularColorMap && (x.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, x.specularColorMapTransform)), p.specularIntensityMap && (x.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, x.specularIntensityMapTransform));
  }
  function m(x, p) {
    p.matcap && (x.matcap.value = p.matcap);
  }
  function g(x, p) {
    const _ = e.get(p).light;
    x.referencePosition.value.setFromMatrixPosition(_.matrixWorld), x.nearDistance.value = _.shadow.camera.near, x.farDistance.value = _.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function dv(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(_, v) {
    const M = v.program;
    n.uniformBlockBinding(_, M);
  }
  function c(_, v) {
    let M = i[_.id];
    M === void 0 && (m(_), M = h(_), i[_.id] = M, _.addEventListener("dispose", x));
    const w = v.program;
    n.updateUBOMapping(_, w);
    const S = e.render.frame;
    s[_.id] !== S && (d(_), s[_.id] = S);
  }
  function h(_) {
    const v = u();
    _.__bindingPointIndex = v;
    const M = r.createBuffer(), w = _.__size, S = _.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, M), r.bufferData(r.UNIFORM_BUFFER, w, S), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, v, M), M;
  }
  function u() {
    for (let _ = 0; _ < o; _++) if (a.indexOf(_) === -1) return a.push(_), _;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(_) {
    const v = i[_.id], M = _.uniforms, w = _.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, v);
    for (let S = 0, y = M.length; S < y; S++) {
      const R = M[S];
      if (f(R, S, w) === true) {
        const b = R.__offset, T = Array.isArray(R.value) ? R.value : [R.value];
        let N = 0;
        for (let B = 0; B < T.length; B++) {
          const D = T[B], O = g(D);
          typeof D == "number" ? (R.__data[0] = D, r.bufferSubData(r.UNIFORM_BUFFER, b + N, R.__data)) : D.isMatrix3 ? (R.__data[0] = D.elements[0], R.__data[1] = D.elements[1], R.__data[2] = D.elements[2], R.__data[3] = D.elements[0], R.__data[4] = D.elements[3], R.__data[5] = D.elements[4], R.__data[6] = D.elements[5], R.__data[7] = D.elements[0], R.__data[8] = D.elements[6], R.__data[9] = D.elements[7], R.__data[10] = D.elements[8], R.__data[11] = D.elements[0]) : (D.toArray(R.__data, N), N += O.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        r.bufferSubData(r.UNIFORM_BUFFER, b, R.__data);
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function f(_, v, M) {
    const w = _.value;
    if (M[v] === void 0) {
      if (typeof w == "number") M[v] = w;
      else {
        const S = Array.isArray(w) ? w : [w], y = [];
        for (let R = 0; R < S.length; R++) y.push(S[R].clone());
        M[v] = y;
      }
      return true;
    } else if (typeof w == "number") {
      if (M[v] !== w) return M[v] = w, true;
    } else {
      const S = Array.isArray(M[v]) ? M[v] : [M[v]], y = Array.isArray(w) ? w : [w];
      for (let R = 0; R < S.length; R++) {
        const b = S[R];
        if (b.equals(y[R]) === false) return b.copy(y[R]), true;
      }
    }
    return false;
  }
  function m(_) {
    const v = _.uniforms;
    let M = 0;
    const w = 16;
    let S = 0;
    for (let y = 0, R = v.length; y < R; y++) {
      const b = v[y], T = { boundary: 0, storage: 0 }, N = Array.isArray(b.value) ? b.value : [b.value];
      for (let B = 0, D = N.length; B < D; B++) {
        const O = N[B], k = g(O);
        T.boundary += k.boundary, T.storage += k.storage;
      }
      if (b.__data = new Float32Array(T.storage / Float32Array.BYTES_PER_ELEMENT), b.__offset = M, y > 0) {
        S = M % w;
        const B = w - S;
        S !== 0 && B - T.boundary < 0 && (M += w - S, b.__offset = M);
      }
      M += T.storage;
    }
    return S = M % w, S > 0 && (M += w - S), _.__size = M, _.__cache = {}, this;
  }
  function g(_) {
    const v = { boundary: 0, storage: 0 };
    return typeof _ == "number" ? (v.boundary = 4, v.storage = 4) : _.isVector2 ? (v.boundary = 8, v.storage = 8) : _.isVector3 || _.isColor ? (v.boundary = 16, v.storage = 12) : _.isVector4 ? (v.boundary = 16, v.storage = 16) : _.isMatrix3 ? (v.boundary = 48, v.storage = 48) : _.isMatrix4 ? (v.boundary = 64, v.storage = 64) : _.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", _), v;
  }
  function x(_) {
    const v = _.target;
    v.removeEventListener("dispose", x);
    const M = a.indexOf(v.__bindingPointIndex);
    a.splice(M, 1), r.deleteBuffer(i[v.id]), delete i[v.id], delete s[v.id];
  }
  function p() {
    for (const _ in i) r.deleteBuffer(i[_]);
    a = [], i = {}, s = {};
  }
  return { bind: l, update: c, dispose: p };
}
function fv() {
  const r = er("canvas");
  return r.style.display = "block", r;
}
class od {
  constructor(e = {}) {
    const { canvas: t = fv(), context: n = null, depth: i = true, stencil: s = true, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false } = e;
    this.isWebGLRenderer = true;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = a;
    let f = null, m = null;
    const g = [], x = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.outputColorSpace = Ue, this.useLegacyLights = true, this.toneMapping = xn, this.toneMappingExposure = 1;
    const p = this;
    let _ = false, v = 0, M = 0, w = null, S = -1, y = null;
    const R = new $e(), b = new $e();
    let T = null, N = t.width, B = t.height, D = 1, O = null, k = null;
    const Y = new $e(0, 0, N, B), J = new $e(0, 0, N, B);
    let K = false;
    const ie = new za();
    let ee = false, be = false, oe = null;
    const V = new _e(), $ = new A(), ce = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    function fe() {
      return w === null ? D : 1;
    }
    let I = n;
    function Re(C, z) {
      for (let q = 0; q < C.length; q++) {
        const F = C[q], Z = t.getContext(F, z);
        if (Z !== null) return Z;
      }
      return null;
    }
    try {
      const C = { alpha: true, depth: i, stencil: s, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Ia}`), t.addEventListener("webglcontextlost", we, false), t.addEventListener("webglcontextrestored", Fe, false), t.addEventListener("webglcontextcreationerror", Ve, false), I === null) {
        const z = ["webgl2", "webgl", "experimental-webgl"];
        if (p.isWebGL1Renderer === true && z.shift(), I = Re(z, C), I === null) throw Re(z) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      I.getShaderPrecisionFormat === void 0 && (I.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (C) {
      throw console.error("THREE.WebGLRenderer: " + C.message), C;
    }
    let Ie, le, Se, ne, j, te, ve, he, Pe, Le, Ae, Be, Je, P, E, G, se, re, pe, L, Q, H, me, Me;
    function Te() {
      Ie = new Cx(I), le = new Sx(I, Ie, e), Ie.init(le), H = new sd(I, Ie, le), Se = new ov(I, Ie, le), ne = new Ix(I), j = new Zg(), te = new lv(I, Ie, Se, j, le, H, ne), ve = new Tx(p), he = new Rx(p), Pe = new Wp(I, le), me = new Mx(I, Ie, Pe, le), Le = new Px(I, Pe, ne, me), Ae = new Ox(I, Le, Pe, ne), pe = new Fx(I, le, te), G = new wx(j), Be = new jg(p, ve, he, Ie, le, me, G), Je = new uv(p, j), P = new Jg(), E = new iv(Ie, le), re = new _x(p, ve, he, Se, Ae, d, l), se = new av(p, Ae, le), Me = new dv(I, ne, le, Se), L = new bx(I, Ie, ne, le), Q = new Lx(I, Ie, ne, le), ne.programs = Be.programs, p.capabilities = le, p.extensions = Ie, p.properties = j, p.renderLists = P, p.shadowMap = se, p.state = Se, p.info = ne;
    }
    Te();
    const ge = new hv(p, I);
    this.xr = ge, this.getContext = function() {
      return I;
    }, this.getContextAttributes = function() {
      return I.getContextAttributes();
    }, this.forceContextLoss = function() {
      const C = Ie.get("WEBGL_lose_context");
      C && C.loseContext();
    }, this.forceContextRestore = function() {
      const C = Ie.get("WEBGL_lose_context");
      C && C.restoreContext();
    }, this.getPixelRatio = function() {
      return D;
    }, this.setPixelRatio = function(C) {
      C !== void 0 && (D = C, this.setSize(N, B, false));
    }, this.getSize = function(C) {
      return C.set(N, B);
    }, this.setSize = function(C, z, q = true) {
      if (ge.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      N = C, B = z, t.width = Math.floor(C * D), t.height = Math.floor(z * D), q === true && (t.style.width = C + "px", t.style.height = z + "px"), this.setViewport(0, 0, C, z);
    }, this.getDrawingBufferSize = function(C) {
      return C.set(N * D, B * D).floor();
    }, this.setDrawingBufferSize = function(C, z, q) {
      N = C, B = z, D = q, t.width = Math.floor(C * q), t.height = Math.floor(z * q), this.setViewport(0, 0, C, z);
    }, this.getCurrentViewport = function(C) {
      return C.copy(R);
    }, this.getViewport = function(C) {
      return C.copy(Y);
    }, this.setViewport = function(C, z, q, F) {
      C.isVector4 ? Y.set(C.x, C.y, C.z, C.w) : Y.set(C, z, q, F), Se.viewport(R.copy(Y).multiplyScalar(D).floor());
    }, this.getScissor = function(C) {
      return C.copy(J);
    }, this.setScissor = function(C, z, q, F) {
      C.isVector4 ? J.set(C.x, C.y, C.z, C.w) : J.set(C, z, q, F), Se.scissor(b.copy(J).multiplyScalar(D).floor());
    }, this.getScissorTest = function() {
      return K;
    }, this.setScissorTest = function(C) {
      Se.setScissorTest(K = C);
    }, this.setOpaqueSort = function(C) {
      O = C;
    }, this.setTransparentSort = function(C) {
      k = C;
    }, this.getClearColor = function(C) {
      return C.copy(re.getClearColor());
    }, this.setClearColor = function() {
      re.setClearColor.apply(re, arguments);
    }, this.getClearAlpha = function() {
      return re.getClearAlpha();
    }, this.setClearAlpha = function() {
      re.setClearAlpha.apply(re, arguments);
    }, this.clear = function(C = true, z = true, q = true) {
      let F = 0;
      C && (F |= I.COLOR_BUFFER_BIT), z && (F |= I.DEPTH_BUFFER_BIT), q && (F |= I.STENCIL_BUFFER_BIT), I.clear(F);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", we, false), t.removeEventListener("webglcontextrestored", Fe, false), t.removeEventListener("webglcontextcreationerror", Ve, false), P.dispose(), E.dispose(), j.dispose(), ve.dispose(), he.dispose(), Ae.dispose(), me.dispose(), Me.dispose(), Be.dispose(), ge.dispose(), ge.removeEventListener("sessionstart", Ee), ge.removeEventListener("sessionend", nt), oe && (oe.dispose(), oe = null), it.stop();
    };
    function we(C) {
      C.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), _ = true;
    }
    function Fe() {
      console.log("THREE.WebGLRenderer: Context Restored."), _ = false;
      const C = ne.autoReset, z = se.enabled, q = se.autoUpdate, F = se.needsUpdate, Z = se.type;
      Te(), ne.autoReset = C, se.enabled = z, se.autoUpdate = q, se.needsUpdate = F, se.type = Z;
    }
    function Ve(C) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", C.statusMessage);
    }
    function ut(C) {
      const z = C.target;
      z.removeEventListener("dispose", ut), U(z);
    }
    function U(C) {
      X(C), j.remove(C);
    }
    function X(C) {
      const z = j.get(C).programs;
      z !== void 0 && (z.forEach(function(q) {
        Be.releaseProgram(q);
      }), C.isShaderMaterial && Be.releaseShaderCache(C));
    }
    this.renderBufferDirect = function(C, z, q, F, Z, Ce) {
      z === null && (z = ce);
      const De = Z.isMesh && Z.matrixWorld.determinant() < 0, Oe = ff(C, z, q, F, Z);
      Se.setMaterial(F, De);
      let Ge = q.index, Xe = 1;
      F.wireframe === true && (Ge = Le.getWireframeAttribute(q), Xe = 2);
      const qe = q.drawRange, Ze = q.attributes.position;
      let tt = qe.start * Xe, It = (qe.start + qe.count) * Xe;
      Ce !== null && (tt = Math.max(tt, Ce.start * Xe), It = Math.min(It, (Ce.start + Ce.count) * Xe)), Ge !== null ? (tt = Math.max(tt, 0), It = Math.min(It, Ge.count)) : Ze != null && (tt = Math.max(tt, 0), It = Math.min(It, Ze.count));
      const nn = It - tt;
      if (nn < 0 || nn === 1 / 0) return;
      me.setup(Z, F, Oe, q, Ge);
      let ai, xt = L;
      if (Ge !== null && (ai = Pe.get(Ge), xt = Q, xt.setIndex(ai)), Z.isMesh) F.wireframe === true ? (Se.setLineWidth(F.wireframeLinewidth * fe()), xt.setMode(I.LINES)) : xt.setMode(I.TRIANGLES);
      else if (Z.isLine) {
        let Qe = F.linewidth;
        Qe === void 0 && (Qe = 1), Se.setLineWidth(Qe * fe()), Z.isLineSegments ? xt.setMode(I.LINES) : Z.isLineLoop ? xt.setMode(I.LINE_LOOP) : xt.setMode(I.LINE_STRIP);
      } else Z.isPoints ? xt.setMode(I.POINTS) : Z.isSprite && xt.setMode(I.TRIANGLES);
      if (Z.isInstancedMesh) xt.renderInstances(tt, nn, Z.count);
      else if (q.isInstancedBufferGeometry) {
        const Qe = q._maxInstanceCount !== void 0 ? q._maxInstanceCount : 1 / 0, Ka = Math.min(q.instanceCount, Qe);
        xt.renderInstances(tt, nn, Ka);
      } else xt.render(tt, nn);
    }, this.compile = function(C, z) {
      function q(F, Z, Ce) {
        F.transparent === true && F.side === cn && F.forceSinglePass === false ? (F.side = Ot, F.needsUpdate = true, Tr(F, Z, Ce), F.side = Dn, F.needsUpdate = true, Tr(F, Z, Ce), F.side = cn) : Tr(F, Z, Ce);
      }
      m = E.get(C), m.init(), x.push(m), C.traverseVisible(function(F) {
        F.isLight && F.layers.test(z.layers) && (m.pushLight(F), F.castShadow && m.pushShadow(F));
      }), m.setupLights(p.useLegacyLights), C.traverse(function(F) {
        const Z = F.material;
        if (Z) if (Array.isArray(Z)) for (let Ce = 0; Ce < Z.length; Ce++) {
          const De = Z[Ce];
          q(De, C, F);
        }
        else q(Z, C, F);
      }), x.pop(), m = null;
    };
    let ae = null;
    function ye(C) {
      ae && ae(C);
    }
    function Ee() {
      it.stop();
    }
    function nt() {
      it.start();
    }
    const it = new $u();
    it.setAnimationLoop(ye), typeof self < "u" && it.setContext(self), this.setAnimationLoop = function(C) {
      ae = C, ge.setAnimationLoop(C), C === null ? it.stop() : it.start();
    }, ge.addEventListener("sessionstart", Ee), ge.addEventListener("sessionend", nt), this.render = function(C, z) {
      if (z !== void 0 && z.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (_ === true) return;
      C.matrixWorldAutoUpdate === true && C.updateMatrixWorld(), z.parent === null && z.matrixWorldAutoUpdate === true && z.updateMatrixWorld(), ge.enabled === true && ge.isPresenting === true && (ge.cameraAutoUpdate === true && ge.updateCamera(z), z = ge.getCamera()), C.isScene === true && C.onBeforeRender(p, C, z, w), m = E.get(C, x.length), m.init(), x.push(m), V.multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse), ie.setFromProjectionMatrix(V), be = this.localClippingEnabled, ee = G.init(this.clippingPlanes, be), f = P.get(C, g.length), f.init(), g.push(f), At(C, z, 0, p.sortObjects), f.finish(), p.sortObjects === true && f.sort(O, k), ee === true && G.beginShadows();
      const q = m.state.shadowsArray;
      if (se.render(q, C, z), ee === true && G.endShadows(), this.info.autoReset === true && this.info.reset(), re.render(f, C), m.setupLights(p.useLegacyLights), z.isArrayCamera) {
        const F = z.cameras;
        for (let Z = 0, Ce = F.length; Z < Ce; Z++) {
          const De = F[Z];
          Nn(f, C, De, De.viewport);
        }
      } else Nn(f, C, z);
      w !== null && (te.updateMultisampleRenderTarget(w), te.updateRenderTargetMipmap(w)), C.isScene === true && C.onAfterRender(p, C, z), me.resetDefaultState(), S = -1, y = null, x.pop(), x.length > 0 ? m = x[x.length - 1] : m = null, g.pop(), g.length > 0 ? f = g[g.length - 1] : f = null;
    };
    function At(C, z, q, F) {
      if (C.visible === false) return;
      if (C.layers.test(z.layers)) {
        if (C.isGroup) q = C.renderOrder;
        else if (C.isLOD) C.autoUpdate === true && C.update(z);
        else if (C.isLight) m.pushLight(C), C.castShadow && m.pushShadow(C);
        else if (C.isSprite) {
          if (!C.frustumCulled || ie.intersectsSprite(C)) {
            F && $.setFromMatrixPosition(C.matrixWorld).applyMatrix4(V);
            const De = Ae.update(C), Oe = C.material;
            Oe.visible && f.push(C, De, Oe, q, $.z, null);
          }
        } else if ((C.isMesh || C.isLine || C.isPoints) && (!C.frustumCulled || ie.intersectsObject(C))) {
          C.isSkinnedMesh && C.skeleton.frame !== ne.render.frame && (C.skeleton.update(), C.skeleton.frame = ne.render.frame);
          const De = Ae.update(C), Oe = C.material;
          if (F && (De.boundingSphere === null && De.computeBoundingSphere(), $.copy(De.boundingSphere.center).applyMatrix4(C.matrixWorld).applyMatrix4(V)), Array.isArray(Oe)) {
            const Ge = De.groups;
            for (let Xe = 0, qe = Ge.length; Xe < qe; Xe++) {
              const Ze = Ge[Xe], tt = Oe[Ze.materialIndex];
              tt && tt.visible && f.push(C, De, tt, q, $.z, Ze);
            }
          } else Oe.visible && f.push(C, De, Oe, q, $.z, null);
        }
      }
      const Ce = C.children;
      for (let De = 0, Oe = Ce.length; De < Oe; De++) At(Ce[De], z, q, F);
    }
    function Nn(C, z, q, F) {
      const Z = C.opaque, Ce = C.transmissive, De = C.transparent;
      m.setupLightsView(q), ee === true && G.setGlobalState(p.clippingPlanes, q), Ce.length > 0 && dt(Z, Ce, z, q), F && Se.viewport(R.copy(F)), Z.length > 0 && jt(Z, z, q), Ce.length > 0 && jt(Ce, z, q), De.length > 0 && jt(De, z, q), Se.buffers.depth.setTest(true), Se.buffers.depth.setMask(true), Se.buffers.color.setMask(true), Se.setPolygonOffset(false);
    }
    function dt(C, z, q, F) {
      if (oe === null) {
        const Oe = le.isWebGL2;
        oe = new Et(1024, 1024, { generateMipmaps: true, type: Ie.has("EXT_color_buffer_half_float") ? fs : ti, minFilter: ei, samples: Oe && o === true ? 4 : 0 });
      }
      const Z = p.getRenderTarget();
      p.setRenderTarget(oe), p.clear();
      const Ce = p.toneMapping;
      p.toneMapping = xn, jt(C, q, F), te.updateMultisampleRenderTarget(oe), te.updateRenderTargetMipmap(oe);
      let De = false;
      for (let Oe = 0, Ge = z.length; Oe < Ge; Oe++) {
        const Xe = z[Oe], qe = Xe.object, Ze = Xe.geometry, tt = Xe.material, It = Xe.group;
        if (tt.side === cn && qe.layers.test(F.layers)) {
          const nn = tt.side;
          tt.side = Ot, tt.needsUpdate = true, fn(qe, q, F, Ze, tt, It), tt.side = nn, tt.needsUpdate = true, De = true;
        }
      }
      De === true && (te.updateMultisampleRenderTarget(oe), te.updateRenderTargetMipmap(oe)), p.setRenderTarget(Z), p.toneMapping = Ce;
    }
    function jt(C, z, q) {
      const F = z.isScene === true ? z.overrideMaterial : null;
      for (let Z = 0, Ce = C.length; Z < Ce; Z++) {
        const De = C[Z], Oe = De.object, Ge = De.geometry, Xe = F === null ? De.material : F, qe = De.group;
        Oe.layers.test(q.layers) && fn(Oe, z, q, Ge, Xe, qe);
      }
    }
    function fn(C, z, q, F, Z, Ce) {
      C.onBeforeRender(p, z, q, F, Z, Ce), C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, C.matrixWorld), C.normalMatrix.getNormalMatrix(C.modelViewMatrix), Z.onBeforeRender(p, z, q, F, C, Ce), Z.transparent === true && Z.side === cn && Z.forceSinglePass === false ? (Z.side = Ot, Z.needsUpdate = true, p.renderBufferDirect(q, z, F, Z, C, Ce), Z.side = Dn, Z.needsUpdate = true, p.renderBufferDirect(q, z, F, Z, C, Ce), Z.side = cn) : p.renderBufferDirect(q, z, F, Z, C, Ce), C.onAfterRender(p, z, q, F, Z, Ce);
    }
    function Tr(C, z, q) {
      z.isScene !== true && (z = ce);
      const F = j.get(C), Z = m.state.lights, Ce = m.state.shadowsArray, De = Z.state.version, Oe = Be.getParameters(C, Z.state, Ce, z, q), Ge = Be.getProgramCacheKey(Oe);
      let Xe = F.programs;
      F.environment = C.isMeshStandardMaterial ? z.environment : null, F.fog = z.fog, F.envMap = (C.isMeshStandardMaterial ? he : ve).get(C.envMap || F.environment), Xe === void 0 && (C.addEventListener("dispose", ut), Xe = /* @__PURE__ */ new Map(), F.programs = Xe);
      let qe = Xe.get(Ge);
      if (qe !== void 0) {
        if (F.currentProgram === qe && F.lightsStateVersion === De) return pc(C, Oe), qe;
      } else Oe.uniforms = Be.getUniforms(C), C.onBuild(q, Oe, p), C.onBeforeCompile(Oe, p), qe = Be.acquireProgram(Oe, Ge), Xe.set(Ge, qe), F.uniforms = Oe.uniforms;
      const Ze = F.uniforms;
      (!C.isShaderMaterial && !C.isRawShaderMaterial || C.clipping === true) && (Ze.clippingPlanes = G.uniform), pc(C, Oe), F.needsLights = mf(C), F.lightsStateVersion = De, F.needsLights && (Ze.ambientLightColor.value = Z.state.ambient, Ze.lightProbe.value = Z.state.probe, Ze.directionalLights.value = Z.state.directional, Ze.directionalLightShadows.value = Z.state.directionalShadow, Ze.spotLights.value = Z.state.spot, Ze.spotLightShadows.value = Z.state.spotShadow, Ze.rectAreaLights.value = Z.state.rectArea, Ze.ltc_1.value = Z.state.rectAreaLTC1, Ze.ltc_2.value = Z.state.rectAreaLTC2, Ze.pointLights.value = Z.state.point, Ze.pointLightShadows.value = Z.state.pointShadow, Ze.hemisphereLights.value = Z.state.hemi, Ze.directionalShadowMap.value = Z.state.directionalShadowMap, Ze.directionalShadowMatrix.value = Z.state.directionalShadowMatrix, Ze.spotShadowMap.value = Z.state.spotShadowMap, Ze.spotLightMatrix.value = Z.state.spotLightMatrix, Ze.spotLightMap.value = Z.state.spotLightMap, Ze.pointShadowMap.value = Z.state.pointShadowMap, Ze.pointShadowMatrix.value = Z.state.pointShadowMatrix);
      const tt = qe.getUniforms(), It = Sa.seqWithValue(tt.seq, Ze);
      return F.currentProgram = qe, F.uniformsList = It, qe;
    }
    function pc(C, z) {
      const q = j.get(C);
      q.outputColorSpace = z.outputColorSpace, q.instancing = z.instancing, q.skinning = z.skinning, q.morphTargets = z.morphTargets, q.morphNormals = z.morphNormals, q.morphColors = z.morphColors, q.morphTargetsCount = z.morphTargetsCount, q.numClippingPlanes = z.numClippingPlanes, q.numIntersection = z.numClipIntersection, q.vertexAlphas = z.vertexAlphas, q.vertexTangents = z.vertexTangents, q.toneMapping = z.toneMapping;
    }
    function ff(C, z, q, F, Z) {
      z.isScene !== true && (z = ce), te.resetTextureUnits();
      const Ce = z.fog, De = F.isMeshStandardMaterial ? z.environment : null, Oe = w === null ? p.outputColorSpace : w.isXRRenderTarget === true ? w.texture.colorSpace : hn, Ge = (F.isMeshStandardMaterial ? he : ve).get(F.envMap || De), Xe = F.vertexColors === true && !!q.attributes.color && q.attributes.color.itemSize === 4, qe = !!F.normalMap && !!q.attributes.tangent, Ze = !!q.morphAttributes.position, tt = !!q.morphAttributes.normal, It = !!q.morphAttributes.color, nn = F.toneMapped ? p.toneMapping : xn, ai = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, xt = ai !== void 0 ? ai.length : 0, Qe = j.get(F), Ka = m.state.lights;
      if (ee === true && (be === true || C !== y)) {
        const Ht = C === y && F.id === S;
        G.setState(F, C, Ht);
      }
      let St = false;
      F.version === Qe.__version ? (Qe.needsLights && Qe.lightsStateVersion !== Ka.state.version || Qe.outputColorSpace !== Oe || Z.isInstancedMesh && Qe.instancing === false || !Z.isInstancedMesh && Qe.instancing === true || Z.isSkinnedMesh && Qe.skinning === false || !Z.isSkinnedMesh && Qe.skinning === true || Qe.envMap !== Ge || F.fog === true && Qe.fog !== Ce || Qe.numClippingPlanes !== void 0 && (Qe.numClippingPlanes !== G.numPlanes || Qe.numIntersection !== G.numIntersection) || Qe.vertexAlphas !== Xe || Qe.vertexTangents !== qe || Qe.morphTargets !== Ze || Qe.morphNormals !== tt || Qe.morphColors !== It || Qe.toneMapping !== nn || le.isWebGL2 === true && Qe.morphTargetsCount !== xt) && (St = true) : (St = true, Qe.__version = F.version);
      let oi = Qe.currentProgram;
      St === true && (oi = Tr(F, z, Z));
      let mc = false, As = false, Ja = false;
      const Dt = oi.getUniforms(), li = Qe.uniforms;
      if (Se.useProgram(oi.program) && (mc = true, As = true, Ja = true), F.id !== S && (S = F.id, As = true), mc || y !== C) {
        if (Dt.setValue(I, "projectionMatrix", C.projectionMatrix), le.logarithmicDepthBuffer && Dt.setValue(I, "logDepthBufFC", 2 / (Math.log(C.far + 1) / Math.LN2)), y !== C && (y = C, As = true, Ja = true), F.isShaderMaterial || F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshStandardMaterial || F.envMap) {
          const Ht = Dt.map.cameraPosition;
          Ht !== void 0 && Ht.setValue(I, $.setFromMatrixPosition(C.matrixWorld));
        }
        (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial) && Dt.setValue(I, "isOrthographic", C.isOrthographicCamera === true), (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial || F.isShadowMaterial || Z.isSkinnedMesh) && Dt.setValue(I, "viewMatrix", C.matrixWorldInverse);
      }
      if (Z.isSkinnedMesh) {
        Dt.setOptional(I, Z, "bindMatrix"), Dt.setOptional(I, Z, "bindMatrixInverse");
        const Ht = Z.skeleton;
        Ht && (le.floatVertexTextures ? (Ht.boneTexture === null && Ht.computeBoneTexture(), Dt.setValue(I, "boneTexture", Ht.boneTexture, te), Dt.setValue(I, "boneTextureSize", Ht.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const Qa = q.morphAttributes;
      if ((Qa.position !== void 0 || Qa.normal !== void 0 || Qa.color !== void 0 && le.isWebGL2 === true) && pe.update(Z, q, oi), (As || Qe.receiveShadow !== Z.receiveShadow) && (Qe.receiveShadow = Z.receiveShadow, Dt.setValue(I, "receiveShadow", Z.receiveShadow)), F.isMeshGouraudMaterial && F.envMap !== null && (li.envMap.value = Ge, li.flipEnvMap.value = Ge.isCubeTexture && Ge.isRenderTargetTexture === false ? -1 : 1), As && (Dt.setValue(I, "toneMappingExposure", p.toneMappingExposure), Qe.needsLights && pf(li, Ja), Ce && F.fog === true && Je.refreshFogUniforms(li, Ce), Je.refreshMaterialUniforms(li, F, D, B, oe), Sa.upload(I, Qe.uniformsList, li, te)), F.isShaderMaterial && F.uniformsNeedUpdate === true && (Sa.upload(I, Qe.uniformsList, li, te), F.uniformsNeedUpdate = false), F.isSpriteMaterial && Dt.setValue(I, "center", Z.center), Dt.setValue(I, "modelViewMatrix", Z.modelViewMatrix), Dt.setValue(I, "normalMatrix", Z.normalMatrix), Dt.setValue(I, "modelMatrix", Z.matrixWorld), F.isShaderMaterial || F.isRawShaderMaterial) {
        const Ht = F.uniformsGroups;
        for (let $a = 0, xf = Ht.length; $a < xf; $a++) if (le.isWebGL2) {
          const xc = Ht[$a];
          Me.update(xc, oi), Me.bind(xc, oi);
        } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return oi;
    }
    function pf(C, z) {
      C.ambientLightColor.needsUpdate = z, C.lightProbe.needsUpdate = z, C.directionalLights.needsUpdate = z, C.directionalLightShadows.needsUpdate = z, C.pointLights.needsUpdate = z, C.pointLightShadows.needsUpdate = z, C.spotLights.needsUpdate = z, C.spotLightShadows.needsUpdate = z, C.rectAreaLights.needsUpdate = z, C.hemisphereLights.needsUpdate = z;
    }
    function mf(C) {
      return C.isMeshLambertMaterial || C.isMeshToonMaterial || C.isMeshPhongMaterial || C.isMeshStandardMaterial || C.isShadowMaterial || C.isShaderMaterial && C.lights === true;
    }
    this.getActiveCubeFace = function() {
      return v;
    }, this.getActiveMipmapLevel = function() {
      return M;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(C, z, q) {
      j.get(C.texture).__webglTexture = z, j.get(C.depthTexture).__webglTexture = q;
      const F = j.get(C);
      F.__hasExternalTextures = true, F.__hasExternalTextures && (F.__autoAllocateDepthBuffer = q === void 0, F.__autoAllocateDepthBuffer || Ie.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), F.__useRenderToTexture = false));
    }, this.setRenderTargetFramebuffer = function(C, z) {
      const q = j.get(C);
      q.__webglFramebuffer = z, q.__useDefaultFramebuffer = z === void 0;
    }, this.setRenderTarget = function(C, z = 0, q = 0) {
      w = C, v = z, M = q;
      let F = true, Z = null, Ce = false, De = false;
      if (C) {
        const Ge = j.get(C);
        Ge.__useDefaultFramebuffer !== void 0 ? (Se.bindFramebuffer(I.FRAMEBUFFER, null), F = false) : Ge.__webglFramebuffer === void 0 ? te.setupRenderTarget(C) : Ge.__hasExternalTextures && te.rebindTextures(C, j.get(C.texture).__webglTexture, j.get(C.depthTexture).__webglTexture);
        const Xe = C.texture;
        (Xe.isData3DTexture || Xe.isDataArrayTexture || Xe.isCompressedArrayTexture) && (De = true);
        const qe = j.get(C).__webglFramebuffer;
        C.isWebGLCubeRenderTarget ? (Z = qe[z], Ce = true) : le.isWebGL2 && C.samples > 0 && te.useMultisampledRTT(C) === false ? Z = j.get(C).__webglMultisampledFramebuffer : Z = qe, R.copy(C.viewport), b.copy(C.scissor), T = C.scissorTest;
      } else R.copy(Y).multiplyScalar(D).floor(), b.copy(J).multiplyScalar(D).floor(), T = K;
      if (Se.bindFramebuffer(I.FRAMEBUFFER, Z) && le.drawBuffers && F && Se.drawBuffers(C, Z), Se.viewport(R), Se.scissor(b), Se.setScissorTest(T), Ce) {
        const Ge = j.get(C.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + z, Ge.__webglTexture, q);
      } else if (De) {
        const Ge = j.get(C.texture), Xe = z || 0;
        I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, Ge.__webglTexture, q || 0, Xe);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(C, z, q, F, Z, Ce, De) {
      if (!(C && C.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Oe = j.get(C).__webglFramebuffer;
      if (C.isWebGLCubeRenderTarget && De !== void 0 && (Oe = Oe[De]), Oe) {
        Se.bindFramebuffer(I.FRAMEBUFFER, Oe);
        try {
          const Ge = C.texture, Xe = Ge.format, qe = Ge.type;
          if (Xe !== Wt && H.convert(Xe) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ze = qe === fs && (Ie.has("EXT_color_buffer_half_float") || le.isWebGL2 && Ie.has("EXT_color_buffer_float"));
          if (qe !== ti && H.convert(qe) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE) && !(qe === Pn && (le.isWebGL2 || Ie.has("OES_texture_float") || Ie.has("WEBGL_color_buffer_float"))) && !Ze) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          z >= 0 && z <= C.width - F && q >= 0 && q <= C.height - Z && I.readPixels(z, q, F, Z, H.convert(Xe), H.convert(qe), Ce);
        } finally {
          const Ge = w !== null ? j.get(w).__webglFramebuffer : null;
          Se.bindFramebuffer(I.FRAMEBUFFER, Ge);
        }
      }
    }, this.copyFramebufferToTexture = function(C, z, q = 0) {
      const F = Math.pow(2, -q), Z = Math.floor(z.image.width * F), Ce = Math.floor(z.image.height * F);
      te.setTexture2D(z, 0), I.copyTexSubImage2D(I.TEXTURE_2D, q, 0, 0, C.x, C.y, Z, Ce), Se.unbindTexture();
    }, this.copyTextureToTexture = function(C, z, q, F = 0) {
      const Z = z.image.width, Ce = z.image.height, De = H.convert(q.format), Oe = H.convert(q.type);
      te.setTexture2D(q, 0), I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, q.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, q.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, q.unpackAlignment), z.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, F, C.x, C.y, Z, Ce, De, Oe, z.image.data) : z.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, F, C.x, C.y, z.mipmaps[0].width, z.mipmaps[0].height, De, z.mipmaps[0].data) : I.texSubImage2D(I.TEXTURE_2D, F, C.x, C.y, De, Oe, z.image), F === 0 && q.generateMipmaps && I.generateMipmap(I.TEXTURE_2D), Se.unbindTexture();
    }, this.copyTextureToTexture3D = function(C, z, q, F, Z = 0) {
      if (p.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const Ce = C.max.x - C.min.x + 1, De = C.max.y - C.min.y + 1, Oe = C.max.z - C.min.z + 1, Ge = H.convert(F.format), Xe = H.convert(F.type);
      let qe;
      if (F.isData3DTexture) te.setTexture3D(F, 0), qe = I.TEXTURE_3D;
      else if (F.isDataArrayTexture) te.setTexture2DArray(F, 0), qe = I.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, F.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, F.unpackAlignment);
      const Ze = I.getParameter(I.UNPACK_ROW_LENGTH), tt = I.getParameter(I.UNPACK_IMAGE_HEIGHT), It = I.getParameter(I.UNPACK_SKIP_PIXELS), nn = I.getParameter(I.UNPACK_SKIP_ROWS), ai = I.getParameter(I.UNPACK_SKIP_IMAGES), xt = q.isCompressedTexture ? q.mipmaps[0] : q.image;
      I.pixelStorei(I.UNPACK_ROW_LENGTH, xt.width), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, xt.height), I.pixelStorei(I.UNPACK_SKIP_PIXELS, C.min.x), I.pixelStorei(I.UNPACK_SKIP_ROWS, C.min.y), I.pixelStorei(I.UNPACK_SKIP_IMAGES, C.min.z), q.isDataTexture || q.isData3DTexture ? I.texSubImage3D(qe, Z, z.x, z.y, z.z, Ce, De, Oe, Ge, Xe, xt.data) : q.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), I.compressedTexSubImage3D(qe, Z, z.x, z.y, z.z, Ce, De, Oe, Ge, xt.data)) : I.texSubImage3D(qe, Z, z.x, z.y, z.z, Ce, De, Oe, Ge, Xe, xt), I.pixelStorei(I.UNPACK_ROW_LENGTH, Ze), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, tt), I.pixelStorei(I.UNPACK_SKIP_PIXELS, It), I.pixelStorei(I.UNPACK_SKIP_ROWS, nn), I.pixelStorei(I.UNPACK_SKIP_IMAGES, ai), Z === 0 && F.generateMipmaps && I.generateMipmap(qe), Se.unbindTexture();
    }, this.initTexture = function(C) {
      C.isCubeTexture ? te.setTextureCube(C, 0) : C.isData3DTexture ? te.setTexture3D(C, 0) : C.isDataArrayTexture || C.isCompressedArrayTexture ? te.setTexture2DArray(C, 0) : te.setTexture2D(C, 0), Se.unbindTexture();
    }, this.resetState = function() {
      v = 0, M = 0, w = null, Se.reset(), me.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Ue ? In : Ll;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === In ? Ue : hn;
  }
}
class ld extends od {
}
ld.prototype.isWebGL1Renderer = true;
class Ha {
  constructor(e, t = 25e-5) {
    this.isFogExp2 = true, this.name = "", this.color = new ue(e), this.density = t;
  }
  clone() {
    return new Ha(this.color, this.density);
  }
  toJSON() {
    return { type: "FogExp2", color: this.color.getHex(), density: this.density };
  }
}
class Ga {
  constructor(e, t = 1, n = 1e3) {
    this.isFog = true, this.name = "", this.color = new ue(e), this.near = t, this.far = n;
  }
  clone() {
    return new Ga(this.color, this.near, this.far);
  }
  toJSON() {
    return { type: "Fog", color: this.color.getHex(), near: this.near, far: this.far };
  }
}
class cd extends Ke {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class Va {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = $s, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Yt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Yt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Yt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const Ut = new A();
class Pi {
  constructor(e, t, n, i = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++) Ut.fromBufferAttribute(this, t), Ut.applyMatrix4(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) Ut.fromBufferAttribute(this, t), Ut.applyNormalMatrix(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) Ut.fromBufferAttribute(this, t), Ut.transformDirection(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = He(t, this.array), n = He(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array), s = He(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return new et(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Pi(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
class kl extends Pt {
  constructor(e) {
    super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new ue(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let es;
const Is = new A(), ts = new A(), ns = new A(), is = new W(), Ds = new W(), hd = new _e(), qr = new A(), Us = new A(), Yr = new A(), eh = new W(), bo = new W(), th = new W();
class ud extends Ke {
  constructor(e) {
    if (super(), this.isSprite = true, this.type = "Sprite", es === void 0) {
      es = new Ne();
      const t = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), n = new Va(t, 5);
      es.setIndex([0, 1, 2, 0, 2, 3]), es.setAttribute("position", new Pi(n, 3, 0, false)), es.setAttribute("uv", new Pi(n, 2, 3, false));
    }
    this.geometry = es, this.material = e !== void 0 ? e : new kl(), this.center = new W(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), ts.setFromMatrixScale(this.matrixWorld), hd.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), ns.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === false && ts.multiplyScalar(-ns.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && (s = Math.cos(n), i = Math.sin(n));
    const a = this.center;
    jr(qr.set(-0.5, -0.5, 0), ns, a, ts, i, s), jr(Us.set(0.5, -0.5, 0), ns, a, ts, i, s), jr(Yr.set(0.5, 0.5, 0), ns, a, ts, i, s), eh.set(0, 0), bo.set(1, 0), th.set(1, 1);
    let o = e.ray.intersectTriangle(qr, Us, Yr, false, Is);
    if (o === null && (jr(Us.set(-0.5, 0.5, 0), ns, a, ts, i, s), bo.set(0, 1), o = e.ray.intersectTriangle(qr, Yr, Us, false, Is), o === null)) return;
    const l = e.ray.origin.distanceTo(Is);
    l < e.near || l > e.far || t.push({ distance: l, point: Is.clone(), uv: zt.getInterpolation(Is, qr, Us, Yr, eh, bo, th, new W()), face: null, object: this });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function jr(r, e, t, n, i, s) {
  is.subVectors(r, t).addScalar(0.5).multiply(n), i !== void 0 ? (Ds.x = s * is.x - i * is.y, Ds.y = i * is.x + s * is.y) : Ds.copy(is), r.copy(e), r.x += Ds.x, r.y += Ds.y, r.applyMatrix4(hd);
}
const Zr = new A(), nh = new A();
class dd extends Ke {
  constructor() {
    super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, { levels: { enumerable: true, value: [] }, isLOD: { value: true } }), this.autoUpdate = true;
  }
  copy(e) {
    super.copy(e, false);
    const t = e.levels;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      this.addLevel(s.object.clone(), s.distance, s.hysteresis);
    }
    return this.autoUpdate = e.autoUpdate, this;
  }
  addLevel(e, t = 0, n = 0) {
    t = Math.abs(t);
    const i = this.levels;
    let s;
    for (s = 0; s < i.length && !(t < i[s].distance); s++) ;
    return i.splice(s, 0, { distance: t, hysteresis: n, object: e }), this.add(e), this;
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  getObjectForDistance(e) {
    const t = this.levels;
    if (t.length > 0) {
      let n, i;
      for (n = 1, i = t.length; n < i; n++) {
        let s = t[n].distance;
        if (t[n].object.visible && (s -= s * t[n].hysteresis), e < s) break;
      }
      return t[n - 1].object;
    }
    return null;
  }
  raycast(e, t) {
    if (this.levels.length > 0) {
      Zr.setFromMatrixPosition(this.matrixWorld);
      const i = e.ray.origin.distanceTo(Zr);
      this.getObjectForDistance(i).raycast(e, t);
    }
  }
  update(e) {
    const t = this.levels;
    if (t.length > 1) {
      Zr.setFromMatrixPosition(e.matrixWorld), nh.setFromMatrixPosition(this.matrixWorld);
      const n = Zr.distanceTo(nh) / e.zoom;
      t[0].object.visible = true;
      let i, s;
      for (i = 1, s = t.length; i < s; i++) {
        let a = t[i].distance;
        if (t[i].object.visible && (a -= a * t[i].hysteresis), n >= a) t[i - 1].object.visible = false, t[i].object.visible = true;
        else break;
      }
      for (this._currentLevel = i - 1; i < s; i++) t[i].object.visible = false;
    }
  }
  toJSON(e) {
    const t = super.toJSON(e);
    this.autoUpdate === false && (t.object.autoUpdate = false), t.object.levels = [];
    const n = this.levels;
    for (let i = 0, s = n.length; i < s; i++) {
      const a = n[i];
      t.object.levels.push({ object: a.object.uuid, distance: a.distance, hysteresis: a.hysteresis });
    }
    return t;
  }
}
const ih = new A(), sh = new $e(), rh = new $e(), pv = new A(), ah = new _e(), ss = new A(), So = new un();
class Hl extends vt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new _e(), this.bindMatrixInverse = new _e(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new en()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) ss.fromBufferAttribute(t, n), this.applyBoneTransform(n, ss), this.boundingBox.expandByPoint(ss);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new un()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) ss.fromBufferAttribute(t, n), this.applyBoneTransform(n, ss), this.boundingSphere.expandByPoint(ss);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this;
  }
  raycast(e, t) {
    this.boundingSphere === null && this.computeBoundingSphere(), So.copy(this.boundingSphere), So.applyMatrix4(this.matrixWorld), e.ray.intersectsSphere(So) !== false && this._computeIntersections(e, t);
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new $e(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    sh.fromBufferAttribute(i.attributes.skinIndex, e), rh.fromBufferAttribute(i.attributes.skinWeight, e), ih.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = rh.getComponent(s);
      if (a !== 0) {
        const o = sh.getComponent(s);
        ah.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(pv.copy(ih).applyMatrix4(ah), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class tr extends Ke {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class us extends rt {
  constructor(e = null, t = 1, n = 1, i, s, a, o, l, c = at, h = at, u, d) {
    super(null, a, o, l, c, h, i, s, u, d), this.isDataTexture = true, this.image = { data: e, width: t, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const oh = new _e(), mv = new _e();
class hr {
  constructor(e = [], t = []) {
    this.uuid = Yt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new _e());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new _e();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : mv;
      oh.multiplyMatrices(o, t[s]), oh.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = true);
  }
  clone() {
    return new hr(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = qu(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new us(t, e, e, Wt, Pn);
    return n.needsUpdate = true, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new tr()), this.bones.push(a), this.boneInverses.push(new _e().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = { metadata: { version: 4.5, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class xs extends et {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
  }
}
const rs = new _e(), lh = new _e(), Kr = [], ch = new en(), xv = new _e(), Fs = new vt(), Os = new un();
class fd extends vt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new xs(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, xv);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new en()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, rs), ch.copy(e.boundingBox).applyMatrix4(rs), this.boundingBox.union(ch);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new un()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, rs), Os.copy(e.boundingSphere).applyMatrix4(rs), this.boundingSphere.union(Os);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Fs.geometry = this.geometry, Fs.material = this.material, Fs.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Os.copy(this.boundingSphere), Os.applyMatrix4(n), e.ray.intersectsSphere(Os) !== false)) for (let s = 0; s < i; s++) {
      this.getMatrixAt(s, rs), lh.multiplyMatrices(n, rs), Fs.matrixWorld = lh, Fs.raycast(e, Kr);
      for (let a = 0, o = Kr.length; a < o; a++) {
        const l = Kr[a];
        l.instanceId = s, l.object = this, t.push(l);
      }
      Kr.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new xs(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Lt extends Pt {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new ue(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const hh = new A(), uh = new A(), dh = new _e(), wo = new lr(), Jr = new un();
class Fn extends Ke {
  constructor(e = new Ne(), t = new Lt()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++) hh.fromBufferAttribute(t, i - 1), uh.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += hh.distanceTo(uh);
      e.setAttribute("lineDistance", new xe(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Jr.copy(n.boundingSphere), Jr.applyMatrix4(i), Jr.radius += s, e.ray.intersectsSphere(Jr) === false) return;
    dh.copy(i).invert(), wo.copy(e.ray).applyMatrix4(dh);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = new A(), h = new A(), u = new A(), d = new A(), f = this.isLineSegments ? 2 : 1, m = n.index, x = n.attributes.position;
    if (m !== null) {
      const p = Math.max(0, a.start), _ = Math.min(m.count, a.start + a.count);
      for (let v = p, M = _ - 1; v < M; v += f) {
        const w = m.getX(v), S = m.getX(v + 1);
        if (c.fromBufferAttribute(x, w), h.fromBufferAttribute(x, S), wo.distanceSqToSegment(c, h, d, u) > l) continue;
        d.applyMatrix4(this.matrixWorld);
        const R = e.ray.origin.distanceTo(d);
        R < e.near || R > e.far || t.push({ distance: R, point: u.clone().applyMatrix4(this.matrixWorld), index: v, face: null, faceIndex: null, object: this });
      }
    } else {
      const p = Math.max(0, a.start), _ = Math.min(x.count, a.start + a.count);
      for (let v = p, M = _ - 1; v < M; v += f) {
        if (c.fromBufferAttribute(x, v), h.fromBufferAttribute(x, v + 1), wo.distanceSqToSegment(c, h, d, u) > l) continue;
        d.applyMatrix4(this.matrixWorld);
        const S = e.ray.origin.distanceTo(d);
        S < e.near || S > e.far || t.push({ distance: S, point: u.clone().applyMatrix4(this.matrixWorld), index: v, face: null, faceIndex: null, object: this });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
const fh = new A(), ph = new A();
class Mn extends Fn {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2) fh.fromBufferAttribute(t, i), ph.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + fh.distanceTo(ph);
      e.setAttribute("lineDistance", new xe(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class pd extends Fn {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class Gl extends Pt {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new ue(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const mh = new _e(), gl = new lr(), Qr = new un(), $r = new A();
class md extends Ke {
  constructor(e = new Ne(), t = new Gl()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Qr.copy(n.boundingSphere), Qr.applyMatrix4(i), Qr.radius += s, e.ray.intersectsSphere(Qr) === false) return;
    mh.copy(i).invert(), gl.copy(e.ray).applyMatrix4(mh);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start), f = Math.min(c.count, a.start + a.count);
      for (let m = d, g = f; m < g; m++) {
        const x = c.getX(m);
        $r.fromBufferAttribute(u, x), xh($r, x, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), f = Math.min(u.count, a.start + a.count);
      for (let m = d, g = f; m < g; m++) $r.fromBufferAttribute(u, m), xh($r, m, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function xh(r, e, t, n, i, s, a) {
  const o = gl.distanceSqToPoint(r);
  if (o < t) {
    const l = new A();
    gl.closestPointToPoint(r, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: e, face: null, object: a });
  }
}
class gv extends rt {
  constructor(e, t, n, i, s, a, o, l, c) {
    super(e, t, n, i, s, a, o, l, c), this.isVideoTexture = true, this.minFilter = a !== void 0 ? a : ct, this.magFilter = s !== void 0 ? s : ct, this.generateMipmaps = false;
    const h = this;
    function u() {
      h.needsUpdate = true, e.requestVideoFrameCallback(u);
    }
    "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(u);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const e = this.image;
    "requestVideoFrameCallback" in e === false && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = true);
  }
}
class vv extends rt {
  constructor(e, t, n) {
    super({ width: e, height: t }), this.isFramebufferTexture = true, this.format = n, this.magFilter = at, this.minFilter = at, this.generateMipmaps = false, this.needsUpdate = true;
  }
}
class Vl extends rt {
  constructor(e, t, n, i, s, a, o, l, c, h, u, d) {
    super(null, a, o, l, c, h, i, s, u, d), this.isCompressedTexture = true, this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = false, this.generateMipmaps = false;
  }
}
class yv extends Vl {
  constructor(e, t, n, i, s, a) {
    super(e, t, n, s, a), this.isCompressedArrayTexture = true, this.image.depth = i, this.wrapR = Tt;
  }
}
class _v extends rt {
  constructor(e, t, n, i, s, a, o, l, c) {
    super(e, t, n, i, s, a, o, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class tn {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = false;
    const t = [];
    let n, i = this.getPoint(0), s = 0;
    t.push(0);
    for (let a = 1; a <= e; a++) n = this.getPoint(a / e), s += n.distanceTo(i), t.push(s), i = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let a;
    t ? a = t : a = e * n[s - 1];
    let o = 0, l = s - 1, c;
    for (; o <= l; ) if (i = Math.floor(o + (l - o) / 2), c = n[i] - a, c < 0) o = i + 1;
    else if (c > 0) l = i - 1;
    else {
      l = i;
      break;
    }
    if (i = l, n[i] === a) return i / (s - 1);
    const h = n[i], d = n[i + 1] - h, f = (a - h) / d;
    return (i + f) / (s - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4, s = e + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const a = this.getPoint(i), o = this.getPoint(s), l = t || (a.isVector2 ? new W() : new A());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new A(), i = [], s = [], a = [], o = new A(), l = new _e();
    for (let f = 0; f <= e; f++) {
      const m = f / e;
      i[f] = this.getTangentAt(m, new A());
    }
    s[0] = new A(), a[0] = new A();
    let c = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], o), a[0].crossVectors(i[0], s[0]);
    for (let f = 1; f <= e; f++) {
      if (s[f] = s[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(i[f - 1], i[f]), o.length() > Number.EPSILON) {
        o.normalize();
        const m = Math.acos(ht(i[f - 1].dot(i[f]), -1, 1));
        s[f].applyMatrix4(l.makeRotationAxis(o, m));
      }
      a[f].crossVectors(i[f], s[f]);
    }
    if (t === true) {
      let f = Math.acos(ht(s[0].dot(s[e]), -1, 1));
      f /= e, i[0].dot(o.crossVectors(s[0], s[e])) > 0 && (f = -f);
      for (let m = 1; m <= e; m++) s[m].applyMatrix4(l.makeRotationAxis(i[m], f * m)), a[m].crossVectors(i[m], s[m]);
    }
    return { tangents: i, normals: s, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class Wa extends tn {
  constructor(e = 0, t = 0, n = 1, i = 1, s = 0, a = Math.PI * 2, o = false, l = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l;
  }
  getPoint(e, t) {
    const n = t || new W(), i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += i;
    for (; s > i; ) s -= i;
    s < Number.EPSILON && (a ? s = 0 : s = i), this.aClockwise === true && !a && (s === i ? s = -i : s = s - i);
    const o = this.aStartAngle + e * s;
    let l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = l - this.aX, f = c - this.aY;
      l = d * h - f * u + this.aX, c = d * u + f * h + this.aY;
    }
    return n.set(l, c);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class xd extends Wa {
  constructor(e, t, n, i, s, a) {
    super(e, t, n, n, i, s, a), this.isArcCurve = true, this.type = "ArcCurve";
  }
}
function Wl() {
  let r = 0, e = 0, t = 0, n = 0;
  function i(s, a, o, l) {
    r = s, e = o, t = -3 * s + 3 * a - 2 * o - l, n = 2 * s - 2 * a + o + l;
  }
  return { initCatmullRom: function(s, a, o, l, c) {
    i(a, o, c * (o - s), c * (l - a));
  }, initNonuniformCatmullRom: function(s, a, o, l, c, h, u) {
    let d = (a - s) / c - (o - s) / (c + h) + (o - a) / h, f = (o - a) / h - (l - a) / (h + u) + (l - o) / u;
    d *= h, f *= h, i(a, o, d, f);
  }, calc: function(s) {
    const a = s * s, o = a * s;
    return r + e * s + t * a + n * o;
  } };
}
const ea = new A(), To = new Wl(), Eo = new Wl(), Ao = new Wl();
class gd extends tn {
  constructor(e = [], t = false, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new A()) {
    const n = t, i = this.points, s = i.length, a = (s - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a), l = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : l === 0 && o === s - 1 && (o = s - 2, l = 1);
    let c, h;
    this.closed || o > 0 ? c = i[(o - 1) % s] : (ea.subVectors(i[0], i[1]).add(i[0]), c = ea);
    const u = i[o % s], d = i[(o + 1) % s];
    if (this.closed || o + 2 < s ? h = i[(o + 2) % s] : (ea.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), h = ea), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(c.distanceToSquared(u), f), g = Math.pow(u.distanceToSquared(d), f), x = Math.pow(d.distanceToSquared(h), f);
      g < 1e-4 && (g = 1), m < 1e-4 && (m = g), x < 1e-4 && (x = g), To.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, m, g, x), Eo.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, m, g, x), Ao.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, m, g, x);
    } else this.curveType === "catmullrom" && (To.initCatmullRom(c.x, u.x, d.x, h.x, this.tension), Eo.initCatmullRom(c.y, u.y, d.y, h.y, this.tension), Ao.initCatmullRom(c.z, u.z, d.z, h.z, this.tension));
    return n.set(To.calc(l), Eo.calc(l), Ao.calc(l)), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new A().fromArray(i));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function gh(r, e, t, n, i) {
  const s = (n - e) * 0.5, a = (i - t) * 0.5, o = r * r, l = r * o;
  return (2 * t - 2 * n + s + a) * l + (-3 * t + 3 * n - 2 * s - a) * o + s * r + t;
}
function Mv(r, e) {
  const t = 1 - r;
  return t * t * e;
}
function bv(r, e) {
  return 2 * (1 - r) * r * e;
}
function Sv(r, e) {
  return r * r * e;
}
function Ws(r, e, t, n) {
  return Mv(r, e) + bv(r, t) + Sv(r, n);
}
function wv(r, e) {
  const t = 1 - r;
  return t * t * t * e;
}
function Tv(r, e) {
  const t = 1 - r;
  return 3 * t * t * r * e;
}
function Ev(r, e) {
  return 3 * (1 - r) * r * r * e;
}
function Av(r, e) {
  return r * r * r * e;
}
function Xs(r, e, t, n, i) {
  return wv(r, e) + Tv(r, t) + Ev(r, n) + Av(r, i);
}
class Xl extends tn {
  constructor(e = new W(), t = new W(), n = new W(), i = new W()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new W()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(Xs(e, i.x, s.x, a.x, o.x), Xs(e, i.y, s.y, a.y, o.y)), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class vd extends tn {
  constructor(e = new A(), t = new A(), n = new A(), i = new A()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new A()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(Xs(e, i.x, s.x, a.x, o.x), Xs(e, i.y, s.y, a.y, o.y), Xs(e, i.z, s.z, a.z, o.z)), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Xa extends tn {
  constructor(e = new W(), t = new W()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new W()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new W()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class yd extends tn {
  constructor(e = new A(), t = new A()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new A()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new A()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class ql extends tn {
  constructor(e = new W(), t = new W(), n = new W()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new W()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2;
    return n.set(Ws(e, i.x, s.x, a.x), Ws(e, i.y, s.y, a.y)), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Yl extends tn {
  constructor(e = new A(), t = new A(), n = new A()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new A()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2;
    return n.set(Ws(e, i.x, s.x, a.x), Ws(e, i.y, s.y, a.y), Ws(e, i.z, s.z, a.z)), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class jl extends tn {
  constructor(e = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new W()) {
    const n = t, i = this.points, s = (i.length - 1) * e, a = Math.floor(s), o = s - a, l = i[a === 0 ? a : a - 1], c = i[a], h = i[a > i.length - 2 ? i.length - 1 : a + 1], u = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(gh(o, l.x, c.x, h.x, u.x), gh(o, l.y, c.y, h.y, u.y)), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new W().fromArray(i));
    }
    return this;
  }
}
var Zl = Object.freeze({ __proto__: null, ArcCurve: xd, CatmullRomCurve3: gd, CubicBezierCurve: Xl, CubicBezierCurve3: vd, EllipseCurve: Wa, LineCurve: Xa, LineCurve3: yd, QuadraticBezierCurve: ql, QuadraticBezierCurve3: Yl, SplineCurve: jl });
class _d extends tn {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Xa(t, e));
  }
  getPoint(e, t) {
    const n = e * this.getLength(), i = this.getCurveLengths();
    let s = 0;
    for (; s < i.length; ) {
      if (i[s] >= n) {
        const a = i[s] - n, o = this.curves[s], l = o.getLength(), c = l === 0 ? 0 : 1 - a / l;
        return o.getPointAt(c, t);
      }
      s++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++) t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, s = this.curves; i < s.length; i++) {
      const a = s[i], o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, l = a.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
        n && n.equals(h) || (t.push(h), n = h);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new Zl[i.type]().fromJSON(i));
    }
    return this;
  }
}
class nr extends _d {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new W(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new Xa(this.currentPoint.clone(), new W(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const s = new ql(this.currentPoint.clone(), new W(e, t), new W(n, i));
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, a) {
    const o = new Xl(this.currentPoint.clone(), new W(e, t), new W(n, i), new W(s, a));
    return this.curves.push(o), this.currentPoint.set(s, a), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new jl(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, s, a) {
    const o = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(e + o, t + l, n, i, s, a), this;
  }
  absarc(e, t, n, i, s, a) {
    return this.absellipse(e, t, n, n, i, s, a), this;
  }
  ellipse(e, t, n, i, s, a, o, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + c, t + h, n, i, s, a, o, l), this;
  }
  absellipse(e, t, n, i, s, a, o, l) {
    const c = new Wa(e, t, n, i, s, a, o, l);
    if (this.curves.length > 0) {
      const u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class Ss extends Ne {
  constructor(e = [new W(0, -0.5), new W(0.5, 0), new W(0, 0.5)], t = 12, n = 0, i = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = { points: e, segments: t, phiStart: n, phiLength: i }, t = Math.floor(t), i = ht(i, 0, Math.PI * 2);
    const s = [], a = [], o = [], l = [], c = [], h = 1 / t, u = new A(), d = new W(), f = new A(), m = new A(), g = new A();
    let x = 0, p = 0;
    for (let _ = 0; _ <= e.length - 1; _++) switch (_) {
      case 0:
        x = e[_ + 1].x - e[_].x, p = e[_ + 1].y - e[_].y, f.x = p * 1, f.y = -x, f.z = p * 0, g.copy(f), f.normalize(), l.push(f.x, f.y, f.z);
        break;
      case e.length - 1:
        l.push(g.x, g.y, g.z);
        break;
      default:
        x = e[_ + 1].x - e[_].x, p = e[_ + 1].y - e[_].y, f.x = p * 1, f.y = -x, f.z = p * 0, m.copy(f), f.x += g.x, f.y += g.y, f.z += g.z, f.normalize(), l.push(f.x, f.y, f.z), g.copy(m);
    }
    for (let _ = 0; _ <= t; _++) {
      const v = n + _ * h * i, M = Math.sin(v), w = Math.cos(v);
      for (let S = 0; S <= e.length - 1; S++) {
        u.x = e[S].x * M, u.y = e[S].y, u.z = e[S].x * w, a.push(u.x, u.y, u.z), d.x = _ / t, d.y = S / (e.length - 1), o.push(d.x, d.y);
        const y = l[3 * S + 0] * M, R = l[3 * S + 1], b = l[3 * S + 0] * w;
        c.push(y, R, b);
      }
    }
    for (let _ = 0; _ < t; _++) for (let v = 0; v < e.length - 1; v++) {
      const M = v + _ * e.length, w = M, S = M + e.length, y = M + e.length + 1, R = M + 1;
      s.push(w, S, R), s.push(y, R, S);
    }
    this.setIndex(s), this.setAttribute("position", new xe(a, 3)), this.setAttribute("uv", new xe(o, 2)), this.setAttribute("normal", new xe(c, 3));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ss(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class ur extends Ss {
  constructor(e = 1, t = 1, n = 4, i = 8) {
    const s = new nr();
    s.absarc(0, -t / 2, e, Math.PI * 1.5, 0), s.absarc(0, t / 2, e, 0, Math.PI * 0.5), super(s.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = { radius: e, height: t, capSegments: n, radialSegments: i };
  }
  static fromJSON(e) {
    return new ur(e.radius, e.length, e.capSegments, e.radialSegments);
  }
}
class dr extends Ne {
  constructor(e = 1, t = 32, n = 0, i = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = { radius: e, segments: t, thetaStart: n, thetaLength: i }, t = Math.max(3, t);
    const s = [], a = [], o = [], l = [], c = new A(), h = new W();
    a.push(0, 0, 0), o.push(0, 0, 1), l.push(0.5, 0.5);
    for (let u = 0, d = 3; u <= t; u++, d += 3) {
      const f = n + u / t * i;
      c.x = e * Math.cos(f), c.y = e * Math.sin(f), a.push(c.x, c.y, c.z), o.push(0, 0, 1), h.x = (a[d] / e + 1) / 2, h.y = (a[d + 1] / e + 1) / 2, l.push(h.x, h.y);
    }
    for (let u = 1; u <= t; u++) s.push(u, u + 1, 0);
    this.setIndex(s), this.setAttribute("position", new xe(a, 3)), this.setAttribute("normal", new xe(o, 3)), this.setAttribute("uv", new xe(l, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new dr(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class Fi extends Ne {
  constructor(e = 1, t = 1, n = 1, i = 32, s = 1, a = false, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: n, radialSegments: i, heightSegments: s, openEnded: a, thetaStart: o, thetaLength: l };
    const c = this;
    i = Math.floor(i), s = Math.floor(s);
    const h = [], u = [], d = [], f = [];
    let m = 0;
    const g = [], x = n / 2;
    let p = 0;
    _(), a === false && (e > 0 && v(true), t > 0 && v(false)), this.setIndex(h), this.setAttribute("position", new xe(u, 3)), this.setAttribute("normal", new xe(d, 3)), this.setAttribute("uv", new xe(f, 2));
    function _() {
      const M = new A(), w = new A();
      let S = 0;
      const y = (t - e) / n;
      for (let R = 0; R <= s; R++) {
        const b = [], T = R / s, N = T * (t - e) + e;
        for (let B = 0; B <= i; B++) {
          const D = B / i, O = D * l + o, k = Math.sin(O), Y = Math.cos(O);
          w.x = N * k, w.y = -T * n + x, w.z = N * Y, u.push(w.x, w.y, w.z), M.set(k, y, Y).normalize(), d.push(M.x, M.y, M.z), f.push(D, 1 - T), b.push(m++);
        }
        g.push(b);
      }
      for (let R = 0; R < i; R++) for (let b = 0; b < s; b++) {
        const T = g[b][R], N = g[b + 1][R], B = g[b + 1][R + 1], D = g[b][R + 1];
        h.push(T, N, D), h.push(N, B, D), S += 6;
      }
      c.addGroup(p, S, 0), p += S;
    }
    function v(M) {
      const w = m, S = new W(), y = new A();
      let R = 0;
      const b = M === true ? e : t, T = M === true ? 1 : -1;
      for (let B = 1; B <= i; B++) u.push(0, x * T, 0), d.push(0, T, 0), f.push(0.5, 0.5), m++;
      const N = m;
      for (let B = 0; B <= i; B++) {
        const O = B / i * l + o, k = Math.cos(O), Y = Math.sin(O);
        y.x = b * Y, y.y = x * T, y.z = b * k, u.push(y.x, y.y, y.z), d.push(0, T, 0), S.x = k * 0.5 + 0.5, S.y = Y * 0.5 * T + 0.5, f.push(S.x, S.y), m++;
      }
      for (let B = 0; B < i; B++) {
        const D = w + B, O = N + B;
        M === true ? h.push(O, O + 1, D) : h.push(O + 1, O, D), R += 3;
      }
      c.addGroup(p, R, M === true ? 1 : 2), p += R;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Fi(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class fr extends Fi {
  constructor(e = 1, t = 1, n = 32, i = 1, s = false, a = 0, o = Math.PI * 2) {
    super(0, e, t, n, i, s, a, o), this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: n, heightSegments: i, openEnded: s, thetaStart: a, thetaLength: o };
  }
  static fromJSON(e) {
    return new fr(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class On extends Ne {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: e, indices: t, radius: n, detail: i };
    const s = [], a = [];
    o(i), c(n), h(), this.setAttribute("position", new xe(s, 3)), this.setAttribute("normal", new xe(s.slice(), 3)), this.setAttribute("uv", new xe(a, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(_) {
      const v = new A(), M = new A(), w = new A();
      for (let S = 0; S < t.length; S += 3) f(t[S + 0], v), f(t[S + 1], M), f(t[S + 2], w), l(v, M, w, _);
    }
    function l(_, v, M, w) {
      const S = w + 1, y = [];
      for (let R = 0; R <= S; R++) {
        y[R] = [];
        const b = _.clone().lerp(M, R / S), T = v.clone().lerp(M, R / S), N = S - R;
        for (let B = 0; B <= N; B++) B === 0 && R === S ? y[R][B] = b : y[R][B] = b.clone().lerp(T, B / N);
      }
      for (let R = 0; R < S; R++) for (let b = 0; b < 2 * (S - R) - 1; b++) {
        const T = Math.floor(b / 2);
        b % 2 === 0 ? (d(y[R][T + 1]), d(y[R + 1][T]), d(y[R][T])) : (d(y[R][T + 1]), d(y[R + 1][T + 1]), d(y[R + 1][T]));
      }
    }
    function c(_) {
      const v = new A();
      for (let M = 0; M < s.length; M += 3) v.x = s[M + 0], v.y = s[M + 1], v.z = s[M + 2], v.normalize().multiplyScalar(_), s[M + 0] = v.x, s[M + 1] = v.y, s[M + 2] = v.z;
    }
    function h() {
      const _ = new A();
      for (let v = 0; v < s.length; v += 3) {
        _.x = s[v + 0], _.y = s[v + 1], _.z = s[v + 2];
        const M = x(_) / 2 / Math.PI + 0.5, w = p(_) / Math.PI + 0.5;
        a.push(M, 1 - w);
      }
      m(), u();
    }
    function u() {
      for (let _ = 0; _ < a.length; _ += 6) {
        const v = a[_ + 0], M = a[_ + 2], w = a[_ + 4], S = Math.max(v, M, w), y = Math.min(v, M, w);
        S > 0.9 && y < 0.1 && (v < 0.2 && (a[_ + 0] += 1), M < 0.2 && (a[_ + 2] += 1), w < 0.2 && (a[_ + 4] += 1));
      }
    }
    function d(_) {
      s.push(_.x, _.y, _.z);
    }
    function f(_, v) {
      const M = _ * 3;
      v.x = e[M + 0], v.y = e[M + 1], v.z = e[M + 2];
    }
    function m() {
      const _ = new A(), v = new A(), M = new A(), w = new A(), S = new W(), y = new W(), R = new W();
      for (let b = 0, T = 0; b < s.length; b += 9, T += 6) {
        _.set(s[b + 0], s[b + 1], s[b + 2]), v.set(s[b + 3], s[b + 4], s[b + 5]), M.set(s[b + 6], s[b + 7], s[b + 8]), S.set(a[T + 0], a[T + 1]), y.set(a[T + 2], a[T + 3]), R.set(a[T + 4], a[T + 5]), w.copy(_).add(v).add(M).divideScalar(3);
        const N = x(w);
        g(S, T + 0, _, N), g(y, T + 2, v, N), g(R, T + 4, M, N);
      }
    }
    function g(_, v, M, w) {
      w < 0 && _.x === 1 && (a[v] = _.x - 1), M.x === 0 && M.z === 0 && (a[v] = w / 2 / Math.PI + 0.5);
    }
    function x(_) {
      return Math.atan2(_.z, -_.x);
    }
    function p(_) {
      return Math.atan2(-_.y, Math.sqrt(_.x * _.x + _.z * _.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new On(e.vertices, e.indices, e.radius, e.details);
  }
}
class pr extends On {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = 1 / n, s = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
    super(s, a, e, t), this.type = "DodecahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new pr(e.radius, e.detail);
  }
}
const ta = new A(), na = new A(), Ro = new A(), ia = new zt();
class Md extends Ne {
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: e, thresholdAngle: t }, e !== null) {
      const i = Math.pow(10, 4), s = Math.cos(Ai * t), a = e.getIndex(), o = e.getAttribute("position"), l = a ? a.count : o.count, c = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, f = [];
      for (let m = 0; m < l; m += 3) {
        a ? (c[0] = a.getX(m), c[1] = a.getX(m + 1), c[2] = a.getX(m + 2)) : (c[0] = m, c[1] = m + 1, c[2] = m + 2);
        const { a: g, b: x, c: p } = ia;
        if (g.fromBufferAttribute(o, c[0]), x.fromBufferAttribute(o, c[1]), p.fromBufferAttribute(o, c[2]), ia.getNormal(Ro), u[0] = `${Math.round(g.x * i)},${Math.round(g.y * i)},${Math.round(g.z * i)}`, u[1] = `${Math.round(x.x * i)},${Math.round(x.y * i)},${Math.round(x.z * i)}`, u[2] = `${Math.round(p.x * i)},${Math.round(p.y * i)},${Math.round(p.z * i)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0])) for (let _ = 0; _ < 3; _++) {
          const v = (_ + 1) % 3, M = u[_], w = u[v], S = ia[h[_]], y = ia[h[v]], R = `${M}_${w}`, b = `${w}_${M}`;
          b in d && d[b] ? (Ro.dot(d[b].normal) <= s && (f.push(S.x, S.y, S.z), f.push(y.x, y.y, y.z)), d[b] = null) : R in d || (d[R] = { index0: c[_], index1: c[v], normal: Ro.clone() });
        }
      }
      for (const m in d) if (d[m]) {
        const { index0: g, index1: x } = d[m];
        ta.fromBufferAttribute(o, g), na.fromBufferAttribute(o, x), f.push(ta.x, ta.y, ta.z), f.push(na.x, na.y, na.z);
      }
      this.setAttribute("position", new xe(f, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class Ri extends nr {
  constructor(e) {
    super(e), this.uuid = Yt(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++) t[n] = this.holes[n].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new nr().fromJSON(i));
    }
    return this;
  }
}
const Rv = { triangulate: function(r, e, t = 2) {
  const n = e && e.length, i = n ? e[0] * t : r.length;
  let s = bd(r, 0, i, t, true);
  const a = [];
  if (!s || s.next === s.prev) return a;
  let o, l, c, h, u, d, f;
  if (n && (s = Dv(r, e, s, t)), r.length > 80 * t) {
    o = c = r[0], l = h = r[1];
    for (let m = t; m < i; m += t) u = r[m], d = r[m + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
    f = Math.max(c - o, h - l), f = f !== 0 ? 32767 / f : 0;
  }
  return ir(s, a, t, o, l, f, 0), a;
} };
function bd(r, e, t, n, i) {
  let s, a;
  if (i === Wv(r, e, t, n) > 0) for (s = e; s < t; s += n) a = vh(s, r[s], r[s + 1], a);
  else for (s = t - n; s >= e; s -= n) a = vh(s, r[s], r[s + 1], a);
  return a && qa(a, a.next) && (rr(a), a = a.next), a;
}
function Li(r, e) {
  if (!r) return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = false, !t.steiner && (qa(t, t.next) || ot(t.prev, t, t.next) === 0)) {
      if (rr(t), t = e = t.prev, t === t.next) break;
      n = true;
    } else t = t.next;
  while (n || t !== e);
  return e;
}
function ir(r, e, t, n, i, s, a) {
  if (!r) return;
  !a && s && Bv(r, n, i, s);
  let o = r, l, c;
  for (; r.prev !== r.next; ) {
    if (l = r.prev, c = r.next, s ? Pv(r, n, i, s) : Cv(r)) {
      e.push(l.i / t | 0), e.push(r.i / t | 0), e.push(c.i / t | 0), rr(r), r = c.next, o = c.next;
      continue;
    }
    if (r = c, r === o) {
      a ? a === 1 ? (r = Lv(Li(r), e, t), ir(r, e, t, n, i, s, 2)) : a === 2 && Iv(r, e, t, n, i, s) : ir(Li(r), e, t, n, i, s, 1);
      break;
    }
  }
}
function Cv(r) {
  const e = r.prev, t = r, n = r.next;
  if (ot(e, t, n) >= 0) return false;
  const i = e.x, s = t.x, a = n.x, o = e.y, l = t.y, c = n.y, h = i < s ? i < a ? i : a : s < a ? s : a, u = o < l ? o < c ? o : c : l < c ? l : c, d = i > s ? i > a ? i : a : s > a ? s : a, f = o > l ? o > c ? o : c : l > c ? l : c;
  let m = n.next;
  for (; m !== e; ) {
    if (m.x >= h && m.x <= d && m.y >= u && m.y <= f && cs(i, o, s, l, a, c, m.x, m.y) && ot(m.prev, m, m.next) >= 0) return false;
    m = m.next;
  }
  return true;
}
function Pv(r, e, t, n) {
  const i = r.prev, s = r, a = r.next;
  if (ot(i, s, a) >= 0) return false;
  const o = i.x, l = s.x, c = a.x, h = i.y, u = s.y, d = a.y, f = o < l ? o < c ? o : c : l < c ? l : c, m = h < u ? h < d ? h : d : u < d ? u : d, g = o > l ? o > c ? o : c : l > c ? l : c, x = h > u ? h > d ? h : d : u > d ? u : d, p = vl(f, m, e, t, n), _ = vl(g, x, e, t, n);
  let v = r.prevZ, M = r.nextZ;
  for (; v && v.z >= p && M && M.z <= _; ) {
    if (v.x >= f && v.x <= g && v.y >= m && v.y <= x && v !== i && v !== a && cs(o, h, l, u, c, d, v.x, v.y) && ot(v.prev, v, v.next) >= 0 || (v = v.prevZ, M.x >= f && M.x <= g && M.y >= m && M.y <= x && M !== i && M !== a && cs(o, h, l, u, c, d, M.x, M.y) && ot(M.prev, M, M.next) >= 0)) return false;
    M = M.nextZ;
  }
  for (; v && v.z >= p; ) {
    if (v.x >= f && v.x <= g && v.y >= m && v.y <= x && v !== i && v !== a && cs(o, h, l, u, c, d, v.x, v.y) && ot(v.prev, v, v.next) >= 0) return false;
    v = v.prevZ;
  }
  for (; M && M.z <= _; ) {
    if (M.x >= f && M.x <= g && M.y >= m && M.y <= x && M !== i && M !== a && cs(o, h, l, u, c, d, M.x, M.y) && ot(M.prev, M, M.next) >= 0) return false;
    M = M.nextZ;
  }
  return true;
}
function Lv(r, e, t) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !qa(i, s) && Sd(i, n, n.next, s) && sr(i, s) && sr(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), rr(n), rr(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return Li(n);
}
function Iv(r, e, t, n, i, s) {
  let a = r;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && Hv(a, o)) {
        let l = wd(a, o);
        a = Li(a, a.next), l = Li(l, l.next), ir(a, e, t, n, i, s, 0), ir(l, e, t, n, i, s, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== r);
}
function Dv(r, e, t, n) {
  const i = [];
  let s, a, o, l, c;
  for (s = 0, a = e.length; s < a; s++) o = e[s] * n, l = s < a - 1 ? e[s + 1] * n : r.length, c = bd(r, o, l, n, false), c === c.next && (c.steiner = true), i.push(kv(c));
  for (i.sort(Uv), s = 0; s < i.length; s++) t = Fv(i[s], t);
  return t;
}
function Uv(r, e) {
  return r.x - e.x;
}
function Fv(r, e) {
  const t = Ov(r, e);
  if (!t) return e;
  const n = wd(t, r);
  return Li(n, n.next), Li(t, t.next);
}
function Ov(r, e) {
  let t = e, n = -1 / 0, i;
  const s = r.x, a = r.y;
  do {
    if (a <= t.y && a >= t.next.y && t.next.y !== t.y) {
      const d = t.x + (a - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (d <= s && d > n && (n = d, i = t.x < t.next.x ? t : t.next, d === s)) return i;
    }
    t = t.next;
  } while (t !== e);
  if (!i) return null;
  const o = i, l = i.x, c = i.y;
  let h = 1 / 0, u;
  t = i;
  do
    s >= t.x && t.x >= l && s !== t.x && cs(a < c ? s : n, a, l, c, a < c ? n : s, a, t.x, t.y) && (u = Math.abs(a - t.y) / (s - t.x), sr(t, r) && (u < h || u === h && (t.x > i.x || t.x === i.x && Nv(i, t))) && (i = t, h = u)), t = t.next;
  while (t !== o);
  return i;
}
function Nv(r, e) {
  return ot(r.prev, r, e.prev) < 0 && ot(e.next, r, r.next) < 0;
}
function Bv(r, e, t, n) {
  let i = r;
  do
    i.z === 0 && (i.z = vl(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, zv(i);
}
function zv(r) {
  let e, t, n, i, s, a, o, l, c = 1;
  do {
    for (t = r, r = null, s = null, a = 0; t; ) {
      for (a++, n = t, o = 0, e = 0; e < c && (o++, n = n.nextZ, !!n); e++) ;
      for (l = c; o > 0 || l > 0 && n; ) o !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, o--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
      t = n;
    }
    s.nextZ = null, c *= 2;
  } while (a > 1);
  return r;
}
function vl(r, e, t, n, i) {
  return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function kv(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function cs(r, e, t, n, i, s, a, o) {
  return (i - a) * (e - o) >= (r - a) * (s - o) && (r - a) * (n - o) >= (t - a) * (e - o) && (t - a) * (s - o) >= (i - a) * (n - o);
}
function Hv(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !Gv(r, e) && (sr(r, e) && sr(e, r) && Vv(r, e) && (ot(r.prev, r, e.prev) || ot(r, e.prev, e)) || qa(r, e) && ot(r.prev, r, r.next) > 0 && ot(e.prev, e, e.next) > 0);
}
function ot(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function qa(r, e) {
  return r.x === e.x && r.y === e.y;
}
function Sd(r, e, t, n) {
  const i = ra(ot(r, e, t)), s = ra(ot(r, e, n)), a = ra(ot(t, n, r)), o = ra(ot(t, n, e));
  return !!(i !== s && a !== o || i === 0 && sa(r, t, e) || s === 0 && sa(r, n, e) || a === 0 && sa(t, r, n) || o === 0 && sa(t, e, n));
}
function sa(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function ra(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function Gv(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && Sd(t, t.next, r, e)) return true;
    t = t.next;
  } while (t !== r);
  return false;
}
function sr(r, e) {
  return ot(r.prev, r, r.next) < 0 ? ot(r, e, r.next) >= 0 && ot(r, r.prev, e) >= 0 : ot(r, e, r.prev) < 0 || ot(r, r.next, e) < 0;
}
function Vv(r, e) {
  let t = r, n = false;
  const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function wd(r, e) {
  const t = new yl(r.i, r.x, r.y), n = new yl(e.i, e.x, e.y), i = r.next, s = e.prev;
  return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function vh(r, e, t, n) {
  const i = new yl(r, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function rr(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function yl(r, e, t) {
  this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
}
function Wv(r, e, t, n) {
  let i = 0;
  for (let s = e, a = t - n; s < t; s += n) i += (r[a] - r[s]) * (r[s + 1] + r[a + 1]), a = s;
  return i;
}
class gn {
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++) n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return gn.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], s = [];
    yh(e), _h(n, e);
    let a = e.length;
    t.forEach(yh);
    for (let l = 0; l < t.length; l++) i.push(a), a += t[l].length, _h(n, t[l]);
    const o = Rv.triangulate(n, i);
    for (let l = 0; l < o.length; l += 3) s.push(o.slice(l, l + 3));
    return s;
  }
}
function yh(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function _h(r, e) {
  for (let t = 0; t < e.length; t++) r.push(e[t].x), r.push(e[t].y);
}
class mr extends Ne {
  constructor(e = new Ri([new W(0.5, 0.5), new W(-0.5, 0.5), new W(-0.5, -0.5), new W(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: e, options: t }, e = Array.isArray(e) ? e : [e];
    const n = this, i = [], s = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o];
      a(c);
    }
    this.setAttribute("position", new xe(i, 3)), this.setAttribute("uv", new xe(s, 2)), this.computeVertexNormals();
    function a(o) {
      const l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1, u = t.depth !== void 0 ? t.depth : 1;
      let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : true, f = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, m = t.bevelSize !== void 0 ? t.bevelSize : f - 0.1, g = t.bevelOffset !== void 0 ? t.bevelOffset : 0, x = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const p = t.extrudePath, _ = t.UVGenerator !== void 0 ? t.UVGenerator : Xv;
      let v, M = false, w, S, y, R;
      p && (v = p.getSpacedPoints(h), M = true, d = false, w = p.computeFrenetFrames(h, false), S = new A(), y = new A(), R = new A()), d || (x = 0, f = 0, m = 0, g = 0);
      const b = o.extractPoints(c);
      let T = b.shape;
      const N = b.holes;
      if (!gn.isClockWise(T)) {
        T = T.reverse();
        for (let ne = 0, j = N.length; ne < j; ne++) {
          const te = N[ne];
          gn.isClockWise(te) && (N[ne] = te.reverse());
        }
      }
      const D = gn.triangulateShape(T, N), O = T;
      for (let ne = 0, j = N.length; ne < j; ne++) {
        const te = N[ne];
        T = T.concat(te);
      }
      function k(ne, j, te) {
        return j || console.error("THREE.ExtrudeGeometry: vec does not exist"), ne.clone().addScaledVector(j, te);
      }
      const Y = T.length, J = D.length;
      function K(ne, j, te) {
        let ve, he, Pe;
        const Le = ne.x - j.x, Ae = ne.y - j.y, Be = te.x - ne.x, Je = te.y - ne.y, P = Le * Le + Ae * Ae, E = Le * Je - Ae * Be;
        if (Math.abs(E) > Number.EPSILON) {
          const G = Math.sqrt(P), se = Math.sqrt(Be * Be + Je * Je), re = j.x - Ae / G, pe = j.y + Le / G, L = te.x - Je / se, Q = te.y + Be / se, H = ((L - re) * Je - (Q - pe) * Be) / (Le * Je - Ae * Be);
          ve = re + Le * H - ne.x, he = pe + Ae * H - ne.y;
          const me = ve * ve + he * he;
          if (me <= 2) return new W(ve, he);
          Pe = Math.sqrt(me / 2);
        } else {
          let G = false;
          Le > Number.EPSILON ? Be > Number.EPSILON && (G = true) : Le < -Number.EPSILON ? Be < -Number.EPSILON && (G = true) : Math.sign(Ae) === Math.sign(Je) && (G = true), G ? (ve = -Ae, he = Le, Pe = Math.sqrt(P)) : (ve = Le, he = Ae, Pe = Math.sqrt(P / 2));
        }
        return new W(ve / Pe, he / Pe);
      }
      const ie = [];
      for (let ne = 0, j = O.length, te = j - 1, ve = ne + 1; ne < j; ne++, te++, ve++) te === j && (te = 0), ve === j && (ve = 0), ie[ne] = K(O[ne], O[te], O[ve]);
      const ee = [];
      let be, oe = ie.concat();
      for (let ne = 0, j = N.length; ne < j; ne++) {
        const te = N[ne];
        be = [];
        for (let ve = 0, he = te.length, Pe = he - 1, Le = ve + 1; ve < he; ve++, Pe++, Le++) Pe === he && (Pe = 0), Le === he && (Le = 0), be[ve] = K(te[ve], te[Pe], te[Le]);
        ee.push(be), oe = oe.concat(be);
      }
      for (let ne = 0; ne < x; ne++) {
        const j = ne / x, te = f * Math.cos(j * Math.PI / 2), ve = m * Math.sin(j * Math.PI / 2) + g;
        for (let he = 0, Pe = O.length; he < Pe; he++) {
          const Le = k(O[he], ie[he], ve);
          I(Le.x, Le.y, -te);
        }
        for (let he = 0, Pe = N.length; he < Pe; he++) {
          const Le = N[he];
          be = ee[he];
          for (let Ae = 0, Be = Le.length; Ae < Be; Ae++) {
            const Je = k(Le[Ae], be[Ae], ve);
            I(Je.x, Je.y, -te);
          }
        }
      }
      const V = m + g;
      for (let ne = 0; ne < Y; ne++) {
        const j = d ? k(T[ne], oe[ne], V) : T[ne];
        M ? (y.copy(w.normals[0]).multiplyScalar(j.x), S.copy(w.binormals[0]).multiplyScalar(j.y), R.copy(v[0]).add(y).add(S), I(R.x, R.y, R.z)) : I(j.x, j.y, 0);
      }
      for (let ne = 1; ne <= h; ne++) for (let j = 0; j < Y; j++) {
        const te = d ? k(T[j], oe[j], V) : T[j];
        M ? (y.copy(w.normals[ne]).multiplyScalar(te.x), S.copy(w.binormals[ne]).multiplyScalar(te.y), R.copy(v[ne]).add(y).add(S), I(R.x, R.y, R.z)) : I(te.x, te.y, u / h * ne);
      }
      for (let ne = x - 1; ne >= 0; ne--) {
        const j = ne / x, te = f * Math.cos(j * Math.PI / 2), ve = m * Math.sin(j * Math.PI / 2) + g;
        for (let he = 0, Pe = O.length; he < Pe; he++) {
          const Le = k(O[he], ie[he], ve);
          I(Le.x, Le.y, u + te);
        }
        for (let he = 0, Pe = N.length; he < Pe; he++) {
          const Le = N[he];
          be = ee[he];
          for (let Ae = 0, Be = Le.length; Ae < Be; Ae++) {
            const Je = k(Le[Ae], be[Ae], ve);
            M ? I(Je.x, Je.y + v[h - 1].y, v[h - 1].x + te) : I(Je.x, Je.y, u + te);
          }
        }
      }
      $(), ce();
      function $() {
        const ne = i.length / 3;
        if (d) {
          let j = 0, te = Y * j;
          for (let ve = 0; ve < J; ve++) {
            const he = D[ve];
            Re(he[2] + te, he[1] + te, he[0] + te);
          }
          j = h + x * 2, te = Y * j;
          for (let ve = 0; ve < J; ve++) {
            const he = D[ve];
            Re(he[0] + te, he[1] + te, he[2] + te);
          }
        } else {
          for (let j = 0; j < J; j++) {
            const te = D[j];
            Re(te[2], te[1], te[0]);
          }
          for (let j = 0; j < J; j++) {
            const te = D[j];
            Re(te[0] + Y * h, te[1] + Y * h, te[2] + Y * h);
          }
        }
        n.addGroup(ne, i.length / 3 - ne, 0);
      }
      function ce() {
        const ne = i.length / 3;
        let j = 0;
        fe(O, j), j += O.length;
        for (let te = 0, ve = N.length; te < ve; te++) {
          const he = N[te];
          fe(he, j), j += he.length;
        }
        n.addGroup(ne, i.length / 3 - ne, 1);
      }
      function fe(ne, j) {
        let te = ne.length;
        for (; --te >= 0; ) {
          const ve = te;
          let he = te - 1;
          he < 0 && (he = ne.length - 1);
          for (let Pe = 0, Le = h + x * 2; Pe < Le; Pe++) {
            const Ae = Y * Pe, Be = Y * (Pe + 1), Je = j + ve + Ae, P = j + he + Ae, E = j + he + Be, G = j + ve + Be;
            Ie(Je, P, E, G);
          }
        }
      }
      function I(ne, j, te) {
        l.push(ne), l.push(j), l.push(te);
      }
      function Re(ne, j, te) {
        le(ne), le(j), le(te);
        const ve = i.length / 3, he = _.generateTopUV(n, i, ve - 3, ve - 2, ve - 1);
        Se(he[0]), Se(he[1]), Se(he[2]);
      }
      function Ie(ne, j, te, ve) {
        le(ne), le(j), le(ve), le(j), le(te), le(ve);
        const he = i.length / 3, Pe = _.generateSideWallUV(n, i, he - 6, he - 3, he - 2, he - 1);
        Se(Pe[0]), Se(Pe[1]), Se(Pe[3]), Se(Pe[1]), Se(Pe[2]), Se(Pe[3]);
      }
      function le(ne) {
        i.push(l[ne * 3 + 0]), i.push(l[ne * 3 + 1]), i.push(l[ne * 3 + 2]);
      }
      function Se(ne) {
        s.push(ne.x), s.push(ne.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
    return qv(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let s = 0, a = e.shapes.length; s < a; s++) {
      const o = t[e.shapes[s]];
      n.push(o);
    }
    const i = e.options.extrudePath;
    return i !== void 0 && (e.options.extrudePath = new Zl[i.type]().fromJSON(i)), new mr(n, e.options);
  }
}
const Xv = { generateTopUV: function(r, e, t, n, i) {
  const s = e[t * 3], a = e[t * 3 + 1], o = e[n * 3], l = e[n * 3 + 1], c = e[i * 3], h = e[i * 3 + 1];
  return [new W(s, a), new W(o, l), new W(c, h)];
}, generateSideWallUV: function(r, e, t, n, i, s) {
  const a = e[t * 3], o = e[t * 3 + 1], l = e[t * 3 + 2], c = e[n * 3], h = e[n * 3 + 1], u = e[n * 3 + 2], d = e[i * 3], f = e[i * 3 + 1], m = e[i * 3 + 2], g = e[s * 3], x = e[s * 3 + 1], p = e[s * 3 + 2];
  return Math.abs(o - h) < Math.abs(a - c) ? [new W(a, 1 - l), new W(c, 1 - u), new W(d, 1 - m), new W(g, 1 - p)] : [new W(o, 1 - l), new W(h, 1 - u), new W(f, 1 - m), new W(x, 1 - p)];
} };
function qv(r, e, t) {
  if (t.shapes = [], Array.isArray(r)) for (let n = 0, i = r.length; n < i; n++) {
    const s = r[n];
    t.shapes.push(s.uuid);
  }
  else t.shapes.push(r.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class xr extends On {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], s = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
    super(i, s, e, t), this.type = "IcosahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new xr(e.radius, e.detail);
  }
}
class ws extends On {
  constructor(e = 1, t = 0) {
    const n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], i = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
    super(n, i, e, t), this.type = "OctahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new ws(e.radius, e.detail);
  }
}
class gr extends Ne {
  constructor(e = 0.5, t = 1, n = 32, i = 1, s = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = { innerRadius: e, outerRadius: t, thetaSegments: n, phiSegments: i, thetaStart: s, thetaLength: a }, n = Math.max(3, n), i = Math.max(1, i);
    const o = [], l = [], c = [], h = [];
    let u = e;
    const d = (t - e) / i, f = new A(), m = new W();
    for (let g = 0; g <= i; g++) {
      for (let x = 0; x <= n; x++) {
        const p = s + x / n * a;
        f.x = u * Math.cos(p), f.y = u * Math.sin(p), l.push(f.x, f.y, f.z), c.push(0, 0, 1), m.x = (f.x / t + 1) / 2, m.y = (f.y / t + 1) / 2, h.push(m.x, m.y);
      }
      u += d;
    }
    for (let g = 0; g < i; g++) {
      const x = g * (n + 1);
      for (let p = 0; p < n; p++) {
        const _ = p + x, v = _, M = _ + n + 1, w = _ + n + 2, S = _ + 1;
        o.push(v, M, S), o.push(M, w, S);
      }
    }
    this.setIndex(o), this.setAttribute("position", new xe(l, 3)), this.setAttribute("normal", new xe(c, 3)), this.setAttribute("uv", new xe(h, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new gr(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
  }
}
class vr extends Ne {
  constructor(e = new Ri([new W(0, 0.5), new W(-0.5, -0.5), new W(0.5, -0.5)]), t = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = { shapes: e, curveSegments: t };
    const n = [], i = [], s = [], a = [];
    let o = 0, l = 0;
    if (Array.isArray(e) === false) c(e);
    else for (let h = 0; h < e.length; h++) c(e[h]), this.addGroup(o, l, h), o += l, l = 0;
    this.setIndex(n), this.setAttribute("position", new xe(i, 3)), this.setAttribute("normal", new xe(s, 3)), this.setAttribute("uv", new xe(a, 2));
    function c(h) {
      const u = i.length / 3, d = h.extractPoints(t);
      let f = d.shape;
      const m = d.holes;
      gn.isClockWise(f) === false && (f = f.reverse());
      for (let x = 0, p = m.length; x < p; x++) {
        const _ = m[x];
        gn.isClockWise(_) === true && (m[x] = _.reverse());
      }
      const g = gn.triangulateShape(f, m);
      for (let x = 0, p = m.length; x < p; x++) {
        const _ = m[x];
        f = f.concat(_);
      }
      for (let x = 0, p = f.length; x < p; x++) {
        const _ = f[x];
        i.push(_.x, _.y, 0), s.push(0, 0, 1), a.push(_.x, _.y);
      }
      for (let x = 0, p = g.length; x < p; x++) {
        const _ = g[x], v = _[0] + u, M = _[1] + u, w = _[2] + u;
        n.push(v, M, w), l += 3;
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes;
    return Yv(t, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let i = 0, s = e.shapes.length; i < s; i++) {
      const a = t[e.shapes[i]];
      n.push(a);
    }
    return new vr(n, e.curveSegments);
  }
}
function Yv(r, e) {
  if (e.shapes = [], Array.isArray(r)) for (let t = 0, n = r.length; t < n; t++) {
    const i = r[t];
    e.shapes.push(i.uuid);
  }
  else e.shapes.push(r.uuid);
  return e;
}
class Ts extends Ne {
  constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: i, phiLength: s, thetaStart: a, thetaLength: o }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const h = [], u = new A(), d = new A(), f = [], m = [], g = [], x = [];
    for (let p = 0; p <= n; p++) {
      const _ = [], v = p / n;
      let M = 0;
      p === 0 && a === 0 ? M = 0.5 / t : p === n && l === Math.PI && (M = -0.5 / t);
      for (let w = 0; w <= t; w++) {
        const S = w / t;
        u.x = -e * Math.cos(i + S * s) * Math.sin(a + v * o), u.y = e * Math.cos(a + v * o), u.z = e * Math.sin(i + S * s) * Math.sin(a + v * o), m.push(u.x, u.y, u.z), d.copy(u).normalize(), g.push(d.x, d.y, d.z), x.push(S + M, 1 - v), _.push(c++);
      }
      h.push(_);
    }
    for (let p = 0; p < n; p++) for (let _ = 0; _ < t; _++) {
      const v = h[p][_ + 1], M = h[p][_], w = h[p + 1][_], S = h[p + 1][_ + 1];
      (p !== 0 || a > 0) && f.push(v, M, S), (p !== n - 1 || l < Math.PI) && f.push(M, w, S);
    }
    this.setIndex(f), this.setAttribute("position", new xe(m, 3)), this.setAttribute("normal", new xe(g, 3)), this.setAttribute("uv", new xe(x, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ts(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class yr extends On {
  constructor(e = 1, t = 0) {
    const n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], i = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
    super(n, i, e, t), this.type = "TetrahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new yr(e.radius, e.detail);
  }
}
class _r extends Ne {
  constructor(e = 1, t = 0.4, n = 12, i = 48, s = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: n, tubularSegments: i, arc: s }, n = Math.floor(n), i = Math.floor(i);
    const a = [], o = [], l = [], c = [], h = new A(), u = new A(), d = new A();
    for (let f = 0; f <= n; f++) for (let m = 0; m <= i; m++) {
      const g = m / i * s, x = f / n * Math.PI * 2;
      u.x = (e + t * Math.cos(x)) * Math.cos(g), u.y = (e + t * Math.cos(x)) * Math.sin(g), u.z = t * Math.sin(x), o.push(u.x, u.y, u.z), h.x = e * Math.cos(g), h.y = e * Math.sin(g), d.subVectors(u, h).normalize(), l.push(d.x, d.y, d.z), c.push(m / i), c.push(f / n);
    }
    for (let f = 1; f <= n; f++) for (let m = 1; m <= i; m++) {
      const g = (i + 1) * f + m - 1, x = (i + 1) * (f - 1) + m - 1, p = (i + 1) * (f - 1) + m, _ = (i + 1) * f + m;
      a.push(g, x, _), a.push(x, p, _);
    }
    this.setIndex(a), this.setAttribute("position", new xe(o, 3)), this.setAttribute("normal", new xe(l, 3)), this.setAttribute("uv", new xe(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new _r(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class Mr extends Ne {
  constructor(e = 1, t = 0.4, n = 64, i = 8, s = 2, a = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = { radius: e, tube: t, tubularSegments: n, radialSegments: i, p: s, q: a }, n = Math.floor(n), i = Math.floor(i);
    const o = [], l = [], c = [], h = [], u = new A(), d = new A(), f = new A(), m = new A(), g = new A(), x = new A(), p = new A();
    for (let v = 0; v <= n; ++v) {
      const M = v / n * s * Math.PI * 2;
      _(M, s, a, e, f), _(M + 0.01, s, a, e, m), x.subVectors(m, f), p.addVectors(m, f), g.crossVectors(x, p), p.crossVectors(g, x), g.normalize(), p.normalize();
      for (let w = 0; w <= i; ++w) {
        const S = w / i * Math.PI * 2, y = -t * Math.cos(S), R = t * Math.sin(S);
        u.x = f.x + (y * p.x + R * g.x), u.y = f.y + (y * p.y + R * g.y), u.z = f.z + (y * p.z + R * g.z), l.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), c.push(d.x, d.y, d.z), h.push(v / n), h.push(w / i);
      }
    }
    for (let v = 1; v <= n; v++) for (let M = 1; M <= i; M++) {
      const w = (i + 1) * (v - 1) + (M - 1), S = (i + 1) * v + (M - 1), y = (i + 1) * v + M, R = (i + 1) * (v - 1) + M;
      o.push(w, S, R), o.push(S, y, R);
    }
    this.setIndex(o), this.setAttribute("position", new xe(l, 3)), this.setAttribute("normal", new xe(c, 3)), this.setAttribute("uv", new xe(h, 2));
    function _(v, M, w, S, y) {
      const R = Math.cos(v), b = Math.sin(v), T = w / M * v, N = Math.cos(T);
      y.x = S * (2 + N) * 0.5 * R, y.y = S * (2 + N) * b * 0.5, y.z = S * Math.sin(T) * 0.5;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Mr(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q);
  }
}
class br extends Ne {
  constructor(e = new Yl(new A(-1, -1, 0), new A(-1, 1, 0), new A(1, 1, 0)), t = 64, n = 1, i = 8, s = false) {
    super(), this.type = "TubeGeometry", this.parameters = { path: e, tubularSegments: t, radius: n, radialSegments: i, closed: s };
    const a = e.computeFrenetFrames(t, s);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    const o = new A(), l = new A(), c = new W();
    let h = new A();
    const u = [], d = [], f = [], m = [];
    g(), this.setIndex(m), this.setAttribute("position", new xe(u, 3)), this.setAttribute("normal", new xe(d, 3)), this.setAttribute("uv", new xe(f, 2));
    function g() {
      for (let v = 0; v < t; v++) x(v);
      x(s === false ? t : 0), _(), p();
    }
    function x(v) {
      h = e.getPointAt(v / t, h);
      const M = a.normals[v], w = a.binormals[v];
      for (let S = 0; S <= i; S++) {
        const y = S / i * Math.PI * 2, R = Math.sin(y), b = -Math.cos(y);
        l.x = b * M.x + R * w.x, l.y = b * M.y + R * w.y, l.z = b * M.z + R * w.z, l.normalize(), d.push(l.x, l.y, l.z), o.x = h.x + n * l.x, o.y = h.y + n * l.y, o.z = h.z + n * l.z, u.push(o.x, o.y, o.z);
      }
    }
    function p() {
      for (let v = 1; v <= t; v++) for (let M = 1; M <= i; M++) {
        const w = (i + 1) * (v - 1) + (M - 1), S = (i + 1) * v + (M - 1), y = (i + 1) * v + M, R = (i + 1) * (v - 1) + M;
        m.push(w, S, R), m.push(S, y, R);
      }
    }
    function _() {
      for (let v = 0; v <= t; v++) for (let M = 0; M <= i; M++) c.x = v / t, c.y = M / i, f.push(c.x, c.y);
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.path = this.parameters.path.toJSON(), e;
  }
  static fromJSON(e) {
    return new br(new Zl[e.path.type]().fromJSON(e.path), e.tubularSegments, e.radius, e.radialSegments, e.closed);
  }
}
class Td extends Ne {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: e }, e !== null) {
      const t = [], n = /* @__PURE__ */ new Set(), i = new A(), s = new A();
      if (e.index !== null) {
        const a = e.attributes.position, o = e.index;
        let l = e.groups;
        l.length === 0 && (l = [{ start: 0, count: o.count, materialIndex: 0 }]);
        for (let c = 0, h = l.length; c < h; ++c) {
          const u = l[c], d = u.start, f = u.count;
          for (let m = d, g = d + f; m < g; m += 3) for (let x = 0; x < 3; x++) {
            const p = o.getX(m + x), _ = o.getX(m + (x + 1) % 3);
            i.fromBufferAttribute(a, p), s.fromBufferAttribute(a, _), Mh(i, s, n) === true && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
          }
        }
      } else {
        const a = e.attributes.position;
        for (let o = 0, l = a.count / 3; o < l; o++) for (let c = 0; c < 3; c++) {
          const h = 3 * o + c, u = 3 * o + (c + 1) % 3;
          i.fromBufferAttribute(a, h), s.fromBufferAttribute(a, u), Mh(i, s, n) === true && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
        }
      }
      this.setAttribute("position", new xe(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function Mh(r, e, t) {
  const n = `${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`, i = `${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;
  return t.has(n) === true || t.has(i) === true ? false : (t.add(n), t.add(i), true);
}
var bh = Object.freeze({ __proto__: null, BoxGeometry: ii, CapsuleGeometry: ur, CircleGeometry: dr, ConeGeometry: fr, CylinderGeometry: Fi, DodecahedronGeometry: pr, EdgesGeometry: Md, ExtrudeGeometry: mr, IcosahedronGeometry: xr, LatheGeometry: Ss, OctahedronGeometry: ws, PlaneGeometry: _s, PolyhedronGeometry: On, RingGeometry: gr, ShapeGeometry: vr, SphereGeometry: Ts, TetrahedronGeometry: yr, TorusGeometry: _r, TorusKnotGeometry: Mr, TubeGeometry: br, WireframeGeometry: Td });
class Ed extends Pt {
  constructor(e) {
    super(), this.isShadowMaterial = true, this.type = "ShadowMaterial", this.color = new ue(0), this.transparent = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
class Ad extends _t {
  constructor(e) {
    super(e), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
  }
}
class Kl extends Pt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new ue(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ni, this.normalScale = new W(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Rd extends Kl {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new W(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return ht(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(t) {
      this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new ue(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new ue(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ue(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class qs extends Pt {
  constructor(e) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new ue(16777215), this.specular = new ue(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ni, this.normalScale = new W(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = or, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Cd extends Pt {
  constructor(e) {
    super(), this.isMeshToonMaterial = true, this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new ue(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ni, this.normalScale = new W(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
class Pd extends Pt {
  constructor(e) {
    super(), this.isMeshNormalMaterial = true, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ni, this.normalScale = new W(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.flatShading = false, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class Jl extends Pt {
  constructor(e) {
    super(), this.isMeshLambertMaterial = true, this.type = "MeshLambertMaterial", this.color = new ue(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ni, this.normalScale = new W(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = or, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Ld extends Pt {
  constructor(e) {
    super(), this.isMeshMatcapMaterial = true, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new ue(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ni, this.normalScale = new W(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Id extends Lt {
  constructor(e) {
    super(), this.isLineDashedMaterial = true, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
  }
}
function Jt(r, e, t) {
  return Ql(r) ? new r.constructor(r.subarray(e, t !== void 0 ? t : r.length)) : r.slice(e, t);
}
function wi(r, e, t) {
  return !r || !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function Ql(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function Dd(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function _l(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let l = 0; l !== e; ++l) i[a++] = r[o + l];
  }
  return i;
}
function $l(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; ) s = r[i++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0) if (Array.isArray(a)) do
    a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = r[i++];
  while (s !== void 0);
  else if (a.toArray !== void 0) do
    a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++];
  while (s !== void 0);
  else do
    a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++];
  while (s !== void 0);
}
function jv(r, e, t, n, i = 30) {
  const s = r.clone();
  s.name = e;
  const a = [];
  for (let l = 0; l < s.tracks.length; ++l) {
    const c = s.tracks[l], h = c.getValueSize(), u = [], d = [];
    for (let f = 0; f < c.times.length; ++f) {
      const m = c.times[f] * i;
      if (!(m < t || m >= n)) {
        u.push(c.times[f]);
        for (let g = 0; g < h; ++g) d.push(c.values[f * h + g]);
      }
    }
    u.length !== 0 && (c.times = wi(u, c.times.constructor), c.values = wi(d, c.values.constructor), a.push(c));
  }
  s.tracks = a;
  let o = 1 / 0;
  for (let l = 0; l < s.tracks.length; ++l) o > s.tracks[l].times[0] && (o = s.tracks[l].times[0]);
  for (let l = 0; l < s.tracks.length; ++l) s.tracks[l].shift(-1 * o);
  return s.resetDuration(), s;
}
function Zv(r, e = 0, t = r, n = 30) {
  n <= 0 && (n = 30);
  const i = t.tracks.length, s = e / n;
  for (let a = 0; a < i; ++a) {
    const o = t.tracks[a], l = o.ValueTypeName;
    if (l === "bool" || l === "string") continue;
    const c = r.tracks.find(function(p) {
      return p.name === o.name && p.ValueTypeName === l;
    });
    if (c === void 0) continue;
    let h = 0;
    const u = o.getValueSize();
    o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = u / 3);
    let d = 0;
    const f = c.getValueSize();
    c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = f / 3);
    const m = o.times.length - 1;
    let g;
    if (s <= o.times[0]) {
      const p = h, _ = u - h;
      g = Jt(o.values, p, _);
    } else if (s >= o.times[m]) {
      const p = m * u + h, _ = p + u - h;
      g = Jt(o.values, p, _);
    } else {
      const p = o.createInterpolant(), _ = h, v = u - h;
      p.evaluate(s), g = Jt(p.resultBuffer, _, v);
    }
    l === "quaternion" && new mt().fromArray(g).normalize().conjugate().toArray(g);
    const x = c.times.length;
    for (let p = 0; p < x; ++p) {
      const _ = p * f + d;
      if (l === "quaternion") mt.multiplyQuaternionsFlat(c.values, _, g, 0, c.values, _);
      else {
        const v = f - d * 2;
        for (let M = 0; M < v; ++M) c.values[_ + M] -= g[M];
      }
    }
  }
  return r.blendMode = Pl, r;
}
const Kv = { arraySlice: Jt, convertArray: wi, isTypedArray: Ql, getKeyframeOrder: Dd, sortedArray: _l, flattenJSON: $l, subclip: jv, makeClipAdditive: Zv };
class Sr {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = i, i = t[++n], e < i) break t;
            }
            a = t.length;
            break n;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let l = n - 2; ; ) {
              if (s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = s, s = t[--n - 1], e >= s) break t;
            }
            a = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[s + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Ud extends Sr {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Mi, endingEnd: Mi };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, a = e + 1, o = i[s], l = i[a];
    if (o === void 0) switch (this.getSettings_().endingStart) {
      case bi:
        s = e, o = 2 * t - n;
        break;
      case Qs:
        s = i.length - 2, o = t + i[s] - i[s + 1];
        break;
      default:
        s = e, o = n;
    }
    if (l === void 0) switch (this.getSettings_().endingEnd) {
      case bi:
        a = e, l = 2 * n - t;
        break;
      case Qs:
        a = 1, l = n + i[1] - i[0];
        break;
      default:
        a = e - 1, l = t;
    }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, m = (n - t) / (i - t), g = m * m, x = g * m, p = -d * x + 2 * d * g - d * m, _ = (1 + d) * x + (-1.5 - 2 * d) * g + (-0.5 + d) * m + 1, v = (-1 - f) * x + (1.5 + f) * g + 0.5 * m, M = f * x - f * g;
    for (let w = 0; w !== o; ++w) s[w] = p * a[h + w] + _ * a[c + w] + v * a[l + w] + M * a[u + w];
    return s;
  }
}
class ec extends Sr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== o; ++d) s[d] = a[c + d] * u + a[l + d] * h;
    return s;
  }
}
class Fd extends Sr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class dn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = wi(t, this.TimeBufferType), this.values = wi(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = { name: e.name, times: wi(e.times, Array), values: wi(e.values, Array) };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Fd(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new ec(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Ud(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Ks:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Js:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ma:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Ks;
      case this.InterpolantFactoryMethodLinear:
        return Js;
      case this.InterpolantFactoryMethodSmooth:
        return Ma;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, a = i - 1;
    for (; s !== i && n[s] < e; ) ++s;
    for (; a !== -1 && n[a] > t; ) --a;
    if (++a, s !== 0 || a !== i) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = Jt(n, s, a), this.values = Jt(this.values, s * o, a * o);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = false;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = false;
        break;
      }
      a = l;
    }
    if (i !== void 0 && Ql(i)) for (let o = 0, l = i.length; o !== l; ++o) {
      const c = i[o];
      if (isNaN(c)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = false;
        break;
      }
    }
    return e;
  }
  optimize() {
    const e = Jt(this.times), t = Jt(this.values), n = this.getValueSize(), i = this.getInterpolation() === Ma, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let l = false;
      const c = e[o], h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0])) if (i) l = true;
      else {
        const u = o * n, d = u - n, f = u + n;
        for (let m = 0; m !== n; ++m) {
          const g = t[u + m];
          if (g !== t[d + m] || g !== t[f + m]) {
            l = true;
            break;
          }
        }
      }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n, d = a * n;
          for (let f = 0; f !== n; ++f) t[d + f] = t[u + f];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, l = a * n, c = 0; c !== n; ++c) t[l + c] = t[o + c];
      ++a;
    }
    return a !== e.length ? (this.times = Jt(e, 0, a), this.values = Jt(t, 0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = Jt(this.times, 0), t = Jt(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
dn.prototype.TimeBufferType = Float32Array;
dn.prototype.ValueBufferType = Float32Array;
dn.prototype.DefaultInterpolation = Js;
class Oi extends dn {
}
Oi.prototype.ValueTypeName = "bool";
Oi.prototype.ValueBufferType = Array;
Oi.prototype.DefaultInterpolation = Ks;
Oi.prototype.InterpolantFactoryMethodLinear = void 0;
Oi.prototype.InterpolantFactoryMethodSmooth = void 0;
class tc extends dn {
}
tc.prototype.ValueTypeName = "color";
class gs extends dn {
}
gs.prototype.ValueTypeName = "number";
class Od extends Sr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4) mt.slerpFlat(s, 0, a, c - o, a, c, l);
    return s;
  }
}
class si extends dn {
  InterpolantFactoryMethodLinear(e) {
    return new Od(this.times, this.values, this.getValueSize(), e);
  }
}
si.prototype.ValueTypeName = "quaternion";
si.prototype.DefaultInterpolation = Js;
si.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ni extends dn {
}
Ni.prototype.ValueTypeName = "string";
Ni.prototype.ValueBufferType = Array;
Ni.prototype.DefaultInterpolation = Ks;
Ni.prototype.InterpolantFactoryMethodLinear = void 0;
Ni.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ii extends dn {
}
Ii.prototype.ValueTypeName = "vector";
class Di {
  constructor(e, t = -1, n, i = Ua) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Yt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(Qv(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode };
    for (let s = 0, a = n.length; s !== a; ++s) t.push(dn.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, a = [];
    for (let o = 0; o < s; o++) {
      let l = [], c = [];
      l.push((o + s - 1) % s, o, (o + 1) % s), c.push(0, 1, 0);
      const h = Dd(l);
      l = _l(l, 1, h), c = _l(c, 1, h), !i && l[0] === 0 && (l.push(s), c.push(c[0])), a.push(new gs(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(1 / n));
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = c.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(c);
      }
    }
    const a = [];
    for (const o in i) a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, f, m, g) {
      if (f.length !== 0) {
        const x = [], p = [];
        $l(f, x, p, m), x.length !== 0 && g.push(new u(d, x, p));
      }
    }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0)) if (d[0].morphTargets) {
        const f = {};
        let m;
        for (m = 0; m < d.length; m++) if (d[m].morphTargets) for (let g = 0; g < d[m].morphTargets.length; g++) f[d[m].morphTargets[g]] = -1;
        for (const g in f) {
          const x = [], p = [];
          for (let _ = 0; _ !== d[m].morphTargets.length; ++_) {
            const v = d[m];
            x.push(v.time), p.push(v.morphTarget === g ? 1 : 0);
          }
          i.push(new gs(".morphTargetInfluence[" + g + "]", x, p));
        }
        l = f.length * a;
      } else {
        const f = ".bones[" + t[u].name + "]";
        n(Ii, f + ".position", d, "pos", i), n(si, f + ".quaternion", d, "rot", i), n(Ii, f + ".scale", d, "scl", i);
      }
    }
    return i.length === 0 ? null : new this(s, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = true;
    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Jv(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return gs;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ii;
    case "color":
      return tc;
    case "quaternion":
      return si;
    case "bool":
    case "boolean":
      return Oi;
    case "string":
      return Ni;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Qv(r) {
  if (r.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Jv(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    $l(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const Ui = { enabled: false, files: {}, add: function(r, e) {
  this.enabled !== false && (this.files[r] = e);
}, get: function(r) {
  if (this.enabled !== false) return this.files[r];
}, remove: function(r) {
  delete this.files[r];
}, clear: function() {
  this.files = {};
} };
class nc {
  constructor(e, t, n) {
    const i = this;
    let s = false, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === false && i.onStart !== void 0 && i.onStart(h, a, o), s = true;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = false, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        const f = c[u], m = c[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h)) return m;
      }
      return null;
    };
  }
}
const Nd = new nc();
class kt {
  constructor(e) {
    this.manager = e !== void 0 ? e : Nd, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
const Rn = {};
class $v extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class vn extends kt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = Ui.get(e);
    if (s !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(s), this.manager.itemEnd(e);
    }, 0), s;
    if (Rn[e] !== void 0) {
      Rn[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    Rn[e] = [], Rn[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const h = Rn[e], u = c.body.getReader(), d = c.headers.get("Content-Length") || c.headers.get("X-File-Size"), f = d ? parseInt(d) : 0, m = f !== 0;
        let g = 0;
        const x = new ReadableStream({ start(p) {
          _();
          function _() {
            u.read().then(({ done: v, value: M }) => {
              if (v) p.close();
              else {
                g += M.byteLength;
                const w = new ProgressEvent("progress", { lengthComputable: m, loaded: g, total: f });
                for (let S = 0, y = h.length; S < y; S++) {
                  const R = h[S];
                  R.onProgress && R.onProgress(w);
                }
                p.enqueue(M), _();
              }
            });
          }
        } });
        return new Response(x);
      } else throw new $v(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return c.json();
        default:
          if (o === void 0) return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d);
            return c.arrayBuffer().then((m) => f.decode(m));
          }
      }
    }).then((c) => {
      Ui.add(e, c);
      const h = Rn[e];
      delete Rn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(c);
      }
    }).catch((c) => {
      const h = Rn[e];
      if (h === void 0) throw this.manager.itemError(e), c;
      delete Rn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onError && f.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class ey extends kt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new vn(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(o) {
      try {
        t(s.parse(JSON.parse(o)));
      } catch (l) {
        i ? i(l) : console.error(l), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const i = Di.parse(e[n]);
      t.push(i);
    }
    return t;
  }
}
class ty extends kt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = [], o = new Vl(), l = new vn(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(s.withCredentials);
    let c = 0;
    function h(u) {
      l.load(e[u], function(d) {
        const f = s.parse(d, true);
        a[u] = { width: f.width, height: f.height, format: f.format, mipmaps: f.mipmaps }, c += 1, c === 6 && (f.mipmapCount === 1 && (o.minFilter = ct), o.image = a, o.format = f.format, o.needsUpdate = true, t && t(o));
      }, n, i);
    }
    if (Array.isArray(e)) for (let u = 0, d = e.length; u < d; ++u) h(u);
    else l.load(e, function(u) {
      const d = s.parse(u, true);
      if (d.isCubemap) {
        const f = d.mipmaps.length / d.mipmapCount;
        for (let m = 0; m < f; m++) {
          a[m] = { mipmaps: [] };
          for (let g = 0; g < d.mipmapCount; g++) a[m].mipmaps.push(d.mipmaps[m * d.mipmapCount + g]), a[m].format = d.format, a[m].width = d.width, a[m].height = d.height;
        }
        o.image = a;
      } else o.image.width = d.width, o.image.height = d.height, o.mipmaps = d.mipmaps;
      d.mipmapCount === 1 && (o.minFilter = ct), o.format = d.format, o.needsUpdate = true, t && t(o);
    }, n, i);
    return o;
  }
}
class ar extends kt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Ui.get(e);
    if (a !== void 0) return s.manager.itemStart(e), setTimeout(function() {
      t && t(a), s.manager.itemEnd(e);
    }, 0), a;
    const o = er("img");
    function l() {
      h(), Ui.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, false), o.removeEventListener("error", c, false);
    }
    return o.addEventListener("load", l, false), o.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class ny extends kt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new cr(), a = new ar(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    let o = 0;
    function l(c) {
      a.load(e[c], function(h) {
        s.images[c] = h, o++, o === 6 && (s.needsUpdate = true, t && t(s));
      }, void 0, i);
    }
    for (let c = 0; c < e.length; ++c) l(c);
    return s;
  }
}
class iy extends kt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new us(), o = new vn(this.manager);
    return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(s.withCredentials), o.load(e, function(l) {
      const c = s.parse(l);
      c && (c.image !== void 0 ? a.image = c.image : c.data !== void 0 && (a.image.width = c.width, a.image.height = c.height, a.image.data = c.data), a.wrapS = c.wrapS !== void 0 ? c.wrapS : Tt, a.wrapT = c.wrapT !== void 0 ? c.wrapT : Tt, a.magFilter = c.magFilter !== void 0 ? c.magFilter : ct, a.minFilter = c.minFilter !== void 0 ? c.minFilter : ct, a.anisotropy = c.anisotropy !== void 0 ? c.anisotropy : 1, c.colorSpace !== void 0 ? a.colorSpace = c.colorSpace : c.encoding !== void 0 && (a.encoding = c.encoding), c.flipY !== void 0 && (a.flipY = c.flipY), c.format !== void 0 && (a.format = c.format), c.type !== void 0 && (a.type = c.type), c.mipmaps !== void 0 && (a.mipmaps = c.mipmaps, a.minFilter = ei), c.mipmapCount === 1 && (a.minFilter = ct), c.generateMipmaps !== void 0 && (a.generateMipmaps = c.generateMipmaps), a.needsUpdate = true, t && t(a, c));
    }, n, i), a;
  }
}
class Bd extends kt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new rt(), a = new ar(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = true, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class ri extends Ke {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new ue(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class zd extends ri {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(Ke.DEFAULT_UP), this.updateMatrix(), this.groundColor = new ue(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const Co = new _e(), Sh = new A(), wh = new A();
class ic {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new W(512, 512), this.map = null, this.mapPass = null, this.matrix = new _e(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new za(), this._frameExtents = new W(1, 1), this._viewportCount = 1, this._viewports = [new $e(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Sh.setFromMatrixPosition(e.matrixWorld), t.position.copy(Sh), wh.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(wh), t.updateMatrixWorld(), Co.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Co), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(Co);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
class sy extends ic {
  constructor() {
    super(new yt(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = ps * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class sc extends ri {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(Ke.DEFAULT_UP), this.updateMatrix(), this.target = new Ke(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new sy();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const Th = new _e(), Ns = new A(), Po = new A();
class ry extends ic {
  constructor() {
    super(new yt(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new W(4, 2), this._viewportCount = 6, this._viewports = [new $e(2, 1, 1, 1), new $e(0, 1, 1, 1), new $e(3, 1, 1, 1), new $e(1, 1, 1, 1), new $e(3, 0, 1, 1), new $e(1, 0, 1, 1)], this._cubeDirections = [new A(1, 0, 0), new A(-1, 0, 0), new A(0, 0, 1), new A(0, 0, -1), new A(0, 1, 0), new A(0, -1, 0)], this._cubeUps = [new A(0, 1, 0), new A(0, 1, 0), new A(0, 1, 0), new A(0, 1, 0), new A(0, 0, 1), new A(0, 0, -1)];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Ns.setFromMatrixPosition(e.matrixWorld), n.position.copy(Ns), Po.copy(n.position), Po.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Po), n.updateMatrixWorld(), i.makeTranslation(-Ns.x, -Ns.y, -Ns.z), Th.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Th);
  }
}
class Ra extends ri {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new ry();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class ay extends ic {
  constructor() {
    super(new Ms(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class rc extends ri {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(Ke.DEFAULT_UP), this.updateMatrix(), this.target = new Ke(), this.shadow = new ay();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class ac extends ri {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class kd extends ri {
  constructor(e, t, n = 10, i = 10) {
    super(e, t), this.isRectAreaLight = true, this.type = "RectAreaLight", this.width = n, this.height = i;
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(e) {
    this.intensity = e / (this.width * this.height * Math.PI);
  }
  copy(e) {
    return super.copy(e), this.width = e.width, this.height = e.height, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.width = this.width, t.object.height = this.height, t;
  }
}
class Hd {
  constructor() {
    this.isSphericalHarmonics3 = true, this.coefficients = [];
    for (let e = 0; e < 9; e++) this.coefficients.push(new A());
  }
  set(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
    return this;
  }
  getAt(e, t) {
    const n = e.x, i = e.y, s = e.z, a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(0.282095), t.addScaledVector(a[1], 0.488603 * i), t.addScaledVector(a[2], 0.488603 * s), t.addScaledVector(a[3], 0.488603 * n), t.addScaledVector(a[4], 1.092548 * (n * i)), t.addScaledVector(a[5], 1.092548 * (i * s)), t.addScaledVector(a[6], 0.315392 * (3 * s * s - 1)), t.addScaledVector(a[7], 1.092548 * (n * s)), t.addScaledVector(a[8], 0.546274 * (n * n - i * i)), t;
  }
  getIrradianceAt(e, t) {
    const n = e.x, i = e.y, s = e.z, a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(0.886227), t.addScaledVector(a[1], 2 * 0.511664 * i), t.addScaledVector(a[2], 2 * 0.511664 * s), t.addScaledVector(a[3], 2 * 0.511664 * n), t.addScaledVector(a[4], 2 * 0.429043 * n * i), t.addScaledVector(a[5], 2 * 0.429043 * i * s), t.addScaledVector(a[6], 0.743125 * s * s - 0.247708), t.addScaledVector(a[7], 2 * 0.429043 * n * s), t.addScaledVector(a[8], 0.429043 * (n * n - i * i)), t;
  }
  add(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++) if (!this.coefficients[t].equals(e.coefficients[t])) return false;
    return true;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].fromArray(e, t + i * 3);
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].toArray(e, t + i * 3);
    return e;
  }
  static getBasisAt(e, t) {
    const n = e.x, i = e.y, s = e.z;
    t[0] = 0.282095, t[1] = 0.488603 * i, t[2] = 0.488603 * s, t[3] = 0.488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * s, t[6] = 0.315392 * (3 * s * s - 1), t[7] = 1.092548 * n * s, t[8] = 0.546274 * (n * n - i * i);
  }
}
class Ya extends ri {
  constructor(e = new Hd(), t = 1) {
    super(void 0, t), this.isLightProbe = true, this.sh = e;
  }
  copy(e) {
    return super.copy(e), this.sh.copy(e.sh), this;
  }
  fromJSON(e) {
    return this.intensity = e.intensity, this.sh.fromArray(e.sh), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.sh = this.sh.toArray(), t;
  }
}
class ja extends kt {
  constructor(e) {
    super(e), this.textures = {};
  }
  load(e, t, n, i) {
    const s = this, a = new vn(s.manager);
    a.setPath(s.path), a.setRequestHeader(s.requestHeader), a.setWithCredentials(s.withCredentials), a.load(e, function(o) {
      try {
        t(s.parse(JSON.parse(o)));
      } catch (l) {
        i ? i(l) : console.error(l), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = this.textures;
    function n(s) {
      return t[s] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", s), t[s];
    }
    const i = ja.createMaterialFromType(e.type);
    if (e.uuid !== void 0 && (i.uuid = e.uuid), e.name !== void 0 && (i.name = e.name), e.color !== void 0 && i.color !== void 0 && i.color.setHex(e.color), e.roughness !== void 0 && (i.roughness = e.roughness), e.metalness !== void 0 && (i.metalness = e.metalness), e.sheen !== void 0 && (i.sheen = e.sheen), e.sheenColor !== void 0 && (i.sheenColor = new ue().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (i.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && i.emissive !== void 0 && i.emissive.setHex(e.emissive), e.specular !== void 0 && i.specular !== void 0 && i.specular.setHex(e.specular), e.specularIntensity !== void 0 && (i.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && i.specularColor !== void 0 && i.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (i.shininess = e.shininess), e.clearcoat !== void 0 && (i.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = e.clearcoatRoughness), e.iridescence !== void 0 && (i.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (i.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (i.transmission = e.transmission), e.thickness !== void 0 && (i.thickness = e.thickness), e.attenuationDistance !== void 0 && (i.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && i.attenuationColor !== void 0 && i.attenuationColor.setHex(e.attenuationColor), e.fog !== void 0 && (i.fog = e.fog), e.flatShading !== void 0 && (i.flatShading = e.flatShading), e.blending !== void 0 && (i.blending = e.blending), e.combine !== void 0 && (i.combine = e.combine), e.side !== void 0 && (i.side = e.side), e.shadowSide !== void 0 && (i.shadowSide = e.shadowSide), e.opacity !== void 0 && (i.opacity = e.opacity), e.transparent !== void 0 && (i.transparent = e.transparent), e.alphaTest !== void 0 && (i.alphaTest = e.alphaTest), e.depthTest !== void 0 && (i.depthTest = e.depthTest), e.depthWrite !== void 0 && (i.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (i.colorWrite = e.colorWrite), e.stencilWrite !== void 0 && (i.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (i.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (i.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (i.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (i.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (i.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (i.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (i.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (i.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (i.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (i.rotation = e.rotation), e.linewidth !== 1 && (i.linewidth = e.linewidth), e.dashSize !== void 0 && (i.dashSize = e.dashSize), e.gapSize !== void 0 && (i.gapSize = e.gapSize), e.scale !== void 0 && (i.scale = e.scale), e.polygonOffset !== void 0 && (i.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (i.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (i.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (i.dithering = e.dithering), e.alphaToCoverage !== void 0 && (i.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (i.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (i.forceSinglePass = e.forceSinglePass), e.visible !== void 0 && (i.visible = e.visible), e.toneMapped !== void 0 && (i.toneMapped = e.toneMapped), e.userData !== void 0 && (i.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? i.vertexColors = e.vertexColors > 0 : i.vertexColors = e.vertexColors), e.uniforms !== void 0) for (const s in e.uniforms) {
      const a = e.uniforms[s];
      switch (i.uniforms[s] = {}, a.type) {
        case "t":
          i.uniforms[s].value = n(a.value);
          break;
        case "c":
          i.uniforms[s].value = new ue().setHex(a.value);
          break;
        case "v2":
          i.uniforms[s].value = new W().fromArray(a.value);
          break;
        case "v3":
          i.uniforms[s].value = new A().fromArray(a.value);
          break;
        case "v4":
          i.uniforms[s].value = new $e().fromArray(a.value);
          break;
        case "m3":
          i.uniforms[s].value = new We().fromArray(a.value);
          break;
        case "m4":
          i.uniforms[s].value = new _e().fromArray(a.value);
          break;
        default:
          i.uniforms[s].value = a.value;
      }
    }
    if (e.defines !== void 0 && (i.defines = e.defines), e.vertexShader !== void 0 && (i.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (i.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (i.glslVersion = e.glslVersion), e.extensions !== void 0) for (const s in e.extensions) i.extensions[s] = e.extensions[s];
    if (e.lights !== void 0 && (i.lights = e.lights), e.clipping !== void 0 && (i.clipping = e.clipping), e.size !== void 0 && (i.size = e.size), e.sizeAttenuation !== void 0 && (i.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (i.map = n(e.map)), e.matcap !== void 0 && (i.matcap = n(e.matcap)), e.alphaMap !== void 0 && (i.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (i.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (i.bumpScale = e.bumpScale), e.normalMap !== void 0 && (i.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (i.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let s = e.normalScale;
      Array.isArray(s) === false && (s = [s, s]), i.normalScale = new W().fromArray(s);
    }
    return e.displacementMap !== void 0 && (i.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (i.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (i.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (i.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (i.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (i.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (i.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (i.specularMap = n(e.specularMap)), e.specularIntensityMap !== void 0 && (i.specularIntensityMap = n(e.specularIntensityMap)), e.specularColorMap !== void 0 && (i.specularColorMap = n(e.specularColorMap)), e.envMap !== void 0 && (i.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (i.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (i.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (i.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (i.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (i.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (i.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (i.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (i.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (i.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new W().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (i.iridescenceMap = n(e.iridescenceMap)), e.iridescenceThicknessMap !== void 0 && (i.iridescenceThicknessMap = n(e.iridescenceThicknessMap)), e.transmissionMap !== void 0 && (i.transmissionMap = n(e.transmissionMap)), e.thicknessMap !== void 0 && (i.thicknessMap = n(e.thicknessMap)), e.sheenColorMap !== void 0 && (i.sheenColorMap = n(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (i.sheenRoughnessMap = n(e.sheenRoughnessMap)), i;
  }
  setTextures(e) {
    return this.textures = e, this;
  }
  static createMaterialFromType(e) {
    const t = { ShadowMaterial: Ed, SpriteMaterial: kl, RawShaderMaterial: Ad, ShaderMaterial: _t, PointsMaterial: Gl, MeshPhysicalMaterial: Rd, MeshStandardMaterial: Kl, MeshPhongMaterial: qs, MeshToonMaterial: Cd, MeshNormalMaterial: Pd, MeshLambertMaterial: Jl, MeshDepthMaterial: Bl, MeshDistanceMaterial: zl, MeshBasicMaterial: _n, MeshMatcapMaterial: Ld, LineDashedMaterial: Id, LineBasicMaterial: Lt, Material: Pt };
    return new t[e]();
  }
}
class Ca {
  static decodeText(e) {
    if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class Gd extends Ne {
  constructor() {
    super(), this.isInstancedBufferGeometry = true, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = true, e;
  }
}
class Vd extends kt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new vn(s.manager);
    a.setPath(s.path), a.setRequestHeader(s.requestHeader), a.setWithCredentials(s.withCredentials), a.load(e, function(o) {
      try {
        t(s.parse(JSON.parse(o)));
      } catch (l) {
        i ? i(l) : console.error(l), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = {}, n = {};
    function i(f, m) {
      if (t[m] !== void 0) return t[m];
      const x = f.interleavedBuffers[m], p = s(f, x.buffer), _ = os(x.type, p), v = new Va(_, x.stride);
      return v.uuid = x.uuid, t[m] = v, v;
    }
    function s(f, m) {
      if (n[m] !== void 0) return n[m];
      const x = f.arrayBuffers[m], p = new Uint32Array(x).buffer;
      return n[m] = p, p;
    }
    const a = e.isInstancedBufferGeometry ? new Gd() : new Ne(), o = e.data.index;
    if (o !== void 0) {
      const f = os(o.type, o.array);
      a.setIndex(new et(f, 1));
    }
    const l = e.data.attributes;
    for (const f in l) {
      const m = l[f];
      let g;
      if (m.isInterleavedBufferAttribute) {
        const x = i(e.data, m.data);
        g = new Pi(x, m.itemSize, m.offset, m.normalized);
      } else {
        const x = os(m.type, m.array), p = m.isInstancedBufferAttribute ? xs : et;
        g = new p(x, m.itemSize, m.normalized);
      }
      m.name !== void 0 && (g.name = m.name), m.usage !== void 0 && g.setUsage(m.usage), m.updateRange !== void 0 && (g.updateRange.offset = m.updateRange.offset, g.updateRange.count = m.updateRange.count), a.setAttribute(f, g);
    }
    const c = e.data.morphAttributes;
    if (c) for (const f in c) {
      const m = c[f], g = [];
      for (let x = 0, p = m.length; x < p; x++) {
        const _ = m[x];
        let v;
        if (_.isInterleavedBufferAttribute) {
          const M = i(e.data, _.data);
          v = new Pi(M, _.itemSize, _.offset, _.normalized);
        } else {
          const M = os(_.type, _.array);
          v = new et(M, _.itemSize, _.normalized);
        }
        _.name !== void 0 && (v.name = _.name), g.push(v);
      }
      a.morphAttributes[f] = g;
    }
    e.data.morphTargetsRelative && (a.morphTargetsRelative = true);
    const u = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (u !== void 0) for (let f = 0, m = u.length; f !== m; ++f) {
      const g = u[f];
      a.addGroup(g.start, g.count, g.materialIndex);
    }
    const d = e.data.boundingSphere;
    if (d !== void 0) {
      const f = new A();
      d.center !== void 0 && f.fromArray(d.center), a.boundingSphere = new un(f, d.radius);
    }
    return e.name && (a.name = e.name), e.userData && (a.userData = e.userData), a;
  }
}
class oy extends kt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = this.path === "" ? Ca.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || a;
    const o = new vn(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(l) {
      let c = null;
      try {
        c = JSON.parse(l);
      } catch (u) {
        i !== void 0 && i(u), console.error("THREE:ObjectLoader: Can't parse " + e + ".", u.message);
        return;
      }
      const h = c.metadata;
      if (h === void 0 || h.type === void 0 || h.type.toLowerCase() === "geometry") {
        i !== void 0 && i(new Error("THREE.ObjectLoader: Can't load " + e)), console.error("THREE.ObjectLoader: Can't load " + e);
        return;
      }
      s.parse(c, t);
    }, n, i);
  }
  async loadAsync(e, t) {
    const n = this, i = this.path === "" ? Ca.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || i;
    const s = new vn(this.manager);
    s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials);
    const a = await s.loadAsync(e, t), o = JSON.parse(a), l = o.metadata;
    if (l === void 0 || l.type === void 0 || l.type.toLowerCase() === "geometry") throw new Error("THREE.ObjectLoader: Can't load " + e);
    return await n.parseAsync(o);
  }
  parse(e, t) {
    const n = this.parseAnimations(e.animations), i = this.parseShapes(e.shapes), s = this.parseGeometries(e.geometries, i), a = this.parseImages(e.images, function() {
      t !== void 0 && t(c);
    }), o = this.parseTextures(e.textures, a), l = this.parseMaterials(e.materials, o), c = this.parseObject(e.object, s, l, o, n), h = this.parseSkeletons(e.skeletons, c);
    if (this.bindSkeletons(c, h), t !== void 0) {
      let u = false;
      for (const d in a) if (a[d].data instanceof HTMLImageElement) {
        u = true;
        break;
      }
      u === false && t(c);
    }
    return c;
  }
  async parseAsync(e) {
    const t = this.parseAnimations(e.animations), n = this.parseShapes(e.shapes), i = this.parseGeometries(e.geometries, n), s = await this.parseImagesAsync(e.images), a = this.parseTextures(e.textures, s), o = this.parseMaterials(e.materials, a), l = this.parseObject(e.object, i, o, a, t), c = this.parseSkeletons(e.skeletons, l);
    return this.bindSkeletons(l, c), l;
  }
  parseShapes(e) {
    const t = {};
    if (e !== void 0) for (let n = 0, i = e.length; n < i; n++) {
      const s = new Ri().fromJSON(e[n]);
      t[s.uuid] = s;
    }
    return t;
  }
  parseSkeletons(e, t) {
    const n = {}, i = {};
    if (t.traverse(function(s) {
      s.isBone && (i[s.uuid] = s);
    }), e !== void 0) for (let s = 0, a = e.length; s < a; s++) {
      const o = new hr().fromJSON(e[s], i);
      n[o.uuid] = o;
    }
    return n;
  }
  parseGeometries(e, t) {
    const n = {};
    if (e !== void 0) {
      const i = new Vd();
      for (let s = 0, a = e.length; s < a; s++) {
        let o;
        const l = e[s];
        switch (l.type) {
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            o = i.parse(l);
            break;
          default:
            l.type in bh ? o = bh[l.type].fromJSON(l, t) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`);
        }
        o.uuid = l.uuid, l.name !== void 0 && (o.name = l.name), l.userData !== void 0 && (o.userData = l.userData), n[l.uuid] = o;
      }
    }
    return n;
  }
  parseMaterials(e, t) {
    const n = {}, i = {};
    if (e !== void 0) {
      const s = new ja();
      s.setTextures(t);
      for (let a = 0, o = e.length; a < o; a++) {
        const l = e[a];
        n[l.uuid] === void 0 && (n[l.uuid] = s.parse(l)), i[l.uuid] = n[l.uuid];
      }
    }
    return i;
  }
  parseAnimations(e) {
    const t = {};
    if (e !== void 0) for (let n = 0; n < e.length; n++) {
      const i = e[n], s = Di.parse(i);
      t[s.uuid] = s;
    }
    return t;
  }
  parseImages(e, t) {
    const n = this, i = {};
    let s;
    function a(l) {
      return n.manager.itemStart(l), s.load(l, function() {
        n.manager.itemEnd(l);
      }, void 0, function() {
        n.manager.itemError(l), n.manager.itemEnd(l);
      });
    }
    function o(l) {
      if (typeof l == "string") {
        const c = l, h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c) ? c : n.resourcePath + c;
        return a(h);
      } else return l.data ? { data: os(l.type, l.data), width: l.width, height: l.height } : null;
    }
    if (e !== void 0 && e.length > 0) {
      const l = new nc(t);
      s = new ar(l), s.setCrossOrigin(this.crossOrigin);
      for (let c = 0, h = e.length; c < h; c++) {
        const u = e[c], d = u.url;
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, g = d.length; m < g; m++) {
            const x = d[m], p = o(x);
            p !== null && (p instanceof HTMLImageElement ? f.push(p) : f.push(new us(p.data, p.width, p.height)));
          }
          i[u.uuid] = new Si(f);
        } else {
          const f = o(u.url);
          i[u.uuid] = new Si(f);
        }
      }
    }
    return i;
  }
  async parseImagesAsync(e) {
    const t = this, n = {};
    let i;
    async function s(a) {
      if (typeof a == "string") {
        const o = a, l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(o) ? o : t.resourcePath + o;
        return await i.loadAsync(l);
      } else return a.data ? { data: os(a.type, a.data), width: a.width, height: a.height } : null;
    }
    if (e !== void 0 && e.length > 0) {
      i = new ar(this.manager), i.setCrossOrigin(this.crossOrigin);
      for (let a = 0, o = e.length; a < o; a++) {
        const l = e[a], c = l.url;
        if (Array.isArray(c)) {
          const h = [];
          for (let u = 0, d = c.length; u < d; u++) {
            const f = c[u], m = await s(f);
            m !== null && (m instanceof HTMLImageElement ? h.push(m) : h.push(new us(m.data, m.width, m.height)));
          }
          n[l.uuid] = new Si(h);
        } else {
          const h = await s(l.url);
          n[l.uuid] = new Si(h);
        }
      }
    }
    return n;
  }
  parseTextures(e, t) {
    function n(s, a) {
      return typeof s == "number" ? s : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", s), a[s]);
    }
    const i = {};
    if (e !== void 0) for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s];
      o.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), t[o.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", o.image);
      const l = t[o.image], c = l.data;
      let h;
      Array.isArray(c) ? (h = new cr(), c.length === 6 && (h.needsUpdate = true)) : (c && c.data ? h = new us() : h = new rt(), c && (h.needsUpdate = true)), h.source = l, h.uuid = o.uuid, o.name !== void 0 && (h.name = o.name), o.mapping !== void 0 && (h.mapping = n(o.mapping, ly)), o.channel !== void 0 && (h.channel = o.channel), o.offset !== void 0 && h.offset.fromArray(o.offset), o.repeat !== void 0 && h.repeat.fromArray(o.repeat), o.center !== void 0 && h.center.fromArray(o.center), o.rotation !== void 0 && (h.rotation = o.rotation), o.wrap !== void 0 && (h.wrapS = n(o.wrap[0], Eh), h.wrapT = n(o.wrap[1], Eh)), o.format !== void 0 && (h.format = o.format), o.internalFormat !== void 0 && (h.internalFormat = o.internalFormat), o.type !== void 0 && (h.type = o.type), o.colorSpace !== void 0 && (h.colorSpace = o.colorSpace), o.encoding !== void 0 && (h.encoding = o.encoding), o.minFilter !== void 0 && (h.minFilter = n(o.minFilter, Ah)), o.magFilter !== void 0 && (h.magFilter = n(o.magFilter, Ah)), o.anisotropy !== void 0 && (h.anisotropy = o.anisotropy), o.flipY !== void 0 && (h.flipY = o.flipY), o.generateMipmaps !== void 0 && (h.generateMipmaps = o.generateMipmaps), o.premultiplyAlpha !== void 0 && (h.premultiplyAlpha = o.premultiplyAlpha), o.unpackAlignment !== void 0 && (h.unpackAlignment = o.unpackAlignment), o.userData !== void 0 && (h.userData = o.userData), i[o.uuid] = h;
    }
    return i;
  }
  parseObject(e, t, n, i, s) {
    let a;
    function o(d) {
      return t[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", d), t[d];
    }
    function l(d) {
      if (d !== void 0) {
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, g = d.length; m < g; m++) {
            const x = d[m];
            n[x] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", x), f.push(n[x]);
          }
          return f;
        }
        return n[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", d), n[d];
      }
    }
    function c(d) {
      return i[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined texture", d), i[d];
    }
    let h, u;
    switch (e.type) {
      case "Scene":
        a = new cd(), e.background !== void 0 && (Number.isInteger(e.background) ? a.background = new ue(e.background) : a.background = c(e.background)), e.environment !== void 0 && (a.environment = c(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? a.fog = new Ga(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (a.fog = new Ha(e.fog.color, e.fog.density))), e.backgroundBlurriness !== void 0 && (a.backgroundBlurriness = e.backgroundBlurriness), e.backgroundIntensity !== void 0 && (a.backgroundIntensity = e.backgroundIntensity);
        break;
      case "PerspectiveCamera":
        a = new yt(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (a.focus = e.focus), e.zoom !== void 0 && (a.zoom = e.zoom), e.filmGauge !== void 0 && (a.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (a.filmOffset = e.filmOffset), e.view !== void 0 && (a.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        a = new Ms(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (a.zoom = e.zoom), e.view !== void 0 && (a.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        a = new ac(e.color, e.intensity);
        break;
      case "DirectionalLight":
        a = new rc(e.color, e.intensity);
        break;
      case "PointLight":
        a = new Ra(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        a = new kd(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        a = new sc(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
        break;
      case "HemisphereLight":
        a = new zd(e.color, e.groundColor, e.intensity);
        break;
      case "LightProbe":
        a = new Ya().fromJSON(e);
        break;
      case "SkinnedMesh":
        h = o(e.geometry), u = l(e.material), a = new Hl(h, u), e.bindMode !== void 0 && (a.bindMode = e.bindMode), e.bindMatrix !== void 0 && a.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (a.skeleton = e.skeleton);
        break;
      case "Mesh":
        h = o(e.geometry), u = l(e.material), a = new vt(h, u);
        break;
      case "InstancedMesh":
        h = o(e.geometry), u = l(e.material);
        const d = e.count, f = e.instanceMatrix, m = e.instanceColor;
        a = new fd(h, u, d), a.instanceMatrix = new xs(new Float32Array(f.array), 16), m !== void 0 && (a.instanceColor = new xs(new Float32Array(m.array), m.itemSize));
        break;
      case "LOD":
        a = new dd();
        break;
      case "Line":
        a = new Fn(o(e.geometry), l(e.material));
        break;
      case "LineLoop":
        a = new pd(o(e.geometry), l(e.material));
        break;
      case "LineSegments":
        a = new Mn(o(e.geometry), l(e.material));
        break;
      case "PointCloud":
      case "Points":
        a = new md(o(e.geometry), l(e.material));
        break;
      case "Sprite":
        a = new ud(l(e.material));
        break;
      case "Group":
        a = new Yn();
        break;
      case "Bone":
        a = new tr();
        break;
      default:
        a = new Ke();
    }
    if (a.uuid = e.uuid, e.name !== void 0 && (a.name = e.name), e.matrix !== void 0 ? (a.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (a.matrixAutoUpdate = e.matrixAutoUpdate), a.matrixAutoUpdate && a.matrix.decompose(a.position, a.quaternion, a.scale)) : (e.position !== void 0 && a.position.fromArray(e.position), e.rotation !== void 0 && a.rotation.fromArray(e.rotation), e.quaternion !== void 0 && a.quaternion.fromArray(e.quaternion), e.scale !== void 0 && a.scale.fromArray(e.scale)), e.up !== void 0 && a.up.fromArray(e.up), e.castShadow !== void 0 && (a.castShadow = e.castShadow), e.receiveShadow !== void 0 && (a.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.bias !== void 0 && (a.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (a.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (a.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && a.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (a.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (a.visible = e.visible), e.frustumCulled !== void 0 && (a.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (a.renderOrder = e.renderOrder), e.userData !== void 0 && (a.userData = e.userData), e.layers !== void 0 && (a.layers.mask = e.layers), e.children !== void 0) {
      const d = e.children;
      for (let f = 0; f < d.length; f++) a.add(this.parseObject(d[f], t, n, i, s));
    }
    if (e.animations !== void 0) {
      const d = e.animations;
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        a.animations.push(s[m]);
      }
    }
    if (e.type === "LOD") {
      e.autoUpdate !== void 0 && (a.autoUpdate = e.autoUpdate);
      const d = e.levels;
      for (let f = 0; f < d.length; f++) {
        const m = d[f], g = a.getObjectByProperty("uuid", m.object);
        g !== void 0 && a.addLevel(g, m.distance, m.hysteresis);
      }
    }
    return a;
  }
  bindSkeletons(e, t) {
    Object.keys(t).length !== 0 && e.traverse(function(n) {
      if (n.isSkinnedMesh === true && n.skeleton !== void 0) {
        const i = t[n.skeleton];
        i === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", n.skeleton) : n.bind(i, n.bindMatrix);
      }
    });
  }
}
const ly = { UVMapping: Da, CubeReflectionMapping: Qn, CubeRefractionMapping: $n, EquirectangularReflectionMapping: ds, EquirectangularRefractionMapping: js, CubeUVReflectionMapping: ys }, Eh = { RepeatWrapping: Un, ClampToEdgeWrapping: Tt, MirroredRepeatWrapping: Zs }, Ah = { NearestFilter: at, NearestMipmapNearestFilter: Ea, NearestMipmapLinearFilter: Hs, LinearFilter: ct, LinearMipmapNearestFilter: Rl, LinearMipmapLinearFilter: ei };
class cy extends kt {
  constructor(e) {
    super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Ui.get(e);
    if (a !== void 0) return s.manager.itemStart(e), setTimeout(function() {
      t && t(a), s.manager.itemEnd(e);
    }, 0), a;
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader, fetch(e, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      Ui.add(e, l), t && t(l), s.manager.itemEnd(e);
    }).catch(function(l) {
      i && i(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
let aa;
class oc {
  static getContext() {
    return aa === void 0 && (aa = new (window.AudioContext || window.webkitAudioContext)()), aa;
  }
  static setContext(e) {
    aa = e;
  }
}
class hy extends kt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new vn(this.manager);
    a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(l) {
      try {
        const c = l.slice(0);
        oc.getContext().decodeAudioData(c, function(u) {
          t(u);
        }, o);
      } catch (c) {
        o(c);
      }
    }, n, i);
    function o(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e);
    }
  }
}
class uy extends Ya {
  constructor(e, t, n = 1) {
    super(void 0, n), this.isHemisphereLightProbe = true;
    const i = new ue().set(e), s = new ue().set(t), a = new A(i.r, i.g, i.b), o = new A(s.r, s.g, s.b), l = Math.sqrt(Math.PI), c = l * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c);
  }
}
class dy extends Ya {
  constructor(e, t = 1) {
    super(void 0, t), this.isAmbientLightProbe = true;
    const n = new ue().set(e);
    this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
const Rh = new _e(), Ch = new _e(), di = new _e();
class fy {
  constructor() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new yt(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = false, this.cameraR = new yt(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = false, this._cache = { focus: null, fov: null, aspect: null, near: null, far: null, zoom: null, eyeSep: null };
  }
  update(e) {
    const t = this._cache;
    if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
      t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep, di.copy(e.projectionMatrix);
      const i = t.eyeSep / 2, s = i * t.near / t.focus, a = t.near * Math.tan(Ai * t.fov * 0.5) / t.zoom;
      let o, l;
      Ch.elements[12] = -i, Rh.elements[12] = i, o = -a * t.aspect + s, l = a * t.aspect + s, di.elements[0] = 2 * t.near / (l - o), di.elements[8] = (l + o) / (l - o), this.cameraL.projectionMatrix.copy(di), o = -a * t.aspect - s, l = a * t.aspect - s, di.elements[0] = 2 * t.near / (l - o), di.elements[8] = (l + o) / (l - o), this.cameraR.projectionMatrix.copy(di);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Ch), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Rh);
  }
}
class lc {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = Ph(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
  }
  stop() {
    this.getElapsedTime(), this.running = false, this.autoStart = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Ph();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Ph() {
  return (typeof performance > "u" ? Date : performance).now();
}
const fi = new A(), Lh = new mt(), py = new A(), pi = new A();
class my extends Ke {
  constructor() {
    super(), this.type = "AudioListener", this.context = oc.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new lc();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(fi, Lh, py), pi.set(0, 0, -1).applyQuaternion(Lh), t.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(fi.x, i), t.positionY.linearRampToValueAtTime(fi.y, i), t.positionZ.linearRampToValueAtTime(fi.z, i), t.forwardX.linearRampToValueAtTime(pi.x, i), t.forwardY.linearRampToValueAtTime(pi.y, i), t.forwardZ.linearRampToValueAtTime(pi.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i);
    } else t.setPosition(fi.x, fi.y, fi.z), t.setOrientation(pi.x, pi.y, pi.z, n.x, n.y, n.z);
  }
}
let Wd = class extends Ke {
  constructor(e) {
    super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = false, this.buffer = null, this.detune = 0, this.loop = false, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = false, this.hasPlaybackControl = true, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = false, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  }
  setMediaElementSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  }
  setMediaStreamSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  }
  setBuffer(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(e = 0) {
    if (this.isPlaying === true) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = true, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === true && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === true && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = false), this;
  }
  stop() {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source !== null && (this.source.stop(), this.source.onended = null), this.isPlaying = false, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return this._connected = true, this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else this.source.disconnect(this.getOutput());
    return this._connected = false, this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return e || (e = []), this._connected === true ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
  }
  setDetune(e) {
    if (this.detune = e, this.source.detune !== void 0) return this.isPlaying === true && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === true && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = false;
  }
  getLoop() {
    return this.hasPlaybackControl === false ? (console.warn("THREE.Audio: this Audio has no playback control."), false) : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === true && (this.source.loop = this.loop), this;
  }
  setLoopStart(e) {
    return this.loopStart = e, this;
  }
  setLoopEnd(e) {
    return this.loopEnd = e, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
};
const mi = new A(), Ih = new mt(), xy = new A(), xi = new A();
class gy extends Wd {
  constructor(e) {
    super(e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
  }
  disconnect() {
    super.disconnect(), this.panner.disconnect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(e) {
    return this.panner.refDistance = e, this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(e) {
    return this.panner.rolloffFactor = e, this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(e) {
    return this.panner.distanceModel = e, this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(e) {
    return this.panner.maxDistance = e, this;
  }
  setDirectionalCone(e, t, n) {
    return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this;
  }
  updateMatrixWorld(e) {
    if (super.updateMatrixWorld(e), this.hasPlaybackControl === true && this.isPlaying === false) return;
    this.matrixWorld.decompose(mi, Ih, xy), xi.set(0, 0, 1).applyQuaternion(Ih);
    const t = this.panner;
    if (t.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime(mi.x, n), t.positionY.linearRampToValueAtTime(mi.y, n), t.positionZ.linearRampToValueAtTime(mi.z, n), t.orientationX.linearRampToValueAtTime(xi.x, n), t.orientationY.linearRampToValueAtTime(xi.y, n), t.orientationZ.linearRampToValueAtTime(xi.z, n);
    } else t.setPosition(mi.x, mi.y, mi.z), t.setOrientation(xi.x, xi.y, xi.z);
  }
}
class vy {
  constructor(e, t = 2048) {
    this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  }
  getAverageFrequency() {
    let e = 0;
    const t = this.getFrequencyData();
    for (let n = 0; n < t.length; n++) e += t[n];
    return e / t.length;
  }
}
class Xd {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let i, s, a;
    switch (t) {
      case "quaternion":
        i = this._slerp, s = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, s = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, s = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  accumulate(e, t) {
    const n = this.buffer, i = this.valueSize, s = e * i + i;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== i; ++o) n[s + o] = n[o];
      a = t;
    } else {
      a += t;
      const o = t / a;
      this._mixBufferRegion(n, s, 0, o, i);
    }
    this.cumulativeWeight = a;
  }
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  apply(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, s = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const l = t * this._origIndex;
      this._mixBufferRegion(n, i, l, 1 - s, t);
    }
    a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l) if (n[l] !== n[l + t]) {
      o.setValue(n, i);
      break;
    }
  }
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let s = n, a = i; s !== a; ++s) t[s] = t[i + s % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++) this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n];
  }
  _select(e, t, n, i, s) {
    if (i >= 0.5) for (let a = 0; a !== s; ++a) e[t + a] = e[n + a];
  }
  _slerp(e, t, n, i) {
    mt.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const a = this._workIndex * s;
    mt.multiplyQuaternionsFlat(e, a, e, t, e, n), mt.slerpFlat(e, t, e, t, e, a, i);
  }
  _lerp(e, t, n, i, s) {
    const a = 1 - i;
    for (let o = 0; o !== s; ++o) {
      const l = t + o;
      e[l] = e[l] * a + e[n + o] * i;
    }
  }
  _lerpAdditive(e, t, n, i, s) {
    for (let a = 0; a !== s; ++a) {
      const o = t + a;
      e[o] = e[o] + e[n + a] * i;
    }
  }
}
const cc = "\\[\\]\\.:\\/", yy = new RegExp("[" + cc + "]", "g"), hc = "[^" + cc + "]", _y = "[^" + cc.replace("\\.", "") + "]", My = /((?:WC+[\/:])*)/.source.replace("WC", hc), by = /(WCOD+)?/.source.replace("WCOD", _y), Sy = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", hc), wy = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", hc), Ty = new RegExp("^" + My + by + Sy + wy + "$"), Ey = ["material", "materials", "bones", "map"];
class Ay {
  constructor(e, t, n) {
    const i = n || je.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i) n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
  }
}
class je {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || je.parseTrackName(t), this.node = je.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new je.Composite(e, t, n) : new je(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(yy, "");
  }
  static parseTrackName(e) {
    const t = Ty.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      Ey.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === t || o.uuid === t) return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = je.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++) if (e[h].name === c) {
            c = h;
            break;
          }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
je.Composite = Ay;
je.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
je.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
je.prototype.GetterByBindingType = [je.prototype._getValue_direct, je.prototype._getValue_array, je.prototype._getValue_arrayElement, je.prototype._getValue_toArray];
je.prototype.SetterByBindingTypeAndVersioning = [[je.prototype._setValue_direct, je.prototype._setValue_direct_setNeedsUpdate, je.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [je.prototype._setValue_array, je.prototype._setValue_array_setNeedsUpdate, je.prototype._setValue_array_setMatrixWorldNeedsUpdate], [je.prototype._setValue_arrayElement, je.prototype._setValue_arrayElement_setNeedsUpdate, je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [je.prototype._setValue_fromArray, je.prototype._setValue_fromArray_setNeedsUpdate, je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class Ry {
  constructor() {
    this.isAnimationObjectGroup = true, this.uuid = Yt(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    const e = {};
    this._indicesByUUID = e;
    for (let n = 0, i = arguments.length; n !== i; ++n) e[arguments[n].uuid] = n;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    const t = this;
    this.stats = { objects: { get total() {
      return t._objects.length;
    }, get inUse() {
      return this.total - t.nCachedObjects_;
    } }, get bindingsPerObject() {
      return t._bindings.length;
    } };
  }
  add() {
    const e = this._objects, t = this._indicesByUUID, n = this._paths, i = this._parsedPaths, s = this._bindings, a = s.length;
    let o, l = e.length, c = this.nCachedObjects_;
    for (let h = 0, u = arguments.length; h !== u; ++h) {
      const d = arguments[h], f = d.uuid;
      let m = t[f];
      if (m === void 0) {
        m = l++, t[f] = m, e.push(d);
        for (let g = 0, x = a; g !== x; ++g) s[g].push(new je(d, n[g], i[g]));
      } else if (m < c) {
        o = e[m];
        const g = --c, x = e[g];
        t[x.uuid] = m, e[m] = x, t[f] = g, e[g] = d;
        for (let p = 0, _ = a; p !== _; ++p) {
          const v = s[p], M = v[g];
          let w = v[m];
          v[m] = M, w === void 0 && (w = new je(d, n[p], i[p])), v[g] = w;
        }
      } else e[m] !== o && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
    }
    this.nCachedObjects_ = c;
  }
  remove() {
    const e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length;
    let s = this.nCachedObjects_;
    for (let a = 0, o = arguments.length; a !== o; ++a) {
      const l = arguments[a], c = l.uuid, h = t[c];
      if (h !== void 0 && h >= s) {
        const u = s++, d = e[u];
        t[d.uuid] = h, e[h] = d, t[c] = u, e[u] = l;
        for (let f = 0, m = i; f !== m; ++f) {
          const g = n[f], x = g[u], p = g[h];
          g[h] = x, g[u] = p;
        }
      }
    }
    this.nCachedObjects_ = s;
  }
  uncache() {
    const e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length;
    let s = this.nCachedObjects_, a = e.length;
    for (let o = 0, l = arguments.length; o !== l; ++o) {
      const c = arguments[o], h = c.uuid, u = t[h];
      if (u !== void 0) if (delete t[h], u < s) {
        const d = --s, f = e[d], m = --a, g = e[m];
        t[f.uuid] = u, e[u] = f, t[g.uuid] = d, e[d] = g, e.pop();
        for (let x = 0, p = i; x !== p; ++x) {
          const _ = n[x], v = _[d], M = _[m];
          _[u] = v, _[d] = M, _.pop();
        }
      } else {
        const d = --a, f = e[d];
        d > 0 && (t[f.uuid] = u), e[u] = f, e.pop();
        for (let m = 0, g = i; m !== g; ++m) {
          const x = n[m];
          x[u] = x[d], x.pop();
        }
      }
    }
    this.nCachedObjects_ = s;
  }
  subscribe_(e, t) {
    const n = this._bindingsIndicesByPath;
    let i = n[e];
    const s = this._bindings;
    if (i !== void 0) return s[i];
    const a = this._paths, o = this._parsedPaths, l = this._objects, c = l.length, h = this.nCachedObjects_, u = new Array(c);
    i = s.length, n[e] = i, a.push(e), o.push(t), s.push(u);
    for (let d = h, f = l.length; d !== f; ++d) {
      const m = l[d];
      u[d] = new je(m, e, t);
    }
    return u;
  }
  unsubscribe_(e) {
    const t = this._bindingsIndicesByPath, n = t[e];
    if (n !== void 0) {
      const i = this._paths, s = this._parsedPaths, a = this._bindings, o = a.length - 1, l = a[o], c = e[o];
      t[c] = n, a[n] = l, a.pop(), s[n] = s[o], s.pop(), i[n] = i[o], i.pop();
    }
  }
}
class qd {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const s = t.tracks, a = s.length, o = new Array(a), l = { endingStart: Mi, endingEnd: Mi };
    for (let c = 0; c !== a; ++c) {
      const h = s[c].createInterpolant(null);
      o[c] = h, h.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = ku, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = false, this.enabled = true, this.clampWhenFinished = false, this.zeroSlopeAtStart = true, this.zeroSlopeAtEnd = true;
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = false, this.enabled = true, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, s = e._clip.duration, a = s / i, o = i / s;
      e.warp(1, a, t), this.warp(o, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer, s = i.time, a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const l = o.parameterPositions, c = o.sampleValues;
    return l[0] = s, l[1] = s + n, c[0] = e / a, c[1] = t / a, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const l = (e - s) * n;
      l < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * l);
    }
    t *= this._updateTimeScale(e);
    const a = this._updateTime(t), o = this._updateWeight(e);
    if (o > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case Pl:
          for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(a), c[h].accumulateAdditive(o);
          break;
        case Ua:
        default:
          for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(a), c[h].accumulate(i, o);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = false));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = true : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, s = this._loopCount;
    const a = n === Hu;
    if (e === 0) return s === -1 ? i : a && (s & 1) === 1 ? t - i : i;
    if (n === zu) {
      s === -1 && (this._loopCount = 0, this._setEndings(true, true, false));
      e: {
        if (i >= t) i = t;
        else if (i < 0) i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = true : this.enabled = false, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e < 0 ? -1 : 1 });
      }
    } else {
      if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(true, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, true, a)), i >= t || i < 0) {
        const o = Math.floor(i / t);
        i -= t * o, s += Math.abs(o);
        const l = this.repetitions - s;
        if (l <= 0) this.clampWhenFinished ? this.paused = true : this.enabled = false, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e > 0 ? 1 : -1 });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, a);
          } else this._setEndings(false, false, a);
          this._loopCount = s, this.time = i, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: o });
        }
      } else this.time = i;
      if (a && (s & 1) === 1) return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = bi, i.endingEnd = bi) : (e ? i.endingStart = this.zeroSlopeAtStart ? bi : Mi : i.endingStart = Qs, t ? i.endingEnd = this.zeroSlopeAtEnd ? bi : Mi : i.endingEnd = Qs);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, s = i.time;
    let a = this._weightInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
    const o = a.parameterPositions, l = a.sampleValues;
    return o[0] = s, l[0] = t, o[1] = s + e, l[1] = n, this;
  }
}
const Cy = new Float32Array(1);
class Yd extends yn {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, s = i.length, a = e._propertyBindings, o = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && (h = {}, c[l] = h);
    for (let u = 0; u !== s; ++u) {
      const d = i[u], f = d.name;
      let m = h[f];
      if (m !== void 0) ++m.referenceCount, a[u] = m;
      else {
        if (m = a[u], m !== void 0) {
          m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, l, f));
          continue;
        }
        const g = t && t._propertyBindings[u].binding.parsedPath;
        m = new Xd(je.create(n, f, g), d.ValueTypeName, d.getValueSize()), ++m.referenceCount, this._addInactiveBinding(m, l, f), a[u] = m;
      }
      o[u].resultBuffer = m.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, s = this._actionsByClip[i];
        this._bindAction(e, s && s.knownActions[0]), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = { actions: { get total() {
      return e._actions.length;
    }, get inUse() {
      return e._nActiveActions;
    } }, bindings: { get total() {
      return e._bindings.length;
    }, get inUse() {
      return e._nActiveBindings;
    } }, controlInterpolants: { get total() {
      return e._controlInterpolants.length;
    }, get inUse() {
      return e._nActiveControlInterpolants;
    } } };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions, s = this._actionsByClip;
    let a = s[t];
    if (a === void 0) a = { knownActions: [e], actionByRoot: {} }, e._byClipCacheIndex = 0, s[t] = a;
    else {
      const o = a.knownActions;
      e._byClipCacheIndex = o.length, o.push(e);
    }
    e._cacheIndex = i.length, i.push(e), a.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const s = e._clip.uuid, a = this._actionsByClip, o = a[s], l = o.knownActions, c = l[l.length - 1], h = e._byClipCacheIndex;
    c._byClipCacheIndex = h, l[h] = c, l.pop(), e._byClipCacheIndex = null;
    const u = o.actionByRoot, d = (e._localRoot || this._root).uuid;
    delete u[d], l.length === 0 && delete a[s], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = t[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName, s = this._bindings;
    let a = i[t];
    a === void 0 && (a = {}, i[t] = a), a[n] = e, e._cacheIndex = s.length, s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, s = n.path, a = this._bindingsByRootAndName, o = a[i], l = t[t.length - 1], c = e._cacheIndex;
    l._cacheIndex = c, t[c] = l, t.pop(), delete o[s], Object.keys(o).length === 0 && delete a[i];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new ec(new Float32Array(2), new Float32Array(2), 1, Cy), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, s = t[i];
    e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s;
  }
  clipAction(e, t, n) {
    const i = t || this._root, s = i.uuid;
    let a = typeof e == "string" ? Di.findByName(i, e) : e;
    const o = a !== null ? a.uuid : e, l = this._actionsByClip[o];
    let c = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = Ua), l !== void 0) {
      const u = l.actionByRoot[s];
      if (u !== void 0 && u.blendMode === n) return u;
      c = l.knownActions[0], a === null && (a = c._clip);
    }
    if (a === null) return null;
    const h = new qd(this, a, t, n);
    return this._bindAction(h, c), this._addInactiveAction(h, o, s), h;
  }
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, s = typeof e == "string" ? Di.findByName(n, e) : e, a = s ? s.uuid : e, o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[i] || null;
  }
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n) e[n].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, s = Math.sign(e), a = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c) t[c]._update(i, e, s, a);
    const o = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c) o[c].apply(a);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, s = i[n];
    if (s !== void 0) {
      const a = s.knownActions;
      for (let o = 0, l = a.length; o !== l; ++o) {
        const c = a[o];
        this._deactivateAction(c);
        const h = c._cacheIndex, u = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot, l = o[t];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName, s = i[t];
    if (s !== void 0) for (const a in s) {
      const o = s[a];
      o.restoreOriginalState(), this._removeInactiveBinding(o);
    }
  }
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
class uc {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new uc(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
let Py = 0;
class Ly extends yn {
  constructor() {
    super(), this.isUniformsGroup = true, Object.defineProperty(this, "id", { value: Py++ }), this.name = "", this.usage = $s, this.uniforms = [];
  }
  add(e) {
    return this.uniforms.push(e), this;
  }
  remove(e) {
    const t = this.uniforms.indexOf(e);
    return t !== -1 && this.uniforms.splice(t, 1), this;
  }
  setName(e) {
    return this.name = e, this;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this;
  }
  copy(e) {
    this.name = e.name, this.usage = e.usage;
    const t = e.uniforms;
    this.uniforms.length = 0;
    for (let n = 0, i = t.length; n < i; n++) this.uniforms.push(t[n].clone());
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Iy extends Va {
  constructor(e, t, n = 1) {
    super(e, t), this.isInstancedInterleavedBuffer = true, this.meshPerAttribute = n;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  clone(e) {
    const t = super.clone(e);
    return t.meshPerAttribute = this.meshPerAttribute, t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.isInstancedInterleavedBuffer = true, t.meshPerAttribute = this.meshPerAttribute, t;
  }
}
class Dy {
  constructor(e, t, n, i, s) {
    this.isGLBufferAttribute = true, this.name = "", this.buffer = e, this.type = t, this.itemSize = n, this.elementSize = i, this.count = s, this.version = 0;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setBuffer(e) {
    return this.buffer = e, this;
  }
  setType(e, t) {
    return this.type = e, this.elementSize = t, this;
  }
  setItemSize(e) {
    return this.itemSize = e, this;
  }
  setCount(e) {
    return this.count = e, this;
  }
}
class Uy {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new lr(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Oa(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = true, n = []) {
    return Ml(e, this, n, t), n.sort(Dh), n;
  }
  intersectObjects(e, t = true, n = []) {
    for (let i = 0, s = e.length; i < s; i++) Ml(e[i], this, n, t);
    return n.sort(Dh), n;
  }
}
function Dh(r, e) {
  return r.distance - e.distance;
}
function Ml(r, e, t, n) {
  if (r.layers.test(e.layers) && r.raycast(e, t), n === true) {
    const i = r.children;
    for (let s = 0, a = i.length; s < a; s++) Ml(i[s], e, t, true);
  }
}
class bl {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(ht(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Fy {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.theta = t, this.y = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.theta = t, this.y = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Uh = new W();
class Oy {
  constructor(e = new W(1 / 0, 1 / 0), t = new W(-1 / 0, -1 / 0)) {
    this.isBox2 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Uh.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y));
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y);
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Uh).distanceTo(e);
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Fh = new A(), oa = new A();
class Ny {
  constructor(e = new A(), t = new A()) {
    this.start = e, this.end = t;
  }
  set(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  }
  copy(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  }
  getCenter(e) {
    return e.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(e) {
    return e.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(e, t) {
    return this.delta(t).multiplyScalar(e).add(this.start);
  }
  closestPointToPointParameter(e, t) {
    Fh.subVectors(e, this.start), oa.subVectors(this.end, this.start);
    const n = oa.dot(oa);
    let s = oa.dot(Fh) / n;
    return t && (s = ht(s, 0, 1)), s;
  }
  closestPointToPoint(e, t, n) {
    const i = this.closestPointToPointParameter(e, t);
    return this.delta(n).multiplyScalar(i).add(this.start);
  }
  applyMatrix4(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  }
  equals(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Oh = new A();
class By extends Ke {
  constructor(e, t) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.color = t, this.type = "SpotLightHelper";
    const n = new Ne(), i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
    for (let a = 0, o = 1, l = 32; a < l; a++, o++) {
      const c = a / l * Math.PI * 2, h = o / l * Math.PI * 2;
      i.push(Math.cos(c), Math.sin(c), 1, Math.cos(h), Math.sin(h), 1);
    }
    n.setAttribute("position", new xe(i, 3));
    const s = new Lt({ fog: false, toneMapped: false });
    this.cone = new Mn(n, s), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.light.target.updateWorldMatrix(true, false);
    const e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e), Oh.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(Oh), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }
}
const Gn = new A(), la = new _e(), Lo = new _e();
class jd extends Mn {
  constructor(e) {
    const t = Zd(e), n = new Ne(), i = [], s = [], a = new ue(0, 0, 1), o = new ue(0, 1, 0);
    for (let c = 0; c < t.length; c++) {
      const h = t[c];
      h.parent && h.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), s.push(a.r, a.g, a.b), s.push(o.r, o.g, o.b));
    }
    n.setAttribute("position", new xe(i, 3)), n.setAttribute("color", new xe(s, 3));
    const l = new Lt({ vertexColors: true, depthTest: false, depthWrite: false, toneMapped: false, transparent: true });
    super(n, l), this.isSkeletonHelper = true, this.type = "SkeletonHelper", this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false;
  }
  updateMatrixWorld(e) {
    const t = this.bones, n = this.geometry, i = n.getAttribute("position");
    Lo.copy(this.root.matrixWorld).invert();
    for (let s = 0, a = 0; s < t.length; s++) {
      const o = t[s];
      o.parent && o.parent.isBone && (la.multiplyMatrices(Lo, o.matrixWorld), Gn.setFromMatrixPosition(la), i.setXYZ(a, Gn.x, Gn.y, Gn.z), la.multiplyMatrices(Lo, o.parent.matrixWorld), Gn.setFromMatrixPosition(la), i.setXYZ(a + 1, Gn.x, Gn.y, Gn.z), a += 2);
    }
    n.getAttribute("position").needsUpdate = true, super.updateMatrixWorld(e);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function Zd(r) {
  const e = [];
  r.isBone === true && e.push(r);
  for (let t = 0; t < r.children.length; t++) e.push.apply(e, Zd(r.children[t]));
  return e;
}
class zy extends vt {
  constructor(e, t, n) {
    const i = new Ts(t, 4, 2), s = new _n({ wireframe: true, fog: false, toneMapped: false });
    super(i, s), this.light = e, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = false, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const ky = new A(), Nh = new ue(), Bh = new ue();
class Hy extends Ke {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.color = n, this.type = "HemisphereLightHelper";
    const i = new ws(t);
    i.rotateY(Math.PI * 0.5), this.material = new _n({ wireframe: true, fog: false, toneMapped: false }), this.color === void 0 && (this.material.vertexColors = true);
    const s = i.getAttribute("position"), a = new Float32Array(s.count * 3);
    i.setAttribute("color", new et(a, 3)), this.add(new vt(i, this.material)), this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const e = this.children[0];
    if (this.color !== void 0) this.material.color.set(this.color);
    else {
      const t = e.geometry.getAttribute("color");
      Nh.copy(this.light.color), Bh.copy(this.light.groundColor);
      for (let n = 0, i = t.count; n < i; n++) {
        const s = n < i / 2 ? Nh : Bh;
        t.setXYZ(n, s.r, s.g, s.b);
      }
      t.needsUpdate = true;
    }
    this.light.updateWorldMatrix(true, false), e.lookAt(ky.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class Gy extends Mn {
  constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
    n = new ue(n), i = new ue(i);
    const s = t / 2, a = e / t, o = e / 2, l = [], c = [];
    for (let d = 0, f = 0, m = -o; d <= t; d++, m += a) {
      l.push(-o, 0, m, o, 0, m), l.push(m, 0, -o, m, 0, o);
      const g = d === s ? n : i;
      g.toArray(c, f), f += 3, g.toArray(c, f), f += 3, g.toArray(c, f), f += 3, g.toArray(c, f), f += 3;
    }
    const h = new Ne();
    h.setAttribute("position", new xe(l, 3)), h.setAttribute("color", new xe(c, 3));
    const u = new Lt({ vertexColors: true, toneMapped: false });
    super(h, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Vy extends Mn {
  constructor(e = 10, t = 16, n = 8, i = 64, s = 4473924, a = 8947848) {
    s = new ue(s), a = new ue(a);
    const o = [], l = [];
    if (t > 1) for (let u = 0; u < t; u++) {
      const d = u / t * (Math.PI * 2), f = Math.sin(d) * e, m = Math.cos(d) * e;
      o.push(0, 0, 0), o.push(f, 0, m);
      const g = u & 1 ? s : a;
      l.push(g.r, g.g, g.b), l.push(g.r, g.g, g.b);
    }
    for (let u = 0; u < n; u++) {
      const d = u & 1 ? s : a, f = e - e / n * u;
      for (let m = 0; m < i; m++) {
        let g = m / i * (Math.PI * 2), x = Math.sin(g) * f, p = Math.cos(g) * f;
        o.push(x, 0, p), l.push(d.r, d.g, d.b), g = (m + 1) / i * (Math.PI * 2), x = Math.sin(g) * f, p = Math.cos(g) * f, o.push(x, 0, p), l.push(d.r, d.g, d.b);
      }
    }
    const c = new Ne();
    c.setAttribute("position", new xe(o, 3)), c.setAttribute("color", new xe(l, 3));
    const h = new Lt({ vertexColors: true, toneMapped: false });
    super(c, h), this.type = "PolarGridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const zh = new A(), ca = new A(), kh = new A();
class Kd extends Ke {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.color = n, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
    let i = new Ne();
    i.setAttribute("position", new xe([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
    const s = new Lt({ fog: false, toneMapped: false });
    this.lightPlane = new Fn(i, s), this.add(this.lightPlane), i = new Ne(), i.setAttribute("position", new xe([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Fn(i, s), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.light.target.updateWorldMatrix(true, false), zh.setFromMatrixPosition(this.light.matrixWorld), ca.setFromMatrixPosition(this.light.target.matrixWorld), kh.subVectors(ca, zh), this.lightPlane.lookAt(ca), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(ca), this.targetLine.scale.z = kh.length();
  }
}
const ha = new A(), lt = new Ba();
class Wy extends Mn {
  constructor(e) {
    const t = new Ne(), n = new Lt({ color: 16777215, vertexColors: true, toneMapped: false }), i = [], s = [], a = {};
    o("n1", "n2"), o("n2", "n4"), o("n4", "n3"), o("n3", "n1"), o("f1", "f2"), o("f2", "f4"), o("f4", "f3"), o("f3", "f1"), o("n1", "f1"), o("n2", "f2"), o("n3", "f3"), o("n4", "f4"), o("p", "n1"), o("p", "n2"), o("p", "n3"), o("p", "n4"), o("u1", "u2"), o("u2", "u3"), o("u3", "u1"), o("c", "t"), o("p", "c"), o("cn1", "cn2"), o("cn3", "cn4"), o("cf1", "cf2"), o("cf3", "cf4");
    function o(m, g) {
      l(m), l(g);
    }
    function l(m) {
      i.push(0, 0, 0), s.push(0, 0, 0), a[m] === void 0 && (a[m] = []), a[m].push(i.length / 3 - 1);
    }
    t.setAttribute("position", new xe(i, 3)), t.setAttribute("color", new xe(s, 3)), super(t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.pointMap = a, this.update();
    const c = new ue(16755200), h = new ue(16711680), u = new ue(43775), d = new ue(16777215), f = new ue(3355443);
    this.setColors(c, h, u, d, f);
  }
  setColors(e, t, n, i, s) {
    const o = this.geometry.getAttribute("color");
    o.setXYZ(0, e.r, e.g, e.b), o.setXYZ(1, e.r, e.g, e.b), o.setXYZ(2, e.r, e.g, e.b), o.setXYZ(3, e.r, e.g, e.b), o.setXYZ(4, e.r, e.g, e.b), o.setXYZ(5, e.r, e.g, e.b), o.setXYZ(6, e.r, e.g, e.b), o.setXYZ(7, e.r, e.g, e.b), o.setXYZ(8, e.r, e.g, e.b), o.setXYZ(9, e.r, e.g, e.b), o.setXYZ(10, e.r, e.g, e.b), o.setXYZ(11, e.r, e.g, e.b), o.setXYZ(12, e.r, e.g, e.b), o.setXYZ(13, e.r, e.g, e.b), o.setXYZ(14, e.r, e.g, e.b), o.setXYZ(15, e.r, e.g, e.b), o.setXYZ(16, e.r, e.g, e.b), o.setXYZ(17, e.r, e.g, e.b), o.setXYZ(18, e.r, e.g, e.b), o.setXYZ(19, e.r, e.g, e.b), o.setXYZ(20, e.r, e.g, e.b), o.setXYZ(21, e.r, e.g, e.b), o.setXYZ(22, e.r, e.g, e.b), o.setXYZ(23, e.r, e.g, e.b), o.setXYZ(24, t.r, t.g, t.b), o.setXYZ(25, t.r, t.g, t.b), o.setXYZ(26, t.r, t.g, t.b), o.setXYZ(27, t.r, t.g, t.b), o.setXYZ(28, t.r, t.g, t.b), o.setXYZ(29, t.r, t.g, t.b), o.setXYZ(30, t.r, t.g, t.b), o.setXYZ(31, t.r, t.g, t.b), o.setXYZ(32, n.r, n.g, n.b), o.setXYZ(33, n.r, n.g, n.b), o.setXYZ(34, n.r, n.g, n.b), o.setXYZ(35, n.r, n.g, n.b), o.setXYZ(36, n.r, n.g, n.b), o.setXYZ(37, n.r, n.g, n.b), o.setXYZ(38, i.r, i.g, i.b), o.setXYZ(39, i.r, i.g, i.b), o.setXYZ(40, s.r, s.g, s.b), o.setXYZ(41, s.r, s.g, s.b), o.setXYZ(42, s.r, s.g, s.b), o.setXYZ(43, s.r, s.g, s.b), o.setXYZ(44, s.r, s.g, s.b), o.setXYZ(45, s.r, s.g, s.b), o.setXYZ(46, s.r, s.g, s.b), o.setXYZ(47, s.r, s.g, s.b), o.setXYZ(48, s.r, s.g, s.b), o.setXYZ(49, s.r, s.g, s.b), o.needsUpdate = true;
  }
  update() {
    const e = this.geometry, t = this.pointMap, n = 1, i = 1;
    lt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), ft("c", t, e, lt, 0, 0, -1), ft("t", t, e, lt, 0, 0, 1), ft("n1", t, e, lt, -n, -i, -1), ft("n2", t, e, lt, n, -i, -1), ft("n3", t, e, lt, -n, i, -1), ft("n4", t, e, lt, n, i, -1), ft("f1", t, e, lt, -n, -i, 1), ft("f2", t, e, lt, n, -i, 1), ft("f3", t, e, lt, -n, i, 1), ft("f4", t, e, lt, n, i, 1), ft("u1", t, e, lt, n * 0.7, i * 1.1, -1), ft("u2", t, e, lt, -n * 0.7, i * 1.1, -1), ft("u3", t, e, lt, 0, i * 2, -1), ft("cf1", t, e, lt, -n, 0, 1), ft("cf2", t, e, lt, n, 0, 1), ft("cf3", t, e, lt, 0, -i, 1), ft("cf4", t, e, lt, 0, i, 1), ft("cn1", t, e, lt, -n, 0, -1), ft("cn2", t, e, lt, n, 0, -1), ft("cn3", t, e, lt, 0, -i, -1), ft("cn4", t, e, lt, 0, i, -1), e.getAttribute("position").needsUpdate = true;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function ft(r, e, t, n, i, s, a) {
  ha.set(i, s, a).unproject(n);
  const o = e[r];
  if (o !== void 0) {
    const l = t.getAttribute("position");
    for (let c = 0, h = o.length; c < h; c++) l.setXYZ(o[c], ha.x, ha.y, ha.z);
  }
}
const ua = new en();
class Xy extends Mn {
  constructor(e, t = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = new Float32Array(24), s = new Ne();
    s.setIndex(new et(n, 1)), s.setAttribute("position", new et(i, 3)), super(s, new Lt({ color: t, toneMapped: false })), this.object = e, this.type = "BoxHelper", this.matrixAutoUpdate = false, this.update();
  }
  update(e) {
    if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && ua.setFromObject(this.object), ua.isEmpty()) return;
    const t = ua.min, n = ua.max, i = this.geometry.attributes.position, s = i.array;
    s[0] = n.x, s[1] = n.y, s[2] = n.z, s[3] = t.x, s[4] = n.y, s[5] = n.z, s[6] = t.x, s[7] = t.y, s[8] = n.z, s[9] = n.x, s[10] = t.y, s[11] = n.z, s[12] = n.x, s[13] = n.y, s[14] = t.z, s[15] = t.x, s[16] = n.y, s[17] = t.z, s[18] = t.x, s[19] = t.y, s[20] = t.z, s[21] = n.x, s[22] = t.y, s[23] = t.z, i.needsUpdate = true, this.geometry.computeBoundingSphere();
  }
  setFromObject(e) {
    return this.object = e, this.update(), this;
  }
  copy(e, t) {
    return super.copy(e, t), this.object = e.object, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class qy extends Mn {
  constructor(e, t = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], s = new Ne();
    s.setIndex(new et(n, 1)), s.setAttribute("position", new xe(i, 3)), super(s, new Lt({ color: t, toneMapped: false })), this.box = e, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(e) {
    const t = this.box;
    t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(e));
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Yy extends Fn {
  constructor(e, t = 1, n = 16776960) {
    const i = n, s = [1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], a = new Ne();
    a.setAttribute("position", new xe(s, 3)), a.computeBoundingSphere(), super(a, new Lt({ color: i, toneMapped: false })), this.type = "PlaneHelper", this.plane = e, this.size = t;
    const o = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], l = new Ne();
    l.setAttribute("position", new xe(o, 3)), l.computeBoundingSphere(), this.add(new vt(l, new _n({ color: i, opacity: 0.2, transparent: true, depthWrite: false, toneMapped: false })));
  }
  updateMatrixWorld(e) {
    this.position.set(0, 0, 0), this.scale.set(0.5 * this.size, 0.5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(e);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
}
const Hh = new A();
let da, Io;
class jy extends Ke {
  constructor(e = new A(0, 0, 1), t = new A(0, 0, 0), n = 1, i = 16776960, s = n * 0.2, a = s * 0.2) {
    super(), this.type = "ArrowHelper", da === void 0 && (da = new Ne(), da.setAttribute("position", new xe([0, 0, 0, 0, 1, 0], 3)), Io = new Fi(0, 0.5, 1, 5, 1), Io.translate(0, -0.5, 0)), this.position.copy(t), this.line = new Fn(da, new Lt({ color: i, toneMapped: false })), this.line.matrixAutoUpdate = false, this.add(this.line), this.cone = new vt(Io, new _n({ color: i, toneMapped: false })), this.cone.matrixAutoUpdate = false, this.add(this.cone), this.setDirection(e), this.setLength(n, s, a);
  }
  setDirection(e) {
    if (e.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
    else if (e.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
    else {
      Hh.set(e.z, 0, -e.x).normalize();
      const t = Math.acos(e.y);
      this.quaternion.setFromAxisAngle(Hh, t);
    }
  }
  setLength(e, t = e * 0.2, n = t * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix();
  }
  setColor(e) {
    this.line.material.color.set(e), this.cone.material.color.set(e);
  }
  copy(e) {
    return super.copy(e, false), this.line.copy(e.line), this.cone.copy(e.cone), this;
  }
  dispose() {
    this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
  }
}
class Zy extends Mn {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e], n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], i = new Ne();
    i.setAttribute("position", new xe(t, 3)), i.setAttribute("color", new xe(n, 3));
    const s = new Lt({ vertexColors: true, toneMapped: false });
    super(i, s), this.type = "AxesHelper";
  }
  setColors(e, t, n) {
    const i = new ue(), s = this.geometry.attributes.color.array;
    return i.set(e), i.toArray(s, 0), i.toArray(s, 3), i.set(t), i.toArray(s, 6), i.toArray(s, 9), i.set(n), i.toArray(s, 12), i.toArray(s, 15), this.geometry.attributes.color.needsUpdate = true, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Ky {
  constructor() {
    this.type = "ShapePath", this.color = new ue(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new nr(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    return this.currentPath.quadraticCurveTo(e, t, n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, a) {
    return this.currentPath.bezierCurveTo(e, t, n, i, s, a), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(p) {
      const _ = [];
      for (let v = 0, M = p.length; v < M; v++) {
        const w = p[v], S = new Ri();
        S.curves = w.curves, _.push(S);
      }
      return _;
    }
    function n(p, _) {
      const v = _.length;
      let M = false;
      for (let w = v - 1, S = 0; S < v; w = S++) {
        let y = _[w], R = _[S], b = R.x - y.x, T = R.y - y.y;
        if (Math.abs(T) > Number.EPSILON) {
          if (T < 0 && (y = _[S], b = -b, R = _[w], T = -T), p.y < y.y || p.y > R.y) continue;
          if (p.y === y.y) {
            if (p.x === y.x) return true;
          } else {
            const N = T * (p.x - y.x) - b * (p.y - y.y);
            if (N === 0) return true;
            if (N < 0) continue;
            M = !M;
          }
        } else {
          if (p.y !== y.y) continue;
          if (R.x <= p.x && p.x <= y.x || y.x <= p.x && p.x <= R.x) return true;
        }
      }
      return M;
    }
    const i = gn.isClockWise, s = this.subPaths;
    if (s.length === 0) return [];
    let a, o, l;
    const c = [];
    if (s.length === 1) return o = s[0], l = new Ri(), l.curves = o.curves, c.push(l), c;
    let h = !i(s[0].getPoints());
    h = e ? !h : h;
    const u = [], d = [];
    let f = [], m = 0, g;
    d[m] = void 0, f[m] = [];
    for (let p = 0, _ = s.length; p < _; p++) o = s[p], g = o.getPoints(), a = i(g), a = e ? !a : a, a ? (!h && d[m] && m++, d[m] = { s: new Ri(), p: g }, d[m].s.curves = o.curves, h && m++, f[m] = []) : f[m].push({ h: o, p: g[0] });
    if (!d[0]) return t(s);
    if (d.length > 1) {
      let p = false, _ = 0;
      for (let v = 0, M = d.length; v < M; v++) u[v] = [];
      for (let v = 0, M = d.length; v < M; v++) {
        const w = f[v];
        for (let S = 0; S < w.length; S++) {
          const y = w[S];
          let R = true;
          for (let b = 0; b < d.length; b++) n(y.p, d[b].p) && (v !== b && _++, R ? (R = false, u[b].push(y)) : p = true);
          R && u[v].push(y);
        }
      }
      _ > 0 && p === false && (f = u);
    }
    let x;
    for (let p = 0, _ = d.length; p < _; p++) {
      l = d[p].s, c.push(l), x = f[p];
      for (let v = 0, M = x.length; v < M; v++) l.holes.push(x[v].h);
    }
    return c;
  }
}
class Jy extends ii {
  constructor(e, t, n, i, s, a) {
    console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."), super(e, t, n, i, s, a);
  }
}
class Qy extends ur {
  constructor(e, t, n, i) {
    console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."), super(e, t, n, i);
  }
}
class $y extends dr {
  constructor(e, t, n, i) {
    console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."), super(e, t, n, i);
  }
}
class e_ extends fr {
  constructor(e, t, n, i, s, a, o) {
    console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."), super(e, t, n, i, s, a, o);
  }
}
class t_ extends Fi {
  constructor(e, t, n, i, s, a, o, l) {
    console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."), super(e, t, n, i, s, a, o, l);
  }
}
class n_ extends pr {
  constructor(e, t) {
    console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."), super(e, t);
  }
}
class i_ extends mr {
  constructor(e, t) {
    console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."), super(e, t);
  }
}
class s_ extends xr {
  constructor(e, t) {
    console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."), super(e, t);
  }
}
class r_ extends Ss {
  constructor(e, t, n, i) {
    console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."), super(e, t, n, i);
  }
}
class a_ extends ws {
  constructor(e, t) {
    console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."), super(e, t);
  }
}
class o_ extends _s {
  constructor(e, t, n, i) {
    console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."), super(e, t, n, i);
  }
}
class l_ extends On {
  constructor(e, t, n, i) {
    console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."), super(e, t, n, i);
  }
}
class c_ extends gr {
  constructor(e, t, n, i, s, a) {
    console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."), super(e, t, n, i, s, a);
  }
}
class h_ extends vr {
  constructor(e, t) {
    console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."), super(e, t);
  }
}
class u_ extends Ts {
  constructor(e, t, n, i, s, a, o) {
    console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."), super(e, t, n, i, s, a, o);
  }
}
class d_ extends yr {
  constructor(e, t) {
    console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."), super(e, t);
  }
}
class f_ extends _r {
  constructor(e, t, n, i, s) {
    console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."), super(e, t, n, i, s);
  }
}
class p_ extends Mr {
  constructor(e, t, n, i, s, a) {
    console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."), super(e, t, n, i, s, a);
  }
}
class m_ extends br {
  constructor(e, t, n, i, s) {
    console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."), super(e, t, n, i, s);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Ia } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ia);
const ze = Object.freeze(Object.defineProperty({ __proto__: null, ACESFilmicToneMapping: bu, AddEquation: yi, AddOperation: vu, AdditiveAnimationBlendMode: Pl, AdditiveBlending: wa, AlphaFormat: Cu, AlwaysDepth: uu, AlwaysStencilFunc: Xu, AmbientLight: ac, AmbientLightProbe: dy, AnimationAction: qd, AnimationClip: Di, AnimationLoader: ey, AnimationMixer: Yd, AnimationObjectGroup: Ry, AnimationUtils: Kv, ArcCurve: xd, ArrayCamera: rd, ArrowHelper: jy, Audio: Wd, AudioAnalyser: vy, AudioContext: oc, AudioListener: my, AudioLoader: hy, AxesHelper: Zy, BackSide: Ot, BasicDepthPacking: Gu, BasicShadowMap: vf, Bone: tr, BooleanKeyframeTrack: Oi, Box2: Oy, Box3: en, Box3Helper: qy, BoxBufferGeometry: Jy, BoxGeometry: ii, BoxHelper: Xy, BufferAttribute: et, BufferGeometry: Ne, BufferGeometryLoader: Vd, ByteType: wu, Cache: Ui, Camera: Ba, CameraHelper: Wy, CanvasTexture: _v, CapsuleBufferGeometry: Qy, CapsuleGeometry: ur, CatmullRomCurve3: gd, CineonToneMapping: Mu, CircleBufferGeometry: $y, CircleGeometry: dr, ClampToEdgeWrapping: Tt, Clock: lc, Color: ue, ColorKeyframeTrack: tc, ColorManagement: Kt, CompressedArrayTexture: yv, CompressedTexture: Vl, CompressedTextureLoader: ty, ConeBufferGeometry: e_, ConeGeometry: fr, CubeCamera: Ju, CubeReflectionMapping: Qn, CubeRefractionMapping: $n, CubeTexture: cr, CubeTextureLoader: ny, CubeUVReflectionMapping: ys, CubicBezierCurve: Xl, CubicBezierCurve3: vd, CubicInterpolant: Ud, CullFaceBack: zo, CullFaceFront: Kh, CullFaceFrontBack: gf, CullFaceNone: Zh, Curve: tn, CurvePath: _d, CustomBlending: Qh, CustomToneMapping: Su, CylinderBufferGeometry: t_, CylinderGeometry: Fi, Cylindrical: Fy, Data3DTexture: Fl, DataArrayTexture: Fa, DataTexture: us, DataTextureLoader: iy, DataUtils: Cp, DecrementStencilOp: Pf, DecrementWrapStencilOp: If, DefaultLoadingManager: Nd, DepthFormat: Zn, DepthStencilFormat: Ci, DepthTexture: ad, DirectionalLight: rc, DirectionalLightHelper: Kd, DiscreteInterpolant: Fd, DisplayP3ColorSpace: Il, DodecahedronBufferGeometry: n_, DodecahedronGeometry: pr, DoubleSide: cn, DstAlphaFactor: ru, DstColorFactor: ou, DynamicCopyUsage: Yf, DynamicDrawUsage: Hf, DynamicReadUsage: Wf, EdgesGeometry: Md, EllipseCurve: Wa, EqualDepth: fu, EqualStencilFunc: Of, EquirectangularReflectionMapping: ds, EquirectangularRefractionMapping: js, Euler: qt, EventDispatcher: yn, ExtrudeBufferGeometry: i_, ExtrudeGeometry: mr, FileLoader: vn, Float16BufferAttribute: Fp, Float32BufferAttribute: xe, Float64BufferAttribute: Op, FloatType: Pn, Fog: Ga, FogExp2: Ha, FramebufferTexture: vv, FrontSide: Dn, Frustum: za, GLBufferAttribute: Dy, GLSL1: Zf, GLSL3: fl, GreaterDepth: mu, GreaterEqualDepth: pu, GreaterEqualStencilFunc: kf, GreaterStencilFunc: Bf, GridHelper: Gy, Group: Yn, HalfFloatType: fs, HemisphereLight: zd, HemisphereLightHelper: Hy, HemisphereLightProbe: uy, IcosahedronBufferGeometry: s_, IcosahedronGeometry: xr, ImageBitmapLoader: cy, ImageLoader: ar, ImageUtils: Ul, IncrementStencilOp: Cf, IncrementWrapStencilOp: Lf, InstancedBufferAttribute: xs, InstancedBufferGeometry: Gd, InstancedInterleavedBuffer: Iy, InstancedMesh: fd, Int16BufferAttribute: Dp, Int32BufferAttribute: Up, Int8BufferAttribute: Pp, IntType: Eu, InterleavedBuffer: Va, InterleavedBufferAttribute: Pi, Interpolant: Sr, InterpolateDiscrete: Ks, InterpolateLinear: Js, InterpolateSmooth: Ma, InvertStencilOp: Df, KeepStencilOp: ba, KeyframeTrack: dn, LOD: dd, LatheBufferGeometry: r_, LatheGeometry: Ss, Layers: Oa, LessDepth: du, LessEqualDepth: Ta, LessEqualStencilFunc: Nf, LessStencilFunc: Ff, Light: ri, LightProbe: Ya, Line: Fn, Line3: Ny, LineBasicMaterial: Lt, LineCurve: Xa, LineCurve3: yd, LineDashedMaterial: Id, LineLoop: pd, LineSegments: Mn, LinearEncoding: Ll, LinearFilter: ct, LinearInterpolant: ec, LinearMipMapLinearFilter: Sf, LinearMipMapNearestFilter: bf, LinearMipmapLinearFilter: ei, LinearMipmapNearestFilter: Rl, LinearSRGBColorSpace: hn, LinearToneMapping: yu, Loader: kt, LoaderUtils: Ca, LoadingManager: nc, LoopOnce: zu, LoopPingPong: Hu, LoopRepeat: ku, LuminanceAlphaFormat: Lu, LuminanceFormat: Pu, MOUSE: Wn, Material: Pt, MaterialLoader: ja, MathUtils: Qt, Matrix3: We, Matrix4: _e, MaxEquation: Vo, Mesh: vt, MeshBasicMaterial: _n, MeshDepthMaterial: Bl, MeshDistanceMaterial: zl, MeshLambertMaterial: Jl, MeshMatcapMaterial: Ld, MeshNormalMaterial: Pd, MeshPhongMaterial: qs, MeshPhysicalMaterial: Rd, MeshStandardMaterial: Kl, MeshToonMaterial: Cd, MinEquation: Go, MirroredRepeatWrapping: Zs, MixOperation: gu, MultiplyBlending: Ho, MultiplyOperation: or, NearestFilter: at, NearestMipMapLinearFilter: Mf, NearestMipMapNearestFilter: _f, NearestMipmapLinearFilter: Hs, NearestMipmapNearestFilter: Ea, NeverDepth: hu, NeverStencilFunc: Uf, NoBlending: Ln, NoColorSpace: Kn, NoToneMapping: xn, NormalAnimationBlendMode: Ua, NormalBlending: Ti, NotEqualDepth: xu, NotEqualStencilFunc: zf, NumberKeyframeTrack: gs, Object3D: Ke, ObjectLoader: oy, ObjectSpaceNormalMap: Wu, OctahedronBufferGeometry: a_, OctahedronGeometry: ws, OneFactor: nu, OneMinusDstAlphaFactor: au, OneMinusDstColorFactor: lu, OneMinusSrcAlphaFactor: Al, OneMinusSrcColorFactor: su, OrthographicCamera: Ms, PCFShadowMap: Tl, PCFSoftShadowMap: Jh, PMREMGenerator: ml, Path: nr, PerspectiveCamera: yt, Plane: Xn, PlaneBufferGeometry: o_, PlaneGeometry: _s, PlaneHelper: Yy, PointLight: Ra, PointLightHelper: zy, Points: md, PointsMaterial: Gl, PolarGridHelper: Vy, PolyhedronBufferGeometry: l_, PolyhedronGeometry: On, PositionalAudio: gy, PropertyBinding: je, PropertyMixer: Xd, QuadraticBezierCurve: ql, QuadraticBezierCurve3: Yl, Quaternion: mt, QuaternionKeyframeTrack: si, QuaternionLinearInterpolant: Od, RED_GREEN_RGTC2_Format: ul, RED_RGTC1_Format: Bu, REVISION: Ia, RGBADepthPacking: Vu, RGBAFormat: Wt, RGBAIntegerFormat: Ou, RGBA_ASTC_10x10_Format: ol, RGBA_ASTC_10x5_Format: sl, RGBA_ASTC_10x6_Format: rl, RGBA_ASTC_10x8_Format: al, RGBA_ASTC_12x10_Format: ll, RGBA_ASTC_12x12_Format: cl, RGBA_ASTC_4x4_Format: Ko, RGBA_ASTC_5x4_Format: Jo, RGBA_ASTC_5x5_Format: Qo, RGBA_ASTC_6x5_Format: $o, RGBA_ASTC_6x6_Format: el, RGBA_ASTC_8x5_Format: tl, RGBA_ASTC_8x6_Format: nl, RGBA_ASTC_8x8_Format: il, RGBA_BPTC_Format: _a, RGBA_ETC2_EAC_Format: Zo, RGBA_PVRTC_2BPPV1_Format: Yo, RGBA_PVRTC_4BPPV1_Format: qo, RGBA_S3TC_DXT1_Format: ga, RGBA_S3TC_DXT3_Format: va, RGBA_S3TC_DXT5_Format: ya, RGB_ETC1_Format: Nu, RGB_ETC2_Format: jo, RGB_PVRTC_2BPPV1_Format: Xo, RGB_PVRTC_4BPPV1_Format: Wo, RGB_S3TC_DXT1_Format: xa, RGFormat: Uu, RGIntegerFormat: Fu, RawShaderMaterial: Ad, Ray: lr, Raycaster: Uy, RectAreaLight: kd, RedFormat: Iu, RedIntegerFormat: Du, ReinhardToneMapping: _u, RepeatWrapping: Un, ReplaceStencilOp: Rf, ReverseSubtractEquation: eu, RingBufferGeometry: c_, RingGeometry: gr, SIGNED_RED_GREEN_RGTC2_Format: dl, SIGNED_RED_RGTC1_Format: hl, SRGBColorSpace: Ue, Scene: cd, ShaderChunk: ke, ShaderLib: ln, ShaderMaterial: _t, ShadowMaterial: Ed, Shape: Ri, ShapeBufferGeometry: h_, ShapeGeometry: vr, ShapePath: Ky, ShapeUtils: gn, ShortType: Tu, Skeleton: hr, SkeletonHelper: jd, SkinnedMesh: Hl, Source: Si, Sphere: un, SphereBufferGeometry: u_, SphereGeometry: Ts, Spherical: bl, SphericalHarmonics3: Hd, SplineCurve: jl, SpotLight: sc, SpotLightHelper: By, Sprite: ud, SpriteMaterial: kl, SrcAlphaFactor: El, SrcAlphaSaturateFactor: cu, SrcColorFactor: iu, StaticCopyUsage: qf, StaticDrawUsage: $s, StaticReadUsage: Vf, StereoCamera: fy, StreamCopyUsage: jf, StreamDrawUsage: Gf, StreamReadUsage: Xf, StringKeyframeTrack: Ni, SubtractEquation: $h, SubtractiveBlending: ko, TOUCH: gi, TangentSpaceNormalMap: ni, TetrahedronBufferGeometry: d_, TetrahedronGeometry: yr, Texture: rt, TextureLoader: Bd, TorusBufferGeometry: f_, TorusGeometry: _r, TorusKnotBufferGeometry: p_, TorusKnotGeometry: Mr, Triangle: zt, TriangleFanDrawMode: Ef, TriangleStripDrawMode: Tf, TrianglesDrawMode: wf, TubeBufferGeometry: m_, TubeGeometry: br, TwoPassDoubleSide: yf, UVMapping: Da, Uint16BufferAttribute: Na, Uint32BufferAttribute: Ol, Uint8BufferAttribute: Lp, Uint8ClampedBufferAttribute: Ip, Uniform: uc, UniformsGroup: Ly, UniformsLib: de, UniformsUtils: Jn, UnsignedByteType: ti, UnsignedInt248Type: Ei, UnsignedIntType: qn, UnsignedShort4444Type: Au, UnsignedShort5551Type: Ru, UnsignedShortType: Cl, VSMShadowMap: mn, Vector2: W, Vector3: A, Vector4: $e, VectorKeyframeTrack: Ii, VideoTexture: gv, WebGL1Renderer: ld, WebGL3DRenderTarget: vp, WebGLArrayRenderTarget: gp, WebGLCubeRenderTarget: Qu, WebGLMultipleRenderTargets: yp, WebGLRenderTarget: Et, WebGLRenderer: od, WebGLUtils: sd, WireframeGeometry: Td, WrapAroundEnding: Qs, ZeroCurvatureEnding: Mi, ZeroFactor: tu, ZeroSlopeEnding: bi, ZeroStencilOp: Af, _SRGBAFormat: Aa, sRGBEncoding: In }, Symbol.toStringTag, { value: "Module" })), Gh = { type: "change" }, Do = { type: "start" }, Vh = { type: "end" };
class x_ extends yn {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = true, this.target = new A(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Wn.ROTATE, MIDDLE: Wn.DOLLY, RIGHT: Wn.PAN }, this.touches = { ONE: gi.ROTATE, TWO: gi.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return o.phi;
    }, this.getAzimuthalAngle = function() {
      return o.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(L) {
      L.addEventListener("keydown", Be), this._domElementKeyEvents = L;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", Be), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Gh), n.update(), s = i.NONE;
    }, this.update = (function() {
      const L = new A(), Q = new mt().setFromUnitVectors(e.up, new A(0, 1, 0)), H = Q.clone().invert(), me = new A(), Me = new mt(), Te = 2 * Math.PI;
      return function() {
        const we = n.object.position;
        L.copy(we).sub(n.target), L.applyQuaternion(Q), o.setFromVector3(L), n.autoRotate && s === i.NONE && b(y()), n.enableDamping ? (o.theta += l.theta * n.dampingFactor, o.phi += l.phi * n.dampingFactor) : (o.theta += l.theta, o.phi += l.phi);
        let Fe = n.minAzimuthAngle, Ve = n.maxAzimuthAngle;
        return isFinite(Fe) && isFinite(Ve) && (Fe < -Math.PI ? Fe += Te : Fe > Math.PI && (Fe -= Te), Ve < -Math.PI ? Ve += Te : Ve > Math.PI && (Ve -= Te), Fe <= Ve ? o.theta = Math.max(Fe, Math.min(Ve, o.theta)) : o.theta = o.theta > (Fe + Ve) / 2 ? Math.max(Fe, o.theta) : Math.min(Ve, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), o.radius *= c, o.radius = Math.max(n.minDistance, Math.min(n.maxDistance, o.radius)), n.enableDamping === true ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), L.setFromSpherical(o), L.applyQuaternion(H), we.copy(n.target).add(L), n.object.lookAt(n.target), n.enableDamping === true ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), h.set(0, 0, 0)), c = 1, u || me.distanceToSquared(n.object.position) > a || 8 * (1 - Me.dot(n.object.quaternion)) > a ? (n.dispatchEvent(Gh), me.copy(n.object.position), Me.copy(n.object.quaternion), u = false, true) : false;
      };
    })(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", E), n.domElement.removeEventListener("pointerdown", te), n.domElement.removeEventListener("pointercancel", he), n.domElement.removeEventListener("wheel", Ae), n.domElement.removeEventListener("pointermove", ve), n.domElement.removeEventListener("pointerup", he), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", Be), n._domElementKeyEvents = null);
    };
    const n = this, i = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 };
    let s = i.NONE;
    const a = 1e-6, o = new bl(), l = new bl();
    let c = 1;
    const h = new A();
    let u = false;
    const d = new W(), f = new W(), m = new W(), g = new W(), x = new W(), p = new W(), _ = new W(), v = new W(), M = new W(), w = [], S = {};
    function y() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function R() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function b(L) {
      l.theta -= L;
    }
    function T(L) {
      l.phi -= L;
    }
    const N = (function() {
      const L = new A();
      return function(H, me) {
        L.setFromMatrixColumn(me, 0), L.multiplyScalar(-H), h.add(L);
      };
    })(), B = (function() {
      const L = new A();
      return function(H, me) {
        n.screenSpacePanning === true ? L.setFromMatrixColumn(me, 1) : (L.setFromMatrixColumn(me, 0), L.crossVectors(n.object.up, L)), L.multiplyScalar(H), h.add(L);
      };
    })(), D = (function() {
      const L = new A();
      return function(H, me) {
        const Me = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const Te = n.object.position;
          L.copy(Te).sub(n.target);
          let ge = L.length();
          ge *= Math.tan(n.object.fov / 2 * Math.PI / 180), N(2 * H * ge / Me.clientHeight, n.object.matrix), B(2 * me * ge / Me.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (N(H * (n.object.right - n.object.left) / n.object.zoom / Me.clientWidth, n.object.matrix), B(me * (n.object.top - n.object.bottom) / n.object.zoom / Me.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = false);
      };
    })();
    function O(L) {
      n.object.isPerspectiveCamera ? c /= L : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * L)), n.object.updateProjectionMatrix(), u = true) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
    }
    function k(L) {
      n.object.isPerspectiveCamera ? c *= L : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / L)), n.object.updateProjectionMatrix(), u = true) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
    }
    function Y(L) {
      d.set(L.clientX, L.clientY);
    }
    function J(L) {
      _.set(L.clientX, L.clientY);
    }
    function K(L) {
      g.set(L.clientX, L.clientY);
    }
    function ie(L) {
      f.set(L.clientX, L.clientY), m.subVectors(f, d).multiplyScalar(n.rotateSpeed);
      const Q = n.domElement;
      b(2 * Math.PI * m.x / Q.clientHeight), T(2 * Math.PI * m.y / Q.clientHeight), d.copy(f), n.update();
    }
    function ee(L) {
      v.set(L.clientX, L.clientY), M.subVectors(v, _), M.y > 0 ? O(R()) : M.y < 0 && k(R()), _.copy(v), n.update();
    }
    function be(L) {
      x.set(L.clientX, L.clientY), p.subVectors(x, g).multiplyScalar(n.panSpeed), D(p.x, p.y), g.copy(x), n.update();
    }
    function oe(L) {
      L.deltaY < 0 ? k(R()) : L.deltaY > 0 && O(R()), n.update();
    }
    function V(L) {
      let Q = false;
      switch (L.code) {
        case n.keys.UP:
          L.ctrlKey || L.metaKey || L.shiftKey ? T(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(0, n.keyPanSpeed), Q = true;
          break;
        case n.keys.BOTTOM:
          L.ctrlKey || L.metaKey || L.shiftKey ? T(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(0, -n.keyPanSpeed), Q = true;
          break;
        case n.keys.LEFT:
          L.ctrlKey || L.metaKey || L.shiftKey ? b(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(n.keyPanSpeed, 0), Q = true;
          break;
        case n.keys.RIGHT:
          L.ctrlKey || L.metaKey || L.shiftKey ? b(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(-n.keyPanSpeed, 0), Q = true;
          break;
      }
      Q && (L.preventDefault(), n.update());
    }
    function $() {
      if (w.length === 1) d.set(w[0].pageX, w[0].pageY);
      else {
        const L = 0.5 * (w[0].pageX + w[1].pageX), Q = 0.5 * (w[0].pageY + w[1].pageY);
        d.set(L, Q);
      }
    }
    function ce() {
      if (w.length === 1) g.set(w[0].pageX, w[0].pageY);
      else {
        const L = 0.5 * (w[0].pageX + w[1].pageX), Q = 0.5 * (w[0].pageY + w[1].pageY);
        g.set(L, Q);
      }
    }
    function fe() {
      const L = w[0].pageX - w[1].pageX, Q = w[0].pageY - w[1].pageY, H = Math.sqrt(L * L + Q * Q);
      _.set(0, H);
    }
    function I() {
      n.enableZoom && fe(), n.enablePan && ce();
    }
    function Re() {
      n.enableZoom && fe(), n.enableRotate && $();
    }
    function Ie(L) {
      if (w.length == 1) f.set(L.pageX, L.pageY);
      else {
        const H = pe(L), me = 0.5 * (L.pageX + H.x), Me = 0.5 * (L.pageY + H.y);
        f.set(me, Me);
      }
      m.subVectors(f, d).multiplyScalar(n.rotateSpeed);
      const Q = n.domElement;
      b(2 * Math.PI * m.x / Q.clientHeight), T(2 * Math.PI * m.y / Q.clientHeight), d.copy(f);
    }
    function le(L) {
      if (w.length === 1) x.set(L.pageX, L.pageY);
      else {
        const Q = pe(L), H = 0.5 * (L.pageX + Q.x), me = 0.5 * (L.pageY + Q.y);
        x.set(H, me);
      }
      p.subVectors(x, g).multiplyScalar(n.panSpeed), D(p.x, p.y), g.copy(x);
    }
    function Se(L) {
      const Q = pe(L), H = L.pageX - Q.x, me = L.pageY - Q.y, Me = Math.sqrt(H * H + me * me);
      v.set(0, Me), M.set(0, Math.pow(v.y / _.y, n.zoomSpeed)), O(M.y), _.copy(v);
    }
    function ne(L) {
      n.enableZoom && Se(L), n.enablePan && le(L);
    }
    function j(L) {
      n.enableZoom && Se(L), n.enableRotate && Ie(L);
    }
    function te(L) {
      n.enabled !== false && (w.length === 0 && (n.domElement.setPointerCapture(L.pointerId), n.domElement.addEventListener("pointermove", ve), n.domElement.addEventListener("pointerup", he)), G(L), L.pointerType === "touch" ? Je(L) : Pe(L));
    }
    function ve(L) {
      n.enabled !== false && (L.pointerType === "touch" ? P(L) : Le(L));
    }
    function he(L) {
      se(L), w.length === 0 && (n.domElement.releasePointerCapture(L.pointerId), n.domElement.removeEventListener("pointermove", ve), n.domElement.removeEventListener("pointerup", he)), n.dispatchEvent(Vh), s = i.NONE;
    }
    function Pe(L) {
      let Q;
      switch (L.button) {
        case 0:
          Q = n.mouseButtons.LEFT;
          break;
        case 1:
          Q = n.mouseButtons.MIDDLE;
          break;
        case 2:
          Q = n.mouseButtons.RIGHT;
          break;
        default:
          Q = -1;
      }
      switch (Q) {
        case Wn.DOLLY:
          if (n.enableZoom === false) return;
          J(L), s = i.DOLLY;
          break;
        case Wn.ROTATE:
          if (L.ctrlKey || L.metaKey || L.shiftKey) {
            if (n.enablePan === false) return;
            K(L), s = i.PAN;
          } else {
            if (n.enableRotate === false) return;
            Y(L), s = i.ROTATE;
          }
          break;
        case Wn.PAN:
          if (L.ctrlKey || L.metaKey || L.shiftKey) {
            if (n.enableRotate === false) return;
            Y(L), s = i.ROTATE;
          } else {
            if (n.enablePan === false) return;
            K(L), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Do);
    }
    function Le(L) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === false) return;
          ie(L);
          break;
        case i.DOLLY:
          if (n.enableZoom === false) return;
          ee(L);
          break;
        case i.PAN:
          if (n.enablePan === false) return;
          be(L);
          break;
      }
    }
    function Ae(L) {
      n.enabled === false || n.enableZoom === false || s !== i.NONE || (L.preventDefault(), n.dispatchEvent(Do), oe(L), n.dispatchEvent(Vh));
    }
    function Be(L) {
      n.enabled === false || n.enablePan === false || V(L);
    }
    function Je(L) {
      switch (re(L), w.length) {
        case 1:
          switch (n.touches.ONE) {
            case gi.ROTATE:
              if (n.enableRotate === false) return;
              $(), s = i.TOUCH_ROTATE;
              break;
            case gi.PAN:
              if (n.enablePan === false) return;
              ce(), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case gi.DOLLY_PAN:
              if (n.enableZoom === false && n.enablePan === false) return;
              I(), s = i.TOUCH_DOLLY_PAN;
              break;
            case gi.DOLLY_ROTATE:
              if (n.enableZoom === false && n.enableRotate === false) return;
              Re(), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Do);
    }
    function P(L) {
      switch (re(L), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === false) return;
          Ie(L), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === false) return;
          le(L), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === false && n.enablePan === false) return;
          ne(L), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === false && n.enableRotate === false) return;
          j(L), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function E(L) {
      n.enabled !== false && L.preventDefault();
    }
    function G(L) {
      w.push(L);
    }
    function se(L) {
      delete S[L.pointerId];
      for (let Q = 0; Q < w.length; Q++) if (w[Q].pointerId == L.pointerId) {
        w.splice(Q, 1);
        return;
      }
    }
    function re(L) {
      let Q = S[L.pointerId];
      Q === void 0 && (Q = new W(), S[L.pointerId] = Q), Q.set(L.pageX, L.pageY);
    }
    function pe(L) {
      const Q = L.pointerId === w[0].pointerId ? w[1] : w[0];
      return S[Q.pointerId];
    }
    n.domElement.addEventListener("contextmenu", E), n.domElement.addEventListener("pointerdown", te), n.domElement.addEventListener("pointercancel", he), n.domElement.addEventListener("wheel", Ae, { passive: false }), this.update();
  }
}
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var Wh = function(r) {
  return URL.createObjectURL(new Blob([r], { type: "text/javascript" }));
};
try {
  URL.revokeObjectURL(Wh(""));
} catch {
  Wh = function(e) {
    return "data:application/javascript;charset=UTF-8," + encodeURI(e);
  };
}
var $t = Uint8Array, jn = Uint16Array, Sl = Uint32Array, Jd = new $t([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Qd = new $t([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), g_ = new $t([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), $d = function(r, e) {
  for (var t = new jn(31), n = 0; n < 31; ++n) t[n] = e += 1 << r[n - 1];
  for (var i = new Sl(t[30]), n = 1; n < 30; ++n) for (var s = t[n]; s < t[n + 1]; ++s) i[s] = s - t[n] << 5 | n;
  return [t, i];
}, ef = $d(Jd, 2), tf = ef[0], v_ = ef[1];
tf[28] = 258, v_[258] = 28;
var y_ = $d(Qd, 0), __ = y_[0], wl = new jn(32768);
for (var st = 0; st < 32768; ++st) {
  var Vn = (st & 43690) >>> 1 | (st & 21845) << 1;
  Vn = (Vn & 52428) >>> 2 | (Vn & 13107) << 2, Vn = (Vn & 61680) >>> 4 | (Vn & 3855) << 4, wl[st] = ((Vn & 65280) >>> 8 | (Vn & 255) << 8) >>> 1;
}
var Ys = (function(r, e, t) {
  for (var n = r.length, i = 0, s = new jn(e); i < n; ++i) ++s[r[i] - 1];
  var a = new jn(e);
  for (i = 0; i < e; ++i) a[i] = a[i - 1] + s[i - 1] << 1;
  var o;
  if (t) {
    o = new jn(1 << e);
    var l = 15 - e;
    for (i = 0; i < n; ++i) if (r[i]) for (var c = i << 4 | r[i], h = e - r[i], u = a[r[i] - 1]++ << h, d = u | (1 << h) - 1; u <= d; ++u) o[wl[u] >>> l] = c;
  } else for (o = new jn(n), i = 0; i < n; ++i) r[i] && (o[i] = wl[a[r[i] - 1]++] >>> 15 - r[i]);
  return o;
}), wr = new $t(288);
for (var st = 0; st < 144; ++st) wr[st] = 8;
for (var st = 144; st < 256; ++st) wr[st] = 9;
for (var st = 256; st < 280; ++st) wr[st] = 7;
for (var st = 280; st < 288; ++st) wr[st] = 8;
var nf = new $t(32);
for (var st = 0; st < 32; ++st) nf[st] = 5;
var M_ = Ys(wr, 9, 1), b_ = Ys(nf, 5, 1), Uo = function(r) {
  for (var e = r[0], t = 1; t < r.length; ++t) r[t] > e && (e = r[t]);
  return e;
}, on = function(r, e, t) {
  var n = e / 8 | 0;
  return (r[n] | r[n + 1] << 8) >> (e & 7) & t;
}, Fo = function(r, e) {
  var t = e / 8 | 0;
  return (r[t] | r[t + 1] << 8 | r[t + 2] << 16) >> (e & 7);
}, S_ = function(r) {
  return (r / 8 | 0) + (r & 7 && 1);
}, w_ = function(r, e, t) {
  (t == null || t > r.length) && (t = r.length);
  var n = new (r instanceof jn ? jn : r instanceof Sl ? Sl : $t)(t - e);
  return n.set(r.subarray(e, t)), n;
}, T_ = function(r, e, t) {
  var n = r.length;
  if (!n || t && !t.l && n < 5) return e || new $t(0);
  var i = !e || t, s = !t || t.i;
  t || (t = {}), e || (e = new $t(n * 3));
  var a = function(fe) {
    var I = e.length;
    if (fe > I) {
      var Re = new $t(Math.max(I * 2, fe));
      Re.set(e), e = Re;
    }
  }, o = t.f || 0, l = t.p || 0, c = t.b || 0, h = t.l, u = t.d, d = t.m, f = t.n, m = n * 8;
  do {
    if (!h) {
      t.f = o = on(r, l, 1);
      var g = on(r, l + 1, 3);
      if (l += 3, g) if (g == 1) h = M_, u = b_, d = 9, f = 5;
      else if (g == 2) {
        var v = on(r, l, 31) + 257, M = on(r, l + 10, 15) + 4, w = v + on(r, l + 5, 31) + 1;
        l += 14;
        for (var S = new $t(w), y = new $t(19), R = 0; R < M; ++R) y[g_[R]] = on(r, l + R * 3, 7);
        l += M * 3;
        for (var b = Uo(y), T = (1 << b) - 1, N = Ys(y, b, 1), R = 0; R < w; ) {
          var B = N[on(r, l, T)];
          l += B & 15;
          var x = B >>> 4;
          if (x < 16) S[R++] = x;
          else {
            var D = 0, O = 0;
            for (x == 16 ? (O = 3 + on(r, l, 3), l += 2, D = S[R - 1]) : x == 17 ? (O = 3 + on(r, l, 7), l += 3) : x == 18 && (O = 11 + on(r, l, 127), l += 7); O--; ) S[R++] = D;
          }
        }
        var k = S.subarray(0, v), Y = S.subarray(v);
        d = Uo(k), f = Uo(Y), h = Ys(k, d, 1), u = Ys(Y, f, 1);
      } else throw "invalid block type";
      else {
        var x = S_(l) + 4, p = r[x - 4] | r[x - 3] << 8, _ = x + p;
        if (_ > n) {
          if (s) throw "unexpected EOF";
          break;
        }
        i && a(c + p), e.set(r.subarray(x, _), c), t.b = c += p, t.p = l = _ * 8;
        continue;
      }
      if (l > m) {
        if (s) throw "unexpected EOF";
        break;
      }
    }
    i && a(c + 131072);
    for (var J = (1 << d) - 1, K = (1 << f) - 1, ie = l; ; ie = l) {
      var D = h[Fo(r, l) & J], ee = D >>> 4;
      if (l += D & 15, l > m) {
        if (s) throw "unexpected EOF";
        break;
      }
      if (!D) throw "invalid length/literal";
      if (ee < 256) e[c++] = ee;
      else if (ee == 256) {
        ie = l, h = null;
        break;
      } else {
        var be = ee - 254;
        if (ee > 264) {
          var R = ee - 257, oe = Jd[R];
          be = on(r, l, (1 << oe) - 1) + tf[R], l += oe;
        }
        var V = u[Fo(r, l) & K], $ = V >>> 4;
        if (!V) throw "invalid distance";
        l += V & 15;
        var Y = __[$];
        if ($ > 3) {
          var oe = Qd[$];
          Y += Fo(r, l) & (1 << oe) - 1, l += oe;
        }
        if (l > m) {
          if (s) throw "unexpected EOF";
          break;
        }
        i && a(c + 131072);
        for (var ce = c + be; c < ce; c += 4) e[c] = e[c - Y], e[c + 1] = e[c + 1 - Y], e[c + 2] = e[c + 2 - Y], e[c + 3] = e[c + 3 - Y];
        c = ce;
      }
    }
    t.l = h, t.p = ie, t.b = c, h && (o = 1, t.m = d, t.d = u, t.n = f);
  } while (!o);
  return c == e.length ? e : w_(e, 0, c);
}, E_ = new $t(0), A_ = function(r) {
  if ((r[0] & 15) != 8 || r[0] >>> 4 > 7 || (r[0] << 8 | r[1]) % 31) throw "invalid zlib data";
  if (r[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
function R_(r, e) {
  return T_((A_(r), r.subarray(2, -4)), e);
}
var C_ = typeof TextDecoder < "u" && new TextDecoder(), P_ = 0;
try {
  C_.decode(E_, { stream: true }), P_ = 1;
} catch {
}
function sf(r, e, t) {
  const n = t.length - r - 1;
  if (e >= t[n]) return n - 1;
  if (e <= t[r]) return r;
  let i = r, s = n, a = Math.floor((i + s) / 2);
  for (; e < t[a] || e >= t[a + 1]; ) e < t[a] ? s = a : i = a, a = Math.floor((i + s) / 2);
  return a;
}
function L_(r, e, t, n) {
  const i = [], s = [], a = [];
  i[0] = 1;
  for (let o = 1; o <= t; ++o) {
    s[o] = e - n[r + 1 - o], a[o] = n[r + o] - e;
    let l = 0;
    for (let c = 0; c < o; ++c) {
      const h = a[c + 1], u = s[o - c], d = i[c] / (h + u);
      i[c] = l + h * d, l = u * d;
    }
    i[o] = l;
  }
  return i;
}
function I_(r, e, t, n) {
  const i = sf(r, n, e), s = L_(i, n, r, e), a = new $e(0, 0, 0, 0);
  for (let o = 0; o <= r; ++o) {
    const l = t[i - r + o], c = s[o], h = l.w * c;
    a.x += l.x * h, a.y += l.y * h, a.z += l.z * h, a.w += l.w * c;
  }
  return a;
}
function D_(r, e, t, n, i) {
  const s = [];
  for (let u = 0; u <= t; ++u) s[u] = 0;
  const a = [];
  for (let u = 0; u <= n; ++u) a[u] = s.slice(0);
  const o = [];
  for (let u = 0; u <= t; ++u) o[u] = s.slice(0);
  o[0][0] = 1;
  const l = s.slice(0), c = s.slice(0);
  for (let u = 1; u <= t; ++u) {
    l[u] = e - i[r + 1 - u], c[u] = i[r + u] - e;
    let d = 0;
    for (let f = 0; f < u; ++f) {
      const m = c[f + 1], g = l[u - f];
      o[u][f] = m + g;
      const x = o[f][u - 1] / o[u][f];
      o[f][u] = d + m * x, d = g * x;
    }
    o[u][u] = d;
  }
  for (let u = 0; u <= t; ++u) a[0][u] = o[u][t];
  for (let u = 0; u <= t; ++u) {
    let d = 0, f = 1;
    const m = [];
    for (let g = 0; g <= t; ++g) m[g] = s.slice(0);
    m[0][0] = 1;
    for (let g = 1; g <= n; ++g) {
      let x = 0;
      const p = u - g, _ = t - g;
      u >= g && (m[f][0] = m[d][0] / o[_ + 1][p], x = m[f][0] * o[p][_]);
      const v = p >= -1 ? 1 : -p, M = u - 1 <= _ ? g - 1 : t - u;
      for (let S = v; S <= M; ++S) m[f][S] = (m[d][S] - m[d][S - 1]) / o[_ + 1][p + S], x += m[f][S] * o[p + S][_];
      u <= _ && (m[f][g] = -m[d][g - 1] / o[_ + 1][u], x += m[f][g] * o[u][_]), a[g][u] = x;
      const w = d;
      d = f, f = w;
    }
  }
  let h = t;
  for (let u = 1; u <= n; ++u) {
    for (let d = 0; d <= t; ++d) a[u][d] *= h;
    h *= t - u;
  }
  return a;
}
function U_(r, e, t, n, i) {
  const s = i < r ? i : r, a = [], o = sf(r, n, e), l = D_(o, n, r, s, e), c = [];
  for (let h = 0; h < t.length; ++h) {
    const u = t[h].clone(), d = u.w;
    u.x *= d, u.y *= d, u.z *= d, c[h] = u;
  }
  for (let h = 0; h <= s; ++h) {
    const u = c[o - r].clone().multiplyScalar(l[h][0]);
    for (let d = 1; d <= r; ++d) u.add(c[o - r + d].clone().multiplyScalar(l[h][d]));
    a[h] = u;
  }
  for (let h = s + 1; h <= i + 1; ++h) a[h] = new $e(0, 0, 0);
  return a;
}
function F_(r, e) {
  let t = 1;
  for (let i = 2; i <= r; ++i) t *= i;
  let n = 1;
  for (let i = 2; i <= e; ++i) n *= i;
  for (let i = 2; i <= r - e; ++i) n *= i;
  return t / n;
}
function O_(r) {
  const e = r.length, t = [], n = [];
  for (let s = 0; s < e; ++s) {
    const a = r[s];
    t[s] = new A(a.x, a.y, a.z), n[s] = a.w;
  }
  const i = [];
  for (let s = 0; s < e; ++s) {
    const a = t[s].clone();
    for (let o = 1; o <= s; ++o) a.sub(i[s - o].clone().multiplyScalar(F_(s, o) * n[o]));
    i[s] = a.divideScalar(n[0]);
  }
  return i;
}
function N_(r, e, t, n, i) {
  const s = U_(r, e, t, n, i);
  return O_(s);
}
class B_ extends tn {
  constructor(e, t, n, i, s) {
    super(), this.degree = e, this.knots = t, this.controlPoints = [], this.startKnot = i || 0, this.endKnot = s || this.knots.length - 1;
    for (let a = 0; a < n.length; ++a) {
      const o = n[a];
      this.controlPoints[a] = new $e(o.x, o.y, o.z, o.w);
    }
  }
  getPoint(e, t = new A()) {
    const n = t, i = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot]), s = I_(this.degree, this.knots, this.controlPoints, i);
    return s.w !== 1 && s.divideScalar(s.w), n.set(s.x, s.y, s.z);
  }
  getTangent(e, t = new A()) {
    const n = t, i = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]), s = N_(this.degree, this.knots, this.controlPoints, i, 1);
    return n.copy(s[1]).normalize(), n;
  }
}
let Ye, pt, Bt;
class z_ extends kt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = s.path === "" ? Ca.extractUrlBase(e) : s.path, o = new vn(this.manager);
    o.setPath(s.path), o.setResponseType("arraybuffer"), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(l) {
      try {
        t(s.parse(l, a));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e, t) {
    if (X_(e)) Ye = new W_().parse(e);
    else {
      const i = lf(e);
      if (!q_(i)) throw new Error("THREE.FBXLoader: Unknown format.");
      if (qh(i) < 7e3) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + qh(i));
      Ye = new V_().parse(i);
    }
    const n = new Bd(this.manager).setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
    return new k_(n, this.manager).parse(Ye);
  }
}
class k_ {
  constructor(e, t) {
    this.textureLoader = e, this.manager = t;
  }
  parse() {
    pt = this.parseConnections();
    const e = this.parseImages(), t = this.parseTextures(e), n = this.parseMaterials(t), i = this.parseDeformers(), s = new H_().parse(i);
    return this.parseScene(i, s, n), Bt;
  }
  parseConnections() {
    const e = /* @__PURE__ */ new Map();
    return "Connections" in Ye && Ye.Connections.connections.forEach(function(n) {
      const i = n[0], s = n[1], a = n[2];
      e.has(i) || e.set(i, { parents: [], children: [] });
      const o = { ID: s, relationship: a };
      e.get(i).parents.push(o), e.has(s) || e.set(s, { parents: [], children: [] });
      const l = { ID: i, relationship: a };
      e.get(s).children.push(l);
    }), e;
  }
  parseImages() {
    const e = {}, t = {};
    if ("Video" in Ye.Objects) {
      const n = Ye.Objects.Video;
      for (const i in n) {
        const s = n[i], a = parseInt(i);
        if (e[a] = s.RelativeFilename || s.Filename, "Content" in s) {
          const o = s.Content instanceof ArrayBuffer && s.Content.byteLength > 0, l = typeof s.Content == "string" && s.Content !== "";
          if (o || l) {
            const c = this.parseImage(n[i]);
            t[s.RelativeFilename || s.Filename] = c;
          }
        }
      }
    }
    for (const n in e) {
      const i = e[n];
      t[i] !== void 0 ? e[n] = t[i] : e[n] = e[n].split("\\").pop();
    }
    return e;
  }
  parseImage(e) {
    const t = e.Content, n = e.RelativeFilename || e.Filename, i = n.slice(n.lastIndexOf(".") + 1).toLowerCase();
    let s;
    switch (i) {
      case "bmp":
        s = "image/bmp";
        break;
      case "jpg":
      case "jpeg":
        s = "image/jpeg";
        break;
      case "png":
        s = "image/png";
        break;
      case "tif":
        s = "image/tiff";
        break;
      case "tga":
        this.manager.getHandler(".tga") === null && console.warn("FBXLoader: TGA loader not found, skipping ", n), s = "image/tga";
        break;
      default:
        console.warn('FBXLoader: Image type "' + i + '" is not supported.');
        return;
    }
    if (typeof t == "string") return "data:" + s + ";base64," + t;
    {
      const a = new Uint8Array(t);
      return window.URL.createObjectURL(new Blob([a], { type: s }));
    }
  }
  parseTextures(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Texture" in Ye.Objects) {
      const n = Ye.Objects.Texture;
      for (const i in n) {
        const s = this.parseTexture(n[i], e);
        t.set(parseInt(i), s);
      }
    }
    return t;
  }
  parseTexture(e, t) {
    const n = this.loadTexture(e, t);
    n.ID = e.id, n.name = e.attrName;
    const i = e.WrapModeU, s = e.WrapModeV, a = i !== void 0 ? i.value : 0, o = s !== void 0 ? s.value : 0;
    if (n.wrapS = a === 0 ? Un : Tt, n.wrapT = o === 0 ? Un : Tt, "Scaling" in e) {
      const l = e.Scaling.value;
      n.repeat.x = l[0], n.repeat.y = l[1];
    }
    if ("Translation" in e) {
      const l = e.Translation.value;
      n.offset.x = l[0], n.offset.y = l[1];
    }
    return n;
  }
  loadTexture(e, t) {
    let n;
    const i = this.textureLoader.path, s = pt.get(e.id).children;
    s !== void 0 && s.length > 0 && t[s[0].ID] !== void 0 && (n = t[s[0].ID], (n.indexOf("blob:") === 0 || n.indexOf("data:") === 0) && this.textureLoader.setPath(void 0));
    let a;
    const o = e.FileName.slice(-3).toLowerCase();
    if (o === "tga") {
      const l = this.manager.getHandler(".tga");
      l === null ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", e.RelativeFilename), a = new rt()) : (l.setPath(this.textureLoader.path), a = l.load(n));
    } else o === "psd" ? (console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", e.RelativeFilename), a = new rt()) : a = this.textureLoader.load(n);
    return this.textureLoader.setPath(i), a;
  }
  parseMaterials(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Material" in Ye.Objects) {
      const n = Ye.Objects.Material;
      for (const i in n) {
        const s = this.parseMaterial(n[i], e);
        s !== null && t.set(parseInt(i), s);
      }
    }
    return t;
  }
  parseMaterial(e, t) {
    const n = e.id, i = e.attrName;
    let s = e.ShadingModel;
    if (typeof s == "object" && (s = s.value), !pt.has(n)) return null;
    const a = this.parseParameters(e, t, n);
    let o;
    switch (s.toLowerCase()) {
      case "phong":
        o = new qs();
        break;
      case "lambert":
        o = new Jl();
        break;
      default:
        console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', s), o = new qs();
        break;
    }
    return o.setValues(a), o.name = i, o;
  }
  parseParameters(e, t, n) {
    const i = {};
    e.BumpFactor && (i.bumpScale = e.BumpFactor.value), e.Diffuse ? i.color = new ue().fromArray(e.Diffuse.value).convertSRGBToLinear() : e.DiffuseColor && (e.DiffuseColor.type === "Color" || e.DiffuseColor.type === "ColorRGB") && (i.color = new ue().fromArray(e.DiffuseColor.value).convertSRGBToLinear()), e.DisplacementFactor && (i.displacementScale = e.DisplacementFactor.value), e.Emissive ? i.emissive = new ue().fromArray(e.Emissive.value).convertSRGBToLinear() : e.EmissiveColor && (e.EmissiveColor.type === "Color" || e.EmissiveColor.type === "ColorRGB") && (i.emissive = new ue().fromArray(e.EmissiveColor.value).convertSRGBToLinear()), e.EmissiveFactor && (i.emissiveIntensity = parseFloat(e.EmissiveFactor.value)), e.Opacity && (i.opacity = parseFloat(e.Opacity.value)), i.opacity < 1 && (i.transparent = true), e.ReflectionFactor && (i.reflectivity = e.ReflectionFactor.value), e.Shininess && (i.shininess = e.Shininess.value), e.Specular ? i.specular = new ue().fromArray(e.Specular.value).convertSRGBToLinear() : e.SpecularColor && e.SpecularColor.type === "Color" && (i.specular = new ue().fromArray(e.SpecularColor.value).convertSRGBToLinear());
    const s = this;
    return pt.get(n).children.forEach(function(a) {
      const o = a.relationship;
      switch (o) {
        case "Bump":
          i.bumpMap = s.getTexture(t, a.ID);
          break;
        case "Maya|TEX_ao_map":
          i.aoMap = s.getTexture(t, a.ID);
          break;
        case "DiffuseColor":
        case "Maya|TEX_color_map":
          i.map = s.getTexture(t, a.ID), i.map !== void 0 && (i.map.colorSpace = Ue);
          break;
        case "DisplacementColor":
          i.displacementMap = s.getTexture(t, a.ID);
          break;
        case "EmissiveColor":
          i.emissiveMap = s.getTexture(t, a.ID), i.emissiveMap !== void 0 && (i.emissiveMap.colorSpace = Ue);
          break;
        case "NormalMap":
        case "Maya|TEX_normal_map":
          i.normalMap = s.getTexture(t, a.ID);
          break;
        case "ReflectionColor":
          i.envMap = s.getTexture(t, a.ID), i.envMap !== void 0 && (i.envMap.mapping = ds, i.envMap.colorSpace = Ue);
          break;
        case "SpecularColor":
          i.specularMap = s.getTexture(t, a.ID), i.specularMap !== void 0 && (i.specularMap.colorSpace = Ue);
          break;
        case "TransparentColor":
        case "TransparencyFactor":
          i.alphaMap = s.getTexture(t, a.ID), i.transparent = true;
          break;
        case "AmbientColor":
        case "ShininessExponent":
        case "SpecularFactor":
        case "VectorDisplacementColor":
        default:
          console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", o);
          break;
      }
    }), i;
  }
  getTexture(e, t) {
    return "LayeredTexture" in Ye.Objects && t in Ye.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), t = pt.get(t).children[0].ID), e.get(t);
  }
  parseDeformers() {
    const e = {}, t = {};
    if ("Deformer" in Ye.Objects) {
      const n = Ye.Objects.Deformer;
      for (const i in n) {
        const s = n[i], a = pt.get(parseInt(i));
        if (s.attrType === "Skin") {
          const o = this.parseSkeleton(a, n);
          o.ID = i, a.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), o.geometryID = a.parents[0].ID, e[i] = o;
        } else if (s.attrType === "BlendShape") {
          const o = { id: i };
          o.rawTargets = this.parseMorphTargets(a, n), o.id = i, a.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), t[i] = o;
        }
      }
    }
    return { skeletons: e, morphTargets: t };
  }
  parseSkeleton(e, t) {
    const n = [];
    return e.children.forEach(function(i) {
      const s = t[i.ID];
      if (s.attrType !== "Cluster") return;
      const a = { ID: i.ID, indices: [], weights: [], transformLink: new _e().fromArray(s.TransformLink.a) };
      "Indexes" in s && (a.indices = s.Indexes.a, a.weights = s.Weights.a), n.push(a);
    }), { rawBones: n, bones: [] };
  }
  parseMorphTargets(e, t) {
    const n = [];
    for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i], a = t[s.ID], o = { name: a.attrName, initialWeight: a.DeformPercent, id: a.id, fullWeights: a.FullWeights.a };
      if (a.attrType !== "BlendShapeChannel") return;
      o.geoID = pt.get(parseInt(s.ID)).children.filter(function(l) {
        return l.relationship === void 0;
      })[0].ID, n.push(o);
    }
    return n;
  }
  parseScene(e, t, n) {
    Bt = new Yn();
    const i = this.parseModels(e.skeletons, t, n), s = Ye.Objects.Model, a = this;
    i.forEach(function(l) {
      const c = s[l.ID];
      a.setLookAtProperties(l, c), pt.get(l.ID).parents.forEach(function(u) {
        const d = i.get(u.ID);
        d !== void 0 && d.add(l);
      }), l.parent === null && Bt.add(l);
    }), this.bindSkeleton(e.skeletons, t, i), this.createAmbientLight(), Bt.traverse(function(l) {
      if (l.userData.transformData) {
        l.parent && (l.userData.transformData.parentMatrix = l.parent.matrix, l.userData.transformData.parentMatrixWorld = l.parent.matrixWorld);
        const c = af(l.userData.transformData);
        l.applyMatrix4(c), l.updateWorldMatrix();
      }
    });
    const o = new G_().parse();
    Bt.children.length === 1 && Bt.children[0].isGroup && (Bt.children[0].animations = o, Bt = Bt.children[0]), Bt.animations = o;
  }
  parseModels(e, t, n) {
    const i = /* @__PURE__ */ new Map(), s = Ye.Objects.Model;
    for (const a in s) {
      const o = parseInt(a), l = s[a], c = pt.get(o);
      let h = this.buildSkeleton(c, e, o, l.attrName);
      if (!h) {
        switch (l.attrType) {
          case "Camera":
            h = this.createCamera(c);
            break;
          case "Light":
            h = this.createLight(c);
            break;
          case "Mesh":
            h = this.createMesh(c, t, n);
            break;
          case "NurbsCurve":
            h = this.createCurve(c, t);
            break;
          case "LimbNode":
          case "Root":
            h = new tr();
            break;
          case "Null":
          default:
            h = new Yn();
            break;
        }
        h.name = l.attrName ? je.sanitizeNodeName(l.attrName) : "", h.ID = o;
      }
      this.getTransformData(h, l), i.set(o, h);
    }
    return i;
  }
  buildSkeleton(e, t, n, i) {
    let s = null;
    return e.parents.forEach(function(a) {
      for (const o in t) {
        const l = t[o];
        l.rawBones.forEach(function(c, h) {
          if (c.ID === a.ID) {
            const u = s;
            s = new tr(), s.matrixWorld.copy(c.transformLink), s.name = i ? je.sanitizeNodeName(i) : "", s.ID = n, l.bones[h] = s, u !== null && s.add(u);
          }
        });
      }
    }), s;
  }
  createCamera(e) {
    let t, n;
    if (e.children.forEach(function(i) {
      const s = Ye.Objects.NodeAttribute[i.ID];
      s !== void 0 && (n = s);
    }), n === void 0) t = new Ke();
    else {
      let i = 0;
      n.CameraProjectionType !== void 0 && n.CameraProjectionType.value === 1 && (i = 1);
      let s = 1;
      n.NearPlane !== void 0 && (s = n.NearPlane.value / 1e3);
      let a = 1e3;
      n.FarPlane !== void 0 && (a = n.FarPlane.value / 1e3);
      let o = window.innerWidth, l = window.innerHeight;
      n.AspectWidth !== void 0 && n.AspectHeight !== void 0 && (o = n.AspectWidth.value, l = n.AspectHeight.value);
      const c = o / l;
      let h = 45;
      n.FieldOfView !== void 0 && (h = n.FieldOfView.value);
      const u = n.FocalLength ? n.FocalLength.value : null;
      switch (i) {
        case 0:
          t = new yt(h, c, s, a), u !== null && t.setFocalLength(u);
          break;
        case 1:
          t = new Ms(-o / 2, o / 2, l / 2, -l / 2, s, a);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown camera type " + i + "."), t = new Ke();
          break;
      }
    }
    return t;
  }
  createLight(e) {
    let t, n;
    if (e.children.forEach(function(i) {
      const s = Ye.Objects.NodeAttribute[i.ID];
      s !== void 0 && (n = s);
    }), n === void 0) t = new Ke();
    else {
      let i;
      n.LightType === void 0 ? i = 0 : i = n.LightType.value;
      let s = 16777215;
      n.Color !== void 0 && (s = new ue().fromArray(n.Color.value).convertSRGBToLinear());
      let a = n.Intensity === void 0 ? 1 : n.Intensity.value / 100;
      n.CastLightOnObject !== void 0 && n.CastLightOnObject.value === 0 && (a = 0);
      let o = 0;
      n.FarAttenuationEnd !== void 0 && (n.EnableFarAttenuation !== void 0 && n.EnableFarAttenuation.value === 0 ? o = 0 : o = n.FarAttenuationEnd.value);
      const l = 1;
      switch (i) {
        case 0:
          t = new Ra(s, a, o, l);
          break;
        case 1:
          t = new rc(s, a);
          break;
        case 2:
          let c = Math.PI / 3;
          n.InnerAngle !== void 0 && (c = Qt.degToRad(n.InnerAngle.value));
          let h = 0;
          n.OuterAngle !== void 0 && (h = Qt.degToRad(n.OuterAngle.value), h = Math.max(h, 1)), t = new sc(s, a, o, c, h, l);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown light type " + n.LightType.value + ", defaulting to a PointLight."), t = new Ra(s, a);
          break;
      }
      n.CastShadows !== void 0 && n.CastShadows.value === 1 && (t.castShadow = true);
    }
    return t;
  }
  createMesh(e, t, n) {
    let i, s = null, a = null;
    const o = [];
    return e.children.forEach(function(l) {
      t.has(l.ID) && (s = t.get(l.ID)), n.has(l.ID) && o.push(n.get(l.ID));
    }), o.length > 1 ? a = o : o.length > 0 ? a = o[0] : (a = new qs({ color: 13421772 }), o.push(a)), "color" in s.attributes && o.forEach(function(l) {
      l.vertexColors = true;
    }), s.FBX_Deformer ? (i = new Hl(s, a), i.normalizeSkinWeights()) : i = new vt(s, a), i;
  }
  createCurve(e, t) {
    const n = e.children.reduce(function(s, a) {
      return t.has(a.ID) && (s = t.get(a.ID)), s;
    }, null), i = new Lt({ color: 3342591, linewidth: 1 });
    return new Fn(n, i);
  }
  getTransformData(e, t) {
    const n = {};
    "InheritType" in t && (n.inheritType = parseInt(t.InheritType.value)), "RotationOrder" in t ? n.eulerOrder = of(t.RotationOrder.value) : n.eulerOrder = "ZYX", "Lcl_Translation" in t && (n.translation = t.Lcl_Translation.value), "PreRotation" in t && (n.preRotation = t.PreRotation.value), "Lcl_Rotation" in t && (n.rotation = t.Lcl_Rotation.value), "PostRotation" in t && (n.postRotation = t.PostRotation.value), "Lcl_Scaling" in t && (n.scale = t.Lcl_Scaling.value), "ScalingOffset" in t && (n.scalingOffset = t.ScalingOffset.value), "ScalingPivot" in t && (n.scalingPivot = t.ScalingPivot.value), "RotationOffset" in t && (n.rotationOffset = t.RotationOffset.value), "RotationPivot" in t && (n.rotationPivot = t.RotationPivot.value), e.userData.transformData = n;
  }
  setLookAtProperties(e, t) {
    "LookAtProperty" in t && pt.get(e.ID).children.forEach(function(i) {
      if (i.relationship === "LookAtProperty") {
        const s = Ye.Objects.Model[i.ID];
        if ("Lcl_Translation" in s) {
          const a = s.Lcl_Translation.value;
          e.target !== void 0 ? (e.target.position.fromArray(a), Bt.add(e.target)) : e.lookAt(new A().fromArray(a));
        }
      }
    });
  }
  bindSkeleton(e, t, n) {
    const i = this.parsePoseNodes();
    for (const s in e) {
      const a = e[s];
      pt.get(parseInt(a.ID)).parents.forEach(function(l) {
        if (t.has(l.ID)) {
          const c = l.ID;
          pt.get(c).parents.forEach(function(u) {
            n.has(u.ID) && n.get(u.ID).bind(new hr(a.bones), i[u.ID]);
          });
        }
      });
    }
  }
  parsePoseNodes() {
    const e = {};
    if ("Pose" in Ye.Objects) {
      const t = Ye.Objects.Pose;
      for (const n in t) if (t[n].attrType === "BindPose" && t[n].NbPoseNodes > 0) {
        const i = t[n].PoseNode;
        Array.isArray(i) ? i.forEach(function(s) {
          e[s.Node] = new _e().fromArray(s.Matrix.a);
        }) : e[i.Node] = new _e().fromArray(i.Matrix.a);
      }
    }
    return e;
  }
  createAmbientLight() {
    if ("GlobalSettings" in Ye && "AmbientColor" in Ye.GlobalSettings) {
      const e = Ye.GlobalSettings.AmbientColor.value, t = e[0], n = e[1], i = e[2];
      if (t !== 0 || n !== 0 || i !== 0) {
        const s = new ue(t, n, i).convertSRGBToLinear();
        Bt.add(new ac(s, 1));
      }
    }
  }
}
class H_ {
  constructor() {
    this.negativeMaterialIndices = false;
  }
  parse(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Geometry" in Ye.Objects) {
      const n = Ye.Objects.Geometry;
      for (const i in n) {
        const s = pt.get(parseInt(i)), a = this.parseGeometry(s, n[i], e);
        t.set(parseInt(i), a);
      }
    }
    return this.negativeMaterialIndices === true && console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."), t;
  }
  parseGeometry(e, t, n) {
    switch (t.attrType) {
      case "Mesh":
        return this.parseMeshGeometry(e, t, n);
      case "NurbsCurve":
        return this.parseNurbsGeometry(t);
    }
  }
  parseMeshGeometry(e, t, n) {
    const i = n.skeletons, s = [], a = e.parents.map(function(u) {
      return Ye.Objects.Model[u.ID];
    });
    if (a.length === 0) return;
    const o = e.children.reduce(function(u, d) {
      return i[d.ID] !== void 0 && (u = i[d.ID]), u;
    }, null);
    e.children.forEach(function(u) {
      n.morphTargets[u.ID] !== void 0 && s.push(n.morphTargets[u.ID]);
    });
    const l = a[0], c = {};
    "RotationOrder" in l && (c.eulerOrder = of(l.RotationOrder.value)), "InheritType" in l && (c.inheritType = parseInt(l.InheritType.value)), "GeometricTranslation" in l && (c.translation = l.GeometricTranslation.value), "GeometricRotation" in l && (c.rotation = l.GeometricRotation.value), "GeometricScaling" in l && (c.scale = l.GeometricScaling.value);
    const h = af(c);
    return this.genGeometry(t, o, s, h);
  }
  genGeometry(e, t, n, i) {
    const s = new Ne();
    e.attrName && (s.name = e.attrName);
    const a = this.parseGeoNode(e, t), o = this.genBuffers(a), l = new xe(o.vertex, 3);
    if (l.applyMatrix4(i), s.setAttribute("position", l), o.colors.length > 0 && s.setAttribute("color", new xe(o.colors, 3)), t && (s.setAttribute("skinIndex", new Na(o.weightsIndices, 4)), s.setAttribute("skinWeight", new xe(o.vertexWeights, 4)), s.FBX_Deformer = t), o.normal.length > 0) {
      const c = new We().getNormalMatrix(i), h = new xe(o.normal, 3);
      h.applyNormalMatrix(c), s.setAttribute("normal", h);
    }
    if (o.uvs.forEach(function(c, h) {
      const u = h === 0 ? "uv" : `uv${h}`;
      s.setAttribute(u, new xe(o.uvs[h], 2));
    }), a.material && a.material.mappingType !== "AllSame") {
      let c = o.materialIndex[0], h = 0;
      if (o.materialIndex.forEach(function(u, d) {
        u !== c && (s.addGroup(h, d - h, c), c = u, h = d);
      }), s.groups.length > 0) {
        const u = s.groups[s.groups.length - 1], d = u.start + u.count;
        d !== o.materialIndex.length && s.addGroup(d, o.materialIndex.length - d, c);
      }
      s.groups.length === 0 && s.addGroup(0, o.materialIndex.length, o.materialIndex[0]);
    }
    return this.addMorphTargets(s, e, n, i), s;
  }
  parseGeoNode(e, t) {
    const n = {};
    if (n.vertexPositions = e.Vertices !== void 0 ? e.Vertices.a : [], n.vertexIndices = e.PolygonVertexIndex !== void 0 ? e.PolygonVertexIndex.a : [], e.LayerElementColor && (n.color = this.parseVertexColors(e.LayerElementColor[0])), e.LayerElementMaterial && (n.material = this.parseMaterialIndices(e.LayerElementMaterial[0])), e.LayerElementNormal && (n.normal = this.parseNormals(e.LayerElementNormal[0])), e.LayerElementUV) {
      n.uv = [];
      let i = 0;
      for (; e.LayerElementUV[i]; ) e.LayerElementUV[i].UV && n.uv.push(this.parseUVs(e.LayerElementUV[i])), i++;
    }
    return n.weightTable = {}, t !== null && (n.skeleton = t, t.rawBones.forEach(function(i, s) {
      i.indices.forEach(function(a, o) {
        n.weightTable[a] === void 0 && (n.weightTable[a] = []), n.weightTable[a].push({ id: s, weight: i.weights[o] });
      });
    })), n;
  }
  genBuffers(e) {
    const t = { vertex: [], normal: [], colors: [], uvs: [], materialIndex: [], vertexWeights: [], weightsIndices: [] };
    let n = 0, i = 0, s = false, a = [], o = [], l = [], c = [], h = [], u = [];
    const d = this;
    return e.vertexIndices.forEach(function(f, m) {
      let g, x = false;
      f < 0 && (f = f ^ -1, x = true);
      let p = [], _ = [];
      if (a.push(f * 3, f * 3 + 1, f * 3 + 2), e.color) {
        const v = fa(m, n, f, e.color);
        l.push(v[0], v[1], v[2]);
      }
      if (e.skeleton) {
        if (e.weightTable[f] !== void 0 && e.weightTable[f].forEach(function(v) {
          _.push(v.weight), p.push(v.id);
        }), _.length > 4) {
          s || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), s = true);
          const v = [0, 0, 0, 0], M = [0, 0, 0, 0];
          _.forEach(function(w, S) {
            let y = w, R = p[S];
            M.forEach(function(b, T, N) {
              if (y > b) {
                N[T] = y, y = b;
                const B = v[T];
                v[T] = R, R = B;
              }
            });
          }), p = v, _ = M;
        }
        for (; _.length < 4; ) _.push(0), p.push(0);
        for (let v = 0; v < 4; ++v) h.push(_[v]), u.push(p[v]);
      }
      if (e.normal) {
        const v = fa(m, n, f, e.normal);
        o.push(v[0], v[1], v[2]);
      }
      e.material && e.material.mappingType !== "AllSame" && (g = fa(m, n, f, e.material)[0], g < 0 && (d.negativeMaterialIndices = true, g = 0)), e.uv && e.uv.forEach(function(v, M) {
        const w = fa(m, n, f, v);
        c[M] === void 0 && (c[M] = []), c[M].push(w[0]), c[M].push(w[1]);
      }), i++, x && (i > 4 && console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."), d.genFace(t, e, a, g, o, l, c, h, u, i), n++, i = 0, a = [], o = [], l = [], c = [], h = [], u = []);
    }), t;
  }
  genFace(e, t, n, i, s, a, o, l, c, h) {
    for (let u = 2; u < h; u++) e.vertex.push(t.vertexPositions[n[0]]), e.vertex.push(t.vertexPositions[n[1]]), e.vertex.push(t.vertexPositions[n[2]]), e.vertex.push(t.vertexPositions[n[(u - 1) * 3]]), e.vertex.push(t.vertexPositions[n[(u - 1) * 3 + 1]]), e.vertex.push(t.vertexPositions[n[(u - 1) * 3 + 2]]), e.vertex.push(t.vertexPositions[n[u * 3]]), e.vertex.push(t.vertexPositions[n[u * 3 + 1]]), e.vertex.push(t.vertexPositions[n[u * 3 + 2]]), t.skeleton && (e.vertexWeights.push(l[0]), e.vertexWeights.push(l[1]), e.vertexWeights.push(l[2]), e.vertexWeights.push(l[3]), e.vertexWeights.push(l[(u - 1) * 4]), e.vertexWeights.push(l[(u - 1) * 4 + 1]), e.vertexWeights.push(l[(u - 1) * 4 + 2]), e.vertexWeights.push(l[(u - 1) * 4 + 3]), e.vertexWeights.push(l[u * 4]), e.vertexWeights.push(l[u * 4 + 1]), e.vertexWeights.push(l[u * 4 + 2]), e.vertexWeights.push(l[u * 4 + 3]), e.weightsIndices.push(c[0]), e.weightsIndices.push(c[1]), e.weightsIndices.push(c[2]), e.weightsIndices.push(c[3]), e.weightsIndices.push(c[(u - 1) * 4]), e.weightsIndices.push(c[(u - 1) * 4 + 1]), e.weightsIndices.push(c[(u - 1) * 4 + 2]), e.weightsIndices.push(c[(u - 1) * 4 + 3]), e.weightsIndices.push(c[u * 4]), e.weightsIndices.push(c[u * 4 + 1]), e.weightsIndices.push(c[u * 4 + 2]), e.weightsIndices.push(c[u * 4 + 3])), t.color && (e.colors.push(a[0]), e.colors.push(a[1]), e.colors.push(a[2]), e.colors.push(a[(u - 1) * 3]), e.colors.push(a[(u - 1) * 3 + 1]), e.colors.push(a[(u - 1) * 3 + 2]), e.colors.push(a[u * 3]), e.colors.push(a[u * 3 + 1]), e.colors.push(a[u * 3 + 2])), t.material && t.material.mappingType !== "AllSame" && (e.materialIndex.push(i), e.materialIndex.push(i), e.materialIndex.push(i)), t.normal && (e.normal.push(s[0]), e.normal.push(s[1]), e.normal.push(s[2]), e.normal.push(s[(u - 1) * 3]), e.normal.push(s[(u - 1) * 3 + 1]), e.normal.push(s[(u - 1) * 3 + 2]), e.normal.push(s[u * 3]), e.normal.push(s[u * 3 + 1]), e.normal.push(s[u * 3 + 2])), t.uv && t.uv.forEach(function(d, f) {
      e.uvs[f] === void 0 && (e.uvs[f] = []), e.uvs[f].push(o[f][0]), e.uvs[f].push(o[f][1]), e.uvs[f].push(o[f][(u - 1) * 2]), e.uvs[f].push(o[f][(u - 1) * 2 + 1]), e.uvs[f].push(o[f][u * 2]), e.uvs[f].push(o[f][u * 2 + 1]);
    });
  }
  addMorphTargets(e, t, n, i) {
    if (n.length === 0) return;
    e.morphTargetsRelative = true, e.morphAttributes.position = [];
    const s = this;
    n.forEach(function(a) {
      a.rawTargets.forEach(function(o) {
        const l = Ye.Objects.Geometry[o.geoID];
        l !== void 0 && s.genMorphGeometry(e, t, l, i, o.name);
      });
    });
  }
  genMorphGeometry(e, t, n, i, s) {
    const a = t.PolygonVertexIndex !== void 0 ? t.PolygonVertexIndex.a : [], o = n.Vertices !== void 0 ? n.Vertices.a : [], l = n.Indexes !== void 0 ? n.Indexes.a : [], c = e.attributes.position.count * 3, h = new Float32Array(c);
    for (let m = 0; m < l.length; m++) {
      const g = l[m] * 3;
      h[g] = o[m * 3], h[g + 1] = o[m * 3 + 1], h[g + 2] = o[m * 3 + 2];
    }
    const u = { vertexIndices: a, vertexPositions: h }, d = this.genBuffers(u), f = new xe(d.vertex, 3);
    f.name = s || n.attrName, f.applyMatrix4(i), e.morphAttributes.position.push(f);
  }
  parseNormals(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.Normals.a;
    let s = [];
    return n === "IndexToDirect" && ("NormalIndex" in e ? s = e.NormalIndex.a : "NormalsIndex" in e && (s = e.NormalsIndex.a)), { dataSize: 3, buffer: i, indices: s, mappingType: t, referenceType: n };
  }
  parseUVs(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.UV.a;
    let s = [];
    return n === "IndexToDirect" && (s = e.UVIndex.a), { dataSize: 2, buffer: i, indices: s, mappingType: t, referenceType: n };
  }
  parseVertexColors(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.Colors.a;
    let s = [];
    n === "IndexToDirect" && (s = e.ColorIndex.a);
    for (let a = 0, o = new ue(); a < i.length; a += 4) o.fromArray(i, a).convertSRGBToLinear().toArray(i, a);
    return { dataSize: 4, buffer: i, indices: s, mappingType: t, referenceType: n };
  }
  parseMaterialIndices(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType;
    if (t === "NoMappingInformation") return { dataSize: 1, buffer: [0], indices: [0], mappingType: "AllSame", referenceType: n };
    const i = e.Materials.a, s = [];
    for (let a = 0; a < i.length; ++a) s.push(a);
    return { dataSize: 1, buffer: i, indices: s, mappingType: t, referenceType: n };
  }
  parseNurbsGeometry(e) {
    const t = parseInt(e.Order);
    if (isNaN(t)) return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id), new Ne();
    const n = t - 1, i = e.KnotVector.a, s = [], a = e.Points.a;
    for (let u = 0, d = a.length; u < d; u += 4) s.push(new $e().fromArray(a, u));
    let o, l;
    if (e.Form === "Closed") s.push(s[0]);
    else if (e.Form === "Periodic") {
      o = n, l = i.length - 1 - o;
      for (let u = 0; u < n; ++u) s.push(s[u]);
    }
    const h = new B_(n, i, s, o, l).getPoints(s.length * 12);
    return new Ne().setFromPoints(h);
  }
}
class G_ {
  parse() {
    const e = [], t = this.parseClips();
    if (t !== void 0) for (const n in t) {
      const i = t[n], s = this.addClip(i);
      e.push(s);
    }
    return e;
  }
  parseClips() {
    if (Ye.Objects.AnimationCurve === void 0) return;
    const e = this.parseAnimationCurveNodes();
    this.parseAnimationCurves(e);
    const t = this.parseAnimationLayers(e);
    return this.parseAnimStacks(t);
  }
  parseAnimationCurveNodes() {
    const e = Ye.Objects.AnimationCurveNode, t = /* @__PURE__ */ new Map();
    for (const n in e) {
      const i = e[n];
      if (i.attrName.match(/S|R|T|DeformPercent/) !== null) {
        const s = { id: i.id, attr: i.attrName, curves: {} };
        t.set(s.id, s);
      }
    }
    return t;
  }
  parseAnimationCurves(e) {
    const t = Ye.Objects.AnimationCurve;
    for (const n in t) {
      const i = { id: t[n].id, times: t[n].KeyTime.a.map(Y_), values: t[n].KeyValueFloat.a }, s = pt.get(i.id);
      if (s !== void 0) {
        const a = s.parents[0].ID, o = s.parents[0].relationship;
        o.match(/X/) ? e.get(a).curves.x = i : o.match(/Y/) ? e.get(a).curves.y = i : o.match(/Z/) ? e.get(a).curves.z = i : o.match(/DeformPercent/) && e.has(a) && (e.get(a).curves.morph = i);
      }
    }
  }
  parseAnimationLayers(e) {
    const t = Ye.Objects.AnimationLayer, n = /* @__PURE__ */ new Map();
    for (const i in t) {
      const s = [], a = pt.get(parseInt(i));
      a !== void 0 && (a.children.forEach(function(l, c) {
        if (e.has(l.ID)) {
          const h = e.get(l.ID);
          if (h.curves.x !== void 0 || h.curves.y !== void 0 || h.curves.z !== void 0) {
            if (s[c] === void 0) {
              const u = pt.get(l.ID).parents.filter(function(d) {
                return d.relationship !== void 0;
              })[0].ID;
              if (u !== void 0) {
                const d = Ye.Objects.Model[u.toString()];
                if (d === void 0) {
                  console.warn("THREE.FBXLoader: Encountered a unused curve.", l);
                  return;
                }
                const f = { modelName: d.attrName ? je.sanitizeNodeName(d.attrName) : "", ID: d.id, initialPosition: [0, 0, 0], initialRotation: [0, 0, 0], initialScale: [1, 1, 1] };
                Bt.traverse(function(m) {
                  m.ID === d.id && (f.transform = m.matrix, m.userData.transformData && (f.eulerOrder = m.userData.transformData.eulerOrder));
                }), f.transform || (f.transform = new _e()), "PreRotation" in d && (f.preRotation = d.PreRotation.value), "PostRotation" in d && (f.postRotation = d.PostRotation.value), s[c] = f;
              }
            }
            s[c] && (s[c][h.attr] = h);
          } else if (h.curves.morph !== void 0) {
            if (s[c] === void 0) {
              const u = pt.get(l.ID).parents.filter(function(p) {
                return p.relationship !== void 0;
              })[0].ID, d = pt.get(u).parents[0].ID, f = pt.get(d).parents[0].ID, m = pt.get(f).parents[0].ID, g = Ye.Objects.Model[m], x = { modelName: g.attrName ? je.sanitizeNodeName(g.attrName) : "", morphName: Ye.Objects.Deformer[u].attrName };
              s[c] = x;
            }
            s[c][h.attr] = h;
          }
        }
      }), n.set(parseInt(i), s));
    }
    return n;
  }
  parseAnimStacks(e) {
    const t = Ye.Objects.AnimationStack, n = {};
    for (const i in t) {
      const s = pt.get(parseInt(i)).children;
      s.length > 1 && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
      const a = e.get(s[0].ID);
      n[i] = { name: t[i].attrName, layer: a };
    }
    return n;
  }
  addClip(e) {
    let t = [];
    const n = this;
    return e.layer.forEach(function(i) {
      t = t.concat(n.generateTracks(i));
    }), new Di(e.name, -1, t);
  }
  generateTracks(e) {
    const t = [];
    let n = new A(), i = new mt(), s = new A();
    if (e.transform && e.transform.decompose(n, i, s), n = n.toArray(), i = new qt().setFromQuaternion(i, e.eulerOrder).toArray(), s = s.toArray(), e.T !== void 0 && Object.keys(e.T.curves).length > 0) {
      const a = this.generateVectorTrack(e.modelName, e.T.curves, n, "position");
      a !== void 0 && t.push(a);
    }
    if (e.R !== void 0 && Object.keys(e.R.curves).length > 0) {
      const a = this.generateRotationTrack(e.modelName, e.R.curves, i, e.preRotation, e.postRotation, e.eulerOrder);
      a !== void 0 && t.push(a);
    }
    if (e.S !== void 0 && Object.keys(e.S.curves).length > 0) {
      const a = this.generateVectorTrack(e.modelName, e.S.curves, s, "scale");
      a !== void 0 && t.push(a);
    }
    if (e.DeformPercent !== void 0) {
      const a = this.generateMorphTrack(e);
      a !== void 0 && t.push(a);
    }
    return t;
  }
  generateVectorTrack(e, t, n, i) {
    const s = this.getTimesForAllAxes(t), a = this.getKeyframeTrackValues(s, t, n);
    return new Ii(e + "." + i, s, a);
  }
  generateRotationTrack(e, t, n, i, s, a) {
    t.x !== void 0 && (this.interpolateRotations(t.x), t.x.values = t.x.values.map(Qt.degToRad)), t.y !== void 0 && (this.interpolateRotations(t.y), t.y.values = t.y.values.map(Qt.degToRad)), t.z !== void 0 && (this.interpolateRotations(t.z), t.z.values = t.z.values.map(Qt.degToRad));
    const o = this.getTimesForAllAxes(t), l = this.getKeyframeTrackValues(o, t, n);
    i !== void 0 && (i = i.map(Qt.degToRad), i.push(a), i = new qt().fromArray(i), i = new mt().setFromEuler(i)), s !== void 0 && (s = s.map(Qt.degToRad), s.push(a), s = new qt().fromArray(s), s = new mt().setFromEuler(s).invert());
    const c = new mt(), h = new qt(), u = [];
    for (let d = 0; d < l.length; d += 3) h.set(l[d], l[d + 1], l[d + 2], a), c.setFromEuler(h), i !== void 0 && c.premultiply(i), s !== void 0 && c.multiply(s), c.toArray(u, d / 3 * 4);
    return new si(e + ".quaternion", o, u);
  }
  generateMorphTrack(e) {
    const t = e.DeformPercent.curves.morph, n = t.values.map(function(s) {
      return s / 100;
    }), i = Bt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
    return new gs(e.modelName + ".morphTargetInfluences[" + i + "]", t.times, n);
  }
  getTimesForAllAxes(e) {
    let t = [];
    if (e.x !== void 0 && (t = t.concat(e.x.times)), e.y !== void 0 && (t = t.concat(e.y.times)), e.z !== void 0 && (t = t.concat(e.z.times)), t = t.sort(function(n, i) {
      return n - i;
    }), t.length > 1) {
      let n = 1, i = t[0];
      for (let s = 1; s < t.length; s++) {
        const a = t[s];
        a !== i && (t[n] = a, i = a, n++);
      }
      t = t.slice(0, n);
    }
    return t;
  }
  getKeyframeTrackValues(e, t, n) {
    const i = n, s = [];
    let a = -1, o = -1, l = -1;
    return e.forEach(function(c) {
      if (t.x && (a = t.x.times.indexOf(c)), t.y && (o = t.y.times.indexOf(c)), t.z && (l = t.z.times.indexOf(c)), a !== -1) {
        const h = t.x.values[a];
        s.push(h), i[0] = h;
      } else s.push(i[0]);
      if (o !== -1) {
        const h = t.y.values[o];
        s.push(h), i[1] = h;
      } else s.push(i[1]);
      if (l !== -1) {
        const h = t.z.values[l];
        s.push(h), i[2] = h;
      } else s.push(i[2]);
    }), s;
  }
  interpolateRotations(e) {
    for (let t = 1; t < e.values.length; t++) {
      const n = e.values[t - 1], i = e.values[t] - n, s = Math.abs(i);
      if (s >= 180) {
        const a = s / 180, o = i / a;
        let l = n + o;
        const c = e.times[t - 1], u = (e.times[t] - c) / a;
        let d = c + u;
        const f = [], m = [];
        for (; d < e.times[t]; ) f.push(d), d += u, m.push(l), l += o;
        e.times = Yh(e.times, t, f), e.values = Yh(e.values, t, m);
      }
    }
  }
}
class V_ {
  getPrevNode() {
    return this.nodeStack[this.currentIndent - 2];
  }
  getCurrentNode() {
    return this.nodeStack[this.currentIndent - 1];
  }
  getCurrentProp() {
    return this.currentProp;
  }
  pushStack(e) {
    this.nodeStack.push(e), this.currentIndent += 1;
  }
  popStack() {
    this.nodeStack.pop(), this.currentIndent -= 1;
  }
  setCurrentProp(e, t) {
    this.currentProp = e, this.currentPropName = t;
  }
  parse(e) {
    this.currentIndent = 0, this.allNodes = new rf(), this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
    const t = this, n = e.split(/[\r\n]+/);
    return n.forEach(function(i, s) {
      const a = i.match(/^[\s\t]*;/), o = i.match(/^[\s\t]*$/);
      if (a || o) return;
      const l = i.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""), c = i.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"), h = i.match("^\\t{" + (t.currentIndent - 1) + "}}");
      l ? t.parseNodeBegin(i, l) : c ? t.parseNodeProperty(i, c, n[++s]) : h ? t.popStack() : i.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(i);
    }), this.allNodes;
  }
  parseNodeBegin(e, t) {
    const n = t[1].trim().replace(/^"/, "").replace(/"$/, ""), i = t[2].split(",").map(function(l) {
      return l.trim().replace(/^"/, "").replace(/"$/, "");
    }), s = { name: n }, a = this.parseNodeAttr(i), o = this.getCurrentNode();
    this.currentIndent === 0 ? this.allNodes.add(n, s) : n in o ? (n === "PoseNode" ? o.PoseNode.push(s) : o[n].id !== void 0 && (o[n] = {}, o[n][o[n].id] = o[n]), a.id !== "" && (o[n][a.id] = s)) : typeof a.id == "number" ? (o[n] = {}, o[n][a.id] = s) : n !== "Properties70" && (n === "PoseNode" ? o[n] = [s] : o[n] = s), typeof a.id == "number" && (s.id = a.id), a.name !== "" && (s.attrName = a.name), a.type !== "" && (s.attrType = a.type), this.pushStack(s);
  }
  parseNodeAttr(e) {
    let t = e[0];
    e[0] !== "" && (t = parseInt(e[0]), isNaN(t) && (t = e[0]));
    let n = "", i = "";
    return e.length > 1 && (n = e[1].replace(/^(\w+)::/, ""), i = e[2]), { id: t, name: n, type: i };
  }
  parseNodeProperty(e, t, n) {
    let i = t[1].replace(/^"/, "").replace(/"$/, "").trim(), s = t[2].replace(/^"/, "").replace(/"$/, "").trim();
    i === "Content" && s === "," && (s = n.replace(/"/g, "").replace(/,$/, "").trim());
    const a = this.getCurrentNode();
    if (a.name === "Properties70") {
      this.parseNodeSpecialProperty(e, i, s);
      return;
    }
    if (i === "C") {
      const l = s.split(",").slice(1), c = parseInt(l[0]), h = parseInt(l[1]);
      let u = s.split(",").slice(3);
      u = u.map(function(d) {
        return d.trim().replace(/^"/, "");
      }), i = "connections", s = [c, h], Z_(s, u), a[i] === void 0 && (a[i] = []);
    }
    i === "Node" && (a.id = s), i in a && Array.isArray(a[i]) ? a[i].push(s) : i !== "a" ? a[i] = s : a.a = s, this.setCurrentProp(a, i), i === "a" && s.slice(-1) !== "," && (a.a = No(s));
  }
  parseNodePropertyContinued(e) {
    const t = this.getCurrentNode();
    t.a += e, e.slice(-1) !== "," && (t.a = No(t.a));
  }
  parseNodeSpecialProperty(e, t, n) {
    const i = n.split('",').map(function(h) {
      return h.trim().replace(/^\"/, "").replace(/\s/, "_");
    }), s = i[0], a = i[1], o = i[2], l = i[3];
    let c = i[4];
    switch (a) {
      case "int":
      case "enum":
      case "bool":
      case "ULongLong":
      case "double":
      case "Number":
      case "FieldOfView":
        c = parseFloat(c);
        break;
      case "Color":
      case "ColorRGB":
      case "Vector3D":
      case "Lcl_Translation":
      case "Lcl_Rotation":
      case "Lcl_Scaling":
        c = No(c);
        break;
    }
    this.getPrevNode()[s] = { type: a, type2: o, flag: l, value: c }, this.setCurrentProp(this.getPrevNode(), s);
  }
}
class W_ {
  parse(e) {
    const t = new Xh(e);
    t.skip(23);
    const n = t.getUint32();
    if (n < 6400) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + n);
    const i = new rf();
    for (; !this.endOfContent(t); ) {
      const s = this.parseNode(t, n);
      s !== null && i.add(s.name, s);
    }
    return i;
  }
  endOfContent(e) {
    return e.size() % 16 === 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 16 >= e.size();
  }
  parseNode(e, t) {
    const n = {}, i = t >= 7500 ? e.getUint64() : e.getUint32(), s = t >= 7500 ? e.getUint64() : e.getUint32();
    t >= 7500 ? e.getUint64() : e.getUint32();
    const a = e.getUint8(), o = e.getString(a);
    if (i === 0) return null;
    const l = [];
    for (let d = 0; d < s; d++) l.push(this.parseProperty(e));
    const c = l.length > 0 ? l[0] : "", h = l.length > 1 ? l[1] : "", u = l.length > 2 ? l[2] : "";
    for (n.singleProperty = s === 1 && e.getOffset() === i; i > e.getOffset(); ) {
      const d = this.parseNode(e, t);
      d !== null && this.parseSubNode(o, n, d);
    }
    return n.propertyList = l, typeof c == "number" && (n.id = c), h !== "" && (n.attrName = h), u !== "" && (n.attrType = u), o !== "" && (n.name = o), n;
  }
  parseSubNode(e, t, n) {
    if (n.singleProperty === true) {
      const i = n.propertyList[0];
      Array.isArray(i) ? (t[n.name] = n, n.a = i) : t[n.name] = i;
    } else if (e === "Connections" && n.name === "C") {
      const i = [];
      n.propertyList.forEach(function(s, a) {
        a !== 0 && i.push(s);
      }), t.connections === void 0 && (t.connections = []), t.connections.push(i);
    } else if (n.name === "Properties70") Object.keys(n).forEach(function(s) {
      t[s] = n[s];
    });
    else if (e === "Properties70" && n.name === "P") {
      let i = n.propertyList[0], s = n.propertyList[1];
      const a = n.propertyList[2], o = n.propertyList[3];
      let l;
      i.indexOf("Lcl ") === 0 && (i = i.replace("Lcl ", "Lcl_")), s.indexOf("Lcl ") === 0 && (s = s.replace("Lcl ", "Lcl_")), s === "Color" || s === "ColorRGB" || s === "Vector" || s === "Vector3D" || s.indexOf("Lcl_") === 0 ? l = [n.propertyList[4], n.propertyList[5], n.propertyList[6]] : l = n.propertyList[4], t[i] = { type: s, type2: a, flag: o, value: l };
    } else t[n.name] === void 0 ? typeof n.id == "number" ? (t[n.name] = {}, t[n.name][n.id] = n) : t[n.name] = n : n.name === "PoseNode" ? (Array.isArray(t[n.name]) || (t[n.name] = [t[n.name]]), t[n.name].push(n)) : t[n.name][n.id] === void 0 && (t[n.name][n.id] = n);
  }
  parseProperty(e) {
    const t = e.getString(1);
    let n;
    switch (t) {
      case "C":
        return e.getBoolean();
      case "D":
        return e.getFloat64();
      case "F":
        return e.getFloat32();
      case "I":
        return e.getInt32();
      case "L":
        return e.getInt64();
      case "R":
        return n = e.getUint32(), e.getArrayBuffer(n);
      case "S":
        return n = e.getUint32(), e.getString(n);
      case "Y":
        return e.getInt16();
      case "b":
      case "c":
      case "d":
      case "f":
      case "i":
      case "l":
        const i = e.getUint32(), s = e.getUint32(), a = e.getUint32();
        if (s === 0) switch (t) {
          case "b":
          case "c":
            return e.getBooleanArray(i);
          case "d":
            return e.getFloat64Array(i);
          case "f":
            return e.getFloat32Array(i);
          case "i":
            return e.getInt32Array(i);
          case "l":
            return e.getInt64Array(i);
        }
        const o = R_(new Uint8Array(e.getArrayBuffer(a))), l = new Xh(o.buffer);
        switch (t) {
          case "b":
          case "c":
            return l.getBooleanArray(i);
          case "d":
            return l.getFloat64Array(i);
          case "f":
            return l.getFloat32Array(i);
          case "i":
            return l.getInt32Array(i);
          case "l":
            return l.getInt64Array(i);
        }
        break;
      default:
        throw new Error("THREE.FBXLoader: Unknown property type " + t);
    }
  }
}
class Xh {
  constructor(e, t) {
    this.dv = new DataView(e), this.offset = 0, this.littleEndian = t !== void 0 ? t : true, this._textDecoder = new TextDecoder();
  }
  getOffset() {
    return this.offset;
  }
  size() {
    return this.dv.buffer.byteLength;
  }
  skip(e) {
    this.offset += e;
  }
  getBoolean() {
    return (this.getUint8() & 1) === 1;
  }
  getBooleanArray(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push(this.getBoolean());
    return t;
  }
  getUint8() {
    const e = this.dv.getUint8(this.offset);
    return this.offset += 1, e;
  }
  getInt16() {
    const e = this.dv.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, e;
  }
  getInt32() {
    const e = this.dv.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getInt32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push(this.getInt32());
    return t;
  }
  getUint32() {
    const e = this.dv.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getInt64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t & 2147483648 ? (t = ~t & 4294967295, e = ~e & 4294967295, e === 4294967295 && (t = t + 1 & 4294967295), e = e + 1 & 4294967295, -(t * 4294967296 + e)) : t * 4294967296 + e;
  }
  getInt64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push(this.getInt64());
    return t;
  }
  getUint64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t * 4294967296 + e;
  }
  getFloat32() {
    const e = this.dv.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getFloat32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push(this.getFloat32());
    return t;
  }
  getFloat64() {
    const e = this.dv.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  getFloat64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push(this.getFloat64());
    return t;
  }
  getArrayBuffer(e) {
    const t = this.dv.buffer.slice(this.offset, this.offset + e);
    return this.offset += e, t;
  }
  getString(e) {
    const t = this.offset;
    let n = new Uint8Array(this.dv.buffer, t, e);
    this.skip(e);
    const i = n.indexOf(0);
    return i >= 0 && (n = new Uint8Array(this.dv.buffer, t, i)), this._textDecoder.decode(n);
  }
}
class rf {
  add(e, t) {
    this[e] = t;
  }
}
function X_(r) {
  const e = "Kaydara FBX Binary  \0";
  return r.byteLength >= e.length && e === lf(r, 0, e.length);
}
function q_(r) {
  const e = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
  let t = 0;
  function n(i) {
    const s = r[i - 1];
    return r = r.slice(t + i), t++, s;
  }
  for (let i = 0; i < e.length; ++i) if (n(1) === e[i]) return false;
  return true;
}
function qh(r) {
  const e = /FBXVersion: (\d+)/, t = r.match(e);
  if (t) return parseInt(t[1]);
  throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
}
function Y_(r) {
  return r / 46186158e3;
}
const j_ = [];
function fa(r, e, t, n) {
  let i;
  switch (n.mappingType) {
    case "ByPolygonVertex":
      i = r;
      break;
    case "ByPolygon":
      i = e;
      break;
    case "ByVertice":
      i = t;
      break;
    case "AllSame":
      i = n.indices[0];
      break;
    default:
      console.warn("THREE.FBXLoader: unknown attribute mapping type " + n.mappingType);
  }
  n.referenceType === "IndexToDirect" && (i = n.indices[i]);
  const s = i * n.dataSize, a = s + n.dataSize;
  return K_(j_, n.buffer, s, a);
}
const Oo = new qt(), as = new A();
function af(r) {
  const e = new _e(), t = new _e(), n = new _e(), i = new _e(), s = new _e(), a = new _e(), o = new _e(), l = new _e(), c = new _e(), h = new _e(), u = new _e(), d = new _e(), f = r.inheritType ? r.inheritType : 0;
  if (r.translation && e.setPosition(as.fromArray(r.translation)), r.preRotation) {
    const T = r.preRotation.map(Qt.degToRad);
    T.push(r.eulerOrder || qt.DEFAULT_ORDER), t.makeRotationFromEuler(Oo.fromArray(T));
  }
  if (r.rotation) {
    const T = r.rotation.map(Qt.degToRad);
    T.push(r.eulerOrder || qt.DEFAULT_ORDER), n.makeRotationFromEuler(Oo.fromArray(T));
  }
  if (r.postRotation) {
    const T = r.postRotation.map(Qt.degToRad);
    T.push(r.eulerOrder || qt.DEFAULT_ORDER), i.makeRotationFromEuler(Oo.fromArray(T)), i.invert();
  }
  r.scale && s.scale(as.fromArray(r.scale)), r.scalingOffset && o.setPosition(as.fromArray(r.scalingOffset)), r.scalingPivot && a.setPosition(as.fromArray(r.scalingPivot)), r.rotationOffset && l.setPosition(as.fromArray(r.rotationOffset)), r.rotationPivot && c.setPosition(as.fromArray(r.rotationPivot)), r.parentMatrixWorld && (u.copy(r.parentMatrix), h.copy(r.parentMatrixWorld));
  const m = t.clone().multiply(n).multiply(i), g = new _e();
  g.extractRotation(h);
  const x = new _e();
  x.copyPosition(h);
  const p = x.clone().invert().multiply(h), _ = g.clone().invert().multiply(p), v = s, M = new _e();
  if (f === 0) M.copy(g).multiply(m).multiply(_).multiply(v);
  else if (f === 1) M.copy(g).multiply(_).multiply(m).multiply(v);
  else {
    const N = new _e().scale(new A().setFromMatrixScale(u)).clone().invert(), B = _.clone().multiply(N);
    M.copy(g).multiply(m).multiply(B).multiply(v);
  }
  const w = c.clone().invert(), S = a.clone().invert();
  let y = e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(w).multiply(o).multiply(a).multiply(s).multiply(S);
  const R = new _e().copyPosition(y), b = h.clone().multiply(R);
  return d.copyPosition(b), y = d.clone().multiply(M), y.premultiply(h.invert()), y;
}
function of(r) {
  r = r || 0;
  const e = ["ZYX", "YZX", "XZY", "ZXY", "YXZ", "XYZ"];
  return r === 6 ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), e[0]) : e[r];
}
function No(r) {
  return r.split(",").map(function(t) {
    return parseFloat(t);
  });
}
function lf(r, e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = r.byteLength), new TextDecoder().decode(new Uint8Array(r, e, t));
}
function Z_(r, e) {
  for (let t = 0, n = r.length, i = e.length; t < i; t++, n++) r[n] = e[t];
}
function K_(r, e, t, n) {
  for (let i = t, s = 0; i < n; i++, s++) r[s] = e[i];
  return r;
}
function Yh(r, e, t) {
  return r.slice(0, e).concat(t).concat(r.slice(e));
}
function cf(r, e, t = {}) {
  const n = new A(), i = new mt(), s = new A(), a = new _e(), o = new _e(), l = new _e();
  t.preserveMatrix = t.preserveMatrix !== void 0 ? t.preserveMatrix : true, t.preservePosition = t.preservePosition !== void 0 ? t.preservePosition : true, t.preserveHipPosition = t.preserveHipPosition !== void 0 ? t.preserveHipPosition : false, t.useTargetMatrix = t.useTargetMatrix !== void 0 ? t.useTargetMatrix : false, t.hip = t.hip !== void 0 ? t.hip : "hip", t.names = t.names || {};
  const c = e.isObject3D ? e.skeleton.bones : Pa(e), h = r.isObject3D ? r.skeleton.bones : Pa(r);
  let u, d, f, m, g;
  if (r.isObject3D ? r.skeleton.pose() : (t.useTargetMatrix = true, t.preserveMatrix = false), t.preservePosition) {
    g = [];
    for (let x = 0; x < h.length; x++) g.push(h[x].position.clone());
  }
  if (t.preserveMatrix) {
    r.updateMatrixWorld(), r.matrixWorld.identity();
    for (let x = 0; x < r.children.length; ++x) r.children[x].updateMatrixWorld(true);
  }
  if (t.offsets) {
    u = [];
    for (let x = 0; x < h.length; ++x) d = h[x], f = t.names[d.name] || d.name, t.offsets[f] && (d.matrix.multiply(t.offsets[f]), d.matrix.decompose(d.position, d.quaternion, d.scale), d.updateMatrixWorld()), u.push(d.matrixWorld.clone());
  }
  for (let x = 0; x < h.length; ++x) {
    if (d = h[x], f = t.names[d.name] || d.name, m = hf(f, c), l.copy(d.matrixWorld), m) {
      if (m.updateMatrixWorld(), t.useTargetMatrix ? o.copy(m.matrixWorld) : (o.copy(r.matrixWorld).invert(), o.multiply(m.matrixWorld)), s.setFromMatrixScale(o), o.scale(s.set(1 / s.x, 1 / s.y, 1 / s.z)), l.makeRotationFromQuaternion(i.setFromRotationMatrix(o)), r.isObject3D) {
        const p = h.indexOf(d), _ = u ? u[p] : a.copy(r.skeleton.boneInverses[p]).invert();
        l.multiply(_);
      }
      l.copyPosition(o);
    }
    d.parent && d.parent.isBone ? (d.matrix.copy(d.parent.matrixWorld).invert(), d.matrix.multiply(l)) : d.matrix.copy(l), t.preserveHipPosition && f === t.hip && d.matrix.setPosition(n.set(0, d.position.y, 0)), d.matrix.decompose(d.position, d.quaternion, d.scale), d.updateMatrixWorld();
  }
  if (t.preservePosition) for (let x = 0; x < h.length; ++x) d = h[x], f = t.names[d.name] || d.name, f !== t.hip && d.position.copy(g[x]);
  t.preserveMatrix && r.updateMatrixWorld(true);
}
function J_(r, e, t, n = {}) {
  n.useFirstFramePosition = n.useFirstFramePosition !== void 0 ? n.useFirstFramePosition : false, n.fps = n.fps !== void 0 ? n.fps : 30, n.names = n.names || [], e.isObject3D || (e = $_(e));
  const i = Math.round(t.duration * (n.fps / 1e3) * 1e3), s = 1 / n.fps, a = [], o = new Yd(e), l = Pa(r.skeleton), c = [];
  let h, u, d, f, m;
  o.clipAction(t).play(), o.update(0), e.updateMatrixWorld();
  for (let g = 0; g < i; ++g) {
    const x = g * s;
    cf(r, e, n);
    for (let p = 0; p < l.length; ++p) m = n.names[l[p].name] || l[p].name, d = hf(m, e.skeleton), d && (u = l[p], f = c[p] = c[p] || { bone: u }, n.hip === m && (f.pos || (f.pos = { times: new Float32Array(i), values: new Float32Array(i * 3) }), n.useFirstFramePosition && (g === 0 && (h = u.position.clone()), u.position.sub(h)), f.pos.times[g] = x, u.position.toArray(f.pos.values, g * 3)), f.quat || (f.quat = { times: new Float32Array(i), values: new Float32Array(i * 4) }), f.quat.times[g] = x, u.quaternion.toArray(f.quat.values, g * 4));
    o.update(s), e.updateMatrixWorld();
  }
  for (let g = 0; g < c.length; ++g) f = c[g], f && (f.pos && a.push(new Ii(".bones[" + f.bone.name + "].position", f.pos.times, f.pos.values)), a.push(new si(".bones[" + f.bone.name + "].quaternion", f.quat.times, f.quat.values)));
  return o.uncacheAction(t), new Di(t.name, -1, a);
}
function Q_(r) {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = r.clone();
  return uf(r, n, function(i, s) {
    e.set(s, i), t.set(i, s);
  }), n.traverse(function(i) {
    if (!i.isSkinnedMesh) return;
    const s = i, a = e.get(i), o = a.skeleton.bones;
    s.skeleton = a.skeleton.clone(), s.bindMatrix.copy(a.bindMatrix), s.skeleton.bones = o.map(function(l) {
      return t.get(l);
    }), s.bind(s.skeleton, s.bindMatrix);
  }), n;
}
function hf(r, e) {
  for (let t = 0, n = Pa(e); t < n.length; t++) if (r === n[t].name) return n[t];
}
function Pa(r) {
  return Array.isArray(r) ? r : r.bones;
}
function $_(r) {
  const e = new jd(r.bones[0]);
  return e.skeleton = r, e;
}
function uf(r, e, t) {
  t(r, e);
  for (let n = 0; n < r.children.length; n++) uf(r.children[n], e.children[n], t);
}
const eM = Object.freeze(Object.defineProperty({ __proto__: null, clone: Q_, retarget: cf, retargetClip: J_ }, Symbol.toStringTag, { value: "Module" })), df = { uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}` };
class Es {
  constructor() {
    this.isPass = true, this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const tM = new Ms(-1, 1, 1, -1, 0, 1), dc = new Ne();
dc.setAttribute("position", new xe([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
dc.setAttribute("uv", new xe([0, 2, 0, 0, 2, 0], 2));
class fc {
  constructor(e) {
    this._mesh = new vt(dc, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, tM);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class nM extends Es {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof _t ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Jn.clone(e.uniforms), this.material = new _t({ defines: Object.assign({}, e.defines), uniforms: this.uniforms, vertexShader: e.vertexShader, fragmentShader: e.fragmentShader })), this.fsQuad = new fc(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class jh extends Es {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = true, this.needsSwap = false, this.inverse = false;
  }
  render(e, t, n) {
    const i = e.getContext(), s = e.state;
    s.buffers.color.setMask(false), s.buffers.depth.setMask(false), s.buffers.color.setLocked(true), s.buffers.depth.setLocked(true);
    let a, o;
    this.inverse ? (a = 0, o = 1) : (a = 1, o = 0), s.buffers.stencil.setTest(true), s.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), s.buffers.stencil.setFunc(i.ALWAYS, a, 4294967295), s.buffers.stencil.setClear(o), s.buffers.stencil.setLocked(true), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), s.buffers.color.setLocked(false), s.buffers.depth.setLocked(false), s.buffers.stencil.setLocked(false), s.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), s.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), s.buffers.stencil.setLocked(true);
  }
}
class iM extends Es {
  constructor() {
    super(), this.needsSwap = false;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(false), e.state.buffers.stencil.setTest(false);
  }
}
class sM {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new W());
      this._width = n.width, this._height = n.height, t = new Et(this._width * this._pixelRatio, this._height * this._pixelRatio), t.texture.name = "EffectComposer.rt1";
    } else this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = true, this.passes = [], this.copyPass = new nM(df), this.clock = new lc();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return false;
    return true;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = false;
    for (let i = 0, s = this.passes.length; i < s; i++) {
      const a = this.passes[i];
      if (a.enabled !== false) {
        if (a.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), a.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), a.needsSwap) {
          if (n) {
            const o = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(o.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        jh !== void 0 && (a instanceof jh ? n = true : a instanceof iM && (n = false));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new W());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const n = this._width * this._pixelRatio, i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
    for (let s = 0; s < this.passes.length; s++) this.passes[s].setSize(n, i);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
class rM extends Es {
  constructor(e, t, n, i, s) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = s !== void 0 ? s : 0, this.clear = true, this.clearDepth = false, this.needsSwap = false, this._oldClearColor = new ue();
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = false;
    let s, a;
    this.overrideMaterial !== void 0 && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor && (e.getClearColor(this._oldClearColor), s = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor && e.setClearColor(this._oldClearColor, s), this.overrideMaterial !== void 0 && (this.scene.overrideMaterial = a), e.autoClear = i;
  }
}
const aM = { uniforms: { tDiffuse: { value: null }, luminosityThreshold: { value: 1 }, smoothWidth: { value: 1 }, defaultColor: { value: new ue(0) }, defaultOpacity: { value: 0 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}` };
class vs extends Es {
  constructor(e, t, n, i) {
    super(), this.strength = t !== void 0 ? t : 1, this.radius = n, this.threshold = i, this.resolution = e !== void 0 ? new W(e.x, e.y) : new W(256, 256), this.clearColor = new ue(0, 0, 0), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
    let s = Math.round(this.resolution.x / 2), a = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new Et(s, a), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = false;
    for (let u = 0; u < this.nMips; u++) {
      const d = new Et(s, a);
      d.texture.name = "UnrealBloomPass.h" + u, d.texture.generateMipmaps = false, this.renderTargetsHorizontal.push(d);
      const f = new Et(s, a);
      f.texture.name = "UnrealBloomPass.v" + u, f.texture.generateMipmaps = false, this.renderTargetsVertical.push(f), s = Math.round(s / 2), a = Math.round(a / 2);
    }
    const o = aM;
    this.highPassUniforms = Jn.clone(o.uniforms), this.highPassUniforms.luminosityThreshold.value = i, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new _t({ uniforms: this.highPassUniforms, vertexShader: o.vertexShader, fragmentShader: o.fragmentShader, defines: {} }), this.separableBlurMaterials = [];
    const l = [3, 5, 7, 9, 11];
    s = Math.round(this.resolution.x / 2), a = Math.round(this.resolution.y / 2);
    for (let u = 0; u < this.nMips; u++) this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])), this.separableBlurMaterials[u].uniforms.texSize.value = new W(s, a), s = Math.round(s / 2), a = Math.round(a / 2);
    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = 0.1, this.compositeMaterial.needsUpdate = true;
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [new A(1, 1, 1), new A(1, 1, 1), new A(1, 1, 1), new A(1, 1, 1), new A(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
    const h = df;
    this.copyUniforms = Jn.clone(h.uniforms), this.copyUniforms.opacity.value = 1, this.materialCopy = new _t({ uniforms: this.copyUniforms, vertexShader: h.vertexShader, fragmentShader: h.fragmentShader, blending: wa, depthTest: false, depthWrite: false, transparent: true }), this.enabled = true, this.needsSwap = false, this._oldClearColor = new ue(), this.oldClearAlpha = 1, this.basic = new _n(), this.fsQuad = new fc(null);
  }
  dispose() {
    for (let e = 0; e < this.renderTargetsHorizontal.length; e++) this.renderTargetsHorizontal[e].dispose();
    for (let e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose();
    for (let e = 0; e < this.separableBlurMaterials.length; e++) this.separableBlurMaterials[e].dispose();
    this.compositeMaterial.dispose(), this.materialCopy.dispose(), this.basic.dispose(), this.fsQuad.dispose();
  }
  setSize(e, t) {
    let n = Math.round(e / 2), i = Math.round(t / 2);
    this.renderTargetBright.setSize(n, i);
    for (let s = 0; s < this.nMips; s++) this.renderTargetsHorizontal[s].setSize(n, i), this.renderTargetsVertical[s].setSize(n, i), this.separableBlurMaterials[s].uniforms.texSize.value = new W(n, i), n = Math.round(n / 2), i = Math.round(i / 2);
  }
  render(e, t, n, i, s) {
    e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
    const a = e.autoClear;
    e.autoClear = false, e.setClearColor(this.clearColor, 0), s && e.state.buffers.stencil.setTest(false), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
    let o = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++) this.fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = o.texture, this.separableBlurMaterials[l].uniforms.direction.value = vs.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[l]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = vs.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[l]), e.clear(), this.fsQuad.render(e), o = this.renderTargetsVertical[l];
    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, s && e.state.buffers.stencil.setTest(true), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = a;
  }
  getSeperableBlurMaterial(e) {
    return new _t({ defines: { KERNEL_RADIUS: e, SIGMA: e }, uniforms: { colorTexture: { value: null }, texSize: { value: new W(0.5, 0.5) }, direction: { value: new W(0.5, 0.5) } }, vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}` });
  }
  getCompositeMaterial(e) {
    return new _t({ defines: { NUM_MIPS: e }, uniforms: { blurTexture1: { value: null }, blurTexture2: { value: null }, blurTexture3: { value: null }, blurTexture4: { value: null }, blurTexture5: { value: null }, bloomStrength: { value: 1 }, bloomFactors: { value: null }, bloomTintColors: { value: null }, bloomRadius: { value: 0 } }, vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}` });
  }
}
vs.BlurDirectionX = new W(1, 0);
vs.BlurDirectionY = new W(0, 1);
const pa = { defines: { SMAA_THRESHOLD: "0.1" }, uniforms: { tDiffuse: { value: null }, resolution: { value: new W(1 / 1024, 1 / 512) } }, vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}` }, ma = { defines: { SMAA_MAX_SEARCH_STEPS: "8", SMAA_AREATEX_MAX_DISTANCE: "16", SMAA_AREATEX_PIXEL_SIZE: "( 1.0 / vec2( 160.0, 560.0 ) )", SMAA_AREATEX_SUBTEX_SIZE: "( 1.0 / 7.0 )" }, uniforms: { tDiffuse: { value: null }, tArea: { value: null }, tSearch: { value: null }, resolution: { value: new W(1 / 1024, 1 / 512) } }, vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}` }, Bo = { uniforms: { tDiffuse: { value: null }, tColor: { value: null }, resolution: { value: new W(1 / 1024, 1 / 512) } }, vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}` };
class oM extends Es {
  constructor(e, t) {
    super(), this.edgesRT = new Et(e, t, { depthBuffer: false }), this.edgesRT.texture.name = "SMAAPass.edges", this.weightsRT = new Et(e, t, { depthBuffer: false }), this.weightsRT.texture.name = "SMAAPass.weights";
    const n = this, i = new Image();
    i.src = this.getAreaTexture(), i.onload = function() {
      n.areaTexture.needsUpdate = true;
    }, this.areaTexture = new rt(), this.areaTexture.name = "SMAAPass.area", this.areaTexture.image = i, this.areaTexture.minFilter = ct, this.areaTexture.generateMipmaps = false, this.areaTexture.flipY = false;
    const s = new Image();
    s.src = this.getSearchTexture(), s.onload = function() {
      n.searchTexture.needsUpdate = true;
    }, this.searchTexture = new rt(), this.searchTexture.name = "SMAAPass.search", this.searchTexture.image = s, this.searchTexture.magFilter = at, this.searchTexture.minFilter = at, this.searchTexture.generateMipmaps = false, this.searchTexture.flipY = false, this.uniformsEdges = Jn.clone(pa.uniforms), this.uniformsEdges.resolution.value.set(1 / e, 1 / t), this.materialEdges = new _t({ defines: Object.assign({}, pa.defines), uniforms: this.uniformsEdges, vertexShader: pa.vertexShader, fragmentShader: pa.fragmentShader }), this.uniformsWeights = Jn.clone(ma.uniforms), this.uniformsWeights.resolution.value.set(1 / e, 1 / t), this.uniformsWeights.tDiffuse.value = this.edgesRT.texture, this.uniformsWeights.tArea.value = this.areaTexture, this.uniformsWeights.tSearch.value = this.searchTexture, this.materialWeights = new _t({ defines: Object.assign({}, ma.defines), uniforms: this.uniformsWeights, vertexShader: ma.vertexShader, fragmentShader: ma.fragmentShader }), this.uniformsBlend = Jn.clone(Bo.uniforms), this.uniformsBlend.resolution.value.set(1 / e, 1 / t), this.uniformsBlend.tDiffuse.value = this.weightsRT.texture, this.materialBlend = new _t({ uniforms: this.uniformsBlend, vertexShader: Bo.vertexShader, fragmentShader: Bo.fragmentShader }), this.needsSwap = false, this.fsQuad = new fc(null);
  }
  render(e, t, n) {
    this.uniformsEdges.tDiffuse.value = n.texture, this.fsQuad.material = this.materialEdges, e.setRenderTarget(this.edgesRT), this.clear && e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.materialWeights, e.setRenderTarget(this.weightsRT), this.clear && e.clear(), this.fsQuad.render(e), this.uniformsBlend.tColor.value = n.texture, this.fsQuad.material = this.materialBlend, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(), this.fsQuad.render(e));
  }
  setSize(e, t) {
    this.edgesRT.setSize(e, t), this.weightsRT.setSize(e, t), this.materialEdges.uniforms.resolution.value.set(1 / e, 1 / t), this.materialWeights.uniforms.resolution.value.set(1 / e, 1 / t), this.materialBlend.uniforms.resolution.value.set(1 / e, 1 / t);
  }
  getAreaTexture() {
    return "data:image/png;base64,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";
  }
  getSearchTexture() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=";
  }
  dispose() {
    this.edgesRT.dispose(), this.weightsRT.dispose(), this.areaTexture.dispose(), this.searchTexture.dispose(), this.materialEdges.dispose(), this.materialWeights.dispose(), this.materialBlend.dispose(), this.fsQuad.dispose();
  }
}
const Bs = Za;
(function(r, e) {
  const t = Za, n = r();
  for (; ; ) try {
    if (parseInt(t(855)) / 1 * (-parseInt(t(543)) / 2) + -parseInt(t(494)) / 3 * (parseInt(t(633)) / 4) + parseInt(t(798)) / 5 + -parseInt(t(638)) / 6 + parseInt(t(780)) / 7 + parseInt(t(675)) / 8 * (parseInt(t(482)) / 9) + -parseInt(t(692)) / 10 === e) break;
    n.push(n.shift());
  } catch {
    n.push(n.shift());
  }
})(La, 720059);
function Za(r, e) {
  return r = r - 414, La()[r];
}
function La() {
  const r = ["clientX", "blinkWeights", "hairHM", "code", ".bgm.", "set", "domElement", "grab", "hasMilkway", "WebGLRenderer", "MeshBasicMaterial", "18nNoNjs", "innerText", "794", "cursor", "changedTouches", "map", "fragmentShader", "data-vol", "height", "Face_OutlineMask.png", ".loading-text", "Pupil_L", "keys", "T_Sparkle_SDF.png", "905-1", "getSize", "length", "Bangs", "text", "#tap-me span", "bgmClass", "RepeatWrapping", "inheritVoicelines", "#tap-me img", "lerp", "997", "assign", "507-3", "get", "HEAD_MAX_Y", "ftm", "alt", "msg", "Fur", "070-2", "getWorldQuaternion", "getAttribute", "width", "intensity", "_HM.png", "Eye", "classList", "introVoicelines", "pointer", "children", "384", "bgm", "entries", "vertexShader", "20UYlIBu", "getZ", "normalized", "MathUtils", "updateMouse", "compile", "fromArray", "existingModels", "userAgent", "Pupil_Down", "EPSILON", "render", "rimTint", "clientY", "itemSize", ".json", "raycaster", "beginLoadingScreen", "getUserMedia", "crossfadeTracks", "517", "devicePixelRatio", "T_Highlight_1.webp", "wrapT", "CHARS", "--spinner", "clone", "flipIsFacingCamera", "Raycaster", "geometry", "play_favor_word_jiabeilina_com_openbox_03_02", "headPos", "toggle", "camera", "style", "type", "Tap me.", "mesh", "applyAxisAngle", "quaternion", "error", "afterend", "T_MC_premake_D.png", "animate", "isDeniaChest", "Bip001Pelvis", "BottomHighlight_1.webp", "document", "call", "Clock", "isFullyVisible", "PAN", "renderer", "blinkDur", "hitboxOffset", "setupThree", "aspect", '[role="button"]', "ceil", "getObjectByProperty", "max", "Tap me, please?", "now", "contains", "touchstart", "blackberry", "_EyebrowsHET.png", "msFullscreenElement", "log10", "switch-skin", "Denia_3", "applyQuaternion", "visible", "altKey", "exitFullscreen", "AmbientLight", "remove", "ctrlKey", ".png", "loadingId", "resize", "Cloth", "includes", "Denia", "default", "wrapS", "setProperty", "./assets/voicelines/", "#loading-2", "_MilkwayMask.png", "385068UclgwU", "applyMats", "msExitFullscreen", "Arms-Crossed", "animateBound", "854844xcQKua", "play_favor_word_younuo_skill_exitskill_02", "600-1", "webkitRequestFullScreen", "display", "getBoneByName", "updateMatrixWorld", "rotateZ", "527", "showExistingModel", "getIndex", "isHair", "pruneMorphTargets", "avantgo", "sRGBEncoding", "rotateY", "507-2", "Float32BufferAttribute", "outlineMask", "600-3", "replace", "needsUpdate", "keydown", "voicelinesPath", "setupMouseFollow", "project", "./shaders/", "eyeHighlight", "hostname", "charAt", "fullscreenElement", "937", "subVectors", "blinkInterval", "dict", "dot", "button", "11291416IKZDwY", "material", "init", "updatePalette", "href", "clock", "intersectObject", "T_Wenli_", "count", "random", "ShaderMaterial", "326", "isFur", "startingPose", "generateTangents", "hasOutlineMask", "985", "2470230ysBIcj", "mousemove", "getVideoTracks", "#loading-1", "lastMy", "headBone", 'link[rel="icon"]', "getHours", "switch-char", "degToRad", "T_NHT1CalbrenaChaopin", "loadingScreen", "574", "MeshStandardMaterial", "load", "background", "cachedMats", "Scene", "Bip001Neck", "Go ahead, tap me~", "playVoiceline", "play_favor_word_younuo_atk_heavyatk01_03", ".switch-char", "startsWith", "toggle-music", "fromBufferAttribute", "querySelector", "isFacingCamera", "TextureLoader", "multiplyScalar", "parts", "charName", "lmy", "scene", "switch-skin-loading", "resolveChars", "slice", ".mp3", "touchend", "_Up", "followMouseLerp", "insertAdjacentElement", "100%", ".video-bg-wrapper", "isOutline", "videoWidth", "570", "milkwayMask", "VOICES_PATH", "addEventListener", "denia_2", "onWindowResize", "loading", "Alpha", "texPrefix", "palm", "uniforms", "outlineThickness", "abs", "vertexShader.glsl", "skeleton", "paletteIndex", "EYE_MAX_X", "mozRequestFullScreen", "position", "ipod", "go-fullscreen", "Tacet", "paused", "posLightAndCam", "015-2", ".menu", "Hand-on-Hip", "KeyD", "updateMouseBound", "switchSkin", "TEXTURES_PATH", "HEAD_MAX_X", "aCutoff", "600-2", "SkinnedMesh", "denia_3", "skin", "split", "Denia_2", "DirectionalLight", "bind", 'BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.', "7034496waFikY", "Down", "mobile", "mouseup", "copy", "toNonIndexed", "cameraDistanceAxis", "min", "windows ce", "videoBgWrapper", "side", "DOMContentLoaded", "shake", "sin", "search", "Face", "pause", "addPass", "2155315VWoZFX", "documentElement", "attributes", "loading-screen", "setPixelRatio", " 100%", "Stand", "auto", "switch-palette", "simplifyMesh", "char", "MODELS_PATH", "loadTex", "activeChar", "fbxLoader", "identity", "T_Fur_M.png", "E_Close", "setupModel", "setSize", "play_favor_word_younuo_skill_exitskill_double_02", "Outlines", "headRotAxis", "false", "lightTint", "data-char", "followMouse", "cameraDistanceMultiplier", "composer", "setFromObject", "applyMatrix4", "setAttribute", "mouseButtons", "BufferAttribute", "hasFTM", "	./assets/models/", "isMouseDown", "morphAttributes", "lmx", "DIR_LIGHT_RADIUS", "useSparkle", "bloomPass", "isInterleavedBufferAttribute", "673", ".galbrena-2", "has", "138", "useThreeMat", "controls", "webkitFullscreenElement", "BackSide", "238", "inf", "getW", "sparkle", "push", "scale", "116026YbWhTe", "constructor", "_FTM.png", "_N.png", "Galbrena-2", "Hair", "opera mini", "voicelines", "setFromCamera", "canvas", "add", "setW", "Vector2", "DoubleSide", "doNotFollowTouch", "./assets/models/textures/", "356", "play_favor_word_younuo_skill_qte_01", "msRequestFullscreen", "play", "lastMx", "270", "_D.png", "srcObject", "getWorldPosition", "mouseVec2", "createOutlineClone", "hasFX", "_OutlineMask.png", "176", "ROTATE", "BLINK_DUR", "Body", "mozCancelFullScreen", "innerHeight", "UniformsLib", "Pupil_R", "isMouseOnChar", "shadowTint", "none", "BufferGeometry", "matrixWorld", "floor", "innerWidth", "ambientLight", "value", "setupMouseDown", "MOUSE", "hasAttribute", "getY", "body", "rotation", "play_favor_word_jiabeilina_sys_gacha", "isFace", "toLowerCase", "-loading", "lastBlink", "T_R2T1DaniyaMd10011", "origin", "normal", "025", "physicallyCorrectLights", "switch-mat", "requestFullscreen", "environment", "src", "mediaDevices", "Quaternion", "cos", "Color", "normalMap", "renderToScreen", "stop", "getElapsedTime", ".switch-char.denia", "milkway", "226", "toUpperCase", "visibilitychange", "PALETTES", "mousedown", "enabled", "getX", "BufferGeometryUtils: Initialized MikkTSpace library required.", "hasNormalMap", "dirLightHelper", "getElementById", "dirLight", "inheritBGM", "transparent", "_Down", "SHADERS_PATH", "aspectRatio", "posMultiplier", "removeEventListener", "webkitExitFullscreen", "array", "base", "905-2", "Pupil", "target", "play_favor_word_jiabeilina_sys_rankup03", "setIndex", "videoHeight", "_FX.png", "T_R2T1CalbrenaMd10011", "updatePageForChar", "toggle-camera", "volume", "kaios", "galbrena-2", "cMesh", "use-three-mat", "play_favor_word_younuo_skill_qte_03", "switch-skin-2", "play_favor_word_younuo_sys_jointeam_01", "EYE_MAX_Y", "blink", "gCutoff", "hitbox", "sub", "closest", "outputColorSpace", "block", "morphTargetDictionary", "morphTargetInfluences", "outputEncoding", "Vector3", "Pupil_Up", "tintStrength", "9JKgDsG"];
  return La = function() {
    return r;
  }, La();
}
function lM(r, e = 1e-4) {
  const t = Za;
  e = Math.max(e, Number[t(553)]);
  const n = {}, i = r[t(648)](), s = r[t(530)](t(756)), a = i ? i[t(683)] : s.count;
  let o = 0;
  const l = Object[t(506)](r.attributes), c = {}, h = {}, u = [], d = [t(434), t(904), t(544), t(851)], f = ["setX", "setY", "setZ", t(866)];
  for (let p = 0, _ = l.length; p < _; p++) {
    const v = l[p], M = r[t(800)][v];
    c[v] = new ze[t(831)](new M.array[t(856)](M[t(683)] * M[t(557)]), M[t(557)], M[t(545)]);
    const w = r[t(835)][v];
    if (w) {
      h[v] = [];
      for (let S = 0; S < w[t(510)]; S++) {
        const y = w[S];
        h[v][t(853)](new et(new y[t(448)][t(856)](y[t(683)] * y[t(557)]), y[t(557)], y[t(545)]));
      }
    }
  }
  const m = Math[t(611)](1 / e), g = Math.pow(10, m);
  for (let p = 0; p < a; p++) {
    const _ = i ? i[t(434)](p) : p;
    let v = "";
    for (let M = 0, w = l[t(510)]; M < w; M++) {
      const S = l[M], y = r[t(530)](S), R = y[t(557)];
      for (let b = 0; b < R; b++) v += ~~(y[d[b]](_) * g) + ",";
    }
    if (v in n) u[t(853)](n[v]);
    else {
      for (let M = 0, w = l[t(510)]; M < w; M++) {
        const S = l[M], y = r[t(530)](S), R = r[t(835)][S], b = y[t(557)], T = c[S], N = h[S];
        for (let B = 0; B < b; B++) {
          const D = d[B], O = f[B];
          if (T[O](o, y[D](_)), R) for (let k = 0, Y = R[t(510)]; k < Y; k++) N[k][O](o, R[k][D](_));
        }
      }
      n[v] = o, u[t(853)](o), o++;
    }
  }
  const x = r[t(569)]();
  for (const p in r[t(800)]) {
    const _ = c[p];
    if (x[t(829)](p, new et(_[t(448)][t(728)](0, o * _.itemSize), _[t(557)], _[t(545)])), p in h) for (let v = 0; v < h[p][t(510)]; v++) {
      const M = h[p][v];
      x[t(835)][p][v] = new ze[t(831)](M[t(448)].slice(0, o * M.itemSize), M[t(557)], M[t(545)]);
    }
  }
  return x[t(454)](u), x;
}
document[Bs(905)][Bs(577)][Bs(629)](Bs(568), Math.max(1.13, 1.13 / 1358 * window.innerWidth)), (() => {
  const r = Bs, e = { DIR_LIGHT_RADIUS: 100, MODELS_PATH: r(833), TEXTURES_PATH: r(870), SHADERS_PATH: r(664), POSES_PATH: "./assets/models/poses/", VOICES_PATH: r(630), CHARS: { Iuno: { msg: r(604), cameraDistanceAxis: "z", cameraDistanceMultiplier: 0.9375, parts: ["Bangs", r(860), r(795), "Up", r(781), r(745), "Eye", r(759)], texPrefix: "T_R2T1YounuoMd10011", outlineThickness: 0.02875, startingPose: r(804), posMultiplier: 100, startingRot: { x: 8.75, y: -12.25, z: -90 }, hitboxOffset: { x: 1.75, y: 5, z: -17 }, headRotAxis: "x", voicelines: ["play_favor_word_younuo_atk_heavyatk01_01", r(713), "play_favor_word_younuo_com_fly_01", "play_favor_word_younuo_com_openbox_01", "play_favor_word_younuo_com_openbox_03", r(639), r(818), r(872), "play_favor_word_younuo_skill_qte_02", r(465), r(467), "play_favor_word_younuo_sys_jointeam_02"] }, Galbrena: { msg: r(579), introVoicelines: ["play_favor_word_jiabeilina_sys_jointeam_01"], cameraDistanceAxis: "y", cameraDistanceMultiplier: 0.9, parts: [r(511), r(860), r(795), "Up", "Down", "Cloth", r(534), "Tacet"], texPrefix: r(457), outlineThickness: 5e-4, startingPose: r(764), posMultiplier: 1, startingRot: { x: -160, y: 195, z: 0 }, hitboxOffset: { x: 6, y: -78, z: -113 }, headRotAxis: "y", voicelines: ["play_favor_word_jiabeilina_com_openbox_03", r(573), r(907), r(453)] }, Denia: { msg: r(711), introVoicelines: [r(669), r(771), r(508)], cameraDistanceAxis: "z", cameraDistanceMultiplier: 1.1, parts: [r(511), r(860), r(795), "Up", r(781), r(624), r(527), "Eye"], texPrefix: r(912), outlineThickness: 4375e-7, outlineMaxBrightnessHair: 0.375, startingPose: r(804), posMultiplier: 1, startingRot: { x: 0, y: 0, z: 0 }, hitboxOffset: { x: 1, y: 86, z: -95 }, headRotAxis: "x", flipIsFacingCamera: true, voicelines: ["015-1", r(762), "063", "070-1", r(528), r(844), r(884), r(428), r(849), r(686), "432", "507-1", r(654), r(521), r(646), "543", r(738), r(704), r(640), r(657), "662", r(841), "863", r(450)] }, Denia_2: { msg: "Tap me.", introVoicelines: null, cameraDistanceMultiplier: 1.15, parts: [r(795), r(624), "Fx", r(534), r(511), r(860), "Up", "Down"], startingPose: r(636), startingRot: { x: 23, y: 0, z: 0 }, hitboxOffset: { x: 2, y: 82.5, z: -90 }, voicelines: [r(844), r(428), r(646), r(841), r(915), "222", r(876), r(871), "361", r(539), "396", r(563), "589", r(496), r(691), r(519)] }, Denia_3: { cameraDistanceMultiplier: 1.175, parts: ["Body", r(624), "Fx", r(860), r(534), r(511), r(795), r(781)], startingPose: r(764), hitboxOffset: { x: -95, y: 86, z: -96 }, headRotAxis: "y", headRotAxisUpDown: "x", inheritVoicelines: true, inheritBGM: true } }, resolveChars() {
    const t = r;
    for (const [n, i] of Object[t(541)](this[t(567)])) {
      const s = n[t(775)]("_");
      if (isNaN(s.pop())) {
        this.CHARS[n][t(661)] = n, this[t(567)][n][t(514)] = n[t(909)]();
        continue;
      }
      const a = s.join("_");
      this[t(567)][n] = { ...this[t(567)][a], ...i }, this[t(567)][n][t(661)] = this.CHARS[n][t(516)] ? a : n, this[t(567)][n][t(514)] = (this[t(567)][n][t(440)] ? a : n)[t(909)]();
    }
  }, PALETTES: [{ lightTint: 16774132, rimTint: 16771796, ambientTint: 16776184, shadowTint: 14870009, tintStrength: 3 }, { ambientTint: 16777215, lightTint: 16774132, rimTint: 16774902, ambientTint: 16777215, shadowTint: 15264499, tintStrength: 1 }, { lightTint: 16768728, rimTint: 16771004, ambientTint: 16774388, shadowTint: 15000307, tintStrength: 2.75 }, { lightTint: 15134719, rimTint: 12244991, ambientTint: 16185855, shadowTint: 15988735, tintStrength: 2 }], BLINK_DUR: 0.133, EYE_MAX_X: 0.5, EYE_MAX_Y: 0.333, HEAD_MAX_X: ze[r(546)][r(701)](15), HEAD_MAX_Y: ze[r(546)].degToRad(45), beginLoadingScreen() {
    const t = r;
    this.loadingScreen = document[t(438)](t(801));
    const n = this[t(703)][t(718)](t(504)), i = n[t(718)](t(695)), s = n[t(718)](t(631));
    this[t(622)] = setInterval(() => {
      const a = t;
      n[a(535)].add("animate"), setTimeout(() => {
        const o = a;
        n[o(535)][o(619)](o(586)), [i[o(495)], s[o(495)]] = [s[o(495)], i[o(495)]], i[o(535)][o(575)](o(673));
      }, 400);
    }, 5e3);
  }, hideLoadingScreen() {
    const t = r;
    clearInterval(this[t(622)]), this[t(622)] = null, setTimeout(() => {
      const n = t;
      this[n(703)].classList[n(865)]("done-loading"), document[n(718)](n(517))[n(535)][n(865)](n(792)), document[n(741)]("click", () => {
        const i = n;
        this[i(593)] = true, this[i(540)][i(874)](), document[i(718)]("#tap-me")[i(535)][i(865)]("tapped"), this[i(901)][i(712)](true, true);
      }, { once: true });
    }, 1e3);
  }, async updatePageForChar(t = "", n = null) {
    const i = r;
    if (t) this[i(550)][this[i(723)]] = [this.char, this[i(569)], this[i(471)], this[i(580)], this[i(463)]], this[i(723)] = "" + t[i(667)](0).toUpperCase() + t[i(728)](1);
    else {
      const o = new URLSearchParams(location[i(794)]);
      this.charName = o[i(522)]("character") || o[i(522)](i(808)) || new URL(location[i(913)])[i(666)][i(775)](".")[0], this.charName = this[i(723)] ? "" + this.charName[0][i(429)]() + this[i(723)][i(728)](1) : "", this[i(723)] = this[i(567)][this.charName] ? this.charName : i(626);
    }
    switch (this.activeChar = this[i(567)][this[i(723)]], this.charName) {
      case "Galbrena":
        if (document.querySelector(i(842))) {
          this[i(774)] = [i(859), i(702)];
          break;
        }
      default:
        this[i(774)] = [this[i(723)], this[i(811)][i(746)]];
    }
    if (!t) {
      document[i(905)][i(829)](i(823), this[i(723)]);
      const o = this[i(723)][i(775)]("_")[0], l = document.querySelector(i(517));
      l[i(417)] = l[i(417)][i(658)](i(626), o), l[i(525)] = l.alt[i(658)]("Denia", o), document[i(718)](i(513)).innerText = this[i(811)][i(526)];
      const c = document[i(718)](i(698));
      return c[i(679)] = c.href[i(658)](i(626), o), this[i(540)] = document[i(718)](i(487) + this.activeChar[i(514)]), void (this[i(540)].volume = this.bgm[i(530)](i(501)));
    }
    this[i(808)][i(615)] = this[i(569)][i(615)] = this[i(471)][i(615)] = false, await this[i(647)]() || (n == null ? void 0 : n[i(473)](i(714))[i(535)][i(865)](i(744)), await this.setupModel(false, true), n == null ? void 0 : n[i(473)](".switch-char").classList[i(619)](i(744))), document[i(905)].setAttribute("data-char", this[i(723)]);
    let s = null, a = false;
    t && !this[i(540)][i(760)] && (a = true, s = this[i(540)]), this[i(540)] = document.querySelector(i(487) + this.activeChar[i(514)]), this[i(540)] !== s && (this.bgm[i(460)] = this[i(540)][i(530)](i(501)), a && await this[i(562)](s, this[i(540)]));
  }, crossfadeTracks: async (t, n, i = 0.3) => new Promise((s) => {
    const a = r, o = performance[a(605)](), l = t[a(460)], c = n[a(460)];
    n[a(460)] = 0, n[a(874)]();
    const h = () => {
      const u = a, d = (performance.now() - o) / (1e3 * i), f = Math.min(Math[u(603)](d, 0), 1);
      t[u(460)] = l * (1 - f), n[u(460)] = c * f, f < 1 ? requestAnimationFrame(h) : (t.pause(), t[u(460)] = l, n.volume = c, s());
    };
    h();
  }), setupThree() {
    const t = r;
    this.scene = new ze[t(709)](), this[t(725)][t(707)] = null, this[t(576)] = new yt(50, window[t(898)] / window[t(889)]), this.scene[t(865)](this[t(576)]), this[t(595)] = new ze[t(492)]({ antialias: true, alpha: true }), this[t(595)][t(817)](window.innerWidth, window.innerHeight, false), this.renderer[t(802)](window[t(564)]), this[t(595)][t(916)] = true, this[t(864)] = this[t(595)][t(489)], document[t(718)](t(763))[t(733)](t(584), this.canvas), this[t(846)] = new x_(this.camera, this[t(864)]), this[t(846)][t(830)] = { LEFT: ze[t(902)][t(885)], MIDDLE: Wn.PAN, RIGHT: ze[t(902)][t(594)] }, this[t(439)] = new ze[t(777)](16777215, this[t(845)] ? 1 : 0.4), this[t(899)] = new ze[t(618)](16777215), this[t(725)][t(865)](this.dirLight, this[t(899)]), this[t(437)] = new Kd(this[t(439)], 10, 16777215), this[t(437)][t(615)] = false, this[t(725)].add(this.dirLightHelper);
  }, loadTex: (t, n = ze[r(652)]) => new Promise((i) => {
    const s = r;
    new ze[s(720)]()[s(706)](t, (a) => {
      a.encoding = n, i(a);
    }, void 0, () => i(null));
  }), cachedMats: [], async applyMats(t = null, n = false) {
    const i = r;
    t = t !== null ? t : this[i(845)];
    const s = this[i(708)]["" + this[i(774)][0] + t] || [];
    if (s.length > 1) return void (this.mesh[i(676)] = s);
    const a = (/* @__PURE__ */ new Date())[i(699)]();
    this[i(753)] === void 0 && (this[i(753)] = a > 6 && a < 18 ? 2 : 3);
    const o = this[i(431)][this[i(753)]];
    for (const l of this[i(811)][i(722)]) {
      if (t) {
        s[i(853)](new ze[i(705)]({ map: await this[i(810)]("" + this[i(768)] + this.skin[0] + "/" + this[i(774)][1] + l + i(877)) || await this.loadTex("" + this.TEXTURES_PATH + this.charName + "/" + this[i(811)][i(746)] + l + i(877)) }));
        continue;
      }
      const c = { morphTextureStride: { value: 1 }, base: { value: i(527) === l ? null : await this[i(810)]("" + this[i(768)] + this[i(774)][0] + "/" + this[i(774)][1] + l + i(877)) }, aCutoff: { value: 0 }, gCutoff: { value: 0 }, isFur: { value: false }, hasOutlineMask: false, normalMap: { value: null }, hasNormalMap: { value: false }, ftm: { value: null }, hasFTM: { value: false }, lightTint: { value: new ze[i(421)](o[i(822)]) }, rimTint: { value: new ze[i(421)](o.rimTint) }, ambientTint: { value: new ze[i(421)](o.ambientTint) }, shadowTint: { value: new ze[i(421)](o[i(893)]) }, tintStrength: { value: o[i(481)] }, specularExp: { value: 500 }, rimThreshold: { value: 0.2 }, rimAmount: { value: 0.6 }, exposure: { value: 0.5 }, invGamma: { value: 1 / 1.55 }, saturation: { value: 1 }, hairSaturation: { value: 1 }, isFace: { value: false }, isEye: { value: false }, isHair: { value: false }, hasFX: { value: false }, useSparkle: { value: false }, hasMilkway: { value: false }, shouldGlowRed: { value: false }, isDeniaChest: { value: false }, hasMilkwayMask: { value: false }, milkwayMinG: { value: 0.37 }, outlineBurnIntensity: { value: 0.2 }, outlineLightInfluence: { value: 0.667 }, outlineMaxBrightness: { value: 0.3 }, outlineMaxBrightnessHair: { value: this[i(811)].outlineMaxBrightnessHair || 0.65 }, isOutline: { value: false } };
      switch (l) {
        case i(795):
          c[i(908)] = { value: true }, c.het = { value: await this[i(810)]("" + this.TEXTURES_PATH + this[i(774)][0] + "/" + this.skin[1] + l + i(609)) }, c.faceSDF = { value: await this.loadTex(this[i(768)] + "T_FemaleMFace01_SDF.png") }, c[i(656)] = { value: await this[i(810)](this[i(768)] + i(503)) };
          break;
        case i(534):
          c.isEye = { value: true }, c[i(665)] = { value: await this[i(810)](this[i(768)] + i(565)) }, c.eyeBottomHighlight = { value: await this[i(810)](this[i(768)] + i(589)) };
          break;
        case i(860):
        case i(511):
          c[i(649)] = { value: true }, c[i(485)] = { value: await this.loadTex("" + this[i(768)] + this[i(723)] + "/" + this[i(811)].texPrefix + l + i(533)) };
          break;
        case i(527):
          c[i(687)] = { value: true }, c[i(449)] = { value: await this[i(810)](this[i(768)] + i(814)) };
          break;
        case "Up":
        case i(781):
        case i(624):
        case i(745):
          c[i(422)] = { value: await this.loadTex("" + this[i(768)] + this[i(774)][0] + "/" + this[i(774)][1] + l + i(858)) }, i(626) !== this.charName && i(776) !== this[i(723)] || (c[i(524)] = { value: await this.loadTex("" + this[i(768)] + this[i(774)][0] + "/" + this.skin[1] + l + i(857)) });
      }
      switch (this.charName) {
        case i(626):
          switch (l) {
            case "Up":
              c[i(470)] = { value: 0.825 };
              break;
            case i(624):
              c.outlineMask = { value: await this[i(810)]("" + this[i(768)] + this[i(774)][0] + "/" + this[i(774)][1] + l + i(883)) }, c[i(491)] = { value: true };
              break;
            case i(860):
              c[i(882)] = { value: true }, c[i(838)] = { value: true };
              break;
            case i(781):
              c.hasFX = { value: true }, c.hasMilkway = { value: true };
          }
          break;
        case i(776):
          switch (l) {
            case "Fx":
              c[i(770)] = { value: 0.8 }, c[i(491)] = { value: true }, c[i(587)] = { value: true };
              break;
            case "Up":
              c[i(470)] = { value: 0.825 }, c[i(491)] = { value: true }, c.shouldGlowRed = { value: true };
              break;
            case i(624):
              c[i(491)] = { value: true };
              break;
            case i(860):
              c[i(882)] = { value: true }, c[i(838)] = { value: true };
              break;
            case "Down":
              c[i(882)] = { value: true }, c.hasMilkway = { value: true };
          }
          break;
        case i(613):
          switch (l) {
            case i(887):
              c[i(470)] = { value: 0.825 };
              break;
            case "Fx":
              c[i(770)] = { value: 0.8 }, c.hasMilkway = { value: true }, c[i(587)] = { value: true };
              break;
            case i(624):
              c[i(491)] = { value: true };
          }
      }
      if (c[i(422)][i(900)] && (c[i(436)] = { value: true }), c[i(656)] && (c[i(690)] = { value: true }), c[i(491)][i(900)]) {
        const u = await this[i(810)](this.TEXTURES_PATH + i(682) + (i(624) === l ? 230046 : 10025) + i(621)), d = await this[i(810)](this.TEXTURES_PATH + "T_Sparkle_SDF.png");
        u.wrapS = u[i(566)] = d.wrapS = d[i(566)] = Un, c[i(427)] = { value: u }, c[i(852)] = { value: d }, c[i(587)].value || (c[i(739)] = { value: await this[i(810)]("" + this[i(768)] + this[i(723)] + "/" + this.activeChar[i(746)] + l + i(632)) }, c[i(739)][i(900)] && (c.hasMilkwayMask = { value: true }));
      }
      if (c[i(524)].value && (c[i(832)][i(900)] = true, c.metallicMatCap = { value: await this.loadTex(this[i(768)] + i(585)) }), c[i(882)][i(900)]) {
        const u = await this[i(810)]("" + this[i(768)] + this.charName + "/" + this[i(811)][i(746)] + l + i(456));
        if (u.wrapS = u.wrapT = Un, c.fx = { value: u }, c.useSparkle.value) {
          const d = await this.loadTex(this.TEXTURES_PATH + i(507));
          d[i(628)] = d[i(566)] = ze[i(515)], c[i(852)] = { value: d };
        }
      }
      const h = new ze[i(685)]({ lights: true, uniforms: Object[i(520)](Object[i(520)]({}, ze[i(890)].lights), c), vertexShader: this[i(542)], fragmentShader: this[i(500)] });
      l === "Fur" && (h[i(441)] = true, h[i(790)] = cn, h.depthWrite = false), s[i(853)](h);
    }
    if (this[i(708)]["" + this[i(774)][0] + t] = s, n) return s;
    this[i(580)][i(676)] = s;
  }, updatePalette(t) {
    const n = r;
    if (!this[n(845)]) {
      t = { tintStrength: { value: t[n(481)] }, lightTint: { value: new ze[n(421)](t[n(822)]) }, rimTint: { value: new ze[n(421)](t[n(555)]) }, ambientTint: { value: new ue(t.ambientTint) }, shadowTint: { value: new ze[n(421)](t.shadowTint) } };
      for (const i in this[n(580)].material) Object.assign(this[n(580)][n(676)][i][n(748)], t), this[n(463)][n(676)][i][n(748)] && Object[n(520)](this[n(463)][n(676)][i].uniforms, t);
    }
  }, async switchSkin(t, n, i) {
    const s = r;
    this[s(774)] = [t, n];
    let a = this[s(708)]["" + t + this[s(845)]], o = [];
    if (a) return this[s(580)].material = a, void (this.cMesh[s(676)] = this[s(708)][t + s(819)]);
    a = this.cachedMats["" + this[s(723)] + this.useThreeMat][s(499)]((c) => c[s(569)]()), o = this[s(708)][this[s(723)] + s(819)][s(499)]((c) => c.clone());
    const l = this.activeChar.parts;
    for (const c in l) {
      if (!i[s(625)](l[c])) continue;
      const h = await this[s(810)]("" + this.TEXTURES_PATH + t + "/" + n + l[c] + s(877));
      Object[s(520)](a[c][s(748)], { base: { value: h } }), l[c] !== "Eye" && Object[s(520)](o[c][s(748)], { base: { value: h } });
    }
    this[s(580)][s(676)] = a, this.cMesh[s(676)] = o, this[s(708)]["" + t + this[s(845)]] = a, this[s(708)][t + s(819)] = o;
  }, async setupModel(t = false, n = false) {
    var _a2, _b;
    const i = r;
    this[i(845)] === void 0 && (this[i(845)] = t), this[i(812)] || (this[i(812)] = new z_()), this[i(808)] = await new Promise((d, f) => {
      const m = i;
      this[m(812)][m(706)]("" + this[m(809)] + this[m(723)] + ".fbx", (g) => d(g), void 0, (g) => f(g));
    }), this[i(580)] = this.char.getObjectByProperty("type", i(772));
    let s = this[i(580)].geometry;
    const a = navigator[i(551)][i(909)]();
    (a[i(625)]("phone") || a[i(625)](i(782)) || a[i(625)](i(757)) || a[i(625)](i(608)) || a[i(625)](i(747)) || a.includes(i(788)) || a[i(625)](i(861)) || a[i(625)](i(651)) || a[i(625)]("docomo") || a[i(625)](i(461))) && (this.mesh[i(572)] = lM(s)), this[i(650)](this[i(580)], /* @__PURE__ */ new Set(["Pupil_Up", i(552), i(891), i(505)])), this[i(580)].updateMatrixWorld(true);
    const o = new en()[i(827)](this[i(808)]);
    this.camera[i(756)].z = o.getSize(new A())[this[i(811)][i(786)]] * this.activeChar[i(825)], await this.applyMats();
    const l = this.mesh[i(752)];
    if (this.activeChar[i(688)]) {
      const d = await (await fetch("" + this.POSES_PATH + this[i(723)] + "/" + this[i(811)][i(688)] + i(558))).json();
      for (const [f, m] of Object[i(541)](d)) {
        const g = l[i(643)](f);
        g && (g[i(756)][i(549)](m.position)[i(721)](this.activeChar[i(445)]), g[i(582)][i(549)](m[i(582)]), g.scale[i(549)](m[i(854)]));
      }
    }
    const c = l[i(643)](i(588)) || l[i(643)]("\u8170"), h = this[i(811)].startingRot;
    c[i(645)](ze[i(546)][i(701)](h.z)), c.rotateX(ze[i(546)].degToRad(h.x)), c[i(653)](Qt[i(701)](h.y));
    const u = () => {
      const d = i, f = this.mesh[d(752)][d(643)](d(710)) || this[d(580)][d(752)][d(643)]("\u9996"), m = new ze[d(479)]();
      f[d(879)](m), this[d(439)][d(756)][d(488)](m.x, m.y, m.z + this[d(837)]), this[d(439)][d(452)][d(756)][d(784)](m), this[d(725)][d(538)][d(625)](this.dirLight.target) || this.scene[d(865)](this[d(439)][d(452)]), this[d(576)][d(756)].x = m.x, this[d(576)][d(756)].y = m.y, this[d(846)][d(452)][d(784)](m), this[d(846)].update();
    };
    this[i(816)][i(761)] = u, u(), this[i(725)][i(865)](this[i(808)]), this[i(471)] = this[i(807)](this[i(580)]);
    for (const [d, f] of Object[i(541)](this[i(811)][i(597)])) this.hitbox[i(756)][d] += f;
    this[i(723)][i(715)](i(626)) && this.hitbox.rotateX(ze[i(546)][i(701)](90)), this[i(471)][i(644)](true), this[i(725)][i(865)](this.hitbox), this[i(881)](), n && this.setupMouseFollow[i(677)](), this[i(845)] || ((_b = (_a2 = this[i(901)])[i(712)]) == null ? void 0 : _b.call(_a2, true, true));
  }, pruneMorphTargets(t, n) {
    const i = r, s = t[i(572)][i(835)][i(756)], a = t[i(476)], o = new et(new Float32Array(t[i(572)][i(800)].position[i(448)][i(510)]), 3);
    for (let l in a) {
      if (n[i(843)](l)) continue;
      const c = s[a[l]];
      s[a[l]] = o, c && c[i(448)] && (c[i(448)] = null);
    }
    t[i(572)][i(659)] = true;
  }, simplifyMesh(t, n = 0.6) {
    const i = r, s = t.geometry[i(800)][i(756)], a = s.count, o = Math[i(603)](1, Math.floor(1 / n)), l = new Float32Array(3 * Math[i(601)](a / o));
    let c = 0;
    const h = new ze[i(479)](), u = new ze[i(479)]();
    for (let f = 0; f < a; f++) h.fromBufferAttribute(s, f), u[i(865)](h);
    u.divideScalar(a);
    for (let f = 0; f < a; f += o) h[i(717)](s, f), h[i(472)](u), h[i(581)](new A(1, 0, 0), -Math.PI / 2), h[i(865)](u), h[i(828)](t.matrixWorld), l[c++] = h.x, l[c++] = h.y, l[c++] = h.z;
    const d = new ze[i(895)]();
    return d.setAttribute(i(756), new ze[i(655)](l, 3)), new vt(d, new ze[i(493)]({ side: ze[i(868)], visible: false }));
  }, async createOutlineClone() {
    const t = r;
    this[t(569)] = eM[t(569)](this[t(808)]);
    const n = this[t(569)][t(602)](t(578), t(772));
    n.updateMatrixWorld(true), n.bind(this[t(580)].skeleton, n[t(896)]);
    let i = this[t(708)][this[t(723)] + "Outlines"];
    if (i) return void (n.material = i);
    i = (this.cachedMats[this.charName + t(821)] || await this[t(634)](false, true))[t(499)]((a) => a[t(569)]());
    const s = this[t(811)].parts;
    for (const a in i) t(534) !== s[a] && t(759) !== s[a] && t(527) !== s[a] ? (i[a].side = ze[t(848)], i[a][t(441)] = true, i[a][t(748)][t(736)] = { value: true }, i[a][t(748)][t(749)] = { value: t(511) === s[a] ? this[t(811)].outlineThickness : 875e-6 * this.activeChar.posMultiplier }) : i[a] = new _n({ visible: false });
    n.material = i, this[t(708)][this.charName + "Outlines"] = i, this[t(463)] = n, this[t(569)].visible = !this.useThreeMat, this[t(725)][t(865)](this[t(569)]);
  }, existingModels: [], async showExistingModel() {
    const t = r, n = this[t(550)][this.charName];
    if (!n) return false;
    this[t(808)] = n[0], this.clone = n[1], this[t(471)] = n[2], this[t(580)] = n[3], this[t(463)] = n[4];
    const i = new en()[t(827)](this.char);
    this[t(576)][t(756)].z = i[t(509)](new ze[t(479)]())[this[t(811)][t(786)]] * this[t(811)][t(825)], await this[t(634)](), this.setupModel[t(761)](), this.setupMouseFollow[t(677)](), this[t(850)][this[t(672)][t(815)]] = 0;
    for (const s of ["_L", "_R", "_Up", t(442)]) this[t(850)][this[t(672)][t(451) + s]] = 0;
    return this[t(678)](this[t(431)][this[t(753)]]), await new Promise((s) => requestAnimationFrame(s)), n[0][t(615)] = n[2][t(615)] = true, n[1][t(615)] = !this[t(845)], this[t(845)] || this[t(901)].playVoiceline(true, true), true;
  }, async init() {
    const t = r;
    this[t(727)](), this[t(560)](), document[t(741)]("click", () => this.hasInteracted = true, { once: true }), this[t(458)](), this[t(598)](), this.vertexShader = await fetch(this[t(443)] + t(751)), this.vertexShader = await this[t(542)][t(512)](), this[t(500)] = await fetch(this[t(443)] + "fragmentShader.glsl"), this.fragmentShader = await this[t(500)][t(512)](), this[t(845)] = false, await this.setupModel(), this.postprocessing(), this[t(595)][t(548)](this[t(725)], this[t(576)]), this.addEventListeners(), this[t(680)] = new ze[t(592)](), this[t(637)] = this[t(586)][t(778)](this), this[t(586)](), this.hideLoadingScreen();
  }, postprocessing() {
    const t = r;
    this[t(826)] = new sM(this[t(595)]), this[t(826)][t(797)](new rM(this[t(725)], this[t(576)])), this.bloomPass = new vs(new W(window[t(898)], window.innerHeight), 0.325, 0.95, 0.4), this[t(839)][t(423)] = false, this[t(826)][t(797)](this[t(839)]);
    const n = new oM();
    n.renderToScreen = true, this.composer[t(797)](n), this.renderer[t(478)] = In, this.renderer[t(474)] = Ue;
  }, addEventListeners() {
    const t = r;
    this[t(901)](), this[t(662)](), document.addEventListener(t(607), () => {
      const i = t;
      this[i(732)] *= 0.5, window[i(446)](i(693), this[i(766)]);
    }, { once: true }), document[t(741)](t(607), () => [this[t(875)], this[t(696)], this.doNotFollowTouch] = [this.mx, this.my, false]), document[t(741)]("touchmove", () => this[t(869)] = true), document[t(741)](t(730), (i) => this[t(869)] || this[t(547)](i));
    let n = false;
    document.addEventListener(t(430), () => {
      const i = t;
      i(615) !== document.visibilityState ? this[i(540)] && !this[i(540)][i(760)] ? (this[i(540)][i(796)](), n = true) : n = false : n && this[i(540)].play();
    }), window[t(741)](t(660), ((i) => {
      const s = t;
      (i[s(620)] || i.metaKey) && i[s(616)] && s(765) === i[s(486)] && (this[s(437)].visible = !this[s(437)][s(615)]);
    })[t(778)](this)), window[t(741)](t(623), () => this[t(743)](), false);
  }, setupMouseDown() {
    const t = r;
    let n = {}, i = false, s = false, a = false, o = false;
    document[t(741)](t(432), async (S) => {
      const y = t;
      if (this[y(834)] = true, n = { x: this.mx, y: this.my }, this[y(864)][y(577)].cursor = this[y(892)] ? y(537) : y(490), i || (i = true, document[y(741)](y(783), c)), S.button !== 0 || s) return;
      const R = S[y(452)].closest(y(600));
      if (R) {
        if (R[y(535)][y(606)](y(700))) return s = true, await this[y(458)](R[y(535)][R.classList[y(510)] - 1], R), void (s = false);
        switch (R.id) {
          case y(414):
            s = true, document[y(905)][y(535)][y(865)](R.id + y(910)), this[y(845)] = !this[y(845)], await h(), this[y(845)] ? (M(this[y(540)]), a = !this[y(540)].paused, o = y(475) === u.style[y(642)], f(false)) : (p(true), a && w(this[y(540)]), o && f(true)), document[y(905)][y(535)][y(619)](R.id + "-loading"), s = false;
            break;
          case y(459):
            if (this[y(845)]) return;
            f();
            break;
          case y(612):
            if (this[y(845)]) return;
            switch (s = true, this[y(723)]) {
              case "Galbrena":
                document.body[y(535)][y(865)](R.id + y(910)), R[y(535)][y(606)]("galbrena-2") ? (this[y(580)][y(676)] = this.cachedMats["" + this[y(723)] + this[y(845)]], this[y(463)][y(676)] = this[y(708)][this[y(723)] + y(819)], this[y(774)] = [this[y(723)], this[y(811)][y(746)]], R[y(535)][y(619)](y(462))) : (await this[y(767)]("Galbrena-2", "T_NHT1CalbrenaChaopin", ["Bangs", y(781), "Eye", y(860), "Up"]), R[y(535)][y(865)](y(462))), p(true);
                break;
              case "Denia":
              case "Denia_2":
                document.body[y(535)].add(y(726)), y(626) === this[y(723)] ? (document[y(718)](y(426))[y(535)][y(865)](y(742)), await this[y(458)](y(776))) : (document.querySelector(y(426))[y(535)][y(619)](y(742)), await this.updatePageForChar(y(626)));
            }
            document[y(905)][y(535)][y(619)](R.id + y(910)), document[y(905)].classList.remove(y(726)), s = false;
            break;
          case y(466):
            if (this[y(845)]) return;
            s = true, document[y(905)][y(535)][y(865)](R.id + y(910)), y(626) === this[y(723)] ? (document[y(718)](y(426))[y(535)][y(865)](y(773)), await this.updatePageForChar(y(613))) : (document[y(718)](".switch-char.denia")[y(535)][y(619)]("denia_3"), await this[y(458)](y(626))), document[y(905)].classList[y(619)](R.id + y(910)), s = false;
            break;
          case y(758):
            const b = window[y(590)], T = b[y(799)], N = T[y(415)] || T[y(755)] || T[y(641)] || T[y(873)], B = b[y(617)] || b[y(888)] || b[y(447)] || b[y(635)];
            b[y(668)] || b.mozFullScreenElement || b[y(847)] || b[y(610)] ? B[y(591)](b) : N[y(591)](T);
            break;
          case y(806):
            if (this[y(845)]) return;
            ++this[y(753)] >= this[y(431)][y(510)] && (this[y(753)] = 0), this.updatePalette(this[y(431)][this[y(753)]]), p(true);
            break;
          case y(716):
            if (this[y(845)]) return;
            this[y(540)][y(760)] ? w(this[y(540)]) : M(this[y(540)]);
        }
      }
    });
    let l = false;
    const c = (S) => {
      const y = t;
      S[y(674)] === 0 && (this[y(834)] = false, l = Math[y(750)](this.mx - n.x) > 10 || Math[y(750)](this.my - n.y) > 10, this[y(864)].style.cursor = this[y(892)] ? "pointer" : y(627), this[y(845)] || p());
    }, h = async () => {
      const S = t;
      if (document[S(905)][S(535)][S(575)](S(464)), this[S(845)]) {
        this[S(439)][S(532)] = 1, this[S(899)].intensity = 1, this.clone.visible = false, this.headBone.quaternion[S(813)](), this[S(850)][this.dict.E_Close] = 0;
        for (const y of ["_L", "_R", S(731), S(442)]) this[S(850)][this[S(672)]["Pupil" + y]] = 0;
      } else this.dirLight[S(532)] = 0.4, this[S(899)].intensity = 2.4, this[S(569)].visible = true;
      this[S(634)]();
    };
    this[t(789)] = document[t(718)](t(735));
    const u = this[t(789)][t(718)]("#video-bg");
    let d = null;
    const f = async (S = null) => {
      const y = t;
      if (d && (S === false || S === null && u[y(577)][y(642)] === "block")) d[y(694)]()[0][y(424)](), u.style[y(642)] = y(894), this[y(839)][y(433)] = true, this.ambientLight[y(532)] = 1, u[y(878)] = null, u[y(796)]();
      else if (S === true || S === null && y(894) === u[y(577)].display) try {
        d = await navigator[y(418)][y(561)]({ video: { facingMode: { ideal: y(416) } } }), u[y(878)] = d, await new Promise((R) => u.onloadedmetadata = R), this[y(789)][y(577)][y(444)] = u[y(737)] / u[y(455)], this.videoBgWrapper.style[y(531)] = window.innerWidth > window[y(889)] ? y(734) : y(805), this[y(789)][y(577)][y(502)] = window[y(898)] > window.innerHeight ? "auto" : y(803), u[y(874)](), u[y(577)][y(642)] = y(475), this[y(839)][y(433)] = false, this.ambientLight.intensity = 2.4, p(true);
      } catch {
      }
    };
    let m = false, g = -1, x = [];
    const p = (S = false, y = false) => {
      const R = t;
      if (!this[R(593)] || m) return;
      const b = this[R(811)][R(862)];
      if (!b) return;
      if (!S) {
        if (l || !this[R(892)]) return;
      }
      let T = null;
      if (y) {
        const B = this[R(811)][R(536)];
        if (B) {
          let D = -1;
          do
            D = Math[R(897)](Math[R(684)]() * B[R(510)]);
          while (D === x[this[R(811)][R(661)]]);
          T = new Audio("" + this.VOICES_PATH + this[R(811)].voicelinesPath + "/" + B[D] + R(729)), x[this[R(811)].voicelinesPath] = D;
        }
      }
      let N = -1;
      if (!T) {
        if (b[R(510)] >= 5) do
          N = Math[R(897)](Math[R(684)]() * b[R(510)]);
        while (N === g);
        else g += 1, N = g >= b[R(510)] ? 0 : g;
        T = new Audio("" + this[R(740)] + this[R(811)][R(661)] + "/" + b[N] + R(729));
      }
      T[R(874)](), m = true, T.addEventListener("ended", () => m = false, { once: true }), T[R(741)](R(583), () => m = false, { once: true }), g = N;
    };
    this[t(901)][t(712)] = p;
    let _ = {}, v = {};
    const M = (S, y = 0.3) => {
      const R = t;
      if (_[S.id]) return;
      _[S.id] = true;
      const b = S[R(460)], T = performance[R(605)](), N = (B) => {
        const D = R, O = (B - T) / 1e3, k = Math[D(787)](O / y, 1);
        S.volume = b * (1 - k), k < 1 ? v[S.id] = requestAnimationFrame(N) : (S[D(796)](), S[D(460)] = b, _[S.id] = false);
      };
      v[S.id] = requestAnimationFrame(N);
    }, w = (S) => {
      const y = t;
      cancelAnimationFrame(v[S.id]), _[S.id] = false, S.volume = this[y(540)].getAttribute(y(501)), S[y(874)]();
    };
  }, setupMouseFollow() {
    const t = r, n = () => {
      const i = Za;
      this[i(850)] = this[i(580)][i(477)], this[i(672)] = this.mesh.morphTargetDictionary, this.headBone = this[i(580)][i(752)].getBoneByName("Bip001Head") || this[i(580)].skeleton[i(643)]("\u982D"), this.headBone[i(582)][i(813)](), this[i(574)] = new A(), this[i(697)][i(879)](this[i(574)]);
    };
    this[t(662)].init = n, n(), this[t(559)] = new ze[t(571)](), this[t(880)] = new ze[t(867)](), this[t(547)] = (i) => {
      var _a2, _b;
      const s = t;
      this.mx = i[s(483)] || ((_a2 = i[s(498)]) == null ? void 0 : _a2[0][s(483)]) || this.mx, this.my = i[s(556)] || ((_b = i[s(498)]) == null ? void 0 : _b[0][s(556)]) || this.my, this[s(836)] || ([this[s(836)], this[s(724)]] = [this.mx, this.my]), this[s(845)] || (this.mouseVec2.x = 2 * (this.mx / window.innerWidth - 0.5), this.mouseVec2.y = -2 * (this.my / window[s(889)] - 0.5), this[s(559)][s(863)](this[s(880)], this.camera), this[s(892)] = this[s(559)][s(681)](this[s(471)])[s(510)] > 0, this[s(864)][s(577)][s(497)] = this[s(892)] ? this[s(834)] ? s(490) : s(537) : this[s(834)] ? "grab" : s(627));
    }, this[t(766)] = this[t(547)].bind(this), window[t(741)](t(693), this.updateMouseBound);
  }, onWindowResize: function() {
    const t = r;
    this[t(576)][t(599)] = window[t(898)] / window[t(889)], this[t(576)].updateProjectionMatrix(), this.bloomPass[t(817)](window.innerWidth, window[t(889)]), this[t(595)][t(817)](window[t(898)], window.innerHeight, false), this[t(595)][t(802)](window[t(564)]), this[t(789)].style[t(531)] = window[t(898)] > window.innerHeight ? t(734) : t(805), this[t(789)][t(577)][t(502)] = window[t(898)] > window.innerHeight ? "auto" : " 100%";
  }, animate() {
    const t = r;
    requestAnimationFrame(this[t(637)]);
    const n = this.clock[t(425)](), i = this[t(439)][t(452)][t(756)];
    this.dirLight.position[t(488)](i.x + Math[t(420)](0.333 * -n + Math.PI) * this[t(837)] * 1, i.y, i.z + Math[t(793)](0.333 * -n + Math.PI) * this[t(837)]), this[t(437)].visible && this[t(437)].update(), this[t(845)] ? this.renderer.render(this[t(725)], this.camera) : (this[t(469)](n), this[t(824)](), this[t(826)][t(554)]());
  }, isFacingCamera() {
    const t = r, n = new ze[t(479)]()[t(670)](this.camera.position, this[t(580)][t(756)]).normalize(), i = new ze[t(479)](0, 1, 0)[t(614)](this.mesh[t(529)](new ze[t(419)]()));
    return this.activeChar[t(570)] ? n[t(673)](i) <= 0 : n[t(673)](i) > 0;
  }, lerp: (t, n, i) => (1 - i) * t + i * n, followMouseLerp: 0.15, followMouse() {
    const t = r;
    if (this[t(869)] && this[t(875)] === this.mx && this[t(696)] === this.my) return;
    this[t(836)] = this.lerp(this[t(836)], this.mx, this.followMouseLerp), this[t(836)] = Math[t(897)](100 * this[t(836)]) / 100, this[t(724)] = this[t(518)](this[t(724)], this.my, this[t(732)]), this.lmy = Math.floor(100 * this[t(724)]) / 100;
    const n = 2 * (this[t(836)] / window[t(898)] - 0.5), i = -2 * (this[t(724)] / window.innerHeight - 0.5), s = this.headPos[t(569)]()[t(663)](this[t(576)]), a = n - s.x, o = i - s.y;
    a > 0 ? (this[t(850)][this[t(672)][t(505)]] = Math[t(787)](a * this.EYE_MAX_X, this[t(754)]), this[t(850)][this.dict[t(891)]] = 0) : (this[t(850)][this[t(672)][t(891)]] = Math[t(787)](-a * this[t(754)], this[t(754)]), this.inf[this[t(672)].Pupil_L] = 0), o > 0 ? (this[t(850)][this.dict[t(480)]] = Math[t(787)](o * this[t(468)], this[t(468)]), this.inf[this[t(672)].Pupil_Down] = 0) : (this[t(850)][this[t(672)][t(552)]] = Math[t(787)](-o * this.EYE_MAX_Y, this.EYE_MAX_Y), this[t(850)][this[t(672)][t(480)]] = 0), this.headBone[t(906)][this[t(811)][t(820)]] = a * this[t(523)] * (this[t(719)]() ? 1 : -1), this.headBone.rotation[this.activeChar.headRotAxisUpDown || "z"] = -o * this[t(769)];
  }, blinkDur: 0.13333, blinkWeights: [1.2, 0.375, 1.5], lastBlink: 0, blinkInterval: 0, blink(t) {
    const n = r, i = t - this.lastBlink;
    if (i > this.blinkInterval && this[n(850)][this.dict.E_Close] == 0) return this[n(596)] = this[n(886)] * (0.2 * Math.random() + 0.2) / 0.3, this[n(484)] = [Math[n(684)]() * (1.35 - 1.05) + 1.05, Math[n(684)]() * (0.45 - 0.3) + 0.3, Math[n(684)]() * (1.65 - 1.35) + 1.35], this[n(911)] = t, void (this[n(671)] = 7.5 * Math.random() + 7.5);
    const s = this.blinkDur * this[n(484)][0] * 2 * this[n(484)][1];
    i < this[n(596)] * this.blinkWeights[0] ? this[n(850)][this[n(672)].E_Close] = Math[n(787)](1, i / this[n(596)]) : i < s ? this.inf[this[n(672)][n(815)]] = 1 : i < 1.5 * s * this[n(484)][2] ? this.inf[this[n(672)][n(815)]] = Math[n(603)](0, 1 - (i - s) / this[n(596)]) : this.inf[this[n(672)][n(815)]] = 0;
  } };
  document[r(741)](r(791), () => e.init());
})();
