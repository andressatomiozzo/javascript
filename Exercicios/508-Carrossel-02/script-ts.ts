const track = document.querySelector<HTMLDivElement>(".track");
const prevBtn = document.querySelector<HTMLButtonElement>(".prev");
const nextBtn = document.querySelector<HTMLButtonElement>(".next");
const dotsContainer = document.querySelector<HTMLDivElement>(".dots-container");

if (!track||!prevBtn||!nextBtn||!dotsContainer) throw new Error ("Algum elemento não está ligado ao DOM");

const slides = Array.from(track.children);

// ? ------------- Criar as bolinhas ----------------

slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dots");
  dot.ariaLabel = `Ir para a imagem ${i+1}`
  dotsContainer.appendChild(dot);

});