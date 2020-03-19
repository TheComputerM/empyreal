import {c, E} from "./global";

export default function Snackbar({html = "", classes = "", dismiss = 5000, complete = ()=>{}}) {
    let $snackbar = c(`<div class="snackbar ${classes}" />`);
    $snackbar.html(html);
    c("body").append($snackbar);
    $snackbar.css("opacity", 1);
    let topOffset = 15;

    let $snackbars = c(".snackbar");

    for (let i = 0; i < $snackbars.length; i++) {
        let $node = c($snackbars[$snackbars.length - i - 1]);
        let height = $node.outerHeight();
        let offset = 15;
        $node.css("top", topOffset + "px");
        topOffset += height + offset;
    }

    setTimeout(()=>{
        let width = $snackbar.outerWidth() + 20;
        $snackbar.css({
            right: `-${width}px`,
            opacity: 0
        });
        complete();
        setTimeout(()=>{$snackbar.remove();}, 500);
    }, dismiss);
}