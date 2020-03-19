import { c, E } from "./global";

const VERSION = "0.0.1";

const DEFAULTS = {
    offset: 0,
    activeClass: "active",
    linkNode: function(node) {
        return node;
    },
};

// Do not add `extends EmpyrealComponent` here as this takes a NodeList as input instead of a single Node
export default class ScrollSpy {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
        this.settings = { ...DEFAULTS, ...options };

        this.el = el;
        this.$el = c(this.el);

        this.activeSection;
        this.listeners = [];

        this._init();
    }

    static get version() {
        return VERSION;
    }

    static get defaults() {
        return DEFAULTS;
    }

    _init() {
        this._calculateOffsets();
        this._setupEventHandlers();
    }

    _calculateOffsets () {
        this.sectionOffsets = {};
        for (let section of this.$el) {
            this.sectionOffsets[section.id] = section.offsetTop;
        }
    }

    _getLinkofSection(id) {
        let targetLink = E.getTrigger({
            a: {
                optional: {
                    href: "#" + id,
                    "data-scrollspy": "#" + id,
                },
            },
            button: {
                optional: {
                    "data-scrollspy": "#" + id,
                },
            },
        });
        let nodeTransformer = this.settings.linkNode.call(this, targetLink);

        return c(nodeTransformer);
    }

    _handleWindowScroll() {
        let windowTop = E.getDocumentScrollTop();
        windowTop += this.settings.offset + window.innerHeight / 2;

        for (let id in this.sectionOffsets) {
            if (this.sectionOffsets[id] < windowTop) {
                this.activeSection = document.getElementById(id);
                this._getLinkofSection(id)
                    .addClass(this.settings.activeClass)
                    .siblings()
                    .removeClass(this.settings.activeClass);
            }
        }
    }

    _setupEventHandlers() {
        window.addEventListener(
            "scroll",
            (this.listeners[0] = this._handleWindowScroll.bind(this))
        );
        document.addEventListener("DOMContentLoaded", this._calculateOffsets.bind(this));
    }

    _removeEventHandlers() {
        window.removeEventListener("scroll", this.listeners[0]);
    }

    open(id) {
        this._getLinkofSection(id)
            .addClass(this.settings.activeClass)
            .siblings()
            .removeClass(this.settings.activeClass);
    }

    destroy() {
        this._removeEventHandlers();
    }
}
