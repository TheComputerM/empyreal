const path = require("path");
const css = require("./css");
const {css: cssConfig, configPath} = require("./getConfig");

async function renderCSS() {
    css(cssConfig, configPath);
}

exports.renderCSS = renderCSS;