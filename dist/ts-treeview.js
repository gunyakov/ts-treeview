var TreeList;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./build/DOM/input.js":
/*!****************************!*\
  !*** ./build/DOM/input.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeInput = void 0;
function makeInput() {
    var el = document.createElement("span");
    el.classList.add("input-group");
    var input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control");
    input.classList.add("form-control-sm");
    input.setAttribute("placeholder", "Enter new name");
    el.append(input);
    var btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("btn");
    btn.classList.add("btn-outline-secondary");
    btn.classList.add("form-control-sm");
    var i = document.createElement("i");
    i.classList.add("fas");
    i.classList.add("fa-save");
    btn.append(i);
    el.append(btn);
    return el;
}
exports.makeInput = makeInput;


/***/ }),

/***/ "./build/animate.js":
/*!**************************!*\
  !*** ./build/animate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.slideToggle = exports.slideDown = exports.slideUp = void 0;
function slideUp(target, duration) {
    if (duration === void 0) { duration = 500; }
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
    window.setTimeout(function () {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
}
exports.slideUp = slideUp;
function slideDown(target, duration) {
    if (duration === void 0) { duration = 500; }
    target.style.removeProperty('display');
    var display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = 'block';
    target.style.display = display;
    var height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(function () {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
exports.slideDown = slideDown;
function slideToggle(target, duration) {
    if (duration === void 0) { duration = 500; }
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    }
    else {
        return slideUp(target, duration);
    }
}
exports.slideToggle = slideToggle;


/***/ }),

/***/ "./build/callbacks.js":
/*!****************************!*\
  !*** ./build/callbacks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.on = exports.fire = void 0;
var enum_1 = __webpack_require__(/*! ./enum */ "./build/enum.js");
//-----------------------------------------------------------------------------------------------
//CALLBACKS LIST AND FIRE FUNCTION
//-----------------------------------------------------------------------------------------------
var _callbacks = []; //Calback array
/**
 * Fire callback according EventType
 * @param {EventType} event - Type of event
 * @param {any} data - First data for callback
 * @param {any} data1 - Second data for callback
 * @param {any} data2 - Third data for callback
 * @param {any} data3 - Forth data for callback
 * @param {any} data4 - Fifth data for callback
 */
function fire(event, data, data1, data2, data3, data4) {
    if (data === void 0) { data = false; }
    if (data1 === void 0) { data1 = false; }
    if (data2 === void 0) { data2 = false; }
    if (data3 === void 0) { data3 = false; }
    if (data4 === void 0) { data4 = false; }
    //@ts-ignore
    var callback = _callbacks[event];
    if (callback) {
        callback(data, data1, data2, data3, data4);
    }
    else {
        console.log("Callback ".concat(event, " have no assigned function."));
    }
}
exports.fire = fire;
/**
 * Register callback function to fire when EventType happened.
 * @param {EventType} event - Event type for callback
 * @param callback - Callback function what will be fired
 */
function on(event, callback) {
    var values = Object.values(enum_1.EventType);
    if (values.includes(event)) {
        //Push function to callbacks list
        //@ts-ignore
        _callbacks[event] = callback;
    }
    else {
        console.log("Wrong event type. Pls check it again", event);
    }
}
exports.on = on;


/***/ }),

/***/ "./build/enum.js":
/*!***********************!*\
  !*** ./build/enum.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["edit"] = "edit";
})(EventType || (exports.EventType = EventType = {}));


/***/ }),

/***/ "./build/index.js":
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var treeview_1 = __importDefault(__webpack_require__(/*! ./treeview */ "./build/treeview.js"));
//-----------------------------------------------------------------------------------------------
//MINIT
//-----------------------------------------------------------------------------------------------
exports["default"] = treeview_1.default;
//@ts-ignore
getGlobalObject().TreeList = treeview_1.default;
function getGlobalObject() {
    if (typeof globalThis !== 'undefined') {
        return globalThis;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    //if (typeof global !== 'undefined') { return global; }
    throw new Error('Unable to locate global object.');
}


/***/ }),

/***/ "./build/treeview.js":
/*!***************************!*\
  !*** ./build/treeview.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var animate_1 = __webpack_require__(/*! ./animate */ "./build/animate.js");
