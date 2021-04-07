/*--- These are the document objects we will use for events ---*/
var mobileMenu = document.querySelector("#mobile-menu");
const navbarMenu = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

function activateMobileMenu() {
  mobileMenu.classList.toggle("isActive");
  navbarMenu.classList.toggle("isActive");
}
//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    mobileMenu.classList.toggle("is-active");
    navbarMenu.classList.remove("active");
  }
};

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 310) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1050) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1870) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

/*-- These need to come after the function they are calling --*/
mobileMenu.addEventListener("click", activateMobileMenu);
navbarMenu.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
