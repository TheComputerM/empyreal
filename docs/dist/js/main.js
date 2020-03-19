new empy.Autocomplete("#components-search", {
    data: [
        "Modal","Tabs","Dropdown","Cards","Sidenav","Collapsible","Tooltips",
        "Carousel","Pushpin","ScrollSpy","Lightbox","Navbar", "Buttons","Helpers","Shadow","Grid",
        "Table","Color","Animations","SmoothScroll","Progress","Typography", "Icons", 
        "Images", "Lists", "Masks","Text Inputs", "Select", "Radio Buttons", 
        {name: "Checkboxes", alias: ["Switch"]}, "Chips", "Pickers", "Autocomplete"
    ],
    dropdown: {
        onItemClick: function(dropdown, item) {
            var link = item.innerText.toLowerCase().replace(/ /g, "_");
            window.location.href = "http://" + window.location.host + "/" + link + ".html";
        }
    }
});
if (document.querySelector(".navigator")) {new empy.Pushpin(document.querySelector(".navigator"),{offset:50});new empy.ScrollSpy(document.querySelectorAll(".scrollspy"),{})}
function insertAfter(e,r){r.parentNode.insertBefore(e,r.nextSibling)}new empy.Sidenav(document.querySelector("#main-sidenav"),{width:"350px"}),new empy.Collapsible(document.querySelector("#main-collapsible"),{accordion:!0}),document.querySelectorAll(".scrollspy").forEach(function(e){var r=document.createElement("a");r.innerText=e.getAttribute("data-name"),r.href="#"+e.getAttribute("id"),r.className="nav-item smoothscroll",document.querySelector(".navigator").append(r)}),document.querySelectorAll("[data-syntax='html']").forEach(function(e){var r=Prism.plugins.NormalizeWhitespace.normalize(e.innerHTML),n=Prism.highlight(r,Prism.languages.markup),t=document.createElement("pre"),a=document.createElement("code");t.classList+=" language-markup",a.classList+=" language-markup",a.innerHTML=n,t.style.marginTop="32px",t.appendChild(a),insertAfter(t,e)}),document.querySelectorAll("code.prism-js").forEach(function(e){var r=Prism.plugins.NormalizeWhitespace.normalize(e.innerHTML,{}),n=Prism.highlight(r,Prism.languages.javascript),t=document.createElement("pre"),a=document.createElement("code");t.classList+=" language-js",a.classList+=" language-js",a.innerHTML=n,t.appendChild(a),insertAfter(t,e),e.remove()}),document.querySelectorAll("code.prism-css").forEach(function(e){var r=Prism.plugins.NormalizeWhitespace.normalize(e.innerHTML,{}),n=Prism.highlight(r,Prism.languages.css),t=document.createElement("pre"),a=document.createElement("code");t.classList+=" language-css",a.classList+=" language-css",a.innerHTML=n,t.appendChild(a),insertAfter(t,e),e.remove()}),document.querySelectorAll("code.prism-html").forEach(function(e){var r=Prism.plugins.NormalizeWhitespace.normalize(e.innerHTML,{}),n=Prism.highlight(r,Prism.languages.markup),t=document.createElement("pre"),a=document.createElement("code");t.classList+=" language-markup",a.classList+=" language-markup",a.innerHTML=n,t.appendChild(a),insertAfter(t,e),e.remove()});