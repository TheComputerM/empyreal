#!/usr/bin/env node

const path = require("path");
const {performance} = require('perf_hooks');
const { config, configPath } = require("./getConfig");
const chalk = require("chalk");
const render = require("./render");

async function compile() {
    console.log("\u001b[2J\u001b[0;0H");
    if (config) {
        console.log(`Empyreal Config file found at ${chalk.blue(configPath)} \n`);
        if (config.css) {
            console.log(`Starting to compile styles`);
            console.log(`EmpyrealCSS file located at ${chalk.blue(path.join(configPath, config.out.css))}`);
            let csstime = performance.now();
            await render.css();
            console.log(`Time taken: ${chalk.underline(performance.now() - csstime)} ms`);
            console.log(chalk.bgGreen(" SUCCESS "))
            console.log("\n");
        }

        if (config.js) {
            console.log(`Starting to compile javascript`);
            console.log(`EmpyrealJS file located at ${chalk.blue(path.join(configPath, config.out.js))}`);
            let jstime = performance.now();
            await render.js();
            console.log(`Time taken: ${chalk.underline(performance.now() - jstime)} ms`);
            console.log(chalk.bgGreen(" SUCCESS "));
            console.log("\n");
        }

        console.log(chalk.inverse(" DONE "))
    }
}

compile();