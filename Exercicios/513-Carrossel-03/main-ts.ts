const track = document.querySelector<HTMLDivElement>("#track");
const prevBtn = document.querySelector<HTMLButtonElement>("#prev-btn");
const nextBtn = document.querySelector<HTMLButtonElement>("#next-btn");
const dotsContainer = document.querySelector<HTMLDivElement>("#dots-container");

if (!track || !prevBtn || !nextBtn || !dotsContainer) throw new Error("Alguma variável não está ligada ao DOM");

let indexAtual = 0;
const indexTotal = Array.from(track.children);
let autoplayId:number;

indexTotal.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.ariaLabel = `Ir para a imagem ${i + 1}`;
  dot.classList.add("dots");
  dot.addEventListener("click", () => goTo(i));

  dotsContainer.appendChild(dot);
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

const startAutoplay = () => {
  clearInterval(autoplayId);
  autoplayId = setInterval(() => goTo(indexAtual + 1), 3000)
}

const stopAutoplay = () => {
  clearInterval(autoplayId)
}

prevBtn.addEventListener("click", () => {
  goTo(indexAtual - 1);
  stopAutoplay();
});
nextBtn.addEventListener("click", () => {
  goTo(indexAtual + 1);
  stopAutoplay();
});



update();
