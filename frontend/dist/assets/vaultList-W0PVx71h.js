const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Co_0hqsi.js","assets/pdf-utils-r4RjNe6V.js","assets/compression-utils-CXh1ITwj.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh0klhaa.js","assets/element-plus-Dh61In7b.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CLSE-HWx.css"])))=>i.map(i=>d[i]);
import { d as Qt, H as An, e as Dn, V as On, f as yn, M as _n, ac as Vn, aM as Ln, at as Fn, aN as Bn, aO as Hn, aP as tn, aQ as Ct, X as nn, Y as ut, Q as Pn, l as Et, S as Wn, E as Fe, o as ln, i as Un, h as Xn, a1 as Yn, y as Nn, ak as qn, aR as Kn, aS as Qn, u as jn, aT as Gn, Z as Zn, R as Jn, F as el, G as tl, aU as nl, aV as ll, aW as il, ad as ol, aX as sl } from "./element-plus-Dh0klhaa.js";
import { D as kt, I as $, J as _e, P as g, H as Ke, X as Vt, e as F, ab as al, aj as rl, ak as cl, U as Dt, u as l, x as on, k as rt, f as we, ae as b, v as Lt, m as ul, n as bt, K as wn, L as dl, a3 as St, W as jt, M as Q, Y as pe, F as st, ac as At, ar as fl, S as at, R as ft, O as p, c as ie, as as ml, s as Mt, a8 as vl, aw as pl, A as yt, az as gl, $ as hl, _ as W, Q as I, Z as Me, aa as ot, a0 as yl, l as Bt, T as _l } from "./vue-core-Daban9YF.js";
import { _ as bn, u as Ot, p as Gt, b as wl, t as bl, a as Sn, i as Sl, l as xt, q as kn, f as kl, __tla as __tla_0 } from "./index-Co_0hqsi.js";
import { j as sn, k as Ht, u as zn, v as ct, t as _t, b as an, __tla as __tla_1 } from "./vaultService-B5YKm4cj.js";
import { _ as rn } from "./responsiveOverlay-iAJu-4oi.js";
import { u as zl } from "./useVaultList-CCoM2vAO.js";
import { _ as cn, __tla as __tla_2 } from "./pdf-utils-r4RjNe6V.js";
import { Q as $l } from "./qr-utils-DSii33i3.js";
import { c as Pt } from "./common-SEJmKPAB.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-COxFgigF.js";
let So;
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
    function Tl(e) {
        return {
            all: e = e || new Map,
            on: function(t, i) {
                var n = e.get(t);
                n && n.push(i) || e.set(t, [
                    i
                ]);
            },
            off: function(t, i) {
                var n = e.get(t);
                n && n.splice(n.indexOf(i) >>> 0, 1);
            },
            emit: function(t, i) {
                (e.get(t) || []).slice().map(function(n) {
                    n(i);
                }), (e.get("*") || []).slice().map(function(n) {
                    n(t, i);
                });
            }
        };
    }
    function Zt(e, t, i) {
        if (!i) return t;
        const n = e?.[i];
        if (n == null) throw new Error(`Key is ${n} on item (keyField is '${i}')`);
        return n;
    }
    function dt(e, t) {
        return e.map((i, n)=>Zt(i, n, t));
    }
    function Cl(e, t, i) {
        const n = [], a = [];
        for(let c = 0; c < e.length; c++){
            const R = e[c], B = Zt(R, c, t), v = i(R, c, B);
            n.push(B), a.push(typeof v == "number" && v > 0 ? v : null);
        }
        return {
            keys: n,
            sizes: a
        };
    }
    function Ml(e, t, i) {
        if (!e || e.keys.length !== t.length || e.sizes.length !== t.length) return !1;
        for(let n = 0; n < t.length; n++)if (e.keys[n] !== Zt(t[n], n, i)) return !1;
        return !0;
    }
    function Nt(e, t, i) {
        if (!Ml(e, t, i)) return {};
        const n = {};
        for(let a = 0; a < e.keys.length; a++){
            const c = e.sizes[a];
            typeof c == "number" && c > 0 && (n[e.keys[a]] = c);
        }
        return n;
    }
    function $n(e, t) {
        if (!e.length || t.length <= e.length) return 0;
        const i = e[0], n = t.indexOf(i);
        if (n <= 0 || n + e.length < t.length && e.length > t.length - n) return 0;
        for(let a = 0; a < e.length; a++)if (t[n + a] !== e[a]) return 0;
        return n;
    }
    function un(e, t, i, n, a, c = 0) {
        const R = a ?? "start";
        if (R === "nearest") {
            const B = i + n, v = e + t;
            return e >= i && v <= B ? null : e < i ? e + c : v - n + c;
        }
        return R === "end" ? e + t - n + c : R === "center" ? e + (t - n) / 2 + c : e + c;
    }
    function Tn(e, t, i, n) {
        let a = null, c = null, R = null, B = !1, v = null;
        const S = [], oe = i.resizeObserver ? ()=>{} : i.onVscrollUpdate(ce), z = ie(()=>{
            const o = b(e);
            if (i.vscrollData.simpleArray) {
                if (o.index == null) throw new Error("index is required when using simple-array mode with dynamic item measurement");
                return o.index;
            }
            if (i.vscrollData.keyField in o.item) return o.item[i.vscrollData.keyField];
            throw new Error(`keyField '${i.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
        }), V = ie(()=>i.vscrollData.sizes[z.value] || 0), E = ie(()=>b(e).active && i.vscrollData.active);
        function J() {
            E.value ? c !== z.value && (c = z.value, a = null, R = null, H(z.value)) : a = z.value;
        }
        function re() {
            b(e).watchData && !i.resizeObserver ? v = we(()=>b(e).item, ()=>{
                j();
            }, {
                deep: !0
            }) : v && (v(), v = null);
        }
        function ce({ force: o }) {
            !E.value && o && (R = z.value), (a === z.value || o || !V.value) && J();
        }
        function j() {
            J();
        }
        function T(o) {
            i.undefinedMap[o] && i.undefinedSizeCount.value--, i.undefinedMap[o] = void 0;
        }
        function Y(o, u) {
            if (i.vscrollData.sizes[o]) {
                T(o);
                return;
            }
            if (u) {
                i.undefinedMap[o] || i.undefinedSizeCount.value++, i.undefinedMap[o] = !0;
                return;
            }
            i.undefinedMap[o] && (i.undefinedSizeCount.value--, i.undefinedMap[o] = !1);
        }
        function H(o) {
            bt(()=>{
                if (z.value === o) {
                    const u = b(t);
                    if (!u) return;
                    const y = u.offsetWidth, ue = u.offsetHeight;
                    se(y, ue);
                }
                c = null;
            });
        }
        function se(o, u) {
            const y = ~~(i.direction.value === "vertical" ? u : o);
            y && V.value !== y && N(y);
        }
        function N(o) {
            var u, y;
            T(z.value), i.vscrollData.sizes[z.value] = o, b(e).emitResize && ((y = (u = b(n)) == null ? void 0 : u.onResize) == null || y.call(u, z.value));
        }
        function ne() {
            if (!i.resizeObserver || B) return;
            const o = b(t);
            o && (i.resizeObserver.observe(o), o.$_vs_id = z.value, o.$_vs_onResize = fe, B = !0);
        }
        function G() {
            if (!i.resizeObserver || !B) return;
            const o = b(t);
            o && (i.resizeObserver.unobserve(o), o.$_vs_onResize = void 0, B = !1);
        }
        function fe(o, u, y) {
            z.value === o && se(u, y);
        }
        S.push(we(()=>b(e).watchData, ()=>{
            re();
        })), i.resizeObserver || S.push(we(()=>b(e).sizeDependencies, ()=>{
            j();
        }, {
            deep: !0
        })), S.push(we(z, (o, u)=>{
            const y = b(t);
            y && (y.$_vs_id = o), T(u), Y(o, E.value);
            const ue = i.vscrollData.sizes[o];
            if (!ue) {
                a = o, j();
                return;
            }
            T(o), B && (i.vscrollData.sizes[o] = ue);
        })), S.push(we(E, (o)=>{
            Y(z.value, o), i.resizeObserver ? o ? ne() : G() : o && R === z.value && J();
        })), re();
        function ae() {
            E.value && (J(), ne());
        }
        function C() {
            oe(), G(), T(z.value);
            const o = b(t);
            o && (o.$_vs_id = void 0, o.$_vs_onResize = void 0), v && (v(), v = null);
            for (const u of S)u();
            S.length = 0;
        }
        return {
            id: z,
            size: V,
            finalActive: E,
            updateSize: J,
            mount: ae,
            unmount: C
        };
    }
    const xl = {
        itemsLimit: 1e3
    };
    function Cn(e) {
        return typeof window < "u" && e === window;
    }
    const Il = (()=>{
        if (typeof document > "u") return "negative";
        const e = document.createElement("div"), t = document.createElement("div");
        e.style.width = "4px", e.style.height = "1px", e.style.overflow = "auto", e.style.direction = "rtl", t.style.width = "8px", t.style.height = "1px", e.appendChild(t), document.body.appendChild(e), e.scrollLeft = -1;
        const i = e.scrollLeft < 0;
        return document.body.removeChild(e), i ? "negative" : "default";
    })();
    function gt(e, t, i) {
        return t !== "horizontal" || !i || Cn(i) || getComputedStyle(i).direction !== "rtl" ? e : Il === "negative" ? -e : e;
    }
    function Rl(e, t, i) {
        return gt(e, t, i);
    }
    function Wt(e, t, i, n) {
        const a = Rl(i, t, e), c = !!(n != null && n.smooth);
        if (Cn(e)) {
            t === "vertical" ? e.scrollTo({
                top: a,
                behavior: c ? "smooth" : "auto"
            }) : e.scrollTo({
                left: a,
                behavior: c ? "smooth" : "auto"
            });
            return;
        }
        if (typeof e.scrollTo == "function") {
            e.scrollTo(t === "vertical" ? {
                top: a,
                behavior: c ? "smooth" : "auto"
            } : {
                left: a,
                behavior: c ? "smooth" : "auto"
            });
            return;
        }
        t === "vertical" ? e.scrollTop = a : e.scrollLeft = a;
    }
    function El(e, t, i) {
        return i ? t === "vertical" ? window.innerHeight : window.innerWidth : t === "vertical" ? e.clientHeight : e.clientWidth;
    }
    const Al = /auto|scroll/;
    function Mn(e, t) {
        return e.parentNode === null ? t : Mn(e.parentNode, [
            ...t,
            e
        ]);
    }
    function Ut(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t);
    }
    function Dl(e) {
        return Ut(e, "overflow") + Ut(e, "overflow-y") + Ut(e, "overflow-x");
    }
    function Ol(e) {
        return Al.test(Dl(e));
    }
    function It(e) {
        if (!(e instanceof HTMLElement || e instanceof SVGElement)) return;
        const t = Mn(e.parentNode, []);
        for(let i = 0; i < t.length; i += 1)if (t[i] instanceof Element && Ol(t[i])) return t[i];
        return document.scrollingElement || document.documentElement;
    }
    let qt = !1;
    function Vl() {
        return qt;
    }
    if (typeof window < "u") {
        qt = !1;
        try {
            const e = Object.defineProperty({}, "passive", {
                get () {
                    qt = !0;
                }
            });
            window.addEventListener("test", null, e);
        } catch  {}
    }
    let Ll = 0;
    function Xt(e) {
        const t = e;
        t._vs_styleStamp++;
    }
    function Fl(e, t, i) {
        const n = e?.[i];
        if (n == null) throw new Error(`Key is ${n} on item (keyField is '${i}')`);
        return n;
    }
    function xn(e, t, i, n, a) {
        const c = F([]), R = F(0), B = F(!1);
        let v = 0, S = 0;
        const oe = new Map, z = new Map;
        let V = !1, E = 0, J = 0, re = !1, ce = null, j = null, T = null, Y = 0, H = null, se = [], N = null, ne = null, G = null, fe = !1;
        const ae = new Set, C = F({}), o = ie(()=>{
            const s = b(e);
            return s.items.length > 0 && typeof s.items[0] != "object";
        }), u = ie(()=>{
            const s = b(e);
            if (s.itemSize === null) {
                const d = {
                    [-1]: {
                        accumulator: 0
                    }
                }, _ = s.items, P = s.sizeField ?? "size", O = s.minItemSize, U = C.value;
                let K = 1e4, me = 0, We;
                for(let Ae = 0, Ve = _.length; Ae < Ve; Ae++){
                    const Ue = o.value ? Ae : Fl(_[Ae], Ae, s.keyField);
                    We = U[Ue] || _[Ae][P] || O, We < K && (K = We), me += We, d[Ae] = {
                        accumulator: me,
                        size: We
                    };
                }
                return Y = K, d;
            }
            return [];
        }), y = ie(()=>c.value.filter((s)=>s.nr.used).sort((s, d)=>s.nr.index - d.nr.index)), ue = ie(()=>{
            const s = b(e), d = o.value ? null : s.keyField;
            return Cl(s.items, d, (_, P, O)=>s.itemSize != null ? s.itemSize : C.value[O] || _?.[s.sizeField ?? "size"] || void 0);
        });
        function ge(s) {
            const d = b(e);
            return C.value = Nt(s, d.items, o.value ? null : d.keyField), Object.keys(C.value).length > 0;
        }
        function Ee(s) {
            let d = z.get(s);
            return d || (d = [], z.set(s, d)), d;
        }
        function Oe(s, d, _, P, O) {
            const U = vl({
                id: Ll++,
                index: d,
                used: !0,
                key: P,
                type: O
            }), K = pl({
                item: _,
                position: 0,
                offset: 0,
                nr: U,
                _vs_styleStamp: 0
            });
            return s.push(K), K;
        }
        function Be(s) {
            const d = Ee(s);
            if (d && d.length) {
                const _ = d.pop();
                return _.nr.used = !0, Xt(_), _;
            }
        }
        function Je(s) {
            const d = s.nr.type;
            Ee(d).push(s), s.nr.used = !1, s.position = -9999, Xt(s), oe.delete(s.nr.key);
        }
        function Xe() {
            oe.clear(), z.clear();
            for(let s = 0, d = c.value.length; s < d; s++){
                const _ = c.value[s];
                _ && Je(_);
            }
        }
        function Ge(s) {
            let d = -1;
            return d = requestAnimationFrame(()=>{
                ae.delete(d), s();
            }), ae.add(d), d;
        }
        function f() {
            for (const s of ae)cancelAnimationFrame(s);
            ae.clear();
        }
        function k() {
            ce && (clearTimeout(ce), ce = null), j && (clearTimeout(j), j = null), T && (clearTimeout(T), T = null), ne && (clearTimeout(ne), ne = null), G && (clearTimeout(G), G = null);
        }
        function ee() {
            var s;
            (s = a?.onResize) == null || s.call(a), B.value && He(!1);
        }
        function ze() {
            N && !fe && he();
            const s = b(e);
            if (!V) {
                if (V = !0, ce) return;
                const d = ()=>Ge(()=>{
                        V = !1;
                        const { continuous: _ } = He(!1, !0);
                        _ || (j && clearTimeout(j), j = setTimeout(ze, s.updateInterval + 100));
                    });
                d(), s.updateInterval && (ce = setTimeout(()=>{
                    ce = null, V && d();
                }, s.updateInterval));
            }
        }
        function r(s, d) {
            var _, P;
            B.value && (s || d.boundingClientRect.width !== 0 || d.boundingClientRect.height !== 0 ? ((_ = a?.onVisible) == null || _.call(a), Ge(()=>{
                He(!1);
            })) : (P = a?.onHidden) == null || P.call(a));
        }
        function m() {
            const s = b(t), d = s ? It(s) : void 0;
            return window.document && (d === window.document.documentElement || d === window.document.body) ? window : d || window;
        }
        function x() {
            const s = b(i);
            return s ? b(e).direction === "vertical" ? s.scrollHeight : s.scrollWidth : 0;
        }
        function D() {
            const s = b(t);
            if (!s) return {
                start: 0,
                end: 0
            };
            const d = b(e), _ = d.direction === "vertical";
            let P;
            if (d.pageMode) {
                const O = s.getBoundingClientRect(), U = _ ? O.height : O.width;
                let K = -(_ ? O.top : O.left), me = _ ? window.innerHeight : window.innerWidth;
                K < 0 && (me += K, K = 0), K + me > U && (me = U - K), P = {
                    start: K,
                    end: K + me
                };
            } else _ ? P = {
                start: s.scrollTop,
                end: s.scrollTop + s.clientHeight
            } : P = {
                start: gt(s.scrollLeft, d.direction, s),
                end: gt(s.scrollLeft, d.direction, s) + s.clientWidth
            };
            return P;
        }
        function de() {
            const s = b(t);
            if (!s) return {
                start: 0,
                end: 0
            };
            if (b(e).direction === "vertical") {
                const d = gt(s.scrollLeft, "horizontal", s);
                return {
                    start: d,
                    end: d + s.clientWidth
                };
            }
            return {
                start: s.scrollTop,
                end: s.scrollTop + s.clientHeight
            };
        }
        function L(s) {
            const d = b(e);
            if (d.itemSize != null) return d.itemSize;
            const _ = u.value[s];
            return _?.size || Number(d.minItemSize) || 0;
        }
        function Z(s) {
            var d;
            const _ = b(e), P = _.gridItems || 1;
            return s <= 0 ? 0 : _.itemSize != null ? Math.floor(s / P) * _.itemSize : ((d = u.value[s - 1]) == null ? void 0 : d.accumulator) || 0;
        }
        function Re(s) {
            const d = b(e), _ = d.items.length, P = d.gridItems || 1;
            if (!_) return 0;
            if (d.itemSize != null) {
                const me = Math.floor(s / d.itemSize) * P;
                return Math.min(Math.max(me, 0), _ - 1);
            }
            let O = 0, U = _ - 1, K = 0;
            for(; O <= U;){
                const me = Math.floor((O + U) / 2);
                Z(me) <= s ? (K = me, O = me + 1) : U = me - 1;
            }
            return K;
        }
        function he() {
            ne && (clearTimeout(ne), ne = null), N = null;
        }
        function $e() {
            ne && clearTimeout(ne), ne = setTimeout(()=>{
                N = null, ne = null;
            }, 150);
        }
        function be(s, d) {
            if (!s.length) {
                he();
                return;
            }
            const _ = Math.max(D().start - x(), 0), P = Math.min(Re(_), s.length - 1), O = s[P], U = d ? O?.[d] : P;
            if (U == null) {
                he();
                return;
            }
            const K = x() + Z(P);
            N = {
                key: U,
                offset: D().start - K
            };
        }
        function xe(s) {
            if (!N) return !1;
            const d = b(e), _ = s ?? d.items, P = o.value ? null : d.keyField, O = dt(_, P).indexOf(N.key);
            if (O === -1) return he(), !1;
            const U = x() + Z(O) + N.offset, K = D().start;
            return Math.abs(U - K) < .5 ? !1 : (fe = !0, tt(U), Ge(()=>{
                fe = !1;
            }), !0);
        }
        function et() {
            b(e).pageMode ? zt() : mt();
        }
        function zt() {
            H = m(), H.addEventListener("scroll", ze, Vl() ? {
                passive: !0
            } : !1), H.addEventListener("resize", ee);
        }
        function mt() {
            H && (H.removeEventListener("scroll", ze), H.removeEventListener("resize", ee), H = null);
        }
        function Ft(s, d, _, P, O, U) {
            const K = Math.ceil(s / d) * _, me = Math.max(0, Math.floor(O.start / _)), We = Math.min(Math.ceil(O.end / _), Math.ceil(s / d)), Ae = Math.max(0, Math.floor(U.start / P)), Ve = Math.min(Math.ceil(U.end / P), d), Ue = [];
            for(let Ye = me; Ye < We; Ye++){
                const w = Ye * d;
                for(let h = Ae; h < Ve; h++){
                    const X = w + h;
                    if (X >= s) break;
                    Ue.push(X);
                }
            }
            const ye = Ue[0] ?? 0, De = Ue.at(-1) ?? -1;
            return {
                renderedIndices: Ue,
                startIndex: ye,
                endIndex: De + 1,
                visibleStartIndex: ye,
                visibleEndIndex: De,
                totalSize: K
            };
        }
        function lt() {
            const s = b(e);
            if (!s.gridItems || s.itemSize == null) return !1;
            const d = b(t);
            if (!d) return !1;
            const _ = s.itemSecondarySize || s.itemSize, P = s.direction === "vertical" ? d.clientWidth : d.clientHeight;
            return _ * s.gridItems > P;
        }
        function He(s, d = !1) {
            var _, P;
            const O = b(e), U = O.itemSize, K = O.gridItems || 1, me = O.itemSecondarySize || U, We = Y, Ae = O.typeField, Ve = o.value ? null : O.keyField, Ue = O.items, ye = Ue.length, De = u.value, Ye = oe, w = c.value;
            let h = null, X = null, M, te, Ie, ve, Te;
            if (!ye) M = te = ve = Te = Ie = 0;
            else if (re) M = ve = 0, te = Te = Math.min(O.prerender, Ue.length), Ie = 0;
            else {
                const le = D(), Se = de();
                if (d) {
                    let Ce = le.start - E;
                    Ce < 0 && (Ce = -Ce);
                    let Ze = Se.start - J;
                    Ze < 0 && (Ze = -Ze);
                    const Tt = U === null && Ce >= We || U !== null && Ce >= U, Ne = K > 1 && U != null && Ze >= me;
                    if (!Tt && !Ne) return {
                        continuous: !0
                    };
                }
                E = le.start, J = Se.start;
                const A = O.buffer;
                le.start -= A, le.end += A, Se.start -= A, Se.end += A;
                let qe = 0;
                const nt = b(i);
                nt && (qe = nt.scrollHeight, le.start -= qe);
                const je = b(n);
                if (je) {
                    const Ce = je.scrollHeight;
                    le.end += Ce;
                }
                if (U === null) {
                    let Ce, Ze = 0, Tt = ye - 1, Ne = ~~(ye / 2), en;
                    do en = Ne, Ce = De[Ne].accumulator, Ce < le.start ? Ze = Ne : Ne < ye - 1 && De[Ne + 1].accumulator > le.start && (Tt = Ne), Ne = ~~((Ze + Tt) / 2);
                    while (Ne !== en);
                    for(Ne < 0 && (Ne = 0), M = Ne, Ie = De[ye - 1].accumulator, te = Ne; te < ye && De[te].accumulator < le.end; te++);
                    for(te === -1 ? te = Ue.length - 1 : (te++, te > ye && (te = ye)), ve = M; ve < ye && qe + De[ve].accumulator < le.start; ve++);
                    for(Te = ve; Te < ye && qe + De[Te].accumulator < le.end; Te++);
                } else if (K > 1) {
                    const Ce = Ft(ye, K, U, me, le, Se);
                    h = Ce.renderedIndices, X = new Set(h), M = Ce.startIndex, te = Ce.endIndex, ve = Ce.visibleStartIndex, Te = Ce.visibleEndIndex, Ie = Ce.totalSize;
                } else {
                    M = ~~(le.start / U * K);
                    const Ce = M % K;
                    M -= Ce, te = Math.ceil(le.end / U * K), ve = Math.max(0, Math.floor((le.start - qe) / U * K)), Te = Math.floor((le.end - qe) / U * K), M < 0 && (M = 0), te > ye && (te = ye), ve < 0 && (ve = 0), Te > ye && (Te = ye), Ie = Math.ceil(ye / K) * U;
                }
            }
            te - M > xl.itemsLimit && vt(), R.value = Ie;
            let q;
            const Qe = M <= S && te >= v;
            if (!Qe || s) Xe();
            else for(let le = 0, Se = w.length; le < Se; le++){
                const A = w[le];
                if (A && (q = A, q.nr.used)) {
                    const qe = X ? X.has(q.nr.index) : q.nr.index >= M && q.nr.index < te, nt = U || De[q.nr.index] && De[q.nr.index].size;
                    (!qe || !nt) && Je(q);
                }
            }
            let ke, Le;
            const pt = h ?? Array.from({
                length: Math.max(0, te - M)
            }, (le, Se)=>M + Se);
            for (const le of pt){
                if (!(U || De[le] && De[le].size)) continue;
                ke = Ue[le];
                const Se = Ve ? ke[Ve] : le;
                if (Se == null) throw new Error(`Key is ${Se} on item (keyField is '${Ve}')`);
                if (q = Ye.get(Se), q) q.item !== ke && (q.item = ke), q.nr.used || console.warn(`Expected existing view's used flag to be true, got ${q.nr.used}`);
                else {
                    if (Le = ke[Ae], q = Be(Le), q) {
                        const A = q.nr.index !== le || q.nr.key !== Se;
                        q.item = ke, q.nr.index = le, q.nr.key = Se, q.nr.type !== Le && console.warn("Reused view's type does not match pool's type"), A && Xt(q);
                    } else q = Oe(w, le, ke, Se, Le);
                    Ye.set(Se, q);
                }
                U === null ? (q.position = ((_ = De[le - 1]) == null ? void 0 : _.accumulator) || 0, q.offset = 0) : (q.position = Math.floor(le / K) * U, q.offset = le % K * me);
            }
            return v = M, S = te, O.emitUpdate && ((P = a?.onUpdate) == null || P.call(a, M, te, ve, Te)), T && clearTimeout(T), T = setTimeout(it, O.updateInterval + 300), {
                continuous: Qe
            };
        }
        function vt() {
            throw G = setTimeout(()=>{
                G = null, console.warn("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", b(t)), console.warn("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
            }), new Error("Rendered items limit reached");
        }
        function $t() {
            if (lt()) return !1;
            const s = c.value.filter(({ nr: d })=>d.used);
            for(let d = 1; d < s.length; d++)if (s[d].nr.index !== s[d - 1].nr.index + 1) return !0;
            return !1;
        }
        function it() {
            c.value.sort((s, d)=>s.nr.index - d.nr.index), $t() && (He(!1), T && clearTimeout(T));
        }
        function ht(s, d) {
            const _ = b(e), P = b(t);
            if (!P) return;
            const O = Math.max(0, Math.min(s, _.items.length - 1)), U = D().start, K = El(P, _.direction, _.pageMode), me = Z(O), We = L(O), Ae = un(me, We, U, K, d?.align, d?.offset ?? 0);
            if (Ae != null && (tt(Ae, d), _.gridItems && _.itemSize != null)) {
                const Ve = b(t);
                if (!Ve) return;
                const Ue = _.gridItems, ye = _.itemSecondarySize || _.itemSize, De = O % Ue * ye, Ye = _.direction === "vertical" ? "horizontal" : "vertical", w = Ye === "horizontal" ? gt(Ve.scrollLeft, "horizontal", Ve) : Ve.scrollTop, h = Ye === "horizontal" ? Ve.clientWidth : Ve.clientHeight, X = un(De, ye, w, h, d?.align, d?.offset ?? 0);
                X != null && Wt(Ve, Ye, X, d);
            }
        }
        function tt(s, d) {
            const _ = b(e), P = b(t);
            if (P) if (_.pageMode) {
                const O = It(P), U = O.getBoundingClientRect(), K = P.getBoundingClientRect(), me = _.direction === "vertical" ? "top" : "left", We = It(P) === document.documentElement || It(P) === document.body ? _.direction === "vertical" ? window.scrollY : window.scrollX : gt(_.direction === "vertical" ? O.scrollTop : O.scrollLeft, _.direction, O), Ae = K[me] - U[me];
                Wt(O.tagName === "HTML" ? window : O, _.direction, s + We + Ae, d);
            } else Wt(P, _.direction, s, d);
        }
        const Pe = b(e);
        return se = dt(Pe.items, Pe.items.length > 0 && typeof Pe.items[0] != "object" ? null : Pe.keyField), Pe.cache && ge(Pe.cache), Pe.prerender && (re = !0, He(!1)), Pe.gridItems && !Pe.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems"), rt(()=>{
            et(), bt(()=>{
                re = !1, He(!0), B.value = !0;
            });
        }), wn(()=>{
            const s = E;
            typeof s == "number" && bt(()=>{
                tt(s);
            });
        }), Lt(()=>{
            k(), f(), mt();
        }), we(()=>b(e).cache, (s)=>{
            ge(s), He(!0);
        }), we(()=>b(e).items, (s, d)=>{
            const _ = b(e), P = o.value ? null : _.keyField, O = dt(s, P);
            if (_.shift) {
                const U = d ? dt(d, P) : se;
                $n(U, O) > 0 ? be(d ?? [], P) : he();
            } else he();
            se = O, xe(s), He(!0);
        }), we(()=>b(e).pageMode, ()=>{
            et(), He(!1);
        }), we(u, ()=>{
            xe() && $e(), He(!1);
        }, {
            deep: !0
        }), we(()=>b(e).gridItems, ()=>{
            He(!0);
        }), we(()=>b(e).itemSecondarySize, ()=>{
            He(!0);
        }), {
            pool: c,
            visiblePool: y,
            totalSize: R,
            ready: B,
            sizes: u,
            simpleArray: o,
            scrollToItem: ht,
            scrollToPosition: tt,
            getScroll: D,
            findItemIndex: Re,
            getItemOffset: Z,
            getItemSize: L,
            cacheSnapshot: ue,
            restoreCache: ge,
            updateVisibleItems: He,
            handleScroll: ze,
            handleResize: ee,
            handleVisibilityChange: r,
            sortViews: it
        };
    }
    function Kt(e) {
        return e.item;
    }
    function Bl(e) {
        return e._vs_styleStamp ?? 0;
    }
    const In = [
        "position",
        "top",
        "left",
        "transform",
        "willChange",
        "visibility",
        "pointerEvents"
    ];
    function dn(e) {
        const t = {};
        for (const i of In)t[i] = e.style[i];
        return t;
    }
    function Rn(e, t) {
        for (const i of In)e.style[i] = t[i] ?? "";
    }
    function fn(e, t, i, n) {
        if (!("view" in t)) {
            Rn(e, n);
            return;
        }
        const a = i === "vertical", c = e.tagName === "TR", R = a ? `translateY(${t.view.position}px) translateX(${t.view.offset}px)` : `translateX(${t.view.position}px) translateY(${t.view.offset}px)`;
        e.style.position = "absolute", e.style.top = a && c ? `${t.view.position}px` : "0px", e.style.left = !a && c ? `${t.view.position}px` : "0px", e.style.transform = c ? "" : R, e.style.willChange = c ? "unset" : "transform", e.style.visibility = t.view.nr.used ? "visible" : "hidden", e.style.pointerEvents = t.view.nr.used ? "" : "none";
    }
    function mn(e) {
        return "view" in e ? {
            item: Kt(e.view).item,
            active: e.view.nr.used,
            index: e.view.nr.index,
            watchData: e.watchData ?? !1,
            emitResize: e.emitResize ?? !1,
            sizeDependencies: e.sizeDependencies ?? null,
            onResize: e.onResize
        } : {
            watchData: !1,
            emitResize: !1,
            sizeDependencies: null,
            ...e
        };
    }
    function vn(e, t, i, n) {
        return i ? n ?? null : e?.[t] ?? null;
    }
    function Hl(e) {
        let t = 0, i = {};
        const n = Tl();
        let a = !1, c, R = !1, B = [], v = null, S = null;
        const oe = new Set, z = ul({
            active: !0,
            sizes: {},
            keyField: b(e).keyField,
            simpleArray: !1
        }), V = ie(()=>b(e).direction), E = ie(()=>b(b(e).el)), J = ie(()=>b(b(e).before)), re = ie(()=>b(b(e).after)), ce = new Map;
        function j(r) {
            let m = -1;
            return m = requestAnimationFrame(()=>{
                oe.delete(m), r();
            }), oe.add(m), m;
        }
        function T() {
            for (const r of oe)cancelAnimationFrame(r);
            oe.clear();
        }
        typeof ResizeObserver < "u" && (c = new ResizeObserver((r)=>{
            j(()=>{
                if (Array.isArray(r)) {
                    for (const m of r)if (m.target && m.target.$_vs_onResize) {
                        let x, D;
                        if (m.borderBoxSize) {
                            const de = m.borderBoxSize[0];
                            x = de.inlineSize, D = de.blockSize;
                        } else x = m.contentRect.width, D = m.contentRect.height;
                        m.target.$_vs_onResize(m.target.$_vs_id, x, D);
                    }
                }
            });
        }));
        const Y = {
            vscrollData: z,
            resizeObserver: c,
            direction: V,
            undefinedMap: i,
            undefinedSizeCount: {
                get value () {
                    return t;
                },
                set value (r){
                    t = r;
                }
            },
            onVscrollUpdate (r) {
                const m = (x)=>{
                    r(x);
                };
                return n.on("vscroll:update", m), ()=>n.off("vscroll:update", m);
            }
        };
        yt("vscrollData", z), yt("vscrollParent", {
            get $_undefinedSizes () {
                return t;
            },
            set $_undefinedSizes (r){
                t = r;
            },
            get $_undefinedMap () {
                return i;
            },
            set $_undefinedMap (r){
                i = r;
            },
            $_events: n,
            direction: V
        }), yt("vscrollResizeObserver", c), yt("vscrollMeasurementContext", Y), yt("vscrollAnchorRegistry", {
            delete (r) {
                ce.delete(r);
            },
            set (r, m) {
                ce.set(r, m);
            }
        });
        const H = ie(()=>{
            const r = b(e);
            return r.items.length > 0 && typeof r.items[0] != "object";
        }), se = ie(()=>{
            const r = [], m = b(e), { items: x, keyField: D } = m, de = H.value, L = z.sizes, Z = x.length;
            for(let Re = 0; Re < Z; Re++){
                const he = x[Re], $e = de ? Re : he[D];
                let be = L[$e];
                typeof be > "u" && !i[$e] && (be = 0), r.push({
                    item: he,
                    id: $e,
                    size: be
                });
            }
            return r;
        }), N = b(e);
        B = dt(N.items, H.value ? null : N.keyField), N.cache && (z.sizes = Nt(N.cache, N.items, H.value ? null : N.keyField));
        const ne = ie(()=>{
            const r = b(e);
            return {
                items: se.value,
                keyField: "id",
                direction: r.direction,
                itemSize: null,
                gridItems: void 0,
                itemSecondarySize: void 0,
                minItemSize: r.minItemSize,
                sizeField: "size",
                typeField: "type",
                buffer: r.buffer ?? 200,
                pageMode: r.pageMode ?? !1,
                shift: !1,
                cache: r.cache,
                prerender: r.prerender ?? 0,
                emitUpdate: r.emitUpdate ?? !1,
                updateInterval: r.updateInterval ?? 0
            };
        });
        function G() {
            var r, m;
            Xe(), (m = (r = b(e)).onResize) == null || m.call(r);
        }
        function fe() {
            var r, m;
            n.emit("vscroll:update", {
                force: !1
            }), (m = (r = b(e)).onVisible) == null || m.call(r);
        }
        const ae = xn(ne, E, J, re, {
            onResize: G,
            onVisible: fe,
            onHidden: ()=>{
                var r, m;
                return (m = (r = b(e)).onHidden) == null ? void 0 : m.call(r);
            },
            onUpdate: (r, m, x, D)=>{
                var de, L;
                return (L = (de = b(e)).onUpdate) == null ? void 0 : L.call(de, r, m, x, D);
            }
        }), C = new WeakMap;
        function o() {
            S != null && (cancelAnimationFrame(S), oe.delete(S), S = null);
        }
        function u() {
            o(), v = null;
        }
        function y() {
            v == null || S != null || (S = j(()=>{
                S = null, Oe();
            }));
        }
        function ue() {
            const r = E.value;
            if (!r) return null;
            const m = r.getBoundingClientRect();
            let x = null;
            for (const [D, de] of ce.entries()){
                if (!de.active || getComputedStyle(D).visibility === "hidden") continue;
                const L = D.getBoundingClientRect();
                if (L.bottom <= m.top || L.top >= m.bottom) continue;
                const Z = Math.max(L.top, m.top) - m.top;
                (!x || Z < x.score) && (x = {
                    key: de.id,
                    offset: L.top - m.top,
                    score: Z
                });
            }
            return x;
        }
        function ge(r) {
            const m = E.value;
            if (!m) {
                u();
                return;
            }
            const x = m.scrollTop, D = Math.min(ae.findItemIndex(x), r.length - 1), de = r[D];
            if (de == null) {
                u();
                return;
            }
            const L = ue();
            v = {
                logicalKey: de,
                logicalOffset: x - ae.getItemOffset(D),
                pendingKeys: new Set,
                stableFrames: 0,
                visualKey: L?.key ?? null,
                visualOffset: L?.offset ?? 0
            };
        }
        function Ee(r) {
            const m = E.value;
            return !m || Math.abs(m.scrollTop - r) < .5 ? !1 : (R = !0, m.scrollTop = r, m.dispatchEvent(new Event("scroll")), j(()=>{
                R = !1;
            }), !0);
        }
        function Oe() {
            const r = v, m = E.value;
            if (!r || !m) return;
            const x = se.value.findIndex((Z)=>Z.id === r.logicalKey);
            if (x === -1) {
                u();
                return;
            }
            let D = !1;
            const de = ae.getItemOffset(x) + r.logicalOffset;
            if (D = Ee(de) || D, r.visualKey != null) for (const [Z, Re] of ce.entries()){
                if (!Re.active || Re.id !== r.visualKey || getComputedStyle(Z).visibility === "hidden") continue;
                const he = Z.getBoundingClientRect().top - m.getBoundingClientRect().top - r.visualOffset;
                D = Ee(m.scrollTop + he) || D;
                break;
            }
            let L = !0;
            for (const Z of r.pendingKeys)if (!(typeof z.sizes[Z] == "number" && z.sizes[Z] > 0)) {
                L = !1;
                break;
            }
            if (!D && L) {
                if (r.stableFrames++, r.stableFrames >= 2) {
                    u();
                    return;
                }
            } else r.stableFrames = 0;
            y();
        }
        function Be(r, m, x, D) {
            const de = ml(), L = Mt(m), Z = Mt(x), Re = Mt({
                onResize: x.onResize
            }), he = Mt(r), $e = de.run(()=>(we(()=>{
                    const be = L.value;
                    if (!("view" in be)) return {
                        active: Z.value.active,
                        direction: V.value,
                        id: vn(Z.value.item, b(e).keyField, z.simpleArray, Z.value.index),
                        legacy: !0
                    };
                    const { view: xe } = be;
                    return {
                        active: xe.nr.used,
                        direction: V.value,
                        id: Kt(xe).id,
                        legacy: !1,
                        position: xe.position,
                        offset: xe.offset,
                        styleStamp: Bl(xe)
                    };
                }, ()=>{
                    const be = he.value;
                    if (be) {
                        const xe = L.value, et = "view" in xe ? Kt(xe.view).id : vn(Z.value.item, b(e).keyField, z.simpleArray, Z.value.index);
                        et != null && ce.set(be, {
                            active: Z.value.active && z.active,
                            id: et
                        }), fn(be, L.value, V.value, D);
                    }
                }, {
                    immediate: !0
                }), Tn(Z, he, Y, Re)));
            $e.mount(), C.set(r, {
                binding: L,
                scope: de,
                options: Z,
                callbacks: Re,
                el: he,
                controller: $e,
                restoreStyles: D
            });
        }
        const Je = {
            mounted (r, m) {
                const x = dn(r);
                Be(r, m.value, mn(m.value), x);
            },
            updated (r, m) {
                const x = C.get(r), D = mn(m.value);
                if (!x) {
                    const de = dn(r);
                    Be(r, m.value, D, de);
                    return;
                }
                x.binding.value = m.value, x.options.value = D, x.callbacks.value = {
                    onResize: D.onResize
                }, x.el.value = r, fn(r, m.value, V.value, x.restoreStyles);
            },
            unmounted (r) {
                const m = C.get(r);
                m && (m.controller.unmount(), m.scope.stop(), Rn(r, m.restoreStyles), ce.delete(r), C.delete(r));
            }
        };
        function Xe(r = !1) {
            (r || H.value) && (z.sizes = {}), n.emit("vscroll:update", {
                force: !0
            });
        }
        function Ge(r, m) {
            ae.scrollToItem(r, m);
        }
        function f(r) {
            const m = b(e);
            return z.sizes = Nt(r, m.items, H.value ? null : m.keyField), ae.restoreCache(r);
        }
        function k(r, m) {
            const x = b(e), D = H.value ? m ?? x.items.indexOf(r) : r[x.keyField];
            return z.sizes[D] || 0;
        }
        function ee() {
            const r = E.value;
            r && (a || (a = !0, bt(()=>{
                r.scrollTop = r.scrollHeight + 5e3;
                const m = ()=>{
                    r.scrollTop = r.scrollHeight + 5e3, j(()=>{
                        r.scrollTop = r.scrollHeight + 5e3, t === 0 ? a = !1 : j(m);
                    });
                };
                j(m);
            })));
        }
        function ze() {
            v && !R && u();
        }
        return we(()=>b(e).items, (r, m)=>{
            const x = b(e), D = H.value ? null : x.keyField, de = dt(r, D);
            if (x.shift) {
                const L = m ? dt(m, D) : B, Z = $n(L, de);
                Z > 0 ? (ge(L), v && (v.pendingKeys = new Set(de.slice(0, Z)), v.stableFrames = 0, bt(()=>{
                    v && Oe();
                }))) : u();
            } else u();
            B = de, Xe();
        }, {
            flush: "sync"
        }), we(()=>b(e).cache, (r)=>{
            r && f(r);
        }), we(H, (r)=>{
            z.simpleArray = r;
        }, {
            immediate: !0
        }), we(()=>b(e).direction, ()=>{
            u(), Xe(!0);
        }), we(E, (r, m)=>{
            m?.removeEventListener("scroll", ze), r?.addEventListener("scroll", ze);
        }, {
            immediate: !0
        }), we(se, (r, m)=>{
            const x = E.value;
            if (!x) return;
            if (v) {
                Oe();
                return;
            }
            const D = x.scrollTop, de = b(e);
            let L = 0, Z = 0;
            const Re = Math.min(r.length, m.length);
            for(let $e = 0; $e < Re && !(L >= D); $e++)L += m[$e].size || de.minItemSize, Z += r[$e].size || de.minItemSize;
            const he = Z - L;
            he !== 0 && (x.scrollTop += he);
        }, {
            flush: "post"
        }), wn(()=>{
            z.active = !0;
        }), dl(()=>{
            z.active = !1;
        }), St(()=>{
            var r;
            o(), T(), (r = E.value) == null || r.removeEventListener("scroll", ze), n.all.clear();
        }), {
            vscrollData: z,
            itemsWithSize: se,
            resizeObserver: c,
            measurementContext: Y,
            vDynamicScrollerItem: Je,
            ...ae,
            simpleArray: H,
            forceUpdate: Xe,
            scrollToItem: Ge,
            restoreCache: f,
            getItemSize: k,
            scrollToBottom: ee,
            onScrollerResize: G,
            onScrollerVisible: fe
        };
    }
    const Jt = new WeakMap;
    function Pl(e) {
        return typeof e == "function" ? {
            callback: e,
            observer: null,
            intersection: void 0,
            visible: null
        } : {
            callback: e.callback,
            observer: null,
            intersection: e.intersection,
            visible: null
        };
    }
    function pn(e, t) {
        En(e);
        const i = Pl(t.value);
        if (Jt.set(e, i), typeof IntersectionObserver > "u") {
            const n = e.getBoundingClientRect();
            i.visible = !0, i.callback(!0, {
                boundingClientRect: n
            });
            return;
        }
        i.observer = new IntersectionObserver((n)=>{
            const a = n[0], c = !!(a != null && a.isIntersecting);
            i.visible !== null && i.visible === c || (i.visible = c, i.callback(c, a));
        }, i.intersection), i.observer.observe(e);
    }
    function En(e) {
        const t = Jt.get(e);
        t != null && t.observer && (t.observer.disconnect(), t.observer = null);
    }
    const Wl = {
        mounted (e, t) {
            pn(e, t);
        },
        updated (e, t) {
            t.value !== t.oldValue && pn(e, t);
        },
        unmounted (e) {
            En(e), Jt.delete(e);
        }
    }, Ul = kt({
        __name: "ItemView",
        props: {
            view: {},
            itemTag: {}
        },
        setup (e) {
            const t = e;
            return (i, n)=>($(), _e(Vt(t.itemTag), {
                    class: "vue-recycle-scroller__item-view"
                }, {
                    default: g(()=>[
                            Ke(i.$slots, "default", {
                                item: t.view.item,
                                index: t.view.nr.index,
                                active: t.view.nr.used
                            })
                        ]),
                    _: 3
                }));
        }
    }), Xl = kt({
        __name: "ResizeObserver",
        emits: [
            "notify"
        ],
        setup (e, { emit: t }) {
            const i = t, n = F();
            let a = null, c = null;
            function R() {
                i("notify");
            }
            return rt(()=>{
                var B;
                const v = (B = n.value) == null ? void 0 : B.parentElement;
                if (v) {
                    if (typeof ResizeObserver < "u") {
                        a = new ResizeObserver(()=>{
                            R();
                        }), a.observe(v);
                        return;
                    }
                    c = ()=>R(), window.addEventListener("resize", c);
                }
            }), Lt(()=>{
                a && (a.disconnect(), a = null), c && (window.removeEventListener("resize", c), c = null);
            }), (B, v)=>($(), Q("div", {
                    ref_key: "el",
                    ref: n,
                    class: "vue-recycle-scroller__resize-observer",
                    "aria-hidden": "true"
                }, null, 512));
        }
    }), Yl = (e, t)=>{
        const i = e.__vccOpts || e;
        for (const [n, a] of t)i[n] = a;
        return i;
    }, Nl = Yl(Xl, [
        [
            "__scopeId",
            "data-v-08cc04ab"
        ]
    ]), ql = kt({
        __name: "RecycleScroller",
        props: {
            items: {},
            keyField: {
                default: "id"
            },
            direction: {
                default: "vertical"
            },
            listTag: {
                default: "div"
            },
            itemTag: {
                default: "div"
            },
            itemSize: {
                default: null
            },
            gridItems: {
                default: void 0
            },
            itemSecondarySize: {
                default: void 0
            },
            minItemSize: {
                default: null
            },
            sizeField: {
                default: "size"
            },
            typeField: {
                default: "type"
            },
            buffer: {
                default: 200
            },
            pageMode: {
                type: Boolean,
                default: !1
            },
            shift: {
                type: Boolean,
                default: !1
            },
            cache: {
                default: void 0
            },
            prerender: {
                default: 0
            },
            emitUpdate: {
                type: Boolean,
                default: !1
            },
            disableTransform: {
                type: Boolean,
                default: !1
            },
            updateInterval: {
                default: 0
            },
            skipHover: {
                type: Boolean,
                default: !1
            },
            listClass: {
                default: ""
            },
            itemClass: {
                default: ""
            }
        },
        emits: [
            "resize",
            "visible",
            "hidden",
            "update",
            "scrollStart",
            "scrollEnd"
        ],
        setup (e, { expose: t, emit: i }) {
            const n = e, a = i, c = Wl, R = F(), B = F(), v = F(), S = F(null), oe = xn(n, R, B, v, {
                onResize: ()=>a("resize"),
                onVisible: ()=>a("visible"),
                onHidden: ()=>a("hidden"),
                onUpdate: (y, ue, ge, Ee)=>{
                    a("update", y, ue, ge, Ee), ge <= 0 && a("scrollStart"), Ee >= n.items.length - 1 && a("scrollEnd");
                }
            }), { pool: z, visiblePool: V, totalSize: E, ready: J, scrollToItem: re, scrollToPosition: ce, getScroll: j, findItemIndex: T, getItemOffset: Y, getItemSize: H, cacheSnapshot: se, restoreCache: N, updateVisibleItems: ne, handleScroll: G, handleResize: fe, handleVisibilityChange: ae } = oe;
            function C(y) {
                S.value = y;
            }
            function o() {
                S.value = null;
            }
            const u = ie(()=>{
                const y = {
                    [n.direction === "vertical" ? "minHeight" : "minWidth"]: `${E.value}px`
                };
                if (n.gridItems && n.itemSize != null) {
                    const ue = (n.itemSecondarySize || n.itemSize) * n.gridItems;
                    y[n.direction === "vertical" ? "minWidth" : "minHeight"] = `${ue}px`;
                }
                return y;
            });
            return t({
                el: R,
                visiblePool: V,
                scrollToItem: re,
                scrollToPosition: ce,
                getScroll: j,
                findItemIndex: T,
                getItemOffset: Y,
                getItemSize: H,
                cacheSnapshot: se,
                restoreCache: N,
                updateVisibleItems: ne
            }), (y, ue)=>jt(($(), Q("div", {
                    ref_key: "el",
                    ref: R,
                    class: at([
                        "vue-recycle-scroller",
                        {
                            "grid-mode": n.gridItems,
                            ready: l(J),
                            "page-mode": n.pageMode,
                            [`direction-${n.direction}`]: !0
                        }
                    ]),
                    onScrollPassive: ue[0] || (ue[0] = (...ge)=>l(G) && l(G)(...ge))
                }, [
                    y.$slots.before ? ($(), Q("div", {
                        key: 0,
                        ref_key: "before",
                        ref: B,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        Ke(y.$slots, "before")
                    ], 512)) : pe("", !0),
                    ($(), _e(Vt(n.listTag), {
                        style: ft(u.value),
                        class: at([
                            "vue-recycle-scroller__item-wrapper",
                            n.listClass
                        ])
                    }, {
                        default: g(()=>[
                                ($(!0), Q(st, null, At(l(z), (ge)=>($(), _e(Ul, Dt({
                                        key: ge.nr.id,
                                        view: ge,
                                        "item-tag": n.itemTag,
                                        style: l(J) ? [
                                            n.disableTransform ? {
                                                [n.direction === "vertical" ? "top" : "left"]: `${ge.position}px`,
                                                willChange: "unset"
                                            } : {
                                                transform: `translate${n.direction === "vertical" ? "Y" : "X"}(${ge.position}px) translate${n.direction === "vertical" ? "X" : "Y"}(${ge.offset}px)`
                                            },
                                            {
                                                width: n.gridItems ? `${n.direction === "vertical" && n.itemSecondarySize || n.itemSize}px` : void 0,
                                                height: n.gridItems ? `${n.direction === "horizontal" && n.itemSecondarySize || n.itemSize}px` : void 0,
                                                visibility: ge.nr.used ? "visible" : "hidden"
                                            }
                                        ] : null,
                                        class: [
                                            "vue-recycle-scroller__item-view",
                                            [
                                                n.itemClass,
                                                {
                                                    hover: !n.skipHover && S.value === ge.nr.key
                                                }
                                            ]
                                        ]
                                    }, fl(n.skipHover ? {} : {
                                        mouseenter: ()=>{
                                            C(ge.nr.key);
                                        },
                                        mouseleave: ()=>{
                                            o();
                                        }
                                    })), {
                                        default: g((Ee)=>[
                                                Ke(y.$slots, "default", Dt({
                                                    ref_for: !0
                                                }, Ee))
                                            ]),
                                        _: 2
                                    }, 1040, [
                                        "view",
                                        "item-tag",
                                        "style",
                                        "class"
                                    ]))), 128)),
                                n.items.length === 0 ? Ke(y.$slots, "empty", {
                                    key: 0
                                }) : pe("", !0)
                            ]),
                        _: 3
                    }, 8, [
                        "style",
                        "class"
                    ])),
                    y.$slots.after ? ($(), Q("div", {
                        key: 1,
                        ref_key: "after",
                        ref: v,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        Ke(y.$slots, "after")
                    ], 512)) : pe("", !0),
                    p(Nl, {
                        onNotify: l(fe)
                    }, null, 8, [
                        "onNotify"
                    ])
                ], 34)), [
                    [
                        l(c),
                        l(ae)
                    ]
                ]);
        }
    }), Kl = kt({
        inheritAttrs: !1,
        __name: "DynamicScroller",
        props: {
            items: {},
            keyField: {
                default: "id"
            },
            direction: {
                default: "vertical"
            },
            listTag: {
                default: "div"
            },
            itemTag: {
                default: "div"
            },
            minItemSize: {},
            shift: {
                type: Boolean,
                default: !1
            },
            cache: {
                default: void 0
            }
        },
        emits: [
            "resize",
            "visible"
        ],
        setup (e, { expose: t, emit: i }) {
            const n = e, a = i, c = F(), R = ie(()=>{
                var N;
                const ne = (N = c.value) == null ? void 0 : N.el;
                return ne && typeof ne == "object" && "value" in ne ? ne.value : ne;
            }), B = ie(()=>({
                    items: n.items,
                    keyField: n.keyField,
                    direction: n.direction,
                    minItemSize: n.minItemSize,
                    shift: n.shift,
                    cache: n.cache,
                    el: R.value,
                    onResize: ()=>a("resize"),
                    onVisible: ()=>a("visible")
                })), v = Hl(B), { itemsWithSize: S, forceUpdate: oe, scrollToItem: z, scrollToPosition: V, findItemIndex: E, getItemOffset: J, getItemSize: re, cacheSnapshot: ce, restoreCache: j, scrollToBottom: T, onScrollerResize: Y, onScrollerVisible: H } = v;
            function se(N, ne, G) {
                return {
                    item: N.item,
                    index: ne,
                    active: G,
                    itemWithSize: N
                };
            }
            return t({
                scrollToItem: z,
                scrollToPosition: V,
                findItemIndex: E,
                getItemOffset: J,
                scrollToBottom: T,
                getItemSize: re,
                cacheSnapshot: ce,
                restoreCache: j,
                forceUpdate: oe
            }), (N, ne)=>($(), _e(ql, Dt({
                    ref_key: "scroller",
                    ref: c,
                    items: l(S),
                    "min-item-size": n.minItemSize,
                    direction: n.direction,
                    cache: n.cache,
                    "key-field": "id",
                    "list-tag": n.listTag,
                    "item-tag": n.itemTag
                }, N.$attrs, {
                    onResize: l(Y),
                    onVisible: l(H)
                }), al({
                    default: g(({ item: G, index: fe, active: ae })=>[
                            Ke(N.$slots, "default", rl(cl(se(G, fe, ae))))
                        ]),
                    empty: g(()=>[
                            Ke(N.$slots, "empty")
                        ]),
                    _: 2
                }, [
                    N.$slots.before ? {
                        name: "before",
                        fn: g(()=>[
                                Ke(N.$slots, "before")
                            ]),
                        key: "0"
                    } : void 0,
                    N.$slots.after ? {
                        name: "after",
                        fn: g(()=>[
                                Ke(N.$slots, "after")
                            ]),
                        key: "1"
                    } : void 0
                ]), 1040, [
                    "items",
                    "min-item-size",
                    "direction",
                    "cache",
                    "list-tag",
                    "item-tag",
                    "onResize",
                    "onVisible"
                ]));
        }
    });
    function Ql(e, t, i) {
        const n = on("vscrollMeasurementContext"), a = on("vscrollAnchorRegistry", null), c = Tn(e, t, n, i);
        return rt(()=>{
            c.mount();
        }), a && we([
            c.id,
            c.finalActive,
            ()=>b(t)
        ], ([R, B, v], [S, oe, z])=>{
            z && z !== v && a.delete(z), v && a.set(v, {
                active: B,
                id: R
            });
        }, {
            immediate: !0
        }), Lt(()=>{
            const R = b(t);
            a && R && a.delete(R), c.unmount();
        }), {
            id: c.id,
            size: c.size,
            finalActive: c.finalActive,
            updateSize: c.updateSize
        };
    }
    const jl = kt({
        __name: "DynamicScrollerItem",
        props: {
            item: {},
            watchData: {
                type: Boolean,
                default: !1
            },
            active: {
                type: Boolean
            },
            index: {
                default: void 0
            },
            sizeDependencies: {
                default: null
            },
            emitResize: {
                type: Boolean,
                default: !1
            },
            tag: {
                default: "div"
            }
        },
        emits: [
            "resize"
        ],
        setup (e, { emit: t }) {
            const i = e, n = t, a = F();
            return Ql(i, a, {
                onResize: (c)=>n("resize", c)
            }), (c, R)=>($(), _e(Vt(i.tag), {
                    ref_key: "el",
                    ref: a
                }, {
                    default: g(()=>[
                            Ke(c.$slots, "default")
                        ]),
                    _: 3
                }, 512));
        }
    }), Gl = gl("vaultIcon", ()=>{
        const e = F(JSON.parse(localStorage.getItem("app_vault_icon_cache") || "{}"));
        return {
            iconCache: e,
            getCachedIcon: (n)=>e.value[n] || null,
            setCachedIcon: (n, a)=>{
                e.value[n] = a, localStorage.setItem("app_vault_icon_cache", JSON.stringify(e.value));
            }
        };
    }), Zl = {
        key: 0,
        class: "loading-spinner"
    }, Jl = [
        "src"
    ], ei = {
        __name: "vaultIcon",
        props: {
            service: {
                type: String,
                default: ""
            },
            size: {
                type: Number,
                default: 32
            }
        },
        setup (e) {
            const t = Gl(), i = e, n = F(!1), a = F(!0), c = F(""), R = F(null), B = F(null), v = (T)=>{
                const Y = T.target, H = c.value.includes("google") && Y.naturalWidth === 16, se = c.value.includes("bitwarden") && Y.naturalWidth === 19;
                if (H || se) {
                    console.warn(`[VaultIcon] Loaded icon found as placeholder (${Y.naturalWidth}px), clearing cache...`), z.value && t.clearCachedIcon(z.value), S();
                    return;
                }
                a.value = !1, clearTimeout(R.value), clearTimeout(B.value);
            }, S = ()=>{
                n.value = !0, a.value = !1, clearTimeout(R.value), clearTimeout(B.value);
            }, oe = {
                google: "google.com",
                github: "github.com",
                microsoft: "microsoft.com",
                apple: "apple.com",
                amazon: "amazon.com",
                facebook: "facebook.com",
                twitter: "twitter.com",
                discord: "discord.com",
                slack: "slack.com",
                telegram: "telegram.org",
                dropbox: "dropbox.com",
                cloudflare: "cloudflare.com",
                gitlab: "gitlab.com",
                bitbucket: "bitbucket.org",
                digitalocean: "digitalocean.com",
                heroku: "heroku.com",
                vercel: "vercel.com",
                netlify: "netlify.com",
                stripe: "stripe.com",
                paypal: "paypal.com",
                spotify: "spotify.com",
                netflix: "netflix.com",
                steam: "steampowered.com",
                battle: "battle.net",
                blizzard: "battle.net"
            }, z = ie(()=>{
                if (!i.service) return "";
                const T = i.service.toLowerCase().trim();
                return T.includes(".") ? T : oe[T] || `${T}.com`;
            }), V = ie(()=>i.service ? i.service.charAt(0).toUpperCase() : "");
            let E = 0;
            const J = async ()=>{
                const T = z.value;
                if (!T) {
                    a.value = !1, n.value = !1;
                    return;
                }
                const Y = ++E, H = t.getCachedIcon(T);
                if (H) {
                    c.value = H, a.value = !1, n.value = !1, B.value = setTimeout(()=>{
                        Y === E && (console.warn(`[VaultIcon] Cache response slow for ${T}, starting backup race...`), re(T, Y));
                    }, 2e3);
                    return;
                }
                if (typeof navigator < "u" && !navigator.onLine) {
                    S();
                    return;
                }
                re(T, Y);
            }, re = (T, Y)=>{
                if (Y !== E) return;
                a.value = !0, n.value = !1;
                const H = [
                    {
                        name: "google",
                        url: `https://www.google.com/s2/favicons?domain=${T}&sz=64`
                    },
                    {
                        name: "bitwarden",
                        url: `https://icons.bitwarden.net/${T}/icon.png`
                    },
                    {
                        name: "favicon",
                        url: `https://favicon.im/zh/${T}?throw-error-on-404=true`
                    }
                ];
                let se = !1;
                const N = 6e3, ne = (fe, ae)=>new Promise((C, o)=>{
                        const u = new Image, y = setTimeout(()=>{
                            u.src = "", o("timeout");
                        }, 3e3);
                        u.onload = ()=>{
                            if (clearTimeout(y), u.naturalWidth <= 1) {
                                o("placeholder_1x1");
                                return;
                            }
                            if (ae === "google" && u.naturalWidth === 16) {
                                console.warn(`[VaultIcon] Google returned default 16px globe for ${T}`), o("google_default");
                                return;
                            }
                            if (ae === "bitwarden" && u.naturalWidth === 19) {
                                console.warn(`[VaultIcon] Bitwarden returned default 19px globe for ${T}`), o("bitwarden_default");
                                return;
                            }
                            C(fe);
                        }, u.onerror = ()=>{
                            clearTimeout(y), o("network_error");
                        }, u.src = fe;
                    });
                (async ()=>{
                    const fe = H[0], ae = async ()=>{
                        if (!(Y !== E || se)) try {
                            const C = H.map((u)=>ne(u.url, u.name)), o = await Promise.any(C);
                            !se && Y === E && (se = !0, c.value = o, t.setCachedIcon(T, o));
                        } catch  {
                            !se && Y === E && (console.error(`[VaultIcon] All race sources failed for ${T}`), S());
                        }
                    };
                    try {
                        const C = await Promise.race([
                            ne(fe.url, fe.name),
                            new Promise((o, u)=>setTimeout(()=>u("timeout"), 1500))
                        ]);
                        !se && Y === E && (se = !0, c.value = C, t.setCachedIcon(T, C), v());
                    } catch  {
                        ae();
                    }
                })(), R.value = setTimeout(()=>{
                    Y === E && !se && a.value && (console.error(`[VaultIcon] Race absolute timeout for ${T}`), S());
                }, N);
            };
            rt(()=>{
                J();
            }), Lt(()=>{
                clearTimeout(R.value), clearTimeout(B.value);
            }), we(()=>i.service, ()=>{
                c.value = "", a.value = !0, n.value = !1, J();
            });
            const ce = ie(()=>({
                    width: `${i.size}px`,
                    height: `${i.size}px`
                })), j = ie(()=>{
                const T = [
                    "#409EFF",
                    "#67C23A",
                    "#E6A23C",
                    "#F56C6C",
                    "#909399",
                    "#7232dd",
                    "#ee0a24",
                    "#07c160",
                    "#ff976a",
                    "#1989fa"
                ];
                let Y = 0;
                for(let se = 0; se < (i.service || "").length; se++)Y = (i.service || "").charCodeAt(se) + ((Y << 5) - Y);
                return {
                    backgroundColor: T[Math.abs(Y) % T.length],
                    fontSize: `${Math.floor(i.size * .5)}px`
                };
            });
            return (T, Y)=>($(), Q("div", {
                    class: "service-icon-wrapper",
                    style: ft(ce.value)
                }, [
                    a.value && !n.value ? ($(), Q("div", Zl)) : pe("", !0),
                    c.value && !n.value ? jt(($(), Q("img", {
                        key: 1,
                        src: c.value,
                        class: "service-icon-img",
                        onError: S,
                        onLoad: v
                    }, null, 40, Jl)), [
                        [
                            hl,
                            !a.value
                        ]
                    ]) : pe("", !0),
                    n.value && !a.value ? ($(), Q("div", {
                        key: 2,
                        class: "service-icon-fallback",
                        style: ft(j.value)
                    }, W(V.value), 5)) : pe("", !0)
                ], 4));
        }
    }, ti = bn(ei, [
        [
            "__scopeId",
            "data-v-a60dac5e"
        ]
    ]), ni = {
        __name: "swipeAction",
        props: {
            id: {
                type: [
                    String,
                    Number
                ],
                default: null
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            threshold: {
                type: Number,
                default: .3
            }
        },
        emits: [
            "open",
            "close"
        ],
        setup (e, { expose: t, emit: i }) {
            const n = e, a = i, c = F(null), R = F(null), B = F(null), v = F(0), S = F(!1), oe = F(!1), z = F(null);
            let V = 0, E = 0, J = 0, re = 0, ce = null;
            const j = ie(()=>R.value?.offsetWidth || 0), T = ie(()=>B.value?.offsetWidth || 0), Y = ie(()=>({
                    transform: `translateX(${v.value}px)`,
                    transition: S.value ? "none" : "transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.15)"
                })), H = (C)=>{
                if (n.disabled) return;
                const o = C.touches[0];
                V = o.clientX, E = o.clientY, J = v.value, re = Date.now(), S.value = !0, ce = null;
            }, se = (C)=>{
                if (n.disabled || !S.value) return;
                const o = C.touches[0], u = o.clientX - V, y = o.clientY - E;
                if (ce === null && (Math.abs(u) > 15 || Math.abs(y) > 15) && (ce = Math.abs(u) > Math.abs(y)), ce) {
                    C.cancelable && C.preventDefault();
                    let ue = J + u;
                    ue > j.value ? ue = j.value + (ue - j.value) * .2 : ue < -T.value && (ue = -T.value + (ue + T.value) * .2), v.value = ue;
                }
            }, N = ()=>{
                if (n.disabled) return;
                S.value = !1;
                const C = Math.abs(v.value), o = Date.now() - re;
                v.value > 0 ? v.value > j.value * n.threshold || o < 250 && v.value > 20 ? (v.value = j.value, oe.value = !0, z.value = "left", a("open", "left"), ne()) : ae() : v.value < 0 && (C > T.value * n.threshold || o < 250 && C > 20) ? (v.value = -T.value, oe.value = !0, z.value = "right", a("open", "right"), ne()) : ae();
            }, ne = ()=>{
                if ("vibrate" in navigator) try {
                    navigator.vibrate(10);
                } catch  {}
                n.id && window.dispatchEvent(new CustomEvent("swipe-action:opened", {
                    detail: {
                        id: n.id
                    }
                }));
            }, G = (C)=>{
                oe.value && C.detail.id !== n.id && ae();
            }, fe = (C)=>{
                oe.value && !c.value?.contains(C.target) && ae();
            };
            rt(()=>{
                window.addEventListener("swipe-action:opened", G), window.addEventListener("touchstart", fe, {
                    passive: !0
                });
            }), St(()=>{
                window.removeEventListener("swipe-action:opened", G), window.removeEventListener("touchstart", fe);
            });
            const ae = ()=>{
                v.value = 0, oe.value = !1, z.value = null, a("close");
            };
            return t({
                reset: ae
            }), (C, o)=>($(), Q("div", {
                    class: at([
                        "swipe-action-container",
                        {
                            "is-open": oe.value,
                            "is-swiping": S.value
                        }
                    ]),
                    ref_key: "containerRef",
                    ref: c
                }, [
                    I("div", {
                        class: "swipe-actions left-actions",
                        ref_key: "leftActionsRef",
                        ref: R,
                        style: ft({
                            opacity: v.value > 0 ? 1 : 0,
                            visibility: v.value > 0 ? "visible" : "hidden"
                        })
                    }, [
                        Ke(C.$slots, "left-actions")
                    ], 4),
                    I("div", {
                        class: "swipe-actions right-actions",
                        ref_key: "rightActionsRef",
                        ref: B,
                        style: ft({
                            opacity: v.value < 0 ? 1 : 0,
                            visibility: v.value < 0 ? "visible" : "hidden"
                        })
                    }, [
                        Ke(C.$slots, "right-actions")
                    ], 4),
                    I("div", {
                        class: "swipe-action-content",
                        style: ft(Y.value),
                        onTouchstart: H,
                        onTouchmove: se,
                        onTouchend: N,
                        onTouchcancel: N
                    }, [
                        Ke(C.$slots, "default")
                    ], 36)
                ], 2));
        }
    }, li = {
        class: "conflict-overlay"
    }, ii = {
        class: "conflict-content"
    }, oi = {
        class: "conflict-text"
    }, si = {
        class: "conflict-actions"
    }, ai = {
        __name: "conflictOverlay",
        emits: [
            "resolve"
        ],
        setup (e) {
            return (t, i)=>{
                const n = Qt;
                return $(), Q("div", li, [
                    I("div", ii, [
                        I("p", oi, W(t.$t("vault.conflict_notice")), 1),
                        I("div", si, [
                            p(n, {
                                size: "small",
                                type: "primary",
                                plain: "",
                                onClick: i[0] || (i[0] = ot((a)=>t.$emit("resolve", "force"), [
                                    "stop"
                                ]))
                            }, {
                                default: g(()=>[
                                        Me(W(t.$t("vault.force_sync")), 1)
                                    ]),
                                _: 1
                            }),
                            p(n, {
                                size: "small",
                                type: "danger",
                                plain: "",
                                onClick: i[1] || (i[1] = ot((a)=>t.$emit("resolve", "discard"), [
                                    "stop"
                                ]))
                            }, {
                                default: g(()=>[
                                        Me(W(t.$t("vault.discard_local")), 1)
                                    ]),
                                _: 1
                            })
                        ])
                    ])
                ]);
            };
        }
    }, Yt = F(Date.now() / 1e3);
    let wt = null, Rt = 0, gn = !1;
    function ri() {
        return {
            currentTime: Yt,
            startTimer: ()=>{
                if (Rt++, gn || (Yt.value = sn() / 1e3, gn = !0), !wt) {
                    const i = ()=>{
                        Yt.value = sn() / 1e3;
                    };
                    i(), wt = setInterval(i, 1e3);
                }
            },
            stopTimer: ()=>{
                Rt--, Rt <= 0 && wt && (clearInterval(wt), wt = null, Rt = 0);
            }
        };
    }
    const ci = {
        class: "card-inner-content"
    }, ui = {
        class: "card-header"
    }, di = {
        class: "service-info"
    }, fi = [
        "title"
    ], mi = {
        class: "vault-name"
    }, vi = {
        class: "code-left"
    }, pi = [
        "data-digits"
    ], gi = [
        "data-digits"
    ], hi = {
        key: 0,
        class: "code-right flex flex-items-center"
    }, yi = {
        key: 1,
        class: "code-right"
    }, _i = {
        class: "timer-text"
    }, wi = {
        key: 2,
        class: "code-right"
    }, hn = {
        __name: "vaultItemCard",
        props: {
            item: {
                type: Object,
                required: !0
            },
            isSelected: {
                type: Boolean,
                default: !1
            },
            isDragging: {
                type: Boolean,
                default: !1
            },
            isPressing: {
                type: Boolean,
                default: !1
            },
            isCompact: {
                type: Boolean,
                default: !1
            },
            isPending: {
                type: Boolean,
                default: !1
            },
            isMobile: {
                type: Boolean,
                default: !1
            },
            isIncrementing: {
                type: Boolean,
                default: !1
            }
        },
        emits: [
            "toggle-selection",
            "command",
            "copy-code",
            "resolve-conflict",
            "increment"
        ],
        setup (e) {
            const t = Ot(), i = Gt(), n = F(!1);
            let a = null, c = 0, R = 0;
            const B = (o)=>{
                if (t.appGhostMode) if (o.type === "touchstart" && o.touches && o.touches.length > 0) {
                    const u = o.touches[0];
                    c = u.clientX, R = u.clientY;
                } else o.type === "mousedown" && (c = o.clientX, R = o.clientY);
            }, v = (o)=>{
                if (t.appGhostMode) {
                    if (o && o.type.startsWith("touch") && o.changedTouches && o.changedTouches.length > 0) {
                        const u = o.changedTouches[0], y = Math.abs(u.clientX - c), ue = Math.abs(u.clientY - R);
                        if (y > 15 || ue > 15) return;
                    }
                    if (o.type === "mouseup") {
                        const u = Math.abs(o.clientX - c), y = Math.abs(o.clientY - R);
                        if (u > 10 || y > 10) return;
                    }
                    n.value = !0, a && clearTimeout(a), a = setTimeout(()=>{
                        n.value = !1, a = null;
                    }, 3e4);
                }
            };
            St(()=>{
                a && clearTimeout(a), V();
            });
            const S = e, { currentTime: oe, startTimer: z, stopTimer: V } = ri(), E = F("------"), J = F(null), re = F(null), ce = F(null), j = ie(()=>S.item.period || 30), T = ie(()=>S.item.digits || 6), Y = ie(()=>S.item.algorithm || "SHA1"), H = ie(()=>Math.ceil(j.value - oe.value % j.value)), se = ie(()=>H.value / j.value * 100), N = ie(()=>H.value > 10 ? "#67C23A" : H.value > 5 ? "#E6A23C" : "#F56C6C"), ne = ie(()=>S.item.account?.includes(":") ? S.item.account.split(":").pop() : S.item.account), G = (o, u)=>{
                if (!o || o === "------" || o === "ERROR") return [
                    o,
                    ""
                ];
                const y = Math.floor(u / 2);
                return [
                    o.substring(0, y),
                    o.substring(y)
                ];
            }, fe = ie(()=>G(E.value, T.value)), ae = ie(()=>G(J.value, T.value)), C = async ()=>{
                if (!S.item.secret) {
                    E.value = "ERROR";
                    return;
                }
                const o = wl();
                let u = S.item.secret;
                if (u && u.startsWith("nodeauth:")) {
                    const ue = await o.getMaskingKey();
                    try {
                        u = await bl(u, ue);
                    } catch  {
                        E.value = "ERROR";
                        return;
                    }
                }
                if (S.item.type === "hotp") {
                    E.value = await Ht(u, S.item.counter || 0, T.value, Y.value, "hotp"), J.value = null, u = null;
                    return;
                }
                const y = Math.floor(oe.value / j.value);
                (re.value !== y || E.value === "------") && (E.value = await Ht(u, j.value, T.value, Y.value, S.item.type), re.value = y), H.value <= 5 && S.isMobile ? (!J.value || ce.value !== y + 1) && (J.value = await Ht(u, j.value, T.value, Y.value, S.item.type, 1), ce.value = y + 1) : J.value = null, u = null;
            };
            return we(oe, ()=>{
                S.item.type !== "hotp" && C();
            }), we(()=>S.item.counter, ()=>{
                S.item.type === "hotp" && C();
            }), we(()=>S.item.secret, ()=>{
                E.value = "------", re.value = null, C();
            }), we(()=>S.item.id, ()=>{
                n.value = !1, a && (clearTimeout(a), a = null);
            }), rt(()=>{
                z(), C();
            }), (o, u)=>{
                const y = yn, ue = An, ge = Dn, Ee = On, Oe = Hn, Be = Bn, Je = Ln, Xe = Qt, Ge = Pn, f = Wn;
                return $(), _e(f, {
                    shadow: "hover",
                    class: at([
                        "vault-card",
                        {
                            "is-selected": e.isSelected,
                            "is-dragging": e.isDragging,
                            "is-pressing": e.isPressing,
                            "is-compact": e.isCompact,
                            "is-pending": e.isPending,
                            "is-ghost-mode": l(t).appGhostMode,
                            "is-revealed": n.value
                        }
                    ])
                }, {
                    default: g(()=>[
                            p(ni, {
                                id: e.item.id,
                                disabled: !l(t).isMobile || e.item.status === "conflict" || l(i).isItemInConflict(e.item.id) || e.isDragging || e.isPressing,
                                onOpen: u[14] || (u[14] = ()=>n.value = !1)
                            }, {
                                "left-actions": g(()=>[
                                        e.item.deletedAt != null ? ($(), Q("div", {
                                            key: 0,
                                            class: "swipe-btn bg-success",
                                            onClick: u[0] || (u[0] = (k)=>o.$emit("command", "restore", e.item))
                                        }, [
                                            p(y, null, {
                                                default: g(()=>[
                                                        p(l(Ct))
                                                    ]),
                                                _: 1
                                            }),
                                            I("span", null, W(o.$t("vault.restore")), 1)
                                        ])) : ($(), Q("div", {
                                            key: 1,
                                            class: "swipe-btn bg-primary",
                                            onClick: u[1] || (u[1] = (k)=>o.$emit("command", "qr", e.item))
                                        }, [
                                            p(y, null, {
                                                default: g(()=>[
                                                        p(l(tn))
                                                    ]),
                                                _: 1
                                            }),
                                            I("span", null, W(o.$t("vault.export_account")), 1)
                                        ]))
                                    ]),
                                "right-actions": g(()=>[
                                        e.item.deletedAt != null ? ($(), Q("div", {
                                            key: 0,
                                            class: "swipe-btn bg-danger",
                                            onClick: u[2] || (u[2] = (k)=>o.$emit("command", "delete", e.item))
                                        }, [
                                            p(y, null, {
                                                default: g(()=>[
                                                        p(l(ut))
                                                    ]),
                                                _: 1
                                            }),
                                            I("span", null, W(o.$t("vault.hard_delete")), 1)
                                        ])) : ($(), Q(st, {
                                            key: 1
                                        }, [
                                            I("div", {
                                                class: "swipe-btn bg-warning",
                                                onClick: u[3] || (u[3] = (k)=>o.$emit("command", "edit", e.item))
                                            }, [
                                                p(y, null, {
                                                    default: g(()=>[
                                                            p(l(nn))
                                                        ]),
                                                    _: 1
                                                }),
                                                I("span", null, W(o.$t("common.edit")), 1)
                                            ]),
                                            I("div", {
                                                class: "swipe-btn bg-danger",
                                                onClick: u[4] || (u[4] = (k)=>o.$emit("command", "delete", e.item))
                                            }, [
                                                p(y, null, {
                                                    default: g(()=>[
                                                            p(l(ut))
                                                        ]),
                                                    _: 1
                                                }),
                                                I("span", null, W(o.$t("common.delete")), 1)
                                            ])
                                        ], 64))
                                    ]),
                                default: g(()=>[
                                        I("div", ci, [
                                            I("div", ui, [
                                                I("div", di, [
                                                    p(ue, {
                                                        "model-value": e.isSelected,
                                                        onChange: u[5] || (u[5] = (k)=>o.$emit("toggle-selection", e.item.id)),
                                                        onClick: u[6] || (u[6] = ot(()=>{}, [
                                                            "stop"
                                                        ]))
                                                    }, null, 8, [
                                                        "model-value"
                                                    ]),
                                                    p(ti, {
                                                        service: e.item.service,
                                                        size: e.isCompact ? 20 : 24
                                                    }, null, 8, [
                                                        "service",
                                                        "size"
                                                    ]),
                                                    I("h3", {
                                                        class: "service-name",
                                                        title: e.item.service
                                                    }, W(e.item.service), 9, fi),
                                                    e.item.category ? ($(), _e(ge, {
                                                        key: 0,
                                                        size: "small",
                                                        effect: "light"
                                                    }, {
                                                        default: g(()=>[
                                                                Me(W(e.item.category), 1)
                                                            ]),
                                                        _: 1
                                                    })) : pe("", !0),
                                                    e.isPending && e.item.status !== "conflict" && !l(i).isItemInConflict(e.item.id) ? ($(), _e(Ee, {
                                                        key: 1,
                                                        content: o.$t("vault.pending_sync_tip")
                                                    }, {
                                                        default: g(()=>[
                                                                p(y, {
                                                                    class: "pending-icon ml-5"
                                                                }, {
                                                                    default: g(()=>[
                                                                            p(l(_n))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])) : pe("", !0),
                                                    e.item.status === "conflict" || l(i).isItemInConflict(e.item.id) ? ($(), _e(Ee, {
                                                        key: 2,
                                                        content: o.$t("vault.conflict_detected_tip")
                                                    }, {
                                                        default: g(()=>[
                                                                p(y, {
                                                                    class: "conflict-icon ml-5",
                                                                    color: "#F56C6C"
                                                                }, {
                                                                    default: g(()=>[
                                                                            p(l(Vn))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])) : pe("", !0)
                                                ]),
                                                l(t).isMobile ? pe("", !0) : ($(), _e(Je, {
                                                    key: 0,
                                                    trigger: "click",
                                                    onCommand: u[8] || (u[8] = (k)=>o.$emit("command", k, e.item))
                                                }, {
                                                    dropdown: g(()=>[
                                                            p(Be, null, {
                                                                default: g(()=>[
                                                                        e.item.deletedAt == null ? ($(), _e(Oe, {
                                                                            key: 0,
                                                                            command: "qr"
                                                                        }, {
                                                                            default: g(()=>[
                                                                                    p(y, null, {
                                                                                        default: g(()=>[
                                                                                                p(l(tn))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + W(o.$t("vault.export_account")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : pe("", !0),
                                                                        e.item.deletedAt != null ? ($(), _e(Oe, {
                                                                            key: 1,
                                                                            command: "restore"
                                                                        }, {
                                                                            default: g(()=>[
                                                                                    p(y, null, {
                                                                                        default: g(()=>[
                                                                                                p(l(Ct))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + W(o.$t("vault.restore")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : pe("", !0),
                                                                        e.item.deletedAt == null ? ($(), _e(Oe, {
                                                                            key: 2,
                                                                            command: "edit"
                                                                        }, {
                                                                            default: g(()=>[
                                                                                    p(y, null, {
                                                                                        default: g(()=>[
                                                                                                p(l(nn))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + W(o.$t("common.edit")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : pe("", !0),
                                                                        p(Oe, {
                                                                            command: "delete",
                                                                            class: "text-danger"
                                                                        }, {
                                                                            default: g(()=>[
                                                                                    p(y, null, {
                                                                                        default: g(()=>[
                                                                                                p(l(ut))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + W(e.item.deletedAt != null ? o.$t("vault.hard_delete") : o.$t("common.delete")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    default: g(()=>[
                                                            p(y, {
                                                                class: "more-icon",
                                                                onClick: u[7] || (u[7] = ot(()=>{}, [
                                                                    "stop"
                                                                ]))
                                                            }, {
                                                                default: g(()=>[
                                                                        p(l(Fn))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }))
                                            ]),
                                            I("p", mi, W(ne.value), 1),
                                            I("div", {
                                                class: "code-display-area",
                                                onClick: u[12] || (u[12] = ot((k)=>o.$emit("copy-code", e.item, E.value), [
                                                    "stop"
                                                ])),
                                                onMousedown: B,
                                                onMouseup: v,
                                                onMouseleave: v,
                                                onTouchstart: B,
                                                onTouchend: v,
                                                onTouchcancel: v
                                            }, [
                                                I("div", vi, [
                                                    I("div", {
                                                        class: "current-code",
                                                        "data-digits": T.value
                                                    }, [
                                                        E.value && E.value !== "------" ? ($(), Q(st, {
                                                            key: 0
                                                        }, [
                                                            I("span", null, W(fe.value[0]), 1),
                                                            u[15] || (u[15] = I("span", {
                                                                class: "code-divider"
                                                            }, null, -1)),
                                                            I("span", null, W(fe.value[1]), 1)
                                                        ], 64)) : ($(), Q(st, {
                                                            key: 1
                                                        }, [
                                                            Me("------")
                                                        ], 64))
                                                    ], 8, pi),
                                                    e.isMobile && J.value && e.item.deletedAt == null ? ($(), Q("div", {
                                                        key: 0,
                                                        class: "next-code",
                                                        "data-digits": T.value
                                                    }, [
                                                        I("span", null, W(ae.value[0]), 1),
                                                        u[16] || (u[16] = I("span", {
                                                            class: "code-divider is-next"
                                                        }, null, -1)),
                                                        I("span", null, W(ae.value[1]), 1)
                                                    ], 8, gi)) : pe("", !0)
                                                ]),
                                                e.item.deletedAt != null ? ($(), Q("div", hi, [
                                                    p(Xe, {
                                                        type: "success",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: u[9] || (u[9] = ot((k)=>o.$emit("command", "restore", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: o.$t("vault.restore")
                                                    }, {
                                                        icon: g(()=>[
                                                                p(y, null, {
                                                                    default: g(()=>[
                                                                            p(l(Ct))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ]),
                                                    p(Xe, {
                                                        type: "danger",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: u[10] || (u[10] = ot((k)=>o.$emit("command", "delete", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: o.$t("vault.hard_delete")
                                                    }, {
                                                        icon: g(()=>[
                                                                p(y, null, {
                                                                    default: g(()=>[
                                                                            p(l(ut))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ])
                                                ])) : E.value !== "------" ? ($(), Q("div", yi, [
                                                    e.item.type === "hotp" ? ($(), _e(Xe, {
                                                        key: 0,
                                                        type: "primary",
                                                        plain: "",
                                                        circle: "",
                                                        size: e.isCompact ? "small" : "default",
                                                        loading: e.isIncrementing,
                                                        onClick: u[11] || (u[11] = ot((k)=>o.$emit("increment", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: o.$t("vault.increment")
                                                    }, {
                                                        icon: g(()=>[
                                                                p(y, null, {
                                                                    default: g(()=>[
                                                                            p(l(Ct))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "size",
                                                        "loading",
                                                        "title"
                                                    ])) : ($(), _e(Ge, {
                                                        key: 1,
                                                        type: "circle",
                                                        percentage: se.value,
                                                        width: e.isCompact ? 26 : 30,
                                                        "stroke-width": e.isCompact ? 2 : 3,
                                                        color: N.value
                                                    }, {
                                                        default: g(()=>[
                                                                I("span", _i, W(H.value), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "percentage",
                                                        "width",
                                                        "stroke-width",
                                                        "color"
                                                    ]))
                                                ])) : ($(), Q("div", wi, [
                                                    p(y, {
                                                        class: "is-loading"
                                                    }, {
                                                        default: g(()=>[
                                                                p(l(Et))
                                                            ]),
                                                        _: 1
                                                    })
                                                ]))
                                            ], 32),
                                            e.item.status === "conflict" || l(i).isItemInConflict(e.item.id) ? ($(), _e(ai, {
                                                key: 0,
                                                onResolve: u[13] || (u[13] = (k)=>o.$emit("resolve-conflict", e.item.id, k))
                                            })) : pe("", !0)
                                        ])
                                    ]),
                                _: 1
                            }, 8, [
                                "id",
                                "disabled"
                            ])
                        ]),
                    _: 1
                }, 8, [
                    "class"
                ]);
            };
        }
    };
    function bi(e, t, i, n = null) {
        const a = Sn(), c = Gt(), { updateTrashMetadata: R, fetchTrash: B } = zn(), { t: v } = Sl.global, S = F([]), oe = F(!1), z = F(!1), V = F(!1), E = F({
            id: "",
            service: "",
            account: "",
            category: ""
        }), J = F(!1), re = F(null), ce = F(!1), j = F(""), T = async ()=>{
            if (S.value.length) try {
                await ln.confirm(v("vault.delete_batch_confirm", {
                    count: S.value.length
                }), v("common.delete"), {
                    type: "warning",
                    confirmButtonText: v("common.delete"),
                    cancelButtonText: v("common.cancel")
                }), oe.value = !0;
                const f = Ot(), k = t?.value?.length > 0 && t.value[0]?.deletedAt != null || !f.appTrashMode;
                if (!c.isManualOffline && (!navigator.onLine || c.isOffline)) {
                    Fe.warning(v("security.offline_network_blocked")), oe.value = !1;
                    return;
                }
                k ? (c.isManualOffline ? await ct.batchDelete(S.value) : await Promise.all(S.value.map((ee)=>_t.hardDelete(ee))), R(-S.value.length)) : (await _t.batchMoveToTrash(S.value), R(S.value.length)), await a.deleteItems(S.value), !c.isOffline && !k && await a.updateMetadata({
                    delta: -S.value.length
                }), Fe.success(v("vault.delete_batch_success", {
                    count: S.value.length
                })), S.value = [], a.markDirty(), e(), B();
            } catch (f) {
                f !== "cancel" && xt.error(f);
            } finally{
                oe.value = !1;
            }
        }, Y = (f)=>{
            const k = S.value.indexOf(f);
            k > -1 ? S.value.splice(k, 1) : S.value.push(f);
        }, H = ()=>{
            t?.value && (S.value = t.value.map((f)=>f.id));
        }, se = async (f, k)=>{
            const ee = k || f?.currentCode;
            if (!ee || ee === "------") return Fe.warning(v("vault.not_generated_yet"));
            await Pt(ee, v("common.copy_success"));
        }, N = (f)=>{
            E.value = {
                id: f.id,
                service: f.service,
                account: f.account,
                category: f.category || "",
                updatedAt: f.updatedAt
            }, z.value = !0;
        }, ne = async ()=>{
            V.value = !0;
            try {
                const { id: f, ...k } = E.value;
                (await ct.updateAccount(f, k)).success && (Fe.success(v("vault.update_success")), z.value = !1, a.markDirty(), e(), B());
            } catch  {} finally{
                V.value = !1;
            }
        };
        let G = null;
        const fe = async (f, k)=>{
            if (!f.some((L, Z)=>L.id !== k[Z]?.id)) return;
            const ze = Fe.success({
                message: v("vault.sort_updated"),
                duration: 1500,
                customClass: "message-success-blur"
            }), m = (n?.value || f).filter((L)=>!L.id.startsWith("tmp_"));
            let x = null;
            const D = f.findIndex((L, Z)=>L.id !== k[Z]?.id);
            if (D !== -1 && (k[D]?.id === f[D + 1]?.id ? x = f[D] : f[D]?.id === k[D + 1]?.id ? x = f.find((L)=>L.id === k[D].id) : x = f[D]), x) {
                const L = m.findIndex((xe)=>xe.id === x.id), Z = L > 0 ? m[L - 1] : null, Re = L < m.length - 1 ? m[L + 1] : null, he = Z?.sortOrder ?? null, $e = Re?.sortOrder ?? null;
                let be = null;
                if (he === null && $e === null) be = 1e3;
                else if (he === null) be = ($e ?? 0) + 1e3;
                else if ($e === null) be = Math.max(0, (he ?? 0) - 1e3);
                else {
                    const xe = Math.floor((he + $e) / 2);
                    xe > $e && xe < he && (be = xe);
                }
                if (be !== null) {
                    x.sortOrder = be;
                    try {
                        await ct.moveSortOrder(x.id, be), G && clearTimeout(G), G = setTimeout(()=>{
                            a.markDirty(), e();
                        }, 1e3);
                    } catch  {
                        ze?.close(), t.value = k, G && clearTimeout(G), e();
                    }
                    return;
                }
            }
            const de = m.map((L)=>L.id);
            try {
                await ct.reorder(de), G && clearTimeout(G), G = setTimeout(()=>{
                    a.markDirty(), e();
                }, 1e3);
            } catch  {
                ze?.close(), t.value = k, G && clearTimeout(G), e();
            }
        }, ae = async (f)=>{
            try {
                const k = Ot(), ee = f.deletedAt != null || !k.appTrashMode;
                if (!c.isManualOffline && (!navigator.onLine || c.isOffline)) {
                    Fe.warning(v("security.offline_network_blocked"));
                    return;
                }
                const ze = v(ee ? "vault.hard_delete" : "common.delete"), r = ee ? v("vault.hard_delete_confirm", {
                    service: f.service
                }) : v("vault.delete_confirm", {
                    service: f.service
                });
                await ln.confirm(r, ze, {
                    type: "warning",
                    confirmButtonText: ze,
                    cancelButtonText: v("common.cancel")
                }), ee ? (c.isManualOffline ? await ct.deleteAccount(f.id) : await _t.hardDelete(f.id), R(-1)) : (await _t.moveToTrash(f.id), R(1)), await a.deleteItems([
                    f.id
                ]);
                const m = f.deletedAt == null;
                !c.isOffline && m && await a.updateMetadata({
                    delta: -1
                }), Fe.success(v("vault.delete_success")), a.markDirty(), e();
            } catch (k) {
                k !== "cancel" && xt.error(k);
            }
        }, C = F(!1), o = async (f)=>{
            if (!C.value) {
                C.value = !0;
                try {
                    const k = await ct.incrementCounter(f.id, f.updatedAt);
                    k.success && (a.markDirty(), e(), k.pending ? Fe.info(v("vault.increment_offline_queued")) : Fe.success(v("vault.increment_success")));
                } catch (k) {
                    xt.error(k), Fe.error(v("vault.increment_failed"));
                } finally{
                    C.value = !1;
                }
            }
        }, u = async (f)=>{
            if (!f || !f.startsWith("nodeauth:")) return f;
            const { useAppLockStore: k } = await cn(async ()=>{
                const { useAppLockStore: m } = await import("./index-Co_0hqsi.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((x)=>x.D);
                return {
                    useAppLockStore: m
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), { unmaskSecretFront: ee } = await cn(async ()=>{
                const { unmaskSecretFront: m } = await import("./index-Co_0hqsi.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((x)=>x.C);
                return {
                    unmaskSecretFront: m
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), r = await k().getMaskingKey();
            return await ee(f, r);
        }, y = async (f)=>{
            const k = await u(f.secret);
            re.value = {
                ...f,
                secret: k
            }, ce.value = !1, J.value = !0;
            const ee = an({
                service: f.service,
                account: f.account,
                secret: k,
                type: f.type,
                algorithm: f.algorithm,
                digits: f.digits,
                period: f.period,
                counter: f.counter
            });
            j.value = await $l.toDataURL(ee, {
                width: 240,
                margin: 1
            });
        }, ue = async ()=>{
            re.value && await Pt(re.value.secret);
        }, ge = async ()=>{
            if (re.value) {
                const f = re.value, k = an({
                    service: f.service,
                    account: f.account,
                    secret: f.secret,
                    type: f.type,
                    algorithm: f.algorithm,
                    digits: f.digits,
                    period: f.period,
                    counter: f.counter
                });
                await Pt(k);
            }
        }, Ee = (f)=>(f || "").match(/.{1,4}/g)?.join(" ") || f, Oe = (f, k)=>{
            if (!f || f === "------" || typeof f != "string") return f;
            const ee = f.replace(/\s/g, "");
            return k === 6 && ee.length === 6 ? `${ee.slice(0, 3)} ${ee.slice(3)}` : k === 8 && ee.length === 8 ? `${ee.slice(0, 4)} ${ee.slice(4)}` : ee;
        }, Be = (f, k)=>{
            if (!f || f === "------" || typeof f != "string") return [
                f,
                ""
            ];
            const ee = f.replace(/\s/g, "");
            return k === 6 && ee.length === 6 ? [
                ee.slice(0, 3),
                ee.slice(3)
            ] : k === 8 && ee.length === 8 ? [
                ee.slice(0, 4),
                ee.slice(4)
            ] : [
                ee,
                ""
            ];
        }, Je = (f, k)=>{
            f === "edit" ? N(k) : f === "qr" ? y(k) : f === "delete" ? ae(k) : f === "restore" && Xe(k);
        }, Xe = async (f)=>{
            if (!navigator.onLine || c.isOffline) {
                Fe.warning(v("security.offline_network_restore_blocked"));
                return;
            }
            try {
                await _t.restoreItem(f.id), R(-1), Fe.success(v("vault.restore_success")), c.isOffline || await a.updateMetadata({
                    delta: 1
                }), await a.deleteItems([
                    f.id
                ]), a.markDirty(), e();
            } catch (k) {
                xt.error(k), Fe.error("恢复失败");
            }
        }, Ge = async (f, k)=>{
            await kn().resolveConflict(f, k), k === "force" ? (Fe.success(v("vault.conflict_force_applied")), ct.syncOfflineActions().then(()=>e())) : (Fe.info(v("vault.conflict_discarded")), e());
        };
        return {
            selectedIds: S,
            isBulkDeleting: oe,
            showEditDialog: z,
            isEditing: V,
            editVaultData: E,
            showQrDialog: J,
            currentQrItem: re,
            showSecret: ce,
            qrCodeUrl: j,
            categoryOptions: ie(()=>(i?.value || []).filter((f)=>f.category).map((f)=>f.category)),
            toggleSelection: Y,
            selectAllLoaded: H,
            handleBulkDelete: T,
            copyCode: se,
            openEditDialog: N,
            submitEditVault: ne,
            deleteVault: ae,
            openQrDialog: y,
            copySecret: ue,
            copyOtpUrl: ge,
            formatSecret: Ee,
            formatCode: Oe,
            getCodeGroups: Be,
            handleCommand: Je,
            performReorder: fe,
            handleResolveConflict: Ge,
            restoreVault: Xe,
            handleIncrement: o,
            isIncrementing: C
        };
    }
    let Si, ki, zi, $i, Ti, Ci, Mi, xi, Ii, Ri, Ei, Ai, Di, Oi, Vi, Li, Fi, Bi, Hi, Pi, Wi, Ui, Xi, Yi, Ni, qi, Ki, Qi, ji, Gi, Zi, Ji, eo, to, no, lo, io, oo, so, ao;
    Si = {
        class: "vault-list-wrapper min-h-400"
    };
    ki = {
        key: 0,
        class: "offline-sync-banner px-16 py-8 mb-10"
    };
    zi = {
        class: "text-12"
    };
    $i = {
        class: "vault-content"
    };
    Ti = {
        key: 0,
        class: "vault-list-toolbar mb-10 flex gap-15 flex-items-center flex-between px-16 py-12"
    };
    Ci = {
        class: "batch-actions flex flex-items-center gap-10 flex-1"
    };
    Mi = {
        class: "batch-text"
    };
    xi = {
        key: 1,
        class: "vault-list-toolbar mb-10 flex gap-15 flex-items-center flex-between flex-wrap"
    };
    Ii = {
        class: "flex flex-items-center gap-10 flex-1"
    };
    Ri = {
        class: "batch-actions flex flex-items-center gap-10"
    };
    Ei = {
        class: "batch-text"
    };
    Ai = {
        key: 2,
        class: "category-filter-container"
    };
    Di = {
        class: "category-chips"
    };
    Oi = {
        class: "tag-count"
    };
    Vi = {
        key: 0,
        class: "tag-loading-track"
    };
    Li = [
        "onClick"
    ];
    Fi = {
        class: "tag-count"
    };
    Bi = {
        key: 0,
        class: "tag-loading-track"
    };
    Hi = {
        class: "tag-count"
    };
    Pi = {
        key: 0,
        class: "tag-loading-track"
    };
    Wi = {
        key: 0,
        class: "flex-column flex-center min-h-400 text-secondary"
    };
    Ui = {
        class: "text-16 ls-1"
    };
    Xi = {
        key: 1,
        class: "empty-state"
    };
    Yi = [
        "infinite-scroll-disabled"
    ];
    Ni = {
        key: 0,
        class: "text-center p-20 text-secondary"
    };
    qi = {
        key: 1,
        class: "text-center p-20 text-secondary text-12"
    };
    Ki = {
        class: "dialog-footer"
    };
    Qi = {
        key: 0,
        class: "qr-container"
    };
    ji = {
        class: "qr-info"
    };
    Gi = {
        class: "qr-service"
    };
    Zi = {
        class: "qr-account"
    };
    Ji = {
        class: "qr-image-wrapper"
    };
    eo = [
        "src"
    ];
    to = {
        class: "qr-tip"
    };
    no = {
        class: "secret-section"
    };
    lo = {
        class: "secret-box"
    };
    io = {
        class: "secret-text"
    };
    oo = {
        class: "secret-actions"
    };
    so = {
        class: "uri-link-wrapper"
    };
    ao = {
        __name: "vaultList",
        emits: [
            "switch-tab"
        ],
        setup (e, { expose: t, emit: i }) {
            const n = kn(), { t: a } = kl(), c = Ot(), R = Gt(), B = Sn(), v = F(null), { serverVault: S, vault: oe, searchQuery: z, selectedCategory: V, isLoading: E, isFetching: J, isFetchingNextPage: re, hasNextPage: ce, absoluteTotalItems: j, categoryStats: T, localCategoryStats: Y, fetchVault: H, handleLoadMore: se, isLoadMoreDisabled: N } = zl(v), { trashCount: ne, isFetchingTrash: G, fetchTrash: fe, filteredTrash: ae } = zn(), C = ie({
                get () {
                    return V.value === "____TRASH____" ? ae(z.value) : oe.value;
                },
                set (w) {
                    V.value !== "____TRASH____" && (oe.value = w);
                }
            }), o = ()=>{
                H(), c.isOffline || fe();
            };
            we(()=>c.searchQuery, (w)=>{
                c.isMobile && (z.value = w);
            }), we([
                J,
                z
            ], ([w, h])=>{
                c.isLoadingSearching = w && !!h;
            });
            const { selectedIds: u, isBulkDeleting: y, toggleSelection: ue, selectAllLoaded: ge, handleBulkDelete: Ee, showEditDialog: Oe, editVaultData: Be, isEditing: Je, handleCommand: Xe, submitEditVault: Ge, showQrDialog: f, currentQrItem: k, qrCodeUrl: ee, showSecret: ze, formatSecret: r, copyCode: m, copySecret: x, copyOtpUrl: D, categoryOptions: de, performReorder: L, handleResolveConflict: Z, handleIncrement: Re, isIncrementing: he } = bi(o, C, T, S), $e = [
                {
                    value: "card",
                    icon: Nn
                },
                {
                    value: "compact",
                    icon: qn
                }
            ], be = F(!1), xe = {
                xs: 24,
                sm: 12,
                md: 8,
                lg: 6
            }, et = F(typeof window < "u" ? window.innerWidth : 1200), zt = ()=>{
                et.value = window.innerWidth;
            };
            rt(()=>window.addEventListener("resize", zt)), St(()=>window.removeEventListener("resize", zt));
            const mt = ie(()=>c.isMobile ? 1 : et.value >= 1200 ? 4 : et.value >= 992 ? 3 : et.value >= 768 ? 2 : 1), Ft = ie(()=>{
                const w = [], h = C.value, X = mt.value;
                for(let M = 0; M < h.length; M += X)w.push({
                    id: `row_${M}`,
                    items: h.slice(M, M + X)
                });
                return w;
            }), lt = F(null), He = ie(()=>C.value.find((w)=>w.id === lt.value)), vt = F({
                x: 0,
                y: 0
            }), $t = F({
                w: 0
            }), it = F(null);
            let ht = {
                x: 0,
                y: 0
            }, tt = !1, Pe = null, s = 0, d = 1, _ = {
                x: 0,
                y: 0
            };
            const P = ie(()=>({
                    left: `${vt.value.x}px`,
                    top: `${vt.value.y}px`,
                    width: `${$t.value.w}px`
                }));
            let O = [];
            const U = (w, h)=>{
                const X = document.querySelector(".vault-scroller");
                if (!X) return;
                const M = X.getBoundingClientRect();
                if (w >= M.left && w <= M.right && h >= M.top && h <= M.bottom) {
                    const te = h - M.top, Ie = w - M.left, ve = document.querySelector(".vue-recycle-scroller__item-view"), Te = ve ? ve.offsetHeight : c.appVaultViewMode === "compact" ? 95 : 135, q = Math.floor(te / Te), Qe = Math.floor(Ie / (M.width / mt.value));
                    let ke = q * mt.value + Qe;
                    const Le = C.value.length - 1;
                    ke > Le && (ke = Le), ke < 0 && (ke = 0);
                    const pt = C.value[ke]?.id;
                    if (pt && pt !== lt.value) {
                        const le = [
                            ...C.value
                        ], Se = le.findIndex((A)=>A.id === lt.value);
                        if (Se !== -1 && Se !== ke) {
                            const [A] = le.splice(Se, 1);
                            le.splice(ke, 0, A), C.value = le;
                        }
                    }
                }
            }, K = (w, h, X, M)=>{
                lt.value = X, tt = !0, _ = {
                    x: w,
                    y: h
                }, O = [
                    ...C.value
                ];
                const te = M.getBoundingClientRect();
                if (ht = {
                    x: w - te.left,
                    y: h - te.top
                }, $t.value.w = te.width, vt.value = {
                    x: te.left,
                    y: te.top
                }, c.isMobile && "vibrate" in navigator) try {
                    navigator.vibrate([
                        20
                    ]);
                } catch  {}
                c.isMobile && (document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", document.body.style.touchAction = "none"), window.getSelection()?.removeAllRanges(), document.body.style.userSelect = "none", document.body.style.webkitUserSelect = "none";
            }, me = (w, h)=>{
                if (!tt) return;
                _ = {
                    x: w,
                    y: h
                }, vt.value = {
                    x: w - ht.x,
                    y: h - ht.y
                };
                const X = 80;
                if (h < X) {
                    const M = Math.max(-25, Math.floor((h - X) / 2.5));
                    Ue(M);
                } else if (h > window.innerHeight - X) {
                    const M = Math.min(25, Math.floor((h - (window.innerHeight - X)) / 2.5));
                    Ue(M);
                } else ye();
                U(w, h);
            }, We = ()=>{
                tt && (ye(), L([
                    ...C.value
                ], O), tt = !1, lt.value = null, document.body.style.overflow = "", document.documentElement.style.overflow = "", document.body.style.touchAction = "", document.body.style.userSelect = "", document.body.style.webkitUserSelect = "");
            }, Ae = (w, h)=>{
                if (w.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon")) return;
                const X = w.clientX, M = w.clientY, te = w.currentTarget;
                let Ie = !1;
                const ve = ()=>{
                    Ie && We(), window.removeEventListener("mousemove", Te), window.removeEventListener("mouseup", ve);
                }, Te = (q)=>{
                    if (!Ie && Math.sqrt(Math.pow(q.clientX - X, 2) + Math.pow(q.clientY - M, 2)) > 5) {
                        if (R.isOffline) {
                            Fe.warning(a("vault.reorder_offline_disabled")), ve();
                            return;
                        }
                        Ie = !0, K(X, M, h, te);
                    }
                    Ie && me(q.clientX, q.clientY);
                };
                window.addEventListener("mousemove", Te), window.addEventListener("mouseup", ve);
            }, Ve = (w, h)=>{
                if (w.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon, .code-display-area")) return;
                const X = w.touches[0], M = X.clientX, te = X.clientY, Ie = w.currentTarget;
                it.value = h;
                let ve = !1;
                const Te = setTimeout(()=>{
                    if (R.isOffline) {
                        Fe.warning(a("vault.reorder_offline_disabled")), it.value = null;
                        return;
                    }
                    ve = !0, it.value = null, K(M, te, h, Ie);
                }, 250), q = (ke)=>{
                    if (ve) {
                        ke.cancelable && ke.preventDefault();
                        const Le = ke.touches[0];
                        me(Le.clientX, Le.clientY);
                    } else {
                        const Le = ke.touches[0];
                        (Math.abs(Le.clientX - M) > 10 || Math.abs(Le.clientY - te) > 10) && (clearTimeout(Te), it.value = null);
                    }
                }, Qe = ()=>{
                    clearTimeout(Te), it.value = null, ve && We(), window.removeEventListener("touchmove", q), window.removeEventListener("touchend", Qe), window.removeEventListener("touchcancel", Qe);
                };
                window.addEventListener("touchmove", q, {
                    passive: !1
                }), window.addEventListener("touchend", Qe), window.addEventListener("touchcancel", Qe);
            }, Ue = (w)=>{
                if (s = w, Pe) return;
                d = 1;
                const h = ()=>{
                    if (!tt) return ye();
                    const X = s * d;
                    let M = document.getElementById("app") || document.documentElement;
                    if (!c.isMobile && M.scrollHeight <= M.clientHeight) {
                        const ve = document.querySelector(".main-content");
                        ve && (M = ve);
                    }
                    const te = M.scrollTop;
                    M.scrollTop += X;
                    const Ie = M.scrollTop;
                    Math.abs(Ie - te) < .1 && X !== 0 && M !== document.documentElement && (document.documentElement.scrollTop += X), d < 4 && (d += .03), U(_.x, _.y), Pe = requestAnimationFrame(h);
                };
                Pe = requestAnimationFrame(h);
            }, ye = ()=>{
                Pe && (cancelAnimationFrame(Pe), Pe = null, d = 1, s = 0);
            }, De = async ()=>{
                try {
                    if (B.isDirty) {
                        H();
                        return;
                    }
                    const w = await B.getData();
                    w && w.categoryStats && (Y.value = w.categoryStats);
                } finally{
                    Ye.value = !1;
                }
            }, Ye = F(!0);
            return rt(()=>{
                De();
            }), St(()=>{
                ye();
            }), t({
                fetchVault: H
            }), (w, h)=>{
                const X = yn, M = Qt, te = Un, Ie = Kn, ve = Yn, Te = Qn, q = jn, Qe = Jn, ke = Zn, Le = tl, pt = nl, le = el, Se = Gn;
                return $(), Q("div", Si, [
                    p(yl, {
                        name: "el-zoom-in-top"
                    }, {
                        default: g(()=>[
                                l(n).hasPendingChanges ? ($(), Q("div", ki, [
                                    p(X, {
                                        class: "mr-8"
                                    }, {
                                        default: g(()=>[
                                                p(l(_n))
                                            ]),
                                        _: 1
                                    }),
                                    I("span", zi, W(w.$t("vault.offline_pending_sync", {
                                        count: l(n).syncQueue.length
                                    })), 1)
                                ])) : pe("", !0)
                            ]),
                        _: 1
                    }),
                    I("div", $i, [
                        p(Te, {
                            offset: l(c).isMobile ? 58 : 60,
                            disabled: l(c).isMobile && l(u).length === 0,
                            onChange: h[6] || (h[6] = (A)=>be.value = A)
                        }, {
                            default: g(()=>[
                                    I("div", {
                                        class: at([
                                            "affix-container",
                                            {
                                                "is-affixed": be.value
                                            }
                                        ])
                                    }, [
                                        l(c).isMobile && l(u).length > 0 ? ($(), Q("div", Ti, [
                                            I("div", Ci, [
                                                I("span", Mi, W(w.$t("search.selected_items", {
                                                    count: l(u).length
                                                })), 1),
                                                h[16] || (h[16] = I("div", {
                                                    class: "flex-1"
                                                }, null, -1)),
                                                p(M, {
                                                    size: "small",
                                                    onClick: l(ge),
                                                    plain: "",
                                                    disabled: l(y)
                                                }, {
                                                    default: g(()=>[
                                                            Me(W(w.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ]),
                                                p(M, {
                                                    type: "danger",
                                                    plain: "",
                                                    size: "small",
                                                    onClick: l(Ee),
                                                    loading: l(y)
                                                }, {
                                                    default: g(()=>[
                                                            p(X, null, {
                                                                default: g(()=>[
                                                                        p(l(ut))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "loading"
                                                ]),
                                                p(M, {
                                                    size: "small",
                                                    onClick: h[0] || (h[0] = (A)=>u.value = []),
                                                    plain: "",
                                                    disabled: l(y)
                                                }, {
                                                    default: g(()=>[
                                                            Me(W(w.$t("common.cancel")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "disabled"
                                                ])
                                            ])
                                        ])) : pe("", !0),
                                        l(c).isMobile ? pe("", !0) : ($(), Q("div", xi, [
                                            I("div", Ii, [
                                                p(te, {
                                                    modelValue: l(z),
                                                    "onUpdate:modelValue": h[1] || (h[1] = (A)=>Bt(z) ? z.value = A : null),
                                                    placeholder: w.$t("search.placeholder"),
                                                    clearable: "",
                                                    class: "max-w-400"
                                                }, {
                                                    prefix: g(()=>[
                                                            l(J) && l(z) ? ($(), _e(X, {
                                                                key: 0,
                                                                class: "is-loading"
                                                            }, {
                                                                default: g(()=>[
                                                                        p(l(Et))
                                                                    ]),
                                                                _: 1
                                                            })) : ($(), _e(X, {
                                                                key: 1
                                                            }, {
                                                                default: g(()=>[
                                                                        p(l(Xn))
                                                                    ]),
                                                                _: 1
                                                            }))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "modelValue",
                                                    "placeholder"
                                                ])
                                            ]),
                                            I("div", Ri, [
                                                l(u).length > 0 ? ($(), Q(st, {
                                                    key: 0
                                                }, [
                                                    I("span", Ei, W(w.$t("search.selected_items", {
                                                        count: l(u).length
                                                    })), 1),
                                                    p(M, {
                                                        type: "danger",
                                                        plain: "",
                                                        onClick: l(Ee),
                                                        loading: l(y)
                                                    }, {
                                                        default: g(()=>[
                                                                p(X, null, {
                                                                    default: g(()=>[
                                                                            p(l(ut))
                                                                        ]),
                                                                    _: 1
                                                                }),
                                                                Me(" " + W(w.$t("common.delete")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "onClick",
                                                        "loading"
                                                    ]),
                                                    p(M, {
                                                        onClick: h[2] || (h[2] = (A)=>u.value = []),
                                                        plain: "",
                                                        disabled: l(y)
                                                    }, {
                                                        default: g(()=>[
                                                                Me(W(w.$t("common.cancel")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "disabled"
                                                    ])
                                                ], 64)) : ($(), _e(M, {
                                                    key: 1,
                                                    onClick: l(ge),
                                                    plain: "",
                                                    disabled: l(y)
                                                }, {
                                                    default: g(()=>[
                                                            Me(W(w.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ])),
                                                p(ve, {
                                                    modelValue: l(c).appVaultViewMode,
                                                    "onUpdate:modelValue": h[3] || (h[3] = (A)=>l(c).appVaultViewMode = A),
                                                    class: "ml-10",
                                                    onChange: l(c).setVaultViewMode
                                                }, {
                                                    default: g(()=>[
                                                            ($(), Q(st, null, At($e, (A)=>p(Ie, {
                                                                    key: A.value,
                                                                    label: A.value
                                                                }, {
                                                                    default: g(()=>[
                                                                            p(X, {
                                                                                size: "16"
                                                                            }, {
                                                                                default: g(()=>[
                                                                                        ($(), _e(Vt(A.icon)))
                                                                                    ]),
                                                                                _: 2
                                                                            }, 1024)
                                                                        ]),
                                                                    _: 2
                                                                }, 1032, [
                                                                    "label"
                                                                ])), 64))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "modelValue",
                                                    "onChange"
                                                ])
                                            ])
                                        ])),
                                        !Ye.value && (!l(c).isMobile || !l(c).isSearchVisible) ? ($(), Q("div", Ai, [
                                            I("div", Di, [
                                                I("div", {
                                                    class: at([
                                                        "category-tag",
                                                        {
                                                            "is-active": l(V) === "",
                                                            "is-loading": l(J) && l(V) === "" && !l(re)
                                                        }
                                                    ]),
                                                    onClick: h[4] || (h[4] = (A)=>V.value = "")
                                                }, [
                                                    Me(W(w.$t("common.all")) + " ", 1),
                                                    I("span", Oi, "(" + W(l(j)) + ")", 1),
                                                    l(J) && l(V) === "" && !l(re) ? ($(), Q("div", Vi, [
                                                        ...h[17] || (h[17] = [
                                                            I("div", {
                                                                class: "tag-loading-bar"
                                                            }, null, -1)
                                                        ])
                                                    ])) : pe("", !0)
                                                ], 2),
                                                ($(!0), Q(st, null, At(l(T), (A)=>($(), Q("div", {
                                                        key: A.id,
                                                        class: at([
                                                            "category-tag",
                                                            {
                                                                "is-active": l(V) === A.id,
                                                                "is-loading": l(J) && l(V) === A.id && !l(re)
                                                            }
                                                        ]),
                                                        onClick: (qe)=>V.value = A.id
                                                    }, [
                                                        Me(W(A.category || w.$t("common.uncategorized")) + " ", 1),
                                                        I("span", Fi, "(" + W(A.count) + ")", 1),
                                                        l(J) && l(V) === A.id && !l(re) ? ($(), Q("div", Bi, [
                                                            ...h[18] || (h[18] = [
                                                                I("div", {
                                                                    class: "tag-loading-bar"
                                                                }, null, -1)
                                                            ])
                                                        ])) : pe("", !0)
                                                    ], 10, Li))), 128)),
                                                l(c).appTrashMode && (l(ne) > 0 || l(V) === "____TRASH____") ? ($(), Q("div", {
                                                    key: 0,
                                                    class: at([
                                                        "category-tag trash-tag",
                                                        {
                                                            "is-active": l(V) === "____TRASH____",
                                                            "is-loading": l(J) && l(V) === "____TRASH____" && !l(re)
                                                        }
                                                    ]),
                                                    onClick: h[5] || (h[5] = (A)=>V.value = "____TRASH____")
                                                }, [
                                                    p(X, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: g(()=>[
                                                                p(l(ut))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    Me(" " + W(w.$t("vault.trash")) + " ", 1),
                                                    I("span", Hi, "(" + W(l(ne)) + ")", 1),
                                                    l(G) && l(V) === "____TRASH____" ? ($(), Q("div", Pi, [
                                                        ...h[19] || (h[19] = [
                                                            I("div", {
                                                                class: "tag-loading-bar bg-danger"
                                                            }, null, -1)
                                                        ])
                                                    ])) : pe("", !0)
                                                ], 2)) : pe("", !0)
                                            ])
                                        ])) : pe("", !0)
                                    ], 2)
                                ]),
                            _: 1
                        }, 8, [
                            "offset",
                            "disabled"
                        ]),
                        Ye.value || (l(E) || l(G) && l(V) === "____TRASH____") && C.value.length === 0 ? ($(), Q("div", Wi, [
                            p(X, {
                                class: "is-loading mb-20 text-primary",
                                size: 48
                            }, {
                                default: g(()=>[
                                        p(l(Et))
                                    ]),
                                _: 1
                            }),
                            I("p", Ui, W(w.$t("common.loading_data")), 1)
                        ])) : !(l(E) || l(G) && l(V) === "____TRASH____") && !l(J) && C.value.length === 0 && !l(z) ? ($(), Q("div", Xi, [
                            l(V) === "____TRASH____" ? ($(), _e(q, {
                                key: 0,
                                description: w.$t("security.trash_already_empty")
                            }, null, 8, [
                                "description"
                            ])) : ($(), _e(q, {
                                key: 1,
                                description: w.$t("vault.empty_vault")
                            }, {
                                default: g(()=>[
                                        p(M, {
                                            type: "primary",
                                            onClick: h[7] || (h[7] = (A)=>w.$emit("switch-tab", "add-vault"))
                                        }, {
                                            default: g(()=>[
                                                    Me(W(w.$t("vault.go_add_vault")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                _: 1
                            }, 8, [
                                "description"
                            ]))
                        ])) : jt(($(), Q("div", {
                            key: 2,
                            class: "list-container min-h-200",
                            "infinite-scroll-disabled": l(N),
                            "infinite-scroll-distance": 300
                        }, [
                            p(l(Kl), {
                                class: "vault-scroller",
                                items: Ft.value,
                                "min-item-size": 80,
                                "key-field": "id",
                                "page-mode": ""
                            }, {
                                default: g(({ item: A, index: qe, active: nt })=>[
                                        p(l(jl), {
                                            item: A,
                                            active: nt,
                                            "size-dependencies": [
                                                A.items
                                            ],
                                            "data-index": qe
                                        }, {
                                            default: g(()=>[
                                                    p(ke, {
                                                        gutter: 20
                                                    }, {
                                                        default: g(()=>[
                                                                ($(!0), Q(st, null, At(A.items, (je, Ce)=>($(), _e(Qe, Dt({
                                                                        key: Ce
                                                                    }, {
                                                                        ref_for: !0
                                                                    }, xe, {
                                                                        class: [
                                                                            l(c).appVaultViewMode === "compact" ? "mb-15" : "mb-20"
                                                                        ],
                                                                        "data-id": je.id
                                                                    }), {
                                                                        default: g(()=>[
                                                                                p(hn, {
                                                                                    item: je,
                                                                                    "is-selected": l(u).includes(je.id),
                                                                                    "is-dragging": lt.value === je.id,
                                                                                    "is-pressing": it.value === je.id,
                                                                                    "is-compact": l(c).appVaultViewMode === "compact",
                                                                                    "is-pending": l(n).isItemPending(je.id) || je.pending,
                                                                                    "is-mobile": l(c).isMobile,
                                                                                    "is-incrementing": l(he),
                                                                                    onToggleSelection: l(ue),
                                                                                    onCommand: l(Xe),
                                                                                    onIncrement: l(Re),
                                                                                    onCopyCode: l(m),
                                                                                    onResolveConflict: l(Z),
                                                                                    onMousedown: (Ze)=>Ae(Ze, je.id),
                                                                                    onTouchstart: (Ze)=>Ve(Ze, je.id)
                                                                                }, null, 8, [
                                                                                    "item",
                                                                                    "is-selected",
                                                                                    "is-dragging",
                                                                                    "is-pressing",
                                                                                    "is-compact",
                                                                                    "is-pending",
                                                                                    "is-mobile",
                                                                                    "is-incrementing",
                                                                                    "onToggleSelection",
                                                                                    "onCommand",
                                                                                    "onIncrement",
                                                                                    "onCopyCode",
                                                                                    "onResolveConflict",
                                                                                    "onMousedown",
                                                                                    "onTouchstart"
                                                                                ])
                                                                            ]),
                                                                        _: 2
                                                                    }, 1040, [
                                                                        "class",
                                                                        "data-id"
                                                                    ]))), 128))
                                                            ]),
                                                        _: 2
                                                    }, 1024)
                                                ]),
                                            _: 2
                                        }, 1032, [
                                            "item",
                                            "active",
                                            "size-dependencies",
                                            "data-index"
                                        ])
                                    ]),
                                _: 1
                            }, 8, [
                                "items"
                            ]),
                            ($(), _e(_l, {
                                to: "body"
                            }, [
                                lt.value && He.value ? ($(), Q("div", {
                                    key: 0,
                                    class: "drag-floating-card",
                                    style: ft(P.value)
                                }, [
                                    p(hn, {
                                        style: {
                                            "pointer-events": "none"
                                        },
                                        item: He.value,
                                        "is-compact": l(c).appVaultViewMode === "compact",
                                        "is-dragging": !1,
                                        "is-incrementing": l(he)
                                    }, null, 8, [
                                        "item",
                                        "is-compact",
                                        "is-incrementing"
                                    ])
                                ], 4)) : pe("", !0)
                            ])),
                            l(re) ? ($(), Q("div", Ni, [
                                p(X, {
                                    class: "is-loading"
                                }, {
                                    default: g(()=>[
                                            p(l(Et))
                                        ]),
                                    _: 1
                                }),
                                Me(" " + W(w.$t("vault.loading_more")), 1)
                            ])) : pe("", !0),
                            !l(ce) && C.value.length > 0 ? ($(), Q("div", qi, W(w.$t("vault.no_more_accounts")), 1)) : pe("", !0),
                            !(l(E) || l(G) && l(V) === "____TRASH____") && C.value.length === 0 && l(z) ? ($(), _e(q, {
                                key: 2,
                                description: w.$t("search.no_matching_accounts")
                            }, null, 8, [
                                "description"
                            ])) : pe("", !0)
                        ], 8, Yi)), [
                            [
                                Se,
                                l(se)
                            ]
                        ])
                    ]),
                    p(rn, {
                        modelValue: l(Oe),
                        "onUpdate:modelValue": h[12] || (h[12] = (A)=>Bt(Oe) ? Oe.value = A : null),
                        title: w.$t("vault.edit_account"),
                        width: "400px"
                    }, {
                        footer: g(()=>[
                                I("span", Ki, [
                                    p(M, {
                                        onClick: h[11] || (h[11] = (A)=>Oe.value = !1)
                                    }, {
                                        default: g(()=>[
                                                Me(W(w.$t("common.cancel")), 1)
                                            ]),
                                        _: 1
                                    }),
                                    p(M, {
                                        type: "primary",
                                        loading: l(Je),
                                        onClick: l(Ge)
                                    }, {
                                        default: g(()=>[
                                                Me(W(w.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "loading",
                                        "onClick"
                                    ])
                                ])
                            ]),
                        default: g(()=>[
                                p(le, {
                                    model: l(Be),
                                    "label-position": "top"
                                }, {
                                    default: g(()=>[
                                            p(Le, {
                                                label: w.$t("vault.service_name")
                                            }, {
                                                default: g(()=>[
                                                        p(te, {
                                                            modelValue: l(Be).service,
                                                            "onUpdate:modelValue": h[8] || (h[8] = (A)=>l(Be).service = A)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            p(Le, {
                                                label: w.$t("vault.account_identifier")
                                            }, {
                                                default: g(()=>[
                                                        p(te, {
                                                            modelValue: l(Be).account,
                                                            "onUpdate:modelValue": h[9] || (h[9] = (A)=>l(Be).account = A)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            p(Le, {
                                                label: w.$t("vault.category_optional")
                                            }, {
                                                default: g(()=>[
                                                        p(pt, {
                                                            modelValue: l(Be).category,
                                                            "onUpdate:modelValue": h[10] || (h[10] = (A)=>l(Be).category = A),
                                                            "fetch-suggestions": (A, qe)=>qe(l(de).filter((nt)=>nt.toLowerCase().includes(A.toLowerCase())).map((nt)=>({
                                                                        value: nt
                                                                    }))),
                                                            placeholder: w.$t("vault.category_optional"),
                                                            style: {
                                                                width: "100%"
                                                            },
                                                            clearable: "",
                                                            teleported: !1
                                                        }, null, 8, [
                                                            "modelValue",
                                                            "fetch-suggestions",
                                                            "placeholder"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ])
                                        ]),
                                    _: 1
                                }, 8, [
                                    "model"
                                ])
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title"
                    ]),
                    p(rn, {
                        modelValue: l(f),
                        "onUpdate:modelValue": h[14] || (h[14] = (A)=>Bt(f) ? f.value = A : null),
                        title: w.$t("vault.export_account"),
                        width: "350px",
                        onClosed: h[15] || (h[15] = (A)=>ze.value = !1)
                    }, {
                        default: g(()=>[
                                l(k) ? ($(), Q("div", Qi, [
                                    I("div", ji, [
                                        I("h3", Gi, W(l(k).service), 1),
                                        I("p", Zi, W(l(k).account), 1)
                                    ]),
                                    I("div", Ji, [
                                        I("img", {
                                            src: l(ee),
                                            class: "qr-code-img"
                                        }, null, 8, eo)
                                    ]),
                                    I("p", to, W(w.$t("vault.export_qr_tip")), 1),
                                    I("div", no, [
                                        I("div", lo, [
                                            I("div", io, W(l(ze) ? l(r)(l(k).secret) : "•••• •••• •••• ••••"), 1),
                                            I("div", oo, [
                                                p(X, {
                                                    class: "action-icon",
                                                    onClick: h[13] || (h[13] = (A)=>ze.value = !l(ze))
                                                }, {
                                                    default: g(()=>[
                                                            l(ze) ? ($(), _e(l(il), {
                                                                key: 1
                                                            })) : ($(), _e(l(ll), {
                                                                key: 0
                                                            }))
                                                        ]),
                                                    _: 1
                                                }),
                                                p(X, {
                                                    class: "action-icon",
                                                    onClick: l(x)
                                                }, {
                                                    default: g(()=>[
                                                            p(l(ol))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick"
                                                ])
                                            ])
                                        ])
                                    ]),
                                    I("div", so, [
                                        p(M, {
                                            link: "",
                                            type: "primary",
                                            class: "otp-url-btn",
                                            onClick: l(D)
                                        }, {
                                            default: g(()=>[
                                                    p(X, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: g(()=>[
                                                                p(l(sl))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    Me(" " + W(w.$t("vault.copy_otp_url")), 1)
                                                ]),
                                            _: 1
                                        }, 8, [
                                            "onClick"
                                        ])
                                    ])
                                ])) : pe("", !0)
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title"
                    ])
                ]);
            };
        }
    };
    So = bn(ao, [
        [
            "__scopeId",
            "data-v-db685257"
        ]
    ]);
});
export { So as default, __tla };
