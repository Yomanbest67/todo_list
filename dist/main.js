/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.task {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid black;
    border-radius: 5px;
}

.projForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.project {
    display: flex;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
    gap: 500px;
    padding: 20px;
}

.project:hover {
    background-color: rgb(240, 236, 236);
}

/* DropDown Menu */
.dropdown {
    display: inline-block;
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    width: 150px;
    /* overflow: auto; */
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.4);
}

.dropdown:hover .dropdown-content {
    display: block; 
    padding: 10px;
    z-index: 2;
}

.dropdown-content button {
    display: block;
    color: #000000;
    padding: 5px;
}

.dropdown-content button:hover {
    color: #FFFFFF;
    background-color: #00A4BD;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,oCAAoC;AACxC;;AAEA,kBAAkB;AAClB;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,6CAA6C;AACjD;;AAEA;IACI,cAAc;IACd,aAAa;IACb,UAAU;AACd;;AAEA;IACI,cAAc;IACd,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B","sourcesContent":[".task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n}\r\n\r\n.projForm {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    gap: 500px;\r\n    padding: 20px;\r\n}\r\n\r\n.project:hover {\r\n    background-color: rgb(240, 236, 236);\r\n}\r\n\r\n/* DropDown Menu */\r\n.dropdown {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    width: 150px;\r\n    /* overflow: auto; */\r\n    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.4);\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block; \r\n    padding: 10px;\r\n    z-index: 2;\r\n}\r\n\r\n.dropdown-content button {\r\n    display: block;\r\n    color: #000000;\r\n    padding: 5px;\r\n}\r\n\r\n.dropdown-content button:hover {\r\n    color: #FFFFFF;\r\n    background-color: #00A4BD;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createProjectDiv: () => (/* binding */ createProjectDiv),
/* harmony export */   projectsPush: () => (/* binding */ projectsPush),
/* harmony export */   projectsRemove: () => (/* binding */ projectsRemove)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo.js */ "./src/createToDo.js");



class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.todos = [];
    }

    pushTodo(todo) {
        this.todos.push(todo);
    }

    changeName(name) {
        this.name = name;
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateToDoProjectsList)();
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateScreen)();
    }

    changeDescription (desc) {
        this.description = desc;
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateToDoProjectsList)();
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateScreen)();
    }

    removeTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

}

function createProjectDiv(project) {
    const projDiv = document.createElement('div');
    const descDiv = document.createElement('div');
    const projTitle = document.createElement('h2');
    const projDesc = document.createElement('p');
    let optionsBtn = dropDown(project);

    projDiv.classList.add('project');
    projTitle.textContent = project.name;
    projDesc.textContent = project.description;

    projDiv.addEventListener('click', () => {
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.selectProject)(project)
        ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateScreen)();
    });

    descDiv.appendChild(projTitle);
    descDiv.appendChild(projDesc);
    projDiv.appendChild(descDiv);
    projDiv.appendChild(optionsBtn);

    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateToDoProjectsList)();
    return projDiv
};

function createProject(name, description) {
    const project = new Project(name, description);

    
    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(project);

    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateToDoProjectsList)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateScreen)();
};

function dropDown (project) {
    // Elements
    const taskDiv = document.createElement('div');
    const hoverBtn = document.createElement('button');
    const dropContent = document.createElement('div');
    const nameBtn = document.createElement('button');
    const descBtn = document.createElement('button');

    // Text Content
    hoverBtn.textContent = 'Options';
    nameBtn.textContent = 'Change Name';
    descBtn.textContent = 'Change Description';

    // ClassList
    taskDiv.classList.add('dropdown');
    dropContent.classList.add('dropdown-content');

    // Button Function
    for (let button of [nameBtn, descBtn]){
        button.addEventListener('click', () => dropDownDialog(button, project));
    };

    // Append
    dropContent.appendChild(nameBtn);
    dropContent.appendChild(descBtn);

    taskDiv.appendChild(hoverBtn);
    taskDiv.appendChild(dropContent);

    return taskDiv;
};

