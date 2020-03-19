import { c, E, anime } from "./global";
import EmpyrealComponent from "../component";

const VERSION = "0.0.1";

const DEFAULTS = {
    topOffset: "10%",
    overlayColor: "rgba(0, 0, 0, 0.5)",
    blur: false,
    dismissable: true,
    windowScroll: true,
    animInDuration: 500,
    animOutDuration: 500,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
};

const REGISTRY = {
    animInEasing: "easeOutQuad",
    animOutEasng: "easeOutQuart",

    modalDialogSlideOffset: 50,
    modalDialogSlideInEasing: "easeInOutQuad",
    modalDialogSlideOutEasing: "easeOutSine",

};

export default class Modal extends EmpyrealComponent {
    constructor(el, options) {
        super(el, options);

        this.settings = { ...DEFAULTS, ...options };
        this.$el = c(this.el);

        this.$dialog = this.$el.find(".modal-dialog");
        this.dialog = this.$dialog[0];

        this.id = this.$el.attr("id");

        this.trigger = E.getTrigger({
            a: {
                class: "modal-trigger",
                optional: {
                    href: `#${this.id}`,
                    "data-target": `#${this.id}`,
                },
            },
            button: {
                class: "modal-trigger",
                optional: {
                    "data-target": `#${this.id}`,
                },
            },
        });

        this.$trigger = c(this.trigger);

        this.isOpen = false;
        this.isAnimationDone = true;

        this.$closeModalBtn = this.$dialog.find(".modal-close");

        this.isModalSheet = this.$dialog.hasClass("modal-sheet") ? true : false;

        this.isModalSide = this.$dialog.hasClass("modal-side") ? true : false;

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
        this.$el.css({
            "backgroundColor": this.settings.overlayColor
        });


        if (!(this.isModalSide || this.isModalSheet))
            this.dialog.style.top = this.settings.topOffset;

        this._setupEventHandlers();
    }

    _handleModalOpen(e) {
        if (this.settings.blur) c(document.body).children().not(".modal").addClass("blurred");
        anime({
            targets: this.el,
            opacity: 1,
            easing: REGISTRY.animInEasing,
            duration: this.settings.animInDuration,
            begin: () => {
                this.isAnimationDone = false;
                this.isOpen = true;
                this.el.style.display = "block";
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

        if (!this.isModalSheet && !this.isModalSide) {
            // Modal dialog slide in down
            anime({
                targets: this.dialog,
                translateY: [-REGISTRY.modalDialogSlideOffset, 0],
                easing: REGISTRY.modalDialogSlideOutEasing,
                duration: this.settings.animInDuration,
            });
        }

        if (!this.settings.windowScroll) document.body.style.overflow = "hidden";
    }

    _handleModalClose(e) {
        if (this.settings.blur) c(document.body).children().not(".modal").removeClass("blurred");
        anime({
            targets: this.el,
            opacity: 0,
            easing: REGISTRY.animOutEasng,
            duration: this.settings.animOutDuration,
            begin: () => {
                this.isAnimationDone = false;
                this.isOpen = false;
                if (typeof this.settings.onCloseStart === 'function') {
                    this.settings.onCloseStart.call(this, this.el, e.target)
                }
            },
            complete: () => {
                this.isAnimationDone = true;
                this.el.style.display = "none";
                if (typeof this.settings.onCloseEnd === 'function') {
                    this.settings.onCloseEnd.call(this, this.el, e.target)
                }
            },
        });

        if (!this.isModalSide && !this.isModalSheet) {
            // Modal dialog slide out up
            anime({
                targets: this.dialog,
                translateY: [0, -REGISTRY.modalDialogSlideOffset],
                easing: REGISTRY.modalDialogSlideOutEasing,
                duration: this.settings.animInDuration,
            });
        }

        if (!this.settings.windowScroll) document.body.style.overflow = "auto";
    }

    _handleOverlayClick(e) {
        if (
            !c(e.target).closest(".modal-dialog").length &&
            this.isAnimationDone &&
            this.isOpen &&
            this.settings.dismissable
        )
            this._handleModalClose();
    }

    _handleKeyDown(e) {
        if (e.keyCode == E.keys.ESC) this._handleModalClose();
    }

    _setupEventHandlers() {
        this.$trigger.on("click touchstart", this._handleModalOpen.bind(this));
        this.$closeModalBtn.on("click touchstart", this._handleModalClose.bind(this));
        document.addEventListener(
            "click",
            (this.listeners[0] = this._handleOverlayClick.bind(this))
        );
        document.addEventListener(
            "touchstart",
            (this.listeners[1] = this._handleOverlayClick.bind(this))
        );
        document.addEventListener(
            "keydown",
            (this.listeners[2] = this._handleKeyDown.bind(this))
        );
    }

    _removeEventHandlers() {
        this.$trigger.off("click touchstart");
        this.$closeModalBtn.off("click touchstart");
        document.removeEventListener("click", this.listeners[0]);
        document.removeEventListener("touchstart", this.listeners[1]);
        document.removeEventListener("keydown", this.listeners[2]);
    }

    open() {
        this._handleModalOpen();
    }

    close() {
        this._handleModalClose();
    }

    destroy() {
        this._removeEventHandlers();
    }
}
