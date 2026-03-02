const track = document.querySelector<HTMLDivElement>("#track");
const prevBtn = document.querySelector<HTMLButtonElement>(".prev");
const nextBtn = document.querySelector<HTMLButtonElement>(".next");
const dotsContainer = document.querySelector<HTMLDivElement>("#dots-container");

if (!track || !prevBtn || !nextBtn || !dotsContainer) throw new Error("Alguma variável não está ligado ao DOM");

let indexAtual = 0;
const indexTotal = Array.from(track.children);

// ? ------------------- Criei as bolinhas ----------------------

indexTotal.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.classList.add("dots");
  dot.ariaLabel = `Ir para slide ${i +1}`;
  dotsContainer.appendChild(dot);
  dot.addEventListener("click", () => goTo(i));
});

// ? ------------------- Selecionei as bolinhas ----------------------

const dots = document.querySelectorAll<HTMLButtonElement>(".dots");

// ? ------------------- Bolinha ativa ou não ----------------------

const update = () => {
  track.style.transform = `translateX(-${indexAtual * 100}%)`;
  
  dots.forEach((dot, i) => {
    dot.classList.remove("dots-active");
    if (i === indexAtual){
      dot.classList.add("dots-active");
    }
  });
};

const goTo = (i: number) => {
  indexAtual = (i + indexTotal.length) % indexTotal.length;
  update();
}

nextBtn.addEventListener("click", () => goTo(indexAtual + 1));
prevBtn.addEventListener("click", () => goTo(indexAtual - 1));

update();