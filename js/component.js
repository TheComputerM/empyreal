export default class EmpyrealComponent {
    constructor (el, options){
        if (typeof el === "string") {
            this.el = document.querySelector(el);
        } else {
            this.el = el;
        }
    }
}