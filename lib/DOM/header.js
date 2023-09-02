import { makeEl } from "./element";
export function makeHeader(text, classList) {
    if (classList === void 0) { classList = []; }
    var el = makeEl("h6", classList);
    el.innerText = text;
    return el;
}
//# sourceMappingURL=header.js.map