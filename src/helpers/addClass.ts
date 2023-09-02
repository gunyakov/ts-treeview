export function addClass(el:HTMLElement, classList: Array<string>) {
    if(classList.length > 0) {
        classList.forEach((item) => {
            el.classList.add(item);
        });
    }
    return el;
}