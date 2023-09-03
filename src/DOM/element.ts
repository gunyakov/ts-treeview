import { addClass } from "../helpers/addClass";

export function makeEl(tag:string, classList: Array<string> = [], type:string = "") {
    let el = document.createElement(tag) as HTMLInputElement;
    if(type.length > 0) el.type = type;
    return addClass(el, classList);
}