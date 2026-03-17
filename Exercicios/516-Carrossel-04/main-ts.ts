const carrossel = document.querySelector<HTMLDivElement>("#carrossel");
const imagens = document.querySelectorAll<HTMLImageElement>(".imagens");
const dotsContainer = document.querySelector<HTMLDivElement>("#dots-container");

if (!carrossel || !imagens || !dotsContainer) throw new Error("Alguma variável não está ligada ao DOM");

let indexAtual = 0;
const indexTotal = Array.from(carrossel.children);

indexTotal.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.ariaLabel = `Ir para a imagem ${i + 1}`;
  dot.classList.add("dots");
  dot.addEventListener("click", () => goTo(i));

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll<HTMLButtonElement>(".dots");

const updateSlides = () => {
  imagens.forEach((img, i) => {
    img.classList.remove("prev", "active", "next", "hidden");

    const prevIndex = (indexAtual - 1 + indexTotal.length) % indexTotal.length;
    const nextIndex = (indexAtual + 1) % indexTotal.length;

    if (i === prevIndex) {
      img.classList.add("prev");
      img.addEventListener("click", () => goTo(i));
    } else if (i === indexAtual) {
      img.classList.add("active");
    } else if (i === nextIndex) {
      img.classList.add("next");
      img.addEventListener("click", () => goTo(i));
    } else {
      img.classList.add("hidden");
    }
  });
};

const updateDots = () => {
  dots.forEach((dot, i) => {
    dot.classList.remove("dots-active");
    if (i === indexAtual) {
      dot.classList.add("dots-active");
    }
  });
};

const update = () => {
  updateSlides();
  updateDots();
};

const goTo = (i: number) => {
  indexAtual = (i + indexTotal.length) % indexTotal.length;
  update();
};

update();
