const track = document.querySelector<HTMLDivElement>(".track");
const prevBtn = document.querySelector<HTMLButtonElement>(".prev");
const nextBtn = document.querySelector<HTMLButtonElement>(".next");

if (!prevBtn || !nextBtn || !track) throw new Error("Algum elemento não está conectado ao DOM");

let indexAtual: number = 0;
const indexTotal: number = 4;

const update = () => {
  track.style.transform = `translateX(-${indexAtual * 100}%)`;
};

prevBtn.addEventListener("click", () => {
  indexAtual = (indexAtual + indexTotal - 1) % indexTotal;
  update();
});

nextBtn.addEventListener("click", () => {
  indexAtual = (indexAtual + 1) % indexTotal;
  update();
});
