const hamburgerIcon = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const mainContent = document.querySelector(".main-content");
const h3 = document.querySelector(".go-to-top");
const nav = document.querySelector("nav");

hamburgerIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContent.classList.add("menu-open");
});

nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});

h3.addEventListener("click", () => {
  mainContent.scrollTo(0, 0);
});

window.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});
