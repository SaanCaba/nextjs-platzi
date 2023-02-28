"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112,405];
exports.modules = {

/***/ 6668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "loadDataDetail": () => (/* binding */ loadDataDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8769);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



// import { loadDataAvo } from "pages";

// export const getServerSideProps = async (context) => {
//   try {
//     let result =  await fetch('https://nextjs-platzi-ten.vercel.app/api/avo/' + context.params.id)
//     let response = await result.json()
//     let avo = response.data
//     return {
//       props:{
//         avo
//       }
//     } 
//   } catch (error) {
//     console.log(error)
//     return error.message
//   }
// }
// // para rutas dinámicas.
const getStaticPaths = async ()=>{
    // const response = await fetch(process.env.API_HOST)
    // const result = await response.json()
    // const avoList: TProduct[] = result.data
    const avoList = await (0,pages__WEBPACK_IMPORTED_MODULE_2__.loadDataAvo)();
    // sacamos todos los paths
    const avoPaths = avoList.map((e)=>{
        return {
            params: {
                id: e.id
            }
        };
    });
    return {
        paths: avoPaths,
        // nos genera un 404,  con todos los paths inexistentes
        fallback: false
    };
};
async function loadDataDetail(id) {
    const response = await fetch("https://nextjs-platzi-ten.vercel.app/api/avo/" + id);
    const result = await response.json();
    return result.data;
}
const getStaticProps = async (context)=>{
    // const response = await fetch(process.env.API_HOST + context.params.id)
    // const result = await response.json()
    // const avo = result.data
    const avo = await loadDataDetail(context.params.id);
    return {
        props: {
            // tiene que ser el mismo nombre que lo que el componente recibe por prop.
            avo
        }
    };
};
function ProductItem({ avo  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: avo.name.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    width: 300,
                    height: 300,
                    src: avo.image,
                    alt: avo.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: avo.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        width: "70%"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: avo.attributes.description
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        color: "green",
                        fontWeight: "bold"
                    },
                    children: [
                        "$ ",
                        avo.price
                    ]
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            children: "Cargando..."
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);


/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675,769], () => (__webpack_exec__(6668)));
module.exports = __webpack_exports__;

})();