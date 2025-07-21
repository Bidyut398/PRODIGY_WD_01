// Scroll Logic: Hide Logo Only, Not Entire Navbar
let lastScrollTop = 0;
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll <= 0) {
    logo.classList.remove("logo-hidden");
    return;
  }

  if (currentScroll > lastScrollTop) {
    // Scrolling Down
    logo.classList.add("logo-hidden");
  } else {
    // Scrolling Up
    logo.classList.remove("logo-hidden");
  }

  lastScrollTop = currentScroll;
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.setAttribute("aria-expanded", !expanded);
});
