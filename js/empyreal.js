import Modal from "./components/modal";
import Tabs from "./components/tabs";
import Dropdown from "./components/dropdown";
import Sidenav from "./components/sidenav";
import Collapsible from "./components/collapsible";
import Tooltip from "./components/tooltips";
import Carousel from "./components/carousel";
import Pushpin from "./components/pushpin";
import ScrollSpy from "./components/scrollspy";
import Lightbox from "./components/lightbox";
import Snackbar from "./components/snackbar";

import Select from "./components/select";
import Autocomplete from "./components/autocomplete";

import {E} from "./components/global";

let empyreal = {
    Modal,
    Tabs,
    Dropdown,
    Sidenav,
    Collapsible,
    Tooltip,
    Carousel,
    Pushpin,
    ScrollSpy,
    Lightbox,
    Snackbar,
    Autocomplete,
    Select,
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