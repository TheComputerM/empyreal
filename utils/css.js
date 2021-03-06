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
const clean = require("postcss-clean");

function cssFunctions(config) {
    return {
        pallete: function(color, variant) {
            let trimColor = color.replace(/['"]+/g, "");
            let trimVariant = variant.replace(/['"]+/g, "");
            return config.pallete[trimColor][trimVariant];
        },
    };
}

function toCSSVariable(input) {
    let out = {};
    for (let i in input) {
        let res = i.replace(/[A-Z]/gm, function(x) {
            return `-${x[0].toLowerCase()}`;
        });
        res = "--" + res;
        out[res] = input[i];
    }
    return out;
}

async function css(config) {
    let empyrealPath = path.join(__dirname, "../css/empyreal.css");
    let empyreal = fs.readFileSync(empyrealPath);
    let components = ["Normalize", "Global", ...config.components].map((i) => {
        return i.toLowerCase().replace(/ /g, "-");
    });

    let compiler = postcss()
        .use(
            importcss({
                plugins: [
                    functions({
                        functions: cssFunctions(config),
                    }),
                    forLoop(),
                ],
                load: function(filepath, options) {
                    let ext = path.extname(filepath);
                    let filename = path.basename(filepath, ext);
                    if (components.includes(filename)) {
                        if (ext == ".js") {
                            let content = require(filepath)(config);
                            let parsed = postJs.parse(content).toString();
                            return parsed;
                        } else {
                            let content = fs.readFileSync(filepath);
                            let parsed = content.toString();
                            return parsed;
                        }
                    } else {
                        return "";
                    }
                },
            })
        )
        .use(
            customMedia({
                preserve: false,
                importFrom: [
                    {
                        customMedia: toCSSVariable(config.mediaQueries),
                    },
                ],
            })
        )
        .use(
            customProperties({
                preserve: false,
                importFrom: [
                    {
                        customProperties: toCSSVariable(config.variables),
                    },
                ],
            })
        )
        .use(calc({ mediaQueries: true }))
        .use(colorMod())
        .use(nested())
        .use(extendRule());

    if (config.minify.css) compiler.use(clean());

    return compiler.process(empyreal, { from: empyrealPath, map: { inline: false } });
}

module.exports = css;
