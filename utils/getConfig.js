const { cosmiconfigSync } = require("cosmiconfig");
const flat = require("flat");
let searched = cosmiconfigSync("empyreal").search();
let custom = searched.config;
let defaultConfig = require("./defaultConfig.js");

let config = flat.unflatten({ ...flat(defaultConfig), ...flat(custom) });

exports.config = config;
exports.configPath = searched.filepath;
