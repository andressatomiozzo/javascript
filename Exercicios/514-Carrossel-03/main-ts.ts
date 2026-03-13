const carrosselContainer = document.querySelector<HTMLDivElement>("#carrossel-container");
const track = document.querySelector<HTMLDivElement>("#track");
const prevBtn = document.querySelector<HTMLButtonElement>("#prev-btn");
const nextBtn = document.querySelector<HTMLButtonElement>("#next-btn");
const dotsCOntainer = document.querySelector<HTMLDivElement>("#dots-container");

if (!carrosselContainer || !track || !prevBtn || !nextBtn || !dotsCOntainer) throw new Error("Alguma variável não está ligada ao DOM");

let indexAtual = 0;
const indexTotal = Array.from(track.children);
let autoplayId: number;

indexTotal.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.ariaLabel = `Ir para a imagem ${i + 1}`;
  dot.classList.add("dots");
  dot.addEventListener("click", () => goTo(i));

  dotsCOntainer.appendChild(dot);
});

const dots = document.querySelectorAll<HTMLButtonElement>(".dots");

const update = () => {
  track.style.transform = `translateX(-${indexAtual * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.remove("dots-active");
    if (i === indexAtual) {
      dot.classList.add("dots-active");
    }
  });
};

const goTo = (i: number) => {
  indexAtual = (i + indexTotal.length) % indexTotal.length;
  update();
};

prevBtn.addEventListener("click", () => goTo(indexAtual - 1));
nextBtn.addEventListener("click", () => goTo(indexAtual + 1));

const startAutoplay = () => {
  clearInterval(autoplayId);
  autoplayId = setInterval(() => goTo(indexAtual + 1), 3000);
};

const stopAutoplay = () => clearInterval(autoplayId);

carrosselContainer.addEventListener("mouseenter", () => stopAutoplay());
carrosselContainer.addEventListener("mouseleave", () => startAutoplay());

startAutoplay();
update();
