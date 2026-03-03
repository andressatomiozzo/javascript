"use strict";
const track = document.querySelector(".track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots-container");
if (!track || !prevBtn || !nextBtn || !dotsContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
const slides = Array.from(track.children);
let indiceAtual = 0;
// ? ------------- Criar as bolinhas ----------------
slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("dots");
    dot.ariaLabel = `Ir para a imagem ${i + 1}`;
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => goTo(i));
});
// ! =============== Função para o índice mudar =================
const goTo = (i) => {
    indiceAtual = (i + slides.length) % slides.length;
    update();
};
// ? ============= Função que passa o slide ============
const dots = document.querySelectorAll(".dots");
const update = () => {
    track.style.transform = `translateX(-${indiceAtual * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.remove("dots-active");
        if (i === indiceAtual) {
            dot.classList.add("dots-active");
        }
    });
};
// ! ------------------- Interação com os botões -----------------
prevBtn.addEventListener("click", () => goTo(indiceAtual - 1));
nextBtn.addEventListener("click", () => goTo(indiceAtual + 1));
update();
