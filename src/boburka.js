export function id(idtext) { return document.getElementById(idtext); }
export function log(txt) { console.log(txt); }
export function clas(classtext) { return document.getElementsByClassName(classtext); }
export function css(idtxt, property) {
    if (idtxt instanceof String || typeof idtxt === "string") {
        return parseInt(window.getComputedStyle(id(idtxt)).getPropertyValue(property));
    }

    else {
        return parseInt(window.getComputedStyle(idtxt).getPropertyValue(property));
    }
}