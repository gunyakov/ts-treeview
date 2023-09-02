import { makeEl } from "./element";
export function makeInput() {
    var el = makeEl("span", ["input-group"]);
    var input = makeEl("input", ["form-control", "form-control-sm"]);
    input.type = "text";
    input.setAttribute("placeholder", "Enter new name");
    el.append(input);
    var btn = makeEl("button", ["btn", "btn-outline-secondary", "form-control-sm"]);
    btn.type = "button";
    var i = makeEl("i", ["fas", "fa-save"]);
    btn.append(i);
    el.append(btn);
    return el;
}
//# sourceMappingURL=input.js.map