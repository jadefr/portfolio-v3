(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},8045:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(e,n)||c(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}var l,s=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(n,t,r):n[t]=e[t]}return n.default=e,n}(t(7294)),u=(l=t(5443))&&l.__esModule?l:{default:l},f=t(5809),d=t(7190),_=t(9977);function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=arguments,t=function(t){var r=null!=n[t]?n[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){m(e,n,r[n])}))},r=1;r<arguments.length;r++)t(r);return e}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},w=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(e){var n=e.config,t=e.src,r=e.width,i=e.quality;0;if(t.endsWith(".svg")&&!n.dangerouslyAllowSVG)return t;return"".concat(n.path,"?url=").concat(encodeURIComponent(t),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var n=e.config,t=e.src,r=e.width,i=e.quality,o=new URL("".concat(n.path).concat(A(t))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var n=e.config,t=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(n.path).concat(o).concat(A(t))}],["akamai",function(e){var n=e.config,t=e.src,r=e.width;return"".concat(n.path).concat(A(t),"?imwidth=").concat(r)}],["custom",function(e){var n=e.src;throw new Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(e){return void 0!==e.default}function b(e){var n=e.config,t=e.src,r=e.unoptimized,i=e.layout,o=e.width,c=e.quality,l=e.sizes,s=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,n,t,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===t||"responsive"===t)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(r);c)s.push(parseInt(c[2]));if(s.length){var u,f=.01*(u=Math).min.apply(u,a(s));return{widths:o.filter((function(e){return e>=i[0]*f})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof n||"fill"===t||"responsive"===t?{widths:i,kind:"w"}:{widths:a(new Set([n,2*n].map((function(e){return o.find((function(n){return n>=e}))||o[o.length-1]})))),kind:"x"}}(n,o,i,l),f=u.widths,d=u.kind,_=f.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:f.map((function(e,r){return"".concat(s({config:n,src:t,quality:c,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:s({config:n,src:t,quality:c,width:f[_]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var n,t=(null===(n=e.config)||void 0===n?void 0:n.loader)||"default",r=y.get(t);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(t))}function A(e){return"/"===e[0]?e.slice(1):e}},3678:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893),i=t(9008),o=(t(5675),t(214)),a=t.n(o);function c(){return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Jade Ferreira | Portfolio"}),(0,r.jsx)("meta",{name:"description",content:"Portfolio for BackEnd Engineer"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:a().main_index,children:[(0,r.jsxs)("h1",{className:a().title,children:["BackEnd ",(0,r.jsx)("span",{className:a().span,children:"Engineer"})]}),(0,r.jsxs)("div",{className:a().tech,children:[(0,r.jsxs)("ul",{className:a().ul,children:[(0,r.jsx)("li",{children:"Java"}),(0,r.jsx)("li",{children:"Kubernetes"}),(0,r.jsx)("li",{children:"Docker"}),(0,r.jsx)("li",{children:"Shell Script"}),(0,r.jsx)("li",{children:"JavaScript"}),(0,r.jsx)("li",{children:"NodeJS"})]}),(0,r.jsxs)("ul",{className:a().ul,children:[(0,r.jsx)("li",{children:"Systems Design"}),(0,r.jsx)("li",{children:"Project Planning"}),(0,r.jsx)("li",{children:"Documentation"})]})]})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",main_projects:"Home_main_projects__UfkXX",main_index:"Home_main_index__2pHAw",main_papers:"Home_main_papers__brtIs",span:"Home_span__iRRqp",title:"Home_title__T09hD",subtitle:"Home_subtitle__j4GMd",description:"Home_description__41Owk",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",card_papers_1:"Home_card_papers_1__ao5Bh",card_papers_2:"Home_card_papers_2___5Ynz",logo:"Home_logo__27_tb",tech:"Home_tech__lXvBl",ul:"Home_ul__fkmwq",text_box:"Home_text_box__bvna8",image:"Home_image__yn5pu",text:"Home_text__upzyl",a_section:"Home_a_section__MsUtD",eric_span:"Home_eric_span__O7HTR",journal_text:"Home_journal_text__x_Mmn"}},5675:function(e,n,t){t(8045)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);