exports.id = 0;
exports.modules = {

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("./src/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom_server__);

var _jsxFileName = '/usr/src/src/server.js';





var router = __WEBPACK_IMPORTED_MODULE_4_express___default.a.Router();
var ldap = __webpack_require__("ldapjs");

function ldapSearch() {

  //ldap.Attribute.settings.guid_format = ldap.GUID_FORMAT_B;
  var client = ldap.createClient({
    url: 'ldap://ldap.cnam.fr/cn=cldap,ou=services,dc=cnam,dc=fr',
    timeout: 5000,
    connectTimeout: 10000
  });
  var opts = {
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
              console.log('entry: %j ' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(entry.object));
            }
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
}

router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  //const users = [{username: 'lelongj',id: 1}, {username: 'dupontd',id: 2}];
  //return res.json(users);
  ldapSearch();
  console.log('OK');
  return res.json("OK");
});

var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_4_express___default()();

server.use('/users', router);

server.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_4_express___default.a.static("/usr/src/public")).get('/*', function (req, res) {
  var context = {};
  var markup = Object(__WEBPACK_IMPORTED_MODULE_5_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"],
    { context: context, location: req.url, __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      }
    },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
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
//# sourceMappingURL=0.b76d25bb689272a48543.hot-update.js.map