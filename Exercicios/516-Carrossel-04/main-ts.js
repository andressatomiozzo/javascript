"use strict";
const track = document.querySelector("#track");
const imagens = document.querySelectorAll(".imagens");
const dotsContainer = document.querySelector("#dots-container");
if (!track || !dotsContainer)
    throw new Error("Alguma variável não está ligada ao DOM");
let indexAtual = 0;
const indexTotal = Array.from(track.children);
indexTotal.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.ariaLabel = `Ir para a imagem ${i + 1}`;
    dot.classList.add("dots");
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots");
const update = () => {
    dots.forEach((dot, i) => {
        dot.classList.remove("dots-active");
        if (i === indexAtual) {
            dot.classList.add("dots-active");
        }
    });
};
const goTo = (i) => {
    indexAtual = (i + indexTotal.length) % indexTotal.length;
    update();
};
update();
