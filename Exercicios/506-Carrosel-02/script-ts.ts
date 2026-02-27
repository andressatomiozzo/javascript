const track = document.querySelector<HTMLDivElement>(".track");
const prevBtn = document.querySelector<HTMLButtonElement>(".prev");
const nextBtn = document.querySelector<HTMLButtonElement>(".next");

if (!track || !prevBtn || !nextBtn) throw new Error("Algum elemento não está ligado ao DOM");

let indexAtual = 0;

const update = () => {
  track.style.transform = `translateX(-${indexAtual * 100}%)`;
};
