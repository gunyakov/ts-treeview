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

/***/ "./src/DOM/element.ts":
/*!****************************!*\
  !*** ./src/DOM/element.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeEl: () => (/* binding */ makeEl)\n/* harmony export */ });\n/* harmony import */ var _helpers_addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addClass */ \"./src/helpers/addClass.ts\");\n\nfunction makeEl(tag, classList, type) {\n    if (classList === void 0) { classList = []; }\n    if (type === void 0) { type = \"\"; }\n    var el = document.createElement(tag);\n    if (type.length > 0)\n        el.type = type;\n    return (0,_helpers_addClass__WEBPACK_IMPORTED_MODULE_0__.addClass)(el, classList);\n}\n\n\n//# sourceURL=webpack://ts-treeview/./src/DOM/element.ts?");

/***/ }),

/***/ "./src/DOM/header.ts":
/*!***************************!*\
  !*** ./src/DOM/header.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeHeader: () => (/* binding */ makeHeader)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/DOM/element.ts\");\n\nfunction makeHeader(text, classList) {\n    if (classList === void 0) { classList = []; }\n    var el = (0,_element__WEBPACK_IMPORTED_MODULE_0__.makeEl)(\"h6\", classList);\n    el.innerText = text;\n    return el;\n}\n\n\n//# sourceURL=webpack://ts-treeview/./src/DOM/header.ts?");

/***/ }),

/***/ "./src/DOM/input.ts":
/*!**************************!*\
  !*** ./src/DOM/input.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeInput: () => (/* binding */ makeInput)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/DOM/element.ts\");\n\nfunction makeInput() {\n    var el = (0,_element__WEBPACK_IMPORTED_MODULE_0__.makeEl)(\"span\", [\"input-group\"]);\n    var input = (0,_element__WEBPACK_IMPORTED_MODULE_0__.makeEl)(\"input\", [\"form-control\", \"form-control-sm\"]);\n    input.type = \"text\";\n    input.setAttribute(\"placeholder\", \"Enter new name\");\n    el.append(input);\n    var btn = (0,_element__WEBPACK_IMPORTED_MODULE_0__.makeEl)(\"button\", [\"btn\", \"btn-outline-secondary\", \"form-control-sm\"]);\n    btn.type = \"button\";\n    var i = (0,_element__WEBPACK_IMPORTED_MODULE_0__.makeEl)(\"i\", [\"fas\", \"fa-save\"]);\n    btn.append(i);\n    el.append(btn);\n    return el;\n}\n\n\n//# sourceURL=webpack://ts-treeview/./src/DOM/input.ts?");

/***/ }),

