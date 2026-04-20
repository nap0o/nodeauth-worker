const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-CoXQS5ol.js","assets/element-plus-CVRB8fAt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-ZD31REeY.js","assets/index-O7MHFWtG.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { _ as X, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { p as J, f as Y, ay as j, aG as K, aF as W, a1 as x, G as ee, i as ae, d as le, az as te, Z as oe, R as se, _ as re, $ as ue, F as ne, a8 as ie, aQ as de, X as ce, E as A, o as me } from "./element-plus-CVRB8fAt.js";
import { p as pe, v as D, u as H, f as ve, __tla as __tla_1 } from "./vaultService-XIwiRgwN.js";
import { a as _e, u as fe, p as be, i as ge, __tla as __tla_2 } from "./index-O7MHFWtG.js";
import { f as ye, I as m, M as b, Q as u, O as e, P as o, u as _, _ as v, Y as h, F as he, ac as Ve, J as V, X as we, Z as k, e as w, c as $e, E as n, aD as Se } from "./vue-core-Daban9YF.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-9eHlhal2.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let ea;
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
    })(),
    (()=>{
        try {
            return __tla_3;
        } catch  {}
    })()
]).then(async ()=>{
    let Ee, Te, Ae, ke, Ue, Be, Me, Fe, Re, Ce, De, He, Oe, qe, Ie, Le, Ne, ze, Ge;
    Ee = {
        class: "add-vault-wrapper"
    };
    Te = {
        class: "tab-card-wrapper"
    };
    Ae = {
        class: "page-header-container"
    };
    ke = {
        class: "page-header-hero"
    };
    Ue = {
        class: "hero-icon-wrapper"
    };
    Be = {
        key: 0
    };
    Me = {
        class: "page-desc-text"
    };
    Fe = {
        class: "max-w-600 m-auto"
    };
    Re = {
        class: "batch-import-container-top mb-10"
    };
    Ce = {
        class: "card-left"
    };
    De = {
        class: "icon-ring"
    };
    He = {
        class: "text-meta"
    };
    Oe = {
        class: "entry-title"
    };
    qe = {
        class: "entry-desc"
    };
    Ie = {
        class: "flex-center mb-20"
    };
    Le = {
        class: "flex-center gap-5"
    };
    Ne = {
        key: 0
    };
    ze = {
        key: 1,
        class: "vault-manual-form-container"
    };
    Ge = {
        class: "m-auto w-full"
    };
    ea = {
        __name: "addVault",
        emits: [
            "success"
        ],
        setup (Pe, { emit: O }) {
            const q = Se(()=>X(()=>import("./qrScanner-CoXQS5ol.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), U = O, g = _e(), B = fe(), M = be(), { t: s } = ge.global, f = w("camera"), I = $e(()=>[
                    {
                        label: s("vault.add_mode_camera"),
                        value: "camera",
                        icon: ie
                    },
                    {
                        label: s("vault.add_mode_image"),
                        value: "image",
                        icon: de
                    },
                    {
                        label: s("vault.add_account"),
                        value: "manual",
                        icon: ce
                    }
                ]), F = ()=>({
                    otpType: "totp",
                    service: "",
                    account: "",
                    secret: "",
                    category: "",
                    digits: 6,
                    period: 30,
                    algorithm: "SHA1"
                }), $ = w(!1), S = w(null), t = w(F()), L = (l, a, i)=>{
                if (!a) return i(new Error(s("vault.require_secret")));
                const p = a.replace(/\s/g, "");
                if (p.length < 16) return i(new Error(s("vault.secret_min_length")));
                if (!/^[A-Z2-7]+$/i.test(p)) return i(new Error(s("vault.secret_invalid_char")));
                i();
            }, N = {
                service: [
                    {
                        required: !0,
                        message: s("vault.require_service"),
                        trigger: "blur"
                    }
                ],
                account: [
                    {
                        required: !0,
                        message: s("vault.require_account"),
                        trigger: "blur"
                    }
                ],
                secret: [
                    {
                        required: !0,
                        validator: L,
                        trigger: "blur"
                    }
                ]
            };
            ye(()=>t.value.otpType, (l)=>{
                const a = l === "steam";
                t.value.algorithm = a ? "STEAM" : "SHA1", t.value.digits = a ? 5 : 6, t.value.period = 30, a && !t.value.service && (t.value.service = "Steam");
            });
            const z = ()=>{
                const l = new Uint8Array(20);
                window.crypto.getRandomValues(l), t.value.secret = ve(l);
            }, G = async ()=>{
                S.value && await S.value.validate(async (l)=>{
                    if (l) {
                        $.value = !0;
                        try {
                            if ((await D.createAccount(t.value)).success) {
                                M.isOffline || await g.updateMetadata({
                                    delta: 1
                                }), A.success(s("vault.add_success")), t.value = F(), g.markDirty();
                                const { fetchTrash: i } = H();
                                i(), U("success");
                            }
                        } catch  {} finally{
                            $.value = !1;
                        }
                    }
                });
            }, P = async (l)=>{
                try {
                    const a = pe(l);
                    if (!a) {
                        A.error(s("vault.invalid_qr_format"));
                        return;
                    }
                    if (await me.confirm(n("div", {
                        class: "confirmation-box"
                    }, [
                        n("div", {
                            class: "confirmation-row"
                        }, [
                            n("span", {
                                class: "confirmation-label"
                            }, s("vault.service_label")),
                            n("span", {
                                class: "confirmation-value"
                            }, a.service || s("vault.unknown_service"))
                        ]),
                        n("div", {
                            class: "confirmation-row"
                        }, [
                            n("span", {
                                class: "confirmation-label"
                            }, s("vault.account_label")),
                            n("span", {
                                class: "confirmation-value mono"
                            }, a.account || s("vault.unnamed_account"))
                        ]),
                        n("div", {
                            class: "confirmation-row"
                        }, [
                            n("span", {
                                class: "confirmation-label"
                            }, s("vault.param_label")),
                            n("div", {
                                class: "confirmation-tags"
                            }, [
                                n("span", {
                                    class: "confirmation-tag confirmation-tag-primary"
                                }, a.algorithm === "STEAM" ? s("vault.otp_type_steam") : s("vault.otp_type_totp")),
                                n("span", {
                                    class: "confirmation-tag confirmation-tag-info"
                                }, a.algorithm || "SHA1"),
                                n("span", {
                                    class: "confirmation-tag confirmation-tag-success"
                                }, `${a.digits || 6}${s("vault.digits_suffix")}`),
                                n("span", {
                                    class: "confirmation-tag confirmation-tag-warning"
                                }, `${a.period || 30}${s("vault.period_suffix")}`)
                            ])
                        ])
                    ]), s("vault.confirm_add_title"), {
                        confirmButtonText: s("common.confirm"),
                        cancelButtonText: s("common.cancel"),
                        type: "success",
                        center: !0
                    }), (await D.addFromUri(l, "Scan")).success) {
                        M.isOffline || await g.updateMetadata({
                            delta: 1
                        }), A.success(s("vault.add_success")), g.markDirty();
                        const { fetchTrash: p } = H();
                        p(), U("success");
                    }
                } catch (a) {
                    a !== "cancel" && console.error(a);
                }
            };
            return (l, a)=>{
                const i = Y, p = W, R = x, y = ae, d = ee, C = le, c = ue, E = re, T = se, Q = oe, Z = ne;
                return m(), b("div", Ee, [
                    u("div", Te, [
                        u("div", Ae, [
                            u("div", ke, [
                                u("div", Ue, [
                                    e(i, {
                                        size: 28
                                    }, {
                                        default: o(()=>[
                                                e(_(J))
                                            ]),
                                        _: 1
                                    })
                                ]),
                                _(B).isMobile ? h("", !0) : (m(), b("h2", Be, v(l.$t("menu.add")), 1))
                            ]),
                            u("p", Me, v(l.$t("vault.add_account_tip")), 1)
                        ]),
                        u("div", Fe, [
                            u("div", Re, [
                                u("div", {
                                    class: "import-card-hero",
                                    onClick: a[0] || (a[0] = (r)=>_(B).setActiveTab("migration-import"))
                                }, [
                                    u("div", Ce, [
                                        u("div", De, [
                                            e(i, null, {
                                                default: o(()=>[
                                                        e(_(j))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                        u("div", He, [
                                            u("div", Oe, v(l.$t("vault.batch_import_entry_title")), 1),
                                            u("div", qe, v(l.$t("vault.batch_import_entry_desc")), 1)
                                        ])
                                    ]),
                                    e(i, {
                                        class: "card-arrow"
                                    }, {
                                        default: o(()=>[
                                                e(_(K))
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            u("div", Ie, [
                                e(R, {
                                    modelValue: f.value,
                                    "onUpdate:modelValue": a[1] || (a[1] = (r)=>f.value = r),
                                    class: "mode-switcher-radio"
                                }, {
                                    default: o(()=>[
                                            (m(!0), b(he, null, Ve(I.value, (r)=>(m(), V(p, {
                                                    key: r.value,
                                                    label: r.value
                                                }, {
                                                    default: o(()=>[
                                                            u("div", Le, [
                                                                e(i, null, {
                                                                    default: o(()=>[
                                                                            (m(), V(we(r.icon)))
                                                                        ]),
                                                                    _: 2
                                                                }, 1024),
                                                                u("span", null, v(r.label), 1)
                                                            ])
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "label"
                                                ]))), 128))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "modelValue"
                                ])
                            ]),
                            f.value === "camera" || f.value === "image" ? (m(), b("div", Ne, [
                                e(_(q), {
                                    "force-mode": f.value,
                                    onScanSuccess: P
                                }, null, 8, [
                                    "force-mode"
                                ])
                            ])) : f.value === "manual" ? (m(), b("div", ze, [
                                u("div", Ge, [
                                    e(Z, {
                                        model: t.value,
                                        "label-position": "top",
                                        rules: N,
                                        ref_key: "addFormRef",
                                        ref: S,
                                        class: "vault-manual-form-wrapper"
                                    }, {
                                        default: o(()=>[
                                                e(d, {
                                                    label: l.$t("vault.service_name"),
                                                    prop: "service"
                                                }, {
                                                    default: o(()=>[
                                                            e(y, {
                                                                modelValue: t.value.service,
                                                                "onUpdate:modelValue": a[2] || (a[2] = (r)=>t.value.service = r),
                                                                placeholder: l.$t("vault.input_service_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    label: l.$t("vault.account_identifier"),
                                                    prop: "account"
                                                }, {
                                                    default: o(()=>[
                                                            e(y, {
                                                                modelValue: t.value.account,
                                                                "onUpdate:modelValue": a[3] || (a[3] = (r)=>t.value.account = r),
                                                                placeholder: l.$t("vault.input_account_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    label: l.$t("vault.input_secret_label"),
                                                    prop: "secret"
                                                }, {
                                                    default: o(()=>[
                                                            e(y, {
                                                                modelValue: t.value.secret,
                                                                "onUpdate:modelValue": a[4] || (a[4] = (r)=>t.value.secret = r),
                                                                placeholder: l.$t("vault.input_secret_placeholder"),
                                                                clearable: ""
                                                            }, {
                                                                append: o(()=>[
                                                                        e(C, {
                                                                            onClick: z,
                                                                            title: l.$t("vault.generate_random_secret")
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(i, null, {
                                                                                        default: o(()=>[
                                                                                                e(_(te))
                                                                                            ]),
                                                                                        _: 1
                                                                                    })
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "title"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    label: l.$t("vault.otp_type_label"),
                                                    prop: "otpType"
                                                }, {
                                                    default: o(()=>[
                                                            e(R, {
                                                                modelValue: t.value.otpType,
                                                                "onUpdate:modelValue": a[5] || (a[5] = (r)=>t.value.otpType = r)
                                                            }, {
                                                                default: o(()=>[
                                                                        e(p, {
                                                                            label: "totp"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    k(v(l.$t("vault.otp_type_totp")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        }),
                                                                        e(p, {
                                                                            label: "steam"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    k(v(l.$t("vault.otp_type_steam")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(Q, {
                                                    gutter: 20
                                                }, {
                                                    default: o(()=>[
                                                            e(T, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: l.$t("vault.algorithm_label"),
                                                                            prop: "algorithm"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(E, {
                                                                                        modelValue: t.value.algorithm,
                                                                                        "onUpdate:modelValue": a[6] || (a[6] = (r)=>t.value.algorithm = r),
                                                                                        class: "w-full",
                                                                                        disabled: t.value.otpType === "steam"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                e(c, {
                                                                                                    label: l.$t("vault.algo_sha1"),
                                                                                                    value: "SHA1"
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(c, {
                                                                                                    label: "SHA256",
                                                                                                    value: "SHA256"
                                                                                                }),
                                                                                                e(c, {
                                                                                                    label: "SHA512",
                                                                                                    value: "SHA512"
                                                                                                }),
                                                                                                t.value.otpType === "steam" ? (m(), V(c, {
                                                                                                    key: 0,
                                                                                                    label: l.$t("vault.algo_steam"),
                                                                                                    value: "STEAM"
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : h("", !0)
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            e(T, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: l.$t("vault.digits_label"),
                                                                            prop: "digits"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(E, {
                                                                                        modelValue: t.value.digits,
                                                                                        "onUpdate:modelValue": a[7] || (a[7] = (r)=>t.value.digits = r),
                                                                                        class: "w-full",
                                                                                        disabled: t.value.otpType === "steam"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                t.value.otpType === "steam" ? (m(), V(c, {
                                                                                                    key: 0,
                                                                                                    label: l.$t("vault.digits_5"),
                                                                                                    value: 5
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : h("", !0),
                                                                                                e(c, {
                                                                                                    label: l.$t("vault.digits_6"),
                                                                                                    value: 6
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(c, {
                                                                                                    label: l.$t("vault.digits_8"),
                                                                                                    value: 8
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            e(T, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: l.$t("vault.period_label"),
                                                                            prop: "period"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(E, {
                                                                                        modelValue: t.value.period,
                                                                                        "onUpdate:modelValue": a[8] || (a[8] = (r)=>t.value.period = r),
                                                                                        class: "w-full",
                                                                                        disabled: t.value.otpType === "steam"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                e(c, {
                                                                                                    label: l.$t("vault.period_30s"),
                                                                                                    value: 30
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(c, {
                                                                                                    label: l.$t("vault.period_60s"),
                                                                                                    value: 60
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }),
                                                e(d, {
                                                    label: l.$t("vault.category_optional"),
                                                    prop: "category"
                                                }, {
                                                    default: o(()=>[
                                                            e(y, {
                                                                modelValue: t.value.category,
                                                                "onUpdate:modelValue": a[9] || (a[9] = (r)=>t.value.category = r),
                                                                placeholder: l.$t("vault.input_category_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    class: "mt-30"
                                                }, {
                                                    default: o(()=>[
                                                            e(C, {
                                                                type: "primary",
                                                                loading: $.value,
                                                                onClick: G,
                                                                class: "vault-manual-submit-btn",
                                                                size: "large"
                                                            }, {
                                                                default: o(()=>[
                                                                        k(v(l.$t("vault.confirm_add_btn")), 1)
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "loading"
                                                            ])
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "model"
                                    ])
                                ])
                            ])) : h("", !0)
                        ])
                    ])
                ]);
            };
        }
    };
});
export { ea as default, __tla };
