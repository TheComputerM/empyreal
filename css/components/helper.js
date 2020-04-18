module.exports = function (config) {
    let out = {};
    out[".flex"] = {
        display: "flex"
    }

    for (let i of ["row", "row-reverse", "column", "column-reverse"]) {
        out[`.flex-${i}`] = { "flex-direction": i }
    }

    for (let i of ["wrap", "nowrap"]) {
        out[`.flex-${i}`] = { "flex-wrap": i }
    }

    for (let i of ["center", "start", "end", "baseline", "stretch"]) {
        let res = i;
        if (res == "start" || res == "end") {
            res = "flex-" + res;
        }
        out[`.align-items-${i}`] = { "align-items": res };
        out[`.align-self-${i}`] = { "align-self": res };
    }

    for (let i of ["center", "start", "end", "stretch", "around"]) {
        let res = i;
        if (res == "start" || res == "end")
            res = "flex-" + res;
        else if (res == "around") res = "space-around";

        out[`.align-content-${i}`] = { "align-content": res }
        out[`.justify-content-${i}`] = { "justify-content": res }
    }


    out[`.m-auto`] = { margin: "auto" };
    out[`.ml-auto`] = { "margin-left": "auto" };
    out[`.mr-auto`] = { "margin-right": "auto" };
    out[`.mt-auto`] = { "margin-top": "auto" };
    out[`.mb-auto`] = { "margin-bottom": "auto" };

    out[`.p-auto`] = { padding: "auto" };
    out[`.pl-auto`] = { "padding-left": "auto" };
    out[`.pr-auto`] = { "padding-right": "auto" };
    out[`.pt-auto`] = { "padding-top": "auto" };
    out[`.pb-auto`] = { "padding-bottom": "auto" };

    let spacer = parseFloat(config.variables.spacer);
    for (let i = 0; i <= 5; i++) {
        out[`.m-${i}`] = { margin: spacer * i };
        out[`.ml-${i}`] = { "margin-left": spacer * i };
        out[`.mr-${i}`] = { "margin-right": spacer * i };
        out[`.mt-${i}`] = { "margin-top": spacer * i };
        out[`.mb-${i}`] = { "margin-bottom": spacer * i };

        out[`.p-${i}`] = { padding: spacer * i };
        out[`.pl-${i}`] = { "padding-left": spacer * i };
        out[`.pr-${i}`] = { "padding-right": spacer * i };
        out[`.pt-${i}`] = { "padding-top": spacer * i };
        out[`.pb-${i}`] = { "padding-bottom": spacer * i };
    }

    out[`@media ${config.mediaQueries.mediumAndUp}`] = {};
    out[`@media ${config.mediaQueries.largeAndUp}`] = {};
    out[`@media ${config.mediaQueries.extraLargeAndLarge}`] = {};
    for (let i = 1; i <= 12; i++) {
        out[`.order-${i}`] = { order: i };
        out[`.order-s${i}`] = { order: i };
        out[`@media ${config.mediaQueries.mediumAndUp}`][`.order-m${i}`] = { order: i };
        out[`@media ${config.mediaQueries.largeAndUp}`][`.order-l${i}`] = { order: i };
        out[`@media ${config.mediaQueries.extraLargeAndLarge}`][`.order-xl${i}`] = { order: i };
    }

    return out;
}