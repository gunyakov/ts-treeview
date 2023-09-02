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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { slideDown, slideUp } from "./animate";
import { EventType } from "./enum";
import { on, fire } from "./callbacks";
import { makeInput } from "./DOM/input";
import { makeHeader } from "./DOM/header";
import { makeEl } from "./DOM/element";
var TreeList = /** @class */ (function () {
    function TreeList(options) {
        var _this = this;
        this._el = null;
        this._options = {
            element: "treeview",
            class: ["treeview", "w-20", "border", "my-4"],
            header: "Demo header",
            headerClass: ["pt-3", "pl-3"],
            editable: false,
            items: [],
            listClass: ['mb-1', "pl-3", "pb-2"],
            subListClass: ['nested'],
            listSubClass: ['closed'],
            listSubArrowClass: ["fas", "fa-angle-right", "rotate"],
            itemClass: []
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
            this._init();
        }
    }
    TreeList.prototype.setElements = function (data) {
        if (!data || (data === null || data === void 0 ? void 0 : data.length) < 1)
            return;
    };
    TreeList.prototype.on = function (event, callback) {
        on(event, callback);
    };
    TreeList.prototype._init = function () {
        var _a;
        var listMain = (_a = this._el) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('ul')[0];
        if (typeof listMain != "undefined") {
            this._events(listMain);
        }
    };
    TreeList.prototype._events = function (el, itemID) {
        var _this = this;
        if (itemID === void 0) { itemID = ""; }
        if (typeof el != "undefined") {
            var listLi = el.children;
            var _loop_1 = function (i) {
                var item = listLi[i];
                var id = itemID.length == 0 ? i.toString() : itemID + ":" + i.toString();
                if (!item.getAttribute("tl-id"))
                    item.setAttribute("tl-id", id);
                //Get UL from element
                var ul = item.getElementsByTagName("ul")[0];
                var a = item.getElementsByTagName("a")[0];
                //If ul present
                if (ul && a) {
                    //Make same for inner UL
                    this_1._events(ul, id);
                    //Bind click event
                    a === null || a === void 0 ? void 0 : a.addEventListener("click", function (e) {
                        e.stopPropagation();
                        fire(EventType.click, item.getAttribute("tl-id"));
                        a === null || a === void 0 ? void 0 : a.classList.toggle("open");
                        var icon = item.getElementsByTagName("i")[0];
                        if (icon)
                            icon.classList.toggle("down");
                        if (ul.classList.contains("active")) {
                            ul.classList.remove("active");
                            item.classList.contains("treeview-animated-items") ? slideUp(ul) : ul.style.display = "none";
                            ;
                        }
                        else {
                            ul.classList.add("active");
                            item.classList.contains("treeview-animated-items") ? slideDown(ul) : ul.style.display = "block";
                            ;
                        }
                    });
                }
                else {
                    item.addEventListener("click", function (e) {
                        e.stopPropagation();
                        fire(EventType.click, item.getAttribute("tl-id"));
                    });
                }
                //Bind double click event
                item === null || item === void 0 ? void 0 : item.addEventListener("dblclick", function (e) {
                    e.stopPropagation();
                    fire(EventType.dblclick, item.getAttribute("tl-id"));
                    //If list must be editable
                    if (_this._options.editable) {
                        var txtEl = makeInput();
                        txtEl.style.height = a.offsetHeight + "px";
                        var span = item.getElementsByTagName("span")[0];
                        if (span && a) {
                            a.append(txtEl);
                            span.style.display = "none";
                        }
                    }
                });
            };
            var this_1 = this;
            for (var i = 0; i < listLi.length; i++) {
                _loop_1(i);
            }
        }
    };
    TreeList.prototype._makeHeader = function () {
        var _a, _b;
        var el = makeHeader(this._options.header, this._options.headerClass);
        (_a = this._el) === null || _a === void 0 ? void 0 : _a.append(el);
        (_b = this._el) === null || _b === void 0 ? void 0 : _b.append(document.createElement("hr"));
    };
    TreeList.prototype._makeItem = function (item, itemID) {
        var li = makeEl("li", this._options.itemClass);
        if (item.id)
            li.setAttribute("tl-id", item.id);
        else
            li.setAttribute("tl-id", itemID);
        if (item.items) {
            var a = makeEl("a", this._options.listSubClass);
            var arrow = makeEl("i", this._options.listSubArrowClass);
            a.append(arrow);
            var span = makeEl("span");
            var icon = makeEl("i", __spreadArray(__spreadArray([], item.icon, true), ["ic-w", "mx-1"], false));
            span.append(icon);
            span.append(item.text);
            a.append(span);
            li.append(a);
            var subList = makeEl("ul", this._options.subListClass);
            subList.style.display = "none";
            for (var i = 0; i < item.items.length; i++) {
                subList.append(this._makeItem(item.items[i], itemID + ":" + i.toString()));
            }
            li.append(subList);
        }
        else {
            var i = makeEl("i", __spreadArray(__spreadArray([], item.icon, true), ["ic-w", "mx-1"], false));
            li.append(i);
            li.append(item.text);
        }
        return li;
    };
    TreeList.prototype._drawHTML = function () {
        var _this = this;
        var _a;
        if (this._el)
            this._el.innerHTML = "";
        if (this._options.header)
            this._makeHeader();
        var mainUL = makeEl("ul", this._options.listClass);
        this._options.items.forEach(function (item, index) {
            mainUL.append(_this._makeItem(item, index.toString()));
        });
        (_a = this._el) === null || _a === void 0 ? void 0 : _a.append(mainUL);
    };
    return TreeList;
}());
export default TreeList;
//# sourceMappingURL=treeview.js.map