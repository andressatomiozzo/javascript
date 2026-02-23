const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const track = document.getElementById("track");

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
