import { c, anime } from "./global";

const VERSION = "0.0.1";

const DEFAULTS = {
    accordion: false,
    animInDuration: 500,
    animOutDuration: 500,
};

export default class Collapsible {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
        this.settings = { ...DEFAULTS, ...options };

        this.el = el;
        this.$el = c(this.el);

        this.$headers = this.$el.find(".collapsible-header");
        this.$bodies = this.$el.find(".collapsible-body");

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
        this._setupEventHandlers();
    }

    _handleHeaderOpen(elem) {
        let $activeHeader = c(elem);
        let $parent = $activeHeader.parent();
        let $activeBody = $activeHeader.siblings(".collapsible-body");

        anime.remove($activeBody[0]);
        $activeBody.css({
            display: "block",
            overflow: "hidden",
            height: 0,
            paddingTop: "",
            paddingBottom: "",
        });

        let paddTop = $activeBody.css("padding-top");
        let paddBottom = $activeBody.css("padding-bottom");
        let finalHeight = $activeBody[0].scrollHeight;

        $activeBody.css({
            paddingTop: 0,
            paddingBottom: 0,
        });

        anime({
            targets: $activeBody[0],
            height: finalHeight,
            paddingTop: paddTop,
            paddingBottom: paddBottom,
            duration: this.settings.animInDuration,
            easing: "easeInOutCubic",
            complete: () => {
                $activeBody.css({
                    overflow: "",
                    paddingTop: "",
                    paddingBottom: "",
                    height: "",
                });
            },
        });

        $parent.addClass("active");
    }

    _handleHeaderClose(elem) {
        let $activeHeader = c(elem);
        let $parent = $activeHeader.parent();
        let $activeBody = $activeHeader.siblings(".collapsible-body");

        anime.remove($activeBody[0]);
        $activeBody.css("overflow", "hidden");

        anime({
            targets: $activeBody[0],
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: this.settings.animOutDuration,
            easing: "easeInOutCubic",
            complete: () => {
                $activeBody.css({
                    height: "",
                    overflow: "",
                    padding: "",
                    display: "",
                });
            },
        });

        $parent.removeClass("active");
    }

    _handleHeaderClick(e) {
        let $parent = c(e.target).parent();
        if ($parent.hasClass("active")) {
            this._handleHeaderClose(e.target);
        } else {
            this._handleHeaderOpen(e.target);
        }

        if (this.settings.accordion) {
            for (let i of $parent.filter(".active").siblings())
                this._handleHeaderClose(c(i).find(".collapsible-header")[0]);
        }
    }

    _setupEventHandlers() {
        this.$headers.on("click", this._handleHeaderClick.bind(this));
    }

    _removeEventHandlers() {}

    // Functions used by the dev

    destroy() {
        this._removeEventHandlers();
    }
}
