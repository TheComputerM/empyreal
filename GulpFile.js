const { src, dest, series, parallel, watch } = require("gulp");
const rename = require("gulp-rename");
const render = require("./utils/render"); 

const browserSync = require("browser-sync").create();
let reload = browserSync.reload;

const nunjucks = require("gulp-nunjucks");

let config = {
    ...require("./package.json"),
    components: [
        "Modal",
        "Tabs",
        "Dropdown",
        "Cards",
        "Sidenav",
        "Collapsible",
        "Tooltips",
        "Carousel",
        "Pushpin",
        "ScrollSpy",
        "Lightbox",
        "Snackbar"
    ],
    utilities: [
        "Navbar",
        "Buttons",
        "Helpers",
        "Shadow",
        "Grid",
        "Table",
        "Color",
        "Animations",
        "SmoothScroll",
        "Progress",
    ],
    content: ["Typography", "Icons", "Images", "Lists", "Masks"],
    forms: ["Text Inputs", "Select", "Radio Buttons", "Checkboxes", "Chips", "Pickers", "Autocomplete"],
    checkIfColorIsLight: function (color) {
        // Thanks https://awik.io/determine-color-bright-dark-using-javascript/
        let r, g, b, hsp;
        if (color.match(/^rgb/)) {
            color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

            r = color[1];
            g = color[2];
            b = color[3];
        } else {
            color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

            r = color >> 16;
            g = (color >> 8) & 255;
            b = color & 255;
        }

        hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

        if (hsp > 127.5) {
            return true;
        } else {
            return false;
        }
    },
};

function server() {
    browserSync.init({
        server: {
            baseDir: "./docs/",
        },
        port: "8080",
    });

    watch("./css/**/*.{css, js}").on("change", series(css, copy, reload));
    watch("./js/**/*.js").on("change", series(rollupBundle, copy, reload));
    watch("./nunjucks/**/*.njk").on("change", series(documentation, reload));
    watch("./nunjucks/**/*.html").on("change", series(documentation, reload));
}

let css = render.css;

let js = render.js;

let copy = parallel(
    function () {
        return src("./dist/css/empyreal.css").pipe(dest("./docs/dist/css"));
    },
    function () {
        return src("./dist/js/empyreal.js").pipe(dest("./docs/dist/js/"));
    }
);


function documentation() {
    return src("nunjucks/**.njk")
        .pipe(nunjucks.compile(config, {}))
        .pipe(rename({ extname: ".html" }))
        .pipe(dest("./docs/"));

}

exports.css = css;
exports.js = js;
exports.documentation = documentation;
exports.copy = copy;
exports.compile = parallel(css, js);
exports.server = server;
