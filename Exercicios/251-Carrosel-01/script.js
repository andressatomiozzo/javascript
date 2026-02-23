const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slides = document.querySelector(".slides");

let slideAtual = 0;
const numeroDeSlides = 4

const update = () => {
  if (slideAtual % numeroDeSlides === 0) {
    slideAtual = 0;
  }
  slides.style.transform = `translateX(-${slideAtual * 100}%)`;
};

prevBtn.addEventListener("click", () => {
  slideAtual -= 1;
  console.log(slideAtual);
  update();
});

nextBtn.addEventListener("click", () => {
  slideAtual += 1;
  console.log(slideAtual);
  update();
});
