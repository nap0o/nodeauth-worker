const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vaultList-Dc8S4s0i.js","assets/element-plus-B-gPN0Fq.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/index-B-heULEF.js","assets/pdf-utils-DsJhLm1-.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css","assets/vaultService-Arpi8dy-.js","assets/resourceRegistry-CppKO0Ra.js","assets/responsiveOverlay-CzZWuB0B.js","assets/responsiveOverlay-DXpm1mUF.css","assets/useTrashList-C1zoSax-.js","assets/qr-utils-BhF2IEGi.js","assets/common-B_lD9ztt.js","assets/vaultList-CXqNXStH.css","assets/addVault-Bdobwv0S.js","assets/dataExport-Ckq5zmcl.js","assets/iconProtonAuth-DdQGREF4.js","assets/dataMigrationService-GRkFX8Bz.js","assets/argon2-browser-CaBKgmPA.js","assets/hash-wasm-Dup_VHWH.js","assets/wa-sqlite-D0naBMh4.js","assets/dataImport-BszAAcZh.js","assets/iconLastPassAuth-BMwFkRXc.js","assets/dataBackup-B5L5pCW3.js","assets/utilityTools-BJvH6VrR.js","assets/iconToolbox-DBCMNAid.js","assets/passkeySettings-9o0BIK1v.js","assets/webAuthnService-8N13ZP8t.js","assets/securitySettings-AhaK9zHi.js","assets/securitySettings-CWqITrPL.css","assets/appearanceSetting-BLxIGsK1.js","assets/iconTheme-uR9IHY17.js","assets/languageSettings-Bfslrvfj.js","assets/themeSettings-X7LazrOv.js","assets/layoutSettings-BRVmdpsA.js","assets/layoutSettings-CDkc7e94.css","assets/devicesSettings-ZPcBuZ8T.js","assets/trashSettings-BXdnZbRr.js","assets/aboutView-CzBZMGOg.js","assets/mobileHub-K3FYesOJ.js"])))=>i.map(i=>d[i]);
import { ad as U, p as Y, M as G, w as K, ae as Z, a6 as tt, k as et, af as at, ag as F, ah as ot, ai as it, aj as st, f as N, d as nt, ak as _t, al as lt, am as ct, an as ut, E as pt, ao as rt, ap as j, aq as mt } from "./element-plus-B-gPN0Fq.js";
import { I as a, M as S, Q as v, aA as dt, J as o, P as n, O as _, u as t, F as M, ac as q, X as B, _ as A, S as $, c as vt, Y as C, f as D, n as R, a0 as W, e as H, k as bt } from "./vue-core-Daban9YF.js";
import { _ as J, F as yt, f as gt, h as ft, u as x, k as i, __tla as __tla_0 } from "./index-B-heULEF.js";
import { I as Q } from "./iconToolbox-DBCMNAid.js";
import { _ as s, __tla as __tla_1 } from "./pdf-utils-DsJhLm1-.js";
let St, Ct;
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
    const kt = {
        name: "iconAbout"
    }, Et = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    };
    function Tt(d, e, l, b, u, c) {
        return a(), S("svg", Et, [
            ...e[0] || (e[0] = [
                v("path", {
                    fill: "currentColor",
                    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
                }, null, -1)
            ])
        ]);
    }
    let At, ht, Vt, It, Lt, Dt, Rt, Pt;
    St = J(kt, [
        [
            "render",
            Tt
        ]
    ]);
    At = [
        {
            key: "vault",
            label: "menu.vault",
            icon: U
        },
        {
            key: "add-vault",
            label: "menu.add",
            icon: Y
        },
        {
            key: "migration",
            label: "menu.migration",
            icon: Z,
            children: [
                {
                    key: "migration-export",
                    label: "migration.export",
                    icon: G
                },
                {
                    key: "migration-import",
                    label: "migration.import",
                    icon: K
                }
            ]
        },
        {
            key: "backups",
            label: "menu.backup",
            icon: tt
        },
        {
            key: "tools",
            label: "menu.tools",
            icon: Q
        },
        {
            key: "settings",
            label: "menu.settings",
            icon: F,
            children: [
                {
                    key: "settings-passkey",
                    label: "menu.passkey",
                    icon: yt
                },
                {
                    key: "settings-security",
                    label: "menu.security",
                    icon: et
                },
                {
                    key: "settings-appearance",
                    label: "menu.appearance",
                    icon: at
                },
                {
                    key: "settings-about",
                    label: "menu.about",
                    icon: St
                }
            ]
        }
    ];
    ht = {
        __name: "desktopMenu",
        props: {
            app_active_tab: {
                type: String,
                required: !0
            }
        },
        emits: [
            "select"
        ],
        setup (d) {
            const { t: e, locale: l } = gt(), b = ft(), u = x();
            dt();
            const c = vt(()=>u.isSidebarCollapsed), m = ()=>u.toggleSidebar(), y = async ()=>{
                await b.clearUserInfo(), await Promise.race([
                    b.logout(),
                    new Promise((p)=>setTimeout(p, 1500))
                ]).catch(()=>{}), window.location.href = "/login", pt.success(e("auth.logout_success"));
            };
            return (p, h)=>{
                const k = N, V = st, P = it, O = ot, I = nt, w = ut;
                return a(), o(w, {
                    width: t(c) ? "64px" : "240px",
                    class: "left-aside"
                }, {
                    default: n(()=>[
                            _(O, {
                                "default-active": d.app_active_tab,
                                class: "side-menu",
                                onSelect: h[0] || (h[0] = (r)=>p.$emit("select", r)),
                                collapse: t(c)
                            }, {
                                default: n(()=>[
                                        (a(!0), S(M, null, q(t(At), (r)=>(a(), S(M, {
                                                key: r.key
                                            }, [
                                                r.children ? (a(), o(P, {
                                                    key: 0,
                                                    index: r.key
                                                }, {
                                                    title: n(()=>[
                                                            _(k, null, {
                                                                default: n(()=>[
                                                                        (a(), o(B(r.icon)))
                                                                    ]),
                                                                _: 2
                                                            }, 1024),
                                                            v("span", null, A(p.$t(r.label)), 1)
                                                        ]),
                                                    default: n(()=>[
                                                            (a(!0), S(M, null, q(r.children, (E)=>(a(), o(V, {
                                                                    key: E.key,
                                                                    index: E.key
                                                                }, {
                                                                    default: n(()=>[
                                                                            _(k, null, {
                                                                                default: n(()=>[
                                                                                        (a(), o(B(E.icon)))
                                                                                    ]),
                                                                                _: 2
                                                                            }, 1024),
                                                                            v("span", null, A(p.$t(E.label)), 1)
                                                                        ]),
                                                                    _: 2
                                                                }, 1032, [
                                                                    "index"
                                                                ]))), 128))
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "index"
                                                ])) : (a(), o(V, {
                                                    key: 1,
                                                    index: r.key
                                                }, {
                                                    title: n(()=>[
                                                            v("span", null, A(p.$t(r.label)), 1)
                                                        ]),
                                                    default: n(()=>[
                                                            _(k, null, {
                                                                default: n(()=>[
                                                                        (a(), o(B(r.icon)))
                                                                    ]),
                                                                _: 2
                                                            }, 1024)
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "index"
                                                ]))
                                            ], 64))), 128))
                                    ]),
                                _: 1
                            }, 8, [
                                "default-active",
                                "collapse"
                            ]),
                            v("div", {
                                class: $([
                                    "sidebar-footer",
                                    {
                                        "is-collapsed": t(c)
                                    }
                                ])
                            }, [
                                _(I, {
                                    circle: "",
                                    icon: t(c) ? t(_t) : t(lt),
                                    onClick: m,
                                    title: t(c) ? "展开" : "折叠"
                                }, null, 8, [
                                    "icon",
                                    "title"
                                ]),
                                _(I, {
                                    circle: "",
                                    onClick: y,
                                    title: p.$t("menu.logout")
                                }, {
                                    default: n(()=>[
                                            _(k, null, {
                                                default: n(()=>[
                                                        _(t(ct))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                    _: 1
                                }, 8, [
                                    "title"
                                ])
                            ], 2)
                        ]),
                    _: 1
                }, 8, [
                    "width"
                ]);
            };
        }
    };
    Vt = {
        key: 0,
        class: "mobile-menu"
    };
    It = {
        __name: "mobileMenu",
        props: {
            app_active_tab: {
                type: String,
                required: !0
            }
        },
        emits: [
            "select"
        ],
        setup (d, { emit: e }) {
            const l = e, b = x(), u = (c)=>{
                l("select", c);
            };
            return (c, m)=>{
                const y = N;
                return t(b).isMobile ? (a(), S("nav", Vt, [
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "vault" || d.app_active_tab === "add-vault"
                            }
                        ]),
                        onClick: m[0] || (m[0] = (p)=>u("vault"))
                    }, [
                        _(y, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(U))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.vault")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: [
                                    "mobile-data",
                                    "migration-export",
                                    "migration-import",
                                    "backups"
                                ].includes(d.app_active_tab)
                            }
                        ]),
                        onClick: m[1] || (m[1] = (p)=>u("mobile-data"))
                    }, [
                        _(y, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(rt))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.data")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "tools" || d.app_active_tab.startsWith("tool-")
                            }
                        ]),
                        onClick: m[2] || (m[2] = (p)=>u("tools"))
                    }, [
                        _(y, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(Q)
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.tools")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "mobile-settings" || d.app_active_tab.startsWith("settings-")
                            }
                        ]),
                        onClick: m[3] || (m[3] = (p)=>u("mobile-settings"))
                    }, [
                        _(y, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(F))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.settings")), 1)
                    ], 2)
                ])) : C("", !0);
            };
        }
    };
    Lt = J(It, [
        [
            "__scopeId",
            "data-v-3dd01012"
        ]
    ]);
    Dt = {
        __name: "desktopBody",
        setup (d) {
            const e = x(), l = H(null), b = i(()=>s(()=>import("./vaultList-Dc8S4s0i.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))), u = i(()=>s(()=>import("./addVault-Bdobwv0S.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([18,5,6,1,2,3,10,4,7,8,9,11]))), c = i(()=>s(()=>import("./dataExport-Ckq5zmcl.js"), __vite__mapDeps([19,1,2,3,20,4,5,6,7,8,9,21,10,11,22,23,15,24,16,12,13]))), m = i(()=>s(()=>import("./dataImport-BszAAcZh.js"), __vite__mapDeps([25,1,2,3,4,5,6,7,8,9,21,10,11,22,23,15,24,12,13,20,26]))), y = i(()=>s(()=>import("./dataBackup-B5L5pCW3.js"), __vite__mapDeps([27,1,2,3,4,5,6,7,8,9,21,10,11,22,23,15,24,12,13]))), p = i(()=>s(()=>import("./utilityTools-BJvH6VrR.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([28,5,6,1,2,3,29,4,7,8,9]))), h = i(()=>s(()=>import("./passkeySettings-9o0BIK1v.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,31,12,13]))), k = i(()=>s(()=>import("./securitySettings-AhaK9zHi.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,11,12,13,33]))), V = i(()=>s(()=>import("./appearanceSetting-BLxIGsK1.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,35]))), P = i(()=>s(()=>import("./languageSettings-Bfslrvfj.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9]))), O = i(()=>s(()=>import("./themeSettings-X7LazrOv.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,35]))), I = i(()=>s(()=>import("./layoutSettings-BRVmdpsA.js"), __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,39]))), w = i(()=>s(()=>import("./devicesSettings-ZPcBuZ8T.js"), __vite__mapDeps([40,1,2,3,4,5,6,7,8,9]))), r = i(()=>s(()=>import("./trashSettings-BXdnZbRr.js"), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,14,10,11]))), E = i(()=>s(()=>import("./aboutView-CzBZMGOg.js"), __vite__mapDeps([42,4,5,6,2,1,3,7,8,9])));
            let L = !1;
            const T = ()=>{
                e.setActiveTab("vault"), l.value ? R(()=>l.value?.fetchVault()) : L = !0;
            };
            return D(l, (g)=>{
                g && L && (L = !1, R(()=>g.fetchVault()));
            }), D(()=>e.homeTabReset, ()=>{
                e.app_active_tab === "vault" ? l.value?.fetchVault() : (e.setActiveTab("vault"), L = !0);
            }), D(()=>e.app_active_tab, ()=>{
                R(()=>{
                    window.scrollTo(0, 0);
                    const g = document.querySelector(".main-content");
                    g && (g.scrollTop = 0);
                });
            }), (g, f)=>{
                const z = j;
                return a(), o(z, {
                    class: "main-content"
                }, {
                    default: n(()=>[
                            _(W, {
                                name: t(e).pageTransition,
                                mode: "out-in"
                            }, {
                                default: n(()=>[
                                        (a(), S("div", {
                                            key: t(e).app_active_tab,
                                            class: "view-container"
                                        }, [
                                            t(e).app_active_tab === "vault" ? (a(), o(t(b), {
                                                key: 0,
                                                ref_key: "vaultListRef",
                                                ref: l,
                                                onSwitchTab: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSwitchTab"
                                            ])) : t(e).app_active_tab === "add-vault" ? (a(), o(t(u), {
                                                key: 1,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "migration-export" ? (a(), o(t(c), {
                                                key: 2
                                            })) : t(e).app_active_tab === "migration-import" ? (a(), o(t(m), {
                                                key: 3,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "backups" ? (a(), o(t(y), {
                                                key: 4,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "tools" ? (a(), o(t(p), {
                                                key: 5
                                            })) : t(e).app_active_tab === "settings-passkey" ? (a(), o(t(h), {
                                                key: 6
                                            })) : t(e).app_active_tab === "settings-security" ? (a(), o(t(k), {
                                                key: 7
                                            })) : t(e).app_active_tab === "settings-appearance" ? (a(), o(t(V), {
                                                key: 8
                                            })) : t(e).app_active_tab === "settings-language" ? (a(), o(t(P), {
                                                key: 9
                                            })) : t(e).app_active_tab === "settings-theme" ? (a(), o(t(O), {
                                                key: 10
                                            })) : t(e).app_active_tab === "settings-layout" ? (a(), o(t(I), {
                                                key: 11
                                            })) : t(e).app_active_tab === "settings-devices" ? (a(), o(t(w), {
                                                key: 12
                                            })) : t(e).app_active_tab === "settings-trash" ? (a(), o(t(r), {
                                                key: 13
                                            })) : t(e).app_active_tab === "settings-about" ? (a(), o(t(E), {
                                                key: 14
                                            })) : C("", !0)
                                        ]))
                                    ]),
                                _: 1
                            }, 8, [
                                "name"
                            ])
                        ]),
                    _: 1
                });
            };
        }
    };
    Rt = {
        __name: "mobileBody",
        setup (d) {
            const e = x(), l = H(null), b = i(()=>s(()=>import("./vaultList-Dc8S4s0i.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))), u = i(()=>s(()=>import("./mobileHub-K3FYesOJ.js"), __vite__mapDeps([43,1,2,3,4,5,6,7,8,9,29]))), c = i(()=>s(()=>import("./aboutView-CzBZMGOg.js"), __vite__mapDeps([42,4,5,6,2,1,3,7,8,9]))), m = i(()=>s(()=>import("./addVault-Bdobwv0S.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([18,5,6,1,2,3,10,4,7,8,9,11]))), y = i(()=>s(()=>import("./dataExport-Ckq5zmcl.js"), __vite__mapDeps([19,1,2,3,20,4,5,6,7,8,9,21,10,11,22,23,15,24,16,12,13]))), p = i(()=>s(()=>import("./dataImport-BszAAcZh.js"), __vite__mapDeps([25,1,2,3,4,5,6,7,8,9,21,10,11,22,23,15,24,12,13,20,26]))), h = i(()=>s(()=>import("./dataBackup-B5L5pCW3.js"), __vite__mapDeps([27,1,2,3,4,5,6,7,8,9,21,10,11,22,23,15,24,12,13]))), k = i(()=>s(()=>import("./utilityTools-BJvH6VrR.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([28,5,6,1,2,3,29,4,7,8,9]))), V = i(()=>s(()=>import("./passkeySettings-9o0BIK1v.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,31,12,13]))), P = i(()=>s(()=>import("./appearanceSetting-BLxIGsK1.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,35]))), O = i(()=>s(()=>import("./securitySettings-AhaK9zHi.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,11,12,13,33]))), I = i(()=>s(()=>import("./languageSettings-Bfslrvfj.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9]))), w = i(()=>s(()=>import("./themeSettings-X7LazrOv.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,35]))), r = i(()=>s(()=>import("./layoutSettings-BRVmdpsA.js"), __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,39]))), E = i(()=>s(()=>import("./devicesSettings-ZPcBuZ8T.js"), __vite__mapDeps([40,1,2,3,4,5,6,7,8,9]))), L = i(()=>s(()=>import("./trashSettings-BXdnZbRr.js"), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,14,10,11])));
            let T = !1;
            const g = ()=>{
                e.setActiveTab("vault"), l.value ? R(()=>l.value?.fetchVault()) : T = !0;
            };
            return D(l, (f)=>{
                f && T && (T = !1, R(()=>f.fetchVault()));
            }), D(()=>e.homeTabReset, ()=>{
                e.setActiveTab("vault"), T = !0;
            }), D(()=>e.app_active_tab, ()=>{
                R(()=>{
                    const f = document.querySelector("#app");
                    f && (f.scrollTop = 0), setTimeout(()=>{
                        f && f.scrollTop !== 0 && (f.scrollTop = 0);
                    }, 10);
                });
            }), (f, z)=>{
                const X = j;
                return a(), o(X, {
                    class: "main-content has-bottom-nav"
                }, {
                    default: n(()=>[
                            _(W, {
                                name: t(e).pageTransition,
                                mode: "out-in"
                            }, {
                                default: n(()=>[
                                        (a(), S("div", {
                                            key: t(e).app_active_tab,
                                            class: "view-container"
                                        }, [
                                            t(e).app_active_tab === "vault" ? (a(), o(t(b), {
                                                key: 0,
                                                ref_key: "vaultListRef",
                                                ref: l,
                                                onSwitchTab: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSwitchTab"
                                            ])) : t(e).app_active_tab === "mobile-data" ? (a(), o(t(u), {
                                                key: 1,
                                                mode: "data",
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSelect"
                                            ])) : t(e).app_active_tab === "mobile-settings" ? (a(), o(t(u), {
                                                key: 2,
                                                mode: "settings",
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSelect"
                                            ])) : t(e).app_active_tab === "settings-about" ? (a(), o(t(c), {
                                                key: 3
                                            })) : t(e).app_active_tab === "add-vault" ? (a(), o(t(m), {
                                                key: 4,
                                                onSuccess: g
                                            })) : t(e).app_active_tab === "migration-export" ? (a(), o(t(y), {
                                                key: 5
                                            })) : t(e).app_active_tab === "migration-import" ? (a(), o(t(p), {
                                                key: 6,
                                                onSuccess: g
                                            })) : t(e).app_active_tab === "backups" ? (a(), o(t(h), {
                                                key: 7,
                                                onSuccess: g
                                            })) : t(e).app_active_tab === "tools" ? (a(), o(t(k), {
                                                key: 8
                                            })) : t(e).app_active_tab === "settings-passkey" ? (a(), o(t(V), {
                                                key: 9
                                            })) : t(e).app_active_tab === "settings-appearance" ? (a(), o(t(P), {
                                                key: 10
                                            })) : t(e).app_active_tab === "settings-security" ? (a(), o(t(O), {
                                                key: 11
                                            })) : t(e).app_active_tab === "settings-language" ? (a(), o(t(I), {
                                                key: 12
                                            })) : t(e).app_active_tab === "settings-theme" ? (a(), o(t(w), {
                                                key: 13
                                            })) : t(e).app_active_tab === "settings-layout" ? (a(), o(t(r), {
                                                key: 14
                                            })) : t(e).app_active_tab === "settings-devices" ? (a(), o(t(E), {
                                                key: 15
                                            })) : t(e).app_active_tab === "settings-trash" ? (a(), o(t(L), {
                                                key: 16
                                            })) : C("", !0)
                                        ]))
                                    ]),
                                _: 1
                            }, 8, [
                                "name"
                            ])
                        ]),
                    _: 1
                });
            };
        }
    };
    Pt = {
        __name: "home",
        setup (d) {
            const e = x();
            return bt(()=>{
                const l = [
                    "vault",
                    "add-vault",
                    "tools",
                    "backups",
                    "migration-export",
                    "migration-import"
                ];
                e.isMobile && l.push("mobile-data", "mobile-settings");
                const b = e.app_active_tab.startsWith("settings-");
                !l.includes(e.app_active_tab) && !b && e.setActiveTab("vault");
            }), (l, b)=>{
                const u = mt;
                return a(), o(u, {
                    class: "home-container"
                }, {
                    default: n(()=>[
                            _(u, {
                                class: "main-body"
                            }, {
                                default: n(()=>[
                                        t(e).isMobile ? (a(), o(Rt, {
                                            key: 1
                                        })) : (a(), S(M, {
                                            key: 0
                                        }, [
                                            _(ht, {
                                                app_active_tab: t(e).app_active_tab,
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "app_active_tab",
                                                "onSelect"
                                            ]),
                                            _(Dt)
                                        ], 64))
                                    ]),
                                _: 1
                            }),
                            t(e).isMobile ? (a(), o(Lt, {
                                key: 0,
                                app_active_tab: t(e).app_active_tab,
                                onSelect: t(e).setActiveTab
                            }, null, 8, [
                                "app_active_tab",
                                "onSelect"
                            ])) : C("", !0)
                        ]),
                    _: 1
                });
            };
        }
    };
    Ct = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Pt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { St as I, Ct as h, __tla };
