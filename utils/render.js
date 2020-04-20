const path = require("path");
const css = require("./css");
const {config, configPath} = require("./getConfig");

async function renderCSS() {
    css(config, configPath);
}

exports.renderCSS = renderCSS;