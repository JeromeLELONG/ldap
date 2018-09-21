exports.id = 0;
exports.modules = {

/***/ "./build/assets.json":
false,

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
false,

/***/ "./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot":
false,

/***/ "./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg":
false,

/***/ "./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf":
false,

/***/ "./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff":
false,

/***/ "./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2":
false,

/***/ "./node_modules/css-loader/lib/css-base.js":
false,

/***/ "./src/App.css":
false,

/***/ "./src/App.js":
false,

/***/ "./src/Home.css":
false,

/***/ "./src/Home.js":
false,

/***/ "./src/animate.css":
false,

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__("./src/server.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);



var server = __WEBPACK_IMPORTED_MODULE_1_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_0__server___default.a);

var currentApp = __WEBPACK_IMPORTED_MODULE_0__server___default.a;

server.listen(3000 || 3000, function (error) {
  if (error) {
    console.log(error);
  }

  console.log('🚀 started');
});

if (true) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept("./src/server.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__("./src/server.js"); /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__server__); (function () {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    var newApp = __webpack_require__("./src/server.js").default;
    server.on('request', newApp);
    currentApp = newApp;
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

/***/ }),

/***/ "./src/react.svg":
false,

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__) {

"use strict";


/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
false,

/***/ "babel-runtime/core-js/object/get-prototype-of":
false,

/***/ "babel-runtime/core-js/promise":
false,

/***/ "babel-runtime/helpers/asyncToGenerator":
false,

/***/ "babel-runtime/helpers/classCallCheck":
false,

/***/ "babel-runtime/helpers/createClass":
false,

/***/ "babel-runtime/helpers/inherits":
false,

/***/ "babel-runtime/helpers/possibleConstructorReturn":
false,

/***/ "babel-runtime/regenerator":
false,

/***/ "bluebird":
false,

/***/ "create-react-class":
false,

/***/ "express":
false,

/***/ "ldapjs":
false,

/***/ "react":
false,

/***/ "react-burger-menu":
false,

/***/ "react-dom/server":
false,

/***/ "react-router-dom":
false,

/***/ "react-router-dom/Route":
false,

/***/ "react-router-dom/Switch":
false

};
//# sourceMappingURL=0.410712b75b6af3199fa9.hot-update.js.map