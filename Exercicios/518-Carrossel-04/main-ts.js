"use strict";
const carrossel = document.querySelector(".carrossel");
const carrosselImg = document.querySelectorAll(".carrossel-img");
const dotsContainer = document.querySelector(".dots-container");
if (!carrossel || !carrosselImg || !dotsContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
let indexAtual = 0;
const indexTotal = carrosselImg.length;
carrosselImg.forEach((img, i) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    dot.ariaLabel = `Ir para a imagem ${i + 1}`;
    dot.addEventListener("click", () => goTo(i));
    img.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");
const updateSlides = () => {
    carrosselImg.forEach((img, i) => {
        img.classList.remove("prev", "active", "next", "hidden");
        if (i === (indexAtual - 1 + indexTotal) % indexTotal) {
            img.classList.add("prev");
        }
        else if (i === indexAtual) {
            img.classList.add("active");
        }
        else if (i === (indexAtual + 1 + indexTotal) % indexTotal) {
            img.classList.add("next");
        }
        else {
            img.classList.add("hidden");
        }
    });
};
const updateDots = () => {
    dots.forEach((dot, i) => {
        dot.classList.remove("dot-active");
        if (i === indexAtual) {
            dot.classList.add("dot-active");
        }
    });
};
const update = () => {
    updateDots();
    updateSlides();
};
const goTo = (index) => {
    indexAtual = (index + indexTotal) % indexTotal;
    update();
};
update();
