"use strict";
const track = document.querySelector("#track");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const dotsContainer = document.querySelector("#dots-container");
if (!track || !prevBtn || !nextBtn || !dotsContainer)
    throw new Error("Alguma variável não está ligada ao DOM");
let indexAtual = 0;
const indexTotal = Array.from(track.children);
let autoplayId;
indexTotal.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.ariaLabel = `Ir para a imagem ${i + 1}`;
    dot.classList.add("dots");
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
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
const startAutoplay = () => {
    clearInterval(autoplayId);
    autoplayId = setInterval(() => goTo(indexAtual + 1), 3000);
};
const stopAutoplay = () => {
    clearInterval(autoplayId);
};
prevBtn.addEventListener("click", () => {
    goTo(indexAtual - 1);
    stopAutoplay();
});
nextBtn.addEventListener("click", () => {
    goTo(indexAtual + 1);
    stopAutoplay();
});
update();
