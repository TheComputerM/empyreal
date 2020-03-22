import { c, E } from "./global";
import EmpyrealComponent from "../component";

const VERSION = "0.0.1";

const DEFAULTS = {
    data: [],
    placeholder: "",
    secondaryPlaceholder: "",
    verify: null
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
        this._setupEventHandlers();
    }

    add({ tag, image }) {
        let chip = c(`<div class=chip tabindex=0>
            ${tag}
            <i class='material-icons close'>close</i>
        </div>`);
        if (image) chip.append(`<img src=${image} />`);
        if (typeof this.settings.verify === 'function') {
            if (this.settings.verify.call(this, tag)) 
                chip.insertBefore(this.$input);
        } else chip.insertBefore(this.$input);
    }

    _handleInputKeypress(e) {
        if (e.keyCode == E.keys.ENTER) {
            let val = this.$input.val();
            if (val != "" && this.value.indexOf(val) == -1) {
                this.add({tag: val})
                this.value.push(val);
                this.$input.val("");
            }
        }
    }

    _handleInputClick(e) {
        if (!c(e.target).closest(".chip").length) {
            this.$input[0].focus();
            this.$el.addClass("focused");
        }
    }

    _handleInputBlur() {this.$el.removeClass("focused")}

    _setupEventHandlers() {
        this.$input.on("keyup", this._handleInputKeypress.bind(this));
        this.$el.on("click", this._handleInputClick.bind(this));
        this.$input.on("blur", this._handleInputBlur.bind(this));
    }

    _removeEventHandlers() {
        this.$input.off("keyup");
        this.$el.off("click");
    }

    destroy() {
        this._removeEventHandlers();
    }
}