function dropDownDialog (button, project) {
    // Elements
    const dialog = document.createElement('dialog');
    const dialogDiv = document.createElement('div');
    const dialogLabel = document.createElement('label');
    const dialogInput = document.createElement('input');
    const dialogClose = document.createElement('button');
    const dialogAdd = document.createElement('button');

    // Text Content
    dialogLabel.textContent = button.textContent;
    dialogAdd.textContent = 'Change';
    dialogClose.textContent = 'X';

    // Function
    dialogClose.addEventListener('click', (event) => {
        event.preventDefault();
        dialog.remove();
    });

    dialogAdd.addEventListener('click', (event) => {
        event.preventDefault();
        switch (button.textContent) {

            case 'Change Name':
                project.changeName(dialogInput.value);
                break;

            case 'Change Description':
                project.changeDescription(dialogInput.value);
                break;

        }
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateScreen)();
        dialog.remove();
    });

    // Append
    const elements = [dialogClose, dialogLabel, dialogInput, dialogAdd];
    for (let element of elements) {
        dialogDiv.appendChild(element);
    }

    dialog.appendChild(dialogDiv);
    document.querySelector('body').appendChild(dialog);
    dialog.showModal();
};

////// Global Index.JS Projects iterating functions.
function projectsPush(item) {

    for (let object of _index_js__WEBPACK_IMPORTED_MODULE_0__.projects) {
        if (object.name == item.project) {
            object.pushTodo(item);
        }
    }

}

function projectsRemove(item) {

    for (let object of _index_js__WEBPACK_IMPORTED_MODULE_0__.projects) {
        if (object.name == item.project) {
            object.removeTodo(item);
        }
    }

}



/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createObject: () => (/* binding */ createObject),
/* harmony export */   createTodoDiv: () => (/* binding */ createTodoDiv),
/* harmony export */   toDo: () => (/* binding */ toDo)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");



const tasks = document.querySelector('.tasks');

class toDo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    changeTitle(title) {
        this.title = title;
    }

    changeDescription(desc) {
        this.description = desc;
    }

    changeDate(date) {
        this.dueDate = date;
    }

    changePriority(priority) {
        this.priority = priority;
    }

    changeProject(project) {
        (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.projectsRemove)(this);
        this.project = project;
        (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.projectsPush)(this);
    }

}


function createTodoDiv (todo) {
    const taskDiv = document.createElement('div');
    const taskTitle = document.createElement('h3');
    const taskDesc = document.createElement('p');
    const taskDescDiv = document.createElement('div');
    const taskDue = document.createElement('div');
    const dropDown = dropdown(todo);

    taskDiv.classList.add('task');
    taskTitle.classList.add('title');
    taskDesc.classList.add('desc');
    taskDue.classList.add('date');

    taskTitle.textContent = todo.title;
    taskDesc.textContent = todo.description;
    taskDue.textContent = todo.dueDate;

    taskDescDiv.appendChild(taskTitle);
    taskDescDiv.appendChild(taskDesc);

    taskDiv.appendChild(taskDescDiv);
    taskDiv.appendChild(taskDue);
    taskDiv.appendChild(dropDown);

    return taskDiv
}

function createObject(title, description, dueDate, priority, project) {
    const todo = new toDo(title.value, description.value, dueDate.value, priority.value, project.value);

    for (let object of _index_js__WEBPACK_IMPORTED_MODULE_0__.projects) {
        if (object.name == project.value) {
            object.pushTodo(todo);
        }
    };

    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateScreen)();
};


function dropdown (todo) {
    // Elements
    const taskDiv = document.createElement('div');
    const hoverBtn = document.createElement('button');
    const dropContent = document.createElement('div');
    const nameBtn = document.createElement('button');
    const descBtn = document.createElement('button');
    const dateBtn = document.createElement('button');
    const prioBtn = document.createElement('button');
    const projBtn = document.createElement('button');

    const elements = [nameBtn, descBtn, dateBtn, prioBtn, projBtn];

    // Text Content
    hoverBtn.textContent = 'Options';
    nameBtn.textContent = 'Change Name';
    descBtn.textContent = 'Change Description';
    dateBtn.textContent = 'Change Due Date';
    prioBtn.textContent = 'Change Priority';
    projBtn.textContent = 'Change Project';

    // ClassList
    taskDiv.classList.add('dropdown');
    dropContent.classList.add('dropdown-content');

    // Buttons Functions
    for (let button of elements) {
        button.addEventListener('click', () => {dropdownDialog(button, todo)});
    }

    // Append
    for (let element of elements){
        dropContent.appendChild(element);
    }

    taskDiv.appendChild(hoverBtn);
    taskDiv.appendChild(dropContent);

    return taskDiv;
};

