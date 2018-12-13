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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.jsx":
/*!****************************!*\
  !*** ./client/src/app.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_boardview_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/boardview.jsx */ \"./client/src/components/boardview.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],\n      player: true\n    };\n    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"handleClick\",\n    value: function handleClick(e) {\n      this.changePlayer();\n      this.updateSquare(e.target.id);\n      console.log(e.target.id);\n    }\n  }, {\n    key: \"changePlayer\",\n    value: function changePlayer() {\n      var player = this.state.player;\n      this.setState({\n        player: !player\n      });\n    }\n  }, {\n    key: \"updateSquare\",\n    value: function updateSquare(id) {\n      var square = document.getElementById(id);\n\n      if (this.state.player) {\n        square.setAttribute('style', 'background-image: url(/greenpiece.png);');\n      } else {\n        square.setAttribute('style', 'background-image: url(/redpiece.png);');\n      }\n\n      console.log(square);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var player;\n\n      if (this.state.player) {\n        player = React.createElement(\"div\", {\n          className: \"player\"\n        }, \"Player A\");\n      } else {\n        player = React.createElement(\"div\", {\n          className: \"player\"\n        }, \"Player B\");\n      }\n\n      return React.createElement(\"div\", null, player, React.createElement(_components_boardview_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        handleClick: function handleClick(e) {\n          _this2.handleClick(e);\n        }\n      }), \"}\");\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2FwcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FwcC5qc3g/ZGI2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmR2aWV3IGZyb20gJy4vY29tcG9uZW50cy9ib2FyZHZpZXcuanN4J1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBib2FyZDogW1xuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdXG4gICAgICBdLFxuXG4gICAgICBwbGF5ZXI6IHRydWVcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICB0aGlzLmNoYW5nZVBsYXllcigpO1xuICAgIHRoaXMudXBkYXRlU3F1YXJlKGUudGFyZ2V0LmlkKVxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKVxuICB9XG5cbiAgY2hhbmdlUGxheWVyKCkge1xuICAgIHZhciBwbGF5ZXIgPSB0aGlzLnN0YXRlLnBsYXllcjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllcjogIXBsYXllcn0pO1xuICB9IFxuXG4gIHVwZGF0ZVNxdWFyZShpZCkge1xuICAgIHZhciBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wbGF5ZXIpIHtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtaW1hZ2U6IHVybCgvZ3JlZW5waWVjZS5wbmcpOycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3JlZHBpZWNlLnBuZyk7Jyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNxdWFyZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBsYXllcjtcblxuICAgIGlmICh0aGlzLnN0YXRlLnBsYXllcikge1xuICAgICAgcGxheWVyID0gPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5QbGF5ZXIgQTwvZGl2PlxuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIgPSA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiPlBsYXllciBCPC9kaXY+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtwbGF5ZXJ9XG4gICAgICAgIDxCb2FyZHZpZXcgYm9hcmQ9e3RoaXMuc3RhdGUuYm9hcmR9IGhhbmRsZUNsaWNrPXsoZSkgPT4ge3RoaXMuaGFuZGxlQ2xpY2soZSl9fS8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG5cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFWQTtBQVlBO0FBZEE7QUFlQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBMURBO0FBQ0E7QUE2REEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/app.jsx\n");

/***/ }),

/***/ "./client/src/components/boardview.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/boardview.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _squareview_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./squareview.jsx */ \"./client/src/components/squareview.jsx\");\n\n\nvar Boardview = function Boardview(props) {\n  var board = props.board;\n  return React.createElement(\"div\", {\n    className: \"board\"\n  }, board.map(function (row, i) {\n    return row.map(function (square, k) {\n      var ik = [i, k].toString();\n      return React.createElement(_squareview_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        loc: ik,\n        handleClick: props.handleClick\n      });\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boardview);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYm9hcmR2aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9ib2FyZHZpZXcuanN4PzBmYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNxdWFyZSBmcm9tICcuL3NxdWFyZXZpZXcuanN4J1xuXG52YXIgQm9hcmR2aWV3ID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgdmFyIGJvYXJkID0gcHJvcHMuYm9hcmQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICB7Ym9hcmQubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvdy5tYXAoKHNxdWFyZSwgaykgPT4ge1xuICAgICAgICAgIHZhciBpayA9IFtpLCBrXS50b1N0cmluZygpO1xuICAgICAgICAgIHJldHVybiA8U3F1YXJlIGxvYz17aWt9IGhhbmRsZUNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30vPlxuICAgICAgICB9KVxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZHZpZXc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/boardview.jsx\n");

/***/ }),

/***/ "./client/src/components/squareview.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/squareview.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Square = function Square(props) {\n  return React.createElement(\"div\", {\n    id: props.loc,\n    className: \"square\",\n    onClick: props.handleClick\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc3F1YXJldmlldy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc3F1YXJldmlldy5qc3g/YzA2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3F1YXJlID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtwcm9wcy5sb2N9IGNsYXNzTmFtZT1cInNxdWFyZVwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT48L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/squareview.jsx\n");

/***/ })

/******/ });