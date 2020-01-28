import { c, anime } from "./global";

const VERSION = "0.0.1";

const DEFAULTS = {
    position: "top",
    clickTrigger: false,
    offset: 10,
    animInDuration: 300,
    animOutDuration: 300
};

const REGISTRY = {
    animInEasing: "easeOutCubic",
    animOutEasing: "easeOutCubic",
};

export default class Tooltip {
    /**
	 * @param {Element} el
	 * @param {Object} options
	 */
    constructor (el, options){
        this.settings = { ...DEFAULTS, ...options };

		this.el = el;
        this.$el = c(this.el);
        
        this.listeners = [];

        this.position = this.$el.data("position") || this.settings.position;
        
        this.isOpen = false;

        this._init();
    }

    static get version() {
        return VERSION;
    }

    static get defaults() {
        return DEFAULTS
    }

    _init() {
        this.$tooltip = c("<div class=\"empyreal-tooltip\" />");
        this.tooltip = this.$tooltip[0];

        let tooltipContent = this.$el.data("tooltip");
        this.$tooltip.html(tooltipContent);

        c("body").append(this.$tooltip);
        this._setupEventHandlers();
    }

    _positionTooltip() {
        // Trigger position is tp
        let tp = this.$el.size();

        // Tooltip position is toolp
        let toolp = this.$tooltip.size();

        if (this.position == "left") {
            this.tooltip.style.top = (tp.top + tp.height/2 - toolp.height/2) + "px";
            this.tooltip.style.left = (tp.left - toolp.width) + "px";
        } else if (this.position == "right") {
            this.tooltip.style.top = (tp.top + tp.height/2 - toolp.height/2) + "px";
            this.tooltip.style.left = (tp.left + tp.width) + "px";
        } else if (this.position == "bottom") {
            this.tooltip.style.top = (tp.top + tp.height) + "px";
            this.tooltip.style.left = (tp.left + tp.width/2 - toolp.width/2) + "px";
        } else {
            this.tooltip.style.top = (tp.top - toolp.height) + "px";
            this.tooltip.style.left = (tp.left + tp.width/2 - toolp.width/2) + "px";
        }

    }

    _handleTooltipOpen() {
        this.isOpen = true;
        this._positionTooltip();

        let translate = {translateY: [0, -this.settings.offset]};
        if (this.position == "left") translate = {translateX: [0, -this.settings.offset]};
        else if (this.position == "right") translate = {translateX: [0, this.settings.offset]};
        else if (this.position == "bottom") translate = {translateY: [0, this.settings.offset]};

        anime({
            targets: this.tooltip,
            duration: this.settings.animInDuration,
            opacity: [0, 1],
            easing: REGISTRY.animInEasing,
            ...translate
        });
    }

    _handleTooltipClose() {
        this.isOpen = false;
        anime({
            targets: this.tooltip,
            duration: this.settings.animOutDuration,
            opacity: [1, 0],
            easing: REGISTRY.animOutEasing,
            translateY: 0,
            translateX: 0
        });
    }

    _handleTriggerClick() {
        if (this.isOpen) this._handleTooltipClose();
        else this._handleTooltipOpen();
    }

    _setupEventHandlers() {
        if (this.settings.clickTrigger) {
            this.$el.on("click", this._handleTriggerClick.bind(this));
        } else {
            this.$el.on("mouseenter", this._handleTooltipOpen.bind(this));
            this.$el.on("mouseleave", this._handleTooltipClose.bind(this));
        }
    }

    _removeEventHandlers() {
        if (this.settings.clickTrigger) {
            this.$el.off("click");
        } else {
            this.$el.off("mouseenter");
            this.$el.off("mouseleave");
        }
    }

    open() {
        this._handleTooltipOpen();
    }

    destroy() {
        this._removeEventHandlers();
    }
}