/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst projectObj = function(name){\r\n    let projectTasks = [];\r\n    return { name,projectTasks };\r\n}\r\n\r\nconst projectModule = (function(){\r\n    let allProjects = [];\r\n\r\n    const addProject = function(name){\r\n        allProjects.push(projectObj(name));\r\n    }\r\n\r\n    const removeProject = function(index){\r\n        allProjects.splice(index,1);\r\n    }\r\n\r\n    const getAllProjects = function(){\r\n        return allProjects;\r\n    }\r\n\r\n    const getOneProject = function(index){\r\n        return allProjects[index];\r\n    }\r\n\r\n    return {addProject, removeProject, getAllProjects, getOneProject};\r\n\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModule);\n\n//# sourceURL=webpack://todo-list/./src/addProject.js?");

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst taskObj = function(name,description,taskDate,taskTime,priority){\r\n    return {name,description,date: taskDate,time: taskTime,priority};\r\n}\r\n\r\nconst taskModule = (function(){\r\n\r\n    const addTask = function(allTasks,name,description,taskDate,taskTime,priority){\r\n        allTasks.push(taskObj(name,description,taskDate,taskTime,priority));\r\n    }  \r\n\r\n    const removeTask = function(allTasks,index){\r\n        allTasks.splice(index,1);\r\n    }\r\n\r\n    return {addTask, removeTask};\r\n\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskModule);\n\n//# sourceURL=webpack://todo-list/./src/addTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadProjects */ \"./src/loadProjects.js\");\n/* harmony import */ var _loadTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadTasks */ \"./src/loadTasks.js\");\n;\r\n\r\n\r\n(0,_loadProjects__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\nlet addProjectButton = document.querySelector('.addProjectButton');\r\naddProjectButton.addEventListener('click',_loadProjects__WEBPACK_IMPORTED_MODULE_0__.addProject);\r\n\r\nlet addButton = document.querySelector('.projectSubmit');\r\naddButton.addEventListener('click',_loadProjects__WEBPACK_IMPORTED_MODULE_0__.addFinalProject);\r\n\r\nlet closeProjectWindow = document.querySelector('.closeProject');\r\ncloseProjectWindow.addEventListener('click',_loadProjects__WEBPACK_IMPORTED_MODULE_0__.closeProject);\r\n\r\nlet taskAddButton = document.querySelector('.addTaskButton');\r\ntaskAddButton.addEventListener('click',_loadTasks__WEBPACK_IMPORTED_MODULE_1__.addNewTask);\r\n\r\nlet closeTaskWindow = document.querySelector('.closeTask');\r\ncloseTaskWindow.addEventListener('click',_loadTasks__WEBPACK_IMPORTED_MODULE_1__.closeTask); \r\n\r\nlet taskFinalAddButton = document.querySelector('.taskSubmit');\r\ntaskFinalAddButton.addEventListener('click',_loadTasks__WEBPACK_IMPORTED_MODULE_1__.addFinalTask);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/loadProjects.js":
/*!*****************************!*\
  !*** ./src/loadProjects.js ***!
  \*****************************/
/*! namespace exports */
/*! export addFinalProject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addProject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export closeProject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => /* binding */ addProject,\n/* harmony export */   \"addFinalProject\": () => /* binding */ addFinalProject,\n/* harmony export */   \"closeProject\": () => /* binding */ closeProject,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n/* harmony import */ var _loadTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadTasks */ \"./src/loadTasks.js\");\n;\r\n\r\n\r\nconst loadProjects = function(){\r\n    let projects = _addProject__WEBPACK_IMPORTED_MODULE_0__.default.getAllProjects();\r\n\r\n    let projectList = document.querySelector('.listProjects');\r\n    while(projectList.firstChild){\r\n        projectList.removeChild(projectList.firstChild);\r\n    }\r\n\r\n    projects.forEach((project,index)=>{\r\n        let newProject = document.createElement('li');\r\n        newProject.classList.add('project');\r\n        newProject.setAttribute('data-index',index);\r\n\r\n        newProject.addEventListener('click',function(){\r\n            for(let i = 0; i < projects.length; i++){\r\n                let proj = document.querySelector(`.project[data-index=\"${i}\"]`)\r\n                proj.classList.remove('projectSelected');\r\n            }\r\n            newProject.classList.add('projectSelected');\r\n            //load Tasks of the project\r\n            (0,_loadTasks__WEBPACK_IMPORTED_MODULE_1__.default)(project);\r\n        })\r\n\r\n        if(index==0){\r\n            newProject.classList.add('projectSelected');\r\n        }\r\n\r\n        newProject.innerText = project.name;\r\n\r\n        projectList.appendChild(newProject);\r\n    })\r\n    \r\n}\r\n\r\nconst addProject = function(){\r\n    let mainWindow = document.querySelector('.main-content');\r\n    mainWindow.classList.add('hidden');\r\n\r\n    let addProjectWindow = document.querySelector('.addProjectWindow');\r\n    addProjectWindow.classList.remove('hidden');\r\n    \r\n}\r\n\r\nconst addFinalProject = function(){\r\n    let projectName = document.querySelector('#nameInput');\r\n    _addProject__WEBPACK_IMPORTED_MODULE_0__.default.addProject(projectName.value);\r\n    projectName.value = '';\r\n    loadProjects();\r\n    closeProject();\r\n}\r\n\r\nconst closeProject = function(){\r\n    let mainWindow = document.querySelector('.main-content');\r\n    let addProjectWindow = document.querySelector('.addProjectWindow');\r\n    addProjectWindow.classList.add('hidden');\r\n    mainWindow.classList.remove('hidden');\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProjects);\n\n//# sourceURL=webpack://todo-list/./src/loadProjects.js?");

/***/ }),

