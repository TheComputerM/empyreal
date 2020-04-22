const path = require("path");
const fs = require("fs");
const processCSS = require("./css");
const processJS = require("./js");
const { config, configPath } = require("./getConfig");
let configFolder = path.dirname(configPath);

const css = async function () {
    let result = await processCSS(config);
    await fs.writeFile(path.join(configFolder, config.out.css), result.css, () => true);
    if (config.sourcemaps) {
        await fs.writeFile(path.join(configFolder, config.out.css + '.map'), result.map, () => true);
    }
}

const js = async function () {
    let bundle = await processJS(config);
    let ext = path.extname(config.out.js);
    let out = path.join(configFolder, config.out.js).replace(/\.[^/.]+$/, "");
    if (config.modules.iife) {
        bundle.write({
            file: out + ext,
            format: "iife",
            name: "empy",
            sourcemap: config.sourcemaps,
        });
    }

    // ESM bundle
    if (config.modules.esm) {
        bundle.write({
            file: out + ".esm" + ext,
            format: "esm",
            name: "empy",
            sourcemap: config.sourcemaps,
        });
    }

    // UMD bundle
    if (config.modules.umd) {
        bundle.write({
            file: out + ".umd" + ext,
            format: "umd",
            name: "empy",
            sourcemap: config.sourcemaps,
        });
    }
}

module.exports = {css, js}