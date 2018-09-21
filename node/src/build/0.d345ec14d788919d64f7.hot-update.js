exports.id = 0;
exports.modules = {

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__("./src/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);



var _jsxFileName = '/usr/src/src/server.js';

var ldapSearch = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var client, opts;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:

            //ldap.Attribute.settings.guid_format = ldap.GUID_FORMAT_B;
            client = ldap.createClient({
              url: 'ldap://ldap.cnam.fr/cn=cldap,ou=services,dc=cnam,dc=fr',
              timeout: 5000,
              connectTimeout: 10000
            });
            opts = {
              filter: '(&(uid=lelongj))',
              scope: 'sub',
              attributes: ['uid', 'givenname']
            };


            console.log('--- going to try to connect user ---');

            try {
              client.bind('', '', function (error) {

                if (error) {
                  console.log('ERREUR');
                  console.log(error.message);
                  client.unbind(function (error) {
                    if (error) {
                      console.log(error.message);
                    } else {
                      console.log('client disconnected');
                    }
                  });
                } else {
                  console.log('connected');
                  client.search('ou=people,o=personnel,dc=cnam,dc=fr', opts, function (error, search) {
                    console.log('Searching.....');

                    search.on('searchEntry', function (entry) {
                      if (entry.object) {
                        console.log('entry: %j ' + __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(entry.object));
                      }
                      return entry.object;
                    });

                    search.on('error', function (error) {
                      console.error('error: ' + error.message);
                    });

                    client.unbind(function (error) {
                      if (error) {
                        console.log(error.message);
                      } else {
                        console.log('client disconnected');
                      }
                    });
                  });
                }
              });
            } catch (error) {
              console.log(error);
              client.unbind(function (error) {
                if (error) {
                  console.log(error.message);
                } else {
                  console.log('client disconnected');
                }
              });
            }

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function ldapSearch() {
    return _ref.apply(this, arguments);
  };
}();






var router = __WEBPACK_IMPORTED_MODULE_6_express___default.a.Router();
var ldap = __webpack_require__("ldapjs");

router.get('/', function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(req, res, next) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = res;
            _context2.next = 3;
            return ldapSearch();

          case 3:
            _context2.t1 = _context2.sent;
            return _context2.abrupt('return', _context2.t0.json.call(_context2.t0, _context2.t1));

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}());

var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_6_express___default()();

server.use('/users', router);

server.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_6_express___default.a.static("/usr/src/public")).get('/*', function (req, res) {
  var context = {};
  var markup = Object(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["StaticRouter"],
    { context: context, location: req.url, __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      }
    },
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      }
    })
  ));

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send('<!doctype html>\n    <html lang="">\n    <head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta charSet=\'utf-8\' />\n        <title>Welcome to Razzle</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n        ' + ( false ? '<script src="' + assets.client.js + '" defer></script>' : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n    </head>\n    <body>\n        <div id="root">' + markup + '</div>\n    </body>\n</html>');
  }
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=0.d345ec14d788919d64f7.hot-update.js.map