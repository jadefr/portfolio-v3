(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 656:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Tl1eP",
	"span": "Footer_span__vqKjP",
	"a_next": "Footer_a_next__rXykK",
	"footer_icons": "Footer_footer_icons__K8bLq",
	"linkedin": "Footer_linkedin__gc56f"
};


/***/ }),

/***/ 211:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Nav_nav__Bx_p6",
	"a": "Nav_a__0n71o"
};


/***/ }),

/***/ 962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./styles/Nav.module.css
var Nav_module = __webpack_require__(211);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./components/Nav.jsx



const Nav = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "nav navbar navbar-expand-lg p-3 border-bottom align-items-center navbar-dark",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (Nav_module_default()).a,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "pointer",
                            children: "Jade Ferreira"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#navbarNavAltMarkup",
                    "aria-controls": "navbarNavAltMarkup",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarNavAltMarkup",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "navbar-nav",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/work",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: (Nav_module_default()).a,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "ms-5 pointer lead my-auto",
                                        children: "Work"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/education",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: (Nav_module_default()).a,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "ms-5 pointer lead my-auto",
                                        children: "Education"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/projects",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: (Nav_module_default()).a,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "ms-5 pointer lead my-auto",
                                        children: "Projects"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/papers",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: (Nav_module_default()).a,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "ms-5 pointer lead my-auto",
                                        children: "Papers"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Nav = (Nav);

// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(656);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.jsx


const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (Footer_module_default()).footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).footer_text,
                children: [
                    "Developed in",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Footer_module_default()).span,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://github.com/jadefr/portfolio-v3",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: (Footer_module_default()).a_next,
                            children: "Next.js"
                        })
                    }),
                    "by",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Footer_module_default()).span,
                        children: "Jade Ferreira"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).footer_icons,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/jadefr",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                            width: 25,
                            height: 25
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://linkedin.com/in/jadefr",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg",
                            width: 25,
                            height: 25,
                            className: (Footer_module_default()).linkedin
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Jade Ferreira"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
                        rel: "stylesheet",
                        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664], () => (__webpack_exec__(962)));
module.exports = __webpack_exports__;

})();