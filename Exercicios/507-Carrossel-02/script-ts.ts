const track = document.querySelector<HTMLDivElement>("#track");
const prevBtn = document.querySelector<HTMLButtonElement>(".prev");
const nextBtn = document.querySelector<HTMLButtonElement>(".next");
const dotsContainer = document.querySelector<HTMLDivElement>("#dots-container");

if (!track || !prevBtn || !nextBtn || !dotsContainer) throw new Error("Alguma variável não está ligado ao DOM");

let indexAtual = 0;
const indexTotal = Array.from(track.children);

indexTotal.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.classList.add("dots");
  dot.ariaLabel = `Ir para slide ${i}`;
  dotsContainer.appendChild(dot);

  goTo(i);
});

const goTo = (i: number) => {
  track.style.transform = `translateX(-${i * 100}%)`;
};
