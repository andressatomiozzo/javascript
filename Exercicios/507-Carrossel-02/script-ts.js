"use strict";
const track = document.querySelector("#track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector("#dots-container");
if (!track || !prevBtn || !nextBtn || !dotsContainer)
    throw new Error("Alguma variável não está ligado ao DOM");
let indexAtual = 0;
const indexTotal = Array.from(track.children);
const goTo = (i) => {
    track.style.transform = `translateX(-${i * 100}%)`;
};
indexTotal.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("dots");
    dot.ariaLabel = `Ir para slide ${i}`;
    dotsContainer.appendChild(dot);
    goTo(i);
});
nextBtn.addEventListener("click", () => {
    indexAtual = (indexAtual + 1) % indexTotal.length;
    goTo(indexAtual);
    console.log(indexAtual);
});
prevBtn.addEventListener("click", () => {
    indexAtual = (indexAtual + indexTotal.length - 1) % indexTotal.length;
    goTo(indexAtual);
    console.log(indexAtual);
});
