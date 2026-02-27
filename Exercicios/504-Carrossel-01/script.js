"use strict";
const track = document.getElementById("track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let slideAtual = 0;
const numTotalDeSlides = 4;
const update = () => {
    if (!track)
        return;
    track.style.transform = `translateX(-${slideAtual * 100}%)`;
};
if (!prevBtn || !nextBtn)
    throw new Error("Botões faltanto");
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
