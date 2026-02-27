"use strict";
const track = document.querySelector(".track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
if (!prevBtn || !nextBtn || !track)
    throw new Error("Algum elemento não está conectado ao DOM");
let indexAtual = 0;
const indexTotal = 4;
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