/***/ "./src/animate.ts":
/*!************************!*\
  !*** ./src/animate.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slideDown: () => (/* binding */ slideDown),\n/* harmony export */   slideToggle: () => (/* binding */ slideToggle),\n/* harmony export */   slideUp: () => (/* binding */ slideUp)\n/* harmony export */ });\nfunction slideUp(target, duration) {\n    if (duration === void 0) { duration = 500; }\n    target.style.transitionProperty = 'height, margin, padding';\n    target.style.transitionDuration = duration + 'ms';\n    target.style.boxSizing = 'border-box';\n    target.style.height = target.offsetHeight + 'px';\n    target.offsetHeight;\n    target.style.overflow = 'hidden';\n    target.style.height = \"0\";\n    target.style.paddingTop = \"0\";\n    target.style.paddingBottom = \"0\";\n    target.style.marginTop = \"0\";\n    target.style.marginBottom = \"0\";\n    window.setTimeout(function () {\n        target.style.display = 'none';\n        target.style.removeProperty('height');\n        target.style.removeProperty('padding-top');\n        target.style.removeProperty('padding-bottom');\n        target.style.removeProperty('margin-top');\n        target.style.removeProperty('margin-bottom');\n        target.style.removeProperty('overflow');\n        target.style.removeProperty('transition-duration');\n        target.style.removeProperty('transition-property');\n        //alert(\"!\");\n    }, duration);\n}\nfunction slideDown(target, duration) {\n    if (duration === void 0) { duration = 500; }\n    target.style.removeProperty('display');\n    var display = window.getComputedStyle(target).display;\n    if (display === 'none')\n        display = 'block';\n    target.style.display = display;\n    var height = target.offsetHeight;\n    target.style.overflow = 'hidden';\n    target.style.height = \"0\";\n    target.style.paddingTop = \"0\";\n    target.style.paddingBottom = \"0\";\n    target.style.marginTop = \"0\";\n    target.style.marginBottom = \"0\";\n    target.offsetHeight;\n    target.style.boxSizing = 'border-box';\n    target.style.transitionProperty = \"height, margin, padding\";\n    target.style.transitionDuration = duration + 'ms';\n    target.style.height = height + 'px';\n    target.style.removeProperty('padding-top');\n    target.style.removeProperty('padding-bottom');\n    target.style.removeProperty('margin-top');\n    target.style.removeProperty('margin-bottom');\n    window.setTimeout(function () {\n        target.style.removeProperty('height');\n        target.style.removeProperty('overflow');\n        target.style.removeProperty('transition-duration');\n        target.style.removeProperty('transition-property');\n    }, duration);\n}\nfunction slideToggle(target, duration) {\n    if (duration === void 0) { duration = 500; }\n    if (window.getComputedStyle(target).display === 'none') {\n        return slideDown(target, duration);\n    }\n    else {\n        return slideUp(target, duration);\n    }\n}\n\n\n//# sourceURL=webpack://ts-treeview/./src/animate.ts?");

/***/ }),

/***/ "./src/callbacks.ts":
/*!**************************!*\
  !*** ./src/callbacks.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CB: () => (/* binding */ CB)\n/* harmony export */ });\n/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum */ \"./src/enum.ts\");\n\n//-----------------------------------------------------------------------------------------------\n//CALLBACKS LIST AND FIRE FUNCTION\n//-----------------------------------------------------------------------------------------------\nvar CB = /** @class */ (function () {\n    function CB() {\n        this._callbacks = []; //Calback array\n    }\n    /**\n     * Fire callback according EventType\n     * @param {EventType} event - Type of event\n     * @param {any} data - First data for callback\n     * @param {any} data1 - Second data for callback\n     * @param {any} data2 - Third data for callback\n     * @param {any} data3 - Forth data for callback\n     * @param {any} data4 - Fifth data for callback\n     */\n    CB.prototype.fire = function (event, data, data1, data2, data3, data4) {\n        if (data === void 0) { data = false; }\n        if (data1 === void 0) { data1 = false; }\n        if (data2 === void 0) { data2 = false; }\n        if (data3 === void 0) { data3 = false; }\n        if (data4 === void 0) { data4 = false; }\n        //@ts-ignore\n        var callback = this._callbacks[event];\n        if (callback) {\n            callback(data, data1, data2, data3, data4);\n        }\n        else {\n            console.log(\"Callback \".concat(event, \" have no assigned function.\"));\n        }\n    };\n    /**\n     * Register callback function to fire when EventType happened.\n     * @param {EventType} event - Event type for callback\n     * @param callback - Callback function what will be fired\n     */\n    CB.prototype.on = function (event, callback) {\n        var values = Object.values(_enum__WEBPACK_IMPORTED_MODULE_0__.EventType);\n        if (values.includes(event)) {\n            //Push function to callbacks list\n            //@ts-ignore\n            this._callbacks[event] = callback;\n        }\n        else {\n            console.log(\"Wrong event type. Pls check it again\", event);\n        }\n    };\n    return CB;\n}());\n\n\n\n//# sourceURL=webpack://ts-treeview/./src/callbacks.ts?");

/***/ }),

