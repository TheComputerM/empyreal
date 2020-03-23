import { c, E } from "./global";
import EmpyrealComponent from "../component";
import Autocomplete from "./autocomplete";

const VERSION = "0.0.1";

const DEFAULTS = {
    data: [],
    placeholder: "",
    secondaryPlaceholder: "",
    autocomplete: null,
    verify: null,
    onChipAdd: null,
    onChipDelete: null,
    onChipSelect: null
};

export default class Chips extends EmpyrealComponent {
    constructor(el, options) {
        super(el, options);

        this.settings = { ...DEFAULTS, ...options };
        this.$el = c(this.el);

        this.$input = this.$el.find("input");
        this.value = [];
        this._init();
    }

    static get version() {
        return VERSION;
    }
    static get defaults() {
        return DEFAULTS;
    }

    _init() {
        this.$input.attr("placeholder", this.settings.placeholder);
        for (let i of this.settings.data) {
            this.add(i);
        }
        if (this.settings.autocomplete) {
            this.autocomplete = new Autocomplete(this.$input[0], {
                ...this.settings.autocomplete
            });
        }
        this._setupEventHandlers();
    }

    add({ tag, image }) {
        let chip = c(`
        <div class=chip tabindex=0 data-value=${tag}>
            ${tag} <i class='material-icons close'>close</i>
        </div>
        `);

        if (image) chip.append(`<img src=${image} />`);
        
        this.value.push(tag);
        chip.insertBefore(this.$input)
        if (typeof this.settings.onChipAdd === "function")
            this.settings.onChipAdd.call(this, tag, this.el);

        if (this.settings.secondaryPlaceholder) 
            this.$input.attr("placeholder", this.settings.secondaryPlaceholder);
        
    }

    _handleInputKeypress(e) {
        if (e.keyCode == E.keys.ENTER) {
            let val = this.$input.val();
            if (val != "" && this.value.indexOf(val) == -1) {
                this.add({tag: val})
                this.$input.val("");
            }
        }
    }

    _handleInputClick(e) {
        if (c(e.target).closest(".chip").length) {
            if (c(e.target).hasClass("close")) {
                
                this.value.splice(this.value.indexOf(c(e.target).closest(".chip").data("value")), 1);
                
                if (typeof this.settings.onChipDelete === "function")
                    this.settings.onChipDelete.call(this, e.target, this.el);
                
                if (this.$el.children(".chip").length == 0)
                    this.$input.attr("placeholder", this.settings.placeholder);
            }
        } else {
            this.$input[0].focus();
            this.$el.addClass("focused");
        }
    }

    _handleChipFocus(e) {
        if (typeof this.settings.onChipSelect === "function")
            this.settings.onChipDelete.call(this, e.target, this.el);
    }

    _handleInputBlur() {this.$el.removeClass("focused")}

    _setupEventHandlers() {
        this.$input.on("keyup", this._handleInputKeypress.bind(this));
        this.$el.on("click", this._handleInputClick.bind(this));
        this.$input.on("blur", this._handleInputBlur.bind(this));
        this.$el.children(".chip").on("focus", this._handleChipFocus.bind(this));
    }

    _removeEventHandlers() {
        this.$input.off("keyup");
        this.$el.off("click");
        this.$input.off("blur");
        this.$el.children(".chip").off("focus");
    }

    destroy() {
        this._removeEventHandlers();
    }
}