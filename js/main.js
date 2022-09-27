// Hamburger Menu
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


// Navbar Style on Scroll
// window.onscroll = function() {scrollFunction()};
 
//   function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
//       document.getElementById("navbar").style.background = "#fff";
//       document.getElementById("nav-menu").style.color = "#3f3f46";
//       document.getElementById("nav-logo").style.color = "#3f3f46";
//     } else {
    
//       document.getElementById("navbar").style.background = "none";
//       document.getElementById("nav-menu").style.color = "#fff";
//       document.getElementById("nav-logo").style.color = "#fff";
//     }
//   }


// Reveal Elements on Scroll
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  // Navbar Style on Scroll
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#fff";
    document.getElementById("nav-menu").style.color = "#3f3f46";
    document.getElementById("nav-logo").style.color = "#3f3f46";
  } else {
  
    document.getElementById("navbar").style.background = "none";
    document.getElementById("nav-menu").style.color = "#fff";
    document.getElementById("nav-logo").style.color = "#fff";
  }
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 20;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};


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