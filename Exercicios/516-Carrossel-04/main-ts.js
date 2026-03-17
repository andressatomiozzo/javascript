"use strict";
const carrossel = document.querySelector("#carrossel");
const imagens = document.querySelectorAll(".imagens");
const dotsContainer = document.querySelector("#dots-container");
if (!carrossel || !imagens || !dotsContainer)
    throw new Error("Alguma variável não está ligada ao DOM");
let indexAtual = 0;
const indexTotal = Array.from(carrossel.children);
indexTotal.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.ariaLabel = `Ir para a imagem ${i + 1}`;
    dot.classList.add("dots");
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots");
const update = () => {
    imagens.forEach((img, i) => {
        img.classList.remove("prev", "active", "next");
        if (i === (indexAtual + indexTotal.length - 1) % indexTotal.length) {
            img.classList.add("prev");
        }
        else if (i === indexAtual) {
            img.classList.add("active");
        }
        else if (i === (indexAtual + indexTotal.length + 1) % indexTotal.length) {
            img.classList.add("next");
        }
    });
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
