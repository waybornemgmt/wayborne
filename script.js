const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(
  ".intro-grid, .split-panel, .section-heading-row, .step-card, .statement-wrap, .about-grid, .form-panel, .contact-wrap"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealTargets.forEach((el) => observer.observe(el));

const creatorForm = document.getElementById("creatorForm");
const brandForm = document.getElementById("brandForm");

creatorForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  alert(
    "Creator application received. The form is currently in demo mode — we'll connect it to your email next."
  );
});

brandForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  alert(
    "Brand inquiry received. The form is currently in demo mode — we'll connect it to your email next."
  );
});
