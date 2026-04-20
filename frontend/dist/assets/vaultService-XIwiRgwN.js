const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-O7MHFWtG.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/vue-core-Daban9YF.js","assets/element-plus-CVRB8fAt.js","assets/element-plus-Dh61In7b.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { _ as B, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { n as J, o as I, l as F, r as p, b as j, p as S, u as z, s as $, g as K, q as T, a as R, __tla as __tla_1 } from "./index-O7MHFWtG.js";
import { l as q, __tla as __tla_2 } from "./resourceRegistry-9eHlhal2.js";
import { f as Z, e as H } from "./vue-core-Daban9YF.js";
let Q, pt, lt, ft, ht, it, ut, ct, dt, G, yt, gt, X, tt, et, rt;
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
    class g extends Error {
        constructor(n, e = "VAULT_ERROR", r = null){
            super(n), this.name = "vaultError", this.code = e, this.details = r, Error.captureStackTrace && Error.captureStackTrace(this, g);
        }
    }
    const x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    Q = function(t) {
        let n = 0, e = 0, r = 0;
        const i = t.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), s = new Uint8Array(Math.ceil(i.length * 5 / 8));
        for(let o = 0; o < i.length; o++){
            const a = x.indexOf(i[o]);
            a !== -1 && (e = e << 5 | a, n += 5, n >= 8 && (s[r++] = e >>> n - 8 & 255, n -= 8));
        }
        return s.slice(0, r);
    };
    it = function(t) {
        let n = 0, e = 0, r = "";
        const i = new Uint8Array(t);
        for(let s = 0; s < i.length; s++)for(e = e << 8 | i[s], n += 8; n >= 5;)r += x[e >>> n - 5 & 31], n -= 5;
        return n > 0 && (r += x[e << 5 - n & 31]), r;
    };
    ct = function(t) {
        const n = t.replace(/[^0-9a-fA-F]/g, "");
        if (n.length % 2 !== 0) return new Uint8Array(0);
        const e = new Uint8Array(n.length / 2);
        for(let r = 0; r < n.length; r += 2)e[r / 2] = parseInt(n.substr(r, 2), 16);
        return e;
    };
    lt = function(t) {
        return Array.from(new Uint8Array(t)).map((n)=>n.toString(16).padStart(2, "0")).join("");
    };
    ut = function(t) {
        const n = new Uint8Array(t.length);
        for(let e = 0; e < t.length; e++)n[e] = t.charCodeAt(e);
        return n;
    };
    ft = function(t) {
        return String.fromCharCode.apply(null, new Uint8Array(t));
    };
    dt = function(t) {
        try {
            const n = atob(t.trim()), e = new Uint8Array(n.length);
            for(let r = 0; r < n.length; r++)e[r] = n.charCodeAt(r);
            return e;
        } catch  {
            return new Uint8Array(0);
        }
    };
    ht = function(t) {
        const n = new Uint8Array(t);
        let e = "";
        for(let r = 0; r < n.byteLength; r++)e += String.fromCharCode(n[r]);
        return btoa(e);
    };
    G = function() {
        const t = localStorage.getItem("app_time_offset"), n = t ? parseInt(t, 10) : 0;
        return Date.now() + n;
    };
    async function W(t, n = 30, e = 6, r = "SHA-1", i = 0) {
        if (!t) return "------";
        try {
            const s = Q(t);
            if (s.length === 0) return "------";
            const o = G() / 1e3, a = Math.floor(o / n) + i, l = new ArrayBuffer(8);
            new DataView(l).setBigUint64(0, BigInt(a), !1);
            const f = {
                name: "HMAC",
                hash: r
            };
            let d;
            if (J("using hash-wasm fallback for TOTP generation.")) {
                const A = await q("hash-wasm"), { createHMAC: b, createSHA1: O, createSHA256: E, createSHA512: w } = A?.default || A;
                let C;
                f.hash === "SHA-256" ? C = E() : f.hash === "SHA-512" ? C = w() : C = O();
                const M = await b(C, s);
                M.init(), M.update(new Uint8Array(l));
                const P = M.digest("hex"), k = new Uint8Array(P.length / 2);
                for(let U = 0; U < P.length; U += 2)k[U / 2] = parseInt(P.substring(U, U + 2), 16);
                d = k.buffer;
            } else {
                const A = await I.subtle.importKey("raw", s, f, !1, [
                    "sign"
                ]);
                d = await I.subtle.sign("HMAC", A, l);
            }
            const c = new DataView(d), h = c.getUint8(d.byteLength - 1) & 15;
            return (((c.getUint8(h) & 127) << 24 | (c.getUint8(h + 1) & 255) << 16 | (c.getUint8(h + 2) & 255) << 8 | c.getUint8(h + 3) & 255) % Math.pow(10, e)).toString().padStart(e, "0");
        } catch (s) {
            return F.error("TOTP Error", s), "ERROR";
        }
    }
    const N = "23456789BCDFGHJKMNPQRTVWXY";
    async function Y(t, n = 30, e = 0) {
        if (!t) return "-----";
        try {
            const r = Q(t);
            if (r.length === 0) return "-----";
            const i = G() / 1e3, s = Math.floor(i / n) + e, o = new ArrayBuffer(8);
            new DataView(o).setBigUint64(0, BigInt(s), !1);
            const l = {
                name: "HMAC",
                hash: "SHA-1"
            };
            let u;
            if (J("using hash-wasm fallback for Steam TOTP generation.")) {
                const y = await q("hash-wasm"), { createHMAC: m, createSHA1: A } = y?.default || y, b = await m(A(), r);
                b.init(), b.update(new Uint8Array(o));
                const O = b.digest("hex"), E = new Uint8Array(O.length / 2);
                for(let w = 0; w < O.length; w += 2)E[w / 2] = parseInt(O.substring(w, w + 2), 16);
                u = E.buffer;
            } else {
                const y = await I.subtle.importKey("raw", r, l, !1, [
                    "sign"
                ]);
                u = await I.subtle.sign("HMAC", y, o);
            }
            const f = new DataView(u), d = f.getUint8(u.byteLength - 1) & 15;
            let c = (f.getUint8(d) & 127) << 24 | (f.getUint8(d + 1) & 255) << 16 | (f.getUint8(d + 2) & 255) << 8 | f.getUint8(d + 3) & 255, h = "";
            for(let y = 0; y < 5; y++)h += N.charAt(c % N.length), c = Math.floor(c / N.length);
            return h;
        } catch (r) {
            return F.error("Steam TOTP Error", r), "ERROR";
        }
    }
    yt = async function(t, n = 30, e = 6, r = "SHA-1", i = 0) {
        return r === "STEAM" ? Y(t, n, i) : W(t, n, e, r, i);
    };
    X = function(t) {
        try {
            if (!t) return null;
            if (t.startsWith("steam://")) {
                const d = t.replace("steam://", "").replace(/[\s=]/g, "").toUpperCase();
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
            const n = new URL(t);
            if (n.protocol !== "otpauth:") return null;
            const e = n.searchParams, r = e.get("secret");
            if (!r) return null;
            const i = decodeURIComponent(n.pathname.replace(/^\//, ""));
            let s = e.get("issuer") || "", o = i;
            if (i.includes(":")) {
                const d = i.indexOf(":"), c = i.substring(0, d).trim(), h = i.substring(d + 1).trim();
                s || (s = c), o = h;
            }
            const a = n.host.toLowerCase() === "steam" || e.get("algorithm")?.toUpperCase() === "STEAM" || e.get("tokenType")?.toUpperCase() === "STEAM" || e.get("issuer")?.toUpperCase() === "STEAM" && e.get("digits") === "5";
            let l = (e.get("algorithm") || "SHA1").toUpperCase().replace("SHA1", "SHA-1").replace("SHA256", "SHA-256").replace("SHA512", "SHA-512");
            [
                "SHA-1",
                "SHA-256",
                "SHA-512"
            ].includes(l) || (l = "SHA-1");
            let u = parseInt(e.get("digits") || (a ? "5" : "6"), 10);
            isNaN(u) && (u = a ? 5 : 6);
            let f = parseInt(e.get("period") || "30", 10);
            return (isNaN(f) || f <= 0) && (f = 30), {
                service: s || "Unknown",
                account: o || "Unknown",
                secret: r.replace(/[\s=]/g, "").toUpperCase(),
                digits: a ? 5 : u,
                period: f,
                algorithm: a ? "STEAM" : l,
                category: ""
            };
        } catch  {
            return null;
        }
    };
    pt = function(t) {
        const { service: n, account: e, secret: r, algorithm: i = "SHA1", digits: s = 6, period: o = 30 } = t, a = encodeURIComponent(`${n}:${e}`), l = encodeURIComponent(n);
        if (i === "STEAM") return `otpauth://steam/${a}?secret=${r}&issuer=${l}&algorithm=SHA1&digits=5`;
        const u = i.replace("-", "");
        return `otpauth://totp/${a}?secret=${r}&issuer=${l}&algorithm=${u}&digits=${s}&period=${o}`;
    };
    let L, _, D, V;
    tt = {
        async getTrashList () {
            const t = await p("/api/vault/trash");
            try {
                const { useLayoutStore: n } = await B(async ()=>{
                    const { useLayoutStore: s } = await import("./index-O7MHFWtG.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((o)=>o.x);
                    return {
                        useLayoutStore: s
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), r = n().appTrashRetention;
                let i = t.vault || t.data || (Array.isArray(t) ? t : []);
                if (r > 0 && i.length > 0) {
                    const s = Date.now(), o = r * 24 * 60 * 60 * 1e3, a = s - o, l = i.filter((u)=>u.deletedAt && u.deletedAt < a);
                    if (l.length > 0) {
                        const u = l.map((f)=>this.hardDelete(f.id));
                        Promise.allSettled(u).catch(console.warn), i = i.filter((f)=>!f.deletedAt || f.deletedAt >= a), t.vault = i, t.data && Array.isArray(t.data) && (t.data = i);
                    }
                }
            } catch (n) {
                console.warn("[Trash TTL] Failed to evaluate auto-purge:", n);
            }
            return t;
        },
        async moveToTrash (t) {
            return await p(`/api/vault/${t}/trash_move`, {
                method: "POST"
            });
        },
        async restoreItem (t) {
            return await p(`/api/vault/${t}/trash_restore`, {
                method: "POST"
            });
        },
        async batchMoveToTrash (t) {
            return await p("/api/vault/trash_batch_move", {
                method: "POST",
                body: JSON.stringify({
                    ids: t
                })
            });
        },
        async hardDelete (t) {
            return await p(`/api/vault/${t}/trash_hard`, {
                method: "DELETE"
            });
        },
        async emptyTrash () {
            return await p("/api/vault/trash_empty", {
                method: "DELETE"
            });
        }
    };
    L = H([]);
    _ = H(0);
    D = H(!1);
    V = H(null);
    typeof window < "u" && K("vault:meta:trash_count").then((t)=>{
        typeof t == "number" && (_.value = t);
    }).catch(()=>{});
    et = function() {
        const t = j(), n = S(), e = z(), r = async ()=>{
            if (!(t.isLocked || n.isOffline || !e.appTrashMode) && !D.value) {
                D.value = !0, V.value = null;
                try {
                    const o = await tt.getTrashList(), a = o.vault || o.data || (Array.isArray(o) ? o : []);
                    L.value = a, _.value = a.length, $("vault:meta:trash_count", a.length).catch(()=>{});
                } catch (o) {
                    V.value = o, F.error("[useTrashList] fetchTrash failed:", o);
                } finally{
                    D.value = !1;
                }
            }
        };
        return Z([
            ()=>t.isInitialized,
            ()=>t.isLocked,
            ()=>n.isOffline,
            ()=>e.appTrashMode
        ], ([o, a, l, u])=>{
            if (o) {
                if (a || l || !u) {
                    L.value = [];
                    return;
                }
                r();
            }
        }, {
            immediate: !0
        }), {
            trashVault: L,
            trashCount: _,
            isFetchingTrash: D,
            trashError: V,
            fetchTrash: r,
            filteredTrash: (o = "")=>{
                if (!o) return L.value;
                const a = o.toLowerCase();
                return L.value.filter((l)=>l.service?.toLowerCase().includes(a) || l.account?.toLowerCase().includes(a));
            },
            updateTrashMetadata: (o, a = void 0)=>{
                a !== void 0 ? _.value = a : _.value = Math.max(0, _.value + o), $("vault:meta:trash_count", _.value).catch(()=>{});
            }
        };
    };
    let v;
    v = (t)=>t.isOffline || t.name === "TypeError" || t.message?.toLowerCase().includes("fetch") || t.message?.toLowerCase().includes("network") || typeof navigator < "u" && !navigator.onLine;
    rt = {
        async getVault ({ page: t = 1, limit: n = 12, search: e = "", category: r = "" }) {
            if (S().isManualOffline) try {
                const o = await R().getData();
                let a = o?.vault || [];
                if (e && e.trim()) {
                    const c = e.trim().toLowerCase();
                    a = a.filter((h)=>h.service?.toLowerCase().includes(c) || h.account?.toLowerCase().includes(c));
                }
                r && r !== "____UNCATEGORIZED____" ? a = a.filter((c)=>(c.category || "") === r) : r === "____UNCATEGORIZED____" && (a = a.filter((c)=>!c.category || c.category === ""));
                const l = a.length, u = o?.vault || [], f = {};
                u.forEach((c)=>{
                    const h = c.category || "";
                    f[h] = (f[h] || 0) + 1;
                });
                const d = Object.entries(f).map(([c, h])=>({
                        category: c,
                        count: h
                    }));
                return {
                    success: !0,
                    vault: a,
                    total: l,
                    categoryStats: d,
                    pagination: {
                        page: 1,
                        limit: l || 1,
                        totalItems: l,
                        totalPages: 1
                    }
                };
            } catch (s) {
                throw console.error("[VaultService] Offline getVault failed:", s), s;
            }
            try {
                const s = new URLSearchParams({
                    page: t,
                    limit: n,
                    search: e,
                    category: r
                });
                return await p(`/api/vault?${s.toString()}`);
            } catch (s) {
                throw new g("Failed to fetch vault list", "VAULT_FETCH_FAILED", s);
            }
        },
        async createAccount (t) {
            const n = async ()=>{
                const e = R(), r = T(), s = (await e.getData())?.vault || [], o = (u, f)=>`${(u || "").trim().toLowerCase()}:${(f || "").trim().toLowerCase()}`, a = o(t.service, t.account);
                if (s.some((u)=>o(u.service, u.account) === a)) return console.warn("[VaultService] Account already exists locally, skipping duplicate create task"), {
                    success: !0,
                    alreadyExists: !0
                };
                const l = `tmp_${Date.now()}`;
                return r.enqueueAction("create", l, t), {
                    success: !0,
                    pending: !0,
                    item: {
                        ...t,
                        id: l,
                        pending: !0
                    }
                };
            };
            try {
                return S().isOffline ? n() : await p("/api/vault", {
                    method: "POST",
                    body: JSON.stringify(t)
                });
            } catch (e) {
                if (v(e)) return console.warn("[VaultService] Network error, falling back to offline queue", e), n();
                throw new g("Failed to create account", "ACCOUNT_CREATE_FAILED", e);
            }
        },
        async updateAccount (t, n) {
            const e = ()=>(T().enqueueAction("update", t, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? e() : await p(`/api/vault/${t}`, {
                    method: "PUT",
                    body: JSON.stringify(n)
                });
            } catch (r) {
                if (v(r)) return e();
                throw new g("Failed to update account", "ACCOUNT_UPDATE_FAILED", r);
            }
        },
        async deleteAccount (t, n = {}) {
            const e = ()=>(T().enqueueAction("delete", t, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? e() : await p(`/api/vault/${t}`, {
                    method: "DELETE"
                });
            } catch (r) {
                const i = r.details?.statusCode || r.statusCode, s = r.details?.message || r.message;
                if (i === 404 || s === "account_not_found") return console.warn("[VaultService] Account already deleted on server, treating as success:", t), {
                    success: !0
                };
                if (v(r)) return e();
                throw new g("Failed to delete account", "ACCOUNT_DELETE_FAILED", r);
            }
        },
        async batchDelete (t) {
            const n = ()=>{
                const e = T();
                for (const r of t)e.enqueueAction("delete", r);
                return {
                    success: !0,
                    pending: !0,
                    deleted: t.length
                };
            };
            try {
                return S().isOffline ? n() : await p("/api/vault/batch-delete", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (v(e)) return n();
                throw new g("Failed to batch delete accounts", "ACCOUNTS_BATCH_DELETE_FAILED", e);
            }
        },
        async reorder (t) {
            const n = ()=>(T().enqueueAction("reorder", "global_order", {
                    ids: t
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? n() : await p("/api/vault/reorder", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (v(e)) return n();
                throw new g("Failed to reorder accounts", "VAULT_REORDER_FAILED", e);
            }
        },
        async moveSortOrder (t, n) {
            const e = ()=>(T().enqueueAction("move-sort", t, {
                    sortOrder: n
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? e() : await p(`/api/vault/${t}/sort-order`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        sortOrder: n
                    })
                });
            } catch (r) {
                if (v(r)) return e();
                throw new g("Failed to move sort order", "VAULT_SORT_MOVE_FAILED", r);
            }
        },
        async addFromUri (t, n = "扫码添加") {
            const e = async ()=>{
                const r = X(t);
                if (!r) throw new Error("Invalid OTP URI");
                return r.category = n, await this.createAccount(r);
            };
            try {
                return S().isOffline ? await e() : await p("/api/vault/add-from-uri", {
                    method: "POST",
                    body: JSON.stringify({
                        uri: t,
                        category: n
                    })
                });
            } catch (r) {
                if (v(r)) return console.warn("[VaultService] Network error in addFromUri, falling back"), await e();
                throw new g("Failed to add account from URI", "ACCOUNT_ADD_URI_FAILED", r);
            }
        },
        async importVault (t, n = "raw") {
            const e = async ()=>{
                const r = R(), i = T(), o = (await r.getData())?.vault || [], a = (c, h)=>`${(c || "").trim().toLowerCase()}:${(h || "").trim().toLowerCase()}`, l = new Set(o.map((c)=>a(c.service, c.account)));
                let u = 0;
                const f = Array.isArray(t) ? t : typeof t == "string" ? JSON.parse(t) : [
                    t
                ], d = [];
                for (const c of f){
                    if (!c) continue;
                    const h = a(c.service, c.account);
                    if (l.has(h)) {
                        console.debug("[VaultService] Skipping duplicate import in sync queue:", h);
                        continue;
                    }
                    let y;
                    try {
                        y = JSON.parse(JSON.stringify(c));
                    } catch  {
                        console.warn("[importVault] Account not serializable, skipping:", c);
                        continue;
                    }
                    const m = y.id || Date.now().toString(36) + Math.random().toString(36).substr(2);
                    y.id = m, d.push({
                        type: "create",
                        id: m,
                        data: y
                    }), u++, l.add(h);
                }
                return d.length > 0 && await i.enqueueActions(d), {
                    success: !0,
                    count: u,
                    pending: !0
                };
            };
            try {
                return S().isOffline ? await e() : await p("/api/vault/import", {
                    method: "POST",
                    body: JSON.stringify({
                        type: n,
                        content: typeof t == "string" ? t : JSON.stringify(t)
                    })
                });
            } catch (r) {
                if (v(r)) return await e();
                throw new g("Failed to import vault data", "VAULT_IMPORT_FAILED", r);
            }
        },
        async syncOfflineActions () {
            const t = T();
            if (t.hasPendingChanges && !t.isSyncing) try {
                t.isSyncing = !0;
                const n = t.syncQueue.filter((a)=>a.type === "move-sort"), e = t.syncQueue.filter((a)=>a.type !== "move-sort"), r = await Promise.allSettled(n.map((a)=>p(`/api/vault/${a.id}/sort-order`, {
                        method: "PATCH",
                        body: JSON.stringify({
                            sortOrder: a.data.sortOrder
                        })
                    }))), i = new Set(n.filter((a, l)=>r[l].status === "fulfilled").map((a)=>a.id));
                if (e.length === 0) return t.syncQueue = t.syncQueue.filter((a)=>!i.has(a.id)), await t.saveQueue(), {
                    success: !0
                };
                const s = e.map((a)=>({
                        id: a.id,
                        type: a.type,
                        data: {
                            ...a.data,
                            updatedAt: a.baselineUpdatedAt
                        }
                    })), o = await p("/api/vault/sync", {
                    method: "POST",
                    body: JSON.stringify({
                        actions: s
                    })
                });
                if (o.success && o.results) {
                    const a = o.results, l = [];
                    for(let d = 0; d < e.length; d++){
                        const c = e[d], h = a[d];
                        if (!h?.success) {
                            const y = h?.code || "error", m = h?.error || "", A = y === "conflict_detected" || m === "conflict_detected" || y === "409";
                            if (y === "404" || m === "account_not_found" || y === "account_not_found") continue;
                            if (A) {
                                l.push({
                                    ...c,
                                    status: "conflict"
                                });
                                const { useOfflineStore: O } = await B(async ()=>{
                                    const { useOfflineStore: w } = await import("./index-O7MHFWtG.js").then(async (m)=>{
                                        await m.__tla;
                                        return m;
                                    }).then((C)=>C.y);
                                    return {
                                        useOfflineStore: w
                                    };
                                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
                                O().registerConflict(c.id);
                            } else l.push(c);
                        }
                    }
                    const u = t.syncQueue.filter((d)=>d.type === "move-sort" && !i.has(d.id));
                    t.syncQueue = [
                        ...l,
                        ...u
                    ], await t.saveQueue();
                    const { fetchTrash: f } = et();
                    f();
                }
                return o;
            } catch (n) {
                throw console.error("[Sync] Batch sync failed:", n), new g("Offline sync failed", "SYNC_FAILED", n);
            } finally{
                t.isSyncing = !1;
            }
        }
    };
    gt = Object.freeze(Object.defineProperty({
        __proto__: null,
        vaultService: rt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { Q as a, pt as b, lt as c, ft as d, ht as e, it as f, ut as g, ct as h, dt as i, G as j, yt as k, gt as l, X as p, tt as t, et as u, rt as v, __tla };
