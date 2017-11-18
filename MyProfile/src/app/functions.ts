export class Functions {

    IsInViewport (el) {
        if (el) {
        if (typeof jQuery === 'function' && el instanceof jQuery) {el = el[0]};
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    };
}
