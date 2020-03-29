import { c, E } from "./global";
import EmpyrealComponent from "../component";
import Dropdown from "./dropdown";

const VERSION = "0.0.1";

const DEFAULTS = {
    data: [],
    highlightClass: "primary-text font-weight-400",
    dropdown: {},
    minLength: 1,
};

export default class Autocomplete extends EmpyrealComponent {
    constructor(el, options) {
        super(el, options);

        this.settings = { ...DEFAULTS, ...options };
        this.$el = c(this.el);

        this.id = this.$el.attr("id") || E.generateUUID();

        this.isDropdownEmpty = true;
        this._init();

        this.listeners = [];
    }

    static get version() {
        return VERSION;
    }
    static get defaults() {
        return DEFAULTS;
    }

    _init() {
        this.$list = c(`<ul class=dropdown id=${"dropdown-" + this.id}></ul>`);
        this.$el.parent().append(this.$list);

        this.renderAutocompleteItems("");

        this.dropdown = new Dropdown("#dropdown-" + this.id, {
            isRelative: true,
            ...this.settings.dropdown,
        });
        this.dropdown._removeEventHandlers();
        this.dropdown.trigger = this.el;
        this.dropdown.$trigger = this.$el;
        this.dropdown._init();
        this._setupEventHandlers();
    }

    _addItem(text, input, href = "", image = "") {
        let startIndex = text.toLowerCase().indexOf(input);
        let value = text;
        if (startIndex != -1) {
            let highlight = text.slice(startIndex, startIndex + input.length);
            let highlightElem = `<span class='${this.settings.highlightClass}'>${highlight}</span>`;
            value = text.replace(highlight, highlightElem);
        }
        let $item = c(`<a class=dropdown-item>${value}</a>`);
        if (href) $item.attr("href", href);
        if (image) $item.append(`<img src=${image} />`);
        this.$list.append($item);
    }

    renderAutocompleteItems(input) {
        this.$list.empty();
        this.isDropdownEmpty = true;
        for (let item of this.settings.data) {
            if (typeof item == "string") {
                if (item.toLowerCase().includes(input)) {
                    this._addItem(item, input);
                    this.isDropdownEmpty = false;
                }
            } else {
                let names = [item.value];
                if (item.alias) {
                    for (let alias of item.alias) names.push(alias);
                }
                for (let name of names) {
                    if (name.toLowerCase().includes(input)) {
                        this._addItem(item.value, input, item.href, item.image);
                        this.isDropdownEmpty = false;
                        break;
                    }
                }
            }
        }
    }

    _handleKeyPress(e) {
        if (e.keyCode == E.keys.ARROW_DOWN || e.keyCode == E.keys.ARROW_UP) return;
        let input = this.$el.val().toLowerCase();

        if (input.length >= this.settings.minLength) this.renderAutocompleteItems(input);

        this.dropdown.$items = this.$list.children(".dropdown-item");
        this.dropdown.focusedIndex = -1;
        this.dropdown.calculateDropdownDimensions();
        this.dropdown.positionDropdown();

        if (!this.dropdown.isOpen) this.dropdown.open();
        if (this.isDropdownEmpty) this.$list.css("display", "none");
    }

    _handleDropdownClick(e) {
        let $item = c(e.target);
        this.$el.siblings("label").addClass("active");
        this.$el.val($item.text());
        this.dropdown.close();
    }

    _setupEventHandlers() {
        this.$el.on("keyup change paste", this._handleKeyPress.bind(this));
        this.$list.on("click", this._handleDropdownClick.bind(this));
    }

    _removeEventHandlers() {
        this.$el.off("keyup change paste");
        this.$list.off("click");
    }

    destroy() {
        this._removeEventHandlers();
    }
}
