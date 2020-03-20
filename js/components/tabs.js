import { c } from "./global";
import EmpyrealComponent from "../component";

const VERSION = "0.0.1";

const DEFAULTS = {
    animDuration: 500,
    activeTabClass: "",
    tabIndicatorClass: "",
};

export default class Tabs extends EmpyrealComponent {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
        super(el);
        this.settings = { ...DEFAULTS, ...options };
        
        this.$el = c(this.el);

        this.$tabs = this.$el.find(".tab");

        this.$tab_contents = this.$tabs.map(function(i, val) {
            let id = val.getAttribute("data-target") || val.getAttribute("href");
            return document.querySelector(`div${id}`);
        });

        this.$tab_indicator = c("<div class='tab-indicator' />");
        this.$el.append(this.$tab_indicator);
        this.tab_indicator = this.$tab_indicator[0];

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

        this.$tab_indicator.addClass(this.settings.tabIndicatorClass);

        if (this.$tabs.filter(".active").length)
            this._handleTabClick(this.$tabs.filter(".active")[0]);
        else this._handleTabClick(this.$tabs.first());
    }

    _handleTabClick(e) {
        
        let tabPressed = e;
        let $tabPressed = c(tabPressed);

        let id = $tabPressed.attr("data-target") || $tabPressed.attr("href");

        let $previousActiveTabContent = this.$tab_contents.filter(".active");
        let $activeTabContent = this.$tab_contents.filter(id);

        // Tab active color
        this.$tabs.removeClass("active");
        this.$tabs.removeClass(this.settings.activeTabClass);
        $tabPressed.addClass("active");
        $tabPressed.addClass(this.settings.activeTabClass);

        // Hiding and showing tab content
        $previousActiveTabContent.removeClass("active");
        $activeTabContent.addClass("active");

        // Moving Tab Indicator
        let tabSize = $tabPressed.size();
        this.tab_indicator.style.top = tabSize.height - 2 + "px";
        this.tab_indicator.style.left = tabSize.left - this.$el.size().left + "px";
        this.tab_indicator.style.width = $tabPressed.outerWidth(true) + "px";
    }

    _handleWindowResize() {
        this._handleTabClick(this.$tabs.first());
    }

    _setupEventHandlers() {
        this.$tabs.on("click touchstart", (e) => {
            e.preventDefault();
            this._handleTabClick(e.target);
        });

        window.addEventListener(
            "resize",
            (this.listeners[0] = this._handleWindowResize.bind(this))
        );
    }

    _removeEventHandlers() {
        this.$tabs.off("click touchstart");
        window.removeEventListener("resize", this.listeners[0]);
    }

    toggleTab(selector) {
        this._handleTabClick(this.$tabs.filter(selector)[0]);
    }

    toggleTabUsingIndex(index) {
        this._handleTabClick(this.$tabs.filter(`.tab:nth-child(${index})`)[0]);
    }

    destroy() {
        this._removeEventHandlers();
    }
}