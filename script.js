var url = window.location.href;

var menu_items = document.getElementsByClassName("menu-item");
for (let i = 0; i < menu_items.length; i++) {
    let link = menu_items[i].children[0].href;
    if (link == url) {
        menu_items[i].classList.add("menu-active");
    }
}