/***/ "./src/loadTasks.js":
/*!**************************!*\
  !*** ./src/loadTasks.js ***!
  \**************************/
/*! namespace exports */
/*! export addFinalTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addNewTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export closeTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewTask\": () => /* binding */ addNewTask,\n/* harmony export */   \"closeTask\": () => /* binding */ closeTask,\n/* harmony export */   \"addFinalTask\": () => /* binding */ addFinalTask,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\n;\r\n\r\n\r\nconst loadTasks = function(selectedProject){\r\n\r\n    let allTasks = selectedProject.projectTasks;\r\n    let taskContainer = document.querySelector('.listTasks');\r\n\r\n    while(taskContainer.firstChild){\r\n        taskContainer.removeChild(taskContainer.firstChild);\r\n    }\r\n\r\n    allTasks.forEach((task)=>{\r\n        console.log(task.date);\r\n        let fulltask = document.createElement('div');\r\n        fulltask.classList.add('fullTask');\r\n\r\n        let taskElement = document.createElement('li');\r\n        taskElement.classList.add('task');\r\n        let taskname = document.createElement('p');\r\n        taskname.classList.add('taskName');\r\n        taskname.innerText = task.name;\r\n        let close = document.createElement('span');\r\n        close.classList.add('close');\r\n        close.classList.add('hidden');\r\n        close.innerText = 'X';\r\n\r\n        taskElement.appendChild(taskname);\r\n        taskElement.appendChild(close);\r\n        fulltask.appendChild(taskElement);\r\n\r\n        let extraDetails = document.createElement('div');\r\n        extraDetails.classList.add('fullTaskDesc');\r\n        let leftSide = document.createElement('div');\r\n        leftSide.classList.add('taskLeftSide');\r\n        let description = document.createElement('div');\r\n        description.classList.add('taskDesc');\r\n        let taskHeading = document.createElement('h3');\r\n        taskHeading.classList.add('taskHeading');\r\n        taskHeading.innerText = \"Description\";\r\n        let taskDescription = document.createElement('p');\r\n        taskDescription.classList.add('taskDescText');\r\n        taskDescription.classList.add('description');\r\n        taskDescription.innerText = task.description;\r\n\r\n        extraDetails.appendChild(leftSide);\r\n        leftSide.appendChild(description);\r\n        description.appendChild(taskHeading);\r\n        description.appendChild(taskDescription);\r\n        fulltask.appendChild(extraDetails);\r\n\r\n        let date = document.createElement('div');\r\n        date.classList.add('taskDesc');\r\n        let dateHeading = document.createElement('h3');\r\n        dateHeading.classList.add('taskHeading');\r\n        dateHeading.innerText = \"Date\";\r\n        let dateText = document.createElement('p');\r\n        dateText.classList.add('taskDescText');\r\n        dateText.innerText = task.date;\r\n\r\n        leftSide.appendChild(date);\r\n        date.appendChild(dateHeading);\r\n        date.appendChild(dateText);\r\n\r\n        let rightSide = document.createElement('div');\r\n        rightSide.classList.add('taskRightSide');\r\n        let time = document.createElement('div');\r\n        time.classList.add('taskDesc');\r\n        let timeHeading = document.createElement('h3');\r\n        timeHeading.classList.add('taskHeading');\r\n        timeHeading.innerText = 'Time';\r\n        let timeText = document.createElement('p');\r\n        timeText.classList.add('taskDescText');\r\n        timeText.innerText = task.time;\r\n\r\n        time.appendChild(timeHeading);\r\n        time.appendChild(timeText);\r\n        rightSide.appendChild(time);\r\n        extraDetails.appendChild(rightSide);\r\n\r\n        let priority = document.createElement('div');\r\n        priority.classList.add('taskDesc');\r\n        let priorityHeading = document.createElement('h3');\r\n        priorityHeading.classList.add('taskHeading');\r\n        priorityHeading.innerText = 'Priority';\r\n        let priorityText = document.createElement('p');\r\n        priorityText.classList.add('taskDescText');\r\n        priorityText.innerText = task.priority;\r\n\r\n        priority.appendChild(priorityHeading);\r\n        priority.appendChild(priorityText);\r\n        rightSide.appendChild(priority);\r\n\r\n        taskContainer.appendChild(fulltask);\r\n        taskElement.addEventListener('click',function(){\r\n            extraDetails.classList.toggle('hidden');\r\n            console.log('clicked');\r\n        })\r\n    })\r\n}\r\n\r\nconst addNewTask = function(){\r\n    if(_addProject__WEBPACK_IMPORTED_MODULE_0__.default.getAllProjects().length == 0){\r\n        alert(\"Need to add a project first\");\r\n    }else{\r\n        let mainWindow = document.querySelector('.main-content');\r\n        mainWindow.classList.add('hidden');\r\n\r\n        let addTaskWindow = document.querySelector('.addTaskWindow');\r\n        addTaskWindow.classList.remove('hidden');\r\n    }\r\n}\r\n\r\nconst closeTask = function(){\r\n    let mainWindow = document.querySelector('.main-content');\r\n    let addTaskWindow = document.querySelector('.addTaskWindow');\r\n    addTaskWindow.classList.add('hidden');\r\n    mainWindow.classList.remove('hidden');\r\n}\r\n\r\nconst addFinalTask = function(project){\r\n\r\n    let taskNameInput = document.querySelector('#taskNameInput');\r\n    let taskDescInput = document.querySelector('#descriptionInput');\r\n    let taskDateInput = document.querySelector('#dateInput');\r\n    let taskTimeInput = document.querySelector('#timeInput');\r\n    let taskPriorityInput;\r\n    if(document.getElementById('high').checked){\r\n        taskPriorityInput = 'High';\r\n    }else if(document.getElementById('medium').checked){\r\n        taskPriorityInput = 'medium';\r\n    }else{\r\n        taskPriorityInput = 'low';\r\n    }\r\n\r\n    let allProjects = document.querySelectorAll('.project');\r\n    let allProjectsArray = _addProject__WEBPACK_IMPORTED_MODULE_0__.default.getAllProjects();\r\n    let toSendProject;\r\n\r\n    allProjects.forEach((project)=>{\r\n        if(project.classList.contains('projectSelected')){\r\n            let index = project.getAttribute('data-index');\r\n            _addTask__WEBPACK_IMPORTED_MODULE_1__.default.addTask(allProjectsArray[index].projectTasks,taskNameInput.value,taskDescInput.value,taskDateInput.value,taskTimeInput.value,taskPriorityInput);\r\n            toSendProject = allProjectsArray[index];\r\n        }\r\n    })\r\n\r\n    loadTasks(toSendProject);\r\n    closeTask();\r\n\r\n    taskNameInput.value = '';\r\n    taskDescInput.value = '';\r\n    taskDateInput.value = '';\r\n    taskTimeInput.value = '';\r\n    taskPriorityInput = '';\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTasks);\n\n//# sourceURL=webpack://todo-list/./src/loadTasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;