function dropdownDialog (button, todo) {
    // Elements
    const dialog = document.createElement('dialog');
    const dialogDiv = document.createElement('div');
    const dialogLabel = document.createElement('label');
    let dialogInput; // Defined Bellow
    const dialogClose = document.createElement('button');
    const dialogAdd = document.createElement('button');
    

    // Text Content
    dialogLabel.textContent = button.textContent;
    dialogAdd.textContent = 'Change';
    dialogClose.textContent = 'X';

    // Function
    switch (button.textContent) {
        case 'Change Due Date':
            dialogInput = document.createElement('input');
            dialogInput.type = "date";
            break;

        case 'Change Project':
            // Clone the existing Project List from Index.js as it is automatically updated.
            let projectListElement = document.querySelector('.selectProject');
            dialogInput = projectListElement.cloneNode(true);
            break;

        default:
            dialogInput = document.createElement('input');
            break;
    }

    dialogClose.addEventListener('click', (event) => {
        event.preventDefault();
        dialog.remove();
    });

    dialogAdd.addEventListener('click', (event) => {
        event.preventDefault();
        switch (button.textContent) {

            case 'Change Name':
                todo.changeTitle(dialogInput.value);
                break;

            case 'Change Description':
                todo.changeDescription(dialogInput.value);
                break;

            case 'Change Due Date':
                todo.changeDate(dialogInput.value);
                break;

            case 'Change Priority':
                todo.changePriority(dialogInput.value);
                break;

            case 'Change Project':
                todo.changeProject(dialogInput.value);
                break;
        }
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateScreen)();
        dialog.remove();
    });

    // Append
    const elements = [dialogClose, dialogLabel, dialogInput, dialogAdd];
    for (let element of elements) {
        dialogDiv.appendChild(element);
    }

    dialog.appendChild(dialogDiv);
    document.querySelector('body').appendChild(dialog);
    dialog.showModal();
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearScreen: () => (/* binding */ clearScreen),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   projectsDiv: () => (/* binding */ projectsDiv),
/* harmony export */   selectProject: () => (/* binding */ selectProject),
/* harmony export */   tasks: () => (/* binding */ tasks),
/* harmony export */   updateScreen: () => (/* binding */ updateScreen),
/* harmony export */   updateToDoProjectsList: () => (/* binding */ updateToDoProjectsList)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo.js */ "./src/createToDo.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");





const tasks = document.querySelector('.tasks');
const sidebar = document.querySelector('.sidebar');
const projectsDiv = document.querySelector('.projects');
const defaultProj = new _createProject_js__WEBPACK_IMPORTED_MODULE_2__.Project('Default', 'Default list of Todos');
const projects = [defaultProj];
let selectedProject = defaultProj;

const taskDialog = document.querySelector('.taskDialog');

updateScreen();

(function createTaskButton() {
    createToDoDialog();
    const newTaskBtn = document.querySelector('.newTask');

    newTaskBtn.addEventListener('click', () => {
        taskDialog.showModal();
    });

})();

function createToDoDialog() {
    
    const closeBtn = document.querySelector('.close');
    const addTaskBtn = document.querySelector('.taskCreate');
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    const priority = document.querySelector('.priority');
    const dueDate = document.querySelector('.due');
    const selectProjectList = document.querySelector('.selectProject');

    closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        taskDialog.close();
    });

    addTaskBtn.addEventListener('click', (event) => {
        event.preventDefault();
        (0,_createToDo_js__WEBPACK_IMPORTED_MODULE_1__.createObject)(title, description, dueDate, priority, selectProjectList);
        taskDialog.close();
    });


};


