/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuToggle.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

/* Close menu after clicking link */

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");

  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");

  if (isLight) {
    localStorage.setItem("theme", "light");

    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    localStorage.setItem("theme", "dark");

    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

/* =========================
   TYPING EFFECT
========================= */

const typingText = document.getElementById("typingText");

const roles = [
  "BCA Student",
  "Fresher Web Developer",
  "Frontend Developer",
  "JavaScript Learner",
  "Python Learner"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    typingText.textContent = currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;

      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

/* =========================
   SCROLL TO TOP
========================= */

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");

    return;
  }

  /*
        This demo form doesn't have a backend.

        For now, clicking Send Message opens
        the user's email client.
    */

  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  );

  window.location.href = `mailto:ankitparmanik65@gmail.com?subject=${subject}&body=${body}`;
});

/* =========================
   REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
  ".section-heading, .about-text, .info-card, .skill-card, .project-card, .education-card, .contact-info, .contact-form",
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

revealElements.forEach((element) => {
  element.style.opacity = "0";

  element.style.transform = "translateY(25px)";

  element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

  observer.observe(element);
});

/* =========================
   FOOTER
========================= */

document.getElementById("year").textContent = new Date().getFullYear();