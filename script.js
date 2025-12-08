/* ------- DARK MODE ------- */
const darkModeBtn = document.createElement("button");
darkModeBtn.id = "darkModeBtn";
darkModeBtn.innerHTML = "🌙";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.innerHTML = "☀️";
  } else {
    darkModeBtn.innerHTML = "🌙";
  }
});

/* ------- ANIMAÇÃO DOS CARDS AO APARECER ------- */
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach((card) => observer.observe(card));

/* ------- ANIMAÇÃO DE SCROLL SUAVE (já nativa com CSS) ------- */
/* Mas deixo JS caso queira personalizar futuramente */
