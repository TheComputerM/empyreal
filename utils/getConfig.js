const { cosmiconfigSync } = require("cosmiconfig");

let searched = cosmiconfigSync("empyreal").search();
let cssDefault = require("./defaults/css.config");
let jsDefault = require("./defaults/js.config");

let css = {...cssDefault, ...searched.config.css};
let js = {...jsDefault, ...searched.config.js};

exports.css = css;
exports.js = js;
exports.configPath = searched.filepath;
