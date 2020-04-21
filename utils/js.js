const path = require("path");

const rollup = require("rollup");
const commmonjs = require("@rollup/plugin-commonjs");
const babel = require("rollup-plugin-babel");
const terser = require("rollup-plugin-terser").terser;

async function js(config) {
    let plugins = [commmonjs()];
    if (config.minify.js) {
        plugins.push(terser())
    }
    plugins.push(babel());
    
    return rollup.rollup({
        input: path.join(__dirname, "../js/empyreal.js"),
        plugins
    });
}

module.exports = js;