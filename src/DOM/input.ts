export function makeInput() {
    let el = document.createElement("span");
    el.classList.add("input-group");
    let input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control");
    input.classList.add("form-control-sm");
    input.setAttribute("placeholder", "Enter new name");

    el.append(input);

    let btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("btn");
    btn.classList.add("btn-outline-secondary");
    btn.classList.add("form-control-sm");

    let i = document.createElement("i");
    i.classList.add("fas");
    i.classList.add("fa-save");

    btn.append(i);

    el.append(btn);
    return el;
}