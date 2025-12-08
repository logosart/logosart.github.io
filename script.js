// alternar modo dark
const btn = document.getElementById("darkModeBtn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// animação de cards ao aparecer
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => observer.observe(card));
