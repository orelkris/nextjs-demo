webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _home_krisassaurus_repos_learningNext_02_starting_project_repeat_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n\n\n\nvar _jsxFileName = \"/home/krisassaurus/repos/learningNext/02-starting-project-repeat/pages/[meetupId]/index.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_krisassaurus_repos_learningNext_02_starting_project_repeat_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar MeetupDetail = function MeetupDetail(props) {\n  var meetupDetails = {\n    id: 'm1',\n    title: 'first meetups',\n    image: {\n      src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Panorama_of_Moscow_Kremlin.jpg',\n      alt: 'Kremlin and Red Square'\n    },\n    address: 'Red Square, Moscow',\n    description: 'This is a first meetup'\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread({}, props.meetupData), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = MeetupDetail;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"MeetupDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz85MmE2Il0sIm5hbWVzIjpbIk1lZXR1cERldGFpbCIsInByb3BzIiwibWVldHVwRGV0YWlscyIsImlkIiwidGl0bGUiLCJpbWFnZSIsInNyYyIsImFsdCIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIm1lZXR1cERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCLE1BQU1DLGFBQWEsR0FBRztBQUNwQkMsTUFBRSxFQUFFLElBRGdCO0FBRXBCQyxTQUFLLEVBQUUsZUFGYTtBQUdwQkMsU0FBSyxFQUFFO0FBQ0xDLFNBQUcsRUFBRSxvRkFEQTtBQUVMQyxTQUFHLEVBQUU7QUFGQSxLQUhhO0FBT3BCQyxXQUFPLEVBQUUsb0JBUFc7QUFRcEJDLGVBQVcsRUFBRTtBQVJPLEdBQXRCO0FBV0Esc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSwyQkFDRSxxRUFBQyx5RUFBRCxvQkFBbUJSLEtBQUssQ0FBQ1MsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBakJEOztLQUFNVixZOztBQWdFU0EsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVldHVwRGV0YWlscyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscyc7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5jb25zdCBNZWV0dXBEZXRhaWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbWVldHVwRGV0YWlscyA9IHtcbiAgICBpZDogJ20xJyxcbiAgICB0aXRsZTogJ2ZpcnN0IG1lZXR1cHMnLFxuICAgIGltYWdlOiB7XG4gICAgICBzcmM6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2EvYWIvUGFub3JhbWFfb2ZfTW9zY293X0tyZW1saW4uanBnJyxcbiAgICAgIGFsdDogJ0tyZW1saW4gYW5kIFJlZCBTcXVhcmUnLFxuICAgIH0sXG4gICAgYWRkcmVzczogJ1JlZCBTcXVhcmUsIE1vc2NvdycsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZmlyc3QgbWVldHVwJyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxNZWV0dXBEZXRhaWxzIHsuLi5wcm9wcy5tZWV0dXBEYXRhfSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICdtb25nb2RiK3NydjovL2tyaXNhc3NhdXJ1czpHNjg4MjA2MURhdGEhQGNsdXN0ZXIwLnRvdmtqbzQubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXG4gICk7XG5cbiAgY29uc3QgZGIgPSBjb25uZWN0LmRiKCk7XG5cbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cbiAgY29uc3QgbWVldHVwc0ZpbmQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XG5cbiAgY29ubmVjdC5jbG9zZSgpO1xuXG4gIHJldHVybiB7XG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIHBhdGhzOiBtZWV0dXBzRmluZC5tYXAoKG1lZXR1cCkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICB9KSksXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XG5cbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgJ21vbmdvZGIrc3J2Oi8va3Jpc2Fzc2F1cnVzOkc2ODgyMDYxRGF0YSFAY2x1c3RlcjAudG92a2pvNC5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbiAgKTtcblxuICBjb25zdCBkYiA9IGNvbm5lY3QuZGIoKTtcblxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICBjb25zdCBtZWV0dXBGaW5kID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7IF9pZDogbWVldHVwSWQgfSk7XG5cbiAgY29ubmVjdC5jbG9zZSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cERhdGE6IG1lZXR1cEZpbmQsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ })

})