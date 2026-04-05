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
window.addEventListener("load", revealOnScroll); // trigger on load too

// ===== HAMBURGER MENU =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ===== CLOSE MENU ON CLICK (MOBILE) =====
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

// ===== OPTIONAL BUTTON ALERT (SAFE) =====
const contactBtn = document.getElementById("contactBtn");

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    alert("Thanks for reaching out! Jeevitha will contact you soon 😊");
  });
}

// ===== DEBUG =====
console.log("🚀 Portfolio loaded successfully!");
    
