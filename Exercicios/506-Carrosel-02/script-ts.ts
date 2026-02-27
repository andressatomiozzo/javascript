const track = document.querySelector<HTMLDivElement>(".track");
const prevBtn = document.querySelector<HTMLButtonElement>(".prev");
const nextBtn = document.querySelector<HTMLButtonElement>(".next");

if (!track || !prevBtn || !nextBtn) throw new Error("Algum elemento não está ligado ao DOM");

const slides = Array.from(track.children);
let indexAtual = 0;

const update = () => {
  track.style.transform = `translateX(-${indexAtual * 100}%)`;
};

prevBtn.addEventListener("click", () => {
  indexAtual = (indexAtual + slides.length - 1) % slides.length;
  update();
});

nextBtn.addEventListener("click", () => {
  indexAtual = (indexAtual + 1) % slides.length;
  update();
});
