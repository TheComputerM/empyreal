import { c, E } from "./global";
import EmpyrealComponent from "../component";
import Dropdown from "./dropdown";

const VERSION = "0.0.1";

const DEFAULTS = {
    data: [],
    dropdown: {},
};

export default class Autocomplete extends EmpyrealComponent {
    constructor(el, options) {
        super(el, options);

        this.settings = { ...DEFAULTS, ...options };
        this.$el = c(this.el);

        this.id = this.$el.attr("id") || E.generateUUID();

        this._init();
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

        for (let item of this.settings.data) {
            if (typeof item == "string") {
                this.$list.append(`<a class=dropdown-item>${item}</a>`);
            } else {
                let $listItem = c(`<a class=dropdown-item>${item.name}</a>`);
                if (item.alias) 
                    $listItem.data("alias", item.alias.join(" "));
                if (item.href) $listItem.attr("href", item.href);

                this.$list.append($listItem);
            }
        }

        this.dropdown = new Dropdown(
            "#dropdown-" + this.id,
            { isRelative: true, ...this.settings.dropdown }
        );
        this.dropdown._removeEventHandlers();
        this.dropdown.trigger = this.el;
        this.dropdown.$trigger = this.$el;
        this.dropdown._init();
        this._setupEventHandlers();
    }

    _handleKeyPress(e) {
        let input = this.$el.val().toLowerCase();
        let allInvisible = true;
        if (e.keyCode == E.keys.ENTER) {
            this.$list.children().filter((i, item) => {
                if (item.style.display != "none") return true;
            }).first().trigger("click");
        } else {
            for (let item of this.$list.children()) {
                let $item = c(item);
                if ($item.text().toLowerCase().includes(input)) {
                    $item.css("display", "block");
                    allInvisible = false;
                } else if ($item.data("alias") && $item.data("alias").toLowerCase().includes(input)) {
                    $item.css("display", "block");
                    allInvisible = false;
                } else {
                    $item.css("display", "none");
                }
            }
            if (!this.dropdown.isOpen) this.dropdown.open();
        }
        if (allInvisible) this.$list.css("display", "none");
        else this.$list.css("display", "block");
    }

    _handleDropdownClick(e) {
        let $item = c(e.target);
        this.$el.siblings("label").addClass("active");
        this.$el.val($item.text());
        this.dropdown.close();
    }

    _setupEventHandlers() {
        this.$el.on("keyup change paste", this._handleKeyPress.bind(this));
        this.$list.on("click touchstart", this._handleDropdownClick.bind(this));
    }

    _removeEventHandlers() {
        this.$el.off("keyup change paste");
        this.$list.off("click touchstart");
    }

    destroy() {
        this._removeEventHandlers();
    }
}