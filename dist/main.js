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
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");




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
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.populateStorage)();
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
/* harmony export */   newProjectPush: () => (/* binding */ newProjectPush),
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
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");






const tasks = document.querySelector('.tasks');
const sidebar = document.querySelector('.sidebar');
const projectsDiv = document.querySelector('.projects');



const defaultProj = new _createProject_js__WEBPACK_IMPORTED_MODULE_2__.Project('Default', 'Default list of Todos');
const projects = [defaultProj];
let selectedProject = defaultProj;

(0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.systemCheck)();


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

////// Push new Project

function newProjectPush(project) {
    projects.push(project);
}




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateStorage: () => (/* binding */ populateStorage),
/* harmony export */   setObjects: () => (/* binding */ setObjects),
/* harmony export */   systemCheck: () => (/* binding */ systemCheck)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createToDo.js */ "./src/createToDo.js");





function systemCheck() {
    if (!localStorage.getItem("projectList")) {
        populateStorage();
    } else {
        setObjects();
    }
}

function populateStorage() {
    window.localStorage.setItem("projectList", JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects));
}

function setObjects() {
    let newProjectList = JSON.parse(window.localStorage.getItem("projectList"));

    for (let project of newProjectList){
        let newProject = new _createProject_js__WEBPACK_IMPORTED_MODULE_1__.Project(Object.values(project)[0], Object.values(project)[1])
        
        if (project["todos"]){
            for (let todo of project["todos"]){
                let newTodo = new _createToDo_js__WEBPACK_IMPORTED_MODULE_2__.toDo(todo["title"], todo["description"], todo["dueDate"], todo["priority"], todo["project"]);
    
                newProject.pushTodo(newTodo);
            }
        }
        
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.newProjectPush)(newProject);
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsYUFBYTtBQUN2QyxnQ0FBZ0MsYUFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwS3NEO0FBQ1Q7QUFDTjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0NBQVE7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY3JlYXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50YXNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnByb2pGb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzNiwgMjM2KTtcclxufVxyXG5cclxuLyogRHJvcERvd24gTWVudSAqL1xyXG4uZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNCk7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE0QkQ7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qRm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNTAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM2LCAyMzYpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wRG93biBNZW51ICovXFxyXFxuLmRyb3Bkb3duIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyBcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWNvbnRlbnQgYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1jb250ZW50IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBNEJEO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHMsIHVwZGF0ZVNjcmVlbiwgc2VsZWN0UHJvamVjdCwgdXBkYXRlVG9Eb1Byb2plY3RzTGlzdCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRvZG9EaXYgfSBmcm9tIFwiLi9jcmVhdGVUb0RvLmpzXCI7XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hUb2RvKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTmFtZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB1cGRhdGVUb0RvUHJvamVjdHNMaXN0KCk7XHJcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRGVzY3JpcHRpb24gKGRlc2MpIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzYztcclxuICAgICAgICB1cGRhdGVUb0RvUHJvamVjdHNMaXN0KCk7XHJcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVG9kbyh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UodGhpcy50b2Rvcy5pbmRleE9mKHRvZG8pLCAxKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaXYocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IHByb2pEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IG9wdGlvbnNCdG4gPSBkcm9wRG93bihwcm9qZWN0KTtcclxuXHJcbiAgICBwcm9qRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgIHByb2pEZXNjLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBwcm9qRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNlbGVjdFByb2plY3QocHJvamVjdClcclxuICAgICAgICB1cGRhdGVTY3JlZW4oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQocHJvakRlc2MpO1xyXG4gICAgcHJvakRpdi5hcHBlbmRDaGlsZChkZXNjRGl2KTtcclxuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQob3B0aW9uc0J0bik7XHJcblxyXG4gICAgdXBkYXRlVG9Eb1Byb2plY3RzTGlzdCgpO1xyXG4gICAgcmV0dXJuIHByb2pEaXZcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgXHJcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG5cclxuICAgIHVwZGF0ZVRvRG9Qcm9qZWN0c0xpc3QoKTtcclxuICAgIHVwZGF0ZVNjcmVlbigpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZHJvcERvd24gKHByb2plY3QpIHtcclxuICAgIC8vIEVsZW1lbnRzXHJcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBob3ZlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZHJvcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5hbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRlc2NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAvLyBUZXh0IENvbnRlbnRcclxuICAgIGhvdmVyQnRuLnRleHRDb250ZW50ID0gJ09wdGlvbnMnO1xyXG4gICAgbmFtZUJ0bi50ZXh0Q29udGVudCA9ICdDaGFuZ2UgTmFtZSc7XHJcbiAgICBkZXNjQnRuLnRleHRDb250ZW50ID0gJ0NoYW5nZSBEZXNjcmlwdGlvbic7XHJcblxyXG4gICAgLy8gQ2xhc3NMaXN0XHJcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duJyk7XHJcbiAgICBkcm9wQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1jb250ZW50Jyk7XHJcblxyXG4gICAgLy8gQnV0dG9uIEZ1bmN0aW9uXHJcbiAgICBmb3IgKGxldCBidXR0b24gb2YgW25hbWVCdG4sIGRlc2NCdG5dKXtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkcm9wRG93bkRpYWxvZyhidXR0b24sIHByb2plY3QpKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQXBwZW5kXHJcbiAgICBkcm9wQ29udGVudC5hcHBlbmRDaGlsZChuYW1lQnRuKTtcclxuICAgIGRyb3BDb250ZW50LmFwcGVuZENoaWxkKGRlc2NCdG4pO1xyXG5cclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoaG92ZXJCdG4pO1xyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkcm9wQ29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHRhc2tEaXY7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkcm9wRG93bkRpYWxvZyAoYnV0dG9uLCBwcm9qZWN0KSB7XHJcbiAgICAvLyBFbGVtZW50c1xyXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XHJcbiAgICBjb25zdCBkaWFsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRpYWxvZ0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IGRpYWxvZ0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGRpYWxvZ0Nsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBkaWFsb2dBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAvLyBUZXh0IENvbnRlbnRcclxuICAgIGRpYWxvZ0xhYmVsLnRleHRDb250ZW50ID0gYnV0dG9uLnRleHRDb250ZW50O1xyXG4gICAgZGlhbG9nQWRkLnRleHRDb250ZW50ID0gJ0NoYW5nZSc7XHJcbiAgICBkaWFsb2dDbG9zZS50ZXh0Q29udGVudCA9ICdYJztcclxuXHJcbiAgICAvLyBGdW5jdGlvblxyXG4gICAgZGlhbG9nQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRpYWxvZy5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRpYWxvZ0FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3dpdGNoIChidXR0b24udGV4dENvbnRlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0NoYW5nZSBOYW1lJzpcclxuICAgICAgICAgICAgICAgIHByb2plY3QuY2hhbmdlTmFtZShkaWFsb2dJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0NoYW5nZSBEZXNjcmlwdGlvbic6XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNoYW5nZURlc2NyaXB0aW9uKGRpYWxvZ0lucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICAgICAgZGlhbG9nLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwZW5kXHJcbiAgICBjb25zdCBlbGVtZW50cyA9IFtkaWFsb2dDbG9zZSwgZGlhbG9nTGFiZWwsIGRpYWxvZ0lucHV0LCBkaWFsb2dBZGRdO1xyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIGRpYWxvZ0Rpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoZGlhbG9nRGl2KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChkaWFsb2cpO1xyXG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG59O1xyXG5cclxuLy8vLy8vIEdsb2JhbCBJbmRleC5KUyBQcm9qZWN0cyBpdGVyYXRpbmcgZnVuY3Rpb25zLlxyXG5mdW5jdGlvbiBwcm9qZWN0c1B1c2goaXRlbSkge1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBvYmplY3Qgb2YgcHJvamVjdHMpIHtcclxuICAgICAgICBpZiAob2JqZWN0Lm5hbWUgPT0gaXRlbS5wcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5wdXNoVG9kbyhpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RzUmVtb3ZlKGl0ZW0pIHtcclxuXHJcbiAgICBmb3IgKGxldCBvYmplY3Qgb2YgcHJvamVjdHMpIHtcclxuICAgICAgICBpZiAob2JqZWN0Lm5hbWUgPT0gaXRlbS5wcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5yZW1vdmVUb2RvKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7UHJvamVjdCwgY3JlYXRlUHJvamVjdERpdiwgY3JlYXRlUHJvamVjdCwgcHJvamVjdHNQdXNoLCBwcm9qZWN0c1JlbW92ZX0iLCJpbXBvcnQgeyB1cGRhdGVTY3JlZW4sIHByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgcHJvamVjdHNQdXNoLCBwcm9qZWN0c1JlbW92ZSB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3QuanNcIjtcclxuaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlLmpzXCI7XHJcblxyXG5jb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG5cclxuY2xhc3MgdG9EbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURlc2NyaXB0aW9uKGRlc2MpIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzYztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VEYXRlKGRhdGUpIHtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIHByb2plY3RzUmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgcHJvamVjdHNQdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9EaXYgKHRvZG8pIHtcclxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHRhc2tEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0YXNrRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkcm9wRG93biA9IGRyb3Bkb3duKHRvZG8pO1xyXG5cclxuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XHJcbiAgICB0YXNrRHVlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcclxuXHJcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG4gICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcclxuXHJcbiAgICB0YXNrRGVzY0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgdGFza0Rlc2NEaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xyXG5cclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NEaXYpO1xyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRHVlKTtcclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHJvcERvd24pO1xyXG5cclxuICAgIHJldHVybiB0YXNrRGl2XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcbiAgICBjb25zdCB0b2RvID0gbmV3IHRvRG8odGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgcHJvamVjdC52YWx1ZSk7XHJcblxyXG4gICAgZm9yIChsZXQgb2JqZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5uYW1lID09IHByb2plY3QudmFsdWUpIHtcclxuICAgICAgICAgICAgb2JqZWN0LnB1c2hUb2RvKHRvZG8pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBkcm9wZG93biAodG9kbykge1xyXG4gICAgLy8gRWxlbWVudHNcclxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhvdmVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBkcm9wQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmFtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZGVzY0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgcHJpb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgcHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gW25hbWVCdG4sIGRlc2NCdG4sIGRhdGVCdG4sIHByaW9CdG4sIHByb2pCdG5dO1xyXG5cclxuICAgIC8vIFRleHQgQ29udGVudFxyXG4gICAgaG92ZXJCdG4udGV4dENvbnRlbnQgPSAnT3B0aW9ucyc7XHJcbiAgICBuYW1lQnRuLnRleHRDb250ZW50ID0gJ0NoYW5nZSBOYW1lJztcclxuICAgIGRlc2NCdG4udGV4dENvbnRlbnQgPSAnQ2hhbmdlIERlc2NyaXB0aW9uJztcclxuICAgIGRhdGVCdG4udGV4dENvbnRlbnQgPSAnQ2hhbmdlIER1ZSBEYXRlJztcclxuICAgIHByaW9CdG4udGV4dENvbnRlbnQgPSAnQ2hhbmdlIFByaW9yaXR5JztcclxuICAgIHByb2pCdG4udGV4dENvbnRlbnQgPSAnQ2hhbmdlIFByb2plY3QnO1xyXG5cclxuICAgIC8vIENsYXNzTGlzdFxyXG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpO1xyXG4gICAgZHJvcENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tY29udGVudCcpO1xyXG5cclxuICAgIC8vIEJ1dHRvbnMgRnVuY3Rpb25zXHJcbiAgICBmb3IgKGxldCBidXR0b24gb2YgZWxlbWVudHMpIHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7ZHJvcGRvd25EaWFsb2coYnV0dG9uLCB0b2RvKX0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGVuZFxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBlbGVtZW50cyl7XHJcbiAgICAgICAgZHJvcENvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChob3ZlckJ0bik7XHJcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRyb3BDb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gdGFza0RpdjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGRyb3Bkb3duRGlhbG9nIChidXR0b24sIHRvZG8pIHtcclxuICAgIC8vIEVsZW1lbnRzXHJcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcclxuICAgIGNvbnN0IGRpYWxvZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGlhbG9nTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGV0IGRpYWxvZ0lucHV0OyAvLyBEZWZpbmVkIEJlbGxvd1xyXG4gICAgY29uc3QgZGlhbG9nQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRpYWxvZ0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgXHJcblxyXG4gICAgLy8gVGV4dCBDb250ZW50XHJcbiAgICBkaWFsb2dMYWJlbC50ZXh0Q29udGVudCA9IGJ1dHRvbi50ZXh0Q29udGVudDtcclxuICAgIGRpYWxvZ0FkZC50ZXh0Q29udGVudCA9ICdDaGFuZ2UnO1xyXG4gICAgZGlhbG9nQ2xvc2UudGV4dENvbnRlbnQgPSAnWCc7XHJcblxyXG4gICAgLy8gRnVuY3Rpb25cclxuICAgIHN3aXRjaCAoYnV0dG9uLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgY2FzZSAnQ2hhbmdlIER1ZSBEYXRlJzpcclxuICAgICAgICAgICAgZGlhbG9nSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBkaWFsb2dJbnB1dC50eXBlID0gXCJkYXRlXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdDaGFuZ2UgUHJvamVjdCc6XHJcbiAgICAgICAgICAgIC8vIENsb25lIHRoZSBleGlzdGluZyBQcm9qZWN0IExpc3QgZnJvbSBJbmRleC5qcyBhcyBpdCBpcyBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQuXHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0UHJvamVjdCcpO1xyXG4gICAgICAgICAgICBkaWFsb2dJbnB1dCA9IHByb2plY3RMaXN0RWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBkaWFsb2dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGRpYWxvZ0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaWFsb2cucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN3aXRjaCAoYnV0dG9uLnRleHRDb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdDaGFuZ2UgTmFtZSc6XHJcbiAgICAgICAgICAgICAgICB0b2RvLmNoYW5nZVRpdGxlKGRpYWxvZ0lucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQ2hhbmdlIERlc2NyaXB0aW9uJzpcclxuICAgICAgICAgICAgICAgIHRvZG8uY2hhbmdlRGVzY3JpcHRpb24oZGlhbG9nSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdDaGFuZ2UgRHVlIERhdGUnOlxyXG4gICAgICAgICAgICAgICAgdG9kby5jaGFuZ2VEYXRlKGRpYWxvZ0lucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQ2hhbmdlIFByaW9yaXR5JzpcclxuICAgICAgICAgICAgICAgIHRvZG8uY2hhbmdlUHJpb3JpdHkoZGlhbG9nSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdDaGFuZ2UgUHJvamVjdCc6XHJcbiAgICAgICAgICAgICAgICB0b2RvLmNoYW5nZVByb2plY3QoZGlhbG9nSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgICAgIGRpYWxvZy5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFwcGVuZFxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBbZGlhbG9nQ2xvc2UsIGRpYWxvZ0xhYmVsLCBkaWFsb2dJbnB1dCwgZGlhbG9nQWRkXTtcclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcclxuICAgICAgICBkaWFsb2dEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0Rpdik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcclxuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7dG9EbywgY3JlYXRlVG9kb0RpdiwgY3JlYXRlT2JqZWN0fSIsImltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge2NyZWF0ZU9iamVjdCwgY3JlYXRlVG9kb0RpdiwgdG9Eb30gZnJvbSAnLi9jcmVhdGVUb0RvLmpzJztcclxuaW1wb3J0IHtjcmVhdGVQcm9qZWN0RGl2LCBjcmVhdGVQcm9qZWN0LCBQcm9qZWN0LCBwcm9qZWN0c1B1c2h9IGZyb20gJy4vY3JlYXRlUHJvamVjdC5qcyc7XHJcbmltcG9ydCB7c3lzdGVtQ2hlY2ssIHBvcHVsYXRlU3RvcmFnZX0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xyXG5cclxuXHJcbmNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5jb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG5cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0UHJvaiA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0JywgJ0RlZmF1bHQgbGlzdCBvZiBUb2RvcycpO1xyXG5jb25zdCBwcm9qZWN0cyA9IFtkZWZhdWx0UHJval07XHJcbmxldCBzZWxlY3RlZFByb2plY3QgPSBkZWZhdWx0UHJvajtcclxuXHJcbnN5c3RlbUNoZWNrKCk7XHJcblxyXG5cclxuY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRGlhbG9nJyk7XHJcblxyXG51cGRhdGVTY3JlZW4oKTtcclxuXHJcbihmdW5jdGlvbiBjcmVhdGVUYXNrQnV0dG9uKCkge1xyXG4gICAgY3JlYXRlVG9Eb0RpYWxvZygpO1xyXG4gICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUYXNrJyk7XHJcblxyXG4gICAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0YXNrRGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgfSk7XHJcblxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9Eb0RpYWxvZygpIHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NyZWF0ZScpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUnKTtcclxuICAgIGNvbnN0IHNlbGVjdFByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdFByb2plY3QnKTtcclxuXHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGFza0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY3JlYXRlT2JqZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHNlbGVjdFByb2plY3RMaXN0KTtcclxuICAgICAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59O1xyXG5cclxuXHJcbihmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGlhbG9nKCkge1xyXG4gICAgLy8gQnV0dG9uc1xyXG4gICAgY29uc3QgbmV3UHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRlbFByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAvLyBEaWFsb2dcclxuICAgIGNvbnN0IHByb2pEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcclxuICAgIGNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBsYWJlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgaW5wdXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IFtsYWJlbE5hbWUsIGlucHV0TmFtZSwgbGFiZWxEZXNjLCBpbnB1dERlc2MsIGFkZFByb2pCdG5dO1xyXG5cclxuICAgIC8vIENsYXNzTGlzdHNcclxuICAgIHByb2pEaWFsb2cuY2xhc3NMaXN0LmFkZCgncHJvakRpYWxvZycpO1xyXG4gICAgcHJvakZvcm0uY2xhc3NMaXN0LmFkZCgncHJvakZvcm0nKTtcclxuXHJcbiAgICAvLyBUZXh0IENvbnRlbnRcclxuICAgIG5ld1Byb2pCdG4udGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xyXG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICBhZGRQcm9qQnRuLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcclxuICAgIGxhYmVsTmFtZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWU6JztcclxuICAgIGxhYmVsRGVzYy50ZXh0Q29udGVudCA9ICdTaG9ydCBEZXNjcmlwdGlvbjonO1xyXG4gICAgZGVsUHJvai50ZXh0Q29udGVudCA9ICdEZWxldGUgUHJvamVjdCc7XHJcblxyXG4gICAgLy8gQnV0b24gRnVuY3Rpb25cclxuICAgIG5ld1Byb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcHJvakRpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9qRGlhbG9nLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0KGlucHV0TmFtZS52YWx1ZSwgaW5wdXREZXNjLnZhbHVlKTtcclxuICAgICAgICB1cGRhdGVUb0RvUHJvamVjdHNMaXN0KCk7XHJcbiAgICAgICAgcHJvakRpYWxvZy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRmluaXNoIFVwIGFuZCBBcHBlbmRcclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZm9ybUVsZW1lbnRzKXtcclxuICAgICAgICBwcm9qRm9ybS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvakRpYWxvZy5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICBwcm9qRGlhbG9nLmFwcGVuZENoaWxkKHByb2pGb3JtKTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3UHJvakJ0bik7XHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2pEaWFsb2cpO1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gY2xlYXJTY3JlZW4gKCkge1xyXG4gICAgd2hpbGUgKHRhc2tzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICB0YXNrcy5maXJzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChwcm9qZWN0c0Rpdi5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcHJvamVjdHNEaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2NyZWVuICgpIHtcclxuICAgIGNsZWFyU2NyZWVuKCk7XHJcblxyXG4gICAgZm9yIChsZXQgb2JqZWN0IG9mIHNlbGVjdGVkUHJvamVjdC50b2Rvcyl7XHJcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0RpdihvYmplY3QpKTtcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cyl7XHJcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdERpdihwcm9qZWN0KSk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG9Eb1Byb2plY3RzTGlzdCAoKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdFByb2plY3QnKTtcclxuXHJcblxyXG4gICAgd2hpbGUgKG9wdGlvbnMuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgb3B0aW9ucy5maXJzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGAke3Byb2plY3QubmFtZX1gO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGAke3Byb2plY3QubmFtZX1gO1xyXG5cclxuICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RQcm9qZWN0KG9iamVjdCkge1xyXG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gb2JqZWN0O1xyXG59XHJcblxyXG4vLy8vLy8gUHVzaCBuZXcgUHJvamVjdFxyXG5cclxuZnVuY3Rpb24gbmV3UHJvamVjdFB1c2gocHJvamVjdCkge1xyXG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7cHJvamVjdHMsIHRhc2tzLCB1cGRhdGVTY3JlZW4sIGNsZWFyU2NyZWVuLCBzZWxlY3RQcm9qZWN0LCB1cGRhdGVUb0RvUHJvamVjdHNMaXN0LCBwcm9qZWN0c0RpdiwgbmV3UHJvamVjdFB1c2h9IiwiaW1wb3J0IHsgcHJvamVjdHMsIG5ld1Byb2plY3RQdXNoIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3QuanNcIjtcclxuaW1wb3J0IHsgdG9EbyB9IGZyb20gXCIuL2NyZWF0ZVRvRG8uanNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBzeXN0ZW1DaGVjaygpIHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKSkge1xyXG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRPYmplY3RzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE9iamVjdHMoKSB7XHJcbiAgICBsZXQgbmV3UHJvamVjdExpc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKTtcclxuXHJcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIG5ld1Byb2plY3RMaXN0KXtcclxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KE9iamVjdC52YWx1ZXMocHJvamVjdClbMF0sIE9iamVjdC52YWx1ZXMocHJvamVjdClbMV0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHByb2plY3RbXCJ0b2Rvc1wiXSl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdFtcInRvZG9zXCJdKXtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdUb2RvID0gbmV3IHRvRG8odG9kb1tcInRpdGxlXCJdLCB0b2RvW1wiZGVzY3JpcHRpb25cIl0sIHRvZG9bXCJkdWVEYXRlXCJdLCB0b2RvW1wicHJpb3JpdHlcIl0sIHRvZG9bXCJwcm9qZWN0XCJdKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5wdXNoVG9kbyhuZXdUb2RvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBuZXdQcm9qZWN0UHVzaChuZXdQcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7c3lzdGVtQ2hlY2ssIHNldE9iamVjdHMsIHBvcHVsYXRlU3RvcmFnZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==