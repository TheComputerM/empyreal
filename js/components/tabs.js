import { c } from "./global";
import EmpyrealComponent from "../component";

const VERSION = "0.0.1";

const DEFAULTS = {
    animDuration: 500,
    activeTabClass: "",
    tabIndicatorClass: "",
    onTabOpen: null
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

        this.$tabContents = this.$tabs.map(function(i, val) {
            let id = val.getAttribute("data-target") || val.getAttribute("href");
            return document.querySelector(`div${id}`);
        });

        this.$tabIndicator = c("<div class='tab-indicator' />");
        this.$el.append(this.$tabIndicator);

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

        this.$tabIndicator.addClass(this.settings.tabIndicatorClass);

        if (this.$tabs.filter(".active").length)
            this._handleTabOpen(this.$tabs.filter(".active")[0]);
        else this._handleTabOpen(this.$tabs.first());
    }

    _handleTabOpen(e) {
        if (typeof this.settings.onTabOpen === "function") {
            this.settings.onTabOpen.call(this, e, this.$el)
        }
        let $tabPressed = c(e);

        let id = $tabPressed.attr("data-target") || $tabPressed.attr("href");

        let $previousActiveTabContent = this.$tabContents.filter(".active");
        let $activeTabContent = this.$tabContents.filter(id);

        // Tab active color
        this.$tabs.removeClass("active");
        this.$tabs.removeClass(this.settings.activeTabClass);
        $tabPressed.addClass("active");
        $tabPressed.addClass(this.settings.activeTabClass);

        // Hiding and showing tab content
        $previousActiveTabContent.removeClass("active");
        $activeTabContent.addClass("active");

        // Moving Tab Indicator
        this._handleResizeIndicator($tabPressed);
    }

    _handleResizeIndicator($tabPressed) {
        let tabSize = $tabPressed.size();
        this.$tabIndicator.css({
            top: tabSize.height - 2 + "px",
            left: tabSize.left - this.$el.size().left + "px",
            width: $tabPressed.outerWidth(true) + "px"
        })
    }

    _setupEventHandlers() {
        this.$tabs.on("click touchstart", (e) => {
            e.preventDefault();
            this._handleTabOpen(e.target);
        });

        window.addEventListener(
            "resize",
            (this.listeners[0] = this._handleResizeIndicator.bind(this))
        );
    }

    _removeEventHandlers() {
        this.$tabs.off("click touchstart");
        window.removeEventListener("resize", this.listeners[0]);
    }

    toggleTab(selector) {
        this._handleTabOpen(this.$tabs.filter(selector)[0]);
    }

    toggleTabUsingIndex(index) {
        this._handleTabOpen(this.$tabs.filter(`.tab:nth-child(${index})`)[0]);
    }

    destroy() {
        this._removeEventHandlers();
    }
}
