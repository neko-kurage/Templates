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

/***/ "./source/main.ts":
/*!************************!*\
  !*** ./source/main.ts ***!
  \************************/
/***/ (() => {

eval("\n/* imports */\n/*\n使用していないライブラリがあるとESlintに怒られるのでコメントアウトしてあります。\n使用する際は外してください。\n*/\n//three.js\n/*\nimport * as THREE from \"three\";\nimport { OrbitControls } from \"three/examples/jsm/controls/OrbitControls\";\nimport { TransformControls } from 'three/examples/jsm/controls/TransformControls';\n*/\n//anime.js\n/*\nimport anime from \"animejs/lib/anime.es.js\";\n*/\nwindow.addEventListener(\"DOMContentLoaded\", setup);\nfunction setup() {\n    console.log(\"Hi, this template file is loaded!!\");\n    console.log(add(5, 10));\n}\nfunction add(numA, numB) {\n    return numA + numB;\n}\n\n\n//# sourceURL=webpack:///./source/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./source/main.ts"]();
/******/ 	
/******/ })()
;