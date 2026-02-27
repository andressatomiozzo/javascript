const track = document.querySelector<HTMLDivElement>(".track");
const prevBtn = document.querySelector<HTMLButtonElement>(".prev");
const nextBtn = document.querySelector<HTMLButtonElement>(".next");
const dotsContainer = document.querySelector<HTMLDivElement>(".dots-container");

if (!track || !prevBtn || !nextBtn || !dotsContainer) throw new Error("Algum elemento não está ligado ao DOM");

const slides = Array.from(track.children);
let indexAtual = 0;

//?--------------------  criar as bolinhas --------------------

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.classList.add("dots", `dot${i}`);
  dot.ariaLabel = `Ir para slide ${i + 1}`;
  dot.addEventListener("click", () => goTo(i));
  dotsContainer.appendChild(dot);
});

//?--------------------  selecionar todas as bolinhas  --------------------

const dots = document.querySelectorAll<HTMLButtonElement>(".dots");

//?--------------------  remover a class active de todas as bolinhas e adicionar apenas a que corresponder ao index atual  --------------------

const update = () => {
  track.style.transform = `translateX(-${indexAtual * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.remove("dots-active");
    if (i === indexAtual) {
      dot.classList.add("dots-active");
    }
  });
};

//?--------------------  função para atualizar o indice  --------------------

const goTo = (i: number) => {
  indexAtual = (i + slides.length) % slides.length; // loop infinito
  update();
};

prevBtn.addEventListener("click", () => {
  goTo(indexAtual - 1);
  update();
});

nextBtn.addEventListener("click", () => {
  goTo(indexAtual + 1);
  update();
});

update();