const { src, dest, series, parallel, watch } = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const wait = require("gulp-wait");

const browserSync = require("browser-sync").create();
let reload = browserSync.reload;

const minify = require("gulp-minify");
const uglify = require("gulp-uglify");
const rollup = require("rollup");
const resolve = require("@rollup/plugin-node-resolve");
const commmonjs = require("@rollup/plugin-commonjs");
const babel = require("rollup-plugin-babel");

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

    watch("./sass/**/*.scss").on("change", series(css, copy, reload));
    watch("./js/**/*.js").on("change", series(rollupBundle, copy, reload));
    watch("./nunjucks/**/*.njk").on("change", series(documentation, reload));
    watch("./nunjucks/**/*.html").on("change", series(documentation, reload));
}

function css() {
    return src("./sass/empyreal.scss")
        .pipe(sourcemaps.init())
        .pipe(wait(200))
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(dest("./dist/css/"))
        .pipe(rename("empyreal.min.css"))
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(sourcemaps.write("."))
        .pipe(dest("./dist/css/"));
}

async function rollupBundle() {
    return rollup
        .rollup({
            input: "./js/empyreal.js",
            plugins: [resolve(), commmonjs(), babel()],
        })
        .then((bundle) => {
            // IIFE bundle
            bundle.write({
                file: "./dist/js/empyreal.js",
                format: "iife",
                name: "empy",
                sourcemap: true,
            });

            // ESM bundle
            bundle.write({
                file: "./dist/js/empyreal.esm.js",
                format: "esm",
                name: "empy",
                sourcemap: true,
            });

            // UMD bundle
            bundle.write({
                file: "./dist/js/empyreal.umd.js",
                format: "umd",
                name: "empy",
                sourcemap: true,
            });

            return 1;
        });
}

async function minifyJs() {
    return parallel(
        // Minify ES5 modules such as the iife and UMD
        function ES5(done) {
            src(["./dist/js/empyreal.js", "./dist/js/empyreal.umd.js"])
                .pipe(uglify())
                .pipe(rename({ suffix: ".min" }))
                .pipe(dest("./dist/js"));
            done();
        },

        // Minify the ES6 modules such as the ESM
        function ES6(done) {
            src(["./dist/js/empyreal.esm.js"])
                .pipe(
                    minify({
                        noSource: true,
                        mangle: false,
                        ext: { min: ".min.js" },
                    })
                )
                .pipe(dest("./dist/js"));
            done();
        }
    )();
}

async function js() {
    return series(rollupBundle, minifyJs)();
}

async function copy() {
    return parallel(
        () => {
            return src("./dist/css/empyreal.min.css").pipe(dest("./docs/dist/css"));
        },
        () => {
            return src("./dist/js/empyreal.js").pipe(dest("./docs/dist/js/"));
        }
    )();
}

function documentation() {
    return src("nunjucks/**.njk")
        .pipe(nunjucks.compile(config, {}))
        .pipe(rename({ extname: ".html" }))
        .pipe(dest("./docs/"));

}

exports.test = test;
exports.css = css;
exports.js = js;
exports.bundleJs = rollupBundle;
exports.minifyJs = minifyJs;
exports.documentation = documentation;
exports.copy = copy;
exports.compile = parallel(css, js);
exports.server = server;
