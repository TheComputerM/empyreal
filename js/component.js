/**
 * This is code for making a new component for Empyreal
 */

import { c } from "./global";

const VERSION = "0.0.1";

const DEFAULTS = {};

const REGISTRY = {};

export default class ClassName {
    /**
	 * @param {Element} el
	 * @param {Object} options
	 */
    constructor (el, options){
        this.settings = { ...DEFAULTS, ...options };

		this.el = el;
        this.$el = c(this.el);
        
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
        this._setupEventHandlers();
    }

    // Functions for running the backend

    _setupEventHandlers() {

    }

    _removeEventHandlers() {

    }

    // Functions used by the dev

    destroy() {
        this._removeEventHandlers();
    }
}