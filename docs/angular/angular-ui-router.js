/**
 * State-based routing for AngularJS 1.x
 * NOTICE: This monolithic bundle also bundles the @uirouter/core code.
 *         This causes it to be incompatible with plugins that depend on @uirouter/core.
 *         We recommend switching to the ui-router-core.js and ui-router-angularjs.js bundles instead.
 *         For more information, see http://ui-router.github.io/blog/angular-ui-router-umd-bundles
 * @version v1.0.3
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("angular")) : "function" == typeof define && define.amd ? define(["exports", "angular"], e) : e(t["@uirouter/angularjs"] = t["@uirouter/angularjs"] || {}, t.angular) }(this, function(t, e) {
    "use strict";

    function r(t) {
        function e(r) {
            return r.length >= n ? t.apply(null, r) : function() {
                return e(r.concat([].slice.apply(arguments)))
            }
        }
        var r = [].slice.apply(arguments, [1]),
            n = t.length;
        return e(r)
    }

    function n() {
        var t = arguments,
            e = t.length - 1;
        return function() {
            for (var r = e, n = t[e].apply(this, arguments); r--;) n = t[r].call(this, n);
            return n
        }
    }

    function i() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return n.apply(null, [].slice.call(arguments).reverse())
    }

    function o(t, e) {
        return function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return t.apply(null, r) && e.apply(null, r)
        }
    }

    function a(t, e) {
        return function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return t.apply(null, r) || e.apply(null, r)
        }
    }

    function u(t, e) {
        return function(r) {
            return r[t].apply(r, e)
        }
    }

    function s(t) {
        return function(e) {
            for (var r = 0; r < t.length; r++)
                if (t[r][0](e)) return t[r][1](e)
        }
    }

    function c(t) {
        if (te(t) && t.length) {
            var e = t.slice(0, -1),
                r = t.slice(-1);
            return !(e.filter(Ht(Zt)).length || r.filter(Ht(Kt)).length)
        }
        return Kt(t)
    }

    function f(t) {
        return t
    }

    function l() {}

    function h(t, e, r, n, i) {
        void 0 === i && (i = !1);
        var o = function(e) {
                return t()[e].bind(r())
            },
            a = function(t) {
                return function() {
                    return e[t] = o(t), e[t].apply(null, arguments)
                }
            };
        return n = n || Object.keys(t()), n.reduce(function(t, e) {
            return t[e] = i ? a(e) : o(e), t
        }, e)
    }

    function p(t, e) {
        return -1 !== t.indexOf(e)
    }

    function d(t, e) {
        var r = t.indexOf(e);
        return r >= 0 && t.splice(r, 1), t
    }

    function v(t, e) {
        return t.push(e), e
    }

    function m(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        var n = e.concat({}).reverse(),
            i = pe.apply(null, n);
        return pe({}, i, g(t || {}, Object.keys(i)))
    }

    function y(t, e) {
        var r = [];
        for (var n in t.path) {
            if (t.path[n] !== e.path[n]) break;
            r.push(t.path[n])
        }
        return r
    }

    function g(t, e) {
        var r = {};
        for (var n in t) - 1 !== e.indexOf(n) && (r[n] = t[n]);
        return r
    }

    function w(t, e) {
        return Object.keys(t).filter(Ht(me(e))).reduce(function(e, r) {
            return e[r] = t[r], e
        }, {})
    }

    function _(t, e) {
        return b(t, It(e))
    }

    function $(t, e) {
        var r = te(t),
            n = r ? [] : {},
            i = r ? function(t) {
                return n.push(t)
            } : function(t, e) {
                return n[e] = t
            };
        return he(t, function(t, r) { e(t, r) && i(t, r) }), n
    }

    function S(t, e) {
        var r;
        return he(t, function(t, n) { r || e(t, n) && (r = t) }), r
    }

    function b(t, e) {
        var r = te(t) ? [] : {};
        return he(t, function(t, n) {
            return r[n] = e(t, n)
        }), r
    }

    function R(t, e) {
        return t.push(e), t
    }

    function E(t, e) {
        return void 0 === e && (e = "assert failure"),
            function(r) {
                var n = t(r);
                if (!n) throw new Error(Kt(e) ? e(r) : e);
                return n
            }
    }

    function T() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (0 === t.length) return [];
        var r, n = t.reduce(function(t, e) {
                return Math.min(e.length, t)
            }, 9007199254740991),
            i = [];
        for (r = 0; r < n; r++) switch (t.length) {
            case 1:
                i.push([t[0][r]]);
                break;
            case 2:
                i.push([t[0][r], t[1][r]]);
                break;
            case 3:
                i.push([t[0][r], t[1][r], t[2][r]]);
                break;
            case 4:
                i.push([t[0][r], t[1][r], t[2][r], t[3][r]]);
                break;
            default:
                i.push(t.map(function(t) {
                    return t[r]
                }))
        }
        return i
    }

    function C(t, e) {
        var r, n;
        if (te(e) && (r = e[0], n = e[1]), !Zt(r)) throw new Error("invalid parameters to applyPairs");
        return t[r] = n, t
    }

    function P(t) {
        return t.length && t[t.length - 1] || void 0
    }

    function k(t, e) {
        return e && Object.keys(e).forEach(function(t) {
            return delete e[t]
        }), e || (e = {}), pe(e, t)
    }

    function O(t, e, r) {
        if (te(t)) return t.forEach(e, r);
        Object.keys(t).forEach(function(r) {
            return e(t[r], r)
        })
    }

    function x(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            if (r)
                for (var n = Object.keys(r), i = 0; i < n.length; i++) t[n[i]] = r[n[i]]
        }
        return t
    }

    function j(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t !== t && e !== e) return !0;
        var r = typeof t;
        if (r !== typeof e || "object" !== r) return !1;
        var n = [t, e];
        if (qt(te)(n)) return I(t, e);
        if (qt(ee)(n)) return t.getTime() === e.getTime();
        if (qt(re)(n)) return t.toString() === e.toString();
        if (qt(Kt)(n)) return !0;
        if ([Kt, te, ee, re].map(Dt).reduce(function(t, e) {
                return t || !!e(n)
            }, !1)) return !1;
        var i, o = {};
        for (i in t) {
            if (!j(t[i], e[i])) return !1;
            o[i] = !0
        }
        for (i in e)
            if (!o[i]) return !1;
        return !0
    }

    function I(t, e) {
        return t.length === e.length && T(t, e).reduce(function(t, e) {
            return t && j(e[0], e[1])
        }, !0)
    }

    function V(t) {
        return t ? "[ui-view#" + t.id + " tag in template from '" + (t.creationContext && t.creationContext.name || "(root)") + "' state]: fqn: '" + t.fqn + "', name: '" + t.name + "@" + t.creationContext + "')" : "ui-view (defunct)"
    }

    function A(e) {
        return Yt(e) ? t.Category[e] : t.Category[t.Category[e]]
    }

    function H(t, e) {
        function r(t) {
            for (var e = n, r = 0; r < e.length; r++) {
                var i = new Lt(e[r]);
                if (i && i.matches(t.name) || !i && e[r] === t.name) return !0
            }
            return !1
        }
        var n = Zt(e) ? [e] : e;
        return !!(Kt(n) ? n : r)(t)
    }

    function q(t, e, r) {
        function n(t, n, i) {
            void 0 === i && (i = {});
            var a = new Qe(e, r, n, t, i);
            return o.push(a),
                function() { a._deregistered = !0, ye(o)(a) }
        }
        var i = t._registeredHooks = t._registeredHooks || {},
            o = i[r.name] = [];
        return t[r.name] = n, n
    }

    function D(t) {
        return void 0 === t && (t = !1),
            function(e, r) {
                var n = t ? -1 : 1,
                    i = (e.node.state.path.length - r.node.state.path.length) * n;
                return 0 !== i ? i : r.hook.priority - e.hook.priority
            }
    }

    function N(t, e) {
        function r(t) {
            return te(t) ? t : zt(t) ? [t] : []
        }

        function n(t) {
            switch (t.length) {
                case 0:
                    return;
                case 1:
                    return "auto" === e ? t[0] : t;
                default:
                    return t
            }
        }

        function i(t, e) {
            return function(i) {
                if (te(i) && 0 === i.length) return i;
                var o = r(i),
                    a = b(o, t);
                return !0 === e ? 0 === $(a, function(t) {
                    return !t
                }).length : n(a)
            }
        }

        function o(t) {
            return function(e, n) {
                var i = r(e),
                    o = r(n);
                if (i.length !== o.length) return !1;
                for (var a = 0; a < i.length; a++)
                    if (!t(i[a], o[a])) return !1;
                return !0
            }
        }
        var a = this;
        ["encode", "decode", "equals", "$normalize"].forEach(function(e) {
            var r = t[e].bind(t),
                n = "equals" === e ? o : i;
            a[e] = n(r)
        }), pe(this, { dynamic: t.dynamic, name: t.name, pattern: t.pattern, inherit: t.inherit, is: i(t.is.bind(t), !0), $arrayMode: e })
    }

    function F(t) {
        function e() {
            return t.value
        }
        return t = Xe(t) && { value: t } || t, e.__cacheable = !0, pe(t, { $$fn: c(t.value) ? t.value : e })
    }

    function U(e, r, n, i, o) {
        if (e.type && r && "string" !== r.name) throw new Error("Param '" + i + "' has two type configurations.");
        if (e.type && r && "string" === r.name && o.type(e.type)) return o.type(e.type);
        if (r) return r;
        if (!e.type) {
            var a = n === t.DefType.CONFIG ? "any" : n === t.DefType.PATH ? "path" : n === t.DefType.SEARCH ? "query" : "string";
            return o.type(a)
        }
        return e.type instanceof Ye ? e.type : o.type(e.type)
    }

    function L(t, e, r) {
        var n = t.squash;
        if (!e || !1 === n) return !1;
        if (!zt(n) || null == n) return r;
        if (!0 === n || Zt(n)) return n;
        throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
    }

    function M(t, e, r, n) {
        var i, o, a = [{ from: "", to: r || e ? void 0 : "" }, { from: null, to: r || e ? void 0 : "" }];
        return i = te(t.replace) ? t.replace : [], Zt(n) && i.push({ from: n, to: void 0 }), o = b(i, It("from")), $(a, function(t) {
            return -1 === o.indexOf(t.from)
        }).concat(i)
    }

    function B(t, e) {
        return e.length <= t ? e : e.substr(0, t - 3) + "..."
    }

    function G(t, e) {
        for (; e.length < t;) e += " ";
        return e
    }

    function W(t) {
        return t.replace(/^([A-Z])/, function(t) {
            return t.toLowerCase()
        }).replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }

    function z(t) {
        var e = J(t),
            r = e.match(/^(function [^ ]+\([^)]*\))/),
            n = r ? r[1] : e,
            i = t.name || "";
        return i && n.match(/function \(/) ? "function " + i + n.substr(9) : n
    }

    function J(t) {
        var e = te(t) ? t.slice(-1)[0] : t;
        return e && e.toString() || "undefined"
    }

    function Q(t) {
        function e(t) {
            if (Xt(t)) {
                if (-1 !== r.indexOf(t)) return "[circular ref]";
                r.push(t)
            }
            return vr(t)
        }
        var r = [];
        return JSON.stringify(t, function(t, r) {
            return e(r)
        }).replace(/\\"/g, '"')
    }

    function K(t) {
        var e = new RegExp("(" + t + ")", "g");
        return function(t) {
            return t.split(e).filter(f)
        }
    }

    function Y(t, e) {
        return Zt(P(t)) && Zt(e) ? t.slice(0, -1).concat(P(t) + e) : R(t, e)
    }

    function Z(t) {
        return t.name
    }

    function X(t) {
        return t.self.$$state = function() {
            return t
        }, t.self
    }

    function tt(t) {
        return t.parent && t.parent.data && (t.data = t.self.data = ve(t.parent.data, t.data)), t.data
    }

    function et(t) {
        return t.parent ? t.parent.path.concat(t) : [t]
    }

    function rt(t) {
        var e = t.parent ? pe({}, t.parent.includes) : {};
        return e[t.name] = !0, e
    }

    function nt(t) {
        var e = function(t) {
                var e = ae.$injector;
                return t.$inject || e && e.annotate(t, e.strictDi) || "deferred"
            },
            r = function(t) {
                return !(!t.token || !t.resolveFn)
            },
            n = function(t) {
                return !(!t.provide && !t.token || !(t.useValue || t.useFactory || t.useExisting || t.useClass))
            },
            o = function(t) {
                return !!(t && t.val && (Zt(t.val) || te(t.val) || Kt(t.val)))
            },
            a = function(t) {
                return t.provide || t.token
            },
            u = s([
                [It("resolveFn"), function(t) {
                    return new ir(a(t), t.resolveFn, t.deps, t.policy)
                }],
                [It("useFactory"), function(t) {
                    return new ir(a(t), t.useFactory, t.deps || t.dependencies, t.policy)
                }],
                [It("useClass"), function(t) {
                    return new ir(a(t), function() {
                        return new t.useClass
                    }, [], t.policy)
                }],
                [It("useValue"), function(t) {
                    return new ir(a(t), function() {
                        return t.useValue
                    }, [], t.policy, t.useValue)
                }],
                [It("useExisting"), function(t) {
                    return new ir(a(t), f, [t.useExisting], t.policy)
                }]
            ]),
            c = s([
                [i(It("val"), Zt), function(t) {
                    return new ir(t.token, f, [t.val], t.policy)
                }],
                [i(It("val"), te), function(t) {
                    return new ir(t.token, P(t.val), t.val.slice(0, -1), t.policy)
                }],
                [i(It("val"), Kt), function(t) {
                    return new ir(t.token, t.val, e(t.val), t.policy)
                }]
            ]),
            l = s([
                [Nt(ir), function(t) {
                    return t
                }],
                [r, u],
                [n, u],
                [o, c],
                [Ut(!0), function(t) {
                    throw new Error("Invalid resolve value: " + Q(t))
                }]
            ]),
            h = t.resolve;
        return (te(h) ? h : function(t, e) {
            return Object.keys(t || {}).map(function(r) {
                return { token: r, val: t[r], deps: void 0, policy: e[r] }
            })
        }(h, t.resolvePolicy || {})).map(l)
    }

    function it(t, e) {
        var r = ["", ""],
            n = t.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
        if (!e) return n;
        switch (e.squash) {
            case !1:
                r = ["(", ")" + (e.isOptional ? "?" : "")];
                break;
            case !0:
                n = n.replace(/\/$/, ""), r = ["(?:/(", ")|/)?"];
                break;
            default:
                r = ["(" + e.squash + "|", ")?"]
        }
        return n + r[0] + e.type.pattern.source + r[1]
    }

    function ot(t, e, r, n) {
        return "/" === n ? t : e ? n.slice(0, -1) + t : r ? n.slice(1) + t : t
    }

    function at(t) {
        if (!(Kt(t) || Zt(t) || Nt(We)(t) || We.isDef(t))) throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");
        return Kt(t) ? t : Ut(t)
    }

    function ut(t) {
        t.addResolvable({
            token: Wr,
            deps: [],
            resolveFn: function() {
                return t.router
            },
            data: t.router
        }, ""), t.addResolvable({
            token: pr,
            deps: [],
            resolveFn: function() {
                return t
            },
            data: t
        }, ""), t.addResolvable({
            token: "$transition$",
            deps: [],
            resolveFn: function() {
                return t
            },
            data: t
        }, ""), t.addResolvable({
            token: "$stateParams",
            deps: [],
            resolveFn: function() {
                return t.params()
            },
            data: t.params()
        }, ""), t.entering().forEach(function(e) {
            t.addResolvable({
                token: "$state$",
                deps: [],
                resolveFn: function() {
                    return e
                },
                data: e
            }, e)
        })
    }

    function st(t) {
        return function(e, r) {
            return (0, r.$$state()[t])(e, r)
        }
    }

    function ct(t, e) {
        function r(e) {
            return e && Array.isArray(e.states) && e.states.forEach(function(e) {
                return t.router.stateRegistry.register(e)
            }), e
        }
        var n = e.$$state().lazyLoad,
            i = n._promise;
        if (!i) {
            var o = function(t) {
                    return delete e.lazyLoad, delete e.$$state().lazyLoad, delete n._promise, t
                },
                a = function(t) {
                    return delete n._promise, ae.$q.reject(t)
                };
            i = n._promise = ae.$q.when(n(t, e)).then(r).then(o, a)
        }
        return i
    }

    function ft(t) {
        var e = t._ignoredReason();
        if (e) {
            Ge.traceTransitionIgnored(t);
            var r = t.router.globals.transition;
            return "SameAsCurrent" === e && r && r.abort(), Ne.ignored().toPromise()
        }
    }

    function lt(t) {
        if (!t.valid()) throw new Error(t.error())
    }

    function ht(t) {
        var e = function(t) {
                return t || ""
            },
            r = Cn(t).map(e),
            n = r[0],
            i = r[1],
            o = Pn(n).map(e);
        return { path: o[0], search: o[1], hash: i, url: t }
    }

    function pt(t, e, r, n) {
        return function(i) {
            function o(t) { t.dispose(a), t.dispose(u) }
            var a = i.locationService = new r(i),
                u = i.locationConfig = new n(i, e);
            return { name: t, service: a, configuration: u, dispose: o }
        }
    }

    function dt(t) {
        return ae.$injector = En, ae.$q = bn, {
            name: "vanilla.services",
            $q: bn,
            $injector: En,
            dispose: function() {
                return null
            }
        }
    }

    function vt() {
        var t = null;
        return function(e, r) {
            return t = t || ae.$injector.get("$templateFactory"), [new Zn(e, r, t)]
        }
    }

    function mt(t) {
        if (!t.parent) return {};
        var e = ["templateProvider", "templateUrl", "template", "notify", "async"],
            r = ["controller", "controllerProvider", "controllerAs", "resolveAs"],
            n = ["component", "bindings", "componentProvider"],
            i = e.concat(r),
            o = n.concat(i);
        if (zt(t.views) && Kn(o, t)) throw new Error("State '" + t.name + "' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  " + o.filter(function(e) {
            return zt(t[e])
        }).join(", "));
        var a = {},
            u = t.views || { $default: g(t, o) };
        return he(u, function(e, r) {
            if (r = r || "$default", Zt(e) && (e = { component: e }), e = pe({}, e), Kn(n, e) && Kn(i, e)) throw new Error("Cannot combine: " + n.join("|") + " with: " + i.join("|") + " in stateview: '" + r + "@" + t.name + "'");
            e.resolveAs = e.resolveAs || "$resolve", e.$type = "ng1", e.$context = t, e.$name = r;
            var o = Hr.normalizeUIViewTarget(e.$context, e.$name);
            e.$uiViewName = o.uiViewName, e.$uiViewContextAnchor = o.uiViewContextAnchor, a[r] = e
        }), a
    }

    function yt(t) {
        var e = ae.$injector.get(t + "Directive");
        if (!e || !e.length) throw new Error("Unable to find component named '" + t + "'");
        return e.map(ti).reduce(Ee, [])
    }

    function gt(t) {
        function e(t, e, n, i, o, a) {
            return r._runtimeServices(i, t, n, e), delete li.router, delete li.$get, li
        }
        li = this.router = new Wr, li.stateProvider = new ri(li.stateRegistry, li.stateService), li.stateRegistry.decorator("views", mt), li.stateRegistry.decorator("onExit", ni("onExit")), li.stateRegistry.decorator("onRetain", ni("onRetain")), li.stateRegistry.decorator("onEnter", ni("onEnter")), li.viewService._pluginapi._viewConfigFactory("ng1", vt());
        var r = li.locationService = li.locationConfig = new ii(t);
        return ii.monkeyPatchPathParameterType(li), li.router = li, li.$get = e, e.$inject = ["$location", "$browser", "$sniffer", "$rootScope", "$http", "$templateCache"], li
    }

    function wt(t, e, r) {
        ae.$injector = t, ae.$q = e, r.stateRegistry.get().map(function(t) {
            return t.$$state().resolvables
        }).reduce(Ee, []).filter(function(t) {
            return "deferred" === t.deps
        }).forEach(function(e) {
            return e.deps = t.annotate(e.resolveFn)
        })
    }

    function _t(t) { t.$watch(function() { Ge.approximateDigests++ }) }

    function $t(t) {
        var e, r = t.match(/^\s*({[^}]*})\s*$/);
        if (r && (t = "(" + r[1] + ")"), !(e = t.replace(/\n/g, " ").match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/)) || 4 !== e.length) throw new Error("Invalid state ref '" + t + "'");
        return { state: e[1] || null, paramExpr: e[3] || null }
    }

    function St(t) {
        var e = t.parent().inheritedData("$uiView"),
            r = At("$cfg.path")(e);
        return r ? P(r).state.name : void 0
    }

    function bt(t, e, r) {
        var n = r.uiState || t.current.name,
            i = pe(Tt(e, t), r.uiStateOpts || {}),
            o = t.href(n, r.uiStateParams, i);
        return { uiState: n, uiStateParams: r.uiStateParams, uiStateOpts: i, href: o }
    }

    function Rt(t) {
        var e = "[object SVGAnimatedString]" === Object.prototype.toString.call(t.prop("href")),
            r = "FORM" === t[0].nodeName;
        return { attr: r ? "action" : e ? "xlink:href" : "href", isAnchor: "A" === t.prop("tagName").toUpperCase(), clickable: !r }
    }

    function Et(t, e, r, n, i) {
        return function(o) {
            var a = o.which || o.button,
                u = i();
            if (!(a > 1 || o.ctrlKey || o.metaKey || o.shiftKey || t.attr("target"))) {
                var s = r(function() { e.go(u.uiState, u.uiStateParams, u.uiStateOpts) });
                o.preventDefault();
                var c = n.isAnchor && !u.href ? 1 : 0;
                o.preventDefault = function() { c-- <= 0 && r.cancel(s) }
            }
        }
    }

    function Tt(t, e) {
        return { relative: St(t) || e.$current, inherit: !0, source: "sref" }
    }

    function Ct(t, e, r, n) {
        var i;
        n && (i = n.events), te(i) || (i = ["click"]);
        for (var o = t.on ? "on" : "bind", a = 0, u = i; a < u.length; a++) {
            var s = u[a];
            t[o](s, r)
        }
        e.$on("$destroy", function() {
            for (var e = t.off ? "off" : "unbind", n = 0, o = i; n < o.length; n++) {
                var a = o[n];
                t[e](a, r)
            }
        })
    }

    function Pt(t) {
        var e = function(e, r, n) {
            return t.is(e, r, n)
        };
        return e.$stateful = !0, e
    }

    function kt(t) {
        var e = function(e, r, n) {
            return t.includes(e, r, n)
        };
        return e.$stateful = !0, e
    }

    function Ot(t, r, n, i, o, a) {
        var u = At("viewDecl.controllerAs"),
            s = At("viewDecl.resolveAs");
        return {
            restrict: "ECA",
            priority: -400,
            compile: function(i) {
                var a = i.html();
                return i.empty(),
                    function(i, c) {
                        var f = c.data("$uiView");
                        if (!f) return c.html(a), void t(c.contents())(i);
                        var l = f.$cfg || { viewDecl: {}, getTemplate: e.noop },
                            h = l.path && new fr(l.path);
                        c.html(l.getTemplate(c, h) || a), Ge.traceUIViewFill(f.$uiView, c.html());
                        var p = t(c.contents()),
                            d = l.controller,
                            v = u(l),
                            m = s(l),
                            y = h && mi(h);
                        if (i[m] = y, d) {
                            var g = r(d, pe({}, y, { $scope: i, $element: c }));
                            v && (i[v] = g, i[v][m] = y), c.data("$ngControllerController", g), c.children().data("$ngControllerController", g), xt(o, n, g, i, l)
                        }
                        if (Zt(l.viewDecl.component)) var w = l.viewDecl.component,
                            _ = W(w),
                            $ = new RegExp("^(x-|data-)?" + _ + "$", "i"),
                            S = function() {
                                var t = [].slice.call(c[0].children).filter(function(t) {
                                    return t && t.tagName && $.exec(t.tagName)
                                });
                                return t && Qn.element(t).data("$" + w + "Controller")
                            },
                            b = i.$watch(S, function(t) { t && (xt(o, n, t, i, l), b()) });
                        p(i)
                    }
            }
        }
    }

    function xt(t, e, r, n, i) {
        !Kt(r.$onInit) || i.viewDecl.component && _i || r.$onInit();
        var o = P(i.path).state.self,
            a = { bind: r };
        if (Kt(r.uiOnParamsChanged)) {
            var u = new fr(i.path),
                s = u.getResolvable("$transition$").data,
                c = function(t) {
                    if (t !== s && -1 === t.exiting().indexOf(o)) {
                        var e = t.params("to"),
                            n = t.params("from"),
                            i = t.treeChanges().to.map(function(t) {
                                return t.paramSchema
                            }).reduce(Ee, []),
                            a = t.treeChanges().from.map(function(t) {
                                return t.paramSchema
                            }).reduce(Ee, []),
                            u = i.filter(function(t) {
                                var r = a.indexOf(t);
                                return -1 === r || !a[r].type.equals(e[t.id], n[t.id])
                            });
                        if (u.length) {
                            var c = u.map(function(t) {
                                    return t.id
                                }),
                                f = $(e, function(t, e) {
                                    return -1 !== c.indexOf(e)
                                });
                            r.uiOnParamsChanged(f, t)
                        }
                    }
                };
            n.$on("$destroy", e.onSuccess({}, c, a))
        }
        if (Kt(r.uiCanExit)) {
            var f = $i++,
                l = function(t) {
                    return !!t && (t._uiCanExitIds && !0 === t._uiCanExitIds[f] || l(t.redirectedFrom()))
                },
                h = function(e) {
                    var n, i = e._uiCanExitIds = e._uiCanExitIds || {};
                    return l(e) || (n = t.when(r.uiCanExit(e)), n.then(function(t) {
                        return i[f] = !1 !== t
                    })), n
                },
                p = { exiting: o.name };
            n.$on("$destroy", e.onBefore(p, h, a))
        }
    }

    function jt() {
        var t = !1;
        this.useAnchorScroll = function() { t = !0 }, this.$get = ["$anchorScroll", "$timeout", function(e, r) {
            return t ? e : function(t) {
                return r(function() { t[0].scrollIntoView() }, 0, !1)
            }
        }]
    }
    var It = function(t) {
            return function(e) {
                return e && e[t]
            }
        },
        Vt = r(function(t, e, r) {
            return r && r[t] === e
        }),
        At = function(t) {
            return i.apply(null, t.split(".").map(It))
        },
        Ht = function(t) {
            return function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return !t.apply(null, e)
            }
        },
        qt = function(t) {
            return function(e) {
                return e.reduce(function(e, r) {
                    return e && !!t(r)
                }, !0)
            }
        },
        Dt = function(t) {
            return function(e) {
                return e.reduce(function(e, r) {
                    return e || !!t(r)
                }, !1)
            }
        },
        Nt = function(t) {
            return function(e) {
                return null != e && e.constructor === t || e instanceof t
            }
        },
        Ft = function(t) {
            return function(e) {
                return t === e
            }
        },
        Ut = function(t) {
            return function() {
                return t
            }
        },
        Lt = function() {
            function t(t) {
                this.text = t, this.glob = t.split(".");
                var e = this.text.split(".").map(function(t) {
                    return "**" === t ? "(?:|(?:\\.[^.]*)*)" : "*" === t ? "\\.[^.]*" : "\\." + t
                }).join("");
                this.regexp = new RegExp("^" + e + "$")
            }
            return t.prototype.matches = function(t) {
                return this.regexp.test("." + t)
            }, t.is = function(t) {
                return !!/[!,*]+/.exec(t)
            }, t.fromString = function(e) {
                return t.is(e) ? new t(e) : null
            }, t
        }(),
        Mt = function() {
            function t(e) {
                return t.create(e || {})
            }
            return t.create = function(e) {
                e = t.isStateClass(e) ? new e : e;
                var r = ve(ve(e, t.prototype));
                return e.$$state = function() {
                    return r
                }, r.self = e, r.__stateObjectCache = { nameGlob: Lt.fromString(r.name) }, r
            }, t.prototype.is = function(t) {
                return this === t || this.self === t || this.fqn() === t
            }, t.prototype.fqn = function() {
                if (!(this.parent && this.parent instanceof this.constructor)) return this.name;
                var t = this.parent.fqn();
                return t ? t + "." + this.name : this.name
            }, t.prototype.root = function() {
                return this.parent && this.parent.root() || this
            }, t.prototype.parameters = function(t) {
                return t = m(t, { inherit: !0, matchingKeys: null }), (t.inherit && this.parent && this.parent.parameters() || []).concat(Se(this.params)).filter(function(e) {
                    return !t.matchingKeys || t.matchingKeys.hasOwnProperty(e.id)
                })
            }, t.prototype.parameter = function(t, e) {
                return void 0 === e && (e = {}), this.url && this.url.parameter(t, e) || S(Se(this.params), Vt("id", t)) || e.inherit && this.parent && this.parent.parameter(t)
            }, t.prototype.toString = function() {
                return this.fqn()
            }, t
        }();
    Mt.isStateClass = function(t) {
        return Kt(t) && !0 === t.__uiRouterState
    }, Mt.isState = function(t) {
        return Xt(t.__stateObjectCache)
    };
    var Bt = Object.prototype.toString,
        Gt = function(t) {
            return function(e) {
                return typeof e === t
            }
        },
        Wt = Gt("undefined"),
        zt = Ht(Wt),
        Jt = function(t) {
            return null === t
        },
        Qt = a(Jt, Wt),
        Kt = Gt("function"),
        Yt = Gt("number"),
        Zt = Gt("string"),
        Xt = function(t) {
            return null !== t && "object" == typeof t
        },
        te = Array.isArray,
        ee = function(t) {
            return "[object Date]" === Bt.call(t)
        },
        re = function(t) {
            return "[object RegExp]" === Bt.call(t)
        },
        ne = Mt.isState,
        ie = o(Xt, i(It("then"), Kt)),
        oe = function(t) {
            return function() {
                throw new Error(t + "(): No coreservices implementation for UI-Router is loaded.")
            }
        },
        ae = { $q: void 0, $injector: void 0 },
        ue = "undefined" == typeof window ? {} : window,
        se = ue.angular || {},
        ce = se.fromJson || JSON.parse.bind(JSON),
        fe = se.toJson || JSON.stringify.bind(JSON),
        le = se.copy || k,
        he = se.forEach || O,
        pe = Object.assign || x,
        de = se.equals || j,
        ve = function(t, e) {
            return pe(Object.create(t), e)
        },
        me = r(p),
        ye = r(d),
        ge = r(v),
        we = function(t) {
            return t.slice().forEach(function(e) { "function" == typeof e && e(), ye(t, e) })
        },
        _e = function(t, e) {
            return pe(t, e)
        },
        $e = b,
        Se = function(t) {
            return Object.keys(t).map(function(e) {
                return t[e]
            })
        },
        be = function(t, e) {
            return t && e
        },
        Re = function(t, e) {
            return t || e
        },
        Ee = function(t, e) {
            return t.concat(e)
        },
        Te = function(t, e) {
            return te(e) ? t.concat(e.reduce(Te, [])) : R(t, e)
        },
        Ce = function(t, e) {
            return me(t, e) ? t : R(t, e)
        },
        Pe = function(t) {
            return t.reduce(Ee, [])
        },
        ke = function(t) {
            return t.reduce(Te, [])
        },
        Oe = E,
        xe = E,
        je = function(t) {
            return Object.keys(t).map(function(e) {
                return [e, t[e]]
            })
        },
        Ie = function(t, e) {
            return void 0 === e && (e = Ut(!0)),
                function(r, n) {
                    return e(r) && e(n) ? t(r) - t(n) : 0
                }
        },
        Ve = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function(e, r) {
                return t.reduce(function(t, n) {
                    return t || n(e, r)
                }, 0)
            }
        },
        Ae = function(t) {
            return t.catch(function(t) {
                return 0
            }) && t
        },
        He = function(t) {
            return Ae(ae.$q.reject(t))
        },
        qe = function() {
            function t(t, e) { void 0 === t && (t = []), void 0 === e && (e = null), this._items = t, this._limit = e }
            return t.prototype.enqueue = function(t) {
                var e = this._items;
                return e.push(t), this._limit && e.length > this._limit && e.shift(), t
            }, t.prototype.dequeue = function() {
                if (this.size()) return this._items.splice(0, 1)[0]
            }, t.prototype.clear = function() {
                var t = this._items;
                return this._items = [], t
            }, t.prototype.size = function() {
                return this._items.length
            }, t.prototype.remove = function(t) {
                var e = this._items.indexOf(t);
                return e > -1 && this._items.splice(e, 1)[0]
            }, t.prototype.peekTail = function() {
                return this._items[this._items.length - 1]
            }, t.prototype.peekHead = function() {
                if (this.size()) return this._items[0]
            }, t
        }();
    ! function(t) { t[t.SUPERSEDED = 2] = "SUPERSEDED", t[t.ABORTED = 3] = "ABORTED", t[t.INVALID = 4] = "INVALID", t[t.IGNORED = 5] = "IGNORED", t[t.ERROR = 6] = "ERROR" }(t.RejectType || (t.RejectType = {}));
    var De = 0,
        Ne = function() {
            function e(t, e, r) { this.$id = De++, this.type = t, this.message = e, this.detail = r }
            return e.prototype.toString = function() {
                var t = function(t) {
                        return t && t.toString !== Object.prototype.toString ? t.toString() : Q(t)
                    }(this.detail),
                    e = this;
                return "Transition Rejection($id: " + e.$id + " type: " + e.type + ", message: " + e.message + ", detail: " + t + ")"
            }, e.prototype.toPromise = function() {
                return pe(He(this), { _transitionRejection: this })
            }, e.isRejectionPromise = function(t) {
                return t && "function" == typeof t.then && Nt(e)(t._transitionRejection)
            }, e.superseded = function(r, n) {
                var i = new e(t.RejectType.SUPERSEDED, "The transition has been superseded by a different transition", r);
                return n && n.redirected && (i.redirected = !0), i
            }, e.redirected = function(t) {
                return e.superseded(t, { redirected: !0 })
            }, e.invalid = function(r) {
                return new e(t.RejectType.INVALID, "This transition is invalid", r)
            }, e.ignored = function(r) {
                return new e(t.RejectType.IGNORED, "The transition was ignored", r)
            }, e.aborted = function(r) {
                return new e(t.RejectType.ABORTED, "The transition has been aborted", r)
            }, e.errored = function(r) {
                return new e(t.RejectType.ERROR, "The transition errored", r)
            }, e.normalize = function(t) {
                return Nt(e)(t) ? t : e.errored(t)
            }, e
        }(),
        Fe = function(t) {
            return "[ViewConfig#" + t.$id + " from '" + (t.viewDecl.$context.name || "(root)") + "' state]: target ui-view: '" + t.viewDecl.$uiViewName + "@" + t.viewDecl.$uiViewContextAnchor + "'"
        };
    ! function(t) { t[t.RESOLVE = 0] = "RESOLVE", t[t.TRANSITION = 1] = "TRANSITION", t[t.HOOK = 2] = "HOOK", t[t.UIVIEW = 3] = "UIVIEW", t[t.VIEWCONFIG = 4] = "VIEWCONFIG" }(t.Category || (t.Category = {}));
    var Ue = At("$id"),
        Le = At("router.$id"),
        Me = function(t) {
            return "Transition #" + Ue(t) + "-" + Le(t)
        },
        Be = function() {
            function e() { this._enabled = {}, this.approximateDigests = 0 }
            return e.prototype._set = function(e, r) {
                var n = this;
                r.length || (r = Object.keys(t.Category).map(function(t) {
                    return parseInt(t, 10)
                }).filter(function(t) {
                    return !isNaN(t)
                }).map(function(e) {
                    return t.Category[e]
                })), r.map(A).forEach(function(t) {
                    return n._enabled[t] = e
                })
            }, e.prototype.enable = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._set(!0, t)
            }, e.prototype.disable = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._set(!1, t)
            }, e.prototype.enabled = function(t) {
                return !!this._enabled[A(t)]
            }, e.prototype.traceTransitionStart = function(e) { this.enabled(t.Category.TRANSITION) && console.log(Me(e) + ": Started  -> " + Q(e)) }, e.prototype.traceTransitionIgnored = function(e) { this.enabled(t.Category.TRANSITION) && console.log(Me(e) + ": Ignored  <> " + Q(e)) }, e.prototype.traceHookInvocation = function(e, r, n) {
                if (this.enabled(t.Category.HOOK)) {
                    var i = At("traceData.hookType")(n) || "internal",
                        o = At("traceData.context.state.name")(n) || At("traceData.context")(n) || "unknown",
                        a = z(e.registeredHook.callback);
                    console.log(Me(r) + ":   Hook -> " + i + " context: " + o + ", " + B(200, a))
                }
            }, e.prototype.traceHookResult = function(e, r, n) { this.enabled(t.Category.HOOK) && console.log(Me(r) + ":   <- Hook returned: " + B(200, Q(e))) }, e.prototype.traceResolvePath = function(e, r, n) { this.enabled(t.Category.RESOLVE) && console.log(Me(n) + ":         Resolving " + e + " (" + r + ")") }, e.prototype.traceResolvableResolved = function(e, r) { this.enabled(t.Category.RESOLVE) && console.log(Me(r) + ":               <- Resolved  " + e + " to: " + B(200, Q(e.data))) }, e.prototype.traceError = function(e, r) { this.enabled(t.Category.TRANSITION) && console.log(Me(r) + ": <- Rejected " + Q(r) + ", reason: " + e) }, e.prototype.traceSuccess = function(e, r) { this.enabled(t.Category.TRANSITION) && console.log(Me(r) + ": <- Success  " + Q(r) + ", final state: " + e.name) }, e.prototype.traceUIViewEvent = function(e, r, n) { void 0 === n && (n = ""), this.enabled(t.Category.UIVIEW) && console.log("ui-view: " + G(30, e) + " " + V(r) + n) }, e.prototype.traceUIViewConfigUpdated = function(e, r) { this.enabled(t.Category.UIVIEW) && this.traceUIViewEvent("Updating", e, " with ViewConfig from context='" + r + "'") }, e.prototype.traceUIViewFill = function(e, r) { this.enabled(t.Category.UIVIEW) && this.traceUIViewEvent("Fill", e, " with: " + B(200, r)) }, e.prototype.traceViewServiceEvent = function(e, r) { this.enabled(t.Category.VIEWCONFIG) && console.log("VIEWCONFIG: " + e + " " + Fe(r)) }, e.prototype.traceViewServiceUIViewEvent = function(e, r) { this.enabled(t.Category.VIEWCONFIG) && console.log("VIEWCONFIG: " + e + " " + V(r)) }, e
        }(),
        Ge = new Be;
    ! function(t) { t[t.CREATE = 0] = "CREATE", t[t.BEFORE = 1] = "BEFORE", t[t.RUN = 2] = "RUN", t[t.SUCCESS = 3] = "SUCCESS", t[t.ERROR = 4] = "ERROR" }(t.TransitionHookPhase || (t.TransitionHookPhase = {})),
    function(t) { t[t.TRANSITION = 0] = "TRANSITION", t[t.STATE = 1] = "STATE" }(t.TransitionHookScope || (t.TransitionHookScope = {}));
    var We = function() {
        function t(t, e, r, n) { void 0 === n && (n = {}), this._identifier = t, this._definition = e, this._options = n, this._params = r || {} }
        return t.prototype.name = function() {
            return this._definition && this._definition.name || this._identifier
        }, t.prototype.identifier = function() {
            return this._identifier
        }, t.prototype.params = function() {
            return this._params
        }, t.prototype.$state = function() {
            return this._definition
        }, t.prototype.state = function() {
            return this._definition && this._definition.self
        }, t.prototype.options = function() {
            return this._options
        }, t.prototype.exists = function() {
            return !(!this._definition || !this._definition.self)
        }, t.prototype.valid = function() {
            return !this.error()
        }, t.prototype.error = function() {
            var t = this.options().relative;
            if (!this._definition && t) {
                var e = t.name ? t.name : t;
                return "Could not resolve '" + this.name() + "' from state '" + e + "'"
            }
            return this._definition ? this._definition.self ? void 0 : "State '" + this.name() + "' has an invalid definition" : "No such state '" + this.name() + "'"
        }, t.prototype.toString = function() {
            return "'" + this.name() + "'" + fe(this.params())
        }, t
    }();
    We.isDef = function(t) {
        return t && t.state && (Zt(t.state) || Zt(t.state.name))
    };
    var ze = { current: l, transition: null, traceData: {}, bind: null },
        Je = function() {
            function e(e, r, n, i) {
                var o = this;
                this.transition = e, this.stateContext = r, this.registeredHook = n, this.options = i, this.isSuperseded = function() {
                    return o.type.hookPhase === t.TransitionHookPhase.RUN && !o.options.transition.isActive()
                }, this.options = m(i, ze), this.type = n.eventType
            }
            return e.prototype.logError = function(t) { this.transition.router.stateService.defaultErrorHandler()(t) }, e.prototype.invokeHook = function() {
                var t = this,
                    e = this.registeredHook;
                if (!e._deregistered) {
                    var r = this.getNotCurrentRejection();
                    if (r) return r;
                    var n = this.options;
                    Ge.traceHookInvocation(this, this.transition, n);
                    var i = function(t) {
                            return Ne.normalize(t).toPromise()
                        },
                        o = function(r) {
                            return e.eventType.getErrorHandler(t)(r)
                        },
                        a = function(r) {
                            return e.eventType.getResultHandler(t)(r)
                        };
                    try {
                        var u = function() {
                            return e.callback.call(n.bind, t.transition, t.stateContext)
                        }();
                        return !this.type.synchronous && ie(u) ? u.catch(i).then(a, o) : a(u)
                    } catch (t) {
                        return o(Ne.normalize(t))
                    }
                }
            }, e.prototype.handleHookResult = function(t) {
                var e = this,
                    r = this.getNotCurrentRejection();
                return r || (ie(t) ? t.then(function(t) {
                    return e.handleHookResult(t)
                }) : (Ge.traceHookResult(t, this.transition, this.options), !1 === t ? Ne.aborted("Hook aborted transition").toPromise() : Nt(We)(t) ? Ne.redirected(t).toPromise() : void 0))
            }, e.prototype.getNotCurrentRejection = function() {
                var t = this.transition.router;
                return t._disposed ? Ne.aborted("UIRouter instance #" + t.$id + " has been stopped (disposed)").toPromise() : this.transition._aborted ? Ne.aborted().toPromise() : this.isSuperseded() ? Ne.superseded(this.options.current()).toPromise() : void 0
            }, e.prototype.toString = function() {
                var t = this,
                    e = t.options,
                    r = t.registeredHook;
                return (At("traceData.hookType")(e) || "internal") + " context: " + (At("traceData.context.state.name")(e) || At("traceData.context")(e) || "unknown") + ", " + B(200, J(r.callback))
            }, e.chain = function(t, e) {
                var r = function(t, e) {
                    return t.then(function() {
                        return e.invokeHook()
                    })
                };
                return t.reduce(r, e || ae.$q.when())
            }, e.invokeHooks = function(t, r) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n].invokeHook();
                    if (ie(i)) {
                        var o = t.slice(n + 1);
                        return e.chain(o, i).then(r)
                    }
                }
                return r()
            }, e.runAllHooks = function(t) {
                t.forEach(function(t) {
                    return t.invokeHook()
                })
            }, e
        }();
    Je.HANDLE_RESULT = function(t) {
        return function(e) {
            return t.handleHookResult(e)
        }
    }, Je.LOG_REJECTED_RESULT = function(t) {
        return function(e) {
            ie(e) && e.catch(function(e) {
                return t.logError(Ne.normalize(e))
            })
        }
    }, Je.LOG_ERROR = function(t) {
        return function(e) {
            return t.logError(e)
        }
    }, Je.REJECT_ERROR = function(t) {
        return function(t) {
            return He(t)
        }
    }, Je.THROW_ERROR = function(t) {
        return function(t) {
            throw t
        }
    };
    var Qe = function() {
            function e(t, e, r, n, i) { void 0 === i && (i = {}), this.tranSvc = t, this.eventType = e, this.callback = r, this.matchCriteria = n, this.priority = i.priority || 0, this.bind = i.bind || null, this._deregistered = !1 }
            return e.prototype._matchingNodes = function(t, e) {
                if (!0 === e) return t;
                var r = t.filter(function(t) {
                    return H(t.state, e)
                });
                return r.length ? r : null
            }, e.prototype._getDefaultMatchCriteria = function() {
                return b(this.tranSvc._pluginapi._getPathTypes(), function() {
                    return !0
                })
            }, e.prototype._getMatchingNodes = function(e) {
                var r = this,
                    n = pe(this._getDefaultMatchCriteria(), this.matchCriteria);
                return Se(this.tranSvc._pluginapi._getPathTypes()).reduce(function(i, o) {
                    var a = o.scope === t.TransitionHookScope.STATE,
                        u = e[o.name] || [],
                        s = a ? u : [P(u)];
                    return i[o.name] = r._matchingNodes(s, n[o.name]), i
                }, {})
            }, e.prototype.matches = function(t) {
                var e = this._getMatchingNodes(t);
                return Se(e).every(f) ? e : null
            }, e
        }(),
        Ke = function() {
            function e(t) { this.transition = t }
            return e.prototype.buildHooksForPhase = function(t) {
                var e = this;
                return this.transition.router.transitionService._pluginapi._getEvents(t).map(function(t) {
                    return e.buildHooks(t)
                }).reduce(Ee, []).filter(f)
            }, e.prototype.buildHooks = function(e) {
                var r = this.transition,
                    n = r.treeChanges(),
                    i = this.getMatchingHooks(e, n);
                if (!i) return [];
                var o = { transition: r, current: r.options().current },
                    a = function(i) {
                        return i.matches(n)[e.criteriaMatchPath.name].map(function(n) {
                            var a = pe({ bind: i.bind, traceData: { hookType: e.name, context: n } }, o),
                                u = e.criteriaMatchPath.scope === t.TransitionHookScope.STATE ? n.state.self : null,
                                s = new Je(r, u, i, a);
                            return { hook: i, node: n, transitionHook: s }
                        })
                    };
                return i.map(a).reduce(Ee, []).sort(D(e.reverseSort)).map(function(t) {
                    return t.transitionHook
                })
            }, e.prototype.getMatchingHooks = function(e, r) {
                var n = e.hookPhase === t.TransitionHookPhase.CREATE,
                    i = this.transition.router.transitionService;
                return (n ? [i] : [this.transition, i]).map(function(t) {
                    return t.getHooks(e.name)
                }).filter(Oe(te, "broken event named: " + e.name)).reduce(Ee, []).filter(function(t) {
                    return t.matches(r)
                })
            }, e
        }(),
        Ye = function() {
            function t(t) { this.pattern = /.*/, this.inherit = !0, pe(this, t) }
            return t.prototype.is = function(t, e) {
                return !0
            }, t.prototype.encode = function(t, e) {
                return t
            }, t.prototype.decode = function(t, e) {
                return t
            }, t.prototype.equals = function(t, e) {
                return t == e
            }, t.prototype.$subPattern = function() {
                var t = this.pattern.toString();
                return t.substr(1, t.length - 2)
            }, t.prototype.toString = function() {
                return "{ParamType:" + this.name + "}"
            }, t.prototype.$normalize = function(t) {
                return this.is(t) ? t : this.decode(t)
            }, t.prototype.$asArray = function(t, e) {
                if (!t) return this;
                if ("auto" === t && !e) throw new Error("'auto' array mode is for query parameters only");
                return new N(this, t)
            }, t
        }(),
        Ze = Object.prototype.hasOwnProperty,
        Xe = function(t) {
            return 0 === ["value", "type", "squash", "array", "dynamic"].filter(Ze.bind(t || {})).length
        };
    ! function(t) { t[t.PATH = 0] = "PATH", t[t.SEARCH = 1] = "SEARCH", t[t.CONFIG = 2] = "CONFIG" }(t.DefType || (t.DefType = {}));
    var tr = function() {
            function e(e, r, n, i, o) {
                n = F(n), r = U(n, r, i, e, o.paramTypes);
                var a = function() {
                    var r = { array: i === t.DefType.SEARCH && "auto" },
                        o = e.match(/\[\]$/) ? { array: !0 } : {};
                    return pe(r, o, n).array
                }();
                r = a ? r.$asArray(a, i === t.DefType.SEARCH) : r;
                var u = void 0 !== n.value || i === t.DefType.SEARCH,
                    s = zt(n.dynamic) ? !!n.dynamic : !!r.dynamic,
                    c = zt(n.raw) ? !!n.raw : !!r.raw,
                    f = L(n, u, o.defaultSquashPolicy()),
                    l = M(n, a, u, f),
                    h = zt(n.inherit) ? !!n.inherit : !!r.inherit;
                pe(this, { id: e, type: r, location: i, isOptional: u, dynamic: s, raw: c, squash: f, replace: l, inherit: h, array: a, config: n })
            }
            return e.prototype.isDefaultValue = function(t) {
                return this.isOptional && this.type.equals(this.value(), t)
            }, e.prototype.value = function(t) {
                var e = this;
                return t = function(t) {
                    for (var r = 0, n = e.replace; r < n.length; r++) {
                        var i = n[r];
                        if (i.from === t) return i.to
                    }
                    return t
                }(t), Wt(t) ? function() {
                    if (e._defaultValueCache) return e._defaultValueCache.defaultValue;
                    if (!ae.$injector) throw new Error("Injectable functions cannot be called at configuration time");
                    var t = ae.$injector.invoke(e.config.$$fn);
                    if (null !== t && void 0 !== t && !e.type.is(t)) throw new Error("Default value (" + t + ") for parameter '" + e.id + "' is not an instance of ParamType (" + e.type.name + ")");
                    return e.config.$$fn.__cacheable && (e._defaultValueCache = { defaultValue: t }), t
                }() : this.type.$normalize(t)
            }, e.prototype.isSearch = function() {
                return this.location === t.DefType.SEARCH
            }, e.prototype.validates = function(t) {
                if ((Wt(t) || null === t) && this.isOptional) return !0;
                var e = this.type.$normalize(t);
                if (!this.type.is(e)) return !1;
                var r = this.type.encode(e);
                return !(Zt(r) && !this.type.pattern.exec(r))
            }, e.prototype.toString = function() {
                return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}"
            }, e.values = function(t, e) {
                void 0 === e && (e = {});
                for (var r = {}, n = 0, i = t; n < i.length; n++) {
                    var o = i[n];
                    r[o.id] = o.value(e[o.id])
                }
                return r
            }, e.changed = function(t, e, r) {
                return void 0 === e && (e = {}), void 0 === r && (r = {}), t.filter(function(t) {
                    return !t.type.equals(e[t.id], r[t.id])
                })
            }, e.equals = function(t, r, n) {
                return void 0 === r && (r = {}), void 0 === n && (n = {}), 0 === e.changed(t, r, n).length
            }, e.validates = function(t, e) {
                return void 0 === e && (e = {}), t.map(function(t) {
                    return t.validates(e[t.id])
                }).reduce(be, !0)
            }, e
        }(),
        er = function() {
            function t(e) {
                if (e instanceof t) {
                    var r = e;
                    this.state = r.state, this.paramSchema = r.paramSchema.slice(), this.paramValues = pe({}, r.paramValues), this.resolvables = r.resolvables.slice(), this.views = r.views && r.views.slice()
                } else {
                    var n = e;
                    this.state = n, this.paramSchema = n.parameters({ inherit: !1 }), this.paramValues = {}, this.resolvables = n.resolvables.map(function(t) {
                        return t.clone()
                    })
                }
            }
            return t.prototype.applyRawParams = function(t) {
                var e = function(e) {
                    return [e.id, e.value(t[e.id])]
                };
                return this.paramValues = this.paramSchema.reduce(function(t, r) {
                    return C(t, e(r))
                }, {}), this
            }, t.prototype.parameter = function(t) {
                return S(this.paramSchema, Vt("id", t))
            }, t.prototype.equals = function(t, e) {
                var r = this.diff(t, e);
                return r && 0 === r.length
            }, t.prototype.diff = function(t, e) {
                if (this.state !== t.state) return !1;
                var r = e ? e(this) : this.paramSchema;
                return tr.changed(r, this.paramValues, t.paramValues)
            }, t.clone = function(e) {
                return new t(e)
            }, t
        }(),
        rr = function() {
            function t() {}
            return t.makeTargetState = function(t) {
                var e = P(t).state;
                return new We(e, e, t.map(It("paramValues")).reduce(_e, {}))
            }, t.buildPath = function(t) {
                var e = t.params();
                return t.$state().path.map(function(t) {
                    return new er(t).applyRawParams(e)
                })
            }, t.buildToPath = function(e, r) {
                var n = t.buildPath(r);
                return r.options().inherit ? t.inheritParams(e, n, Object.keys(r.params())) : n
            }, t.applyViewConfigs = function(e, r, n) {
                r.filter(function(t) {
                    return me(n, t.state)
                }).forEach(function(n) {
                    var i = Se(n.state.views || {}),
                        o = t.subPath(r, function(t) {
                            return t === n
                        }),
                        a = i.map(function(t) {
                            return e.createViewConfig(o, t)
                        });
                    n.views = a.reduce(Ee, [])
                })
            }, t.inheritParams = function(t, e, r) {
                function n(t, e) {
                    var r = S(t, Vt("state", e));
                    return pe({}, r && r.paramValues)
                }

                function i(e) {
                    var i = pe({}, e && e.paramValues),
                        a = g(i, r);
                    i = w(i, r);
                    var u = w(n(t, e.state) || {}, o),
                        s = pe(i, u, a);
                    return new er(e.state).applyRawParams(s)
                }
                void 0 === r && (r = []);
                var o = t.map(function(t) {
                    return t.paramSchema
                }).reduce(Ee, []).filter(function(t) {
                    return !t.inherit
                }).map(It("id"));
                return e.map(i)
            }, t.treeChanges = function(e, r, n) {
                function i(t, e) {
                    var n = er.clone(t);
                    return n.paramValues = r[e].paramValues, n
                }
                for (var o = 0, a = Math.min(e.length, r.length); o < a && e[o].state !== n && function(e, r) {
                        return e.equals(r, t.nonDynamicParams)
                    }(e[o], r[o]);) o++;
                var u, s, c, f, l;
                u = e, s = u.slice(0, o), c = u.slice(o);
                var h = s.map(i);
                return f = r.slice(o), l = h.concat(f), { from: u, to: l, retained: s, exiting: c, entering: f }
            }, t.matching = function(t, e, r) {
                var n = !1;
                return T(t, e).reduce(function(t, e) {
                    var i = e[0],
                        o = e[1];
                    return n = n || !i.equals(o, r), n ? t : t.concat(i)
                }, [])
            }, t.equals = function(e, r, n) {
                return e.length === r.length && t.matching(e, r, n).length === e.length
            }, t.subPath = function(t, e) {
                var r = S(t, e),
                    n = t.indexOf(r);
                return -1 === n ? void 0 : t.slice(0, n + 1)
            }, t
        }();
    rr.nonDynamicParams = function(t) {
        return t.state.parameters({ inherit: !1 }).filter(function(t) {
            return !t.dynamic
        })
    }, rr.paramValues = function(t) {
        return t.reduce(function(t, e) {
            return pe(t, e.paramValues)
        }, {})
    };
    var nr = { when: "LAZY", async: "WAIT" },
        ir = function() {
            function t(e, r, n, i, o) {
                if (this.resolved = !1, this.promise = void 0, e instanceof t) pe(this, e);
                else if (Kt(r)) {
                    if (null == e || void 0 == e) throw new Error("new Resolvable(): token argument is required");
                    if (!Kt(r)) throw new Error("new Resolvable(): resolveFn argument must be a function");
                    this.token = e, this.policy = i, this.resolveFn = r, this.deps = n || [], this.data = o, this.resolved = void 0 !== o, this.promise = this.resolved ? ae.$q.when(this.data) : void 0
                } else if (Xt(e) && e.token && Kt(e.resolveFn)) {
                    var a = e;
                    return new t(a.token, a.resolveFn, a.deps, a.policy, a.data)
                }
            }
            return t.prototype.getPolicy = function(t) {
                var e = this.policy || {},
                    r = t && t.resolvePolicy || {};
                return { when: e.when || r.when || nr.when, async: e.async || r.async || nr.async }
            }, t.prototype.resolve = function(t, e) {
                var r = this,
                    n = ae.$q,
                    i = function() {
                        return n.all(t.getDependencies(r).map(function(r) {
                            return r.get(t, e)
                        }))
                    },
                    o = function(t) {
                        return r.resolveFn.apply(null, t)
                    },
                    a = function(t) {
                        var e = t.cache(1);
                        return e.take(1).toPromise().then(function() {
                            return e
                        })
                    },
                    u = t.findNode(this),
                    s = u && u.state,
                    c = "RXWAIT" === this.getPolicy(s).async ? a : f,
                    l = function(t) {
                        return r.data = t, r.resolved = !0, Ge.traceResolvableResolved(r, e), r.data
                    };
                return this.promise = n.when().then(i).then(o).then(c).then(l)
            }, t.prototype.get = function(t, e) {
                return this.promise || this.resolve(t, e)
            }, t.prototype.toString = function() {
                return "Resolvable(token: " + Q(this.token) + ", requires: [" + this.deps.map(Q) + "])"
            }, t.prototype.clone = function() {
                return new t(this)
            }, t
        }();
    ir.fromData = function(t, e) {
        return new ir(t, function() {
            return e
        }, null, null, e)
    };
    var or = { when: { LAZY: "LAZY", EAGER: "EAGER" }, async: { WAIT: "WAIT", NOWAIT: "NOWAIT", RXWAIT: "RXWAIT" } },
        ar = or.when,
        ur = [ar.EAGER, ar.LAZY],
        sr = [ar.EAGER],
        cr = "Native Injector",
        fr = function() {
            function t(t) { this._path = t }
            return t.prototype.getTokens = function() {
                return this._path.reduce(function(t, e) {
                    return t.concat(e.resolvables.map(function(t) {
                        return t.token
                    }))
                }, []).reduce(Ce, [])
            }, t.prototype.getResolvable = function(t) {
                return P(this._path.map(function(t) {
                    return t.resolvables
                }).reduce(Ee, []).filter(function(e) {
                    return e.token === t
                }))
            }, t.prototype.getPolicy = function(t) {
                var e = this.findNode(t);
                return t.getPolicy(e.state)
            }, t.prototype.subContext = function(e) {
                return new t(rr.subPath(this._path, function(t) {
                    return t.state === e
                }))
            }, t.prototype.addResolvables = function(t, e) {
                var r = S(this._path, Vt("state", e)),
                    n = t.map(function(t) {
                        return t.token
                    });
                r.resolvables = r.resolvables.filter(function(t) {
                    return -1 === n.indexOf(t.token)
                }).concat(t)
            }, t.prototype.resolvePath = function(t, e) {
                var r = this;
                void 0 === t && (t = "LAZY");
                var n = me(ur, t) ? t : "LAZY",
                    i = n === or.when.EAGER ? sr : ur;
                Ge.traceResolvePath(this._path, t, e);
                var o = function(t, e) {
                        return function(n) {
                            return me(t, r.getPolicy(n)[e])
                        }
                    },
                    a = this._path.reduce(function(t, n) {
                        var a = n.resolvables.filter(o(i, "when")),
                            u = a.filter(o(["NOWAIT"], "async")),
                            s = a.filter(Ht(o(["NOWAIT"], "async"))),
                            c = r.subContext(n.state),
                            f = function(t) {
                                return t.get(c, e).then(function(e) {
                                    return { token: t.token, value: e }
                                })
                            };
                        return u.forEach(f), t.concat(s.map(f))
                    }, []);
                return ae.$q.all(a)
            }, t.prototype.injector = function() {
                return this._injector || (this._injector = new lr(this))
            }, t.prototype.findNode = function(t) {
                return S(this._path, function(e) {
                    return me(e.resolvables, t)
                })
            }, t.prototype.getDependencies = function(t) {
                var e = this,
                    r = this.findNode(t),
                    n = rr.subPath(this._path, function(t) {
                        return t === r
                    }) || this._path,
                    i = n.reduce(function(t, e) {
                        return t.concat(e.resolvables)
                    }, []).filter(function(e) {
                        return e !== t
                    }),
                    o = function(t) {
                        var r = i.filter(function(e) {
                            return e.token === t
                        });
                        if (r.length) return P(r);
                        var n = e.injector().getNative(t);
                        if (!n) throw new Error("Could not find Dependency Injection token: " + Q(t));
                        return new ir(t, function() {
                            return n
                        }, [], n)
                    };
                return t.deps.map(o)
            }, t
        }(),
        lr = function() {
            function t(t) { this.context = t, this.native = this.get(cr) || ae.$injector }
            return t.prototype.get = function(t) {
                var e = this.context.getResolvable(t);
                if (e) {
                    if ("NOWAIT" === this.context.getPolicy(e).async) return e.get(this.context);
                    if (!e.resolved) throw new Error("Resolvable async .get() not complete:" + Q(e.token));
                    return e.data
                }
                return this.native && this.native.get(t)
            }, t.prototype.getAsync = function(t) {
                var e = this.context.getResolvable(t);
                return e ? e.get(this.context) : ae.$q.when(this.native.get(t))
            }, t.prototype.getNative = function(t) {
                return this.native && this.native.get(t)
            }, t
        }(),
        hr = It("self"),
        pr = function() {
            function e(e, r, n) {
                var i = this;
                if (this._deferred = ae.$q.defer(), this.promise = this._deferred.promise, this._registeredHooks = {}, this._hookBuilder = new Ke(this), this.isActive = function() {
                        return i.router.globals.transition === i
                    }, this.router = n, this._targetState = r, !r.valid()) throw new Error(r.error());
                this._options = pe({ current: Ut(this) }, r.options()), this.$id = n.transitionService._transitionCount++;
                var o = rr.buildToPath(e, r);
                this._treeChanges = rr.treeChanges(e, o, this._options.reloadState), this.createTransitionHookRegFns();
                var a = this._hookBuilder.buildHooksForPhase(t.TransitionHookPhase.CREATE);
                Je.invokeHooks(a, function() {
                    return null
                }), this.applyViewConfigs(n)
            }
            return e.prototype.onBefore = function(t, e, r) {}, e.prototype.onStart = function(t, e, r) {}, e.prototype.onExit = function(t, e, r) {}, e.prototype.onRetain = function(t, e, r) {}, e.prototype.onEnter = function(t, e, r) {}, e.prototype.onFinish = function(t, e, r) {}, e.prototype.onSuccess = function(t, e, r) {}, e.prototype.onError = function(t, e, r) {}, e.prototype.createTransitionHookRegFns = function() {
                var e = this;
                this.router.transitionService._pluginapi._getEvents().filter(function(e) {
                    return e.hookPhase !== t.TransitionHookPhase.CREATE
                }).forEach(function(t) {
                    return q(e, e.router.transitionService, t)
                })
            }, e.prototype.getHooks = function(t) {
                return this._registeredHooks[t]
            }, e.prototype.applyViewConfigs = function(t) {
                var e = this._treeChanges.entering.map(function(t) {
                    return t.state
                });
                rr.applyViewConfigs(t.transitionService.$view, this._treeChanges.to, e)
            }, e.prototype.$from = function() {
                return P(this._treeChanges.from).state
            }, e.prototype.$to = function() {
                return P(this._treeChanges.to).state
            }, e.prototype.from = function() {
                return this.$from().self
            }, e.prototype.to = function() {
                return this.$to().self
            }, e.prototype.targetState = function() {
                return this._targetState
            }, e.prototype.is = function(t) {
                return t instanceof e ? this.is({ to: t.$to().name, from: t.$from().name }) : !(t.to && !H(this.$to(), t.to) || t.from && !H(this.$from(), t.from))
            }, e.prototype.params = function(t) {
                return void 0 === t && (t = "to"), Object.freeze(this._treeChanges[t].map(It("paramValues")).reduce(_e, {}))
            }, e.prototype.injector = function(t, e) {
                void 0 === e && (e = "to");
                var r = this._treeChanges[e];
                return t && (r = rr.subPath(r, function(e) {
                    return e.state === t || e.state.name === t
                })), new fr(r).injector()
            }, e.prototype.getResolveTokens = function(t) {
                return void 0 === t && (t = "to"), new fr(this._treeChanges[t]).getTokens()
            }, e.prototype.addResolvable = function(t, e) {
                void 0 === e && (e = ""), t = Nt(ir)(t) ? t : new ir(t);
                var r = "string" == typeof e ? e : e.name,
                    n = this._treeChanges.to,
                    i = S(n, function(t) {
                        return t.state.name === r
                    });
                new fr(n).addResolvables([t], i.state)
            }, e.prototype.redirectedFrom = function() {
                return this._options.redirectedFrom || null
            }, e.prototype.originalTransition = function() {
                var t = this.redirectedFrom();
                return t && t.originalTransition() || this
            }, e.prototype.options = function() {
                return this._options
            }, e.prototype.entering = function() {
                return b(this._treeChanges.entering, It("state")).map(hr)
            }, e.prototype.exiting = function() {
                return b(this._treeChanges.exiting, It("state")).map(hr).reverse()
            }, e.prototype.retained = function() {
                return b(this._treeChanges.retained, It("state")).map(hr)
            }, e.prototype.views = function(t, e) {
                void 0 === t && (t = "entering");
                var r = this._treeChanges[t];
                return r = e ? r.filter(Vt("state", e)) : r, r.map(It("views")).filter(f).reduce(Ee, [])
            }, e.prototype.treeChanges = function(t) {
                return t ? this._treeChanges[t] : this._treeChanges
            }, e.prototype.redirect = function(t) {
                for (var e = 1, r = this; null != (r = r.redirectedFrom());)
                    if (++e > 20) throw new Error("Too many consecutive Transition redirects (20+)");
                var n = { redirectedFrom: this, source: "redirect" };
                "url" === this.options().source && !1 !== t.options().location && (n.location = "replace");
                var i = pe({}, this.options(), t.options(), n);
                t = new We(t.identifier(), t.$state(), t.params(), i);
                var o = this.router.transitionService.create(this._treeChanges.from, t),
                    a = this._treeChanges.entering,
                    u = o._treeChanges.entering;
                return rr.matching(u, a, rr.nonDynamicParams).filter(Ht(function(t) {
                    return function(e) {
                        return t && e.state.includes[t.name]
                    }
                }(t.options().reloadState))).forEach(function(t, e) { t.resolvables = a[e].resolvables }), o
            }, e.prototype._changedParams = function() {
                var t = this._treeChanges;
                if (!this._options.reload && !t.exiting.length && !t.entering.length && t.to.length === t.from.length) {
                    if (!T(t.to, t.from).map(function(t) {
                            return t[0].state !== t[1].state
                        }).reduce(Re, !1)) {
                        var e = t.to.map(function(t) {
                                return t.paramSchema
                            }),
                            r = [t.to, t.from].map(function(t) {
                                return t.map(function(t) {
                                    return t.paramValues
                                })
                            });
                        return T(e, r[0], r[1]).map(function(t) {
                            var e = t[0],
                                r = t[1],
                                n = t[2];
                            return tr.changed(e, r, n)
                        }).reduce(Ee, [])
                    }
                }
            }, e.prototype.dynamic = function() {
                var t = this._changedParams();
                return !!t && t.map(function(t) {
                    return t.dynamic
                }).reduce(Re, !1)
            }, e.prototype.ignored = function() {
                return !!this._ignoredReason()
            }, e.prototype._ignoredReason = function() {
                var t = this.router.globals.transition,
                    e = this._options.reloadState,
                    r = function(t, r) {
                        if (t.length !== r.length) return !1;
                        var n = rr.matching(t, r);
                        return t.length === n.filter(function(t) {
                            return !e || !t.state.includes[e.name]
                        }).length
                    },
                    n = this.treeChanges(),
                    i = t && t.treeChanges();
                return i && r(i.to, n.to) && r(i.exiting, n.exiting) ? "SameAsPending" : 0 === n.exiting.length && 0 === n.entering.length && r(n.from, n.to) ? "SameAsCurrent" : void 0
            }, e.prototype.run = function() {
                var e = this,
                    r = Je.runAllHooks,
                    n = function(t) {
                        return e._hookBuilder.buildHooksForPhase(t)
                    },
                    i = function() { Ge.traceSuccess(e.$to(), e), e.success = !0, e._deferred.resolve(e.to()), r(n(t.TransitionHookPhase.SUCCESS)) },
                    o = function(i) { Ge.traceError(i, e), e.success = !1, e._deferred.reject(i), e._error = i, r(n(t.TransitionHookPhase.ERROR)) },
                    a = function() {
                        var e = n(t.TransitionHookPhase.RUN),
                            r = function() {
                                return ae.$q.when(void 0)
                            };
                        return Je.invokeHooks(e, r)
                    },
                    u = function() {
                        var t = e.router.globals;
                        return t.lastStartedTransitionId = e.$id, t.transition = e, t.transitionHistory.enqueue(e), Ge.traceTransitionStart(e), ae.$q.when(void 0)
                    },
                    s = n(t.TransitionHookPhase.BEFORE);
                return Je.invokeHooks(s, u).then(a).then(i, o), this.promise
            }, e.prototype.valid = function() {
                return !this.error() || void 0 !== this.success
            }, e.prototype.abort = function() { Wt(this.success) && (this._aborted = !0) }, e.prototype.error = function() {
                var t = this.$to();
                return t.self.abstract ? "Cannot transition to abstract state '" + t.name + "'" : tr.validates(t.parameters(), this.params()) ? !1 === this.success ? this._error : void 0 : "Param values not valid for state '" + t.name + "'"
            }, e.prototype.toString = function() {
                var t = this.from(),
                    e = this.to(),
                    r = function(t) {
                        return null !== t["#"] && void 0 !== t["#"] ? t : w(t, ["#"])
                    };
                return "Transition#" + this.$id + "( '" + (Xt(t) ? t.name : t) + "'" + fe(r(this._treeChanges.from.map(It("paramValues")).reduce(_e, {}))) + " -> " + (this.valid() ? "" : "(X) ") + "'" + (Xt(e) ? e.name : e) + "'" + fe(r(this.params())) + " )"
            }, e
        }();
    pr.diToken = pr;
    var dr = null,
        vr = function(t) {
            var e = Ne.isRejectionPromise;
            return (dr = dr || s([
                [Ht(zt), Ut("undefined")],
                [Jt, Ut("null")],
                [ie, Ut("[Promise]")],
                [e, function(t) {
                    return t._transitionRejection.toString()
                }],
                [Nt(Ne), u("toString")],
                [Nt(pr), u("toString")],
                [Nt(ir), u("toString")],
                [c, z],
                [Ut(!0), f]
            ]))(t)
        },
        mr = function(t) {
            return function(e) {
                if (!e) return ["", ""];
                var r = e.indexOf(t);
                return -1 === r ? [e, ""] : [e.substr(0, r), e.substr(r + 1)]
            }
        },
        yr = function() {
            function t() {
                this.enqueue = !0, this.typeQueue = [], this.defaultTypes = g(t.prototype, ["hash", "string", "query", "path", "int", "bool", "date", "json", "any"]);
                var e = function(t, e) {
                    return new Ye(pe({ name: e }, t))
                };
                this.types = ve(b(this.defaultTypes, e), {})
            }
            return t.prototype.dispose = function() { this.types = {} }, t.prototype.type = function(t, e, r) {
                if (!zt(e)) return this.types[t];
                if (this.types.hasOwnProperty(t)) throw new Error("A type named '" + t + "' has already been defined.");
                return this.types[t] = new Ye(pe({ name: t }, e)), r && (this.typeQueue.push({ name: t, def: r }), this.enqueue || this._flushTypeQueue()), this
            }, t.prototype._flushTypeQueue = function() {
                for (; this.typeQueue.length;) {
                    var t = this.typeQueue.shift();
                    if (t.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    pe(this.types[t.name], ae.$injector.invoke(t.def))
                }
            }, t
        }();
    ! function() {
        var t = function(t) {
            var e = function(t) {
                    return null != t ? t.toString() : t
                },
                r = {
                    encode: e,
                    decode: e,
                    is: Nt(String),
                    pattern: /.*/,
                    equals: function(t, e) {
                        return t == e
                    }
                };
            return pe({}, r, t)
        };
        pe(yr.prototype, {
            string: t({}),
            path: t({ pattern: /[^\/]*/ }),
            query: t({}),
            hash: t({ inherit: !1 }),
            int: t({
                decode: function(t) {
                    return parseInt(t, 10)
                },
                is: function(t) {
                    return !Qt(t) && this.decode(t.toString()) === t
                },
                pattern: /-?\d+/
            }),
            bool: t({
                encode: function(t) {
                    return t && 1 || 0
                },
                decode: function(t) {
                    return 0 !== parseInt(t, 10)
                },
                is: Nt(Boolean),
                pattern: /0|1/
            }),
            date: t({
                encode: function(t) {
                    return this.is(t) ? [t.getFullYear(), ("0" + (t.getMonth() + 1)).slice(-2), ("0" + t.getDate()).slice(-2)].join("-") : void 0
                },
                decode: function(t) {
                    if (this.is(t)) return t;
                    var e = this.capture.exec(t);
                    return e ? new Date(e[1], e[2] - 1, e[3]) : void 0
                },
                is: function(t) {
                    return t instanceof Date && !isNaN(t.valueOf())
                },
                equals: function(t, e) {
                    return ["getFullYear", "getMonth", "getDate"].reduce(function(r, n) {
                        return r && t[n]() === e[n]()
                    }, !0)
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            }),
            json: t({ encode: fe, decode: ce, is: Nt(Object), equals: de, pattern: /[^\/]*/ }),
            any: t({
                encode: f,
                decode: f,
                is: function() {
                    return !0
                },
                equals: de
            })
        })
    }();
    var gr = function() {
            function t(t) { void 0 === t && (t = {}), pe(this, t) }
            return t.prototype.$inherit = function(t, e, r) {
                var n, i = y(e, r),
                    o = {},
                    a = [];
                for (var u in i)
                    if (i[u] && i[u].params && (n = Object.keys(i[u].params), n.length))
                        for (var s in n) a.indexOf(n[s]) >= 0 || (a.push(n[s]), o[n[s]] = this[n[s]]);
                return pe({}, o, t)
            }, t
        }(),
        wr = function(t) {
            if (!Zt(t)) return !1;
            var e = "^" === t.charAt(0);
            return { val: e ? t.substring(1) : t, root: e }
        },
        _r = function(t, e) {
            return function(r) {
                var n = r;
                n && n.url && n.name && n.name.match(/\.\*\*$/) && (n.url += "{remainder:any}");
                var i = wr(n.url),
                    o = r.parent,
                    a = i ? t.compile(i.val, {
                        params: r.params || {},
                        paramMap: function(t, e) {
                            return !1 === n.reloadOnSearch && e && (t = pe(t || {}, { dynamic: !0 })), t
                        }
                    }) : n.url;
                if (!a) return null;
                if (!t.isMatcher(a)) throw new Error("Invalid url '" + a + "' in state '" + r + "'");
                return i && i.root ? a : (o && o.navigable || e()).url.append(a)
            }
        },
        $r = function(t) {
            return function(e) {
                return !t(e) && e.url ? e : e.parent ? e.parent.navigable : null
            }
        },
        Sr = function(t) {
            return function(e) {
                var r = function(e, r) {
                        return t.fromConfig(r, null, e)
                    },
                    n = e.url && e.url.parameters({ inherit: !1 }) || [],
                    i = Se($e(w(e.params || {}, n.map(It("id"))), r));
                return n.concat(i).map(function(t) {
                    return [t.id, t]
                }).reduce(C, {})
            }
        },
        br = function() {
            function t(t, e) {
                function r(e) {
                    return o(e) ? null : t.find(n.parentName(e)) || i()
                }
                this.matcher = t;
                var n = this,
                    i = function() {
                        return t.find("")
                    },
                    o = function(t) {
                        return "" === t.name
                    };
                this.builders = { name: [Z], self: [X], parent: [r], data: [tt], url: [_r(e, i)], navigable: [$r(o)], params: [Sr(e.paramFactory)], views: [], path: [et], includes: [rt], resolvables: [nt] }
            }
            return t.prototype.builder = function(t, e) {
                var r = this.builders,
                    n = r[t] || [];
                return Zt(t) && !zt(e) ? n.length > 1 ? n : n[0] : Zt(t) && Kt(e) ? (r[t] = n, r[t].push(e), function() {
                    return r[t].splice(r[t].indexOf(e, 1)) && null
                }) : void 0
            }, t.prototype.build = function(t) {
                var e = this,
                    r = e.matcher,
                    n = e.builders,
                    i = this.parentName(t);
                if (i && !r.find(i, void 0, !1)) return null;
                for (var o in n)
                    if (n.hasOwnProperty(o)) {
                        var a = n[o].reduce(function(t, e) {
                            return function(r) {
                                return e(r, t)
                            }
                        }, l);
                        t[o] = a(t)
                    }
                return t
            }, t.prototype.parentName = function(t) {
                var e = t.name || "",
                    r = e.split(".");
                if (r.length > 1) {
                    if (t.parent) throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + e + ")");
                    return "**" === r.pop() && r.pop(), r.join(".")
                }
                return t.parent ? Zt(t.parent) ? t.parent : t.parent.name : ""
            }, t.prototype.name = function(t) {
                var e = t.name;
                if (-1 !== e.indexOf(".") || !t.parent) return e;
                var r = Zt(t.parent) ? t.parent : t.parent.name;
                return r ? r + "." + e : e
            }, t
        }(),
        Rr = function() {
            function t(t) { this._states = t }
            return t.prototype.isRelative = function(t) {
                return t = t || "", 0 === t.indexOf(".") || 0 === t.indexOf("^")
            }, t.prototype.find = function(t, e, r) {
                if (void 0 === r && (r = !0), t || "" === t) {
                    var n = Zt(t),
                        i = n ? t : t.name;
                    this.isRelative(i) && (i = this.resolvePath(i, e));
                    var o = this._states[i];
                    if (o && (n || !(n || o !== t && o.self !== t))) return o;
                    if (n && r) {
                        var a = Se(this._states),
                            u = a.filter(function(t) {
                                return t.__stateObjectCache.nameGlob && t.__stateObjectCache.nameGlob.matches(i)
                            });
                        return u.length > 1 && console.log("stateMatcher.find: Found multiple matches for " + i + " using glob: ", u.map(function(t) {
                            return t.name
                        })), u[0]
                    }
                }
            }, t.prototype.resolvePath = function(t, e) {
                if (!e) throw new Error("No reference point given for path '" + t + "'");
                for (var r = this.find(e), n = t.split("."), i = 0, o = n.length, a = r; i < o; i++)
                    if ("" !== n[i] || 0 !== i) {
                        if ("^" !== n[i]) break;
                        if (!a.parent) throw new Error("Path '" + t + "' not valid for state '" + r.name + "'");
                        a = a.parent
                    } else a = r;
                var u = n.slice(i).join(".");
                return a.name + (a.name && u ? "." : "") + u
            }, t
        }(),
        Er = function() {
            function t(t, e, r, n, i) { this.$registry = t, this.$urlRouter = e, this.states = r, this.builder = n, this.listeners = i, this.queue = [], this.matcher = t.matcher }
            return t.prototype.dispose = function() { this.queue = [] }, t.prototype.register = function(t) {
                var e = this.queue,
                    r = Mt.create(t),
                    n = r.name;
                if (!Zt(n)) throw new Error("State must have a valid name");
                if (this.states.hasOwnProperty(n) || me(e.map(It("name")), n)) throw new Error("State '" + n + "' is already defined");
                return e.push(r), this.flush(), r
            }, t.prototype.flush = function() {
                for (var t = this, e = this, r = e.queue, n = e.states, i = e.builder, o = [], a = [], u = {}, s = function(e) {
                        return t.states.hasOwnProperty(e) && t.states[e]
                    }; r.length > 0;) {
                    var c = r.shift(),
                        f = c.name,
                        l = i.build(c),
                        h = a.indexOf(c);
                    if (l) {
                        var p = s(f);
                        if (p && p.name === f) throw new Error("State '" + f + "' is already defined");
                        var d = s(f + ".**");
                        d && this.$registry.deregister(d), n[f] = c, this.attachRoute(c), h >= 0 && a.splice(h, 1), o.push(c)
                    } else {
                        var v = u[f];
                        if (u[f] = r.length, h >= 0 && v === r.length) return r.push(c), n;
                        h < 0 && a.push(c), r.push(c)
                    }
                }
                return o.length && this.listeners.forEach(function(t) {
                    return t("registered", o.map(function(t) {
                        return t.self
                    }))
                }), n
            }, t.prototype.attachRoute = function(t) {!t.abstract && t.url && this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(t)) }, t
        }(),
        Tr = function() {
            function t(t) { this._router = t, this.states = {}, this.listeners = [], this.matcher = new Rr(this.states), this.builder = new br(this.matcher, t.urlMatcherFactory), this.stateQueue = new Er(this, t.urlRouter, this.states, this.builder, this.listeners), this._registerRoot() }
            return t.prototype._registerRoot = function() {
                var t = { name: "", url: "^", views: null, params: { "#": { value: null, type: "hash", dynamic: !0 } }, abstract: !0 };
                (this._root = this.stateQueue.register(t)).navigable = null
            }, t.prototype.dispose = function() {
                var t = this;
                this.stateQueue.dispose(), this.listeners = [], this.get().forEach(function(e) {
                    return t.get(e) && t.deregister(e)
                })
            }, t.prototype.onStatesChanged = function(t) {
                return this.listeners.push(t),
                    function() { ye(this.listeners)(t) }.bind(this)
            }, t.prototype.root = function() {
                return this._root
            }, t.prototype.register = function(t) {
                return this.stateQueue.register(t)
            }, t.prototype._deregisterTree = function(t) {
                var e = this,
                    r = this.get().map(function(t) {
                        return t.$$state()
                    }),
                    n = function(t) {
                        var e = r.filter(function(e) {
                            return -1 !== t.indexOf(e.parent)
                        });
                        return 0 === e.length ? e : e.concat(n(e))
                    },
                    i = n([t]),
                    o = [t].concat(i).reverse();
                return o.forEach(function(t) {
                    var r = e._router.urlRouter;
                    r.rules().filter(Vt("state", t)).forEach(r.removeRule.bind(r)), delete e.states[t.name]
                }), o
            }, t.prototype.deregister = function(t) {
                var e = this.get(t);
                if (!e) throw new Error("Can't deregister state; not found: " + t);
                var r = this._deregisterTree(e.$$state());
                return this.listeners.forEach(function(t) {
                    return t("deregistered", r.map(function(t) {
                        return t.self
                    }))
                }), r
            }, t.prototype.get = function(t, e) {
                var r = this;
                if (0 === arguments.length) return Object.keys(this.states).map(function(t) {
                    return r.states[t].self
                });
                var n = this.matcher.find(t, e);
                return n && n.self || null
            }, t.prototype.decorator = function(t, e) {
                return this.builder.builder(t, e)
            }, t
        }(),
        Cr = function(t, e, r) {
            return t[e] = t[e] || r()
        },
        Pr = K("/"),
        kr = function() {
            function e(t, r, n, i) {
                var o = this;
                this.config = i, this._cache = { path: [this] }, this._children = [], this._params = [], this._segments = [], this._compiled = [], this.pattern = t, this.config = m(this.config, { params: {}, strict: !0, caseInsensitive: !1, paramMap: f });
                for (var a, u, s, c = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, l = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, h = 0, p = [], d = function(r) {
                        if (!e.nameValidator.test(r)) throw new Error("Invalid parameter name '" + r + "' in pattern '" + t + "'");
                        if (S(o._params, Vt("id", r))) throw new Error("Duplicate parameter name '" + r + "' in pattern '" + t + "'")
                    }, v = function(e, n) {
                        var i = e[2] || e[3],
                            a = n ? e[4] : e[4] || ("*" === e[1] ? ".*" : null);
                        return {
                            id: i,
                            regexp: a,
                            cfg: o.config.params[i],
                            segment: t.substring(h, e.index),
                            type: a ? r.type(a) || function(t) {
                                return ve(r.type(n ? "query" : "path"), { pattern: new RegExp(t, o.config.caseInsensitive ? "i" : void 0) })
                            }(a) : null
                        }
                    };
                    (a = c.exec(t)) && (u = v(a, !1), !(u.segment.indexOf("?") >= 0));) d(u.id), this._params.push(n.fromPath(u.id, u.type, this.config.paramMap(u.cfg, !1))), this._segments.push(u.segment), p.push([u.segment, P(this._params)]), h = c.lastIndex;
                s = t.substring(h);
                var y = s.indexOf("?");
                if (y >= 0) {
                    var g = s.substring(y);
                    if (s = s.substring(0, y), g.length > 0)
                        for (h = 0; a = l.exec(g);) u = v(a, !0), d(u.id), this._params.push(n.fromSearch(u.id, u.type, this.config.paramMap(u.cfg, !0))), h = c.lastIndex
                }
                this._segments.push(s), this._compiled = p.map(function(t) {
                    return it.apply(null, t)
                }).concat(it(s))
            }
            return e.prototype.append = function(t) {
                return this._children.push(t), t._cache = { path: this._cache.path.concat(t), parent: this, pattern: null }, t
            }, e.prototype.isRoot = function() {
                return this._cache.path[0] === this
            }, e.prototype.toString = function() {
                return this.pattern
            }, e.prototype.exec = function(t, e, r, n) {
                var i = this;
                void 0 === e && (e = {}), void 0 === n && (n = {});
                var o = Cr(this._cache, "pattern", function() {
                    return new RegExp(["^", Pe(i._cache.path.map(It("_compiled"))).join(""), !1 === i.config.strict ? "/?" : "", "$"].join(""), i.config.caseInsensitive ? "i" : void 0)
                }).exec(t);
                if (!o) return null;
                var a = this.parameters(),
                    u = a.filter(function(t) {
                        return !t.isSearch()
                    }),
                    s = a.filter(function(t) {
                        return t.isSearch()
                    }),
                    c = this._cache.path.map(function(t) {
                        return t._segments.length - 1
                    }).reduce(function(t, e) {
                        return t + e
                    }),
                    f = {};
                if (c !== o.length - 1) throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
                for (var l = 0; l < c; l++) {
                    for (var h = u[l], p = o[l + 1], d = 0; d < h.replace.length; d++) h.replace[d].from === p && (p = h.replace[d].to);
                    p && !0 === h.array && (p = function(t) {
                        var e = function(t) {
                                return t.split("").reverse().join("")
                            },
                            r = function(t) {
                                return t.replace(/\\-/g, "-")
                            };
                        return b(b(e(t).split(/-(?!\\)/), e), r).reverse()
                    }(p)), zt(p) && (p = h.type.decode(p)), f[h.id] = h.value(p)
                }
                return s.forEach(function(t) {
                    for (var r = e[t.id], n = 0; n < t.replace.length; n++) t.replace[n].from === r && (r = t.replace[n].to);
                    zt(r) && (r = t.type.decode(r)), f[t.id] = t.value(r)
                }), r && (f["#"] = r), f
            }, e.prototype.parameters = function(t) {
                return void 0 === t && (t = {}), !1 === t.inherit ? this._params : Pe(this._cache.path.map(function(t) {
                    return t._params
                }))
            }, e.prototype.parameter = function(t, e) {
                var r = this;
                void 0 === e && (e = {});
                var n = this._cache.parent;
                return function() {
                    for (var e = 0, n = r._params; e < n.length; e++) {
                        var i = n[e];
                        if (i.id === t) return i
                    }
                }() || !1 !== e.inherit && n && n.parameter(t, e) || null
            }, e.prototype.validates = function(t) {
                var e = function(t, e) {
                    return !t || t.validates(e)
                };
                return t = t || {}, this.parameters().filter(function(e) {
                    return t.hasOwnProperty(e.id)
                }).map(function(r) {
                    return e(r, t[r.id])
                }).reduce(be, !0)
            }, e.prototype.format = function(t) {
                function r(e) {
                    var r = e.value(t[e.id]),
                        n = e.validates(r),
                        i = e.isDefaultValue(r);
                    return { param: e, value: r, isValid: n, isDefaultValue: i, squash: !!i && e.squash, encoded: e.type.encode(r) }
                }
                void 0 === t && (t = {});
                var n = this._cache.path,
                    i = n.map(e.pathSegmentsAndParams).reduce(Ee, []).map(function(t) {
                        return Zt(t) ? t : r(t)
                    }),
                    o = n.map(e.queryParams).reduce(Ee, []).map(r),
                    a = function(t) {
                        return !1 === t.isValid
                    };
                if (i.concat(o).filter(a).length) return null;
                var u = i.reduce(function(t, r) {
                        if (Zt(r)) return t + r;
                        var n = r.squash,
                            i = r.encoded,
                            o = r.param;
                        return !0 === n ? t.match(/\/$/) ? t.slice(0, -1) : t : Zt(n) ? t + n : !1 !== n ? t : null == i ? t : te(i) ? t + b(i, e.encodeDashes).join("-") : o.raw ? t + i : t + encodeURIComponent(i)
                    }, ""),
                    s = o.map(function(t) {
                        var e = t.param,
                            r = t.squash,
                            n = t.encoded,
                            i = t.isDefaultValue;
                        if (!(null == n || i && !1 !== r) && (te(n) || (n = [n]), 0 !== n.length)) return e.raw || (n = b(n, encodeURIComponent)), n.map(function(t) {
                            return e.id + "=" + t
                        })
                    }).filter(f).reduce(Ee, []).join("&");
                return u + (s ? "?" + s : "") + (t["#"] ? "#" + t["#"] : "")
            }, e.encodeDashes = function(t) {
                return encodeURIComponent(t).replace(/-/g, function(t) {
                    return "%5C%" + t.charCodeAt(0).toString(16).toUpperCase()
                })
            }, e.pathSegmentsAndParams = function(e) {
                return T(e._segments, e._params.filter(function(e) {
                    return e.location === t.DefType.PATH
                }).concat(void 0)).reduce(Ee, []).filter(function(t) {
                    return "" !== t && zt(t)
                })
            }, e.queryParams = function(e) {
                return e._params.filter(function(e) {
                    return e.location === t.DefType.SEARCH
                })
            }, e.compare = function(t, r) {
                var n, i, o = function(t) {
                        return t._cache.segments = t._cache.segments || t._cache.path.map(e.pathSegmentsAndParams).reduce(Ee, []).reduce(Y, []).map(function(t) {
                            return Zt(t) ? Pr(t) : t
                        }).reduce(Ee, [])
                    },
                    a = function(t) {
                        return t._cache.weights = t._cache.weights || o(t).map(function(t) {
                            return "/" === t ? 1 : Zt(t) ? 2 : t instanceof tr ? 3 : void 0
                        })
                    },
                    u = T(a(t), a(r));
                for (i = 0; i < u.length; i++)
                    if (0 !== (n = u[i][0] - u[i][1])) return n;
                return 0
            }, e
        }();
    kr.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/;
    var Or = function() {
            function e() {
                var e = this;
                this.paramTypes = new yr, this._isCaseInsensitive = !1, this._isStrictMode = !0, this._defaultSquashPolicy = !1, this._getConfig = function(t) {
                    return pe({ strict: e._isStrictMode, caseInsensitive: e._isCaseInsensitive }, t)
                }, this.paramFactory = {
                    fromConfig: function(r, n, i) {
                        return new tr(r, n, i, t.DefType.CONFIG, e)
                    },
                    fromPath: function(r, n, i) {
                        return new tr(r, n, i, t.DefType.PATH, e)
                    },
                    fromSearch: function(r, n, i) {
                        return new tr(r, n, i, t.DefType.SEARCH, e)
                    }
                }, pe(this, { UrlMatcher: kr, Param: tr })
            }
            return e.prototype.caseInsensitive = function(t) {
                return this._isCaseInsensitive = zt(t) ? t : this._isCaseInsensitive
            }, e.prototype.strictMode = function(t) {
                return this._isStrictMode = zt(t) ? t : this._isStrictMode
            }, e.prototype.defaultSquashPolicy = function(t) {
                if (zt(t) && !0 !== t && !1 !== t && !Zt(t)) throw new Error("Invalid squash policy: " + t + ". Valid policies: false, true, arbitrary-string");
                return this._defaultSquashPolicy = zt(t) ? t : this._defaultSquashPolicy
            }, e.prototype.compile = function(t, e) {
                return new kr(t, this.paramTypes, this.paramFactory, this._getConfig(e))
            }, e.prototype.isMatcher = function(t) {
                if (!Xt(t)) return !1;
                var e = !0;
                return he(kr.prototype, function(r, n) { Kt(r) && (e = e && zt(t[n]) && Kt(t[n])) }), e
            }, e.prototype.type = function(t, e, r) {
                var n = this.paramTypes.type(t, e, r);
                return zt(e) ? this : n
            }, e.prototype.$get = function() {
                return this.paramTypes.enqueue = !1, this.paramTypes._flushTypeQueue(), this
            }, e.prototype.dispose = function() { this.paramTypes.dispose() }, e
        }(),
        xr = function() {
            function t(t) { this.router = t }
            return t.prototype.compile = function(t) {
                return this.router.urlMatcherFactory.compile(t)
            }, t.prototype.create = function(t, e) {
                var r = this,
                    n = s([
                        [Zt, function(t) {
                            return n(r.compile(t))
                        }],
                        [Nt(kr), function(t) {
                            return r.fromUrlMatcher(t, e)
                        }],
                        [ne, function(t) {
                            return r.fromState(t, r.router)
                        }],
                        [Nt(RegExp), function(t) {
                            return r.fromRegExp(t, e)
                        }],
                        [Kt, function(t) {
                            return new Ir(t, e)
                        }]
                    ]),
                    i = n(t);
                if (!i) throw new Error("invalid 'what' in when()");
                return i
            }, t.prototype.fromUrlMatcher = function(t, e) {
                function r(e) {
                    var r = t.exec(e.path, e.search, e.hash);
                    return t.validates(r) && r
                }

                function n(e) {
                    var r = t.parameters().filter(function(t) {
                        return t.isOptional
                    });
                    return r.length ? r.filter(function(t) {
                        return e[t.id]
                    }).length / r.length : 1e-6
                }
                var i = e;
                Zt(e) && (e = this.router.urlMatcherFactory.compile(e)), Nt(kr)(e) && (i = function(t) {
                    return e.format(t)
                });
                var o = { urlMatcher: t, matchPriority: n, type: "URLMATCHER" };
                return pe(new Ir(r, i), o)
            }, t.prototype.fromState = function(t, e) {
                var r = function(r) {
                        var n = e.stateService,
                            i = e.globals;
                        n.href(t, r) !== n.href(i.current, i.params) && n.transitionTo(t, r, { inherit: !0, source: "url" })
                    },
                    n = { state: t, type: "STATE" };
                return pe(this.fromUrlMatcher(t.url, r), n)
            }, t.prototype.fromRegExp = function(t, e) {
                if (t.global || t.sticky) throw new Error("Rule RegExp must not be global or sticky");
                var r = function(t) {
                        return e.replace(/\$(\$|\d{1,2})/, function(e, r) {
                            return t["$" === r ? 0 : Number(r)]
                        })
                    },
                    n = Zt(e) ? r : e,
                    i = function(e) {
                        return t.exec(e.path)
                    },
                    o = { regexp: t, type: "REGEXP" };
                return pe(new Ir(i, n), o)
            }, t
        }();
    xr.isUrlRule = function(t) {
        return t && ["type", "match", "handler"].every(function(e) {
            return zt(t[e])
        })
    };
    var jr, Ir = function() {
            function t(t, e) {
                var r = this;
                this.match = t, this.type = "RAW", this.matchPriority = function(t) {
                    return 0 - r.$id
                }, this.handler = e || f
            }
            return t
        }(),
        Vr = It("urlMatcher");
    jr = Ve(Ie(i(It("priority"), function(t) {
        return -t
    })), Ie(i(It("type"), function(t) {
        return { STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1 }[t]
    })), function(t, e) {
        return Vr(t) && Vr(e) ? kr.compare(Vr(t), Vr(e)) : 0
    }, Ie(It("$id"), me(["REGEXP", "RAW", "OTHER"])));
    var Ar = function() {
            function t(e) { this._sortFn = jr, this._rules = [], this.interceptDeferred = !1, this._id = 0, this._sorted = !1, this._router = e, this.urlRuleFactory = new xr(e), h(Ut(t.prototype), this, Ut(this)) }
            return t.prototype.dispose = function() { this.listen(!1), this._rules = [], delete this._otherwiseFn }, t.prototype.sort = function(t) { this._rules.sort(this._sortFn = t || this._sortFn), this._sorted = !0 }, t.prototype.ensureSorted = function() { this._sorted || this.sort() }, t.prototype.match = function(t) {
                var e = this;
                this.ensureSorted(), t = pe({ path: "", search: {}, hash: "" }, t);
                var r = this.rules();
                this._otherwiseFn && r.push(this._otherwiseFn);
                for (var n, i = 0; i < r.length && (!n || 0 === this._sortFn(r[i], n.rule)); i++) {
                    var o = function(r) {
                        var n = r.match(t, e._router);
                        return n && { match: n, rule: r, weight: r.matchPriority(n) }
                    }(r[i]);
                    n = !n || o && o.weight > n.weight ? o : n
                }
                return n
            }, t.prototype.sync = function(t) {
                if (!t || !t.defaultPrevented) {
                    var e = this._router,
                        r = e.urlService,
                        n = e.stateService,
                        i = { path: r.path(), search: r.search(), hash: r.hash() },
                        o = this.match(i);
                    s([
                        [Zt, function(t) {
                            return r.url(t, !0)
                        }],
                        [We.isDef, function(t) {
                            return n.go(t.state, t.params, t.options)
                        }],
                        [Nt(We), function(t) {
                            return n.go(t.state(), t.params(), t.options())
                        }]
                    ])(o && o.rule.handler(o.match, i, e))
                }
            }, t.prototype.listen = function(t) {
                var e = this;
                if (!1 !== t) return this._stopFn = this._stopFn || this._router.urlService.onChange(function(t) {
                    return e.sync(t)
                });
                this._stopFn && this._stopFn(), delete this._stopFn
            }, t.prototype.update = function(t) {
                var e = this._router.locationService;
                if (t) return void(this.location = e.path());
                e.path() !== this.location && e.url(this.location, !0)
            }, t.prototype.push = function(t, e, r) {
                var n = r && !!r.replace;
                this._router.urlService.url(t.format(e || {}), n)
            }, t.prototype.href = function(t, e, r) {
                var n = t.format(e);
                if (null == n) return null;
                r = r || { absolute: !1 };
                var i = this._router.urlService.config,
                    o = i.html5Mode();
                if (o || null === n || (n = "#" + i.hashPrefix() + n), n = ot(n, o, r.absolute, i.baseHref()), !r.absolute || !n) return n;
                var a = !o && n ? "/" : "",
                    u = i.port();
                return u = 80 === u || 443 === u ? "" : ":" + u, [i.protocol(), "://", i.host(), u, a, n].join("")
            }, t.prototype.rule = function(t) {
                var e = this;
                if (!xr.isUrlRule(t)) throw new Error("invalid rule");
                return t.$id = this._id++, t.priority = t.priority || 0, this._rules.push(t), this._sorted = !1,
                    function() {
                        return e.removeRule(t)
                    }
            }, t.prototype.removeRule = function(t) { ye(this._rules, t) }, t.prototype.rules = function() {
                return this.ensureSorted(), this._rules.slice()
            }, t.prototype.otherwise = function(t) {
                var e = at(t);
                this._otherwiseFn = this.urlRuleFactory.create(Ut(!0), e), this._sorted = !1
            }, t.prototype.initial = function(t) {
                var e = at(t),
                    r = function(t, e) {
                        return 0 === e.globals.transitionHistory.size() && !!/^\/?$/.exec(t.path)
                    };
                this.rule(this.urlRuleFactory.create(r, e))
            }, t.prototype.when = function(t, e, r) {
                var n = this.urlRuleFactory.create(t, e);
                return zt(r && r.priority) && (n.priority = r.priority), this.rule(n), n
            }, t.prototype.deferIntercept = function(t) { void 0 === t && (t = !0), this.interceptDeferred = t }, t
        }(),
        Hr = function() {
            function t() {
                var t = this;
                this._uiViews = [], this._viewConfigs = [], this._viewConfigFactories = {}, this._pluginapi = {
                    _rootViewContext: this._rootViewContext.bind(this),
                    _viewConfigFactory: this._viewConfigFactory.bind(this),
                    _registeredUIViews: function() {
                        return t._uiViews
                    },
                    _activeViewConfigs: function() {
                        return t._viewConfigs
                    }
                }
            }
            return t.prototype._rootViewContext = function(t) {
                return this._rootContext = t || this._rootContext
            }, t.prototype._viewConfigFactory = function(t, e) { this._viewConfigFactories[t] = e }, t.prototype.createViewConfig = function(t, e) {
                var r = this._viewConfigFactories[e.$type];
                if (!r) throw new Error("ViewService: No view config factory registered for type " + e.$type);
                var n = r(t, e);
                return te(n) ? n : [n]
            }, t.prototype.deactivateViewConfig = function(t) { Ge.traceViewServiceEvent("<- Removing", t), ye(this._viewConfigs, t) }, t.prototype.activateViewConfig = function(t) { Ge.traceViewServiceEvent("-> Registering", t), this._viewConfigs.push(t) }, t.prototype.sync = function() {
                function e(t) {
                    var e = function(t) {
                        return t && t.parent ? e(t.parent) + 1 : 1
                    };
                    return 1e4 * t.fqn.split(".").length + e(t.creationContext)
                }

                function n(t) {
                    for (var e = t.viewDecl.$context, r = 0; ++r && e.parent;) e = e.parent;
                    return r
                }
                var i = this,
                    o = this._uiViews.map(function(t) {
                        return [t.fqn, t]
                    }).reduce(C, {}),
                    a = r(function(t, e, r, n) {
                        return e * (t(r) - t(n))
                    }),
                    u = function(e) {
                        var r = i._viewConfigs.filter(t.matches(o, e));
                        return r.length > 1 && r.sort(a(n, -1)), [e, r[0]]
                    },
                    s = function(t) {
                        var e = t[0],
                            r = t[1]; - 1 !== i._uiViews.indexOf(e) && e.configUpdated(r)
                    };
                this._uiViews.sort(a(e, 1)).map(u).forEach(s)
            }, t.prototype.registerUIView = function(t) {
                Ge.traceViewServiceUIViewEvent("-> Registering", t);
                var e = this._uiViews,
                    r = function(e) {
                        return e.fqn === t.fqn
                    };
                return e.filter(r).length && Ge.traceViewServiceUIViewEvent("!!!! duplicate uiView named:", t), e.push(t), this.sync(),
                    function() {
                        if (-1 === e.indexOf(t)) return void Ge.traceViewServiceUIViewEvent("Tried removing non-registered uiView", t);
                        Ge.traceViewServiceUIViewEvent("<- Deregistering", t), ye(e)(t)
                    }
            }, t.prototype.available = function() {
                return this._uiViews.map(It("fqn"))
            }, t.prototype.active = function() {
                return this._uiViews.filter(It("$config")).map(It("name"))
            }, t.normalizeUIViewTarget = function(t, e) {
                void 0 === e && (e = "");
                var r = e.split("@"),
                    n = r[0] || "$default",
                    i = Zt(r[1]) ? r[1] : "^",
                    o = /^(\^(?:\.\^)*)\.(.*$)/.exec(n);
                (o && (i = o[1], n = o[2]), "!" === n.charAt(0) && (n = n.substr(1), i = ""), /^(\^(?:\.\^)*)$/.exec(i)) ? i = i.split(".").reduce(function(t, e) {
                    return t.parent
                }, t).name: "." === i && (i = t.name);
                return { uiViewName: n, uiViewContextAnchor: i }
            }, t
        }();
    Hr.matches = function(t, e) {
        return function(r) {
            if (e.$type !== r.viewDecl.$type) return !1;
            var n = r.viewDecl,
                i = n.$uiViewName.split("."),
                o = e.fqn.split(".");
            if (!de(i, o.slice(0 - i.length))) return !1;
            var a = 1 - i.length || void 0,
                u = o.slice(0, a).join("."),
                s = t[u].creationContext;
            return n.$uiViewContextAnchor === (s && s.name)
        }
    };
    var qr = function() {
            function t() { this.params = new gr, this.lastStartedTransitionId = -1, this.transitionHistory = new qe([], 1), this.successfulTransitions = new qe([], 1) }
            return t.prototype.dispose = function() { this.transitionHistory.clear(), this.successfulTransitions.clear(), this.transition = null }, t
        }(),
        Dr = function(t) {
            return t.reduce(function(t, e) {
                return t[e] = oe(e), t
            }, { dispose: l })
        },
        Nr = ["url", "path", "search", "hash", "onChange"],
        Fr = ["port", "protocol", "host", "baseHref", "html5Mode", "hashPrefix"],
        Ur = ["type", "caseInsensitive", "strictMode", "defaultSquashPolicy"],
        Lr = ["sort", "when", "initial", "otherwise", "rules", "rule", "removeRule"],
        Mr = ["deferIntercept", "listen", "sync", "match"],
        Br = function() {
            function t(t, e) {
                void 0 === e && (e = !0), this.router = t, this.rules = {}, this.config = {};
                var r = function() {
                    return t.locationService
                };
                h(r, this, r, Nr, e);
                var n = function() {
                    return t.locationConfig
                };
                h(n, this.config, n, Fr, e);
                var i = function() {
                    return t.urlMatcherFactory
                };
                h(i, this.config, i, Ur);
                var o = function() {
                    return t.urlRouter
                };
                h(o, this.rules, o, Lr), h(o, this, o, Mr)
            }
            return t.prototype.url = function(t, e, r) {}, t.prototype.path = function() {}, t.prototype.search = function() {}, t.prototype.hash = function() {}, t.prototype.onChange = function(t) {}, t.prototype.parts = function() {
                return { path: this.path(), search: this.search(), hash: this.hash() }
            }, t.prototype.dispose = function() {}, t.prototype.sync = function(t) {}, t.prototype.listen = function(t) {}, t.prototype.deferIntercept = function(t) {}, t.prototype.match = function(t) {}, t
        }();
    Br.locationServiceStub = Dr(Nr), Br.locationConfigStub = Dr(Fr);
    var Gr = 0,
        Wr = function() {
            function t(t, e) { void 0 === t && (t = Br.locationServiceStub), void 0 === e && (e = Br.locationConfigStub), this.locationService = t, this.locationConfig = e, this.$id = Gr++, this._disposed = !1, this._disposables = [], this.trace = Ge, this.viewService = new Hr, this.transitionService = new $n(this), this.globals = new qr, this.urlMatcherFactory = new Or, this.urlRouter = new Ar(this), this.stateRegistry = new Tr(this), this.stateService = new Sn(this), this.urlService = new Br(this), this._plugins = {}, this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()), this.globals.$current = this.stateRegistry.root(), this.globals.current = this.globals.$current.self, this.disposable(this.globals), this.disposable(this.stateService), this.disposable(this.stateRegistry), this.disposable(this.transitionService), this.disposable(this.urlRouter), this.disposable(t), this.disposable(e) }
            return t.prototype.disposable = function(t) { this._disposables.push(t) }, t.prototype.dispose = function(t) {
                var e = this;
                if (t && Kt(t.dispose)) return void t.dispose(this);
                this._disposed = !0, this._disposables.slice().forEach(function(t) {
                    try { "function" == typeof t.dispose && t.dispose(e), ye(e._disposables, t) } catch (t) {}
                })
            }, t.prototype.plugin = function(t, e) {
                void 0 === e && (e = {});
                var r = new t(this, e);
                if (!r.name) throw new Error("Required property `name` missing on plugin: " + r);
                return this._disposables.push(r), this._plugins[r.name] = r
            }, t.prototype.getPlugin = function(t) {
                return t ? this._plugins[t] : Se(this._plugins)
            }, t
        }(),
        zr = function(t) {
            return t.onCreate({}, ut)
        },
        Jr = function(t) {
            function e(e) {
                if (e) return e instanceof We ? e : Zt(e) ? n.target(e, t.params(), t.options()) : e.state || e.params ? n.target(e.state || t.to(), e.params || t.params(), t.options()) : void 0
            }
            var r = t.to().redirectTo;
            if (r) {
                var n = t.router.stateService;
                return Kt(r) ? ae.$q.when(r(t)).then(e) : e(r)
            }
        },
        Qr = function(t) {
            return t.onStart({
                to: function(t) {
                    return !!t.redirectTo
                }
            }, Jr)
        },
        Kr = st("onExit"),
        Yr = function(t) {
            return t.onExit({
                exiting: function(t) {
                    return !!t.onExit
                }
            }, Kr)
        },
        Zr = st("onRetain"),
        Xr = function(t) {
            return t.onRetain({
                retained: function(t) {
                    return !!t.onRetain
                }
            }, Zr)
        },
        tn = st("onEnter"),
        en = function(t) {
            return t.onEnter({
                entering: function(t) {
                    return !!t.onEnter
                }
            }, tn)
        },
        rn = function(t) {
            return new fr(t.treeChanges().to).resolvePath("EAGER", t).then(l)
        },
        nn = function(t) {
            return t.onStart({}, rn, { priority: 1e3 })
        },
        on = function(t, e) {
            return new fr(t.treeChanges().to).subContext(e.$$state()).resolvePath("LAZY", t).then(l)
        },
        an = function(t) {
            return t.onEnter({ entering: Ut(!0) }, on, { priority: 1e3 })
        },
        un = function(t) {
            var e = ae.$q,
                r = t.views("entering");
            if (r.length) return e.all(r.map(function(t) {
                return e.when(t.load())
            })).then(l)
        },
        sn = function(t) {
            return t.onFinish({}, un)
        },
        cn = function(t) {
            var e = t.views("entering"),
                r = t.views("exiting");
            if (e.length || r.length) {
                var n = t.router.viewService;
                r.forEach(function(t) {
                    return n.deactivateViewConfig(t)
                }), e.forEach(function(t) {
                    return n.activateViewConfig(t)
                }), n.sync()
            }
        },
        fn = function(t) {
            return t.onSuccess({}, cn)
        },
        ln = function(t) {
            var e = t.router.globals,
                r = function() { e.successfulTransitions.enqueue(t), e.$current = t.$to(), e.current = e.$current.self, le(t.params(), e.params) },
                n = function() { e.transition === t && (e.transition = null) };
            t.onSuccess({}, r, { priority: 1e4 }), t.promise.then(n, n)
        },
        hn = function(t) {
            return t.onCreate({}, ln)
        },
        pn = function(t) {
            var e = t.options(),
                r = t.router.stateService,
                n = t.router.urlRouter;
            if ("url" !== e.source && e.location && r.$current.navigable) {
                var i = { replace: "replace" === e.location };
                n.push(r.$current.navigable.url, r.params, i)
            }
            n.update(!0)
        },
        dn = function(t) {
            return t.onSuccess({}, pn, { priority: 9999 })
        },
        vn = function(t) {
            function e() {
                if ("url" !== t.originalTransition().options().source) {
                    var e = t.targetState();
                    return r.stateService.target(e.identifier(), e.params(), e.options())
                }
                var n = r.urlService,
                    i = n.match(n.parts()),
                    o = i && i.rule;
                if (o && "STATE" === o.type) {
                    var a = o.state,
                        u = i.match;
                    return r.stateService.target(a, u, t.options())
                }
                r.urlService.sync()
            }
            var r = t.router,
                n = t.entering().filter(function(t) {
                    return !!t.$$state().lazyLoad
                }).map(function(e) {
                    return ct(t, e)
                });
            return ae.$q.all(n).then(e)
        },
        mn = function(t) {
            return t.onBefore({
                entering: function(t) {
                    return !!t.lazyLoad
                }
            }, vn)
        },
        yn = function() {
            function t(t, e, r, n, i, o, a, u) { void 0 === i && (i = !1), void 0 === o && (o = Je.HANDLE_RESULT), void 0 === a && (a = Je.REJECT_ERROR), void 0 === u && (u = !1), this.name = t, this.hookPhase = e, this.hookOrder = r, this.criteriaMatchPath = n, this.reverseSort = i, this.getResultHandler = o, this.getErrorHandler = a, this.synchronous = u }
            return t
        }(),
        gn = function(t) {
            return t.onBefore({}, ft, { priority: -9999 })
        },
        wn = function(t) {
            return t.onBefore({}, lt, { priority: -1e4 })
        },
        _n = {
            location: !0,
            relative: null,
            inherit: !1,
            notify: !0,
            reload: !1,
            custom: {},
            current: function() {
                return null
            },
            source: "unknown"
        },
        $n = function() {
            function e(t) { this._transitionCount = 0, this._eventTypes = [], this._registeredHooks = {}, this._criteriaPaths = {}, this._router = t, this.$view = t.viewService, this._deregisterHookFns = {}, this._pluginapi = h(Ut(this), {}, Ut(this), ["_definePathType", "_defineEvent", "_getPathTypes", "_getEvents", "getHooks"]), this._defineCorePaths(), this._defineCoreEvents(), this._registerCoreTransitionHooks() }
            return e.prototype.onCreate = function(t, e, r) {}, e.prototype.onBefore = function(t, e, r) {}, e.prototype.onStart = function(t, e, r) {}, e.prototype.onExit = function(t, e, r) {}, e.prototype.onRetain = function(t, e, r) {}, e.prototype.onEnter = function(t, e, r) {}, e.prototype.onFinish = function(t, e, r) {}, e.prototype.onSuccess = function(t, e, r) {}, e.prototype.onError = function(t, e, r) {}, e.prototype.dispose = function(t) {
                Se(this._registeredHooks).forEach(function(t) {
                    return t.forEach(function(e) { e._deregistered = !0, ye(t, e) })
                })
            }, e.prototype.create = function(t, e) {
                return new pr(t, e, this._router)
            }, e.prototype._defineCoreEvents = function() {
                var e = t.TransitionHookPhase,
                    r = Je,
                    n = this._criteriaPaths;
                this._defineEvent("onCreate", e.CREATE, 0, n.to, !1, r.LOG_REJECTED_RESULT, r.THROW_ERROR, !0), this._defineEvent("onBefore", e.BEFORE, 0, n.to), this._defineEvent("onStart", e.RUN, 0, n.to), this._defineEvent("onExit", e.RUN, 100, n.exiting, !0), this._defineEvent("onRetain", e.RUN, 200, n.retained), this._defineEvent("onEnter", e.RUN, 300, n.entering), this._defineEvent("onFinish", e.RUN, 400, n.to), this._defineEvent("onSuccess", e.SUCCESS, 0, n.to, !1, r.LOG_REJECTED_RESULT, r.LOG_ERROR, !0), this._defineEvent("onError", e.ERROR, 0, n.to, !1, r.LOG_REJECTED_RESULT, r.LOG_ERROR, !0)
            }, e.prototype._defineCorePaths = function() {
                var e = t.TransitionHookScope.STATE,
                    r = t.TransitionHookScope.TRANSITION;
                this._definePathType("to", r), this._definePathType("from", r), this._definePathType("exiting", e), this._definePathType("retained", e), this._definePathType("entering", e)
            }, e.prototype._defineEvent = function(t, e, r, n, i, o, a, u) {
                void 0 === i && (i = !1), void 0 === o && (o = Je.HANDLE_RESULT), void 0 === a && (a = Je.REJECT_ERROR), void 0 === u && (u = !1);
                var s = new yn(t, e, r, n, i, o, a, u);
                this._eventTypes.push(s), q(this, this, s)
            }, e.prototype._getEvents = function(t) {
                return (zt(t) ? this._eventTypes.filter(function(e) {
                    return e.hookPhase === t
                }) : this._eventTypes.slice()).sort(function(t, e) {
                    var r = t.hookPhase - e.hookPhase;
                    return 0 === r ? t.hookOrder - e.hookOrder : r
                })
            }, e.prototype._definePathType = function(t, e) { this._criteriaPaths[t] = { name: t, scope: e } }, e.prototype._getPathTypes = function() {
                return this._criteriaPaths
            }, e.prototype.getHooks = function(t) {
                return this._registeredHooks[t]
            }, e.prototype._registerCoreTransitionHooks = function() {
                var t = this._deregisterHookFns;
                t.addCoreResolves = zr(this), t.ignored = gn(this), t.invalid = wn(this), t.redirectTo = Qr(this), t.onExit = Yr(this), t.onRetain = Xr(this), t.onEnter = en(this), t.eagerResolve = nn(this), t.lazyResolve = an(this), t.loadViews = sn(this), t.activateViews = fn(this), t.updateGlobals = hn(this), t.updateUrl = dn(this), t.lazyLoad = mn(this)
            }, e
        }(),
        Sn = function() {
            function e(t) {
                this.router = t, this.invalidCallbacks = [], this._defaultErrorHandler = function(t) { t instanceof Error && t.stack ? (console.error(t), console.error(t.stack)) : t instanceof Ne ? (console.error(t.toString()), t.detail && t.detail.stack && console.error(t.detail.stack)) : console.error(t) };
                var r = ["current", "$current", "params", "transition"],
                    n = Object.keys(e.prototype).filter(Ht(me(r)));
                h(Ut(e.prototype), this, Ut(this), n)
            }
            return Object.defineProperty(e.prototype, "transition", {
                get: function() {
                    return this.router.globals.transition
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "params", {
                get: function() {
                    return this.router.globals.params
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "current", {
                get: function() {
                    return this.router.globals.current
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "$current", {
                get: function() {
                    return this.router.globals.$current
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function() { this.defaultErrorHandler(l), this.invalidCallbacks = [] }, e.prototype._handleInvalidTargetState = function(t, e) {
                function r() {
                    var t = s.dequeue();
                    return void 0 === t ? Ne.invalid(e.error()).toPromise() : ae.$q.when(t(e, i, c)).then(f).then(function(t) {
                        return t || r()
                    })
                }
                var n = this,
                    i = rr.makeTargetState(t),
                    o = this.router.globals,
                    a = function() {
                        return o.transitionHistory.peekTail()
                    },
                    u = a(),
                    s = new qe(this.invalidCallbacks.slice()),
                    c = new fr(t).injector(),
                    f = function(t) {
                        if (t instanceof We) {
                            var e = t;
                            return e = n.target(e.identifier(), e.params(), e.options()), e.valid() ? a() !== u ? Ne.superseded().toPromise() : n.transitionTo(e.identifier(), e.params(), e.options()) : Ne.invalid(e.error()).toPromise()
                        }
                    };
                return r()
            }, e.prototype.onInvalid = function(t) {
                return this.invalidCallbacks.push(t),
                    function() { ye(this.invalidCallbacks)(t) }.bind(this)
            }, e.prototype.reload = function(t) {
                return this.transitionTo(this.current, this.params, { reload: !zt(t) || t, inherit: !1, notify: !1 })
            }, e.prototype.go = function(t, e, r) {
                var n = { relative: this.$current, inherit: !0 },
                    i = m(r, n, _n);
                return this.transitionTo(t, e, i)
            }, e.prototype.target = function(t, e, r) {
                if (void 0 === r && (r = {}), Xt(r.reload) && !r.reload.name) throw new Error("Invalid reload state object");
                var n = this.router.stateRegistry;
                if (r.reloadState = !0 === r.reload ? n.root() : n.matcher.find(r.reload, r.relative), r.reload && !r.reloadState) throw new Error("No such reload state '" + (Zt(r.reload) ? r.reload : r.reload.name) + "'");
                var i = n.matcher.find(t, r.relative);
                return new We(t, i, e, r)
            }, e.prototype.getCurrentPath = function() {
                var t = this,
                    e = this.router.globals,
                    r = e.successfulTransitions.peekTail();
                return r ? r.treeChanges().to : function() {
                    return [new er(t.router.stateRegistry.root())]
                }()
            }, e.prototype.transitionTo = function(e, r, n) {
                var i = this;
                void 0 === r && (r = {}), void 0 === n && (n = {});
                var o = this.router,
                    a = o.globals;
                n = m(n, _n), n = pe(n, {
                    current: function() {
                        return a.transition
                    }
                });
                var u = this.target(e, r, n),
                    s = this.getCurrentPath();
                if (!u.exists()) return this._handleInvalidTargetState(s, u);
                if (!u.valid()) return He(u.error());
                var c = function(e) {
                        return function(r) {
                            if (r instanceof Ne) {
                                var n = o.globals.lastStartedTransitionId === e.$id;
                                if (r.type === t.RejectType.IGNORED) return n && o.urlRouter.update(), ae.$q.when(a.current);
                                var u = r.detail;
                                if (r.type === t.RejectType.SUPERSEDED && r.redirected && u instanceof We) {
                                    var s = e.redirect(u);
                                    return s.run().catch(c(s))
                                }
                                if (r.type === t.RejectType.ABORTED) return n && o.urlRouter.update(), ae.$q.reject(r)
                            }
                            return i.defaultErrorHandler()(r), ae.$q.reject(r)
                        }
                    },
                    f = this.router.transitionService.create(s, u),
                    l = f.run().catch(c(f));
                return Ae(l), pe(l, { transition: f })
            }, e.prototype.is = function(t, e, r) {
                r = m(r, { relative: this.$current });
                var n = this.router.stateRegistry.matcher.find(t, r.relative);
                if (zt(n)) {
                    if (this.$current !== n) return !1;
                    if (!e) return !0;
                    var i = n.parameters({ inherit: !0, matchingKeys: e });
                    return tr.equals(i, tr.values(i, e), this.params)
                }
            }, e.prototype.includes = function(t, e, r) {
                r = m(r, { relative: this.$current });
                var n = Zt(t) && Lt.fromString(t);
                if (n) {
                    if (!n.matches(this.$current.name)) return !1;
                    t = this.$current.name
                }
                var i = this.router.stateRegistry.matcher.find(t, r.relative),
                    o = this.$current.includes;
                if (zt(i)) {
                    if (!zt(o[i.name])) return !1;
                    if (!e) return !0;
                    var a = i.parameters({ inherit: !0, matchingKeys: e });
                    return tr.equals(a, tr.values(a, e), this.params)
                }
            }, e.prototype.href = function(t, e, r) {
                r = m(r, { lossy: !0, inherit: !0, absolute: !1, relative: this.$current }), e = e || {};
                var n = this.router.stateRegistry.matcher.find(t, r.relative);
                if (!zt(n)) return null;
                r.inherit && (e = this.params.$inherit(e, this.$current, n));
                var i = n && r.lossy ? n.navigable : n;
                return i && void 0 !== i.url && null !== i.url ? this.router.urlRouter.href(i.url, e, { absolute: r.absolute }) : null
            }, e.prototype.defaultErrorHandler = function(t) {
                return this._defaultErrorHandler = t || this._defaultErrorHandler
            }, e.prototype.get = function(t, e) {
                var r = this.router.stateRegistry;
                return 0 === arguments.length ? r.get() : r.get(t, e || this.$current)
            }, e.prototype.lazyLoad = function(t, e) {
                var r = this.get(t);
                if (!r || !r.lazyLoad) throw new Error("Can not lazy load " + t);
                var n = this.getCurrentPath(),
                    i = rr.makeTargetState(n);
                return e = e || this.router.transitionService.create(n, i), ct(e, r)
            }, e
        }(),
        bn = {
            when: function(t) {
                return new Promise(function(e, r) {
                    return e(t)
                })
            },
            reject: function(t) {
                return new Promise(function(e, r) { r(t) })
            },
            defer: function() {
                var t = {};
                return t.promise = new Promise(function(e, r) { t.resolve = e, t.reject = r }), t
            },
            all: function(t) {
                if (te(t)) return Promise.all(t);
                if (Xt(t)) {
                    var e = Object.keys(t).map(function(e) {
                        return t[e].then(function(t) {
                            return { key: e, val: t }
                        })
                    });
                    return bn.all(e).then(function(t) {
                        return t.reduce(function(t, e) {
                            return t[e.key] = e.val, t
                        }, {})
                    })
                }
            }
        },
        Rn = {},
        En = {
            get: function(t) {
                return Rn[t]
            },
            has: function(t) {
                return null != En.get(t)
            },
            invoke: function(t, e, r) {
                var n = pe({}, Rn, r || {}),
                    i = En.annotate(t),
                    o = Oe(function(t) {
                        return n.hasOwnProperty(t)
                    }, function(t) {
                        return "DI can't find injectable: '" + t + "'"
                    }),
                    a = i.filter(o).map(function(t) {
                        return n[t]
                    });
                return Kt(t) ? t.apply(e, a) : t.slice(-1)[0].apply(e, a)
            },
            annotate: function(t) {
                if (!c(t)) throw new Error("Not an injectable function: " + t);
                if (t && t.$inject) return t.$inject;
                if (te(t)) return t.slice(0, -1);
                var e = t.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, "");
                return e.slice(e.indexOf("(") + 1, e.indexOf(")")).match(/([^\s,]+)/g) || []
            }
        },
        Tn = function(t) {
            return function(e) {
                if (!e) return ["", ""];
                var r = e.indexOf(t);
                return -1 === r ? [e, ""] : [e.substr(0, r), e.substr(r + 1)]
            }
        },
        Cn = Tn("#"),
        Pn = Tn("?"),
        kn = Tn("="),
        On = function(t) {
            return t ? t.replace(/^#/, "") : ""
        },
        xn = function(t, e) {
            var r = e[0],
                n = e[1];
            return t.hasOwnProperty(r) ? te(t[r]) ? t[r].push(n) : t[r] = [t[r], n] : t[r] = n, t
        },
        jn = function(t) {
            return t.split("&").filter(f).map(kn).reduce(xn, {})
        },
        In = function(t) {
            var e = t.path(),
                r = t.search(),
                n = t.hash(),
                i = Object.keys(r).map(function(t) {
                    var e = r[t];
                    return (te(e) ? e : [e]).map(function(e) {
                        return t + "=" + e
                    })
                }).reduce(Ee, []).join("&");
            return e + (i ? "?" + i : "") + (n ? "#" + n : "")
        },
        Vn = function() {
            function t(t, e) {
                var r = this;
                this.fireAfterUpdate = e, this._listener = function(t) {
                    return r._listeners.forEach(function(e) {
                        return e(t)
                    })
                }, this._listeners = [], this.hash = function() {
                    return ht(r._get()).hash
                }, this.path = function() {
                    return ht(r._get()).path
                }, this.search = function() {
                    return jn(ht(r._get()).search)
                }, this._location = window && window.location, this._history = window && window.history
            }
            return t.prototype.url = function(t, e) {
                if (void 0 === e && (e = !0), zt(t) && t !== this._get() && (this._set(null, null, t, e), this.fireAfterUpdate)) {
                    var r = pe(new Event("locationchange"), { url: t });
                    this._listeners.forEach(function(t) {
                        return t(r)
                    })
                }
                return In(this)
            }, t.prototype.onChange = function(t) {
                var e = this;
                return this._listeners.push(t),
                    function() {
                        return ye(e._listeners, t)
                    }
            }, t.prototype.dispose = function(t) { we(this._listeners) }, t
        }(),
        An = function() {
            var t = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            };
            return function(e, r) {
                function n() { this.constructor = e }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Hn = function(t) {
            function e(e) {
                var r = t.call(this, e, !1) || this;
                return window.addEventListener("hashchange", r._listener, !1), r
            }
            return An(e, t), e.prototype._get = function() {
                return On(this._location.hash)
            }, e.prototype._set = function(t, e, r, n) { this._location.hash = r }, e.prototype.dispose = function(e) { t.prototype.dispose.call(this, e), window.removeEventListener("hashchange", this._listener) }, e
        }(Vn),
        qn = function() {
            var t = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            };
            return function(e, r) {
                function n() { this.constructor = e }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Dn = function(t) {
            function e(e) {
                return t.call(this, e, !0) || this
            }
            return qn(e, t), e.prototype._get = function() {
                return this._url
            }, e.prototype._set = function(t, e, r, n) { this._url = r }, e
        }(Vn),
        Nn = function() {
            var t = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            };
            return function(e, r) {
                function n() { this.constructor = e }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Fn = function(t) {
            function e(e) {
                var r = t.call(this, e, !0) || this;
                return r._config = e.urlService.config, window.addEventListener("popstate", r._listener, !1), r
            }
            return Nn(e, t), e.prototype._get = function() {
                var t = this._location,
                    e = t.pathname,
                    r = t.hash,
                    n = t.search;
                return n = Pn(n)[1], r = Cn(r)[1], e + (n ? "?" + n : "") + (r ? "$" + n : "")
            }, e.prototype._set = function(t, e, r, n) {
                var i = this,
                    o = i._config,
                    a = i._history,
                    u = o.baseHref() + r;
                n ? a.replaceState(t, e, u) : a.pushState(t, e, u)
            }, e.prototype.dispose = function(e) { t.prototype.dispose.call(this, e), window.removeEventListener("popstate", this._listener) }, e
        }(Vn),
        Un = function() {
            function t() {
                var t = this;
                this._baseHref = "", this._port = 80, this._protocol = "http", this._host = "localhost", this._hashPrefix = "", this.port = function() {
                    return t._port
                }, this.protocol = function() {
                    return t._protocol
                }, this.host = function() {
                    return t._host
                }, this.baseHref = function() {
                    return t._baseHref
                }, this.html5Mode = function() {
                    return !1
                }, this.hashPrefix = function(e) {
                    return zt(e) ? t._hashPrefix = e : t._hashPrefix
                }, this.dispose = l
            }
            return t
        }(),
        Ln = function() {
            function t(t, e) { void 0 === e && (e = !1), this._isHtml5 = e, this._baseHref = void 0, this._hashPrefix = "" }
            return t.prototype.port = function() {
                return location.port ? Number(location.port) : "https" === this.protocol() ? 443 : 80
            }, t.prototype.protocol = function() {
                return location.protocol.replace(/:/g, "")
            }, t.prototype.host = function() {
                return location.host
            }, t.prototype.html5Mode = function() {
                return this._isHtml5
            }, t.prototype.hashPrefix = function(t) {
                return zt(t) ? this._hashPrefix = t : this._hashPrefix
            }, t.prototype.baseHref = function(t) {
                return zt(t) ? this._baseHref = t : this._baseHref || this.applyDocumentBaseHref()
            }, t.prototype.applyDocumentBaseHref = function() {
                var t = document.getElementsByTagName("base");
                return this._baseHref = t.length ? t[0].href.substr(location.origin.length) : ""
            }, t.prototype.dispose = function() {}, t
        }(),
        Mn = pt("vanilla.hashBangLocation", !1, Hn, Ln),
        Bn = pt("vanilla.pushStateLocation", !0, Fn, Ln),
        Gn = pt("vanilla.memoryLocation", !1, Dn, Un),
        Wn = function() {
            function t() {}
            return t.prototype.dispose = function(t) {}, t
        }(),
        zn = Object.freeze({
            fromJson: ce,
            toJson: fe,
            copy: le,
            forEach: he,
            extend: pe,
            equals: de,
            identity: f,
            noop: l,
            createProxyFunctions: h,
            inherit: ve,
            inArray: me,
            _inArray: p,
            removeFrom: ye,
            _removeFrom: d,
            pushTo: ge,
            _pushTo: v,
            deregAll: we,
            defaults: m,
            mergeR: _e,
            ancestors: y,
            pick: g,
            omit: w,
            pluck: _,
            filter: $,
            find: S,
            mapObj: $e,
            map: b,
            values: Se,
            allTrueR: be,
            anyTrueR: Re,
            unnestR: Ee,
            flattenR: Te,
            pushR: R,
            uniqR: Ce,
            unnest: Pe,
            flatten: ke,
            assertPredicate: Oe,
            assertMap: xe,
            assertFn: E,
            pairs: je,
            arrayTuples: T,
            applyPairs: C,
            tail: P,
            _extend: x,
            sortBy: Ie,
            composeSort: Ve,
            silenceUncaughtInPromise: Ae,
            silentRejection: He,
            notImplemented: oe,
            services: ae,
            Glob: Lt,
            curry: r,
            compose: n,
            pipe: i,
            prop: It,
            propEq: Vt,
            parse: At,
            not: Ht,
            and: o,
            or: a,
            all: qt,
            any: Dt,
            is: Nt,
            eq: Ft,
            val: Ut,
            invoke: u,
            pattern: s,
            isUndefined: Wt,
            isDefined: zt,
            isNull: Jt,
            isNullOrUndefined: Qt,
            isFunction: Kt,
            isNumber: Yt,
            isString: Zt,
            isObject: Xt,
            isArray: te,
            isDate: ee,
            isRegExp: re,
            isState: ne,
            isInjectable: c,
            isPromise: ie,
            Queue: qe,
            maxLength: B,
            padString: G,
            kebobString: W,
            functionToString: z,
            fnToString: J,
            stringify: Q,
            beforeAfterSubstr: mr,
            splitOnDelim: K,
            joinNeighborsR: Y,
            get Category() {
                return t.Category
            },
            Trace: Be,
            trace: Ge,
            get DefType() {
                return t.DefType
            },
            Param: tr,
            ParamTypes: yr,
            StateParams: gr,
            ParamType: Ye,
            PathNode: er,
            PathUtils: rr,
            resolvePolicies: or,
            defaultResolvePolicy: nr,
            Resolvable: ir,
            NATIVE_INJECTOR_TOKEN: cr,
            ResolveContext: fr,
            resolvablesBuilder: nt,
            StateBuilder: br,
            StateObject: Mt,
            StateMatcher: Rr,
            StateQueueManager: Er,
            StateRegistry: Tr,
            StateService: Sn,
            TargetState: We,
            get TransitionHookPhase() {
                return t.TransitionHookPhase
            },
            get TransitionHookScope() {
                return t.TransitionHookScope
            },
            HookBuilder: Ke,
            matchState: H,
            RegisteredHook: Qe,
            makeEvent: q,
            get RejectType() {
                return t.RejectType
            },
            Rejection: Ne,
            Transition: pr,
            TransitionHook: Je,
            TransitionEventType: yn,
            defaultTransOpts: _n,
            TransitionService: $n,
            UrlMatcher: kr,
            UrlMatcherFactory: Or,
            UrlRouter: Ar,
            UrlRuleFactory: xr,
            BaseUrlRule: Ir,
            UrlService: Br,
            ViewService: Hr,
            UIRouterGlobals: qr,
            UIRouter: Wr,
            $q: bn,
            $injector: En,
            BaseLocationServices: Vn,
            HashLocationService: Hn,
            MemoryLocationService: Dn,
            PushStateLocationService: Fn,
            MemoryLocationConfig: Un,
            BrowserLocationConfig: Ln,
            splitHash: Cn,
            splitQuery: Pn,
            splitEqual: kn,
            trimHashVal: On,
            keyValsToObjectR: xn,
            getParams: jn,
            parseUrl: ht,
            buildUrl: In,
            locationPluginFactory: pt,
            servicesPlugin: dt,
            hashLocationPlugin: Mn,
            pushStateLocationPlugin: Bn,
            memoryLocationPlugin: Gn,
            UIRouterPluginBase: Wn
        }),
        Jn = angular,
        Qn = e && e.module ? e : Jn,
        Kn = function(t, e) {
            return t.reduce(function(t, r) {
                return t || zt(e[r])
            }, !1)
        },
        Yn = 0,
        Zn = function() {
            function t(t, e, r) {
                var n = this;
                this.path = t, this.viewDecl = e, this.factory = r, this.$id = Yn++, this.loaded = !1, this.getTemplate = function(t, e) {
                    return n.component ? n.factory.makeComponentTemplate(t, e, n.component, n.viewDecl.bindings) : n.template
                }
            }
            return t.prototype.load = function() {
                var t = this,
                    e = ae.$q,
                    r = new fr(this.path),
                    n = this.path.reduce(function(t, e) {
                        return pe(t, e.paramValues)
                    }, {}),
                    i = { template: e.when(this.factory.fromConfig(this.viewDecl, n, r)), controller: e.when(this.getController(r)) };
                return e.all(i).then(function(e) {
                    return Ge.traceViewServiceEvent("Loaded", t), t.controller = e.controller, pe(t, e.template), t
                })
            }, t.prototype.getController = function(t) {
                var e = this.viewDecl.controllerProvider;
                if (!c(e)) return this.viewDecl.controller;
                var r = ae.$injector.annotate(e),
                    n = te(e) ? P(e) : e;
                return new ir("", n, r).get(t)
            }, t
        }(),
        Xn = function() {
            function t() {
                var t = this;
                this._useHttp = Qn.version.minor < 3, this.$get = ["$http", "$templateCache", "$injector", function(e, r, n) {
                    return t.$templateRequest = n.has && n.has("$templateRequest") && n.get("$templateRequest"), t.$http = e, t.$templateCache = r, t
                }]
            }
            return t.prototype.useHttpService = function(t) { this._useHttp = t }, t.prototype.fromConfig = function(t, e, r) {
                var n = function(t) {
                        return ae.$q.when(t).then(function(t) {
                            return { template: t }
                        })
                    },
                    i = function(t) {
                        return ae.$q.when(t).then(function(t) {
                            return { component: t }
                        })
                    };
                return zt(t.template) ? n(this.fromString(t.template, e)) : zt(t.templateUrl) ? n(this.fromUrl(t.templateUrl, e)) : zt(t.templateProvider) ? n(this.fromProvider(t.templateProvider, e, r)) : zt(t.component) ? i(t.component) : zt(t.componentProvider) ? i(this.fromComponentProvider(t.componentProvider, e, r)) : n("<ui-view></ui-view>")
            }, t.prototype.fromString = function(t, e) {
                return Kt(t) ? t(e) : t
            }, t.prototype.fromUrl = function(t, e) {
                return Kt(t) && (t = t(e)), null == t ? null : this._useHttp ? this.$http.get(t, { cache: this.$templateCache, headers: { Accept: "text/html" } }).then(function(t) {
                    return t.data
                }) : this.$templateRequest(t)
            }, t.prototype.fromProvider = function(t, e, r) {
                var n = ae.$injector.annotate(t),
                    i = te(t) ? P(t) : t;
                return new ir("", i, n).get(r)
            }, t.prototype.fromComponentProvider = function(t, e, r) {
                var n = ae.$injector.annotate(t),
                    i = te(t) ? P(t) : t;
                return new ir("", i, n).get(r)
            }, t.prototype.makeComponentTemplate = function(t, e, r, n) {
                n = n || {};
                var i = Qn.version.minor >= 3 ? "::" : "",
                    o = function(t) {
                        var e = W(t);
                        return /^(x|data)-/.exec(e) ? "x-" + e : e
                    },
                    a = function(r) {
                        var a = r.name,
                            u = r.type,
                            s = o(a);
                        if (t.attr(s) && !n[a]) return s + "='" + t.attr(s) + "'";
                        var c = n[a] || a;
                        if ("@" === u) return s + "='{{" + i + "$resolve." + c + "}}'";
                        if ("&" === u) {
                            var f = e.getResolvable(c),
                                l = f && f.data,
                                h = l && ae.$injector.annotate(l) || [];
                            return s + "='$resolve." + c + (te(l) ? "[" + (l.length - 1) + "]" : "") + "(" + h.join(",") + ")'"
                        }
                        return s + "='" + i + "$resolve." + c + "'"
                    },
                    u = yt(r).map(a).join(" "),
                    s = o(r);
                return "<" + s + " " + u + "></" + s + ">"
            }, t
        }(),
        ti = function(t) {
            return ei(Xt(t.bindToController) ? t.bindToController : t.scope)
        },
        ei = function(t) {
            return Object.keys(t || {}).map(function(e) {
                return [e, /^([=<@&])[?]?(.*)/.exec(t[e])]
            }).filter(function(t) {
                return zt(t) && te(t[1])
            }).map(function(t) {
                return { name: t[1][2] || t[0], type: t[1][1] }
            })
        },
        ri = function() {
            function t(e, r) { this.stateRegistry = e, this.stateService = r, h(Ut(t.prototype), this, Ut(this)) }
            return t.prototype.decorator = function(t, e) {
                return this.stateRegistry.decorator(t, e) || this
            }, t.prototype.state = function(t, e) {
                return Xt(t) ? e = t : e.name = t, this.stateRegistry.register(e), this
            }, t.prototype.onInvalid = function(t) {
                return this.stateService.onInvalid(t)
            }, t
        }(),
        ni = function(t) {
            return function(e, r) {
                function n(t, e) {
                    var r = new fr(t.treeChanges(o)),
                        n = pe(mi(r), { $state$: e, $transition$: t });
                    return ae.$injector.invoke(i, this, n)
                }
                var i = e[t],
                    o = "onExit" === t ? "from" : "to";
                return i ? n : void 0
            }
        },
        ii = function() {
            function t(t) {
                this._urlListeners = [], this.$locationProvider = t;
                var e = Ut(t);
                h(e, this, e, ["hashPrefix"])
            }
            return t.prototype.dispose = function() {}, t.prototype.onChange = function(t) {
                var e = this;
                return this._urlListeners.push(t),
                    function() {
                        return ye(e._urlListeners)(t)
                    }
            }, t.prototype.html5Mode = function() {
                var t = this.$locationProvider.html5Mode();
                return (t = Xt(t) ? t.enabled : t) && this.$sniffer.history
            }, t.prototype.url = function(t, e, r) {
                return void 0 === e && (e = !1), t && this.$location.url(t), e && this.$location.replace(), r && this.$location.state(r), this.$location.url()
            }, t.prototype._runtimeServices = function(t, e, r, n) {
                var i = this;
                this.$location = e, this.$sniffer = r, t.$on("$locationChangeSuccess", function(t) {
                    return i._urlListeners.forEach(function(e) {
                        return e(t)
                    })
                });
                var o = Ut(e),
                    a = Ut(n);
                h(o, this, o, ["replace", "path", "search", "hash"]), h(o, this, o, ["port", "protocol", "host"]), h(a, this, a, ["baseHref"])
            }, t.monkeyPatchPathParameterType = function(t) {
                var e = t.urlMatcherFactory.type("path");
                e.encode = function(t) {
                    return null != t ? t.toString().replace(/(~|\/)/g, function(t) {
                        return { "~": "~~", "/": "~2F" }[t]
                    }) : t
                }, e.decode = function(t) {
                    return null != t ? t.toString().replace(/(~~|~2F)/g, function(t) {
                        return { "~~": "~", "~2F": "/" }[t]
                    }) : t
                }
            }, t
        }(),
        oi = function() {
            function t(t) { this._router = t, this._urlRouter = t.urlRouter }
            return t.prototype.$get = function() {
                var t = this._urlRouter;
                return t.update(!0), t.interceptDeferred || t.listen(), t
            }, t.prototype.rule = function(t) {
                var e = this;
                if (!Kt(t)) throw new Error("'rule' must be a function");
                var r = function() {
                        return t(ae.$injector, e._router.locationService)
                    },
                    n = new Ir(r, f);
                return this._urlRouter.rule(n), this
            }, t.prototype.otherwise = function(t) {
                var e = this,
                    r = this._urlRouter;
                if (Zt(t)) r.otherwise(t);
                else {
                    if (!Kt(t)) throw new Error("'rule' must be a string or function");
                    r.otherwise(function() {
                        return t(ae.$injector, e._router.locationService)
                    })
                }
                return this
            }, t.prototype.when = function(e, r) {
                return (te(r) || Kt(r)) && (r = t.injectableHandler(this._router, r)), this._urlRouter.when(e, r), this
            }, t.injectableHandler = function(t, e) {
                return function(r) {
                    return ae.$injector.invoke(e, null, { $match: r, $stateParams: t.globals.params })
                }
            }, t.prototype.deferIntercept = function(t) { this._urlRouter.deferIntercept(t) }, t
        }();
    Qn.module("ui.router.angular1", []);
    var ai = Qn.module("ui.router.init", []),
        ui = Qn.module("ui.router.util", ["ng", "ui.router.init"]),
        si = Qn.module("ui.router.router", ["ui.router.util"]),
        ci = Qn.module("ui.router.state", ["ui.router.router", "ui.router.util", "ui.router.angular1"]),
        fi = Qn.module("ui.router", ["ui.router.init", "ui.router.state", "ui.router.angular1"]),
        li = (Qn.module("ui.router.compat", ["ui.router"]), null);
    gt.$inject = ["$locationProvider"];
    var hi = function(t) {
        return ["$uiRouterProvider", function(e) {
            var r = e.router[t];
            return r.$get = function() {
                return r
            }, r
        }]
    };
    wt.$inject = ["$injector", "$q", "$uiRouter"];
    var pi = function(t) {
            return t.urlRouterProvider = new oi(t)
        },
        di = function() {
            return pe(li.stateProvider, {
                $get: function() {
                    return li.stateService
                }
            })
        };
    _t.$inject = ["$rootScope"], ai.provider("$uiRouter", gt), si.provider("$urlRouter", ["$uiRouterProvider", pi]), ui.provider("$urlService", hi("urlService")), ui.provider("$urlMatcherFactory", ["$uiRouterProvider", function() {
        return li.urlMatcherFactory
    }]), ui.provider("$templateFactory", function() {
        return new Xn
    }), ci.provider("$stateRegistry", hi("stateRegistry")), ci.provider("$uiRouterGlobals", hi("globals")), ci.provider("$transitions", hi("transitionService")), ci.provider("$state", ["$uiRouterProvider", di]), ci.factory("$stateParams", ["$uiRouter", function(t) {
        return t.globals.params
    }]), fi.factory("$view", function() {
        return li.viewService
    }), fi.service("$trace", function() {
        return Ge
    }), fi.run(_t), ui.run(["$urlMatcherFactory", function(t) {}]), ci.run(["$state", function(t) {}]), si.run(["$urlRouter", function(t) {}]), ai.run(wt);
    var vi, mi = function(t) {
        return t.getTokens().filter(Zt).map(function(e) {
            var r = t.getResolvable(e);
            return [e, "NOWAIT" === t.getPolicy(r).async ? r.promise : r.data]
        }).reduce(C, {})
    };
    vi = ["$uiRouter", "$timeout", function(t, e) {
        var r = t.stateService;
        return {
            restrict: "A",
            require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
            link: function(n, i, o, a) {
                function u() {
                    var t = p();
                    l && l(), f && (l = f.$$addStateInfo(t.uiState, t.uiStateParams)), null != t.href && o.$set(c.attr, t.href)
                }
                var s, c = Rt(i),
                    f = a[1] || a[0],
                    l = null,
                    h = {},
                    p = function() {
                        return bt(r, i, h)
                    },
                    d = $t(o.uiSref);
                h.uiState = d.state, h.uiStateOpts = o.uiSrefOpts ? n.$eval(o.uiSrefOpts) : {}, d.paramExpr && (n.$watch(d.paramExpr, function(t) { h.uiStateParams = pe({}, t), u() }, !0), h.uiStateParams = pe({}, n.$eval(d.paramExpr))), u(), n.$on("$destroy", t.stateRegistry.onStatesChanged(u)), n.$on("$destroy", t.transitionService.onSuccess({}, u)), c.clickable && (s = Et(i, r, e, c, p), Ct(i, n, s, h.uiStateOpts))
            }
        }
    }];
    var yi;
    yi = ["$uiRouter", "$timeout", function(t, e) {
        var r = t.stateService;
        return {
            restrict: "A",
            require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
            link: function(n, i, o, a) {
                function u() {
                    var t = d();
                    h && h(), f && (h = f.$$addStateInfo(t.uiState, t.uiStateParams)), null != t.href && o.$set(c.attr, t.href)
                }
                var s, c = Rt(i),
                    f = a[1] || a[0],
                    h = null,
                    p = {},
                    d = function() {
                        return bt(r, i, p)
                    },
                    v = ["uiState", "uiStateParams", "uiStateOpts"],
                    m = v.reduce(function(t, e) {
                        return t[e] = l, t
                    }, {});
                v.forEach(function(t) { p[t] = o[t] ? n.$eval(o[t]) : null, o.$observe(t, function(e) { m[t](), m[t] = n.$watch(e, function(e) { p[t] = e, u() }, !0) }) }), u(), n.$on("$destroy", t.stateRegistry.onStatesChanged(u)), n.$on("$destroy", t.transitionService.onSuccess({}, u)), c.clickable && (s = Et(i, r, e, c, d), Ct(i, n, s, p.uiStateOpts))
            }
        }
    }];
    var gi;
    gi = ["$state", "$stateParams", "$interpolate", "$uiRouter", function(t, e, r, n) {
        return {
            restrict: "A",
            controller: ["$scope", "$element", "$attrs", function(e, i, o) {
                function a(t) { t.promise.then(s) }

                function u(e, r, n) {
                    var o = t.get(e, St(i)),
                        a = { state: o || { name: e }, params: r, activeClass: n };
                    return h.push(a),
                        function() { ye(h)(a) }
                }

                function s() {
                    var r = function(t) {
                            return t.split(/\s/).filter(f)
                        },
                        n = function(t) {
                            return t.map(function(t) {
                                return t.activeClass
                            }).map(r).reduce(Ee, [])
                        },
                        o = n(h).concat(r(c)).reduce(Ce, []),
                        a = n(h.filter(function(e) {
                            return t.includes(e.state.name, e.params)
                        })),
                        u = !!h.filter(function(e) {
                            return t.is(e.state.name, e.params)
                        }).length,
                        s = u ? r(c) : [],
                        l = a.concat(s).reduce(Ce, []),
                        p = o.filter(function(t) {
                            return !me(l, t)
                        });
                    e.$evalAsync(function() {
                        l.forEach(function(t) {
                            return i.addClass(t)
                        }), p.forEach(function(t) {
                            return i.removeClass(t)
                        })
                    })
                }
                var c, l, h = [];
                c = r(o.uiSrefActiveEq || "", !1)(e);
                try { l = e.$eval(o.uiSrefActive) } catch (t) {}
                l = l || r(o.uiSrefActive || "", !1)(e), Xt(l) && he(l, function(t, r) {
                    if (Zt(t)) {
                        var n = $t(t);
                        u(n.state, e.$eval(n.paramExpr), r)
                    }
                }), this.$$addStateInfo = function(t, e) {
                    if (!(Xt(l) && h.length > 0)) {
                        var r = u(t, e, l);
                        return s(), r
                    }
                }, e.$on("$stateChangeSuccess", s), e.$on("$destroy", n.transitionService.onStart({}, a)), n.globals.transition && a(n.globals.transition), s()
            }]
        }
    }], Qn.module("ui.router.state").directive("uiSref", vi).directive("uiSrefActive", gi).directive("uiSrefActiveEq", gi).directive("uiState", yi), Pt.$inject = ["$state"], kt.$inject = ["$state"], Qn.module("ui.router.state").filter("isState", Pt).filter("includedByState", kt);
    var wi;
    wi = ["$view", "$animate", "$uiViewScroll", "$interpolate", "$q", function(t, e, r, n, i) {
        function o(t, r) {
            return { enter: function(t, r, n) { Qn.version.minor > 2 ? e.enter(t, null, r).then(n) : e.enter(t, null, r, n) }, leave: function(t, r) { Qn.version.minor > 2 ? e.leave(t).then(r) : e.leave(t, r) } }
        }

        function a(t, e) {
            return t === e
        }
        var u = { $cfg: { viewDecl: { $context: t._pluginapi._rootViewContext() } }, $uiView: {} },
            s = {
                count: 0,
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                compile: function(e, c, f) {
                    return function(e, c, l) {
                        function h(t) {
                            (!t || t instanceof Zn) && (a(S, t) || (Ge.traceUIViewConfigUpdated(E, t && t.viewDecl && t.viewDecl.$context), S = t, d(t)))
                        }

                        function p() {
                            if (v && (Ge.traceUIViewEvent("Removing (previous) el", v.data("$uiView")), v.remove(), v = null), y && (Ge.traceUIViewEvent("Destroying scope", E), y.$destroy(), y = null), m) {
                                var t = m.data("$uiViewAnim");
                                Ge.traceUIViewEvent("Animate out", t), $.leave(m, function() { t.$$animLeave.resolve(), v = null }), v = m, m = null
                            }
                        }

                        function d(t) {
                            var n = e.$new(),
                                o = i.defer(),
                                a = i.defer(),
                                u = { $cfg: t, $uiView: E },
                                s = { $animEnter: o.promise, $animLeave: a.promise, $$animLeave: a };
                            n.$emit("$viewContentLoading", R);
                            var l = f(n, function(t) { t.data("$uiViewAnim", s), t.data("$uiView", u), $.enter(t, c, function() { o.resolve(), y && y.$emit("$viewContentAnimationEnded"), (zt(_) && !_ || e.$eval(_)) && r(t) }), p() });
                            m = l, y = n, y.$emit("$viewContentLoaded", t || S), y.$eval(w)
                        }
                        var v, m, y, g, w = l.onload || "",
                            _ = l.autoscroll,
                            $ = o(l, e),
                            S = void 0,
                            b = c.inheritedData("$uiView") || u,
                            R = n(l.uiView || l.name || "")(e) || "$default",
                            E = {
                                $type: "ng1",
                                id: s.count++,
                                name: R,
                                fqn: b.$uiView.fqn ? b.$uiView.fqn + "." + R : R,
                                config: null,
                                configUpdated: h,
                                get creationContext() {
                                    var t = At("$cfg.viewDecl.$context")(b),
                                        e = At("$uiView.creationContext")(b);
                                    return t || e
                                }
                            };
                        Ge.traceUIViewEvent("Linking", E), c.data("$uiView", { $uiView: E }), d(), g = t.registerUIView(E), e.$on("$destroy", function() { Ge.traceUIViewEvent("Destroying/Unregistering", E), g() })
                    }
                }
            };
        return s
    }], Ot.$inject = ["$compile", "$controller", "$transitions", "$view", "$q", "$timeout"];
    var _i = "function" == typeof Qn.module("ui.router").component,
        $i = 0;
    Qn.module("ui.router.state").directive("uiView", wi), Qn.module("ui.router.state").directive("uiView", Ot), Qn.module("ui.router.state").provider("$uiViewScroll", jt);
    t.core = zn, t.default = "ui.router", t.fromJson = ce, t.toJson = fe, t.copy = le, t.forEach = he, t.extend = pe, t.equals = de, t.identity = f, t.noop = l, t.createProxyFunctions = h, t.inherit = ve, t.inArray = me, t._inArray = p, t.removeFrom = ye, t._removeFrom = d, t.pushTo = ge, t._pushTo = v, t.deregAll = we, t.defaults = m, t.mergeR = _e, t.ancestors = y, t.pick = g, t.omit = w, t.pluck = _, t.filter = $, t.find = S, t.mapObj = $e, t.map = b, t.values = Se, t.allTrueR = be, t.anyTrueR = Re, t.unnestR = Ee, t.flattenR = Te, t.pushR = R, t.uniqR = Ce, t.unnest = Pe, t.flatten = ke, t.assertPredicate = Oe, t.assertMap = xe, t.assertFn = E, t.pairs = je, t.arrayTuples = T, t.applyPairs = C, t.tail = P, t._extend = x, t.sortBy = Ie, t.composeSort = Ve, t.silenceUncaughtInPromise = Ae, t.silentRejection = He, t.notImplemented = oe, t.services = ae, t.Glob = Lt, t.curry = r, t.compose = n, t.pipe = i, t.prop = It, t.propEq = Vt, t.parse = At, t.not = Ht, t.and = o, t.or = a, t.all = qt, t.any = Dt, t.is = Nt, t.eq = Ft, t.val = Ut, t.invoke = u, t.pattern = s, t.isUndefined = Wt, t.isDefined = zt, t.isNull = Jt, t.isNullOrUndefined = Qt, t.isFunction = Kt, t.isNumber = Yt, t.isString = Zt, t.isObject = Xt, t.isArray = te, t.isDate = ee, t.isRegExp = re, t.isState = ne, t.isInjectable = c, t.isPromise = ie, t.Queue = qe, t.maxLength = B, t.padString = G, t.kebobString = W, t.functionToString = z, t.fnToString = J, t.stringify = Q, t.beforeAfterSubstr = mr, t.splitOnDelim = K, t.joinNeighborsR = Y, t.Trace = Be, t.trace = Ge, t.Param = tr, t.ParamTypes = yr, t.StateParams = gr, t.ParamType = Ye, t.PathNode = er, t.PathUtils = rr, t.resolvePolicies = or, t.defaultResolvePolicy = nr, t.Resolvable = ir, t.NATIVE_INJECTOR_TOKEN = cr, t.ResolveContext = fr, t.resolvablesBuilder = nt, t.StateBuilder = br, t.StateObject = Mt, t.StateMatcher = Rr, t.StateQueueManager = Er, t.StateRegistry = Tr, t.StateService = Sn, t.TargetState = We, t.HookBuilder = Ke, t.matchState = H, t.RegisteredHook = Qe, t.makeEvent = q, t.Rejection = Ne, t.Transition = pr, t.TransitionHook = Je, t.TransitionEventType = yn, t.defaultTransOpts = _n, t.TransitionService = $n, t.UrlMatcher = kr, t.UrlMatcherFactory = Or, t.UrlRouter = Ar, t.UrlRuleFactory = xr, t.BaseUrlRule = Ir, t.UrlService = Br, t.ViewService = Hr, t.UIRouterGlobals = qr, t.UIRouter = Wr, t.$q = bn, t.$injector = En, t.BaseLocationServices = Vn, t.HashLocationService = Hn, t.MemoryLocationService = Dn, t.PushStateLocationService = Fn, t.MemoryLocationConfig = Un, t.BrowserLocationConfig = Ln, t.splitHash = Cn, t.splitQuery = Pn, t.splitEqual = kn, t.trimHashVal = On, t.keyValsToObjectR = xn, t.getParams = jn, t.parseUrl = ht, t.buildUrl = In, t.locationPluginFactory = pt, t.servicesPlugin = dt, t.hashLocationPlugin = Mn, t.pushStateLocationPlugin = Bn, t.memoryLocationPlugin = Gn, t.UIRouterPluginBase = Wn, t.watchDigests = _t, t.getLocals = mi, t.getNg1ViewConfigFactory = vt, t.ng1ViewsBuilder = mt, t.Ng1ViewConfig = Zn, t.StateProvider = ri, t.UrlRouterProvider = oi, Object.defineProperty(t, "__esModule", { value: !0 })
});
//# sourceMappingURL=angular-ui-router.min.js.map
