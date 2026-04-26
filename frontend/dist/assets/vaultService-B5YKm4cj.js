const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Co_0hqsi.js","assets/pdf-utils-r4RjNe6V.js","assets/compression-utils-CXh1ITwj.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh0klhaa.js","assets/element-plus-Dh61In7b.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CLSE-HWx.css"])))=>i.map(i=>d[i]);
import { _ as D, __tla as __tla_0 } from "./pdf-utils-r4RjNe6V.js";
import { n as B, o as L, l as z, r as y, b as K, p as m, u as W, s as Q, g as Z, q as O, a as N, __tla as __tla_1 } from "./index-Co_0hqsi.js";
import { l as x, __tla as __tla_2 } from "./resourceRegistry-COxFgigF.js";
import { f as X, e as M } from "./vue-core-Daban9YF.js";
let Tt, J, At, ht, gt, St, dt, yt, pt, wt, j, mt, vt, rt, at, ot, st, it;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })()
]).then(async ()=>{
    class w extends Error {
        constructor(r, e = "VAULT_ERROR", n = null){
            super(r), this.name = "vaultError", this.code = e, this.details = n, Error.captureStackTrace && Error.captureStackTrace(this, w);
        }
    }
    const F = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    J = function(t) {
        let r = 0, e = 0, n = 0;
        const s = t.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), o = new Uint8Array(Math.ceil(s.length * 5 / 8));
        for(let i = 0; i < s.length; i++){
            const a = F.indexOf(s[i]);
            a !== -1 && (e = e << 5 | a, r += 5, r >= 8 && (o[n++] = e >>> r - 8 & 255, r -= 8));
        }
        return o.slice(0, n);
    };
    dt = function(t) {
        let r = 0, e = 0, n = "";
        const s = new Uint8Array(t);
        for(let o = 0; o < s.length; o++)for(e = e << 8 | s[o], r += 8; r >= 5;)n += F[e >>> r - 5 & 31], r -= 5;
        return r > 0 && (n += F[e << 5 - r & 31]), n;
    };
    pt = function(t) {
        const r = t.replace(/[^0-9a-fA-F]/g, "");
        if (r.length % 2 !== 0) return new Uint8Array(0);
        const e = new Uint8Array(r.length / 2);
        for(let n = 0; n < r.length; n += 2)e[n / 2] = parseInt(r.substr(n, 2), 16);
        return e;
    };
    ht = function(t) {
        return Array.from(new Uint8Array(t)).map((r)=>r.toString(16).padStart(2, "0")).join("");
    };
    yt = function(t) {
        const r = new Uint8Array(t.length);
        for(let e = 0; e < t.length; e++)r[e] = t.charCodeAt(e);
        return r;
    };
    gt = function(t) {
        return String.fromCharCode.apply(null, new Uint8Array(t));
    };
    wt = function(t) {
        try {
            const r = atob(t.trim()), e = new Uint8Array(r.length);
            for(let n = 0; n < r.length; n++)e[n] = r.charCodeAt(n);
            return e;
        } catch  {
            return new Uint8Array(0);
        }
    };
    St = function(t) {
        const r = new Uint8Array(t);
        let e = "";
        for(let n = 0; n < r.byteLength; n++)e += String.fromCharCode(r[n]);
        return btoa(e);
    };
    j = function() {
        const t = localStorage.getItem("app_time_offset"), r = t ? parseInt(t, 10) : 0;
        return Date.now() + r;
    };
    async function G(t, r = 30, e = 6, n = "SHA-1", s = 0) {
        if (!t) return "------";
        try {
            const o = J(t);
            if (o.length === 0) return "------";
            const i = j() / 1e3, a = Math.floor(i / r) + s, u = new ArrayBuffer(8);
            new DataView(u).setBigUint64(0, BigInt(a), !1);
            const f = {
                name: "HMAC",
                hash: n.includes("-") ? n : n.replace("SHA", "SHA-")
            };
            let d;
            if (B("using hash-wasm fallback for TOTP generation.")) {
                const T = await x("hash-wasm"), { createHMAC: C, createSHA1: S, createSHA256: v, createSHA512: g } = T?.default || T;
                let b;
                f.hash === "SHA-256" ? b = v() : f.hash === "SHA-512" ? b = g() : b = S();
                const _ = await C(b, o);
                _.init(), _.update(new Uint8Array(u));
                const R = _.digest("hex"), q = new Uint8Array(R.length / 2);
                for(let H = 0; H < R.length; H += 2)q[H / 2] = parseInt(R.substring(H, H + 2), 16);
                d = q.buffer;
            } else {
                const T = await L.subtle.importKey("raw", o, f, !1, [
                    "sign"
                ]);
                d = await L.subtle.sign("HMAC", T, u);
            }
            const c = new DataView(d), p = c.getUint8(d.byteLength - 1) & 15;
            return (((c.getUint8(p) & 127) << 24 | (c.getUint8(p + 1) & 255) << 16 | (c.getUint8(p + 2) & 255) << 8 | c.getUint8(p + 3) & 255) % Math.pow(10, e)).toString().padStart(e, "0");
        } catch (o) {
            return z.error("TOTP Error", o), "ERROR";
        }
    }
    const k = "23456789BCDFGHJKMNPQRTVWXY";
    async function Y(t, r = 30, e = 0) {
        if (!t) return "-----";
        try {
            const n = J(t);
            if (n.length === 0) return "-----";
            const s = j() / 1e3, o = Math.floor(s / r) + e, i = new ArrayBuffer(8);
            new DataView(i).setBigUint64(0, BigInt(o), !1);
            const u = {
                name: "HMAC",
                hash: "SHA-1"
            };
            let l;
            if (B("using hash-wasm fallback for Steam TOTP generation.")) {
                const h = await x("hash-wasm"), { createHMAC: A, createSHA1: T } = h?.default || h, C = await A(T(), n);
                C.init(), C.update(new Uint8Array(i));
                const S = C.digest("hex"), v = new Uint8Array(S.length / 2);
                for(let g = 0; g < S.length; g += 2)v[g / 2] = parseInt(S.substring(g, g + 2), 16);
                l = v.buffer;
            } else {
                const h = await L.subtle.importKey("raw", n, u, !1, [
                    "sign"
                ]);
                l = await L.subtle.sign("HMAC", h, i);
            }
            const f = new DataView(l), d = f.getUint8(l.byteLength - 1) & 15;
            let c = (f.getUint8(d) & 127) << 24 | (f.getUint8(d + 1) & 255) << 16 | (f.getUint8(d + 2) & 255) << 8 | f.getUint8(d + 3) & 255, p = "";
            for(let h = 0; h < 5; h++)p += k.charAt(c % k.length), c = Math.floor(c / k.length);
            return p;
        } catch (n) {
            return z.error("Steam TOTP Error", n), "ERROR";
        }
    }
    async function tt(t, r = 0, e = 6, n = "SHA-1") {
        if (!t) return "------";
        try {
            const s = J(t);
            if (s.length === 0) return "------";
            const o = new ArrayBuffer(8);
            new DataView(o).setBigUint64(0, BigInt(r), !1);
            const a = {
                name: "HMAC",
                hash: n.includes("-") ? n : n.replace("SHA", "SHA-")
            };
            let u;
            if (B("using hash-wasm fallback for HOTP generation.")) {
                const p = await x("hash-wasm"), { createHMAC: h, createSHA1: A, createSHA256: T, createSHA512: C } = p?.default || p;
                let S;
                a.hash === "SHA-256" ? S = T() : a.hash === "SHA-512" ? S = C() : S = A();
                const v = await h(S, s);
                v.init(), v.update(new Uint8Array(o));
                const g = v.digest("hex"), b = new Uint8Array(g.length / 2);
                for(let _ = 0; _ < g.length; _ += 2)b[_ / 2] = parseInt(g.substring(_, _ + 2), 16);
                u = b.buffer;
            } else {
                const p = await L.subtle.importKey("raw", s, a, !1, [
                    "sign"
                ]);
                u = await L.subtle.sign("HMAC", p, o);
            }
            const l = new DataView(u), f = l.getUint8(u.byteLength - 1) & 15;
            return (((l.getUint8(f) & 127) << 24 | (l.getUint8(f + 1) & 255) << 16 | (l.getUint8(f + 2) & 255) << 8 | l.getUint8(f + 3) & 255) % Math.pow(10, e)).toString().padStart(e, "0");
        } catch (s) {
            return z.error("HOTP Error", s), "ERROR";
        }
    }
    async function et(t, r = 30, e = 0) {
        return G(t, r, 8, "SHA1", e);
    }
    mt = async function(t, r = 30, e = 6, n = "SHA1", s = "totp", o = 0) {
        return s === "steam" ? Y(t, r, o) : s === "blizzard" ? et(t, r, o) : s === "hotp" ? tt(t, r, e, n) : G(t, r, e, n, o);
    };
    rt = function(t = {}) {
        const r = nt(t.type, t), e = {
            ...t,
            type: r
        };
        if (r === "steam") e.digits = 5, e.period = 30, e.algorithm = "SHA1";
        else if (r === "blizzard") e.digits = 8, e.period = 30, e.algorithm = "SHA1";
        else {
            let n = (t.algorithm || "SHA1").toUpperCase().replace(/-/g, "");
            [
                "SHA1",
                "SHA256",
                "SHA512"
            ].includes(n) || (n = "SHA1"), e.algorithm = n;
            let s = parseInt(t.digits || "6", 10);
            (isNaN(s) || s <= 0) && (s = 6), e.digits = s;
            let o = parseInt(t.period || "30", 10);
            (isNaN(o) || o <= 0) && (o = 30), e.period = o;
        }
        return e.service = e.service || e.issuer || "Unknown", e.account = e.account || "Unknown", e.secret = (e.secret || "").replace(/[\s=]/g, "").toUpperCase(), e.counter = parseInt(e.counter || "0", 10), (isNaN(e.counter) || e.counter < 0) && (e.counter = 0), e.category = e.category || "", e;
    };
    function nt(t, r = {}) {
        const e = (t || r.type || "").toLowerCase().trim(), n = (r.algorithm || "").toUpperCase(), s = (r.service || r.issuer || "").toUpperCase(), o = parseInt(r.digits || "0", 10);
        return e === "steam" || e === "steam guard" || n === "STEAM" || o === 5 && s.includes("STEAM") ? "steam" : [
            "blizzard",
            "battle.net"
        ].some((i)=>e.includes(i) || s.includes(i.toUpperCase())) ? "blizzard" : e === "totp" ? "totp" : e === "hotp" || r.hasOwnProperty("counter") && r.counter !== null && r.counter !== void 0 ? "hotp" : "totp";
    }
    at = function(t) {
        try {
            if (!t) return null;
            if (t.startsWith("steam://")) {
                const c = t.replace("steam://", "").replace(/[\s=]/g, "").toUpperCase();
                return c ? {
                    service: "Steam",
                    account: "Steam Guard",
                    secret: c,
                    type: "steam",
                    digits: 5,
                    period: 30,
                    algorithm: "SHA1",
                    counter: 0,
                    category: ""
                } : null;
            }
            const r = new URL(t);
            if (r.protocol !== "otpauth:") return null;
            let e = r.host || r.hostname;
            !e && r.pathname.startsWith("//") && (e = r.pathname.substring(2).split("/")[0]), e = (e || "").toLowerCase();
            const n = r.searchParams, s = n.get("secret");
            if (!s) return null;
            const o = decodeURIComponent(r.pathname.replace(/^\//, ""));
            let i = n.get("issuer") || "", a = o;
            if (o.includes(":")) {
                const c = o.indexOf(":"), p = o.substring(0, c).trim(), h = o.substring(c + 1).trim();
                i || (i = p), a = h;
            }
            let u = (n.get("algorithm") || "SHA1").toUpperCase().replace(/-/g, "");
            [
                "SHA1",
                "SHA256",
                "SHA512"
            ].includes(u) || (u = "SHA1");
            const l = parseInt(n.get("digits") || "0", 10), f = parseInt(n.get("period") || "30", 10);
            let d = parseInt(n.get("counter") || "0", 10);
            return (isNaN(d) || d < 0) && (d = 0), rt({
                service: i,
                account: a,
                secret: s,
                type: e,
                digits: l,
                period: f,
                counter: d,
                algorithm: u
            });
        } catch  {
            return null;
        }
    };
    At = function(t) {
        const { service: r, account: e, secret: n, algorithm: s = "SHA1", digits: o = 6, period: i = 30, type: a = "totp", counter: u = 0 } = t, l = encodeURIComponent(e ? `${r}:${e}` : r), f = encodeURIComponent(r);
        if (a === "hotp") {
            let d = `otpauth://hotp/${l}?secret=${n}&counter=${u}`;
            return r && (d += `&issuer=${f}`), s !== "SHA1" && (d += `&algorithm=${s}`), o !== 6 && (d += `&digits=${o}`), d;
        }
        return a === "steam" ? `otpauth://steam/${l}?secret=${n}&issuer=${f}&algorithm=SHA1&digits=5` : a === "blizzard" ? `otpauth://totp/${l}?secret=${n}&issuer=${f}&algorithm=SHA1&digits=8&period=30` : `otpauth://totp/${l}?secret=${n}&issuer=${f}&algorithm=${s}&digits=${o}&period=${i}`;
    };
    let I, E, P, V;
    Tt = {
        "2fas": [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        aegis: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        google_auth: [
            "totp",
            "hotp",
            "blizzard"
        ],
        bitwarden_auth_json: [
            "totp",
            "steam",
            "blizzard"
        ],
        bitwarden_auth_csv: [
            "totp",
            "steam",
            "blizzard"
        ],
        proton_auth: [
            "totp",
            "steam",
            "blizzard"
        ],
        generic_otpauth: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        nodeauth_json: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        nodeauth_encrypted: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        nodeauth_csv: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        nodeauth_html: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ]
    };
    ot = {
        async getTrashList () {
            const t = await y("/api/vault/trash");
            try {
                const { useLayoutStore: r } = await D(async ()=>{
                    const { useLayoutStore: o } = await import("./index-Co_0hqsi.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((i)=>i.y);
                    return {
                        useLayoutStore: o
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), n = r().appTrashRetention;
                let s = t.vault || t.data || (Array.isArray(t) ? t : []);
                if (n > 0 && s.length > 0) {
                    const o = Date.now(), i = n * 24 * 60 * 60 * 1e3, a = o - i, u = s.filter((l)=>l.deletedAt && l.deletedAt < a);
                    if (u.length > 0) {
                        const l = u.map((f)=>this.hardDelete(f.id));
                        Promise.allSettled(l).catch(console.warn), s = s.filter((f)=>!f.deletedAt || f.deletedAt >= a), t.vault = s, t.data && Array.isArray(t.data) && (t.data = s);
                    }
                }
            } catch (r) {
                console.warn("[Trash TTL] Failed to evaluate auto-purge:", r);
            }
            return t;
        },
        async moveToTrash (t) {
            return await y(`/api/vault/${t}/trash_move`, {
                method: "POST"
            });
        },
        async restoreItem (t) {
            return await y(`/api/vault/${t}/trash_restore`, {
                method: "POST"
            });
        },
        async batchMoveToTrash (t) {
            return await y("/api/vault/trash_batch_move", {
                method: "POST",
                body: JSON.stringify({
                    ids: t
                })
            });
        },
        async hardDelete (t) {
            return await y(`/api/vault/${t}/trash_hard`, {
                method: "DELETE"
            });
        },
        async emptyTrash () {
            return await y("/api/vault/trash_empty", {
                method: "DELETE"
            });
        }
    };
    I = M([]);
    E = M(0);
    P = M(!1);
    V = M(null);
    typeof window < "u" && Z("vault:meta:trash_count").then((t)=>{
        typeof t == "number" && (E.value = t);
    }).catch(()=>{});
    st = function() {
        const t = K(), r = m(), e = W(), n = async ()=>{
            if (!(t.isLocked || r.isOffline || !e.appTrashMode) && !P.value) {
                P.value = !0, V.value = null;
                try {
                    const i = await ot.getTrashList(), a = i.vault || i.data || (Array.isArray(i) ? i : []);
                    I.value = a, E.value = a.length, Q("vault:meta:trash_count", a.length).catch(()=>{});
                } catch (i) {
                    V.value = i, z.error("[useTrashList] fetchTrash failed:", i);
                } finally{
                    P.value = !1;
                }
            }
        };
        return X([
            ()=>t.isInitialized,
            ()=>t.isLocked,
            ()=>r.isOffline,
            ()=>e.appTrashMode
        ], ([i, a, u, l])=>{
            if (i) {
                if (a || u || !l) {
                    I.value = [];
                    return;
                }
                n();
            }
        }, {
            immediate: !0
        }), {
            trashVault: I,
            trashCount: E,
            isFetchingTrash: P,
            trashError: V,
            fetchTrash: n,
            filteredTrash: (i = "")=>{
                const a = I.value;
                if (!i) return a;
                const u = i.toLowerCase();
                return a.filter((l)=>l.service?.toLowerCase().includes(u) || l.account?.toLowerCase().includes(u));
            },
            updateTrashMetadata: (i, a = void 0)=>{
                a !== void 0 ? E.value = a : E.value = Math.max(0, E.value + i), Q("vault:meta:trash_count", E.value).catch(()=>{});
            }
        };
    };
    let $, U;
    $ = async (t)=>{
        if (t && t.secret && !t.secret.startsWith("nodeauth:")) {
            const { useAppLockStore: r } = await D(async ()=>{
                const { useAppLockStore: s } = await import("./index-Co_0hqsi.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((o)=>o.D);
                return {
                    useAppLockStore: s
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), n = await r().getMaskingKey();
            if (n) {
                const { maskSecretFront: s } = await D(async ()=>{
                    const { maskSecretFront: o } = await import("./index-Co_0hqsi.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((i)=>i.C);
                    return {
                        maskSecretFront: o
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
                t.secret = await s(t.secret, n);
            }
        }
    };
    U = (t)=>t.isOffline || t.name === "TypeError" || t.message?.toLowerCase().includes("fetch") || t.message?.toLowerCase().includes("network") || typeof navigator < "u" && !navigator.onLine;
    it = {
        async getVault ({ page: t = 1, limit: r = 12, search: e = "", category: n = "" }) {
            if (m().isManualOffline) try {
                const i = await N().getData();
                let a = i?.vault || [];
                if (e && e.trim()) {
                    const c = e.trim().toLowerCase();
                    a = a.filter((p)=>p.service?.toLowerCase().includes(c) || p.account?.toLowerCase().includes(c));
                }
                n && n !== "____UNCATEGORIZED____" ? a = a.filter((c)=>(c.category || "") === n) : n === "____UNCATEGORIZED____" && (a = a.filter((c)=>!c.category || c.category === ""));
                const u = a.length, l = i?.vault || [], f = {};
                l.forEach((c)=>{
                    const p = c.category || "";
                    f[p] = (f[p] || 0) + 1;
                });
                const d = Object.entries(f).map(([c, p])=>({
                        category: c,
                        count: p
                    }));
                return {
                    success: !0,
                    vault: a,
                    total: u,
                    categoryStats: d,
                    pagination: {
                        page: 1,
                        limit: u || 1,
                        totalItems: u,
                        totalPages: 1
                    }
                };
            } catch (o) {
                throw console.error("[VaultService] Offline getVault failed:", o), o;
            }
            try {
                const o = new URLSearchParams({
                    page: t,
                    limit: r,
                    search: e,
                    category: n
                });
                return await y(`/api/vault?${o.toString()}`);
            } catch (o) {
                throw new w("Failed to fetch vault list", "VAULT_FETCH_FAILED", o);
            }
        },
        async createAccount (t) {
            await $(t);
            const r = async ()=>{
                const e = N(), n = O(), o = (await e.getData())?.vault || [], i = (l, f)=>`${(l || "").trim().toLowerCase()}:${(f || "").trim().toLowerCase()}`, a = i(t.service, t.account);
                if (o.some((l)=>i(l.service, l.account) === a)) return console.warn("[VaultService] Account already exists locally, skipping duplicate create task"), {
                    success: !0,
                    alreadyExists: !0
                };
                const u = `tmp_${Date.now()}`;
                return n.enqueueAction("create", u, t), {
                    success: !0,
                    pending: !0,
                    item: {
                        ...t,
                        id: u,
                        pending: !0
                    }
                };
            };
            try {
                return m().isOffline ? r() : await y("/api/vault", {
                    method: "POST",
                    body: JSON.stringify(t)
                });
            } catch (e) {
                if (U(e)) return console.warn("[VaultService] Network error, falling back to offline queue", e), r();
                throw new w("Failed to create account", "ACCOUNT_CREATE_FAILED", e);
            }
        },
        async updateAccount (t, r) {
            await $(r);
            const e = ()=>(O().enqueueAction("update", t, r), {
                    success: !0,
                    pending: !0
                });
            try {
                return m().isOffline ? e() : await y(`/api/vault/${t}`, {
                    method: "PUT",
                    body: JSON.stringify(r)
                });
            } catch (n) {
                if (U(n)) return e();
                throw new w("Failed to update account", "ACCOUNT_UPDATE_FAILED", n);
            }
        },
        async incrementCounter (t, r) {
            const e = ()=>(O().enqueueAction("increment", t, {
                    updatedAt: r
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return m().isOffline ? e() : await y(`/api/vault/${t}/increment`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        updatedAt: r
                    })
                });
            } catch (n) {
                if (U(n)) return e();
                throw new w("Failed to increment counter", "ACCOUNT_INCREMENT_FAILED", n);
            }
        },
        async deleteAccount (t, r = {}) {
            const e = ()=>(O().enqueueAction("delete", t, r), {
                    success: !0,
                    pending: !0
                });
            try {
                return m().isOffline ? e() : await y(`/api/vault/${t}`, {
                    method: "DELETE"
                });
            } catch (n) {
                const s = n.details?.statusCode || n.statusCode, o = n.details?.message || n.message;
                if (s === 404 || o === "account_not_found") return console.warn("[VaultService] Account already deleted on server, treating as success:", t), {
                    success: !0
                };
                if (U(n)) return e();
                throw new w("Failed to delete account", "ACCOUNT_DELETE_FAILED", n);
            }
        },
        async batchDelete (t) {
            const r = ()=>{
                const e = O();
                for (const n of t)e.enqueueAction("delete", n);
                return {
                    success: !0,
                    pending: !0,
                    deleted: t.length
                };
            };
            try {
                return m().isOffline ? r() : await y("/api/vault/batch-delete", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (U(e)) return r();
                throw new w("Failed to batch delete accounts", "ACCOUNTS_BATCH_DELETE_FAILED", e);
            }
        },
        async reorder (t) {
            const r = ()=>(O().enqueueAction("reorder", "global_order", {
                    ids: t
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return m().isOffline ? r() : await y("/api/vault/reorder", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (U(e)) return r();
                throw new w("Failed to reorder accounts", "VAULT_REORDER_FAILED", e);
            }
        },
        async moveSortOrder (t, r) {
            const e = ()=>(O().enqueueAction("move-sort", t, {
                    sortOrder: r
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return m().isOffline ? e() : await y(`/api/vault/${t}/sort-order`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        sortOrder: r
                    })
                });
            } catch (n) {
                if (U(n)) return e();
                throw new w("Failed to move sort order", "VAULT_SORT_MOVE_FAILED", n);
            }
        },
        async addFromUri (t, r = "扫码添加") {
            const e = async ()=>{
                const n = at(t);
                if (!n) throw new Error("Invalid OTP URI");
                return n.category = r, await this.createAccount(n);
            };
            try {
                return m().isOffline ? await e() : await y("/api/vault/add-from-uri", {
                    method: "POST",
                    body: JSON.stringify({
                        uri: t,
                        category: r
                    })
                });
            } catch (n) {
                if (U(n)) return console.warn("[VaultService] Network error in addFromUri, falling back"), await e();
                throw new w("Failed to add account from URI", "ACCOUNT_ADD_URI_FAILED", n);
            }
        },
        async restoreBlizzardNet (t, r, e) {
            return await y("/api/vault/import/blizzard-net", {
                method: "POST",
                body: JSON.stringify({
                    serial: t,
                    restoreCode: r,
                    ssoToken: e
                })
            });
        },
        async importVault (t, r = "raw") {
            const e = async ()=>{
                const n = N(), s = O(), i = (await n.getData())?.vault || [], a = (c, p)=>`${(c || "").trim().toLowerCase()}:${(p || "").trim().toLowerCase()}`, u = new Set(i.map((c)=>a(c.service, c.account)));
                let l = 0;
                const f = Array.isArray(t) ? t : typeof t == "string" ? JSON.parse(t) : [
                    t
                ], d = [];
                for (const c of f){
                    if (!c) continue;
                    const p = a(c.service, c.account);
                    if (u.has(p)) {
                        console.debug("[VaultService] Skipping duplicate import in sync queue:", p);
                        continue;
                    }
                    let h;
                    try {
                        h = JSON.parse(JSON.stringify(c));
                    } catch  {
                        console.warn("[importVault] Account not serializable, skipping:", c);
                        continue;
                    }
                    const A = h.id || Date.now().toString(36) + Math.random().toString(36).substr(2);
                    h.id = A, await $(h), d.push({
                        type: "create",
                        id: A,
                        data: h
                    }), l++, u.add(p);
                }
                return d.length > 0 && await s.enqueueActions(d), {
                    success: !0,
                    count: l,
                    pending: !0
                };
            };
            try {
                return m().isOffline ? await e() : await y("/api/vault/import", {
                    method: "POST",
                    body: JSON.stringify({
                        type: r,
                        content: typeof t == "string" ? t : JSON.stringify(t)
                    })
                });
            } catch (n) {
                if (U(n)) return await e();
                throw new w("Failed to import vault data", "VAULT_IMPORT_FAILED", n);
            }
        },
        async syncOfflineActions () {
            const t = O();
            if (t.hasPendingChanges && !t.isSyncing) try {
                t.isSyncing = !0;
                const r = t.syncQueue.filter((a)=>a.type === "move-sort"), e = t.syncQueue.filter((a)=>a.type !== "move-sort"), n = await Promise.allSettled(r.map((a)=>y(`/api/vault/${a.id}/sort-order`, {
                        method: "PATCH",
                        body: JSON.stringify({
                            sortOrder: a.data.sortOrder
                        })
                    }))), s = new Set(r.filter((a, u)=>n[u].status === "fulfilled").map((a)=>a.id));
                if (e.length === 0) return t.syncQueue = t.syncQueue.filter((a)=>!s.has(a.id)), await t.saveQueue(), {
                    success: !0
                };
                const o = e.map((a)=>({
                        id: a.id,
                        type: a.type,
                        data: {
                            ...a.data,
                            updatedAt: a.baselineUpdatedAt
                        }
                    })), i = await y("/api/vault/sync", {
                    method: "POST",
                    body: JSON.stringify({
                        actions: o
                    })
                });
                if (i.success && i.results) {
                    const a = i.results, u = [];
                    for(let d = 0; d < e.length; d++){
                        const c = e[d], p = a[d];
                        if (!p?.success) {
                            const h = p?.code || "error", A = p?.error || "", T = h === "conflict_detected" || A === "conflict_detected" || h === "409";
                            if (h === "404" || A === "account_not_found" || h === "account_not_found") continue;
                            if (T) {
                                u.push({
                                    ...c,
                                    status: "conflict"
                                });
                                const { useOfflineStore: S } = await D(async ()=>{
                                    const { useOfflineStore: g } = await import("./index-Co_0hqsi.js").then(async (m)=>{
                                        await m.__tla;
                                        return m;
                                    }).then((b)=>b.z);
                                    return {
                                        useOfflineStore: g
                                    };
                                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
                                S().registerConflict(c.id);
                            } else u.push(c);
                        }
                    }
                    const l = t.syncQueue.filter((d)=>d.type === "move-sort" && !s.has(d.id));
                    t.syncQueue = [
                        ...u,
                        ...l
                    ], await t.saveQueue();
                    const { fetchTrash: f } = st();
                    f();
                }
                return i;
            } catch (r) {
                throw console.error("[Sync] Batch sync failed:", r), new w("Offline sync failed", "SYNC_FAILED", r);
            } finally{
                t.isSyncing = !1;
            }
        }
    };
    vt = Object.freeze(Object.defineProperty({
        __proto__: null,
        vaultService: it
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { Tt as O, J as a, At as b, ht as c, gt as d, St as e, dt as f, yt as g, pt as h, wt as i, j, mt as k, vt as l, rt as n, at as p, ot as t, st as u, it as v, __tla };
