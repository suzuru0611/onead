/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("var _this = this;\n// 音量键功能\nvar volumeButton = document.querySelector(\".volume-button\");\nvolumeButton.addEventListener(\"click\", function () {\n  var audio = new Audio(\"data:audio/mp3;base64,[你的音频Base64编码]\");\n  audio.play();\n});\n\n// 图片点击跳转\nvar image = document.querySelector(\".image-container img\");\nimage.addEventListener(\"click\", function () {\n  window.location.href = \"https://www.onead.com.tw/\";\n});\n\n// 处理视频\nvar video = document.getElementById(\"video\");\nvideo.addEventListener(\"canplay\", function () {\n  video.play();\n});\nvideo.addEventListener(\"timeupdate\", function () {\n  if (video.currentTime >= video.duration / 2) {\n    console.log(\"video current 50% duration\");\n    video.removeEventListener(\"timeupdate\", _this);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;