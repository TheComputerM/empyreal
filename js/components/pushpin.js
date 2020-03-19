import { c, E } from "./global";
import EmpyrealComponent from "../component";

const VERSION = "0.0.1";

const DEFAULTS = {
    offset: 0,
    stop: Infinity,
    stopperElement: "",
};

export default class Pushpin extends EmpyrealComponent{
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
        super(el);
        this.settings = { ...DEFAULTS, ...options };

        this.$el = c(this.el);

        this.listeners = [];

        this.width = 0;
        this.height = 0;

        this.stop = this.settings.stop;

        this._init();
    }

    static get version() {
        return VERSION;
    }

    static get defaults() {
        return DEFAULTS;
    }

    _init() {
        this._calculateElementDimensions();
        this._setupEventHandlers();
    }

    _calculateElementDimensions() {
        this.$el.css({
            position: "",
            top: "",
            left: "",
            width: "",
            height: "",
        });
        this.initialY = this.$el.offset().top;
        this.width = this.$el.outerWidth(true);
        this.height = this.$el.outerHeight(true);
        if (this.settings.stopperElement) {
            let stopperSize = c(this.settings.stopperElement).offset();
            this.stop = stopperSize.top - this.height;
        }
    }

    _handleElementPosition() {
        let windowY = E.getDocumentScrollTop();
        if (windowY >= this.stop - this.settings.offset) {
            this.$el.css({
                position: "absolute",
                top: this.stop
            });
        } else if (windowY < this.initialY - this.settings.offset) {
            this.$el.css({
                position: "",
                top: "",
                left: "",
                width: "",
                height: "",
            });
        } else {
            this.$el.css({
                position: "fixed",
                top: this.settings.offset,
                width: this.width,
                height: this.height
            });
        }
    }

    _setupEventHandlers() {
        window.addEventListener("DOMContentLoaded", this._calculateElementDimensions.bind(this));
        window.addEventListener(
            "scroll",
            (this.listeners[0] = this._handleElementPosition.bind(this))
        );
        window.addEventListener(
            "resize",
            (this.listeners[1] = this._calculateElementDimensions.bind(this))
        );
    }

    _removeEventHandlers() {
        window.removeEventListener("scroll", this.listeners[0]);
        window.removeEventListener("resize", this.listeners[1]);
    }

    // Functions used by the dev

    destroy() {
        this._removeEventHandlers();
    }
}
