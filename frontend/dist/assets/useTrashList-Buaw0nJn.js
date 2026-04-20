const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DQ_0wgAi.js","assets/pdf-utils-DsJhLm1-.js","assets/compression-utils-CXh1ITwj.js","assets/vue-core-Daban9YF.js","assets/element-plus-B-gPN0Fq.js","assets/element-plus-Dh61In7b.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { u as se, a as re, k as ie } from "./tanstack-query-C-OQsQoR.js";
import { a as oe, b as $, u as H, n as J, o as ce, l as T, r as V, s as Z, g as le, __tla as __tla_0 } from "./index-DQ_0wgAi.js";
import { v as R, __tla as __tla_1 } from "./vaultService-DzwVTmb2.js";
import { f as I, k as ue, s as de, c as A, e as E } from "./vue-core-Daban9YF.js";
import { _ as fe, __tla as __tla_2 } from "./pdf-utils-DsJhLm1-.js";
let Le, he, we;
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
    Le = function(n = null) {
        const v = oe(), _ = $(), f = H(), L = J(), y = ce(), o = se(), s = de([]), h = E(""), u = A({
            get: ()=>f.app_active_category,
            set: (e)=>f.setActiveCategory(e)
        }), C = E([]), K = A(()=>{
            const e = f.appVaultViewMode === "compact";
            return f.isMobile ? e ? 30 : 15 : e ? 60 : 16;
        }), j = A({
            get () {
                const t = (s.value || []).map((a)=>{
                    const d = y.syncQueue.find((i)=>i.id === a.id);
                    return d ? d.type === "delete" ? null : d.type === "update" ? {
                        ...a,
                        ...d.data,
                        pending: !0,
                        status: d.status
                    } : {
                        ...a,
                        pending: !0,
                        status: d.status
                    } : a;
                }).filter(Boolean), r = new Set(t.map((a)=>a.id)), m = [
                    ...y.syncQueue.filter((a)=>a.type === "create").filter((a)=>!r.has(a.id)).map((a)=>({
                            ...a.data,
                            id: a.id,
                            pending: !0,
                            currentCode: "------",
                            remaining: 30,
                            percentage: 0
                        })),
                    ...t
                ], g = h.value?.trim().toLowerCase(), w = u.value === "", l = u.value === "____UNCATEGORIZED____" ? "" : u.value;
                return m.filter((a)=>{
                    if (a.deletedAt != null) return !1;
                    const d = !g || a.service?.toLowerCase().includes(g) || a.account?.toLowerCase().includes(g), i = w || (a.category || "") === l;
                    return d && i;
                });
            },
            set (e) {
                if (!e) return;
                const t = h.value?.trim().toLowerCase(), r = !!t, c = !!u.value;
                if (!r && !c) {
                    const i = e.filter((S)=>!S.id.startsWith("tmp_")).map((S)=>s.value.find((M)=>M.id === S.id)).filter(Boolean);
                    i.length > 0 && (s.value = i);
                    return;
                }
                const m = e.filter((i)=>!i.id.startsWith("tmp_")).map((i)=>i.id);
                if (m.length <= 1) return;
                const g = [
                    ...s.value
                ], w = u.value === "", l = u.value === "____UNCATEGORIZED____" ? "" : u.value, a = [], d = new Map(g.map((i)=>[
                        i.id,
                        i
                    ]));
                for(let i = 0; i < g.length; i++){
                    const S = g[i], M = !r || S.service?.toLowerCase().includes(t) || S.account?.toLowerCase().includes(t), p = w || (S.category || "") === l;
                    M && p && a.push(i);
                }
                m.forEach((i, S)=>{
                    const M = a[S];
                    M !== void 0 && d.has(i) && (g[M] = d.get(i));
                }), s.value = g;
            }
        }), b = A(()=>{
            const e = F.value?.pages?.[0], t = e?.categoryStats?.length > 0 ? e.categoryStats : C.value;
            return !t || t.length === 0 ? [] : t.map((r)=>({
                    category: r.category || "",
                    count: parseInt(r.count || 0, 10),
                    id: r.category === "" ? "____UNCATEGORIZED____" : r.category
                })).sort((r, c)=>c.count !== r.count ? c.count - r.count : r.category.localeCompare(c.category));
        }), X = async ({ pageParam: e = 1, queryKey: t })=>{
            if (_.isLocked) return {
                vault: [],
                pagination: {
                    totalPages: 0
                }
            };
            const r = t && t.length > 1 ? t[1] : h.value, c = u.value;
            return await R.getVault({
                page: e,
                limit: K.value,
                category: c,
                search: r
            });
        }, { data: F, fetchNextPage: Y, hasNextPage: z, isFetchingNextPage: ee, isLoading: U, isFetching: N, isError: x, refetch: W, isPlaceholderData: te } = re({
            queryKey: [
                "vault",
                h,
                u,
                A(()=>f.appVaultViewMode),
                ()=>L.isManualOffline
            ],
            queryFn: X,
            getNextPageParam: (e)=>{
                if (!e || !e.pagination) return;
                const { page: t, totalPages: r } = e.pagination;
                return t < r ? t + 1 : void 0;
            },
            enabled: A(()=>_.isInitialized && !_.isLocked),
            staleTime: 60 * 1e3,
            placeholderData: ie
        }), Q = async (e, t, r = 0)=>{
            const c = e.length > 0 || !!F.value && !x.value && !U.value && !N.value;
            if (e.length === 0 && s.value.length > 0 && !c) {
                T.warn("[useVaultList] Preserving cache: received inconclusive empty update"), t && t.length > 0 && (C.value = t);
                return;
            }
            const m = new Map(s.value.map((l)=>[
                    l.id,
                    l
                ])), g = e.map((l)=>{
                const a = m.get(l.id);
                if (a) {
                    const d = a.digits !== l.digits || a.secret !== l.secret;
                    return {
                        ...a,
                        ...l,
                        currentCode: d ? "------" : a.currentCode,
                        forceCompute: d ? !0 : a.forceCompute
                    };
                } else return {
                    ...l,
                    currentCode: "------",
                    remaining: 30,
                    percentage: 0
                };
            });
            if (s.value = g, t && t.length > 0 && (C.value = t), !h.value && !_.isLocked && e.length > 0) try {
                const a = (await v.getData())?.vault || [], d = g.map(({ currentCode: p, remaining: ge, percentage: pe, color: ve, nextCode: ye, ...ne })=>ne), i = new Map(d.map((p)=>[
                        p.id,
                        p
                    ])), S = a.map((p)=>i.has(p.id) ? i.get(p.id) : p), M = new Set(a.map((p)=>p.id));
                d.forEach((p)=>{
                    M.has(p.id) || S.push(p);
                }), await v.saveData({
                    vault: S,
                    categoryStats: t || C.value || []
                }), r > 0 && !f.isOffline && await v.updateMetadata({
                    serverTotal: r
                });
            } catch (l) {
                T.error("[useVaultList] IDB Cache partial sync failed", l);
            }
            const w = g.filter((l)=>!l.currentCode || l.currentCode === "------");
            w.length > 0 && n?.value && await n.value(w);
        };
        I(F, (e)=>{
            if (!e || !e.pages || e.pages.length === 0) return;
            if (te.value) {
                T.info("[useVaultList] Skipping placeholder data (keepPreviousData race)");
                return;
            }
            const t = e.pages.flatMap((m)=>m?.vault || []), r = e.pages[0]?.categoryStats?.length > 0 ? e.pages[0].categoryStats : [], c = e.pages[0]?.pagination?.totalItems || e.pages[0]?.total || 0;
            Q(t, r, c);
        }, {
            immediate: !0
        }), I(()=>_.isLocked, (e)=>{
            e || (T.info("[useVaultList] App unlocked, refreshing vault..."), W());
        }), I(x, async (e)=>{
            if (e && s.value.length === 0) {
                const t = await v.getData();
                t?.vault?.length > 0 && Q(t.vault, t.categoryStats);
            }
        });
        const B = async ()=>{
            if (s.value.length === 0 && v.hasVault) {
                const e = await v.getData();
                e?.vault?.length > 0 && Q(e.vault, e.categoryStats);
            }
        };
        ue(async ()=>{
            if (await y.initQueue(), _.isInitialized) B();
            else {
                const e = I(()=>_.isInitialized, (t)=>{
                    t && (B(), e());
                });
            }
        });
        const D = ()=>o.invalidateQueries({
                queryKey: [
                    "vault"
                ]
            });
        I(()=>L.isManualOffline, ()=>{
            T.info("[useVaultList] Offline mode changed, resetting query cache to prevent duplicate pages..."), o.resetQueries({
                queryKey: [
                    "vault"
                ]
            });
        }), I([
            ()=>y.hasPendingChanges,
            ()=>f.isOffline
        ], ([e, t], [r, c])=>{
            if (t) return;
            const m = c === !0;
            (m || e && !r) && (e && !y.isSyncing ? (T.info("[Auto-Sync] Condition met (state transition), triggering sync..."), R.syncOfflineActions().then(()=>{
                T.info("[Auto-Sync] Sync complete, fetching latest remote data..."), D();
            }).catch((w)=>T.warn("[Auto-Sync] Sync failed:", w))) : m && !e && (T.info("[Auto-Sync] Restored online without pending actions, refreshing list..."), D()));
        }, {
            immediate: !0
        }), typeof document < "u" && document.addEventListener("visibilitychange", ()=>{
            document.visibilityState === "visible" && !f.isOffline && y.hasPendingChanges && !y.isSyncing && R.syncOfflineActions().then(()=>D()).catch((e)=>T.warn("[Auto-Sync] Visibility restore sync failed:", e));
        });
        const G = A(()=>!z.value || N.value || x.value), ae = A(()=>{
            const t = (b.value?.length > 0 ? b.value : C.value || []).filter((c)=>c.id !== "____TRASH____").reduce((c, m)=>c + parseInt(m.count || 0, 10), 0), r = y.syncQueue.filter((c)=>c.type === "create").length;
            return t + r;
        });
        return {
            serverVault: s,
            vault: j,
            searchQuery: h,
            selectedCategory: u,
            categoryStats: b,
            localCategoryStats: C,
            isLoading: U,
            isFetching: N,
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
    let P, O, k, q;
    he = {
        async getTrashList () {
            const n = await V("/api/vault/trash");
            try {
                const { useLayoutStore: v } = await fe(async ()=>{
                    const { useLayoutStore: y } = await import("./index-DQ_0wgAi.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((o)=>o.x);
                    return {
                        useLayoutStore: y
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), f = v().appTrashRetention;
                let L = n.vault || n.data || (Array.isArray(n) ? n : []);
                if (f > 0 && L.length > 0) {
                    const y = Date.now(), o = f * 24 * 60 * 60 * 1e3, s = y - o, h = L.filter((u)=>u.deletedAt && u.deletedAt < s);
                    if (h.length > 0) {
                        const u = h.map((C)=>this.hardDelete(C.id));
                        Promise.allSettled(u).catch(console.warn), L = L.filter((C)=>!C.deletedAt || C.deletedAt >= s), n.vault = L, n.data && Array.isArray(n.data) && (n.data = L);
                    }
                }
            } catch (v) {
                console.warn("[Trash TTL] Failed to evaluate auto-purge:", v);
            }
            return n;
        },
        async moveToTrash (n) {
            return await V(`/api/vault/${n}/trash_move`, {
                method: "POST"
            });
        },
        async restoreItem (n) {
            return await V(`/api/vault/${n}/trash_restore`, {
                method: "POST"
            });
        },
        async batchMoveToTrash (n) {
            return await V("/api/vault/trash_batch_move", {
                method: "POST",
                body: JSON.stringify({
                    ids: n
                })
            });
        },
        async hardDelete (n) {
            return await V(`/api/vault/${n}/trash_hard`, {
                method: "DELETE"
            });
        },
        async emptyTrash () {
            return await V("/api/vault/trash_empty", {
                method: "DELETE"
            });
        }
    };
    P = E([]);
    O = E(0);
    k = E(!1);
    q = E(null);
    typeof window < "u" && le("vault:meta:trash_count").then((n)=>{
        typeof n == "number" && (O.value = n);
    }).catch(()=>{});
    we = function() {
        const n = $(), v = J(), _ = H(), f = async ()=>{
            if (!(n.isLocked || v.isOffline || !_.appTrashMode) && !k.value) {
                k.value = !0, q.value = null;
                try {
                    const o = await he.getTrashList(), s = o.vault || o.data || (Array.isArray(o) ? o : []);
                    P.value = s, O.value = s.length, Z("vault:meta:trash_count", s.length).catch(()=>{});
                } catch (o) {
                    q.value = o, T.error("[useTrashList] fetchTrash failed:", o);
                } finally{
                    k.value = !1;
                }
            }
        };
        return I([
            ()=>n.isInitialized,
            ()=>n.isLocked,
            ()=>v.isOffline,
            ()=>_.appTrashMode
        ], ([o, s, h, u])=>{
            if (o) {
                if (s || h || !u) {
                    P.value = [];
                    return;
                }
                f();
            }
        }, {
            immediate: !0
        }), {
            trashVault: P,
            trashCount: O,
            isFetchingTrash: k,
            trashError: q,
            fetchTrash: f,
            filteredTrash: (o = "")=>{
                if (!o) return P.value;
                const s = o.toLowerCase();
                return P.value.filter((h)=>h.service?.toLowerCase().includes(s) || h.account?.toLowerCase().includes(s));
            },
            updateTrashMetadata: (o, s = void 0)=>{
                s !== void 0 ? O.value = s : O.value = Math.max(0, O.value + o), Z("vault:meta:trash_count", O.value).catch(()=>{});
            }
        };
    };
});
export { Le as a, he as t, we as u, __tla };
