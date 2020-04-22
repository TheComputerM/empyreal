const path = require("path");
const fs = require("fs");

const rollup = require("rollup");
const commmonjs = require("@rollup/plugin-commonjs");
const babel = require("rollup-plugin-babel");
const terser = require("rollup-plugin-terser").terser;

async function js(config) {
    let files = await fs.readdirSync(path.join(__dirname, "../js/components/")).map(i => {
        return i.replace(/\.[^/.]+$/, "");
    });

    let components = config.components.filter(i => {
        let fileName = i.toLowerCase().replace(/ /g, "-");
        return files.includes(fileName)
    });

    let componentsContent = '';
    for (let i of components) {
        let fileName = i.toLowerCase().replace(/ /g, "-");
        componentsContent += `import ${i} from "./components/${fileName}";\n`;
    }

    componentsContent += `export default {${components.join(', ')}}`;
    await fs.writeFileSync(path.join(__dirname, "../js/components.js"), componentsContent);
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