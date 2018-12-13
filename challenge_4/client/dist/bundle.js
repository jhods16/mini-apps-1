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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_boardview_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/boardview.jsx */ \"./client/src/components/boardview.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],\n      player: true\n    };\n    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"handleClick\",\n    value: function handleClick(e) {\n      var board = this.state.board;\n      var id = e.target.id;\n      var row = parseInt(id[0]);\n      var col = parseInt(id[2]);\n\n      var checkRows = function checkRows() {\n        for (var i = 5; i >= row; i--) {\n          if (board[i][col] === 0) {\n            id = '' + i + ',' + col + '';\n            return id;\n          }\n        }\n\n        return id;\n      };\n\n      id = checkRows();\n      this.updateSquare(id);\n      this.updateBoard(id);\n      this.changePlayer();\n    }\n  }, {\n    key: \"updateBoard\",\n    value: function updateBoard(id) {\n      var board = this.state.board;\n      var row = parseInt(id[0]);\n      var col = parseInt(id[2]);\n\n      if (this.state.player) {\n        board[row][col] = 1;\n      } else {\n        board[row][col] = 2;\n      }\n\n      this.setState({\n        board: board\n      });\n    }\n  }, {\n    key: \"changePlayer\",\n    value: function changePlayer() {\n      var player = this.state.player;\n      this.setState({\n        player: !player\n      });\n    }\n  }, {\n    key: \"updateSquare\",\n    value: function updateSquare(id) {\n      var square = document.getElementById(id);\n\n      if (this.state.player) {\n        square.setAttribute('style', 'background-image: url(/greenpiece.png);');\n      } else {\n        square.setAttribute('style', 'background-image: url(/redpiece.png);');\n      }\n\n      console.log(square);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var player;\n\n      if (this.state.player) {\n        player = React.createElement(\"div\", {\n          className: \"player\"\n        }, \"Player A\");\n      } else {\n        player = React.createElement(\"div\", {\n          className: \"player\"\n        }, \"Player B\");\n      }\n\n      return React.createElement(\"div\", null, player, React.createElement(_components_boardview_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        handleClick: function handleClick(e) {\n          _this2.handleClick(e);\n        }\n      }), \"}\");\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2FwcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FwcC5qc3g/ZGI2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmR2aWV3IGZyb20gJy4vY29tcG9uZW50cy9ib2FyZHZpZXcuanN4J1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBib2FyZDogW1xuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdXG4gICAgICBdLFxuXG4gICAgICBwbGF5ZXI6IHRydWVcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICB2YXIgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIHZhciBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIHZhciByb3cgPSBwYXJzZUludChpZFswXSk7XG4gICAgdmFyIGNvbCA9IHBhcnNlSW50KGlkWzJdKTtcblxuICAgIHZhciBjaGVja1Jvd3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGkgPSA1OyBpID49IHJvdzsgaS0tKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtjb2xdID09PSAwKSB7XG4gICAgICAgICAgaWQgPSAnJysgaSArICcsJyArIGNvbCArICcnO1xuICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfSBcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gICAgaWQgPSBjaGVja1Jvd3MoKTtcbiAgICB0aGlzLnVwZGF0ZVNxdWFyZShpZCk7XG4gICAgdGhpcy51cGRhdGVCb2FyZChpZCk7XG4gICAgdGhpcy5jaGFuZ2VQbGF5ZXIoKTtcbiAgfVxuXG4gIHVwZGF0ZUJvYXJkKGlkKSB7XG4gICAgdmFyIGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICB2YXIgcm93ID0gcGFyc2VJbnQoaWRbMF0pO1xuICAgIHZhciBjb2wgPSBwYXJzZUludChpZFsyXSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wbGF5ZXIpIHtcbiAgICAgIGJvYXJkW3Jvd11bY29sXSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkW3Jvd11bY29sXSA9IDI7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoe2JvYXJkOiBib2FyZH0pXG4gIH1cblxuICBjaGFuZ2VQbGF5ZXIoKSB7XG4gICAgdmFyIHBsYXllciA9IHRoaXMuc3RhdGUucGxheWVyO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyOiAhcGxheWVyfSk7XG4gIH0gXG5cbiAgdXBkYXRlU3F1YXJlKGlkKSB7XG4gICAgdmFyIHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnBsYXllcikge1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1pbWFnZTogdXJsKC9ncmVlbnBpZWNlLnBuZyk7Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtaW1hZ2U6IHVybCgvcmVkcGllY2UucG5nKTsnKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc3F1YXJlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGxheWVyO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUucGxheWVyKSB7XG4gICAgICBwbGF5ZXIgPSA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiPlBsYXllciBBPC9kaXY+XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllciA9IDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCI+UGxheWVyIEI8L2Rpdj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3BsYXllcn1cbiAgICAgICAgPEJvYXJkdmlldyBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gaGFuZGxlQ2xpY2s9eyhlKSA9PiB7dGhpcy5oYW5kbGVDbGljayhlKX19Lz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cblxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQVZBO0FBWUE7QUFkQTtBQWVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7QUF2RkE7QUFDQTtBQTBGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/app.jsx\n");

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