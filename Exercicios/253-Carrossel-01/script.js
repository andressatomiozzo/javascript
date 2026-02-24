const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideAtual = 0;
const numeroDeSlides = 4;

const update = () => {
  slides.style.transform = `translateX(-${slideAtual * 100}%)`;
};

nextBtn.addEventListener("click", () => {
  slideAtual = (slideAtual + 1) % numeroDeSlides;
  update();
});

prevBtn.addEventListener("click", () => {
  slideAtual = (slideAtual - 1 + numeroDeSlides) % numeroDeSlides;
  update();
});
