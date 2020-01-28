import { c } from "./global";

const VERSION = "0.0.1";

const DEFAULTS = {
    offset: 0,
    stop: Infinity,
    stopperElement: "",
};

const REGISTRY = {};

export default class Pushpin {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
        this.settings = { ...DEFAULTS, ...options };

        this.el = el;
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
        let size = this.$el.size();
        this.width = size.width;
        this.height = size.height;
        if (this.settings.stopperElement) {
            let stopperSize = c(this.settings.stopperElement).size();
            this.stop = stopperSize.top + window.scrollY - stopperSize.height - 10;
        }
    }

    _handleElementPosition() {
        let top = this.$el.size().top - this.settings.offset;
        let windowY = window.scrollY;
        if (this.settings.stopperElement) {
            let stopperSize = c(this.settings.stopperElement).size();
            this.stop = stopperSize.top + window.scrollY - stopperSize.height - 10;
        }
        if (windowY >= this.stop - this.settings.offset) {
            this.$el.css({
                position: "absolute",
                width: this.width,
                top: this.stop,
            });
        } else {
            if (top < windowY) {
                this.$el.css({
                    position: "fixed",
                    width: this.width,
                    top: this.settings.offset,
                });
            } else {
                this.$el.css({
                    position: "",
                    width: "",
                    top: "",
                });
            }
        }
    }

    _setupEventHandlers() {
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
