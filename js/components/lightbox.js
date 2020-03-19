import { c, E, anime } from "./global";
import EmpyrealComponent from "../component";


const VERSION = "0.0.1";

const DEFAULTS = {
    animInDuration: 600,
    animOutDuration: 600,
};

export default class Lightbox extends EmpyrealComponent {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
        super(el);

        this.settings = { ...DEFAULTS, ...options };

        this.$el = c(this.el);

        this.id = this.el.id;
        if (!this.id) {
            this.id = E.generateUUID();
            this.$el.attr("id", this.id);
        }

        this.$images = this.$el.find("img");
        this.numberOfImages = this.$el.find("img").length;

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
        this.$lightbox = c(`<div class="lightbox-ui" data-lightbox=${this.id} />`);
        this.$imageContainer = c("<div class=\"lightbox-images\" />");
        this.$lightboxImages = this.$images.clone();
        this.$imageContainer.append(this.$lightboxImages);

        this.$topbar = c("<div class=\"top-bar\" />");
        this.$lightboxCounter = c("<span class=\"lightbox-counter\" />");
        this.$lightboxClose = c("<span class=\"lightbox-close\" />");
        this.$lightboxFullscreen = c("<span class=\"lightbox-fullscreen\" />");

        this.$topbar
            .append(this.$lightboxCounter)
            .append(this.$lightboxClose)
            .append(this.$lightboxFullscreen);

        this.$nextBtn = c("<span class=\"right\" />");
        this.$prevBtn = c("<span class=\"left\" />");

        this.$lightbox
            .append(this.$imageContainer)
            .append(this.$topbar)
            .append(this.$prevBtn)
            .append(this.$nextBtn);

        c("body").append(this.$lightbox);
        this._setupEventHandlers();
    }

    _handleLightboxOpen(e) {
        this.open(this.$images.index(e.target));
        this.$lightbox.addClass("active");
        anime({
            targets: this.$lightbox[0],
            opacity: 1,
            duration: this.settings.animInDuration,
            easing: "easeOutQuad",
        });
    }

    _handleLightboxClick(e) {
        if (c(e.target).hasClass("lightbox-ui") || c(e.target).hasClass("lightbox-images"))
            this.close();
    }

    _handleFullscreenButtonClick() {
        if (this.$lightbox.hasClass("fullscreen")) {
            this.$lightbox.removeClass("fullscreen");
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            this.$lightbox.addClass("fullscreen");
            if (this.$lightbox[0].requestFullscreen) {
                this.$lightbox[0].requestFullscreen();
            } else if (this.$lightbox[0].mozRequestFullScreen) {
                this.$lightbox[0].mozRequestFullScreen();
            } else if (this.$lightbox[0].webkitRequestFullscreen) {
                this.$lightbox[0].webkitRequestFullscreen();
            } else if (this.$lightbox[0].msRequestFullscreen) {
                this.$lightbox[0].msRequestFullscreen();
            }
        }
    }

    _setupEventHandlers() {
        this.$images.on("click", this._handleLightboxOpen.bind(this));
        this.$nextBtn.on("click", this.next.bind(this));
        this.$prevBtn.on("click", this.prev.bind(this));
        this.$lightboxClose.on("click", this.close.bind(this));
        this.$lightboxFullscreen.on("click", this._handleFullscreenButtonClick.bind(this));
        document.addEventListener(
            "click",
            (this.listeners[0] = this._handleLightboxClick.bind(this))
        );
    }

    _removeEventHandlers() {
        this.$images.off("click");
        this.$nextBtn.off("click");
        this.$prevBtn.off("click");
        this.$lightboxClose.off("click");
        this.$lightboxFullscreen.off("click");
        document.removeEventListener("click", this.listeners[0]);
    }

    next() {
        let $activeImageIndex = this.$lightboxImages.filter(".active").index();
        if ($activeImageIndex + 1 == this.numberOfImages) {
            this.open(0);
        } else {
            this.open($activeImageIndex + 1);
        }
    }

    prev() {
        let $activeImageIndex = this.$lightboxImages.filter(".active").index();
        if ($activeImageIndex == 0) {
            this.open(this.numberOfImages - 1);
        } else {
            this.open($activeImageIndex - 1);
        }
    }

    close() {
        if (this.$lightbox.hasClass("fullscreen")) this.$lightboxFullscreen.trigger("click");
        anime({
            targets: this.$lightbox[0],
            opacity: 0,
            duration: this.settings.animOutDuration,
            easing: "easeOutCubic",
            complete: () => {
                this.$lightbox.removeClass("active");
            },
        });
    }

    open(index = 0) {
        let $activeImage = this.$lightboxImages.eq(index);

        this.$lightboxCounter.text(index + 1 + " / " + this.numberOfImages);

        $activeImage
            .addClass("active")
            .siblings()
            .removeClass("active");
    }

    destroy() {
        this._removeEventHandlers();
    }
}
