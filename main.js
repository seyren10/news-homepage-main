const navToggle = document.querySelector(".mobile-nav-toggle");
const mainNav = document.querySelector("#primary-navigation");

navToggle.addEventListener("click", (e) => {
  if (navToggle.getAttribute("aria-expanded") == "false") {
    navToggle.setAttribute('aria-expanded', true)
    mainNav.setAttribute('aria-hidden',false)
  }else {
    navToggle.setAttribute('aria-expanded', false)
    mainNav.setAttribute('aria-hidden',true)


  }
});
