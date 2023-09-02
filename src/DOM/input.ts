import { makeEl } from "./element";

export function makeInput() {
    let el = makeEl("span", ["input-group"]);

    let input = makeEl("input", ["form-control", "form-control-sm"]) as HTMLInputElement;
    input.type = "text";
    input.setAttribute("placeholder", "Enter new name");

    el.append(input);

    let btn = makeEl("button", ["btn", "btn-outline-secondary", "form-control-sm"]) as HTMLButtonElement;
    btn.type = "button";

    let i = makeEl("i", ["fas", "fa-save"]);

    btn.append(i);

    el.append(btn);
    return el;
}