import { makeEl } from "./element";

export function makeHeader(text:string, classList: Array<string> = []) {
    let el = makeEl("h6", classList);
    el.innerText = text;
    return el;
}