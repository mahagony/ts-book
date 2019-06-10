/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main_browser.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calculator.ts":
/*!***************************!*\
  !*** ./src/calculator.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar add_1 = __webpack_require__(/*! ./operations/add */ \"./src/operations/add.ts\");\nvar pow_1 = __webpack_require__(/*! ./operations/pow */ \"./src/operations/pow.ts\");\nvar Calculator = /** @class */ (function () {\n    function Calculator() {\n        this._operations = [\n            { name: \"add\", operation: add_1.add },\n            { name: \"pow\", operation: pow_1.pow }\n        ];\n    }\n    Calculator.prototype.calculate = function (operation, a, b) {\n        var opt = this._operations.filter(function (o) { return o.name === operation; })[0];\n        if (opt === undefined) {\n            throw new Error(\"The operation \" + operation + \" is not available!\");\n        }\n        else {\n            return opt.operation(a, b);\n        }\n    };\n    return Calculator;\n}());\nexports.Calculator = Calculator;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2FsY3VsYXRvci50cz9hNjEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUZBQXVDO0FBQ3ZDLG1GQUF1QztBQU92QztJQUVJO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBRyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBRyxFQUFDO1NBQ2hDLENBQUM7SUFDTixDQUFDO0lBQ00sOEJBQVMsR0FBaEIsVUFBaUIsU0FBaUIsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNwRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFpQixTQUFTLHVCQUFvQixDQUFDLENBQUM7U0FDbkU7YUFBTTtZQUNILE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDO0FBaEJZLGdDQUFVIiwiZmlsZSI6Ii4vc3JjL2NhbGN1bGF0b3IudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi9vcGVyYXRpb25zL2FkZFwiO1xuaW1wb3J0IHsgcG93IH0gZnJvbSBcIi4vb3BlcmF0aW9ucy9wb3dcIjtcblxuaW50ZXJmYWNlIE9wZXJhdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG9wZXJhdGlvbihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3Ige1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX29wZXJhdGlvbnM6IE9wZXJhdGlvbltdO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtuYW1lOiBcImFkZFwiLCBvcGVyYXRpb246IGFkZH0sXG4gICAgICAgICAgICB7bmFtZTogXCJwb3dcIiwgb3BlcmF0aW9uOiBwb3d9XG4gICAgICAgIF07XG4gICAgfVxuICAgIHB1YmxpYyBjYWxjdWxhdGUob3BlcmF0aW9uOiBzdHJpbmcsIGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG9wdCA9IHRoaXMuX29wZXJhdGlvbnMuZmlsdGVyKChvKSA9PiBvLm5hbWUgPT09IG9wZXJhdGlvbilbMF07XG4gICAgICAgIGlmIChvcHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgb3BlcmF0aW9uICR7b3BlcmF0aW9ufSBpcyBub3QgYXZhaWxhYmxlIWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9wdC5vcGVyYXRpb24oYSwgYik7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/calculator.ts\n");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzPzQ1ZDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvbWFpbi5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.scss\n");

/***/ }),

/***/ "./src/main_browser.ts":
/*!*****************************!*\
  !*** ./src/main_browser.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// tslint:disable-next-line: file-name-casing\nvar calculator_1 = __webpack_require__(/*! ./calculator */ \"./src/calculator.ts\");\n__webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\nvar calculator = new calculator_1.Calculator();\nvar addResult = calculator.calculate(\"add\", 2, 3);\nvar powResult = calculator.calculate(\"pow\", 2, 3);\nvar $main = document.querySelector(\"#main\");\nif ($main) {\n    $main.innerHTML = \"\\n        <p>2 + 3 = \" + addResult + \"<p>\\n        <p>2 + 3 = \" + powResult + \"<p>\\n    \";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbl9icm93c2VyLnRzPzQzZDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNkM7QUFDN0Msa0ZBQTBDO0FBQzFDLDBEQUFxQjtBQUVyQixJQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUVwQyxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEQsSUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXBELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFOUMsSUFBSSxLQUFLLEVBQUU7SUFDUCxLQUFLLENBQUMsU0FBUyxHQUFHLDBCQUNELFNBQVMsZ0NBQ1QsU0FBUyxjQUN6QixDQUFDO0NBQ0wiLCJmaWxlIjoiLi9zcmMvbWFpbl9icm93c2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmaWxlLW5hbWUtY2FzaW5nXG5pbXBvcnQgeyBDYWxjdWxhdG9yIH0gZnJvbSBcIi4vY2FsY3VsYXRvclwiO1xuaW1wb3J0IFwiLi9tYWluLnNjc3NcIjtcblxuY29uc3QgY2FsY3VsYXRvciA9IG5ldyBDYWxjdWxhdG9yKCk7XG5cbmNvbnN0IGFkZFJlc3VsdCA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlKFwiYWRkXCIsIDIsIDMpO1xuY29uc3QgcG93UmVzdWx0ID0gY2FsY3VsYXRvci5jYWxjdWxhdGUoXCJwb3dcIiwgMiwgMyk7XG5cbmNvbnN0ICRtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG5pZiAoJG1haW4pIHtcbiAgICAkbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxwPjIgKyAzID0gJHthZGRSZXN1bHR9PHA+XG4gICAgICAgIDxwPjIgKyAzID0gJHtwb3dSZXN1bHR9PHA+XG4gICAgYDtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main_browser.ts\n");

