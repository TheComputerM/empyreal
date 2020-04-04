import { E, c } from "./global";
import EmpyrealComponent from "../component";
import Dropdown from "./dropdown";

const VERSION = "0.0.1";

const DEFAULTS = {
    dropdown: {}
};

export default class Select extends EmpyrealComponent {
    constructor(el, options) {
        super(el, options);

        this.settings = { ...DEFAULTS, ...options };
        this.$el = c(this.el);
        this.id = this.$el.attr("id") || E.generateUUID();

        this.$input = c("<input type='text' readonly='true' class=\"select-dropdown\" />");
        this.$input.attr("id", this.id);

        this.isSelectMultiple = this.el.hasAttribute("multiple");

        this.$list = c("<ul class=select-list />");

        this.value = [];
        this.textinput_content = [];

        this._init();
    }

    static get version() {
        return VERSION;
    }
    static get defaults() {
        return DEFAULTS;
    }

    _init() {
        c("<span class='caret' />").insertAfter(this.$el);
        this.$list.insertAfter(this.$el);
        this.$input.insertAfter(this.$el);

        for (let elem of this.$el.children()) {
            if (elem.nodeName.toLowerCase() == "option") {
                let $selectItem = this._createSelectOption(elem);
                this.$list.append($selectItem);
            } else if (elem.nodeName.toLowerCase() == "optgroup") {
                let $group = c(`<li class='optgroup'><p>${c(elem).attr("label")}</p></li>`);
                for (let item of c(elem).children()) {
                    let $selectItem = this._createSelectOption(item);
                    $group.append($selectItem);
                }
                this.$list.append($group);
            }
        }

        this.dropdown = new Dropdown(this.$list[0], {
            isRelative: true,
            onOpenStart: () => {
                this.$el.siblings(".caret").addClass("active");
            },
            onCloseStart: () => {
                this.$el.siblings(".caret").removeClass("active");
            },
            ...this.settings.dropdown
        });
        this.dropdown._removeEventHandlers();
        this.dropdown.trigger = this.$input[0];
        this.dropdown.$trigger = this.$input;
        this.dropdown._init();

        this._setupEventHandlers();
    }

    _createSelectOption(element) {
        let $element = c(element);
        let $item = c(`<li>${$element.html()}</li>`);
        if (this.isSelectMultiple) {
            $item = c(`<li class=checkbox-field><label><input type="checkbox"><span>${$element.html()}</span></label></li>`);
        }
        let value = $element.attr("value") || $element.text();
        $item.data("value", value);
        let img = $element.data("icon");

        if (img) { $item.append(`<img src="${img}" />`); }
        if ($element.attr("class")) { $item.attr("class", $element.attr("class")); }
        if (element.hasAttribute("disabled")) { $item.addClass("disabled"); }

        return $item;
    }

    _updateTextInputValue() {
        if (this.textinput_content.length) {
            this.$input.siblings("label").addClass("active");
        } else {
            this.$input.siblings("label").removeClass("active");
        }

        if (typeof this.textinput_content == "string") {
            this.$input.val(this.textinput_content);
        } else if (typeof this.textinput_content == "object") {
            this.$input.val(this.textinput_content.join(", "));
        }
    }

    _handleSelectItemClick(e) {
        let $item = c(e.target).closest("li");
        if (!$item.hasClass("disabled") && !$item.hasClass("optgroup")) {
            if (!this.isSelectMultiple) {
                this.value = $item.data("value");
                this.textinput_content = $item.text();
                this.close();
            } else {
                if ($item.hasClass("selected")) {
                    this.value.splice(this.value.indexOf($item.data("value")), 1);
                    this.textinput_content.splice(this.value.indexOf($item.text()), 1);
                    $item.find("input[type=checkbox]").prop("checked", false);
                    $item.removeClass("selected");
                } else {
                    this.value.push($item.data("value"));
                    this.textinput_content.push($item.text());
                    $item.find("input[type=checkbox]").prop("checked", true);
                    $item.addClass("selected");
                }
            }
            this._updateTextInputValue();
        }
    }

    _setupEventHandlers() {
        this.$list.on("click", this._handleSelectItemClick.bind(this));
    }

    open() {
        this.dropdown.open();
    }

    close() {
        this.dropdown.close();
    }
}