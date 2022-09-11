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

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction TasksList(){\n  this.tasksList = [];\n}\n\nTasksList.prototype.checkExist = (task) => {\n  for (item of undefined.tasksList) {\n    if (task === item) {\n      return true;\n    }\n  }\n}\n\nTasksList.prototype.addTask = function (task) {\n  if (task !== '' || this.checkExist(task) == false) {\n    this.tasksList.push(task);\n  }\n}\n\nTasksList.prototype.looponlist = function () {\n  const tasksPlace = document.querySelector('.tasks-place');\n  tasksPlace.textContent = '';\n\n  for (let item of this.tasksList) {\n    const task_container = document.createElement('div');\n    task_container.classList.add('task');\n\n    const title = document.createElement('div');\n    title.classList.add('task-title');\n    title.textContent = item.task;\n\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    checkbox.classList.add('form-check-input');\n\n    const left = document.createElement('div');\n    left.classList.add('task-left');\n    left.appendChild(checkbox);\n    left.appendChild(title);\n\n\n    const details = document.createElement('div');\n    details.classList.add('task-details');\n    details.textContent = item.description;\n\n    task_container.appendChild(left);\n\n    tasksPlace.appendChild(task_container);\n\n    checkbox.onchange = e => {\n      this.tasksList.splice(this.tasksList.indexOf(item), 1);\n      this.looponlist();\n    }\n  }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksList);\n\n//# sourceURL=webpack://to-do/./src/cards.js?");

/***/ }),

/***/ "./src/components/inbox.js":
/*!*********************************!*\
  !*** ./src/components/inbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"loadInbox\": () => (/* binding */ loadInbox)\n/* harmony export */ });\nclass Task {\n  constructor(task, description='', priority='normal', date='No Date') {\n    this.task = task;\n    this.date = date;\n    this.description = description;\n    this.priority = priority;\n    this.complete = false;\n  }\n} \n\nfunction makeInbox() {\n  const container = document.createElement('div');\n  container.classList.add('inbox');\n\n  const title = document.createElement('h1');\n  title.classList.add('inbox_title');\n  title.textContent = 'Inbox';\n\n  const tasksPlace = document.createElement('div');\n  tasksPlace.classList.add('tasks-place');\n\n  const add_btn = document.createElement('button');\n  add_btn.textContent = 'Add';\n  add_btn.classList.add('add-btn');\n\n  const popup = document.getElementById('popup');\n  add_btn.addEventListener('click', () => {\n    popup.classList.remove('hidden');\n  });\n\n  container.appendChild(title);\n  container.appendChild(tasksPlace);\n  // container.appendChild(input);\n  container.appendChild(add_btn);\n\n  return container;\n}\n\nfunction addTask() {\n  const task_title = document.getElementById('title').value;\n  const details = document.getElementById('details').value;\n  const task = new Task(task_title, details);\n\n  console.log(task);\n  return task;\n}\n\nfunction loadInbox() {\n  const main = document.getElementById('main');\n  main.textContent = '';\n  main.appendChild(makeInbox());\n}\n\n\n\n//# sourceURL=webpack://to-do/./src/components/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/cards.js\");\n/* harmony import */ var _components_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inbox */ \"./src/components/inbox.js\");\n\n\n\n\nconst tasksPlace = document.querySelector('.tasks-place');\nconst popup = document.getElementById('popup');\nconst close_btn = document.getElementById('close');\nclose_btn.addEventListener('click', () => {\n  popup.classList.add('hidden');\n});\n\n\nlet tasklist = new _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\nfunction main() {\n  tasklist.addTask((0,_components_inbox__WEBPACK_IMPORTED_MODULE_1__.addTask)(tasklist));\n  tasklist.looponlist();\n  popup.classList.add('hidden');\n}\n\nconst submit = document.querySelector('.submit');\n\nsubmit.onclick = main;\n\n(0,_components_inbox__WEBPACK_IMPORTED_MODULE_1__.loadInbox)();\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;