/***/ "./src/enum.ts":
/*!*********************!*\
  !*** ./src/enum.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventType: () => (/* binding */ EventType),\n/* harmony export */   ItemType: () => (/* binding */ ItemType)\n/* harmony export */ });\nvar EventType;\n(function (EventType) {\n    EventType[\"edit\"] = \"edit\";\n    EventType[\"itemclick\"] = \"item.click\";\n    EventType[\"itemdblclick\"] = \"item.dblclick\";\n    EventType[\"folderclick\"] = \"folder.click\";\n    EventType[\"folderdblclick\"] = \"folder.dblclick\";\n    EventType[\"itemcheckbox\"] = \"item.checkbox\";\n    EventType[\"foldercheckbox\"] = \"folder.checkbox\";\n})(EventType || (EventType = {}));\nvar ItemType;\n(function (ItemType) {\n    ItemType[\"item\"] = \"item\";\n    ItemType[\"folder\"] = \"folder\";\n    ItemType[\"both\"] = \"both\";\n})(ItemType || (ItemType = {}));\n\n\n//# sourceURL=webpack://ts-treeview/./src/enum.ts?");

/***/ }),

/***/ "./src/helpers/addClass.ts":
/*!*********************************!*\
  !*** ./src/helpers/addClass.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addClass: () => (/* binding */ addClass)\n/* harmony export */ });\nfunction addClass(el, classList) {\n    if (classList.length > 0) {\n        classList.forEach(function (item) {\n            el.classList.add(item);\n        });\n    }\n    return el;\n}\n\n\n//# sourceURL=webpack://ts-treeview/./src/helpers/addClass.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _treeview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treeview */ \"./src/treeview.ts\");\n\n//-----------------------------------------------------------------------------------------------\n//MINIT\n//-----------------------------------------------------------------------------------------------\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_treeview__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//@ts-ignore\ngetGlobalObject().TreeList = _treeview__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nfunction getGlobalObject() {\n    if (typeof globalThis !== 'undefined') {\n        return globalThis;\n    }\n    if (typeof self !== 'undefined') {\n        return self;\n    }\n    if (typeof window !== 'undefined') {\n        return window;\n    }\n    //if (typeof global !== 'undefined') { return global; }\n    throw new Error('Unable to locate global object.');\n}\n\n\n//# sourceURL=webpack://ts-treeview/./src/index.ts?");

/***/ }),

