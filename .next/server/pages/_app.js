"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,546];
exports.modules = {

/***/ 1546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ContextProvider),
/* harmony export */   "_": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function ContextProvider({ children , ...props }) {
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: {
            count,
            setCount
        },
        children: children
    });
}


/***/ }),

/***/ 9939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./ContextProvider.js
var ContextProvider = __webpack_require__(1546);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./ThemeContextProvider.js




function ThemeContextProvider({ cssBaseLine =true , ...props }) {
    const { 0: sizeObj , 1: setSizeObj  } = (0,external_react_.useState)(props.sizeObj || {
        xs: "1.5rem",
        sm: "1.5rem",
        md: "1.5rem",
        lg: "1.5rem",
        xl: "1.5rem"
    });
    const scaleSizeObj = (0,external_react_.useCallback)((factor = 1)=>{
        const obj = {};
        Object.keys(sizeObj).forEach((itemKey)=>{
            const num = Number(sizeObj[itemKey].replace(/[^\d\.]/g, "")) * factor;
            const unit = String(sizeObj[itemKey].replace(/[\d\.]/g, ""));
            obj[itemKey] = num + unit;
        });
        return obj;
    }, [
        sizeObj
    ]);
    const addingSizeObj = (0,external_react_.useCallback)((numOfPix = 0)=>{
        const obj = {};
        Object.keys(sizeObj).forEach((itemKey)=>{
            //  const num = Number(sizeObj[itemKey].replace(/[^\d\.]/g, '')) * factor
            //  const unit = String(sizeObj[itemKey].replace(/[\d\.]/g, ''))
            obj[itemKey] = `calc(${sizeObj[itemKey]} ${numOfPix >= 0 ? "+" : "-"} ${Math.abs(numOfPix)}px)`;
        });
        return obj;
    }, [
        sizeObj
    ]);
    const [mode, setMode] = external_react_default().useState(props.mode || "light");
    const myTheme = external_react_default().useMemo(()=>(0,styles_namespaceObject.createTheme)({
            typography: {
                button: {
                    textTransform: "none"
                }
            },
            palette: {
                mode,
                panelColor: mode === "light" ? "lightgray" : "darkgray",
                mentionBg: mode === "light" ? "aliceblue" : "skyblue"
            },
            sizeObj,
            setSizeObj,
            setMode,
            scaleSizeObj,
            addingSizeObj,
            mode,
            isLight: mode === "light",
            isDark: mode === "dark",
            components: {
                MuiButton: {
                    defaultProps: {
                        variant: "contained",
                        disableRipple: false
                    }
                },
                MuiPaper: {
                    defaultProps: {},
                    styleOverrides: {
                        root: ({ ownerState , theme , ...props })=>{
                            return [
                                //  ownerState.variant === 'body2' &&
                                (0,styles_namespaceObject.experimental_sx)({
                                    fontSize: theme.sizeObj
                                }), 
                            ];
                        }
                    }
                },
                MuiSvgIcon: {
                    styleOverrides: {
                        root: ({ ownerState , theme , ...props })=>{
                            return [
                                //  ownerState.variant === 'body2' &&
                                (0,styles_namespaceObject.experimental_sx)({
                                    color: theme.palette.text.secondary
                                }), 
                            ];
                        }
                    }
                }
            }
        })
    , [
        mode,
        sizeObj
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_namespaceObject.ThemeProvider, {
        theme: myTheme,
        children: [
            cssBaseLine && /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
            props.children
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    console.log(Component);
    return /*#__PURE__*/ jsx_runtime_.jsx(ThemeContextProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(ContextProvider/* ContextProvider */.H, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

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
var __webpack_exports__ = (__webpack_exec__(9939));
module.exports = __webpack_exports__;

})();