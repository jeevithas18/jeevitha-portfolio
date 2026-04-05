// ===== WAIT FOR PAGE LOAD =====
document.addEventListener("DOMContentLoaded", () => {

  // ===== SCROLL REVEAL =====
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load


  // ===== HAMBURGER MENU =====
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }


  // ===== CLOSE MENU AFTER CLICK (MOBILE) =====
  document.querySelectorAll("#nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });


  // ===== SMOOTH SCROLL =====
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // ===== OPTIONAL: SMALL ENTRY ANIMATION =====
  const home = document.getElementById("home");
  if (home) {
    home.style.opacity = "1";
  }


  // ===== DEBUG =====
  console.log("🚀 Portfolio running perfectly!");
});
