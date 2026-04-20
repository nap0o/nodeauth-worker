const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B-heULEF.js","assets/pdf-utils-DsJhLm1-.js","assets/compression-utils-CXh1ITwj.js","assets/vue-core-Daban9YF.js","assets/element-plus-B-gPN0Fq.js","assets/element-plus-Dh61In7b.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { u as se, a as re, k as oe } from "./tanstack-query-C-OQsQoR.js";
import { a as ie, b as $, u as H, n as J, o as ce, l as C, r as O, s as Z, g as le, __tla as __tla_0 } from "./index-B-heULEF.js";
import { v as Q, __tla as __tla_1 } from "./vaultService-Arpi8dy-.js";
import { f as V, k as ue, s as de, c as A, e as E } from "./vue-core-Daban9YF.js";
import { _ as ge, __tla as __tla_2 } from "./pdf-utils-DsJhLm1-.js";
let we, he, Le;
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
    we = function(s = null) {
        const v = ie(), T = $(), y = H(), w = J(), f = ce(), c = se(), r = de([]), m = E(""), d = A({
            get: ()=>y.app_active_category,
            set: (e)=>y.setActiveCategory(e)
        }), _ = E([]), K = A(()=>{
            const e = y.appVaultViewMode === "compact";
            return y.isMobile ? e ? 30 : 15 : e ? 60 : 16;
        }), j = A({
            get () {
                const t = (r.value || []).map((a)=>{
                    const u = f.syncQueue.find((o)=>o.id === a.id);
                    return u ? u.type === "delete" ? null : u.type === "update" ? {
                        ...a,
                        ...u.data,
                        pending: !0,
                        status: u.status
                    } : {
                        ...a,
                        pending: !0,
                        status: u.status
                    } : a;
                }).filter(Boolean), n = new Set(t.map((a)=>a.id)), p = [
                    ...f.syncQueue.filter((a)=>a.type === "create").filter((a)=>!n.has(a.id)).map((a)=>({
                            ...a.data,
                            id: a.id,
                            pending: !0,
                            currentCode: "------",
                            remaining: 30,
                            percentage: 0
                        })),
                    ...t
                ], g = m.value?.trim().toLowerCase(), L = d.value === "", l = d.value === "____UNCATEGORIZED____" ? "" : d.value;
                return p.filter((a)=>{
                    if (a.deletedAt != null) return !1;
                    const u = !g || a.service?.toLowerCase().includes(g) || a.account?.toLowerCase().includes(g), o = L || (a.category || "") === l;
                    return u && o;
                });
            },
            set (e) {
                if (!e) return;
                const t = m.value?.trim().toLowerCase(), n = !!t, i = !!d.value;
                if (!n && !i) {
                    const o = e.filter((S)=>!S.id.startsWith("tmp_")).map((S)=>r.value.find((M)=>M.id === S.id)).filter(Boolean);
                    o.length > 0 && (r.value = o);
                    return;
                }
                const p = e.filter((o)=>!o.id.startsWith("tmp_")).map((o)=>o.id);
                if (p.length <= 1) return;
                const g = [
                    ...r.value
                ], L = d.value === "", l = d.value === "____UNCATEGORIZED____" ? "" : d.value, a = [], u = new Map(g.map((o)=>[
                        o.id,
                        o
                    ]));
                for(let o = 0; o < g.length; o++){
                    const S = g[o], M = !n || S.service?.toLowerCase().includes(t) || S.account?.toLowerCase().includes(t), h = L || (S.category || "") === l;
                    M && h && a.push(o);
                }
                p.forEach((o, S)=>{
                    const M = a[S];
                    M !== void 0 && u.has(o) && (g[M] = u.get(o));
                }), r.value = g;
            }
        }), k = A(()=>{
            const e = b.value?.pages?.[0], t = e?.categoryStats?.length > 0 ? e.categoryStats : _.value;
            return !t || t.length === 0 ? [] : t.map((n)=>({
                    category: n.category || "",
                    count: parseInt(n.count || 0, 10),
                    id: n.category === "" ? "____UNCATEGORIZED____" : n.category
                })).sort((n, i)=>i.count !== n.count ? i.count - n.count : n.category.localeCompare(i.category));
        }), X = async ({ pageParam: e = 1, queryKey: t })=>{
            if (T.isLocked) return {
                vault: [],
                pagination: {
                    totalPages: 0
                }
            };
            const n = t && t.length > 1 ? t[1] : m.value, i = d.value;
            return await Q.getVault({
                page: e,
                limit: K.value,
                category: i,
                search: n
            });
        }, { data: b, fetchNextPage: Y, hasNextPage: z, isFetchingNextPage: ee, isLoading: U, isFetching: F, isError: x, refetch: W, isPlaceholderData: te } = re({
            queryKey: [
                "vault",
                m,
                d,
                A(()=>y.appVaultViewMode),
                ()=>w.isManualOffline
            ],
            queryFn: X,
            getNextPageParam: (e)=>{
                if (!e || !e.pagination) return;
                const { page: t, totalPages: n } = e.pagination;
                return t < n ? t + 1 : void 0;
            },
            enabled: A(()=>T.isInitialized && !T.isLocked),
            staleTime: 60 * 1e3,
            placeholderData: oe
        }), N = async (e, t, n = 0)=>{
            const i = e.length > 0 || !!b.value && !x.value && !U.value && !F.value;
            if (e.length === 0 && r.value.length > 0 && !i) {
                C.warn("[useVaultList] Preserving cache: received inconclusive empty update"), t && t.length > 0 && (_.value = t);
                return;
            }
            const p = new Map(r.value.map((l)=>[
                    l.id,
                    l
                ])), g = e.map((l)=>{
                const a = p.get(l.id);
                if (a) {
                    const u = a.digits !== l.digits || a.secret !== l.secret;
                    return {
                        ...a,
                        ...l,
                        currentCode: u ? "------" : a.currentCode,
                        forceCompute: u ? !0 : a.forceCompute
                    };
                } else return {
                    ...l,
                    currentCode: "------",
                    remaining: 30,
                    percentage: 0
                };
            });
            if (r.value = g, t && t.length > 0 && (_.value = t), !m.value && !T.isLocked && e.length > 0) try {
                const a = (await v.getData())?.vault || [], u = g.map(({ currentCode: h, remaining: fe, percentage: pe, color: ve, nextCode: ye, ...ne })=>ne), o = new Map(u.map((h)=>[
                        h.id,
                        h
                    ])), S = a.map((h)=>o.has(h.id) ? o.get(h.id) : h), M = new Set(a.map((h)=>h.id));
                u.forEach((h)=>{
                    M.has(h.id) || S.push(h);
                }), await v.saveData({
                    vault: S,
                    categoryStats: t || _.value || []
                }), n > 0 && !y.isOffline && await v.updateMetadata({
                    serverTotal: n
                });
            } catch (l) {
                C.error("[useVaultList] IDB Cache partial sync failed", l);
            }
            const L = g.filter((l)=>!l.currentCode || l.currentCode === "------");
            L.length > 0 && s?.value && await s.value(L);
        };
        V(b, (e)=>{
            if (!e || !e.pages || e.pages.length === 0) return;
            if (te.value) {
                C.log("[useVaultList] Skipping placeholder data (keepPreviousData race)");
                return;
            }
            const t = e.pages.flatMap((p)=>p?.vault || []), n = e.pages[0]?.categoryStats?.length > 0 ? e.pages[0].categoryStats : [], i = e.pages[0]?.pagination?.totalItems || e.pages[0]?.total || 0;
            N(t, n, i);
        }, {
            immediate: !0
        }), V(()=>T.isLocked, (e)=>{
            e || (C.log("[useVaultList] App unlocked, refreshing vault..."), W());
        }), V(x, async (e)=>{
            if (e && r.value.length === 0) {
                const t = await v.getData();
                t?.vault?.length > 0 && N(t.vault, t.categoryStats);
            }
        });
        const B = async ()=>{
            if (r.value.length === 0 && v.hasVault) {
                const e = await v.getData();
                e?.vault?.length > 0 && N(e.vault, e.categoryStats);
            }
        };
        ue(async ()=>{
            if (await f.initQueue(), T.isInitialized) B();
            else {
                const e = V(()=>T.isInitialized, (t)=>{
                    t && (B(), e());
                });
            }
        });
        const D = ()=>c.invalidateQueries({
                queryKey: [
                    "vault"
                ]
            });
        V(()=>w.isManualOffline, ()=>{
            C.log("[useVaultList] Offline mode changed, resetting query cache to prevent duplicate pages..."), c.resetQueries({
                queryKey: [
                    "vault"
                ]
            });
        }), V([
            ()=>f.hasPendingChanges,
            ()=>y.isOffline
        ], ([e, t], [n, i])=>{
            if (t) return;
            const p = i === !0;
            (p || e && !n) && (e && !f.isSyncing ? (C.log("[Auto-Sync] Condition met (state transition), triggering sync..."), Q.syncOfflineActions().then(()=>{
                C.log("[Auto-Sync] Sync complete, fetching latest remote data..."), D();
            }).catch((L)=>C.warn("[Auto-Sync] Sync failed:", L))) : p && !e && (C.log("[Auto-Sync] Restored online without pending actions, refreshing list..."), D()));
        }, {
            immediate: !0
        }), typeof document < "u" && document.addEventListener("visibilitychange", ()=>{
            document.visibilityState === "visible" && !y.isOffline && f.hasPendingChanges && !f.isSyncing && Q.syncOfflineActions().then(()=>D()).catch((e)=>C.warn("[Auto-Sync] Visibility restore sync failed:", e));
        });
        const G = A(()=>!z.value || F.value || x.value), ae = A(()=>{
            const t = (k.value?.length > 0 ? k.value : _.value || []).filter((i)=>i.id !== "____TRASH____").reduce((i, p)=>i + parseInt(p.count || 0, 10), 0), n = f.syncQueue.filter((i)=>i.type === "create").length;
            return t + n;
        });
        return {
            serverVault: r,
            vault: j,
            searchQuery: m,
            selectedCategory: d,
            categoryStats: k,
            localCategoryStats: _,
            isLoading: U,
            isFetching: F,
            isFetchingNextPage: ee,
            hasNextPage: z,
            isError: x,
            isLoadMoreDisabled: G,
            absoluteTotalItems: ae,
            fetchVault: D,
            refetch: W,
            handleLoadMore: ()=>{
                G.value || Y();
            }
        };
    };
    let P, I, R, q;
    he = {
        async getTrashList () {
            const s = await O("/api/vault/trash");
            try {
                const { useLayoutStore: v } = await ge(async ()=>{
                    const { useLayoutStore: f } = await import("./index-B-heULEF.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((c)=>c.x);
                    return {
                        useLayoutStore: f
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), y = v().appTrashRetention;
                let w = s.vault || s.data || (Array.isArray(s) ? s : []);
                if (y > 0 && w.length > 0) {
                    const f = Date.now(), c = y * 24 * 60 * 60 * 1e3, r = f - c, m = w.filter((d)=>d.deletedAt && d.deletedAt < r);
                    if (m.length > 0) {
                        const d = m.map((_)=>this.hardDelete(_.id));
                        Promise.allSettled(d).catch(console.warn), w = w.filter((_)=>!_.deletedAt || _.deletedAt >= r), s.vault = w, s.data && Array.isArray(s.data) && (s.data = w);
                    }
                }
            } catch (v) {
                console.warn("[Trash TTL] Failed to evaluate auto-purge:", v);
            }
            return s;
        },
        async moveToTrash (s) {
            return await O(`/api/vault/${s}/trash_move`, {
                method: "POST"
            });
        },
        async restoreItem (s) {
            return await O(`/api/vault/${s}/trash_restore`, {
                method: "POST"
            });
        },
        async batchMoveToTrash (s) {
            return await O("/api/vault/trash_batch_move", {
                method: "POST",
                body: JSON.stringify({
                    ids: s
                })
            });
        },
        async hardDelete (s) {
            return await O(`/api/vault/${s}/trash_hard`, {
                method: "DELETE"
            });
        },
        async emptyTrash () {
            return await O("/api/vault/trash_empty", {
                method: "DELETE"
            });
        }
    };
    P = E([]);
    I = E(0);
    R = E(!1);
    q = E(null);
    typeof window < "u" && le("vault:meta:trash_count").then((s)=>{
        typeof s == "number" && (I.value = s);
    }).catch(()=>{});
    Le = function() {
        const s = $(), v = J(), T = H();
        return {
            trashVault: P,
            trashCount: I,
            isFetchingTrash: R,
            trashError: q,
            fetchTrash: async ()=>{
                if (s.isLocked || v.isOffline || !T.appTrashMode) {
                    P.value = [], I.value = 0;
                    return;
                }
                R.value = !0, q.value = null;
                try {
                    const c = await he.getTrashList(), r = c.vault || c.data || (Array.isArray(c) ? c : []);
                    P.value = r, I.value = r.length, Z("vault:meta:trash_count", r.length).catch(()=>{});
                } catch (c) {
                    q.value = c, C.error("[useTrashList] fetchTrash failed:", c);
                } finally{
                    R.value = !1;
                }
            },
            filteredTrash: (c = "")=>{
                if (!c) return P.value;
                const r = c.toLowerCase();
                return P.value.filter((m)=>m.service?.toLowerCase().includes(r) || m.account?.toLowerCase().includes(r));
            },
            updateTrashMetadata: (c, r = void 0)=>{
                r !== void 0 ? I.value = r : I.value = Math.max(0, I.value + c), Z("vault:meta:trash_count", I.value).catch(()=>{});
            }
        };
    };
});
export { we as a, he as t, Le as u, __tla };
