import components from "./components";

import {E} from "./components/global";

let empyreal = {
    ...components,
    updateTextFields: E.updateTextFields(),
    jump: E.jump
};

empyreal.version = "0.0.1";

empyreal.activate = function(selector, component, options = {}, json = false) {
    let elements = NodeList.prototype.isPrototypeOf(selector)
        ? selector
        : document.querySelectorAll(selector);

    let components = json ? {} : [];
    for (let element of elements) {
        let initailize = new component(element, options);
        json ? (components[element] = initailize) : components.push(initailize);
    }
    return components;
};

export default empyreal;