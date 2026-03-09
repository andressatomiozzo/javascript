const track = document.querySelector<HTMLDivElement>("#track");
const prevBtn = document.querySelector<HTMLButtonElement>("#prev-btn");
const nextBtn = document.querySelector<HTMLButtonElement>("#next-btn");
const dotsContainer = document.querySelector<HTMLDivElement>("#dots-container");

if (!track || !prevBtn || !nextBtn || !dotsContainer) throw new Error("Algum elemento não está ligado ao DOM");

let indexAtual = 0;
const indexTotal = Array.from(track.children);

indexTotal.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.classList.add("dots");
  dot.ariaLabel = `Ir para a imagem ${i + 1}`;
  dot.addEventListener("click", () => goTo(i));

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll<HTMLButtonElement>(".dots");

const update = () => {
  track.style.transform = `translateX(-${indexAtual * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.remove("dots-active");
    if (i === indexAtual) dot.classList.add("dots-active");
  });
};

const goTo = (o: number) => {
  indexAtual = (o + indexTotal.length) % indexTotal.length;
  update();
};

prevBtn.addEventListener("click", () => goTo(indexAtual - 1));
nextBtn.addEventListener("click", () => goTo(indexAtual + 1));

update();
