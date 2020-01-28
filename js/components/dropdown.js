/**
 * This is code for making a new component for Empyreal
 */

import { c, E, anime } from "./global";

const VERSION = "0.0.1";

const DEFAULTS = {
    animInDuration: 500,
    animOutDuration: 500,
    coverTrigger: false,
};

const REGISTRY = {
    animInEasing: "easeOutQuint",
    animOutEasing: "easeOutQuint",

    dropdownPadding: 10,
};

export default class Dropdown {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
        this.settings = { ...DEFAULTS, ...options };

        this.el = el;
        this.$el = c(this.el);

        this.id = this.$el.attr("id");

        this.trigger = E.getTrigger({
            a: {
                class: "dropdown-trigger",
                optional: {
                    href: `#${this.id}`,
                    "data-target": `#${this.id}`,
                },
            },
            button: {
                class: "dropdown-trigger",
                optional: {
                    "data-target": `#${this.id}`,
                },
            },
        });

        this.$trigger = c(this.trigger);

        this.initialDropdownDimensions = { width: 0, height: 0 };

        this.isOpen = false;
        this.isAnimationDone = true;

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
        this.el.style.display = "block";
        this.initialDropdownDimensions = {
            width: this.$el.size().width,
            height: this.$el.size().height,
        };
        this.el.style.display = "none";

        this._setupEventHandlers();
    }

    _positionDropdownDialog() {
        if (this.isOpen) {
            let triggerDimensions = this.$trigger.size();
            let dropdownDimensions = this.initialDropdownDimensions;

            this.el.style.left = triggerDimensions.left + "px";

            let dropdownTop = triggerDimensions.top + window.scrollY;

            if (triggerDimensions.top + dropdownDimensions.height <= window.innerHeight) {
                // Dropdown positioned on bottom of trigger
                dropdownTop += triggerDimensions.height + 10;
                dropdownTop -= this.settings.coverTrigger ? triggerDimensions.height + 10 : 0;
            } else {
                // Dropdown positioned on top of trigger
                dropdownTop -= dropdownDimensions.height + 10;
                dropdownTop += this.settings.coverTrigger ? triggerDimensions.height + 10 : 0;
            }

            this.el.style.top = dropdownTop + "px";
        }
    }

    _handleDropdownOpen() {
        this.isOpen = true;
        this.isAnimationDone = false;
        this.el.style.display = "block";
        this._positionDropdownDialog();
        anime({
            targets: this.el,
            opacity: [0, 1],
            duration: this.settings.animInDuration,
            easing: REGISTRY.animInEasing,
            complete: () => {
                this.isAnimationDone = true;
            },
        });
    }

    _handleDropdownClose() {
        this.isOpen = false;
        this.isAnimationDone = false;
        anime({
            targets: this.el,
            opacity: [1, 0],
            duration: this.settings.animOutDuration,
            easing: REGISTRY.animOutEasing,
            complete: () => {
                this.isAnimationDone = true;
                this.el.style.display = "none";
            },
        });
    }

    _handleDocumentClick(e) {
        e.preventDefault();
        let $elemClicked = c(e.target);
        console.log($elemClicked);
        if (
            !$elemClicked.closest(".dropdown").length &&
            this.isOpen &&
            this.isAnimationDone &&
            !$elemClicked.hasClass("dropdown-trigger")
        ) {
            this._handleDropdownClose();
        }
    }

    _handleDropdownClick(e) {
        e.preventDefault();
        if (this.isOpen) this._handleDropdownClose();
        else this._handleDropdownOpen();
    }

    _setupEventHandlers() {
        this.$trigger.on("click ", this._handleDropdownClick.bind(this));
        window.addEventListener(
            "scroll",
            (this.listeners[0] = this._positionDropdownDialog.bind(this))
        );
        document.addEventListener(
            "click",
            (this.listeners[1] = this._handleDocumentClick.bind(this))
        );
        document.removeEventListener(
            "touchstart",
            (this.listeners[2] = this._handleDocumentClick.bind(this))
        );
    }

    _removeEventHandlers() {
        this.$trigger.off("click");
        window.removeEventListener("scroll", this.listeners[0]);
        document.removeEventListener("click", this.listeners[1]);
        document.removeEventListener("touchstart", this.listeners[2]);
    }

    destroy() {
        this._removeEventHandlers();
    }
}
