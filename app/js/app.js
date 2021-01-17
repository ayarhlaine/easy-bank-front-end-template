// Hamburger Menu
const body = document.body;
const hamburgerMenu = document.querySelector("#hamburgerMenu");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
hamburgerMenu.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        body.classList.remove("no_scroll");
        fadeElements.forEach((fadeElement) => {
            fadeElement.classList.add("fade-out");
            fadeElement.classList.remove("fade-in");
        });
    } else {
        header.classList.add("open");
        body.classList.add("no_scroll");
        fadeElements.forEach((fadeElement) => {
            fadeElement.classList.add("fade-in");
            fadeElement.classList.remove("fade-out");
        });
    }
});
