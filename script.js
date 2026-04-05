// ===== WAIT FOR PAGE LOAD =====
document.addEventListener("DOMContentLoaded", () => {

  // ===== TYPING EFFECT =====
  const text = "Hello 👋 Welcome to my Portfolio!";
  let index = 0;
  const typingElement = document.getElementById("typing-text");

  function typeEffect() {
    if (!typingElement) return;

    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 40);
    }
  }

  // start typing after slight delay
  setTimeout(typeEffect, 300);


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


  // ===== DEBUG =====
  console.log("🚀 Portfolio fully loaded!");
});
