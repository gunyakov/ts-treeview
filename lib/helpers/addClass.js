export function addClass(el, classList) {
    if (classList.length > 0) {
        classList.forEach(function (item) {
            el.classList.add(item);
        });
    }
    return el;
}
//# sourceMappingURL=addClass.js.map