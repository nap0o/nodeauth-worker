const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-CoXQS5ol.js","assets/element-plus-CVRB8fAt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-ZD31REeY.js","assets/index-O7MHFWtG.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { _ as we, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { E as O, d as Ve, i as $e, f as Ce, az as ke, ad as ne, aF as Ae, a1 as Be, $ as Se, _ as Ie, w as Ue, v as Te, u as Ee, W as He, b as Re, aG as qe, aH as ze, au as De } from "./element-plus-CVRB8fAt.js";
import { f as de, k as Me, a3 as Qe, e as v, I as R, M as W, Q as o, _ as d, O as s, P as r, Z as $, S as D, u as e, W as P, $ as J, l as C, J as Y, Y as F, aD as Ne } from "./vue-core-Daban9YF.js";
import { u as Oe } from "./tanstack-query-C-OQsQoR.js";
import { c as ie, t as Pe } from "./common-CFXi3gR8.js";
import { a as Ge, c as Z, d as ue, e as x, h as Le, f as K, g as je, i as We, b as Je, j as Ye, k as Fe, p as Ze, v as xe, __tla as __tla_1 } from "./vaultService-XIwiRgwN.js";
import { l as Ke, i as Xe, u as es, __tla as __tla_2 } from "./index-O7MHFWtG.js";
import { Q as ss } from "./qr-utils-ZD31REeY.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-9eHlhal2.js";
import "./simplewebauthn-3qpiAaRi.js";
let xs;
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
    function ts() {
        const g = v("base32"), f = v(""), m = v(""), y = v(""), b = v(""), u = v("totp"), _ = v("NodeAuth.io"), A = v("NodeAuth"), c = v("SHA-1"), h = v(6), w = v(30), B = v(0), T = v(""), E = v(""), M = v(30);
        let S = null;
        de(u, (n)=>{
            n === "steam" ? (c.value = "STEAM", h.value = 5, w.value = 30, _.value = "Steam") : (c.value = "SHA-1", h.value = 6, w.value = 30, _.value = "NodeAuth.io"), p("settings");
        });
        const p = async (n)=>{
            try {
                if (n === "base32") {
                    const t = Ge(f.value);
                    m.value = Z(t), y.value = ue(t), b.value = x(t);
                } else if (n === "hex") {
                    const t = Le(m.value);
                    t.length > 0 && (f.value = K(t), y.value = ue(t), b.value = x(t));
                } else if (n === "ascii") {
                    const t = je(y.value);
                    f.value = K(t), m.value = Z(t), b.value = x(t);
                } else if (n === "base64") {
                    const t = We(b.value);
                    t.length > 0 && (f.value = K(t), m.value = Z(t), y.value = ue(t));
                }
                f.value ? T.value = Je({
                    service: _.value,
                    account: A.value,
                    secret: f.value,
                    algorithm: c.value,
                    digits: h.value,
                    period: w.value
                }) : (T.value = "", E.value = ""), N();
            } catch (t) {
                Ke.error(t);
            }
        }, G = ()=>p("base32"), q = ()=>p("hex"), L = ()=>p("ascii"), X = ()=>p("base64"), ee = ()=>p("settings"), j = ()=>{
            const n = new Uint8Array(20);
            window.crypto.getRandomValues(n), f.value = K(n), p("base32");
        }, se = ()=>{
            const n = new Uint8Array(20);
            window.crypto.getRandomValues(n), m.value = Z(n), p("hex");
        }, z = ()=>{
            const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
            let t = "";
            const k = new Uint32Array(20);
            window.crypto.getRandomValues(k);
            for(let V = 0; V < 20; V++)t += n[k[V] % n.length];
            y.value = t, p("ascii");
        }, te = ()=>{
            const n = new Uint8Array(20);
            window.crypto.getRandomValues(n), b.value = x(n), p("base64");
        }, N = async ()=>{
            if (!f.value) return;
            const n = w.value, t = Ye() / 1e3 + B.value;
            M.value = Math.ceil(n - t % n);
            try {
                const k = Math.floor(B.value / n);
                E.value = await Fe(f.value, n, h.value, c.value, k);
            } catch  {
                E.value = "ERROR";
            }
        }, le = (n, t = !1)=>{
            t ? B.value = 0 : B.value += n, N();
        }, ae = (n)=>{
            const t = Ze(n);
            return t ? (t.secret && (f.value = t.secret, p("base32")), t.service && (_.value = t.service), t.account && (A.value = t.account), t.digits && (h.value = t.digits), t.period && (w.value = t.period), t.algorithm && (c.value = t.algorithm), p("settings"), !0) : !1;
        };
        return Me(()=>{
            j(), S = setInterval(N, 1e3);
        }), Qe(()=>{
            S && clearInterval(S);
        }), {
            app_active_tab: g,
            otpType: u,
            secretBase32: f,
            secretHex: m,
            secretAscii: y,
            secretBase64: b,
            issuer: _,
            account: A,
            algorithm: c,
            digits: h,
            period: w,
            app_time_offset: B,
            currentUri: T,
            currentCode: E,
            remaining: M,
            handleBase32Input: G,
            handleHexInput: q,
            handleAsciiInput: L,
            handleBase64Input: X,
            updateUri: ee,
            refreshBase32: j,
            refreshHex: se,
            refreshAscii: z,
            refreshBase64: te,
            adjustTime: le,
            handleParsedUri: ae
        };
    }
    function ls(g, f) {
        const { t: m } = Xe.global, y = v(!1), b = v(!1), u = v("");
        return de(()=>g.currentUri.value, async (c)=>{
            if (c) try {
                u.value = await ss.toDataURL(c, {
                    width: 200,
                    margin: 1
                });
            } catch  {
                u.value = "";
            }
            else u.value = "";
        }), {
            isSaving: y,
            showScanner: b,
            qrCodeUrl: u,
            handleScanSuccess: (c)=>{
                b.value = !1, g.handleParsedUri(c) ? O.success(m("tools.qr_parsed")) : O.warning(m("vault.generate_fail"));
            },
            saveToVault: async ()=>{
                if (!g.secretBase32.value) return O.warning(m("tools.secret_empty"));
                if (!g.issuer.value || !g.account.value) return O.warning(m("tools.fill_info"));
                y.value = !0;
                try {
                    (await xe.createAccount({
                        service: g.issuer.value,
                        account: g.account.value,
                        secret: g.secretBase32.value,
                        digits: g.digits.value,
                        period: g.period.value,
                        algorithm: g.algorithm.value,
                        category: m("tools.title")
                    })).success && (O.success(m("vault.add_success")), f.invalidateQueries([
                        "vault"
                    ]));
                } catch  {} finally{
                    y.value = !1;
                }
            }
        };
    }
    let as, os, ns, is, us, rs, ds, cs, vs, ps, fs, ms, _s, gs, hs, ys, bs, ws, Vs, $s, Cs, ks, As, Bs, Ss, Is, Us, Ts, Es, Hs, Rs, qs, zs, Ds, Ms, Qs;
    as = {
        class: "tool-pane"
    };
    os = {
        class: "totp-layout"
    };
    ns = {
        class: "config-side"
    };
    is = {
        class: "config-section"
    };
    us = {
        class: "section-header"
    };
    rs = {
        class: "section-title"
    };
    ds = {
        class: "pill-tabs-container"
    };
    cs = {
        class: "unified-input-card"
    };
    vs = {
        class: "inline-input-actions"
    };
    ps = {
        class: "config-section"
    };
    fs = {
        class: "section-title"
    };
    ms = {
        class: "meta-row"
    };
    _s = {
        class: "input-label"
    };
    gs = {
        class: "input-label"
    };
    hs = {
        class: "config-section advanced-settings"
    };
    ys = {
        class: "section-title"
    };
    bs = {
        class: "mb-15"
    };
    ws = {
        class: "advanced-row"
    };
    Vs = {
        class: "config-section"
    };
    $s = {
        class: "section-header"
    };
    Cs = {
        class: "section-title"
    };
    ks = {
        class: "unified-preview-card"
    };
    As = {
        class: "preview-layout-grid"
    };
    Bs = {
        class: "qr-unified-wrapper"
    };
    Ss = [
        "src"
    ];
    Is = {
        class: "totp-unified-details"
    };
    Us = [
        "title"
    ];
    Ts = {
        key: 0,
        class: "uri-box"
    };
    Es = {
        class: "uri-text"
    };
    Hs = {
        class: "config-section time-travel-section"
    };
    Rs = {
        class: "section-header"
    };
    qs = {
        class: "section-title mb-0"
    };
    zs = {
        class: "time-travel-controls"
    };
    Ds = {
        class: "offset-display"
    };
    Ms = {
        class: "offset-label"
    };
    Qs = {
        class: "config-section mt-20"
    };
    xs = {
        __name: "totpSecret",
        setup (g) {
            const f = es(), m = Ne(()=>we(()=>import("./qrScanner-CoXQS5ol.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), y = Oe(), b = ts(), { app_active_tab: u, otpType: _, secretBase32: A, secretHex: c, secretAscii: h, secretBase64: w, issuer: B, account: T, algorithm: E, digits: M, period: S, app_time_offset: p, currentUri: G, currentCode: q, remaining: L, handleBase32Input: X, handleHexInput: ee, handleAsciiInput: j, handleBase64Input: se, updateUri: z, refreshBase32: te, refreshHex: N, refreshAscii: le, refreshBase64: ae, adjustTime: n } = b, { isSaving: t, showScanner: k, qrCodeUrl: V, handleScanSuccess: ce, saveToVault: ve } = ls(b, y), pe = ()=>{
                u.value === "base32" ? te() : u.value === "hex" ? N() : u.value === "ascii" ? le() : u.value === "base64" && ae();
            }, fe = ()=>{
                let a = "";
                u.value === "base32" ? a = A.value : u.value === "hex" ? a = c.value : u.value === "ascii" ? a = h.value : u.value === "base64" && (a = w.value), a && ie(a);
            }, me = ()=>{
                V.value && Pe(V.value, `nodeauth-qr-${T.value || "code"}.png`);
            };
            return (a, l)=>{
                const I = Ve, Q = $e, H = Ce, re = Ae, _e = Be, U = Se, oe = Ie, ge = Ee, he = ze, ye = De, be = Te;
                return R(), W("div", as, [
                    o("div", os, [
                        o("div", ns, [
                            o("div", is, [
                                o("div", us, [
                                    o("h3", rs, d(a.$t("tools.secret_config")), 1),
                                    s(I, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[0] || (l[0] = (i)=>k.value = !0)
                                    }, {
                                        default: r(()=>[
                                                $(d(a.$t("vault.add_scan")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", ds, [
                                    o("div", {
                                        class: D([
                                            "pill-tab",
                                            {
                                                active: e(u) === "base32"
                                            }
                                        ]),
                                        onClick: l[1] || (l[1] = (i)=>u.value = "base32")
                                    }, "Base32", 2),
                                    o("div", {
                                        class: D([
                                            "pill-tab",
                                            {
                                                active: e(u) === "hex"
                                            }
                                        ]),
                                        onClick: l[2] || (l[2] = (i)=>u.value = "hex")
                                    }, d(a.$t("tools.totp_hex")), 3),
                                    o("div", {
                                        class: D([
                                            "pill-tab",
                                            {
                                                active: e(u) === "ascii"
                                            }
                                        ]),
                                        onClick: l[3] || (l[3] = (i)=>u.value = "ascii")
                                    }, "ASCII", 2),
                                    o("div", {
                                        class: D([
                                            "pill-tab",
                                            {
                                                active: e(u) === "base64"
                                            }
                                        ]),
                                        onClick: l[4] || (l[4] = (i)=>u.value = "base64")
                                    }, "Base64", 2)
                                ]),
                                o("div", cs, [
                                    P(s(Q, {
                                        modelValue: e(A),
                                        "onUpdate:modelValue": l[5] || (l[5] = (i)=>C(A) ? A.value = i : null),
                                        onInput: e(X),
                                        placeholder: "JBSWY3DP...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            J,
                                            e(u) === "base32"
                                        ]
                                    ]),
                                    P(s(Q, {
                                        modelValue: e(c),
                                        "onUpdate:modelValue": l[6] || (l[6] = (i)=>C(c) ? c.value = i : null),
                                        onInput: e(ee),
                                        placeholder: "48656c6c6f...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            J,
                                            e(u) === "hex"
                                        ]
                                    ]),
                                    P(s(Q, {
                                        modelValue: e(h),
                                        "onUpdate:modelValue": l[7] || (l[7] = (i)=>C(h) ? h.value = i : null),
                                        onInput: e(j),
                                        placeholder: "Hello...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            J,
                                            e(u) === "ascii"
                                        ]
                                    ]),
                                    P(s(Q, {
                                        modelValue: e(w),
                                        "onUpdate:modelValue": l[8] || (l[8] = (i)=>C(w) ? w.value = i : null),
                                        onInput: e(se),
                                        placeholder: "SGVsbG8...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            J,
                                            e(u) === "base64"
                                        ]
                                    ]),
                                    o("div", vs, [
                                        s(I, {
                                            link: "",
                                            type: "primary",
                                            onClick: pe
                                        }, {
                                            default: r(()=>[
                                                    s(H, null, {
                                                        default: r(()=>[
                                                                s(e(ke))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    $(" " + d(a.$t("tools.regenerate")), 1)
                                                ]),
                                            _: 1
                                        }),
                                        s(I, {
                                            link: "",
                                            type: "primary",
                                            onClick: fe
                                        }, {
                                            default: r(()=>[
                                                    s(H, null, {
                                                        default: r(()=>[
                                                                s(e(ne))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    $(" " + d(a.$t("common.copy")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ])
                                ])
                            ]),
                            o("div", ps, [
                                o("h3", fs, d(a.$t("tools.basic_info")), 1),
                                o("div", ms, [
                                    s(Q, {
                                        modelValue: e(B),
                                        "onUpdate:modelValue": l[9] || (l[9] = (i)=>C(B) ? B.value = i : null),
                                        onInput: e(z)
                                    }, {
                                        prefix: r(()=>[
                                                o("span", _s, d(a.$t("vault.service")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]),
                                    s(Q, {
                                        modelValue: e(T),
                                        "onUpdate:modelValue": l[10] || (l[10] = (i)=>C(T) ? T.value = i : null),
                                        onInput: e(z)
                                    }, {
                                        prefix: r(()=>[
                                                o("span", gs, d(a.$t("vault.account")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ])
                                ])
                            ]),
                            o("div", hs, [
                                o("h3", ys, d(a.$t("tools.advanced_settings")), 1),
                                o("div", bs, [
                                    s(_e, {
                                        modelValue: e(_),
                                        "onUpdate:modelValue": l[11] || (l[11] = (i)=>C(_) ? _.value = i : null)
                                    }, {
                                        default: r(()=>[
                                                s(re, {
                                                    label: "totp"
                                                }, {
                                                    default: r(()=>[
                                                            $(d(a.$t("vault.otp_type_totp")), 1)
                                                        ]),
                                                    _: 1
                                                }),
                                                s(re, {
                                                    label: "steam"
                                                }, {
                                                    default: r(()=>[
                                                            $(d(a.$t("vault.otp_type_steam")), 1)
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue"
                                    ])
                                ]),
                                o("div", ws, [
                                    s(oe, {
                                        modelValue: e(E),
                                        "onUpdate:modelValue": l[12] || (l[12] = (i)=>C(E) ? E.value = i : null),
                                        onChange: e(z),
                                        placeholder: a.$t("tools.totp_algorithm"),
                                        class: "flex-1",
                                        disabled: e(_) === "steam"
                                    }, {
                                        default: r(()=>[
                                                s(U, {
                                                    label: a.$t("tools.totp_algo_sha1"),
                                                    value: "SHA-1"
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                s(U, {
                                                    label: "SHA256",
                                                    value: "SHA-256"
                                                }),
                                                s(U, {
                                                    label: "SHA512",
                                                    value: "SHA-512"
                                                }),
                                                e(_) === "steam" ? (R(), Y(U, {
                                                    key: 0,
                                                    label: "SHA1",
                                                    value: "STEAM"
                                                })) : F("", !0)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onChange",
                                        "placeholder",
                                        "disabled"
                                    ]),
                                    s(oe, {
                                        modelValue: e(M),
                                        "onUpdate:modelValue": l[13] || (l[13] = (i)=>C(M) ? M.value = i : null),
                                        onChange: e(z),
                                        placeholder: a.$t("tools.totp_digits"),
                                        class: "w-100",
                                        disabled: e(_) === "steam"
                                    }, {
                                        default: r(()=>[
                                                e(_) === "steam" ? (R(), Y(U, {
                                                    key: 0,
                                                    label: a.$t("vault.digits_5"),
                                                    value: 5
                                                }, null, 8, [
                                                    "label"
                                                ])) : F("", !0),
                                                s(U, {
                                                    label: a.$t("vault.digits_6"),
                                                    value: 6
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                s(U, {
                                                    label: a.$t("vault.digits_8"),
                                                    value: 8
                                                }, null, 8, [
                                                    "label"
                                                ])
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onChange",
                                        "placeholder",
                                        "disabled"
                                    ]),
                                    s(oe, {
                                        modelValue: e(S),
                                        "onUpdate:modelValue": l[14] || (l[14] = (i)=>C(S) ? S.value = i : null),
                                        onChange: e(z),
                                        placeholder: a.$t("tools.totp_period"),
                                        class: "w-100",
                                        disabled: e(_) === "steam"
                                    }, {
                                        default: r(()=>[
                                                s(U, {
                                                    label: a.$t("vault.period_30s"),
                                                    value: 30
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                s(U, {
                                                    label: a.$t("vault.period_60s"),
                                                    value: 60
                                                }, null, 8, [
                                                    "label"
                                                ])
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onChange",
                                        "placeholder",
                                        "disabled"
                                    ])
                                ])
                            ]),
                            o("div", Vs, [
                                o("div", $s, [
                                    o("h3", Cs, d(a.$t("tools.preview")), 1),
                                    s(I, {
                                        link: "",
                                        type: "primary",
                                        onClick: me,
                                        disabled: !e(V)
                                    }, {
                                        default: r(()=>[
                                                s(H, null, {
                                                    default: r(()=>[
                                                            s(e(Ue))
                                                        ]),
                                                    _: 1
                                                }),
                                                $(" " + d(a.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "disabled"
                                    ])
                                ]),
                                o("div", ks, [
                                    o("div", As, [
                                        P((R(), W("div", Bs, [
                                            e(V) ? (R(), W("img", {
                                                key: 0,
                                                src: e(V),
                                                alt: "QR Code",
                                                class: "qr-img-unified"
                                            }, null, 8, Ss)) : (R(), Y(ge, {
                                                key: 1,
                                                description: a.$t("tools.totp_config_preview"),
                                                "image-size": 80
                                            }, null, 8, [
                                                "description"
                                            ]))
                                        ])), [
                                            [
                                                be,
                                                !e(V)
                                            ]
                                        ]),
                                        o("div", Is, [
                                            o("div", {
                                                class: "totp-code-clickable flex flex-items-center gap-10",
                                                onClick: l[15] || (l[15] = (i)=>e(q) && e(ie)(e(q), a.$t("common.copy_success"))),
                                                title: a.$t("common.copy")
                                            }, [
                                                o("span", {
                                                    class: D([
                                                        "totp-code-giant",
                                                        {
                                                            blur: !e(q)
                                                        }
                                                    ])
                                                }, d(e(q) || "------"), 3),
                                                e(q) ? (R(), Y(H, {
                                                    key: 0,
                                                    color: "var(--el-color-primary)",
                                                    size: "20"
                                                }, {
                                                    default: r(()=>[
                                                            s(e(ne))
                                                        ]),
                                                    _: 1
                                                })) : F("", !0)
                                            ], 8, Us),
                                            o("div", {
                                                class: D([
                                                    "totp-timer",
                                                    {
                                                        urgent: e(L) < 5
                                                    }
                                                ]),
                                                style: {
                                                    "margin-left": "10px"
                                                }
                                            }, [
                                                s(H, null, {
                                                    default: r(()=>[
                                                            s(e(He))
                                                        ]),
                                                    _: 1
                                                }),
                                                $(" " + d(e(L)) + "s " + d(a.$t("tools.refresh_after")), 1)
                                            ], 2)
                                        ])
                                    ])
                                ]),
                                e(V) ? (R(), W("div", Ts, [
                                    o("div", Es, d(e(G)), 1),
                                    s(I, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[16] || (l[16] = (i)=>e(ie)(e(G)))
                                    }, {
                                        default: r(()=>[
                                                s(H, null, {
                                                    default: r(()=>[
                                                            s(e(ne))
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])) : F("", !0)
                            ]),
                            o("div", Hs, [
                                o("div", Rs, [
                                    o("h3", qs, d(a.$t("tools.time_offset")), 1),
                                    s(I, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[17] || (l[17] = (i)=>e(n)(0, !0)),
                                        size: "small"
                                    }, {
                                        default: r(()=>[
                                                $(d(a.$t("tools.reset_time")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", zs, [
                                    o("div", Ds, [
                                        o("span", Ms, d(a.$t("tools.current_offset")), 1),
                                        o("span", {
                                            class: D([
                                                "offset-value",
                                                {
                                                    "has-offset": e(p) !== 0
                                                }
                                            ])
                                        }, d(e(p) > 0 ? "+" : "") + d(e(p)) + "s ", 3)
                                    ]),
                                    s(he, {
                                        class: "segmented-control"
                                    }, {
                                        default: r(()=>[
                                                s(I, {
                                                    onClick: l[18] || (l[18] = (i)=>e(n)(-e(S))),
                                                    size: "default"
                                                }, {
                                                    default: r(()=>[
                                                            s(H, {
                                                                class: "mr-10"
                                                            }, {
                                                                default: r(()=>[
                                                                        s(e(Re))
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            $(" " + d(a.$t("tools.prev_period")), 1)
                                                        ]),
                                                    _: 1
                                                }),
                                                s(I, {
                                                    onClick: l[19] || (l[19] = (i)=>e(n)(e(S))),
                                                    size: "default"
                                                }, {
                                                    default: r(()=>[
                                                            $(d(a.$t("tools.next_period")) + " ", 1),
                                                            s(H, {
                                                                class: "ml-5"
                                                            }, {
                                                                default: r(()=>[
                                                                        s(e(qe))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            o("div", Qs, [
                                s(I, {
                                    type: "success",
                                    size: "large",
                                    onClick: e(ve),
                                    class: "w-full",
                                    loading: e(t)
                                }, {
                                    default: r(()=>[
                                            $(d(a.$t("tools.save_to_vault")), 1)
                                        ]),
                                    _: 1
                                }, 8, [
                                    "onClick",
                                    "loading"
                                ])
                            ])
                        ])
                    ]),
                    s(ye, {
                        modelValue: e(k),
                        "onUpdate:modelValue": l[20] || (l[20] = (i)=>C(k) ? k.value = i : null),
                        title: a.$t("tools.totp_scan_qr_title"),
                        width: e(f).isMobile ? "90%" : "450px",
                        "destroy-on-close": "",
                        "append-to-body": ""
                    }, {
                        default: r(()=>[
                                s(e(m), {
                                    onScanSuccess: e(ce)
                                }, null, 8, [
                                    "onScanSuccess"
                                ])
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title",
                        "width"
                    ])
                ]);
            };
        }
    };
});
export { xs as default, __tla };
