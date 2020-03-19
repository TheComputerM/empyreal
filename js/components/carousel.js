import { c } from "./global";
import EmprealComponent from "../component";

const VERSION = "0.0.1";

const DEFAULTS = {
    indicators: false,
};

export default class Carousel extends EmprealComponent{
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
        super(el);

        this.settings = { ...DEFAULTS, ...options };
        this.$el = c(this.el);

        this.$nextBtn = this.$el.find(".carousel-next");
        this.$prevBtn = this.$el.find(".carousel-prev");

        this.$carouselContainer = this.$el.find(".carousel-inner");
        this.$carouselItems = this.$carouselContainer.children(".carousel-item");

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
        if (this.settings.indicators) this._setupIndicators();
        this._handleCarouselItemFadeIn(0);
        this._setupEventHandlers();
    }

    _setupIndicators() {
        let indicatorContainer = c("<ol class='carousel-indicators'></ol>");
        this.$el.append(indicatorContainer);
        for (let i = 0; i < this.$carouselItems.length; i++) indicatorContainer.append("<li />");
        this.$indicators = indicatorContainer.children("li");
        this.$indicators.eq(0).addClass("active");
    }

    _handleIndicatorClick(e) {
        let newIndex = this.$indicators.filter(e.target).index();
        this._handleCarouselItemFadeIn(newIndex);
    }

    _returnActiveCarouselItemIndex() {
        let activeCarouselItem = this.$carouselItems.siblings(".active");
        return activeCarouselItem.index();
    }

    _handleCarouselItemFadeIn(index) {
        let activeCarouselItem = this.$carouselItems.siblings(".active");
        activeCarouselItem.removeClass("active");
        this.$carouselItems.eq(index).addClass("active");
        if (this.settings.indicators) {
            this.$indicators.removeClass("active");
            this.$indicators.eq(index).addClass("active");
        }
    }

    _handleCarouselNext() {
        let activeIndex = this._returnActiveCarouselItemIndex();

        // Check if carousel item is last so loop back
        if (activeIndex == this.$carouselItems.length - 1) this._handleCarouselItemFadeIn(0);
        else this._handleCarouselItemFadeIn(activeIndex + 1);
    }

    _handleCarouselPrev() {
        let activeIndex = this._returnActiveCarouselItemIndex();

        // Check if carousel item is last so loop back
        if (activeIndex == 0) this._handleCarouselItemFadeIn(this.$carouselItems.length - 1);
        else this._handleCarouselItemFadeIn(activeIndex - 1);
    }

    _setupEventHandlers() {
        this.$nextBtn.on("click", this._handleCarouselNext.bind(this));
        this.$prevBtn.on("click", this._handleCarouselPrev.bind(this));
        if (this.settings.indicators)
            this.$indicators.on("click", this._handleIndicatorClick.bind(this));
    }

    _removeEventHandlers() {
        this.$nextBtn.off("click");
        this.$prevBtn.off("click");
        if (this.settings.indicators) this.$indicators.off("click");
    }

    open(index = 0) {
        this._handleCarouselItemFadeIn(index);
    }

    destroy() {
        this._removeEventHandlers();
    }
}
