/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculator: () => (/* binding */ calculator),\n/* harmony export */   capitalize: () => (/* binding */ capitalize),\n/* harmony export */   reverseString: () => (/* binding */ reverseString),\n/* harmony export */   shiftCipher: () => (/* binding */ shiftCipher)\n/* harmony export */ });\nfunction capitalize(string) {\n\tconst firstLetter = string.charAt(0).toUpperCase();\n\treturn firstLetter + string.slice(1);\n}\n\nfunction reverseString(string) {\n\tconst arr = [];\n\tlet reverseArr;\n\tlet reverseString = '';\n\n\tfor (let i = 0; i < string.length; i++) {\n\t\tarr.push(string[i]);\n\t}\n\n\treverseArr = arr.reverse();\n\n\treverseArr.forEach((letter) => {\n\t\treverseString += letter;\n\t});\n\n\treturn reverseString;\n}\n\nconst calculator = {\n\tadd: function (a, b) {\n\t\treturn a + b;\n\t},\n\tsubtract: function (a, b) {\n\t\treturn a - b;\n\t},\n\tmultiply: function (a, b) {\n\t\treturn a * b;\n\t},\n\tdivide: function (a, b) {\n\t\treturn a / b;\n\t},\n};\n\nfunction shiftCipher(string, key) {\n\tconst alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');\n\tconst stringArr = [];\n\tconst shiftedArr = [];\n\tlet shiftedString = '';\n\n\tfor (let i = 0; i < string.length; i++) {\n\t\tstringArr.push(string[i].toLowerCase());\n\t}\n\n\tstringArr.forEach((item) => {\n\t\tfor (let i = 0; i < alphabetArr.length; i++) {\n\t\t\tif (item === alphabetArr[i]) {\n                if ((i + key) > (alphabetArr.length - 1)) {\n                    shiftedArr.push(alphabetArr[(i + key) % alphabetArr.length]);\n                } else { \n                    shiftedArr.push(alphabetArr[i + key]);\n                }\n\t\t\t} \n\t\t} \n        \n        if (!alphabetArr.includes(item)) {\n            shiftedArr.push(item);\n        }\n        \n\t});\n\n\tshiftedArr.forEach((item) => {\n\t\tshiftedString += item;\n\t});\n\n\treturn shiftedString;\n}\n\n\n\n\n//# sourceURL=webpack://odin-tdd-practice/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;