/***/ }),

/***/ "./src/operations/add.ts":
/*!*******************************!*\
  !*** ./src/operations/add.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar validation_1 = __webpack_require__(/*! ./validation */ \"./src/operations/validation.ts\");\nfunction add(a, b) {\n    validation_1.isNumber(a);\n    validation_1.isNumber(b);\n    return a + b;\n}\nexports.add = add;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3BlcmF0aW9ucy9hZGQudHM/YmZhYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZGQUF3QztBQUV4QyxTQUFnQixHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDcEMscUJBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLHFCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsQ0FBQztBQUpELGtCQUlDIiwiZmlsZSI6Ii4vc3JjL29wZXJhdGlvbnMvYWRkLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwiLi92YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICBpc051bWJlcihhKTtcbiAgICBpc051bWJlcihiKTtcbiAgICByZXR1cm4gYSArIGI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/operations/add.ts\n");

/***/ }),

/***/ "./src/operations/pow.ts":
/*!*******************************!*\
  !*** ./src/operations/pow.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar validation_1 = __webpack_require__(/*! ./validation */ \"./src/operations/validation.ts\");\nfunction pow(base, exponent) {\n    validation_1.isNumber(base);\n    validation_1.isNumber(exponent);\n    var result = base;\n    for (var i = 1; i < exponent; i++) {\n        result = result * base;\n    }\n    return result;\n}\nexports.pow = pow;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3BlcmF0aW9ucy9wb3cudHM/ZWViOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZGQUF3QztBQUV4QyxTQUFnQixHQUFHLENBQUMsSUFBWSxFQUFFLFFBQWdCO0lBQzlDLHFCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZixxQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztJQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQzFCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQVJELGtCQVFDIiwiZmlsZSI6Ii4vc3JjL29wZXJhdGlvbnMvcG93LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwiLi92YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3coYmFzZTogbnVtYmVyLCBleHBvbmVudDogbnVtYmVyKSB7XG4gICAgaXNOdW1iZXIoYmFzZSk7XG4gICAgaXNOdW1iZXIoZXhwb25lbnQpO1xuICAgIGxldCByZXN1bHQgPSBiYXNlO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZXhwb25lbnQ7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQgKiBiYXNlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/operations/pow.ts\n");

/***/ }),

/***/ "./src/operations/validation.ts":
/*!**************************************!*\
  !*** ./src/operations/validation.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction isNumber(a) {\n    if (typeof a !== \"number\") {\n        throw new Error(a + \" must be a number!\");\n    }\n}\nexports.isNumber = isNumber;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3BlcmF0aW9ucy92YWxpZGF0aW9uLnRzP2FmN2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFnQixRQUFRLENBQUMsQ0FBUztJQUM5QixJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN2QixNQUFNLElBQUksS0FBSyxDQUFJLENBQUMsdUJBQW9CLENBQUMsQ0FBQztLQUM3QztBQUNMLENBQUM7QUFKRCw0QkFJQyIsImZpbGUiOiIuL3NyYy9vcGVyYXRpb25zL3ZhbGlkYXRpb24udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoYTogbnVtYmVyKSB7XG4gICAgaWYgKHR5cGVvZiBhICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHthfSBtdXN0IGJlIGEgbnVtYmVyIWApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/operations/validation.ts\n");

/***/ })

/******/ });