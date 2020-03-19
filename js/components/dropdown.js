import { c, E, anime } from "./global";
import EmpyrealComponent from "../component";

const VERSION = "0.0.1";

const DEFAULTS = {
    animInDuration: 500,
    animOutDuration: 500,
    coverTrigger: false,
    isRelative: false,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onItemClick: null
};

const REGISTRY = {
    animInEasing: "easeOutQuad",
    animOutEasing: "easeOutQuint",

    dropdownPadding: 10,
};

export default class Dropdown extends EmpyrealComponent{
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
        super(el);
        this.settings = { ...DEFAULTS, ...options };

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
        this.$el.css("display", "block");
        this.initialDropdownDimensions = {
            width: this.$el.outerWidth(),
            height: this.$el.outerHeight(),
        };
        this.$el.css("display", "none");

        this._setupEventHandlers();
    }

    _positionDropdownDialog() {
        if (this.isOpen) {
            let triggerDimensions = this.$trigger.size();
            let dropdownDimensions = this.initialDropdownDimensions;

            this.el.style.left = triggerDimensions.left + "px";

            let dropdownTop = window.scrollY + triggerDimensions.top;
            if (this.settings.isRelative) dropdownTop = 0;

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

    _handleDropdownOpen(e) {
        this.isOpen = true;
        this.isAnimationDone = false;
        this.$el.css("display", "block");
        this._positionDropdownDialog();
        anime({
            targets: this.el,
            opacity: [0, 1],
            duration: this.settings.animInDuration,
            easing: REGISTRY.animInEasing,
            begin: () => {
                if (typeof this.settings.onOpenStart === 'function') {
                    this.settings.onOpenStart.call(this, this.el, e.target)
                }
            },
            complete: () => {
                this.isAnimationDone = true;
                if (typeof this.settings.onOpenEnd === 'function') {
                    this.settings.onOpenEnd.call(this, this.el, e.target)
                }
            },
        });
    }

    _handleDropdownClose(e) {
        this.isOpen = false;
        this.isAnimationDone = false;
        anime({
            targets: this.el,
            opacity: [1, 0],
            duration: this.settings.animOutDuration,
            easing: REGISTRY.animOutEasing,
            begin: () => {
                if (typeof this.settings.onCloseStart === 'function') {
                    this.settings.onCloseStart.call(this, this.el, e.target)
                }
            },
            complete: () => {
                this.isAnimationDone = true;
                this.$el.css("display", "none");
                if (typeof this.settings.onCloseEnd === 'function') {
                    this.settings.onCloseEnd.call(this, this.el, e.target)
                }
            },
        });
    }

    _handleDocumentClick(e) {
        let $elemClicked = c(e.target);
        if (
            !$elemClicked.closest(this.el).length &&
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
    
    _handleDropdownItemClick(e) {
        if (typeof this.settings.onItemClick === 'function') {
            this.settings.onItemClick.call(this, this.el, e.target)
        }
    }

    _setupEventHandlers() {
        this.$trigger.on("click ", this._handleDropdownClick.bind(this));
        this.$el.on("click", this._handleDropdownItemClick.bind(this));
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
        this.$el.off("click");
        window.removeEventListener("scroll", this.listeners[0]);
        document.removeEventListener("click", this.listeners[1]);
        document.removeEventListener("touchstart", this.listeners[2]);
    }

    open() {
        this._handleDropdownOpen();
    }

    close() {
        this._handleDropdownClose();
    }

    destroy() {
        this._removeEventHandlers();
    }
}
