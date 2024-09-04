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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analyzeArr: () => (/* binding */ analyzeArr),\n/* harmony export */   calculator: () => (/* binding */ calculator),\n/* harmony export */   capitalize: () => (/* binding */ capitalize),\n/* harmony export */   reverseString: () => (/* binding */ reverseString),\n/* harmony export */   shiftCipher: () => (/* binding */ shiftCipher)\n/* harmony export */ });\nfunction capitalize(string) {\n\tconst firstLetter = string.charAt(0).toUpperCase();\n\treturn firstLetter + string.slice(1);\n}\n\nfunction reverseString(string) {\n\tconst arr = [];\n\tlet reverseArr;\n\tlet reverseString = '';\n\n\tfor (let i = 0; i < string.length; i++) {\n\t\tarr.push(string[i]);\n\t}\n\n\treverseArr = arr.reverse();\n\n\treverseArr.forEach((letter) => {\n\t\treverseString += letter;\n\t});\n\n\treturn reverseString;\n}\n\nconst calculator = {\n\tadd: function (a, b) {\n\t\treturn a + b;\n\t},\n\tsubtract: function (a, b) {\n\t\treturn a - b;\n\t},\n\tmultiply: function (a, b) {\n\t\treturn a * b;\n\t},\n\tdivide: function (a, b) {\n\t\treturn a / b;\n\t},\n};\n\nfunction stringToArr(string, arr) {\n\tfor (let i = 0; i < string.length; i++) {\n\t\tarr.push(string[i]);\n\t}\n}\n\nfunction checkUpperCase(string, shift) {\n\tfor (let i = 0; i < string.length; i++) {\n\t\tif (string[i] === string[i].toUpperCase()) {\n\t\t\tshift[i] = shift[i].toUpperCase();\n\t\t}\n\t}\n}\n\nfunction arrToString(arr) {\n\tlet string = '';\n\tarr.forEach((item) => {\n\t\tstring += item;\n\t});\n\treturn string;\n}\n\nfunction shiftCipher(string, key) {\n\tconst alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');\n\tconst stringArr = [];\n\tconst shiftedArr = [];\n\tlet shiftedString = '';\n\n\tstringToArr(string, stringArr);\n\n\tstringArr.forEach((item) => {\n\t\tfor (let i = 0; i < alphabetArr.length; i++) {\n\t\t\tif (item.toLowerCase() === alphabetArr[i]) {\n\t\t\t\tif (i + key > alphabetArr.length - 1) {\n\t\t\t\t\tshiftedArr.push(alphabetArr[(i + key) % alphabetArr.length]);\n\t\t\t\t} else {\n\t\t\t\t\tshiftedArr.push(alphabetArr[i + key]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (!alphabetArr.includes(item.toLowerCase())) {\n\t\t\tshiftedArr.push(item);\n\t\t}\n\t});\n\n\tcheckUpperCase(stringArr, shiftedArr);\n\n\treturn arrToString(shiftedArr);\n}\n\nfunction merge(arr1, arr2) {\n\tconst arr3 = [];\n\tlet i = 0;\n\tlet j = 0;\n\tlet k = 0;\n\twhile (i < arr1.length && j < arr2.length) {\n\t\tif (arr1[i] < arr2[j]) {\n\t\t\tarr3[k] = arr1[i];\n\t\t\ti++;\n\t\t} else {\n\t\t\tarr3[k] = arr2[j];\n\t\t\tj++;\n\t\t}\n\t\tk++;\n\t}\n\twhile (i < arr1.length) {\n\t\tarr3[k] = arr1[i];\n\t\ti++;\n\t\tk++;\n\t}\n\twhile (j < arr2.length) {\n\t\tarr3[k] = arr2[j];\n\t\tj++;\n\t\tk++;\n\t}\n\treturn arr3;\n}\n\nfunction mergeSort(arr) {\n\tif (arr.length <= 1) {\n\t\treturn arr;\n\t}\n\tconst split = Math.floor(arr.length / 2);\n\tconst left = mergeSort(arr.slice(0, split));\n\tconst right = mergeSort(arr.slice(split));\n\treturn merge(left, right);\n}\n\nfunction analyzeArr(arr) {\n\tconst sortedArr = mergeSort(arr);\n\tconst obj = {\n\t\taverage: arr[Math.floor(arr.length / 2)],\n\t\tmin: sortedArr[0],\n\t\tmax: sortedArr[sortedArr.length - 1],\n\t\tlength: arr.length,\n\t};\n\treturn obj;\n}\n\n\n\n\n//# sourceURL=webpack://odin-tdd-practice/./src/index.js?");

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