import { c } from "./global";

const VERSION = "0.0.1";

const DEFAULTS = {};

const REGISTRY = {};

export default class ScrollSpy {
    /**
	 * @param {Element} el
	 * @param {Object} options
	 */
    constructor (el, options){
        this.settings = { ...DEFAULTS, ...options };

		this.el = el;
        this.$el = c(this.el);
        
        this.$sections = this.$el.children();

        this.listeners = [];

        this._init();
    }

    static get version() {
        return VERSION;
    }

    static get defaults() {
        return DEFAULTS
    }

    _init() {
        this._getLinkofSection(this.$sections.first()).addClass("active");
        this._setupEventHandlers();
    }

    _getLinkofSection(elem) {
        return c(`a[href='#${c(elem).attr('id')}']`);
    }

    _handleWindowScroll() {
        
    }

    _setupEventHandlers() {
        window.addEventListener("scroll", this._handleWindowScroll.bind(this));
    }

    _removeEventHandlers() {

    }

    destroy() {
        this._removeEventHandlers();
    }
}