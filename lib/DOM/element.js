import { addClass } from "../helpers/addClass";
export function makeEl(tag, classList) {
    if (classList === void 0) { classList = []; }
    var el = document.createElement(tag);
    return addClass(el, classList);
}
//# sourceMappingURL=element.js.map