(function createProjectDialog() {
    // Buttons
    const newProjBtn = document.createElement('button');
    const closeBtn = document.createElement('button');
    const addProjBtn = document.createElement('button');
    const delProj = document.createElement('button');

    // Dialog
    const projDialog = document.createElement('dialog');
    const projForm = document.createElement('form');
    const labelName = document.createElement('label');
    const inputName = document.createElement('input');
    const labelDesc = document.createElement('label');
    const inputDesc = document.createElement('input');
    const formElements = [labelName, inputName, labelDesc, inputDesc, addProjBtn];

    // ClassLists
    projDialog.classList.add('projDialog');
    projForm.classList.add('projForm');

    // Text Content
    newProjBtn.textContent = 'New Project';
    closeBtn.textContent = 'X';
    addProjBtn.textContent = 'Add Project';
    labelName.textContent = 'Project Name:';
    labelDesc.textContent = 'Short Description:';
    delProj.textContent = 'Delete Project';

    // Buton Function
    newProjBtn.addEventListener('click', () => {
        projDialog.showModal();
    });

    closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        projDialog.close();
    });

    addProjBtn.addEventListener('click', (event) => {
        event.preventDefault();
        (0,_createProject_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(inputName.value, inputDesc.value);
        updateToDoProjectsList();
        projDialog.close();
    });

    // Finish Up and Append
    for (let element of formElements){
        projForm.appendChild(element);
    };

    projDialog.appendChild(closeBtn);
    projDialog.appendChild(projForm);
    sidebar.appendChild(newProjBtn);
    sidebar.appendChild(projDialog);
})();

function clearScreen () {
    while (tasks.firstChild) {
        tasks.firstChild.remove();
    }

    while (projectsDiv.firstChild) {
        projectsDiv.firstChild.remove();
    }
}

function updateScreen () {
    clearScreen();

    for (let object of selectedProject.todos){
        tasks.appendChild((0,_createToDo_js__WEBPACK_IMPORTED_MODULE_1__.createTodoDiv)(object));
    };

    for (let project of projects){
        projectsDiv.appendChild((0,_createProject_js__WEBPACK_IMPORTED_MODULE_2__.createProjectDiv)(project));
    };
};

function updateToDoProjectsList () {
    const options = document.querySelector('.selectProject');


    while (options.firstChild){
        options.firstChild.remove();
    }
    

    for (let project of projects) {
        const option = document.createElement('option');
        option.value = `${project.name}`;
        option.textContent = `${project.name}`;

        options.appendChild(option);
    }
};

