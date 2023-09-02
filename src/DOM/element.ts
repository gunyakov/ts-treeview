import { addClass } from "../helpers/addClass";

export function makeEl(tag:string, classList: Array<string> = []) {
    let el = document.createElement(tag);

    return addClass(el, classList);
}