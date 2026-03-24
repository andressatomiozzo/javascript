"use strict";
const carrossel = document.querySelector(".carrossel");
const carrosselImg = document.querySelectorAll(".carrossel-img");
const dotsContainer = document.querySelector(".dots-container");
if (!carrossel || !carrosselImg || !dotsContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
let indexAtual = 0;
const indexTotal = Array.from(carrossel.children);
indexTotal.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    dot.ariaLabel = `Ir para a imagem ${i + 1}`;
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");
const update = () => {
    dots.forEach((dot, i) => {
        dot.classList.remove("dot-active");
        if (i === indexAtual) {
            dot.classList.add("dot-active");
        }
    });
};
const goTo = (index) => {
    indexAtual = (index + indexTotal.length) % indexTotal.length;
    update();
};