function selectProject(object) {
    selectedProject = object;
}




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxRQUFRLGlFQUFjO0FBQ3RCO0FBQ0EsUUFBUSwrREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtDQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCw2QkFBNkI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVk7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JNOEI7QUFDb0M7QUFDVTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBWTtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBYTtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2REFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUVBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsYUFBYTtBQUN2QyxnQ0FBZ0MsYUFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY3JlYXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGFzayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5wcm9qRm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuLnByb2plY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzYsIDIzNik7XHJcbn1cclxuXHJcbi8qIERyb3BEb3duIE1lbnUgKi9cclxuLmRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjQpO1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBidXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBNEJEO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvakZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDUwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzNiwgMjM2KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRHJvcERvd24gTWVudSAqL1xcclxcbi5kcm9wZG93biB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBibG9jazsgXFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1jb250ZW50IGJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tY29udGVudCBidXR0b246aG92ZXIge1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTRCRDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RzLCB1cGRhdGVTY3JlZW4sIHNlbGVjdFByb2plY3QsIHVwZGF0ZVRvRG9Qcm9qZWN0c0xpc3QgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUb2RvRGl2IH0gZnJvbSBcIi4vY3JlYXRlVG9Eby5qc1wiO1xyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoVG9kbyh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdXBkYXRlVG9Eb1Byb2plY3RzTGlzdCgpO1xyXG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURlc2NyaXB0aW9uIChkZXNjKSB7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2M7XHJcbiAgICAgICAgdXBkYXRlVG9Eb1Byb2plY3RzTGlzdCgpO1xyXG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRvZG8odG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKHRoaXMudG9kb3MuaW5kZXhPZih0b2RvKSwgMSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGl2KHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBwcm9qRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBvcHRpb25zQnRuID0gZHJvcERvd24ocHJvamVjdCk7XHJcblxyXG4gICAgcHJvakRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcbiAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICBwcm9qRGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XHJcblxyXG4gICAgcHJvakRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzZWxlY3RQcm9qZWN0KHByb2plY3QpXHJcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKHByb2pEZXNjKTtcclxuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoZGVzY0Rpdik7XHJcbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKG9wdGlvbnNCdG4pO1xyXG5cclxuICAgIHVwZGF0ZVRvRG9Qcm9qZWN0c0xpc3QoKTtcclxuICAgIHJldHVybiBwcm9qRGl2XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIFxyXG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuXHJcbiAgICB1cGRhdGVUb0RvUHJvamVjdHNMaXN0KCk7XHJcbiAgICB1cGRhdGVTY3JlZW4oKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGRyb3BEb3duIChwcm9qZWN0KSB7XHJcbiAgICAvLyBFbGVtZW50c1xyXG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaG92ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRyb3BDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBkZXNjQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgLy8gVGV4dCBDb250ZW50XHJcbiAgICBob3ZlckJ0bi50ZXh0Q29udGVudCA9ICdPcHRpb25zJztcclxuICAgIG5hbWVCdG4udGV4dENvbnRlbnQgPSAnQ2hhbmdlIE5hbWUnO1xyXG4gICAgZGVzY0J0bi50ZXh0Q29udGVudCA9ICdDaGFuZ2UgRGVzY3JpcHRpb24nO1xyXG5cclxuICAgIC8vIENsYXNzTGlzdFxyXG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpO1xyXG4gICAgZHJvcENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tY29udGVudCcpO1xyXG5cclxuICAgIC8vIEJ1dHRvbiBGdW5jdGlvblxyXG4gICAgZm9yIChsZXQgYnV0dG9uIG9mIFtuYW1lQnRuLCBkZXNjQnRuXSl7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZHJvcERvd25EaWFsb2coYnV0dG9uLCBwcm9qZWN0KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEFwcGVuZFxyXG4gICAgZHJvcENvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUJ0bik7XHJcbiAgICBkcm9wQ29udGVudC5hcHBlbmRDaGlsZChkZXNjQnRuKTtcclxuXHJcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGhvdmVyQnRuKTtcclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHJvcENvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiB0YXNrRGl2O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZHJvcERvd25EaWFsb2cgKGJ1dHRvbiwgcHJvamVjdCkge1xyXG4gICAgLy8gRWxlbWVudHNcclxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG4gICAgY29uc3QgZGlhbG9nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkaWFsb2dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBkaWFsb2dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBkaWFsb2dDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZGlhbG9nQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgLy8gVGV4dCBDb250ZW50XHJcbiAgICBkaWFsb2dMYWJlbC50ZXh0Q29udGVudCA9IGJ1dHRvbi50ZXh0Q29udGVudDtcclxuICAgIGRpYWxvZ0FkZC50ZXh0Q29udGVudCA9ICdDaGFuZ2UnO1xyXG4gICAgZGlhbG9nQ2xvc2UudGV4dENvbnRlbnQgPSAnWCc7XHJcblxyXG4gICAgLy8gRnVuY3Rpb25cclxuICAgIGRpYWxvZ0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaWFsb2cucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN3aXRjaCAoYnV0dG9uLnRleHRDb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdDaGFuZ2UgTmFtZSc6XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNoYW5nZU5hbWUoZGlhbG9nSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdDaGFuZ2UgRGVzY3JpcHRpb24nOlxyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jaGFuZ2VEZXNjcmlwdGlvbihkaWFsb2dJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgICAgIGRpYWxvZy5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFwcGVuZFxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBbZGlhbG9nQ2xvc2UsIGRpYWxvZ0xhYmVsLCBkaWFsb2dJbnB1dCwgZGlhbG9nQWRkXTtcclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcclxuICAgICAgICBkaWFsb2dEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0Rpdik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcclxuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcclxufTtcclxuXHJcbi8vLy8vLyBHbG9iYWwgSW5kZXguSlMgUHJvamVjdHMgaXRlcmF0aW5nIGZ1bmN0aW9ucy5cclxuZnVuY3Rpb24gcHJvamVjdHNQdXNoKGl0ZW0pIHtcclxuXHJcbiAgICBmb3IgKGxldCBvYmplY3Qgb2YgcHJvamVjdHMpIHtcclxuICAgICAgICBpZiAob2JqZWN0Lm5hbWUgPT0gaXRlbS5wcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5wdXNoVG9kbyhpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0c1JlbW92ZShpdGVtKSB7XHJcblxyXG4gICAgZm9yIChsZXQgb2JqZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5uYW1lID09IGl0ZW0ucHJvamVjdCkge1xyXG4gICAgICAgICAgICBvYmplY3QucmVtb3ZlVG9kbyhpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1Byb2plY3QsIGNyZWF0ZVByb2plY3REaXYsIGNyZWF0ZVByb2plY3QsIHByb2plY3RzUHVzaCwgcHJvamVjdHNSZW1vdmV9IiwiaW1wb3J0IHsgdXBkYXRlU2NyZWVuLCBwcm9qZWN0cyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHByb2plY3RzUHVzaCwgcHJvamVjdHNSZW1vdmUgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0LmpzXCI7XHJcblxyXG5jb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG5cclxuY2xhc3MgdG9EbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURlc2NyaXB0aW9uKGRlc2MpIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzYztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VEYXRlKGRhdGUpIHtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIHByb2plY3RzUmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgcHJvamVjdHNQdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9EaXYgKHRvZG8pIHtcclxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHRhc2tEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0YXNrRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkcm9wRG93biA9IGRyb3Bkb3duKHRvZG8pO1xyXG5cclxuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XHJcbiAgICB0YXNrRHVlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcclxuXHJcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG4gICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcclxuXHJcbiAgICB0YXNrRGVzY0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgdGFza0Rlc2NEaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xyXG5cclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NEaXYpO1xyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRHVlKTtcclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHJvcERvd24pO1xyXG5cclxuICAgIHJldHVybiB0YXNrRGl2XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcbiAgICBjb25zdCB0b2RvID0gbmV3IHRvRG8odGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgcHJvamVjdC52YWx1ZSk7XHJcblxyXG4gICAgZm9yIChsZXQgb2JqZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5uYW1lID09IHByb2plY3QudmFsdWUpIHtcclxuICAgICAgICAgICAgb2JqZWN0LnB1c2hUb2RvKHRvZG8pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlU2NyZWVuKCk7XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gZHJvcGRvd24gKHRvZG8pIHtcclxuICAgIC8vIEVsZW1lbnRzXHJcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBob3ZlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZHJvcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5hbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRlc2NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IHByaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IHByb2pCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50cyA9IFtuYW1lQnRuLCBkZXNjQnRuLCBkYXRlQnRuLCBwcmlvQnRuLCBwcm9qQnRuXTtcclxuXHJcbiAgICAvLyBUZXh0IENvbnRlbnRcclxuICAgIGhvdmVyQnRuLnRleHRDb250ZW50ID0gJ09wdGlvbnMnO1xyXG4gICAgbmFtZUJ0bi50ZXh0Q29udGVudCA9ICdDaGFuZ2UgTmFtZSc7XHJcbiAgICBkZXNjQnRuLnRleHRDb250ZW50ID0gJ0NoYW5nZSBEZXNjcmlwdGlvbic7XHJcbiAgICBkYXRlQnRuLnRleHRDb250ZW50ID0gJ0NoYW5nZSBEdWUgRGF0ZSc7XHJcbiAgICBwcmlvQnRuLnRleHRDb250ZW50ID0gJ0NoYW5nZSBQcmlvcml0eSc7XHJcbiAgICBwcm9qQnRuLnRleHRDb250ZW50ID0gJ0NoYW5nZSBQcm9qZWN0JztcclxuXHJcbiAgICAvLyBDbGFzc0xpc3RcclxuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKTtcclxuICAgIGRyb3BDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWNvbnRlbnQnKTtcclxuXHJcbiAgICAvLyBCdXR0b25zIEZ1bmN0aW9uc1xyXG4gICAgZm9yIChsZXQgYnV0dG9uIG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2Ryb3Bkb3duRGlhbG9nKGJ1dHRvbiwgdG9kbyl9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBlbmRcclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpe1xyXG4gICAgICAgIGRyb3BDb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoaG92ZXJCdG4pO1xyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkcm9wQ29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHRhc2tEaXY7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkcm9wZG93bkRpYWxvZyAoYnV0dG9uLCB0b2RvKSB7XHJcbiAgICAvLyBFbGVtZW50c1xyXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XHJcbiAgICBjb25zdCBkaWFsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRpYWxvZ0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxldCBkaWFsb2dJbnB1dDsgLy8gRGVmaW5lZCBCZWxsb3dcclxuICAgIGNvbnN0IGRpYWxvZ0Nsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBkaWFsb2dBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIFxyXG5cclxuICAgIC8vIFRleHQgQ29udGVudFxyXG4gICAgZGlhbG9nTGFiZWwudGV4dENvbnRlbnQgPSBidXR0b24udGV4dENvbnRlbnQ7XHJcbiAgICBkaWFsb2dBZGQudGV4dENvbnRlbnQgPSAnQ2hhbmdlJztcclxuICAgIGRpYWxvZ0Nsb3NlLnRleHRDb250ZW50ID0gJ1gnO1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uXHJcbiAgICBzd2l0Y2ggKGJ1dHRvbi50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNhc2UgJ0NoYW5nZSBEdWUgRGF0ZSc6XHJcbiAgICAgICAgICAgIGRpYWxvZ0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgZGlhbG9nSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnQ2hhbmdlIFByb2plY3QnOlxyXG4gICAgICAgICAgICAvLyBDbG9uZSB0aGUgZXhpc3RpbmcgUHJvamVjdCBMaXN0IGZyb20gSW5kZXguanMgYXMgaXQgaXMgYXV0b21hdGljYWxseSB1cGRhdGVkLlxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdFByb2plY3QnKTtcclxuICAgICAgICAgICAgZGlhbG9nSW5wdXQgPSBwcm9qZWN0TGlzdEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgZGlhbG9nSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBkaWFsb2dDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZGlhbG9nLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGJ1dHRvbi50ZXh0Q29udGVudCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQ2hhbmdlIE5hbWUnOlxyXG4gICAgICAgICAgICAgICAgdG9kby5jaGFuZ2VUaXRsZShkaWFsb2dJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0NoYW5nZSBEZXNjcmlwdGlvbic6XHJcbiAgICAgICAgICAgICAgICB0b2RvLmNoYW5nZURlc2NyaXB0aW9uKGRpYWxvZ0lucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQ2hhbmdlIER1ZSBEYXRlJzpcclxuICAgICAgICAgICAgICAgIHRvZG8uY2hhbmdlRGF0ZShkaWFsb2dJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0NoYW5nZSBQcmlvcml0eSc6XHJcbiAgICAgICAgICAgICAgICB0b2RvLmNoYW5nZVByaW9yaXR5KGRpYWxvZ0lucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQ2hhbmdlIFByb2plY3QnOlxyXG4gICAgICAgICAgICAgICAgdG9kby5jaGFuZ2VQcm9qZWN0KGRpYWxvZ0lucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVTY3JlZW4oKTtcclxuICAgICAgICBkaWFsb2cucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBcHBlbmRcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gW2RpYWxvZ0Nsb3NlLCBkaWFsb2dMYWJlbCwgZGlhbG9nSW5wdXQsIGRpYWxvZ0FkZF07XHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgZGlhbG9nRGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dEaXYpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGRpYWxvZyk7XHJcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge3RvRG8sIGNyZWF0ZVRvZG9EaXYsIGNyZWF0ZU9iamVjdH0iLCJpbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHtjcmVhdGVPYmplY3QsIGNyZWF0ZVRvZG9EaXYsIHRvRG99IGZyb20gJy4vY3JlYXRlVG9Eby5qcyc7XHJcbmltcG9ydCB7Y3JlYXRlUHJvamVjdERpdiwgY3JlYXRlUHJvamVjdCwgUHJvamVjdH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0LmpzJztcclxuXHJcblxyXG5jb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuY29uc3QgZGVmYXVsdFByb2ogPSBuZXcgUHJvamVjdCgnRGVmYXVsdCcsICdEZWZhdWx0IGxpc3Qgb2YgVG9kb3MnKTtcclxuY29uc3QgcHJvamVjdHMgPSBbZGVmYXVsdFByb2pdO1xyXG5sZXQgc2VsZWN0ZWRQcm9qZWN0ID0gZGVmYXVsdFByb2o7XHJcblxyXG5jb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEaWFsb2cnKTtcclxuXHJcbnVwZGF0ZVNjcmVlbigpO1xyXG5cclxuKGZ1bmN0aW9uIGNyZWF0ZVRhc2tCdXR0b24oKSB7XHJcbiAgICBjcmVhdGVUb0RvRGlhbG9nKCk7XHJcbiAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2snKTtcclxuXHJcbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICB9KTtcclxuXHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb0RvRGlhbG9nKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ3JlYXRlJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jyk7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZScpO1xyXG4gICAgY29uc3Qgc2VsZWN0UHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0UHJvamVjdCcpO1xyXG5cclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjcmVhdGVPYmplY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc2VsZWN0UHJvamVjdExpc3QpO1xyXG4gICAgICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbn07XHJcblxyXG5cclxuKGZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaWFsb2coKSB7XHJcbiAgICAvLyBCdXR0b25zXHJcbiAgICBjb25zdCBuZXdQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgYWRkUHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZGVsUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgIC8vIERpYWxvZ1xyXG4gICAgY29uc3QgcHJvakRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG4gICAgY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGxhYmVsRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBpbnB1dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gW2xhYmVsTmFtZSwgaW5wdXROYW1lLCBsYWJlbERlc2MsIGlucHV0RGVzYywgYWRkUHJvakJ0bl07XHJcblxyXG4gICAgLy8gQ2xhc3NMaXN0c1xyXG4gICAgcHJvakRpYWxvZy5jbGFzc0xpc3QuYWRkKCdwcm9qRGlhbG9nJyk7XHJcbiAgICBwcm9qRm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qRm9ybScpO1xyXG5cclxuICAgIC8vIFRleHQgQ29udGVudFxyXG4gICAgbmV3UHJvakJ0bi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XHJcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcclxuICAgIGFkZFByb2pCdG4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xyXG4gICAgbGFiZWxOYW1lLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTonO1xyXG4gICAgbGFiZWxEZXNjLnRleHRDb250ZW50ID0gJ1Nob3J0IERlc2NyaXB0aW9uOic7XHJcbiAgICBkZWxQcm9qLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0JztcclxuXHJcbiAgICAvLyBCdXRvbiBGdW5jdGlvblxyXG4gICAgbmV3UHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwcm9qRGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHByb2pEaWFsb2cuY2xvc2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNyZWF0ZVByb2plY3QoaW5wdXROYW1lLnZhbHVlLCBpbnB1dERlc2MudmFsdWUpO1xyXG4gICAgICAgIHVwZGF0ZVRvRG9Qcm9qZWN0c0xpc3QoKTtcclxuICAgICAgICBwcm9qRGlhbG9nLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaW5pc2ggVXAgYW5kIEFwcGVuZFxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBmb3JtRWxlbWVudHMpe1xyXG4gICAgICAgIHByb2pGb3JtLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm9qRGlhbG9nLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgIHByb2pEaWFsb2cuYXBwZW5kQ2hpbGQocHJvakZvcm0pO1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdQcm9qQnRuKTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvakRpYWxvZyk7XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBjbGVhclNjcmVlbiAoKSB7XHJcbiAgICB3aGlsZSAodGFza3MuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHRhc2tzLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKHByb2plY3RzRGl2LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBwcm9qZWN0c0Rpdi5maXJzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTY3JlZW4gKCkge1xyXG4gICAgY2xlYXJTY3JlZW4oKTtcclxuXHJcbiAgICBmb3IgKGxldCBvYmplY3Qgb2Ygc2VsZWN0ZWRQcm9qZWN0LnRvZG9zKXtcclxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZChjcmVhdGVUb2RvRGl2KG9iamVjdCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKXtcclxuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RGl2KHByb2plY3QpKTtcclxuICAgIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb0RvUHJvamVjdHNMaXN0ICgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0UHJvamVjdCcpO1xyXG5cclxuXHJcbiAgICB3aGlsZSAob3B0aW9ucy5maXJzdENoaWxkKXtcclxuICAgICAgICBvcHRpb25zLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gYCR7cHJvamVjdC5uYW1lfWA7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5uYW1lfWA7XHJcblxyXG4gICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFByb2plY3Qob2JqZWN0KSB7XHJcbiAgICBzZWxlY3RlZFByb2plY3QgPSBvYmplY3Q7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge3Byb2plY3RzLCB0YXNrcywgdXBkYXRlU2NyZWVuLCBjbGVhclNjcmVlbiwgc2VsZWN0UHJvamVjdCwgdXBkYXRlVG9Eb1Byb2plY3RzTGlzdCwgcHJvamVjdHNEaXZ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=