"use strict";
(() => {
var exports = {};
exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 7226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9081);

const allAvos = async (req, res)=>{
    const db = new _database_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
    const { id  } = req.query;
    const avo = await db.getById(id);
    res.status(200).json({
        data: avo
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allAvos);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [81], () => (__webpack_exec__(7226)));
module.exports = __webpack_exports__;

})();