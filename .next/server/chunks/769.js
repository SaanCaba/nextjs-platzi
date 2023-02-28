exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 7957:
/***/ ((module) => {

// Exports
module.exports = {
	"contProduct": "product_contProduct__5c96O",
	"contProductCol": "product_contProductCol__mc7Jo",
	"title": "product_title__jlnTo",
	"price": "product_price__K1j_d",
	"contImg": "product_contImg__yRD0W",
	"imgProduct": "product_imgProduct__tGllb"
};


/***/ }),

/***/ 7:
/***/ ((module) => {

// Exports
module.exports = {
	"container-products": "index_container-products__MrXnn"
};


/***/ }),

/***/ 8769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps),
  "loadDataAvo": () => (/* binding */ loadDataAvo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Product/product.module.css
var product_module = __webpack_require__(7957);
var product_module_default = /*#__PURE__*/__webpack_require__.n(product_module);
;// CONCATENATED MODULE: ./components/Product/Product.tsx





function Product({ product  }) {
    const router = (0,router_.useRouter)();
    const onGoDetail = (id)=>{
        router.push("/" + id);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (product_module_default()).contProduct,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            onClick: ()=>onGoDetail(product.id),
            className: (product_module_default()).contProductCol,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (product_module_default()).title,
                    children: product.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (product_module_default()).contImg,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (product_module_default()).imgProduct,
                        width: 280,
                        height: 280,
                        alt: product.name,
                        src: product.image
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    className: (product_module_default()).price,
                    children: [
                        "$",
                        product.price
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Product_Product = (Product);

// EXTERNAL MODULE: ./pages/index.module.css
var index_module = __webpack_require__(7);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./pages/index.tsx




// export const getServerSideProps = async () => {
//   const response = await fetch('https://nextjs-platzi-ten.vercel.app/api/avo')
//   const result = await response.json()
//   const avoList: TProduct[] = result.data
//   return {
//     props:{
//       // tiene que ser el mismo nombre que lo que el componente recibe por prop.
//       avoList
//     }
//   }
// }
async function loadDataAvo() {
    const response = await fetch("https://nextjs-platzi-ten.vercel.app/api/avo");
    const result = await response.json();
    return result.data;
}
const getStaticProps = async ()=>{
    // const response = await fetch(process.env.API_HOST)
    // const result = await response.json()
    const avoList = await loadDataAvo();
    return {
        props: {
            // tiene que ser el mismo nombre que lo que el componente recibe por prop.
            avoList
        }
    };
};
function Home({ avoList  }) {
    // const [avo, setAvos] = useState<TProduct[]>([])
    (0,external_react_.useEffect)(()=>{
        console.log(avoList);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (index_module_default())["container-products"],
        children: avoList.length > 0 && avoList.map((e)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(Product_Product, {
                product: e
            }, e.id);
        })
    });
}


/***/ })

};
;