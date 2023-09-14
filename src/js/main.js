// handle show and hide slide bar
const slideBar = document.querySelector(".slide-bar");
const slideShow = document.querySelector("nav .nav__slide > .slide-open");
const slideClose = document.querySelector("nav .nav__slide > .slide-close");
slideShow.addEventListener("click", () => {
   slideBar.classList.toggle("show");
   slideShow.classList.toggle("disable");
   slideClose.classList.toggle("disable");
});
slideClose.addEventListener("click", () => {
   slideBar.classList.toggle("show");
   slideShow.classList.toggle("disable");
   slideClose.classList.toggle("disable");
});
