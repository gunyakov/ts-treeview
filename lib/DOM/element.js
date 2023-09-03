import { addClass } from "../helpers/addClass";
export function makeEl(tag, classList, type) {
    if (classList === void 0) { classList = []; }
    if (type === void 0) { type = ""; }
    var el = document.createElement(tag);
    if (type.length > 0)
        el.type = type;
    return addClass(el, classList);
}
//# sourceMappingURL=element.js.map