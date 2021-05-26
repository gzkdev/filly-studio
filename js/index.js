const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
});

const menu = document.querySelector(".menu-box");
const secondaryMenu = document.querySelector(".side-menu");

menu.addEventListener("click", (e) => {
    menu.classList.toggle("active");
    secondaryMenu.classList.toggle("active");
});