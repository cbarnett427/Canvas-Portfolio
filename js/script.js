const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


// On Scroll
// window.onscroll = function() {scrollFunction()};
 
//   function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
//       document.getElementById("navbar").style.background = "#fff";
//       document.getElementById("nav-menu").style.color = "#3f3f46";
//       document.getElementById("img-logo").style.color = "#3f3f46";
//     } else {
    
//       document.getElementById("navbar").style.background = "none";
//       document.getElementById("nav-menu").style.color = "#fff";
//       document.getElementById("img-logo").style.color = "#fff";
//     }
//   }