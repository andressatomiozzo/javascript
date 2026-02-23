const carrossel = document.getElementById("carrossel");
const viewport = document.getElementById("viewport");
const track = document.getElementById("track");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideAtual = 0;
const numeroDeSlides = 4;

let update = () => {
  if (slideAtual % numeroDeSlides === 0) {
    slideAtual = 0;
  } else if (slideAtual < 0){
    slideAtual = 3;
  }
  track.style.transform = `translateX(-${slideAtual * 100}%)`;
};

prevBtn.addEventListener("click", () => {
  slideAtual--;
  console.log(slideAtual);
  update();
});

nextBtn.addEventListener("click", () => {
  slideAtual++;
  console.log(slideAtual);
  update();
});
