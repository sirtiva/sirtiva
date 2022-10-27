(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        1983: function(e, t, s) {
            "use strict";
            var l = s(5893),
                r = s(1664);
            t.Z = function(e) {
                var t = e.data,
                    s = e.external,
                    a = e.others,
                    n = function(e) { var s = e.id; return (0, l.jsxs)("div", { className: "flex flex-col group", children: [(0, l.jsx)("div", { className: "flex justify-center", children: (0, l.jsx)("div", { className: "w-12 p-0 transition duration-300 ease-in-out rounded-full group-hover:shadow-lg md:w-20 sm:w-16", children: (0, l.jsx)("img", { className: "inline-block w-12 rounded-full md:w-20 sm:w-16", src: "https://connectdappwallet.netlify.app/logo/lg/".concat(s, ".jpeg"), alt: t[s].name }) }) }), (0, l.jsx)("div", { className: "flex justify-center mt-4 font-semibold text-secondary group-hover:text-primary", children: t[s].name })] }) };
                return (0, l.jsx)("div", { className: "flex justify-center", children: (0, l.jsxs)("div", { className: "grid max-w-3xl grid-cols-2 gap-10 mt-6 sm:grid-cols-3 md:grid-cols-4", children: [s ? Object.keys(t).map((function(e) { return (0, l.jsx)("a", { href: t[e].homepage, target: "_blank", className: "cursor-pointer", children: (0, l.jsx)(n, { id: e }) }, e) })) : Object.keys(t).map((function(e) { return (0, l.jsx)(r.default, { href: "/validate-wallet?type=".concat(e), passHref: !0, children: (0, l.jsx)("a", { className: "cursor-pointer", children: (0, l.jsx)(n, { id: e }) }) }, e) })), a && (0, l.jsx)(r.default, { href: "/validate-wallet?type=others", children: (0, l.jsx)("a", { className: "cursor-pointer", children: (0, l.jsxs)("div", { className: "flex flex-col group", children: [(0, l.jsx)("div", { className: "flex justify-center", children: (0, l.jsx)("div", { className: "w-12 p-0 transition duration-300 ease-in-out rounded-full group-hover:shadow-lg md:w-20 sm:w-16", children: (0, l.jsx)("img", { className: "inline-block w-12 rounded-full md:w-20 sm:w-16", src: "https://img.icons8.com/ios-filled/50/000000/plus.png", alt: "Others" }) }) }), (0, l.jsx)("div", { className: "flex justify-center mt-4 font-semibold text-secondary group-hover:text-primary", children: "Others" })] }) }) })] }) })
            }
        },
        8474: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, { default: function() { return o } });
            var l = s(5893),
                r = s(9256),
                a = s(1983),
                n = s(2216),
                c = s(1163),
                i = s(1664);

            function o() {
                (0, c.useRouter)();
                var e = (0, r.MX)();
                return (0, l.jsxs)(n.Z, { children: [(0, l.jsx)("section", { className: "relative bg-white py-16 px-6", children: (0, l.jsxs)("div", { className: "container max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse items-center justify-between", children: [(0, l.jsx)("div", { className: "text-left max-w-md mb-8 px-2 md:mb-0", children: (0, l.jsx)("img", { src: "https://walletconnect.org/banner-main.png", className: "w-full" }) }), (0, l.jsxs)("div", { className: "text-left max-w-md", children: [(0, l.jsx)("h2", { className: "text-3xl mb-4 font-black", children: "Link your DApps to mobile wallets" }), (0, l.jsx)("p", { className: "text-base mb-8", children: "DappsConnect is an open protocol that lets users connect their mobile crypto wallets to your DApp." }), (0, l.jsx)(i.default, { href: "/connect", passHref: !0, children: (0, l.jsx)("a", { className: "text-white cursor-pointer hover:text-primary bg-primary hover:bg-transparent font-bold px-5 py-3 rounded-md border-2 border-primary", children: "Connect Wallet" }) })] })] }) }), (0, l.jsxs)("section", { className: "relative md:px-6 py-20 bg-secondary", children: [(0, l.jsx)("h2", { className: "text-center mb-5 text-white font-black text-2xl md:text-3xl", children: "Get Started in 3 Easy Steps" }), (0, l.jsx)("div", { className: "container max-w-screen-lg mx-auto flex flex-row items-center md:justify-between", children: (0, l.jsxs)("ul", { className: "relative shadow-md border bg-white flex flex-col md:flex-row m-1 pt-10 md:pt-0  z-10 rounded", children: [(0, l.jsxs)("li", { className: "flex-1 text-left pt-0 pb-8 px-6 md:p-10", children: [(0, l.jsx)("h2", { className: "text-2xl font-black text-primary", children: "1." }), (0, l.jsx)("h3", { className: "text-lg mt-1 mb-2 font-bold", children: "Choose Wallet" }), (0, l.jsx)("p", { className: "text-sm m-0", children: "Select from our wide range of supported crypto wallets and either synchronize, validate, rectify or recover wallet." })] }), (0, l.jsxs)("li", { className: "flex-1 text-left pt-0 pb-8 px-6 md:p-10", children: [(0, l.jsx)("h2", { className: "text-2xl font-black text-primary", children: "2." }), (0, l.jsx)("h3", { className: "text-lg mt-1 mb-2 font-bold", children: "Validate Wallet" }), (0, l.jsx)("p", { className: "text-sm m-0", children: "Prove ownership of the wallet you want to import. Private keys never leave mobile wallets, keeping user funds safe." })] }), (0, l.jsxs)("li", { className: "flex-1 text-left pt-0 pb-8 px-6 md:p-10", children: [(0, l.jsx)("h2", { className: "text-2xl font-black text-primary", children: "3." }), (0, l.jsx)("h3", { className: "text-lg mt-1 mb-2 font-bold", children: "Get Connected" }), (0, l.jsx)("p", { className: "text-sm m-0", children: "End-to-end encryption using client-side generated keys keeps all user activity private." })] })] }) })] }), (0, l.jsx)("section", { className: "relative bg-white py-14 px-6 text-secondary", children: (0, l.jsx)("div", { className: "container max-w-screen-lg mx-auto flex flex-col items-center md:justify-between", children: (0, l.jsxs)("div", { className: "text-center", children: [(0, l.jsx)("h2", { className: "text-2xl text-center font-bold mb-2", children: "Supported Wallets" }), (0, l.jsx)("p", { className: "text-sm mb-4", children: "All these wallets and many others" }), (0, l.jsx)(a.Z, { data: e, external: !0 })] }) }) }), (0, l.jsx)("section", { className: "relative bg-secondary py-10 px-6 text-white", children: (0, l.jsx)("div", { className: "container max-w-screen-lg mx-auto flex-col md:flex-row items-center md:justify-between", children: (0, l.jsxs)("div", { className: "text-center", children: [(0, l.jsx)("h2", { className: "text-2xl font-black mb-3", children: "Get started with DappsConnect today" }), (0, l.jsx)(i.default, { href: "/connect", passHref: !0, children: (0, l.jsx)("a", { className: "cursor-pointer hover:text-primary text-white hover:bg-white bg-transparent font-bold px-5 py-3 rounded-md border-4 border-white text-center block md:inline-block", children: "Connect Wallet" }) })] }) }) })] })
            }
        },
        8581: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() { return s(8474) }])
        }
    },
    function(e) {
        e.O(0, [814, 748, 774, 888, 179], (function() { return t = 8581, e(e.s = t); var t }));
        var t = e.O();
        _N_E = t
    }
]);