const track = document.getElementById("track") as HTMLDivElement;
const prevBtn = document.querySelector<HTMLButtonElement>(".prev");
const nextBtn = document.querySelector<HTMLButtonElement>(".next");

let slideAtual: number = 0;
const numTotalDeSlides: number = 4;

const update = () => {
  if (!track) return;
  track.style.transform = `translateX(-${slideAtual * 100}%)`;
};

if (!prevBtn || !nextBtn) throw new Error("Botões faltanto");

prevBtn.addEventListener("click", () => {
  slideAtual = (slideAtual + numTotalDeSlides - 1) % numTotalDeSlides;
  console.log(slideAtual);
  update();
});

nextBtn.addEventListener("click", () => {
  slideAtual = (slideAtual + 1) % numTotalDeSlides;
  console.log(slideAtual);
  update();
});