/***/ "./src/treeview.ts":
/*!*************************!*\
  !*** ./src/treeview.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./src/animate.ts\");\n/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ \"./src/enum.ts\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callbacks */ \"./src/callbacks.ts\");\n/* harmony import */ var _DOM_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM/input */ \"./src/DOM/input.ts\");\n/* harmony import */ var _DOM_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/header */ \"./src/DOM/header.ts\");\n/* harmony import */ var _DOM_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM/element */ \"./src/DOM/element.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n\n\n\n\n\n\nvar TreeList = /** @class */ (function () {\n    function TreeList(options) {\n        var _this = this;\n        this._el = null;\n        this._options = {\n            element: \"treeview\",\n            class: [\"treeview\", \"w-20\", \"border\", \"my-4\"],\n            header: \"Demo header\",\n            headerClass: [\"pt-3\", \"pl-3\"],\n            editable: false,\n            items: [],\n            listClass: ['mb-1', \"pl-3\", \"pb-2\"],\n            subListClass: ['nested'],\n            listSubClass: ['closed'],\n            listSubArrowClass: [\"fas\", \"fa-angle-right\", \"rotate\"],\n            checkBoxClass: [\"mx-1\", \"form-check-input\"],\n            itemClass: []\n        };\n        this._CB = new _callbacks__WEBPACK_IMPORTED_MODULE_2__.CB();\n        this._options = __assign(__assign({}, this._options), options);\n        this._el = document.getElementById(this._options.element);\n        if (this._el) {\n            this._options.class.forEach(function (element) {\n                var _a;\n                (_a = _this._el) === null || _a === void 0 ? void 0 : _a.classList.add(element);\n            });\n            if (this._options.items.length > 0) {\n                this._drawHTML();\n            }\n            this._init();\n        }\n    }\n    TreeList.prototype.setElements = function (data) {\n        if (!data || (data === null || data === void 0 ? void 0 : data.length) < 1)\n            return;\n    };\n    TreeList.prototype.on = function (event, callback) {\n        this._CB.on(event, callback);\n    };\n    TreeList.prototype._init = function () {\n        var _a;\n        var listMain = (_a = this._el) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('ul')[0];\n        if (typeof listMain != \"undefined\") {\n            this._events(listMain);\n        }\n    };\n    TreeList.prototype._events = function (el, itemID) {\n        var _this = this;\n        if (itemID === void 0) { itemID = \"\"; }\n        var CB = this._CB;\n        if (typeof el != \"undefined\") {\n            var listLi = el.children;\n            var _loop_1 = function (i) {\n                var item = listLi[i];\n                var id = itemID.length == 0 ? i.toString() : itemID + \":\" + i.toString();\n                if (!item.getAttribute(\"tl-id\"))\n                    item.setAttribute(\"tl-id\", id);\n                //Get UL from element\n                var ul = item.querySelector(\":scope > ul\");\n                var a = item.querySelector(\":scope > a\");\n                //If ul present\n                if (ul && a) {\n                    //Make same for inner UL\n                    this_1._events(ul, id);\n                    //Bind click event\n                    a.addEventListener(\"click\", function (e) {\n                        e.stopPropagation();\n                        if (e.detail == 1) {\n                            CB.fire(_enum__WEBPACK_IMPORTED_MODULE_1__.EventType.folderclick, item.getAttribute(\"tl-id\"));\n                            a === null || a === void 0 ? void 0 : a.classList.toggle(\"open\");\n                            var icon = item.getElementsByTagName(\"i\")[0];\n                            if (icon)\n                                icon.classList.toggle(\"down\");\n                            if (ul.classList.contains(\"active\")) {\n                                ul.classList.remove(\"active\");\n                                item.classList.contains(\"treeview-animated-items\") ? (0,_animate__WEBPACK_IMPORTED_MODULE_0__.slideUp)(ul) : ul.style.display = \"none\";\n                                ;\n                            }\n                            else {\n                                ul.classList.add(\"active\");\n                                item.classList.contains(\"treeview-animated-items\") ? (0,_animate__WEBPACK_IMPORTED_MODULE_0__.slideDown)(ul) : ul.style.display = \"block\";\n                                ;\n                            }\n                        }\n                        if (e.detail == 2) {\n                            CB.fire(_enum__WEBPACK_IMPORTED_MODULE_1__.EventType.folderdblclick, item.getAttribute(\"tl-id\"));\n                        }\n                    });\n                    var checkBox_1 = a.querySelector(\":scope > input[type='checkbox']\");\n                    checkBox_1 === null || checkBox_1 === void 0 ? void 0 : checkBox_1.addEventListener(\"click\", function (e) {\n                        e.stopPropagation();\n                        CB.fire(_enum__WEBPACK_IMPORTED_MODULE_1__.EventType.foldercheckbox, item.getAttribute(\"tl-id\"), checkBox_1.checked);\n                    });\n                }\n                else {\n                    var checkBox_2 = item.querySelector(\":scope > input[type='checkbox']\");\n                    checkBox_2 === null || checkBox_2 === void 0 ? void 0 : checkBox_2.addEventListener(\"click\", function (e) {\n                        e.stopPropagation();\n                        CB.fire(_enum__WEBPACK_IMPORTED_MODULE_1__.EventType.itemcheckbox, item.getAttribute(\"tl-id\"), checkBox_2.checked);\n                    });\n                    item.addEventListener(\"click\", function (e) {\n                        e.stopPropagation();\n                        if (e.detail == 1)\n                            CB.fire(_enum__WEBPACK_IMPORTED_MODULE_1__.EventType.itemclick, item.getAttribute(\"tl-id\"));\n                        else\n                            CB.fire(_enum__WEBPACK_IMPORTED_MODULE_1__.EventType.itemdblclick, item.getAttribute(\"tl-id\"));\n                    });\n                }\n                //Bind double click event\n                item === null || item === void 0 ? void 0 : item.addEventListener(\"dblclick\", function (e) {\n                    e.stopPropagation();\n                    //If list must be editable\n                    if (_this._options.editable) {\n                        var txtEl = (0,_DOM_input__WEBPACK_IMPORTED_MODULE_3__.makeInput)();\n                        txtEl.style.height = a.offsetHeight + \"px\";\n                        var span = item.getElementsByTagName(\"span\")[0];\n                        if (span && a) {\n                            a.append(txtEl);\n                            span.style.display = \"none\";\n                        }\n                    }\n                });\n            };\n            var this_1 = this;\n            for (var i = 0; i < listLi.length; i++) {\n                _loop_1(i);\n            }\n        }\n    };\n    TreeList.prototype.checkbox = function (enable, type) {\n        var _a;\n        if (type === void 0) { type = _enum__WEBPACK_IMPORTED_MODULE_1__.ItemType.both; }\n        this._clearCheckBox();\n        var el = (_a = this._el) === null || _a === void 0 ? void 0 : _a.querySelector(\":scope > ul\");\n        if (el)\n            this._makeCheckBox(enable, type, el);\n    };\n    TreeList.prototype.update = function (item) {\n        var el = this._el.querySelector(\"[tr-id='\".concat(item.id, \"]\"));\n        if (el) {\n            el.replaceWith(this._makeItem(item, item.id));\n            this._events(el);\n            return true;\n        }\n        return false;\n    };\n    TreeList.prototype.remove = function (elID) {\n        var el = this._el.querySelector(\"[tr-id='\".concat(elID, \"]\"));\n        if (el) {\n            el.remove();\n            return true;\n        }\n        return false;\n    };\n    TreeList.prototype._clearCheckBox = function () {\n        var _a;\n        var el = (_a = this._el) === null || _a === void 0 ? void 0 : _a.querySelector(\":scope > ul\");\n        el.querySelectorAll(\"input[type='checkbox']\").forEach(function (inEl) {\n            inEl.remove();\n        });\n    };\n    TreeList.prototype._makeCheckBox = function (enable, type, el) {\n        if (enable) {\n            var CB_1 = this._CB;\n            if (el) {\n                var listLi = el.children;\n                var _loop_2 = function (i) {\n                    var item = listLi[i];\n                    var a = item.querySelector(\":scope > a\") || null;\n                    //Get checkbox directly from item or include link\n                    var checkBox = item.querySelector(\":scope > input[type='checkbox']\") || (a === null || a === void 0 ? void 0 : a.querySelector(\":scope > input[type='checkbox']\"));\n                    //If checkbox missing and enable for checkboxes\n                    if (!checkBox && enable) {\n                        checkBox = (0,_DOM_element__WEBPACK_IMPORTED_MODULE_5__.makeEl)(\"input\", this_2._options.checkBoxClass, \"checkbox\");\n                        if (a && (type == _enum__WEBPACK_IMPORTED_MODULE_1__.ItemType.both || type == _enum__WEBPACK_IMPORTED_MODULE_1__.ItemType.folder)) {\n                            var span = a.querySelector(\":scope > span\");\n                            if (span) {\n                                checkBox.addEventListener(\"click\", function (e) {\n                                    e.stopPropagation();\n                                    CB_1.fire(_enum__WEBPACK_IMPORTED_MODULE_1__.EventType.foldercheckbox, item.getAttribute(\"tl-id\"), checkBox.checked);\n                                });\n                                span.prepend(checkBox);\n                            }\n                        }\n                        if (!a && (type == _enum__WEBPACK_IMPORTED_MODULE_1__.ItemType.item || type == _enum__WEBPACK_IMPORTED_MODULE_1__.ItemType.both)) {\n                            checkBox.addEventListener(\"click\", function (e) {\n                                e.stopPropagation();\n                                CB_1.fire(_enum__WEBPACK_IMPORTED_MODULE_1__.EventType.itemcheckbox, item.getAttribute(\"tl-id\"), checkBox.checked);\n                            });\n                            item.prepend(checkBox);\n                        }\n                        var ul = item.querySelector(\":scope > ul\");\n                        if (ul)\n                            this_2._makeCheckBox(enable, type, ul);\n                    }\n                };\n                var this_2 = this;\n                for (var i = 0; i < listLi.length; i++) {\n                    _loop_2(i);\n                }\n            }\n        }\n    };\n    TreeList.prototype._makeHeader = function () {\n        var _a, _b;\n        var el = (0,_DOM_header__WEBPACK_IMPORTED_MODULE_4__.makeHeader)(this._options.header, this._options.headerClass);\n        (_a = this._el) === null || _a === void 0 ? void 0 : _a.append(el);\n        (_b = this._el) === null || _b === void 0 ? void 0 : _b.append(document.createElement(\"hr\"));\n    };\n    TreeList.prototype._makeItem = function (item, itemID) {\n        var li = (0,_DOM_element__WEBPACK_IMPORTED_MODULE_5__.makeEl)(\"li\", this._options.itemClass);\n        if (item.id)\n            li.setAttribute(\"tl-id\", item.id);\n        else\n            li.setAttribute(\"tl-id\", itemID);\n        if (item.items) {\n            var a = (0,_DOM_element__WEBPACK_IMPORTED_MODULE_5__.makeEl)(\"a\", this._options.listSubClass);\n            var arrow = (0,_DOM_element__WEBPACK_IMPORTED_MODULE_5__.makeEl)(\"i\", this._options.listSubArrowClass);\n            a.append(arrow);\n            var span = (0,_DOM_element__WEBPACK_IMPORTED_MODULE_5__.makeEl)(\"span\");\n            if (item.checkBox) {\n                span.append((0,_DOM_element__WEBPACK_IMPORTED_MODULE_5__.makeEl)(\"input\", this._options.checkBoxClass, \"checkbox\"));\n            }\n            if (item.icon) {\n                span.append((0,_DOM_element__WEBPACK_IMPORTED_MODULE_5__.makeEl)(\"i\", __spreadArray(__spreadArray([], item.icon, true), [\"ic-w\", \"mx-1\"], false)));\n            }\n            span.append(item.text);\n            a.append(span);\n            li.append(a);\n            var subList = (0,_DOM_element__WEBPACK_IMPORTED_MODULE_5__.makeEl)(\"ul\", this._options.subListClass);\n            subList.style.display = \"none\";\n            for (var i = 0; i < item.items.length; i++) {\n                subList.append(this._makeItem(item.items[i], itemID + \":\" + i.toString()));\n            }\n            li.append(subList);\n        }\n        else {\n            if (item.checkBox) {\n                li.append((0,_DOM_element__WEBPACK_IMPORTED_MODULE_5__.makeEl)(\"input\", this._options.checkBoxClass, \"checkbox\"));\n            }\n            if (item.icon) {\n                li.append((0,_DOM_element__WEBPACK_IMPORTED_MODULE_5__.makeEl)(\"i\", __spreadArray(__spreadArray([], item.icon, true), [\"ic-w\", \"mx-1\"], false)));\n            }\n            li.append(item.text);\n        }\n        return li;\n    };\n    TreeList.prototype._drawHTML = function () {\n        var _this = this;\n        var _a;\n        if (this._el)\n            this._el.innerHTML = \"\";\n        if (this._options.header)\n            this._makeHeader();\n        var mainUL = (0,_DOM_element__WEBPACK_IMPORTED_MODULE_5__.makeEl)(\"ul\", this._options.listClass);\n        this._options.items.forEach(function (item, index) {\n            mainUL.append(_this._makeItem(item, index.toString()));\n        });\n        (_a = this._el) === null || _a === void 0 ? void 0 : _a.append(mainUL);\n    };\n    return TreeList;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeList);\n\n\n//# sourceURL=webpack://ts-treeview/./src/treeview.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;