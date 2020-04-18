const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

const importcss = require("postcss-import");
const extendRule = require("postcss-extend-rule");
const postJs = require("postcss-js");
const nested = require("postcss-nested");
const forLoop = require("postcss-for");
const customProperties = require("postcss-custom-properties");
const functions = require("postcss-functions");
const calc = require("postcss-calc");
const customMedia = require("postcss-custom-media");
const colorMod = require("postcss-color-mod-function");


function cssFunctions(config) {
    return {
        pallete: function (color, variant) {
            let trimColor = color.replace(/['"]+/g, '');
            let trimVariant = variant.replace(/['"]+/g, '');
            return config.pallete[trimColor][trimVariant];
        }

    }
}

function toCSSVariable(input) {
    let out = {};
    for (let i in input) {
        let res = i.replace(/[A-Z]/gm, function (x) {
            return `-${x[0].toLowerCase()}`
        });
        res = '--' + res;
        out[res] = input[i];
    }
    return out;
}


async function render(config, configPath) {
    let configFolder = path.dirname(configPath);
    let empyrealPath = path.join(__dirname, "../css/empyreal.css")
    let empyreal = fs.readFileSync(empyrealPath);
    postcss()
        .use(importcss({
            plugins: [
                functions({
                    functions: cssFunctions(config)
                }),
                forLoop()
            ],
            load: function (filename, options) {
                if (path.extname(filename) == '.js') {
                    let content = require(filename)(config);
                    let parsed = postJs.parse(content).toString();
                    return parsed;
                } else {
                    let content = fs.readFileSync(filename);
                    let parsed = content.toString();
                    return parsed;
                }
            }
        }))
        .use(customMedia({
            preserve: false,
            importFrom: [{
                customMedia: toCSSVariable(config.mediaQueries)
            }]
        }))
        .use(customProperties({
            preserve: false,
            importFrom: [{
                customProperties: toCSSVariable(config.variables)
            }]
        }))
        .use(calc({ mediaQueries: true }))
        .use(colorMod())
        .use(nested())
        .use(extendRule())
        .process(empyreal, { from: empyrealPath })
        .then(function (result) {
            fs.writeFile(path.join(configFolder, config.out, './empyreal.css'), result.css, () => true)
        });
}

module.exports = render;