import { c, E, anime } from "./global";
import EmpyrealComponent from "../component";

const VERSION = "0.0.1";

const DEFAULTS = {
    width: "300px",
    overlayColor: "rgba(0, 0, 0, 0.5)",
    animInDuration: 500,
    animOutDuration: 500,
};

const REGISTRY = {
    easingSlideIn: "easeOutQuad",
    easingSlideOut: "easeOutQuad"
};

export default class Sidenav extends EmpyrealComponent {
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
                class: "sidenav-trigger",
                optional: {
                    href: `#${this.id}`,
                    "data-target": `#${this.id}`,
                },
            },
            button: {
                class: "sidenav-trigger",
                optional: {
                    "data-target": `#${this.id}`,
                },
            },
        });

        this.$trigger = c(this.trigger);

        this.closeTrigger = E.getTrigger({
            a: {
                class: "sidenav-close",
                optional: {
                    href: `#${this.id}`,
                    "data-target": `#${this.id}`,
                },
            },
            button: {
                class: "sidenav-close",
                optional: {
                    "data-target": `#${this.id}`,
                },
            },
        });

        this.$closeTrigger = c(this.closeTrigger);

        this.isOpen = false;
        this.isAnimationDone = false;

        this.listeners = [];

        this.$overlay = c("<div class=\"sidenav-overlay\" />");
        this._init();
    }

    static get version() {
        return VERSION;
    }

    static get defaults() {
        return DEFAULTS;
    }

    _init() {
        this.el.style.width = this.settings.width;
        this.el.style.left = "-100%";
        this.$el.after(this.$overlay);
        this.$overlay[0].style.backgroundColor = this.settings.overlayColor;

        this._setupEventHandlers();
    }

    _handleOverlayFadeIn() {
        this.$overlay[0].style.display = "block";
        anime({
            targets: this.$overlay[0],
            opacity: [0, 1],
            duration: this.settings.animInDuration,
            easing: REGISTRY.easingSlideIn,
        });
    }

    _handleOverlayFadeOut() {
        anime({
            targets: this.$overlay[0],
            opacity: [1, 0],
            duration: this.settings.animOutDuration,
            easing: REGISTRY.easingSlideOut,
            complete: () => {
                this.$overlay[0].style.display = "none";
            },
        });
    }

    _handleSidenavOpen() {
        this.el.style.display = "block";

        anime({
            targets: this.el,
            left: ["-100%", 0],
            duration: this.settings.animInDuration,
            easing: REGISTRY.easingSlideIn,
            begin: () => {
                this.isOpen = true;
                this.isAnimationDone = false;
            },
            complete: () => {
                this.isAnimationDone = true;
            },
        });
        this._handleOverlayFadeIn();
    }

    _handleSidenavClose() {
        anime({
            targets: this.el,
            left: [0, "-100%"],
            duration: this.settings.animInDuration,
            easing: REGISTRY.easingSlideOut,
            begin: () => {
                this.isOpen = false;
                this.isAnimationDone = false;
            },
            complete: () => {
                this.isAnimationDone = true;
                this.el.style.display = "none";
            },
        });
        this._handleOverlayFadeOut();
    }

    _handleKeydown(e) {
        if (e.keyCode == E.keys.ESC && this.isOpen) this._handleSidenavClose();
    }

    _setupEventHandlers() {
        this.$trigger.on("click touchstart", this._handleSidenavOpen.bind(this));
        this.$overlay.on("click touchstart", this._handleSidenavClose.bind(this));
        this.$closeTrigger.on("click touchstart", this._handleSidenavClose.bind(this));
        document.addEventListener("keydown", (this.listeners[0] = this._handleKeydown.bind(this)));
    }

    _removeEventHandlers() {
        this.$trigger.off("click touchstart");
        this.$overlay.off("click touchstart");
        this.$closeTrigger.off("click touchstart");
        document.removeEventListener("keydown", this.listeners[0]);
    }

    open() {
        this._handleSidenavOpen();
    }

    close () {
        this._handleSidenavClose();
    }
    
    destroy() {
        this._removeEventHandlers();
    }
}
