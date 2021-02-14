webpackHotUpdate_N_E("pages/contacts",{

/***/ "./components/ContactForm/index.tsx":
/*!******************************************!*\
  !*** ./components/ContactForm/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\nvar _jsxFileName = \"/home/dima/Desktop/next-practise/next-notes/components/ContactForm/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      '& .MuiTextField-root': {\n        margin: theme.spacing(1),\n        width: '100%',\n        background: 'white'\n      }\n    },\n    input: {\n      color: 'white'\n    },\n    button: {\n      margin: theme.spacing(1)\n    }\n  };\n});\nvar validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__[\"object\"]({\n  email: yup__WEBPACK_IMPORTED_MODULE_3__[\"string\"]().email('Invalid email type!').required('Required'),\n  theme: yup__WEBPACK_IMPORTED_MODULE_3__[\"string\"]().max(30, 'Must be 30 characters or less!').required('Required'),\n  question: yup__WEBPACK_IMPORTED_MODULE_3__[\"string\"]().max(200, 'Must be 200 characters or less!').required('Required')\n});\nfunction ContactForm() {\n  _s();\n\n  var classes = useStyles();\n  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__[\"useFormik\"])({\n    initialValues: {\n      email: '',\n      theme: '',\n      question: ''\n    },\n    validationSchema: validationSchema,\n    onSubmit: function onSubmit(values, _ref) {\n      var setSubmitting = _ref.setSubmitting;\n      alert(JSON.stringify(values, null, 2));\n      setSubmitting(false);\n    }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledContactForm, {\n    onSubmit: formik.handleSubmit,\n    className: classes.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormHeader, {\n      children: \"Enter your data\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      fullWidth: true,\n      type: \"email\",\n      id: \"email\",\n      name: \"email\",\n      placeholder: \"Email\",\n      value: formik.values.email,\n      onChange: formik.handleChange,\n      error: formik.touched.email && formik.errors.email,\n      helperText: formik.touched.email && formik.errors.email\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      fullWidth: true,\n      type: \"text\",\n      id: \"theme\",\n      name: \"theme\",\n      placeholder: \"Theme\",\n      value: formik.values.theme,\n      onChange: formik.handleChange,\n      error: formik.touched.theme && formik.errors.theme,\n      helperText: formik.touched.theme && formik.errors.theme\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      fullWidth: true,\n      multiline: true,\n      rows: 10,\n      id: \"question\",\n      name: \"question\",\n      placeholder: \"Question\",\n      variant: \"outlined\",\n      value: formik.values.question,\n      onChange: formik.handleChange,\n      error: formik.touched.question && formik.errors.question,\n      helperText: formik.touched.question && formik.errors.question\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      type: \"submit\",\n      color: \"primary\",\n      variant: \"contained\",\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ContactForm, \"C5g7rQO6GJW4fOIoJxJdUVhrL6g=\", false, function () {\n  return [useStyles, formik__WEBPACK_IMPORTED_MODULE_2__[\"useFormik\"]];\n});\n\n_c = ContactForm;\nvar StyledContactForm = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].form.attrs(function (props) {\n  return {};\n}).withConfig({\n  displayName: \"ContactForm__StyledContactForm\",\n  componentId: \"a6kk7w-0\"\n})([\"padding:1rem;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:0.3rem;background-color:white;box-shadow:0px 2px 1px -1px rgb(0 0 0 / 20%),0px 1px 1px 0px rgb(0 0 0 / 14%),0px 1px 3px 0px rgb(0 0 0 / 12%);\"]);\n_c2 = StyledContactForm;\nvar FormHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].h1.withConfig({\n  displayName: \"ContactForm__FormHeader\",\n  componentId: \"a6kk7w-1\"\n})([\"width:100%;justify-self:flex-start;\"]);\n_c3 = FormHeader;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ContactForm\");\n$RefreshReg$(_c2, \"StyledContactForm\");\n$RefreshReg$(_c3, \"FormHeader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS9pbmRleC50c3g/MDM2NCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiYmFja2dyb3VuZCIsImlucHV0IiwiY29sb3IiLCJidXR0b24iLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwiZW1haWwiLCJyZXF1aXJlZCIsIm1heCIsInF1ZXN0aW9uIiwiQ29udGFjdEZvcm0iLCJjbGFzc2VzIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsInRvdWNoZWQiLCJlcnJvcnMiLCJTdHlsZWRDb250YWN0Rm9ybSIsInN0eWxlZCIsImZvcm0iLCJhdHRycyIsInByb3BzIiwiRm9ybUhlYWRlciIsImgxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRiw4QkFBd0I7QUFDcEJDLGNBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQURZO0FBRXBCQyxhQUFLLEVBQUUsTUFGYTtBQUdwQkMsa0JBQVUsRUFBRTtBQUhRO0FBRHRCLEtBRCtCO0FBUXJDQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBREosS0FSOEI7QUFXckNDLFVBQU0sRUFBRTtBQUNKTixZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFESjtBQVg2QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQWdCQSxJQUFN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TUFBTSxDQUFDVSxZQVRyQjtBQVVJLFdBQUssRUFBRVYsTUFBTSxDQUFDVyxPQUFQLENBQWVkLFFBQWYsSUFBMkJHLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjZixRQVZwRDtBQVdJLGdCQUFVLEVBQUVHLE1BQU0sQ0FBQ1csT0FBUCxDQUFlZCxRQUFmLElBQTJCRyxNQUFNLENBQUNZLE1BQVAsQ0FBY2Y7QUFYekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCSixlQXdDSSxxRUFBQyxnRUFBRDtBQUNJLFVBQUksRUFBQyxRQURUO0FBRUksV0FBSyxFQUFDLFNBRlY7QUFHSSxhQUFPLEVBQUMsV0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdESDs7R0FqRXVCQyxXO1VBRUpqQixTLEVBRURvQixnRDs7O0tBSktILFc7QUFtRXhCLElBQU1lLGlCQUFpQixHQUFHQyx5REFBTSxDQUFDQyxJQUFQLENBQVlDLEtBQVosQ0FBa0IsVUFBQUMsS0FBSztBQUFBLFNBQUssRUFBTDtBQUFBLENBQXZCLENBQUg7QUFBQTtBQUFBO0FBQUEsNlBBQXZCO01BQU1KLGlCO0FBWU4sSUFBTUssVUFBVSxHQUFHSix5REFBTSxDQUFDSyxFQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUFoQjtNQUFNRCxVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db250YWN0Rm9ybS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICAnJiAuTXVpVGV4dEZpZWxkLXJvb3QnOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJ1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG59KSk7XG5cbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KHtcbiAgICBlbWFpbDogWXVwXG4gICAgICAgIC5zdHJpbmcoKVxuICAgICAgICAuZW1haWwoJ0ludmFsaWQgZW1haWwgdHlwZSEnKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgdGhlbWU6IFl1cFxuICAgICAgICAuc3RyaW5nKClcbiAgICAgICAgLm1heCgzMCwgJ011c3QgYmUgMzAgY2hhcmFjdGVycyBvciBsZXNzIScpXG4gICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICBxdWVzdGlvbjogWXVwXG4gICAgICAgIC5zdHJpbmcoKVxuICAgICAgICAubWF4KDIwMCwgJ011c3QgYmUgMjAwIGNoYXJhY3RlcnMgb3IgbGVzcyEnKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJylcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHRoZW1lOiAnJyxcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hLFxuICAgICAgICBvblN1Ym1pdDogKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRDb250YWN0Rm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm1IZWFkZXI+RW50ZXIgeW91ciBkYXRhPC9Gb3JtSGVhZGVyPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBlcnJvcj17Zm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtmb3JtaWsudG91Y2hlZC5lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9J3RoZW1lJ1xuICAgICAgICAgICAgICAgIG5hbWU9J3RoZW1lJ1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUaGVtZSdcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy50aGVtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBlcnJvcj17Zm9ybWlrLnRvdWNoZWQudGhlbWUgJiYgZm9ybWlrLmVycm9ycy50aGVtZX1cbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtmb3JtaWsudG91Y2hlZC50aGVtZSAmJiBmb3JtaWsuZXJyb3JzLnRoZW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICAgICAgICBpZD0ncXVlc3Rpb24nXG4gICAgICAgICAgICAgICAgbmFtZT0ncXVlc3Rpb24nXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1F1ZXN0aW9uJ1xuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGVycm9yPXtmb3JtaWsudG91Y2hlZC5xdWVzdGlvbiAmJiBmb3JtaWsuZXJyb3JzLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Zvcm1pay50b3VjaGVkLnF1ZXN0aW9uICYmIGZvcm1pay5lcnJvcnMucXVlc3Rpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgPlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgPC9TdHlsZWRDb250YWN0Rm9ybT5cbiAgICApXG59XG5cbmNvbnN0IFN0eWxlZENvbnRhY3RGb3JtID0gc3R5bGVkLmZvcm0uYXR0cnMocHJvcHMgPT4gKHtcbn0pKWBcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDBweCAxcHggMXB4IDBweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggMXB4IDNweCAwcHggcmdiKDAgMCAwIC8gMTIlKTtcbmA7XG5cbmNvbnN0IEZvcm1IZWFkZXIgPSBzdHlsZWQuaDFgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContactForm/index.tsx\n");

/***/ })

})