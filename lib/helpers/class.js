export function addClass(el, classList) {
    if (classList.length > 0) {
        classList.forEach(function (item) {
            el.classList.add(item);
        });
    }
    return el;
}
export function removeClass(el, classList) {
    if (classList.length > 0) {
        classList.forEach(function (item) {
            el.classList.remove(item);
        });
    }
    return el;
}
export function toggleClass(el, classFrom, classTo) {
    el = removeClass(el, classFrom);
    el = addClass(el, classTo);
    return el;
}
//# sourceMappingURL=class.js.map