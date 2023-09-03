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
import { EventType, ItemType } from "./enum";
import { CB } from "./callbacks";
import { makeInput } from "./DOM/input";
import { makeHeader } from "./DOM/header";
import { makeEl } from "./DOM/element";
import { toggleClass } from "./helpers/class";
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
            checkBoxClass: ["mx-1", "form-check-input"],
            itemClass: [],
            button: {
                add: false,
                edit: false,
                delete: false
            },
            buttons: {
                class: ["float-end", "me-1", "cursor-pointer"],
                green: ["text-success"],
                red: ["text-danger"],
                blue: ["text-info"],
                yellow: ["text-warning"],
                addIcon: ["fas", "fa-plus"],
                editIcon: ["fas", "fa-edit"],
                deleteIcon: ["fas", "fa-trash"]
            },
            animate: false,
            animateSpeed: 500
        };
        this._CB = new CB();
        this._options = __assign(__assign({}, this._options), options);
        this._el = document.getElementById(this._options.element);
        if (this._el) {
            this._options.class.forEach(function (element) {
                var _a;
                (_a = _this._el) === null || _a === void 0 ? void 0 : _a.classList.add(element);
            });
            var animate = this._el.getAttribute("tl-animate");
            if (animate == "true")
                this._options.animate = true;
            var animateSpeed = parseInt(this._el.getAttribute("tl-animatespeed"));
            if (animateSpeed > 0)
                this._options.animateSpeed = animateSpeed;
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
        this._CB.on(event, callback);
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
        var CB = this._CB;
        var thisClass = this;
        if (typeof el != "undefined") {
            var listLi = el.children;
            var _loop_1 = function (i) {
                var item = listLi[i];
                var id = itemID.length == 0 ? i.toString() : itemID + ":" + i.toString();
                if (!item.getAttribute("tl-id"))
                    item.setAttribute("tl-id", id);
                //Get UL from element
                var ul = item.querySelector(":scope > ul");
                var a = item.querySelector(":scope > a");
                //If ul present
                if (ul && a) {
                    //Make same for inner UL
                    this_1._events(ul, id);
                    //Bind click event
                    a.addEventListener("click", function (e) {
                        e.stopPropagation();
                        if (e.detail == 1) {
                            CB.fire(EventType.folderclick, item.getAttribute("tl-id"));
                            a.classList.toggle("open");
                            var arrow = a.querySelector(":scope > i");
                            if (arrow)
                                arrow.classList.toggle("down");
                            var icon = a.querySelector(":scope > span > i");
                            var iconClose = "";
                            var iconOpen = "";
                            if (icon) {
                                iconClose = icon.getAttribute("class-close");
                                iconOpen = icon.getAttribute("class-open");
                            }
                            if (ul.classList.contains("active")) {
                                ul.classList.remove("active");
                                thisClass._options.animate ? slideUp(ul, thisClass._options.animateSpeed) : ul.style.display = "none";
                                if (iconClose && iconOpen)
                                    toggleClass(icon, iconOpen.split(" "), iconClose.split(" "));
                            }
                            else {
                                ul.classList.add("active");
                                thisClass._options.animate ? slideDown(ul, thisClass._options.animateSpeed) : ul.style.display = "block";
                                if (iconClose && iconOpen)
                                    toggleClass(icon, iconClose.split(" "), iconOpen.split(" "));
                            }
                        }
                        if (e.detail == 2) {
                            CB.fire(EventType.folderdblclick, item.getAttribute("tl-id"));
                        }
                    });
                    var checkBox_1 = a.querySelector(":scope > input[type='checkbox']");
                    checkBox_1 === null || checkBox_1 === void 0 ? void 0 : checkBox_1.addEventListener("click", function (e) {
                        e.stopPropagation();
                        CB.fire(EventType.foldercheckbox, item.getAttribute("tl-id"), checkBox_1.checked);
                    });
                    a.querySelectorAll("[tl-event]").forEach(function (actionBtn) {
                        actionBtn.addEventListener("click", function (e) {
                            e.stopPropagation();
                            switch (actionBtn.getAttribute("tl-event")) {
                                case "add":
                                    CB.fire(EventType.folderadd, item.getAttribute("tl-id"));
                                    break;
                                case "edit":
                                    CB.fire(EventType.folderedit, item.getAttribute("tl-id"));
                                    break;
                                case "delete":
                                    CB.fire(EventType.folderdelete, item.getAttribute("tl-id"));
                                    break;
                            }
                        });
                    });
                }
                else {
                    var checkBox_2 = item.querySelector(":scope > input[type='checkbox']");
                    checkBox_2 === null || checkBox_2 === void 0 ? void 0 : checkBox_2.addEventListener("click", function (e) {
                        e.stopPropagation();
                        CB.fire(EventType.itemcheckbox, item.getAttribute("tl-id"), checkBox_2.checked);
                    });
                    item.addEventListener("click", function (e) {
                        e.stopPropagation();
                        if (e.detail == 1)
                            CB.fire(EventType.itemclick, item.getAttribute("tl-id"));
                        else
                            CB.fire(EventType.itemdblclick, item.getAttribute("tl-id"));
                    });
                    item.querySelectorAll("[tl-event]").forEach(function (actionBtn) {
                        actionBtn.addEventListener("click", function (e) {
                            e.stopPropagation();
                            switch (actionBtn.getAttribute("tl-event")) {
                                case "add":
                                    CB.fire(EventType.itemadd, item.getAttribute("tl-id"));
                                    break;
                                case "edit":
                                    CB.fire(EventType.itemedit, item.getAttribute("tl-id"));
                                    break;
                                case "delete":
                                    CB.fire(EventType.itemdelete, item.getAttribute("tl-id"));
                                    break;
                            }
                        });
                    });
                }
                //Bind double click event
                item.addEventListener("dblclick", function (e) {
                    e.stopPropagation();
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
    TreeList.prototype.checkbox = function (enable, type) {
        var _a;
        if (type === void 0) { type = ItemType.both; }
        this._clearCheckBox();
        var el = (_a = this._el) === null || _a === void 0 ? void 0 : _a.querySelector(":scope > ul");
        if (el)
            this._makeCheckBox(enable, type, el);
    };
    TreeList.prototype.update = function (item) {
        var el = this._el.querySelector("[tr-id='".concat(item.id, "]"));
        if (el) {
            el.replaceWith(this._makeItem(item, item.id));
            this._events(el);
            return true;
        }
        return false;
    };
    TreeList.prototype.remove = function (elID) {
        var el = this._el.querySelector("[tr-id='".concat(elID, "]"));
        if (el) {
            el.remove();
            return true;
        }
        return false;
    };
    TreeList.prototype._clearCheckBox = function () {
        var _a;
        var el = (_a = this._el) === null || _a === void 0 ? void 0 : _a.querySelector(":scope > ul");
        el.querySelectorAll("input[type='checkbox']").forEach(function (inEl) {
            inEl.remove();
        });
    };
    TreeList.prototype._makeCheckBox = function (enable, type, el) {
        if (enable) {
            var CB_1 = this._CB;
            if (el) {
                var listLi = el.children;
                var _loop_2 = function (i) {
                    var item = listLi[i];
                    var a = item.querySelector(":scope > a") || null;
                    //Get checkbox directly from item or include link
                    var checkBox = item.querySelector(":scope > input[type='checkbox']") || (a === null || a === void 0 ? void 0 : a.querySelector(":scope > input[type='checkbox']"));
                    //If checkbox missing and enable for checkboxes
                    if (!checkBox && enable) {
                        checkBox = makeEl("input", this_2._options.checkBoxClass, "checkbox");
                        if (a && (type == ItemType.both || type == ItemType.folder)) {
                            var span = a.querySelector(":scope > span");
                            if (span) {
                                checkBox.addEventListener("click", function (e) {
                                    e.stopPropagation();
                                    CB_1.fire(EventType.foldercheckbox, item.getAttribute("tl-id"), checkBox.checked);
                                });
                                span.prepend(checkBox);
                            }
                        }
                        if (!a && (type == ItemType.item || type == ItemType.both)) {
                            checkBox.addEventListener("click", function (e) {
                                e.stopPropagation();
                                CB_1.fire(EventType.itemcheckbox, item.getAttribute("tl-id"), checkBox.checked);
                            });
                            item.prepend(checkBox);
                        }
                        var ul = item.querySelector(":scope > ul");
                        if (ul)
                            this_2._makeCheckBox(enable, type, ul);
                    }
                };
                var this_2 = this;
                for (var i = 0; i < listLi.length; i++) {
                    _loop_2(i);
                }
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
        var _a, _b, _c, _d, _e, _f;
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
            if (item.checkBox) {
                span.append(makeEl("input", this._options.checkBoxClass, "checkbox"));
            }
            if (item.icon) {
                var icon = makeEl("i", __spreadArray(__spreadArray([], item.icon, true), ["ic-w", "mx-1"], false));
                if (item.icon)
                    icon.setAttribute("class-close", item.icon.join(" "));
                if (item.iconOpen)
                    icon.setAttribute("class-open", item.iconOpen.join(" "));
                span.append(icon);
            }
            span.append(item.text);
            a.append(span);
            if (((_a = item.button) === null || _a === void 0 ? void 0 : _a.delete) || this._options.button.delete) {
                var btn = makeEl("i", __spreadArray(__spreadArray(__spreadArray([], this._options.buttons.class, true), this._options.buttons.red, true), this._options.buttons.deleteIcon, true));
                btn.setAttribute("tl-event", "delete");
                a.append(btn);
            }
            if (((_b = item.button) === null || _b === void 0 ? void 0 : _b.edit) || this._options.button.edit) {
                var btn = makeEl("i", __spreadArray(__spreadArray(__spreadArray([], this._options.buttons.class, true), this._options.buttons.yellow, true), this._options.buttons.editIcon, true));
                btn.setAttribute("tl-event", "edit");
                a.append(btn);
            }
            if (((_c = item.button) === null || _c === void 0 ? void 0 : _c.add) || this._options.button.add) {
                var btn = makeEl("i", __spreadArray(__spreadArray(__spreadArray([], this._options.buttons.class, true), this._options.buttons.green, true), this._options.buttons.addIcon, true));
                btn.setAttribute("tl-event", "add");
                a.append(btn);
            }
            li.append(a);
            var subList = makeEl("ul", this._options.subListClass);
            subList.style.display = "none";
            for (var i = 0; i < item.items.length; i++) {
                subList.append(this._makeItem(item.items[i], itemID + ":" + i.toString()));
            }
            li.append(subList);
        }
        else {
            if (item.checkBox) {
                li.append(makeEl("input", this._options.checkBoxClass, "checkbox"));
            }
            if (item.icon) {
                var icon = makeEl("i", __spreadArray(__spreadArray([], item.icon, true), ["ic-w", "mx-1"], false));
                if (item.icon)
                    icon.setAttribute("class-close", item.icon.join(" "));
                if (item.iconOpen)
                    icon.setAttribute("class-open", item.iconOpen.join(" "));
                li.append(icon);
            }
            li.append(item.text);
            if (((_d = item.button) === null || _d === void 0 ? void 0 : _d.delete) || this._options.button.delete) {
                var btn = makeEl("i", __spreadArray(__spreadArray(__spreadArray([], this._options.buttons.class, true), this._options.buttons.red, true), this._options.buttons.deleteIcon, true));
                btn.setAttribute("tl-event", "delete");
                li.append(btn);
            }
            if (((_e = item.button) === null || _e === void 0 ? void 0 : _e.edit) || this._options.button.edit) {
                var btn = makeEl("i", __spreadArray(__spreadArray(__spreadArray([], this._options.buttons.class, true), this._options.buttons.yellow, true), this._options.buttons.editIcon, true));
                btn.setAttribute("tl-event", "edit");
                li.append(btn);
            }
            if (((_f = item.button) === null || _f === void 0 ? void 0 : _f.add) || this._options.button.add) {
                var btn = makeEl("i", __spreadArray(__spreadArray(__spreadArray([], this._options.buttons.class, true), this._options.buttons.green, true), this._options.buttons.addIcon, true));
                btn.setAttribute("tl-event", "add");
                li.append(btn);
            }
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