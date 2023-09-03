export function addClass(el:HTMLElement, classList: Array<string>) {
    if(classList.length > 0) {
        classList.forEach((item) => {
            el.classList.add(item);
        });
    }
    return el;
}

export function removeClass(el:HTMLElement, classList: Array<string>) {
    if(classList.length > 0) {
        classList.forEach((item) => {
            el.classList.remove(item);
        });
    }
    return el;
}

export function toggleClass(el:HTMLElement, classFrom: Array<string>, classTo: Array<string>) {
    el = removeClass(el, classFrom);
    el = addClass(el, classTo);
    return el;
}