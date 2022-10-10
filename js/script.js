// NAVIGATION MENU FUNCTIONS
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const lineMenu = document.querySelectorAll(".line-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  lineMenu.forEach((n) => n.style.background = "#3f3f46");
}


const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  wrapperMenu.classList.toggle('open');
}


// OPEN AND CLOSE WRAPPERMENU ON LINK CLICK
var wrapperMenu = document.querySelector('.wrapper-menu');
  wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open'); 
})


// NAVIGATION ON SCROLL
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");
var navbar = document.getElementById("navbar");
var navlogo = document.getElementById("nav-logo");

window.onscroll = () => {
  if (window.scrollY > 20) {
    navbar.style.backgroundColor = "#fff";
    navbar.style.boxShadow = "1px 3px 5px rgba(0, 0, 0, 0.10)";
    navbar.style.height = "4.375rem";
    navbar.style.color = "#3f3f46";
    navlogo.style.color = "#3f3f46";
    lineMenu.forEach((n) => n.style.background = "#3f3f46");
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
    navbar.style.height = "5rem";
    navbar.style.color = "#fff";
    navlogo.style.color = "#fff";
    lineMenu.forEach((n) => n.style.background = "#fff");
  }
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 250;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};


// ---------- REVEAL ELEMENTS ON SCROLL ----------
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();