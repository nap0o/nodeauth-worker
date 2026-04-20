const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qr-utils-BhF2IEGi.js","assets/element-plus-B-gPN0Fq.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/index-DQ_0wgAi.js","assets/pdf-utils-DsJhLm1-.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { _, __tla as __tla_0 } from "./pdf-utils-DsJhLm1-.js";
import { p as F, q as V, l as N, o as w, r as S, n as m, a as D, __tla as __tla_1 } from "./index-DQ_0wgAi.js";
let $, X, G, Y, K, Q, z, j, Z, k, W, M, ee, x, q;
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
    })()
]).then(async ()=>{
    class y extends Error {
        constructor(n, t = "VAULT_ERROR", r = null){
            super(n), this.name = "vaultError", this.code = t, this.details = r, Error.captureStackTrace && Error.captureStackTrace(this, y);
        }
    }
    const H = {
        SECURITY: [
            {
                name: "openpgp",
                loader: ()=>_(()=>import("./openpgp-DrHuyQ_D.js"), []),
                probe: "openpgp"
            },
            {
                name: "libsodium",
                loader: ()=>_(()=>import("./libsodium-wrappers-CYqOfR_H.js"), []),
                probe: "sodium"
            },
            {
                name: "hash-wasm",
                loader: ()=>_(()=>import("./hash-wasm-Dup_VHWH.js"), []),
                probe: "hash-wasm"
            }
        ],
        UTILITIES: [
            {
                name: "qrcode",
                loader: ()=>_(()=>import("./qr-utils-BhF2IEGi.js").then((e)=>e.b), __vite__mapDeps([0,1,2,3])),
                probes: [
                    "qrcode",
                    "qrparser",
                    "vaultservice",
                    "login"
                ]
            },
            {
                name: "jsqr",
                loader: ()=>_(()=>import("./qr-utils-BhF2IEGi.js").then((e)=>e.j), __vite__mapDeps([0,1,2,3])),
                probes: [
                    "jsqr",
                    "qrparser",
                    "datamigration"
                ]
            },
            {
                name: "fflate",
                loader: ()=>_(()=>import("./compression-utils-CXh1ITwj.js"), []),
                probes: [
                    "fflate",
                    "pako",
                    "zlib",
                    "datamigration"
                ]
            }
        ]
    };
    M = async function(e) {
        const t = [
            ...H.SECURITY,
            ...H.UTILITIES
        ].find((r)=>r.name === e);
        if (!t || !t.loader) throw new Error(`Resource '${e}' not found in registry.`);
        return await t.loader();
    };
    const R = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    $ = function(e) {
        let n = 0, t = 0, r = 0;
        const i = e.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), a = new Uint8Array(Math.ceil(i.length * 5 / 8));
        for(let f = 0; f < i.length; f++){
            const o = R.indexOf(i[f]);
            o !== -1 && (t = t << 5 | o, n += 5, n >= 8 && (a[r++] = t >>> n - 8 & 255, n -= 8));
        }
        return a.slice(0, r);
    };
    Q = function(e) {
        let n = 0, t = 0, r = "";
        const i = new Uint8Array(e);
        for(let a = 0; a < i.length; a++)for(t = t << 8 | i[a], n += 8; n >= 5;)r += R[t >>> n - 5 & 31], n -= 5;
        return n > 0 && (r += R[t << 5 - n & 31]), r;
    };
    j = function(e) {
        const n = e.replace(/[^0-9a-fA-F]/g, "");
        if (n.length % 2 !== 0) return new Uint8Array(0);
        const t = new Uint8Array(n.length / 2);
        for(let r = 0; r < n.length; r += 2)t[r / 2] = parseInt(n.substr(r, 2), 16);
        return t;
    };
    G = function(e) {
        return Array.from(new Uint8Array(e)).map((n)=>n.toString(16).padStart(2, "0")).join("");
    };
    z = function(e) {
        const n = new Uint8Array(e.length);
        for(let t = 0; t < e.length; t++)n[t] = e.charCodeAt(t);
        return n;
    };
    Y = function(e) {
        return String.fromCharCode.apply(null, new Uint8Array(e));
    };
    Z = function(e) {
        try {
            const n = atob(e.trim()), t = new Uint8Array(n.length);
            for(let r = 0; r < n.length; r++)t[r] = n.charCodeAt(r);
            return t;
        } catch  {
            return new Uint8Array(0);
        }
    };
    K = function(e) {
        const n = new Uint8Array(e);
        let t = "";
        for(let r = 0; r < n.byteLength; r++)t += String.fromCharCode(n[r]);
        return btoa(t);
    };
    k = function() {
        const e = localStorage.getItem("app_time_offset"), n = e ? parseInt(e, 10) : 0;
        return Date.now() + n;
    };
    W = async function(e, n = 30, t = 6, r = "SHA-1", i = 0) {
        if (!e) return "------";
        try {
            const a = $(e);
            if (a.length === 0) return "------";
            const f = k() / 1e3, o = Math.floor(f / n) + i, c = new ArrayBuffer(8);
            new DataView(c).setBigUint64(0, BigInt(o), !1);
            const u = {
                name: "HMAC",
                hash: r === "STEAM" ? "SHA-1" : r
            };
            let d;
            if (F("using hash-wasm fallback for TOTP generation.")) {
                const h = await M("hash-wasm"), { createHMAC: O, createSHA1: E, createSHA256: U, createSHA512: C } = h?.default || h;
                let v;
                u.hash === "SHA-256" ? v = U() : u.hash === "SHA-512" ? v = C() : v = E();
                const I = await O(v, a);
                I.init(), I.update(new Uint8Array(c));
                const L = I.digest("hex"), P = new Uint8Array(L.length / 2);
                for(let b = 0; b < L.length; b += 2)P[b / 2] = parseInt(L.substring(b, b + 2), 16);
                d = P.buffer;
            } else {
                const h = await V.subtle.importKey("raw", a, u, !1, [
                    "sign"
                ]);
                d = await V.subtle.sign("HMAC", h, c);
            }
            const s = new DataView(d), l = s.getUint8(d.byteLength - 1) & 15;
            let g = (s.getUint8(l) & 127) << 24 | (s.getUint8(l + 1) & 255) << 16 | (s.getUint8(l + 2) & 255) << 8 | s.getUint8(l + 3) & 255;
            if (r === "STEAM") {
                const h = "23456789BCDFGHJKMNPQRTVWXY";
                let O = "";
                for(let E = 0; E < 5; E++)O += h.charAt(g % h.length), g = Math.floor(g / h.length);
                return O;
            }
            return (g % Math.pow(10, t)).toString().padStart(t, "0");
        } catch (a) {
            return N.error("TOTP Error", a), "ERROR";
        }
    };
    x = function(e) {
        try {
            if (!e) return null;
            if (e.startsWith("steam://")) {
                const d = e.replace("steam://", "").replace(/[\s=]/g, "").toUpperCase();
                return d ? {
                    service: "Steam",
                    account: "Steam Guard",
                    secret: d,
                    digits: 5,
                    period: 30,
                    algorithm: "STEAM",
                    category: ""
                } : null;
            }
            const n = new URL(e);
            if (n.protocol !== "otpauth:") return null;
            const t = n.searchParams, r = t.get("secret");
            if (!r) return null;
            const i = decodeURIComponent(n.pathname.replace(/^\//, "").replace(/^totp\//, ""));
            let a = t.get("issuer") || "", f = i;
            if (i.includes(":")) {
                const d = i.indexOf(":"), s = i.substring(0, d).trim(), l = i.substring(d + 1).trim();
                a || (a = s), f = l;
            }
            const o = n.host.toLowerCase() === "steam" || t.get("algorithm")?.toUpperCase() === "STEAM" || t.get("tokenType")?.toUpperCase() === "STEAM";
            let c = (t.get("algorithm") || "SHA1").toUpperCase().replace("SHA1", "SHA-1").replace("SHA256", "SHA-256").replace("SHA512", "SHA-512");
            [
                "SHA-1",
                "SHA-256",
                "SHA-512"
            ].includes(c) || (c = "SHA-1");
            let p = parseInt(t.get("digits") || (o ? "5" : "6"), 10);
            isNaN(p) && (p = o ? 5 : 6);
            let u = parseInt(t.get("period") || "30", 10);
            return (isNaN(u) || u <= 0) && (u = 30), {
                service: a || "Unknown",
                account: f || "Unknown",
                secret: r.replace(/[\s=]/g, "").toUpperCase(),
                digits: p,
                period: u,
                algorithm: o ? "STEAM" : c,
                category: ""
            };
        } catch  {
            return null;
        }
    };
    X = function(e) {
        const { service: n, account: t, secret: r, algorithm: i = "SHA1", digits: a = 6, period: f = 30 } = e, o = encodeURIComponent(`${n}:${t}`), c = encodeURIComponent(n);
        if (i === "STEAM") return `otpauth://steam/${o}?secret=${r}&issuer=${c}&algorithm=STEAM&digits=5`;
        const p = i.replace("-", "");
        return `otpauth://totp/${o}?secret=${r}&issuer=${c}&algorithm=${p}&digits=${a}&period=${f}`;
    };
    let A;
    A = (e)=>e.isOffline || e.name === "TypeError" || e.message?.toLowerCase().includes("fetch") || e.message?.toLowerCase().includes("network") || typeof navigator < "u" && !navigator.onLine;
    q = {
        async getVault ({ page: e = 1, limit: n = 12, search: t = "", category: r = "" }) {
            if (m().isManualOffline) try {
                const f = await D().getData();
                let o = f?.vault || [];
                if (t && t.trim()) {
                    const s = t.trim().toLowerCase();
                    o = o.filter((l)=>l.service?.toLowerCase().includes(s) || l.account?.toLowerCase().includes(s));
                }
                r && r !== "____UNCATEGORIZED____" ? o = o.filter((s)=>(s.category || "") === r) : r === "____UNCATEGORIZED____" && (o = o.filter((s)=>!s.category || s.category === ""));
                const c = o.length, p = f?.vault || [], u = {};
                p.forEach((s)=>{
                    const l = s.category || "";
                    u[l] = (u[l] || 0) + 1;
                });
                const d = Object.entries(u).map(([s, l])=>({
                        category: s,
                        count: l
                    }));
                return {
                    success: !0,
                    vault: o,
                    total: c,
                    categoryStats: d,
                    pagination: {
                        page: 1,
                        limit: c || 1,
                        totalItems: c,
                        totalPages: 1
                    }
                };
            } catch (a) {
                throw console.error("[VaultService] Offline getVault failed:", a), a;
            }
            try {
                const a = new URLSearchParams({
                    page: e,
                    limit: n,
                    search: t,
                    category: r
                });
                return await S(`/api/vault?${a.toString()}`);
            } catch (a) {
                throw new y("Failed to fetch vault list", "VAULT_FETCH_FAILED", a);
            }
        },
        async createAccount (e) {
            const n = async ()=>{
                const t = D(), r = w(), a = (await t.getData())?.vault || [], f = (p, u)=>`${(p || "").trim().toLowerCase()}:${(u || "").trim().toLowerCase()}`, o = f(e.service, e.account);
                if (a.some((p)=>f(p.service, p.account) === o)) return console.warn("[VaultService] Account already exists locally, skipping duplicate create task"), {
                    success: !0,
                    alreadyExists: !0
                };
                const c = `tmp_${Date.now()}`;
                return r.enqueueAction("create", c, e), {
                    success: !0,
                    pending: !0,
                    item: {
                        ...e,
                        id: c,
                        pending: !0
                    }
                };
            };
            try {
                return m().isOffline ? n() : await S("/api/vault", {
                    method: "POST",
                    body: JSON.stringify(e)
                });
            } catch (t) {
                if (A(t)) return console.warn("[VaultService] Network error, falling back to offline queue", t), n();
                throw new y("Failed to create account", "ACCOUNT_CREATE_FAILED", t);
            }
        },
        async updateAccount (e, n) {
            const t = ()=>(w().enqueueAction("update", e, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return m().isOffline ? t() : await S(`/api/vault/${e}`, {
                    method: "PUT",
                    body: JSON.stringify(n)
                });
            } catch (r) {
                if (A(r)) return t();
                throw new y("Failed to update account", "ACCOUNT_UPDATE_FAILED", r);
            }
        },
        async deleteAccount (e, n = {}) {
            const t = ()=>(w().enqueueAction("delete", e, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return m().isOffline ? t() : await S(`/api/vault/${e}`, {
                    method: "DELETE"
                });
            } catch (r) {
                const i = r.details?.statusCode || r.statusCode, a = r.details?.message || r.message;
                if (i === 404 || a === "account_not_found") return console.warn("[VaultService] Account already deleted on server, treating as success:", e), {
                    success: !0
                };
                if (A(r)) return t();
                throw new y("Failed to delete account", "ACCOUNT_DELETE_FAILED", r);
            }
        },
        async batchDelete (e) {
            const n = ()=>{
                const t = w();
                for (const r of e)t.enqueueAction("delete", r);
                return {
                    success: !0,
                    pending: !0,
                    deleted: e.length
                };
            };
            try {
                return m().isOffline ? n() : await S("/api/vault/batch-delete", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: e
                    })
                });
            } catch (t) {
                if (A(t)) return n();
                throw new y("Failed to batch delete accounts", "ACCOUNTS_BATCH_DELETE_FAILED", t);
            }
        },
        async reorder (e) {
            const n = ()=>(w().enqueueAction("reorder", "global_order", {
                    ids: e
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return m().isOffline ? n() : await S("/api/vault/reorder", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: e
                    })
                });
            } catch (t) {
                if (A(t)) return n();
                throw new y("Failed to reorder accounts", "VAULT_REORDER_FAILED", t);
            }
        },
        async moveSortOrder (e, n) {
            const t = ()=>(w().enqueueAction("move-sort", e, {
                    sortOrder: n
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return m().isOffline ? t() : await S(`/api/vault/${e}/sort-order`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        sortOrder: n
                    })
                });
            } catch (r) {
                if (A(r)) return t();
                throw new y("Failed to move sort order", "VAULT_SORT_MOVE_FAILED", r);
            }
        },
        async addFromUri (e, n = "扫码添加") {
            const t = async ()=>{
                const r = x(e);
                if (!r) throw new Error("Invalid OTP URI");
                return r.category = n, await this.createAccount(r);
            };
            try {
                return m().isOffline ? await t() : await S("/api/vault/add-from-uri", {
                    method: "POST",
                    body: JSON.stringify({
                        uri: e,
                        category: n
                    })
                });
            } catch (r) {
                if (A(r)) return console.warn("[VaultService] Network error in addFromUri, falling back"), await t();
                throw new y("Failed to add account from URI", "ACCOUNT_ADD_URI_FAILED", r);
            }
        },
        async importVault (e, n = "raw") {
            const t = async ()=>{
                const r = D(), i = w(), f = (await r.getData())?.vault || [], o = (s, l)=>`${(s || "").trim().toLowerCase()}:${(l || "").trim().toLowerCase()}`, c = new Set(f.map((s)=>o(s.service, s.account)));
                let p = 0;
                const u = Array.isArray(e) ? e : typeof e == "string" ? JSON.parse(e) : [
                    e
                ], d = [];
                for (const s of u){
                    if (!s) continue;
                    const l = o(s.service, s.account);
                    if (c.has(l)) {
                        console.debug("[VaultService] Skipping duplicate import in sync queue:", l);
                        continue;
                    }
                    let g;
                    try {
                        g = JSON.parse(JSON.stringify(s));
                    } catch  {
                        console.warn("[importVault] Account not serializable, skipping:", s);
                        continue;
                    }
                    const T = g.id || Date.now().toString(36) + Math.random().toString(36).substr(2);
                    g.id = T, d.push({
                        type: "create",
                        id: T,
                        data: g
                    }), p++, c.add(l);
                }
                return d.length > 0 && await i.enqueueActions(d), {
                    success: !0,
                    count: p,
                    pending: !0
                };
            };
            try {
                return m().isOffline ? await t() : await S("/api/vault/import", {
                    method: "POST",
                    body: JSON.stringify({
                        type: n,
                        content: typeof e == "string" ? e : JSON.stringify(e)
                    })
                });
            } catch (r) {
                if (A(r)) return await t();
                throw new y("Failed to import vault data", "VAULT_IMPORT_FAILED", r);
            }
        },
        async syncOfflineActions () {
            const e = w();
            if (e.hasPendingChanges && !e.isSyncing) try {
                e.isSyncing = !0;
                const n = e.syncQueue.filter((o)=>o.type === "move-sort"), t = e.syncQueue.filter((o)=>o.type !== "move-sort"), r = await Promise.allSettled(n.map((o)=>S(`/api/vault/${o.id}/sort-order`, {
                        method: "PATCH",
                        body: JSON.stringify({
                            sortOrder: o.data.sortOrder
                        })
                    }))), i = new Set(n.filter((o, c)=>r[c].status === "fulfilled").map((o)=>o.id));
                if (t.length === 0) return e.syncQueue = e.syncQueue.filter((o)=>!i.has(o.id)), await e.saveQueue(), {
                    success: !0
                };
                const a = t.map((o)=>({
                        id: o.id,
                        type: o.type,
                        data: {
                            ...o.data,
                            updatedAt: o.baselineUpdatedAt
                        }
                    })), f = await S("/api/vault/sync", {
                    method: "POST",
                    body: JSON.stringify({
                        actions: a
                    })
                });
                if (f.success && f.results) {
                    const o = f.results, c = [];
                    for(let u = 0; u < t.length; u++){
                        const d = t[u], s = o[u];
                        if (!s?.success) {
                            const l = s?.code || "error", g = s?.error || "", T = l === "conflict_detected" || g === "conflict_detected" || l === "409";
                            if (l === "404" || g === "account_not_found" || l === "account_not_found") continue;
                            if (T) {
                                c.push({
                                    ...d,
                                    status: "conflict"
                                });
                                const { useOfflineStore: O } = await _(async ()=>{
                                    const { useOfflineStore: U } = await import("./index-DQ_0wgAi.js").then(async (m)=>{
                                        await m.__tla;
                                        return m;
                                    }).then((C)=>C.y);
                                    return {
                                        useOfflineStore: U
                                    };
                                }, __vite__mapDeps([4,5,6,2,1,3,7,8,9]));
                                O().registerConflict(d.id);
                            } else c.push(d);
                        }
                    }
                    const p = e.syncQueue.filter((u)=>u.type === "move-sort" && !i.has(u.id));
                    e.syncQueue = [
                        ...c,
                        ...p
                    ], await e.saveQueue();
                }
                return f;
            } catch (n) {
                throw console.error("[Sync] Batch sync failed:", n), new y("Offline sync failed", "SYNC_FAILED", n);
            } finally{
                e.isSyncing = !1;
            }
        }
    };
    ee = Object.freeze(Object.defineProperty({
        __proto__: null,
        vaultService: q
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { $ as a, X as b, G as c, Y as d, K as e, Q as f, z as g, j as h, Z as i, k as j, W as k, M as l, ee as m, x as p, q as v, __tla };
