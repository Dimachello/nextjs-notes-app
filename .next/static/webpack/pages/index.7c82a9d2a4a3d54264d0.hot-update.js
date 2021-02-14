webpackHotUpdate_N_E("pages/index",{

/***/ "./components/InputSection/index.tsx":
/*!*******************************************!*\
  !*** ./components/InputSection/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputSectionContainer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_dima_Desktop_next_practise_next_notes_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_StatusModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/StatusModal */ \"./components/common/StatusModal.tsx\");\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/handlers */ \"./utils/handlers.ts\");\n/* harmony import */ var _constants_stylesConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/stylesConstants */ \"./constants/stylesConstants.ts\");\n\n\n\nvar _jsxFileName = \"/home/dima/Desktop/next-practise/next-notes/components/InputSection/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction InputSectionContainer(_ref) {\n  _s();\n\n  var topicsList = _ref.topicsList,\n      getTopicsList = _ref.getTopicsList;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var addButtonHandler = function addButtonHandler() {\n    if (!input.length) {\n      _common_StatusModal__WEBPACK_IMPORTED_MODULE_5__[\"StatusModal\"].fire({\n        title: 'Topic name is empty',\n        icon: 'warning'\n      });\n      return;\n    }\n\n    var splitted = input.split('');\n    var filtered = splitted.filter(function (_char) {\n      return _char !== \" \";\n    });\n\n    if (filtered.length === 0) {\n      _common_StatusModal__WEBPACK_IMPORTED_MODULE_5__[\"StatusModal\"].fire({\n        title: 'Topic name is empty'\n      });\n      return;\n    }\n\n    var date = moment__WEBPACK_IMPORTED_MODULE_4___default()().format(\"D:MM:YY MMMM\");\n\n    var updated = Object(_home_dima_Desktop_next_practise_next_notes_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(topicsList);\n\n    var topic = {\n      id: topicsList.length,\n      createdAt: date,\n      text: input,\n      labels: []\n    };\n    updated.push(topic);\n    localStorage.setItem('list', JSON.stringify({\n      topics: updated\n    }));\n    getTopicsList(updated);\n    setInput(function () {\n      return '';\n    });\n    _common_StatusModal__WEBPACK_IMPORTED_MODULE_5__[\"StatusModal\"].fire({\n      title: 'Topic added!'\n    });\n  };\n\n  var keyPressHandler = function keyPressHandler(event) {\n    if (event.key === 'Enter') {\n      addButtonHandler();\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(InputSection, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(InputField, {\n      value: input,\n      onChange: function onChange(event) {\n        return Object(_utils_handlers__WEBPACK_IMPORTED_MODULE_6__[\"inputChangeHandler\"])(event, setInput);\n      },\n      onKeyPress: keyPressHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AddButton, {\n      onClick: addButtonHandler,\n      children: \"Add topic\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, this);\n}\n\n_s(InputSectionContainer, \"WVveI0ACa0LqOSOlGzu58xcz+KE=\");\n\n_c = InputSectionContainer;\nvar InputSection = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section.withConfig({\n  displayName: \"InputSection\",\n  componentId: \"sc-1by77u8-0\"\n})([\"display:flex;justify-content:center;align-items:center;\"]);\n_c2 = InputSection;\nvar InputField = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input.attrs(function (props) {\n  return {\n    type: 'text',\n    placeholder: 'Enter topic name'\n  };\n}).withConfig({\n  displayName: \"InputSection__InputField\",\n  componentId: \"sc-1by77u8-1\"\n})([\"padding:0.5rem;border:1px solid transparent;font-size:2rem;border-bottom:1px;border-style:solid;border-color:\", \";outline:none;\"], _constants_stylesConstants__WEBPACK_IMPORTED_MODULE_7__[\"MainSecondary\"]);\n_c3 = InputField;\nvar AddButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n  displayName: \"InputSection__AddButton\",\n  componentId: \"sc-1by77u8-2\"\n})([\"margin-left:1rem;padding:0.8rem;font-size:1.5rem;border:none;border-radius:0.3rem;background-color:rgb(222,127,82);color:white;outline:none;\"]);\n_c4 = AddButton;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"InputSectionContainer\");\n$RefreshReg$(_c2, \"InputSection\");\n$RefreshReg$(_c3, \"InputField\");\n$RefreshReg$(_c4, \"AddButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dFNlY3Rpb24vaW5kZXgudHN4PzJmZmYiXSwibmFtZXMiOlsiSW5wdXRTZWN0aW9uQ29udGFpbmVyIiwidG9waWNzTGlzdCIsImdldFRvcGljc0xpc3QiLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJhZGRCdXR0b25IYW5kbGVyIiwibGVuZ3RoIiwiU3RhdHVzTW9kYWwiLCJmaXJlIiwidGl0bGUiLCJpY29uIiwic3BsaXR0ZWQiLCJzcGxpdCIsImZpbHRlcmVkIiwiZmlsdGVyIiwiY2hhciIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJ1cGRhdGVkIiwidG9waWMiLCJpZCIsImNyZWF0ZWRBdCIsInRleHQiLCJsYWJlbHMiLCJwdXNoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b3BpY3MiLCJrZXlQcmVzc0hhbmRsZXIiLCJldmVudCIsImtleSIsImlucHV0Q2hhbmdlSGFuZGxlciIsIklucHV0U2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJJbnB1dEZpZWxkIiwiYXR0cnMiLCJwcm9wcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIk1haW5TZWNvbmRhcnkiLCJBZGRCdXR0b24iLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxxQkFBVCxPQUE4RDtBQUFBOztBQUFBLE1BQTdCQyxVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCOztBQUFBLGtCQUNqREMsc0RBQVEsQ0FBQyxFQUFELENBRHlDO0FBQUEsTUFDcEVDLEtBRG9FO0FBQUEsTUFDN0RDLFFBRDZEOztBQUczRSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFFN0IsUUFBSSxDQUFDRixLQUFLLENBQUNHLE1BQVgsRUFBbUI7QUFDakJDLHFFQUFXLENBQUNDLElBQVosQ0FBaUI7QUFDZkMsYUFBSyxFQUFFLHFCQURRO0FBRWZDLFlBQUksRUFBRTtBQUZTLE9BQWpCO0FBSUE7QUFDRDs7QUFFRCxRQUFNQyxRQUFRLEdBQUdSLEtBQUssQ0FBQ1MsS0FBTixDQUFZLEVBQVosQ0FBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csTUFBVCxDQUFnQixVQUFDQyxLQUFEO0FBQUEsYUFBVUEsS0FBSSxLQUFLLEdBQW5CO0FBQUEsS0FBaEIsQ0FBakI7O0FBRUEsUUFBSUYsUUFBUSxDQUFDUCxNQUFULEtBQW9CLENBQXhCLEVBQTJCO0FBQ3pCQyxxRUFBVyxDQUFDQyxJQUFaLENBQWlCO0FBQ2ZDLGFBQUssRUFBRTtBQURRLE9BQWpCO0FBR0E7QUFDRDs7QUFDRCxRQUFNTyxJQUFJLEdBQUdDLDZDQUFNLEdBQUdDLE1BQVQsQ0FBZ0IsY0FBaEIsQ0FBYjs7QUFDQSxRQUFNQyxPQUFPLEdBQUcsdUtBQUluQixVQUFQLENBQWI7O0FBQ0EsUUFBTW9CLEtBQUssR0FBRztBQUNaQyxRQUFFLEVBQUVyQixVQUFVLENBQUNNLE1BREg7QUFFWmdCLGVBQVMsRUFBRU4sSUFGQztBQUdaTyxVQUFJLEVBQUVwQixLQUhNO0FBSVpxQixZQUFNLEVBQUU7QUFKSSxLQUFkO0FBT0FMLFdBQU8sQ0FBQ00sSUFBUixDQUFhTCxLQUFiO0FBRUFNLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVDLFlBQU0sRUFBRVg7QUFBVixLQUFmLENBQTdCO0FBQ0FsQixpQkFBYSxDQUFDa0IsT0FBRCxDQUFiO0FBQ0FmLFlBQVEsQ0FBQztBQUFBLGFBQU0sRUFBTjtBQUFBLEtBQUQsQ0FBUjtBQUNBRyxtRUFBVyxDQUFDQyxJQUFaLENBQWlCO0FBQ2ZDLFdBQUssRUFBRTtBQURRLEtBQWpCO0FBR0QsR0FwQ0Q7O0FBc0NBLE1BQU1zQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixRQUFJQSxLQUFLLENBQUNDLEdBQU4sS0FBYyxPQUFsQixFQUEyQjtBQUN6QjVCLHNCQUFnQjtBQUNqQjtBQUNGLEdBSkQ7O0FBTUEsc0JBQ0UscUVBQUMsWUFBRDtBQUFBLDRCQUNFLHFFQUFDLFVBQUQ7QUFDRSxXQUFLLEVBQUVGLEtBRFQ7QUFFRSxjQUFRLEVBQUUsa0JBQUE2QixLQUFLO0FBQUEsZUFBSUUsMEVBQWtCLENBQUNGLEtBQUQsRUFBUTVCLFFBQVIsQ0FBdEI7QUFBQSxPQUZqQjtBQUdFLGdCQUFVLEVBQUUyQjtBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLHFFQUFDLFNBQUQ7QUFBVyxhQUFPLEVBQUUxQixnQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztHQXpEdUJOLHFCOztLQUFBQSxxQjtBQTJEeEIsSUFBTW9DLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSwrREFBbEI7TUFBTUYsWTtBQU1OLElBQU1HLFVBQVUsR0FBR0YseURBQU0sQ0FBQ2pDLEtBQVAsQ0FBYW9DLEtBQWIsQ0FBbUIsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDOUNDLFFBQUksRUFBRSxNQUR3QztBQUU5Q0MsZUFBVyxFQUFFO0FBRmlDLEdBQUw7QUFBQSxDQUF4QixDQUFIO0FBQUE7QUFBQTtBQUFBLHdJQVNFQyx3RUFURixDQUFoQjtNQUFNTCxVO0FBYU4sSUFBTU0sU0FBUyxHQUFHUix5REFBTSxDQUFDUyxNQUFWO0FBQUE7QUFBQTtBQUFBLG9KQUFmO01BQU1ELFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0U2VjdGlvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgU3RhdHVzTW9kYWwgfSBmcm9tICcuLi9jb21tb24vU3RhdHVzTW9kYWwnO1xuXG5pbXBvcnQgeyBpbnB1dENoYW5nZUhhbmRsZXIgfSBmcm9tICcuLi8uLi91dGlscy9oYW5kbGVycyc7XG5pbXBvcnQgeyBNYWluU2Vjb25kYXJ5IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3N0eWxlc0NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0U2VjdGlvbkNvbnRhaW5lcih7IHRvcGljc0xpc3QsIGdldFRvcGljc0xpc3QgfSkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBhZGRCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuXG4gICAgaWYgKCFpbnB1dC5sZW5ndGgpIHtcbiAgICAgIFN0YXR1c01vZGFsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ1RvcGljIG5hbWUgaXMgZW1wdHknLFxuICAgICAgICBpY29uOiAnd2FybmluZydcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzcGxpdHRlZCA9IGlucHV0LnNwbGl0KCcnKTtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHNwbGl0dGVkLmZpbHRlcigoY2hhcikgPT4gY2hhciAhPT0gXCIgXCIpO1xuXG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgU3RhdHVzTW9kYWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnVG9waWMgbmFtZSBpcyBlbXB0eSdcbiAgICAgIH0pXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQoKS5mb3JtYXQoXCJEOk1NOllZIE1NTU1cIilcbiAgICBjb25zdCB1cGRhdGVkID0gWy4uLnRvcGljc0xpc3RdO1xuICAgIGNvbnN0IHRvcGljID0ge1xuICAgICAgaWQ6IHRvcGljc0xpc3QubGVuZ3RoLFxuICAgICAgY3JlYXRlZEF0OiBkYXRlLFxuICAgICAgdGV4dDogaW5wdXQsXG4gICAgICBsYWJlbHM6IFtdXG4gICAgfTtcblxuICAgIHVwZGF0ZWQucHVzaCh0b3BpYyk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHsgdG9waWNzOiB1cGRhdGVkIH0pKTtcbiAgICBnZXRUb3BpY3NMaXN0KHVwZGF0ZWQpO1xuICAgIHNldElucHV0KCgpID0+ICcnKTtcbiAgICBTdGF0dXNNb2RhbC5maXJlKHtcbiAgICAgIHRpdGxlOiAnVG9waWMgYWRkZWQhJ1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBrZXlQcmVzc0hhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgYWRkQnV0dG9uSGFuZGxlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPElucHV0U2VjdGlvbj5cbiAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGlucHV0Q2hhbmdlSGFuZGxlcihldmVudCwgc2V0SW5wdXQpfVxuICAgICAgICBvbktleVByZXNzPXtrZXlQcmVzc0hhbmRsZXJ9XG4gICAgICAvPlxuICAgICAgPEFkZEJ1dHRvbiBvbkNsaWNrPXthZGRCdXR0b25IYW5kbGVyfT5BZGQgdG9waWM8L0FkZEJ1dHRvbj5cbiAgICA8L0lucHV0U2VjdGlvbj5cbiAgKVxufVxuXG5jb25zdCBJbnB1dFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBJbnB1dEZpZWxkID0gc3R5bGVkLmlucHV0LmF0dHJzKHByb3BzID0+ICh7XG4gIHR5cGU6ICd0ZXh0JyxcbiAgcGxhY2Vob2xkZXI6ICdFbnRlciB0b3BpYyBuYW1lJ1xufSkpYFxuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAke01haW5TZWNvbmRhcnl9O1xuICBvdXRsaW5lOiBub25lO1xuYDtcblxuY29uc3QgQWRkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmc6IDAuOHJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAxMjcsIDgyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InputSection/index.tsx\n");

/***/ })

})