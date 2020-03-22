import anime from "animejs";
window.anime = anime;

import AOS from "aos";
AOS.init();

import Waves from "node-waves";
Waves.attach(".chip")
Waves.init();
window.Waves = Waves;

import c from "cash-dom/dist/cash.min";
window.cash = c;
import jump from "jump.js";

c.fn.size = function () {
    return this[0].getClientRects()[0];
};

c.fn.offset = function () {
    return { top: this[0].offsetTop, left: this[0].offsetLeft };
};

let E = {
    jump,
};

E.keys = {
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    ARROW_UP: 38,
    ARROW_DOWN: 40,
};

/**
 * Get Trigger Element
 * @param {Object} QueryObj Details and Attributes of the target elements
 */
E.getTrigger = function (QueryObj) {
    let QueryElements = [];
    for (let element in QueryObj) {
        let ElementObj = QueryObj[element];
        let requiredParameters = `${element}`;
        let ElementQueryStrings = [];

        for (let attribute in ElementObj) {
            let AttributeObj = ElementObj[attribute];
            if (attribute != "optional") {
                if (attribute == "class") requiredParameters += `.${AttributeObj}`;
                else if (attribute == "id") requiredParameters += `#${AttributeObj}`;
                else requiredParameters += `[${attribute}='${AttributeObj}']`;
            }
        }

        for (let OptionalAttr in ElementObj["optional"]) {
            let OptionalAttrObj = ElementObj["optional"][OptionalAttr];
            ElementQueryStrings.push(`${requiredParameters}[${OptionalAttr}='${OptionalAttrObj}']`);
        }

        QueryElements.push(...ElementQueryStrings);
    }

    return document.querySelectorAll(QueryElements.join(", "));
};

/**
 * Generates UUID for elements
 * @returns string
 */
E.generateUUID = () => {
    function uuid() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return `${uuid() + uuid()}-${uuid()}-${uuid()}-${uuid()}-${uuid() + uuid() + uuid()}`;
};

/**
 * Multi browser support for document scroll top
 * @returns {Number}
 */
E.getDocumentScrollTop = function () {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

/**
 * Multi browser support for document scroll left
 * @returns {Number}
 */
E.getDocumentScrollLeft = function () {
    return (
        window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    );
};

E.updateTextFields = function () {
    c(".text-field input[placeholder], .text-field textarea[placeholder]")
        .siblings("label")
        .addClass("active");

    c(".text-field input, .text-field textarea")
        .not("[placeholder]")
        .on("focus", (i) => {
            c(i.target).siblings("label, i").addClass("active");
        })
        .on("blur", (i) => {
            if (c(i.target).val() == "")
                c(i.target).siblings("label, i").removeClass("active");
        })
        .on("change", (i) => {
            if (c(i.target).val() == "")
                c(i.target).siblings("label, i").removeClass("active");
        });
};

window.addEventListener("DOMContentLoaded", () => {
    E.updateTextFields();
    c(document).on("click", ".chip .close", function (e) {
        c(e.target).closest(".chip").remove();
    });

    document.querySelectorAll(".smoothscroll").forEach((i) => {
        i.addEventListener("click", (e) => {
            e.preventDefault();
            let target = i.getAttribute("data-scrollto") || i.getAttribute("href");
            jump(target, {
                duration: 800,
            });
        });
    });

    document.querySelectorAll(".navbar-toggler").forEach((i) => {
        i.addEventListener("click", (e) => {
            let targetSelector = i.getAttribute("data-target") || i.getAttribute("href");
            let target = c(document.querySelector(targetSelector));
            if (target.hasClass("shown")) target.removeClass("shown");
            else target.addClass("shown");
        });
    });

    window.addEventListener("scroll", () => {
        if (E.getDocumentScrollTop() <= 100) {
            c(".navbar-wrapper.size-down").addClass("tall");
        } else if (c(".navbar-wrapper.size-down").hasClass("tall")) {
            c(".navbar-wrapper.size-down").removeClass("tall");
        }
    });
});

export { anime, Waves, c, E };
