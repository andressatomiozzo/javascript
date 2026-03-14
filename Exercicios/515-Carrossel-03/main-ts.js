"use strict";
const carrosselContainer = document.querySelector("#carrossel-container");
const track = document.querySelector("#track");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const dotsCOntainer = document.querySelector("#dots-container");
if (!carrosselContainer || !track || !prevBtn || !nextBtn || !dotsCOntainer)
    throw new Error("Alguma variável não está ligada ao DOM");
let indexAtual = 0;
const indexTotal = Array.from(track.children);
let autoplayID;
indexTotal.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.ariaLabel = `Ir para a imagem ${i + 1}`;
    dot.classList.add("dots");
    dot.addEventListener("click", () => goTo(i));
    dotsCOntainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots");
const update = () => {
    track.style.transform = `translateX(-${indexAtual * 100}%)`;
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
prevBtn.addEventListener("click", () => goTo(indexAtual - 1));
nextBtn.addEventListener("click", () => goTo(indexAtual + 1));
const stopAutoplay = () => clearInterval(autoplayID);
const startAutoplay = () => {
    clearInterval(autoplayID);
    autoplayID = setInterval(() => goTo(indexAtual + 1), 3000);
};
carrosselContainer.addEventListener("mouseenter", () => stopAutoplay());
carrosselContainer.addEventListener("mouseleave", () => startAutoplay());
startAutoplay();
update();