var callbacks_1 = __webpack_require__(/*! ./callbacks */ "./build/callbacks.js");
var input_1 = __webpack_require__(/*! ./DOM/input */ "./build/DOM/input.js");
var TreeList = /** @class */ (function () {
    function TreeList(options) {
        var _this = this;
        this._el = null;
        this._options = {
            element: "treeview",
            class: ["treeview-animated", "w-20", "border", "my-4"],
            header: null,
            editable: false,
            items: [],
        };
        this._options = __assign(__assign({}, this._options), options);
        this._el = document.getElementById(this._options.element);
        if (this._el) {
            this._options.class.forEach(function (element) {
                var _a;
                (_a = _this._el) === null || _a === void 0 ? void 0 : _a.classList.add(element);
            });
            if (this._options.items.length > 0) {
                this._drawHTML();
            }
            else {
                this._init();
            }
        }
    }
    TreeList.prototype.setElements = function (data) {
        if (!data || (data === null || data === void 0 ? void 0 : data.length) < 1)
            return;
    };
    TreeList.prototype.on = function (event, callback) {
        (0, callbacks_1.on)(event, callback);
    };
    TreeList.prototype._init = function () {
        var _a;
        var listMain = (_a = this._el) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('ul')[0];
        if (typeof listMain != "undefined") {
            this._events(listMain);
        }
    };
    TreeList.prototype._events = function (el) {
        if (typeof el != "undefined") {
            console.log(el);
            var listLi = el.children;
            var _loop_1 = function (i) {
                var item = listLi[i];
                console.log(item);
                //Get UL from element
                var ul = item.getElementsByTagName("ul")[0];
                var a = item.getElementsByTagName("a")[0];
                console.log(a);
                //If ul present
                if (ul && a) {
                    //Make same for inner UL
                    this_1._events(ul);
                    //Bind click event
                    a === null || a === void 0 ? void 0 : a.addEventListener("click", function (e) {
                        e.stopPropagation();
                        a === null || a === void 0 ? void 0 : a.classList.toggle("open");
                        var icon = item.getElementsByTagName("i")[0];
                        if (icon)
                            icon.classList.toggle("down");
                        if (ul.classList.contains("active")) {
                            ul.classList.remove("active");
                            item.classList.contains("treeview-animated-items") ? (0, animate_1.slideUp)(ul) : ul.style.display = "none";
                            ;
                        }
                        else {
                            ul.classList.add("active");
                            item.classList.contains("treeview-animated-items") ? (0, animate_1.slideDown)(ul) : ul.style.display = "block";
                            ;
                        }
                    });
                }
                //If list must be editable
                if (this_1._options.editable) {
                    //Bind double click event
                    a === null || a === void 0 ? void 0 : a.addEventListener("dblclick", function (e) {
                        e.stopPropagation();
                        var txtEl = (0, input_1.makeInput)();
                        txtEl.style.height = a.offsetHeight + "px !important";
                        var span = item.getElementsByTagName("span")[0];
                        if (span && a) {
                            a.append(txtEl);
                            span.style.display = "none";
                        }
                    });
                }
            };
            var this_1 = this;
            for (var i = 0; i < listLi.length; i++) {
                _loop_1(i);
            }
        }
    };
    TreeList.prototype._addClass = function (el, classList) {
        if (classList.length > 0) {
            classList.forEach(function (item) {
                el.classList.add(item);
            });
        }
        return el;
    };
    TreeList.prototype._createHeader = function (str, classList) {
        var _a, _b;
        if (classList === void 0) { classList = []; }
        var el = document.createElement("h6");
        el.innerText = str;
        (_a = this._el) === null || _a === void 0 ? void 0 : _a.appendChild(this._addClass(el, classList));
        (_b = this._el) === null || _b === void 0 ? void 0 : _b.appendChild(document.createElement("hr"));
    };
    TreeList.prototype._createItem = function (item) {
    };
    TreeList.prototype._drawHTML = function () {
        if (this._options.header)
            this._createHeader;
    };
    return TreeList;
}());
exports["default"] = TreeList;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build/index.js");
/******/ 	TreeList = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWU7Ozs7Ozs7VUN2SWY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1RyZWVMaXN0Ly4vYnVpbGQvRE9NL2lucHV0LmpzIiwid2VicGFjazovL1RyZWVMaXN0Ly4vYnVpbGQvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9UcmVlTGlzdC8uL2J1aWxkL2NhbGxiYWNrcy5qcyIsIndlYnBhY2s6Ly9UcmVlTGlzdC8uL2J1aWxkL2VudW0uanMiLCJ3ZWJwYWNrOi8vVHJlZUxpc3QvLi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9UcmVlTGlzdC8uL2J1aWxkL3RyZWV2aWV3LmpzIiwid2VicGFjazovL1RyZWVMaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RyZWVMaXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vVHJlZUxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL1RyZWVMaXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWFrZUlucHV0ID0gdm9pZCAwO1xuZnVuY3Rpb24gbWFrZUlucHV0KCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1ncm91cFwiKTtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbC1zbVwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIG5ldyBuYW1lXCIpO1xuICAgIGVsLmFwcGVuZChpbnB1dCk7XG4gICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sLXNtXCIpO1xuICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgaS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIpO1xuICAgIGkuY2xhc3NMaXN0LmFkZChcImZhLXNhdmVcIik7XG4gICAgYnRuLmFwcGVuZChpKTtcbiAgICBlbC5hcHBlbmQoYnRuKTtcbiAgICByZXR1cm4gZWw7XG59XG5leHBvcnRzLm1ha2VJbnB1dCA9IG1ha2VJbnB1dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zbGlkZVRvZ2dsZSA9IGV4cG9ydHMuc2xpZGVEb3duID0gZXhwb3J0cy5zbGlkZVVwID0gdm9pZCAwO1xuZnVuY3Rpb24gc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKSB7XG4gICAgaWYgKGR1cmF0aW9uID09PSB2b2lkIDApIHsgZHVyYXRpb24gPSA1MDA7IH1cbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgIHRhcmdldC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjBcIjtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gXCIwXCI7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMFwiO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xuICAgICAgICAvL2FsZXJ0KFwiIVwiKTtcbiAgICB9LCBkdXJhdGlvbik7XG59XG5leHBvcnRzLnNsaWRlVXAgPSBzbGlkZVVwO1xuZnVuY3Rpb24gc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pIHtcbiAgICBpZiAoZHVyYXRpb24gPT09IHZvaWQgMCkgeyBkdXJhdGlvbiA9IDUwMDsgfVxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgIHZhciBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5O1xuICAgIGlmIChkaXNwbGF5ID09PSAnbm9uZScpXG4gICAgICAgIGRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICB2YXIgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMFwiO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBcIjtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gXCIwXCI7XG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodCwgbWFyZ2luLCBwYWRkaW5nXCI7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XG4gICAgfSwgZHVyYXRpb24pO1xufVxuZXhwb3J0cy5zbGlkZURvd24gPSBzbGlkZURvd247XG5mdW5jdGlvbiBzbGlkZVRvZ2dsZSh0YXJnZXQsIGR1cmF0aW9uKSB7XG4gICAgaWYgKGR1cmF0aW9uID09PSB2b2lkIDApIHsgZHVyYXRpb24gPSA1MDA7IH1cbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xuICAgIH1cbn1cbmV4cG9ydHMuc2xpZGVUb2dnbGUgPSBzbGlkZVRvZ2dsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vbiA9IGV4cG9ydHMuZmlyZSA9IHZvaWQgMDtcbnZhciBlbnVtXzEgPSByZXF1aXJlKFwiLi9lbnVtXCIpO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9DQUxMQkFDS1MgTElTVCBBTkQgRklSRSBGVU5DVElPTlxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIF9jYWxsYmFja3MgPSBbXTsgLy9DYWxiYWNrIGFycmF5XG4vKipcbiAqIEZpcmUgY2FsbGJhY2sgYWNjb3JkaW5nIEV2ZW50VHlwZVxuICogQHBhcmFtIHtFdmVudFR5cGV9IGV2ZW50IC0gVHlwZSBvZiBldmVudFxuICogQHBhcmFtIHthbnl9IGRhdGEgLSBGaXJzdCBkYXRhIGZvciBjYWxsYmFja1xuICogQHBhcmFtIHthbnl9IGRhdGExIC0gU2Vjb25kIGRhdGEgZm9yIGNhbGxiYWNrXG4gKiBAcGFyYW0ge2FueX0gZGF0YTIgLSBUaGlyZCBkYXRhIGZvciBjYWxsYmFja1xuICogQHBhcmFtIHthbnl9IGRhdGEzIC0gRm9ydGggZGF0YSBmb3IgY2FsbGJhY2tcbiAqIEBwYXJhbSB7YW55fSBkYXRhNCAtIEZpZnRoIGRhdGEgZm9yIGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGZpcmUoZXZlbnQsIGRhdGEsIGRhdGExLCBkYXRhMiwgZGF0YTMsIGRhdGE0KSB7XG4gICAgaWYgKGRhdGEgPT09IHZvaWQgMCkgeyBkYXRhID0gZmFsc2U7IH1cbiAgICBpZiAoZGF0YTEgPT09IHZvaWQgMCkgeyBkYXRhMSA9IGZhbHNlOyB9XG4gICAgaWYgKGRhdGEyID09PSB2b2lkIDApIHsgZGF0YTIgPSBmYWxzZTsgfVxuICAgIGlmIChkYXRhMyA9PT0gdm9pZCAwKSB7IGRhdGEzID0gZmFsc2U7IH1cbiAgICBpZiAoZGF0YTQgPT09IHZvaWQgMCkgeyBkYXRhNCA9IGZhbHNlOyB9XG4gICAgLy9AdHMtaWdub3JlXG4gICAgdmFyIGNhbGxiYWNrID0gX2NhbGxiYWNrc1tldmVudF07XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKGRhdGEsIGRhdGExLCBkYXRhMiwgZGF0YTMsIGRhdGE0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FsbGJhY2sgXCIuY29uY2F0KGV2ZW50LCBcIiBoYXZlIG5vIGFzc2lnbmVkIGZ1bmN0aW9uLlwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5maXJlID0gZmlyZTtcbi8qKlxuICogUmVnaXN0ZXIgY2FsbGJhY2sgZnVuY3Rpb24gdG8gZmlyZSB3aGVuIEV2ZW50VHlwZSBoYXBwZW5lZC5cbiAqIEBwYXJhbSB7RXZlbnRUeXBlfSBldmVudCAtIEV2ZW50IHR5cGUgZm9yIGNhbGxiYWNrXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB3aGF0IHdpbGwgYmUgZmlyZWRcbiAqL1xuZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZW51bV8xLkV2ZW50VHlwZSk7XG4gICAgaWYgKHZhbHVlcy5pbmNsdWRlcyhldmVudCkpIHtcbiAgICAgICAgLy9QdXNoIGZ1bmN0aW9uIHRvIGNhbGxiYWNrcyBsaXN0XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBfY2FsbGJhY2tzW2V2ZW50XSA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXcm9uZyBldmVudCB0eXBlLiBQbHMgY2hlY2sgaXQgYWdhaW5cIiwgZXZlbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMub24gPSBvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FdmVudFR5cGUgPSB2b2lkIDA7XG52YXIgRXZlbnRUeXBlO1xuKGZ1bmN0aW9uIChFdmVudFR5cGUpIHtcbiAgICBFdmVudFR5cGVbXCJlZGl0XCJdID0gXCJlZGl0XCI7XG59KShFdmVudFR5cGUgfHwgKGV4cG9ydHMuRXZlbnRUeXBlID0gRXZlbnRUeXBlID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHRyZWV2aWV3XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdHJlZXZpZXdcIikpO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9NSU5JVFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0cy5kZWZhdWx0ID0gdHJlZXZpZXdfMS5kZWZhdWx0O1xuLy9AdHMtaWdub3JlXG5nZXRHbG9iYWxPYmplY3QoKS5UcmVlTGlzdCA9IHRyZWV2aWV3XzEuZGVmYXVsdDtcbmZ1bmN0aW9uIGdldEdsb2JhbE9iamVjdCgpIHtcbiAgICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWxUaGlzO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgLy9pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGdsb2JhbDsgfVxuICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0LicpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFuaW1hdGVfMSA9IHJlcXVpcmUoXCIuL2FuaW1hdGVcIik7XG52YXIgY2FsbGJhY2tzXzEgPSByZXF1aXJlKFwiLi9jYWxsYmFja3NcIik7XG52YXIgaW5wdXRfMSA9IHJlcXVpcmUoXCIuL0RPTS9pbnB1dFwiKTtcbnZhciBUcmVlTGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmVlTGlzdChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2VsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IFwidHJlZXZpZXdcIixcbiAgICAgICAgICAgIGNsYXNzOiBbXCJ0cmVldmlldy1hbmltYXRlZFwiLCBcInctMjBcIiwgXCJib3JkZXJcIiwgXCJteS00XCJdLFxuICAgICAgICAgICAgaGVhZGVyOiBudWxsLFxuICAgICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuX29wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9vcHRpb25zLmVsZW1lbnQpO1xuICAgICAgICBpZiAodGhpcy5fZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuY2xhc3MuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAoX2EgPSBfdGhpcy5fZWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhd0hUTUwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBUcmVlTGlzdC5wcm90b3R5cGUuc2V0RWxlbWVudHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEgfHwgKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5sZW5ndGgpIDwgMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIFRyZWVMaXN0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgKDAsIGNhbGxiYWNrc18xLm9uKShldmVudCwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgVHJlZUxpc3QucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBsaXN0TWFpbiA9IChfYSA9IHRoaXMuX2VsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJylbMF07XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdE1haW4gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzKGxpc3RNYWluKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJlZUxpc3QucHJvdG90eXBlLl9ldmVudHMgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbCAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbCk7XG4gICAgICAgICAgICB2YXIgbGlzdExpID0gZWwuY2hpbGRyZW47XG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBsaXN0TGlbaV07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICAgICAgLy9HZXQgVUwgZnJvbSBlbGVtZW50XG4gICAgICAgICAgICAgICAgdmFyIHVsID0gaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpWzBdO1xuICAgICAgICAgICAgICAgIHZhciBhID0gaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYSk7XG4gICAgICAgICAgICAgICAgLy9JZiB1bCBwcmVzZW50XG4gICAgICAgICAgICAgICAgaWYgKHVsICYmIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9NYWtlIHNhbWUgZm9yIGlubmVyIFVMXG4gICAgICAgICAgICAgICAgICAgIHRoaXNfMS5fZXZlbnRzKHVsKTtcbiAgICAgICAgICAgICAgICAgICAgLy9CaW5kIGNsaWNrIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIGEgPT09IG51bGwgfHwgYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhID09PSBudWxsIHx8IGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGEuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpXCIpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGljb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZG93blwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidHJlZXZpZXctYW5pbWF0ZWQtaXRlbXNcIikgPyAoMCwgYW5pbWF0ZV8xLnNsaWRlVXApKHVsKSA6IHVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidHJlZXZpZXctYW5pbWF0ZWQtaXRlbXNcIikgPyAoMCwgYW5pbWF0ZV8xLnNsaWRlRG93bikodWwpIDogdWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL0lmIGxpc3QgbXVzdCBiZSBlZGl0YWJsZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzXzEuX29wdGlvbnMuZWRpdGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9CaW5kIGRvdWJsZSBjbGljayBldmVudFxuICAgICAgICAgICAgICAgICAgICBhID09PSBudWxsIHx8IGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGEuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dEVsID0gKDAsIGlucHV0XzEubWFrZUlucHV0KSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHh0RWwuc3R5bGUuaGVpZ2h0ID0gYS5vZmZzZXRIZWlnaHQgKyBcInB4ICFpbXBvcnRhbnRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGFuID0gaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIilbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BhbiAmJiBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5hcHBlbmQodHh0RWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHRoaXNfMSA9IHRoaXM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RMaS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyZWVMaXN0LnByb3RvdHlwZS5fYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xhc3NMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9O1xuICAgIFRyZWVMaXN0LnByb3RvdHlwZS5fY3JlYXRlSGVhZGVyID0gZnVuY3Rpb24gKHN0ciwgY2xhc3NMaXN0KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmIChjbGFzc0xpc3QgPT09IHZvaWQgMCkgeyBjbGFzc0xpc3QgPSBbXTsgfVxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHN0cjtcbiAgICAgICAgKF9hID0gdGhpcy5fZWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZCh0aGlzLl9hZGRDbGFzcyhlbCwgY2xhc3NMaXN0KSk7XG4gICAgICAgIChfYiA9IHRoaXMuX2VsKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpKTtcbiAgICB9O1xuICAgIFRyZWVMaXN0LnByb3RvdHlwZS5fY3JlYXRlSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgfTtcbiAgICBUcmVlTGlzdC5wcm90b3R5cGUuX2RyYXdIVE1MID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5oZWFkZXIpXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVIZWFkZXI7XG4gICAgfTtcbiAgICByZXR1cm4gVHJlZUxpc3Q7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVHJlZUxpc3Q7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9idWlsZC9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==