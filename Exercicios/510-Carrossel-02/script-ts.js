"use strict";
const track = document.querySelector("#track");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const dotsCOntainer = document.querySelector("#dots-container");
if (!track || !prevBtn || !nextBtn || !dotsCOntainer)
    throw new Error("Alguma variável não está ligada ao DOM");
let indexAtual = 0;
const indexTotal = Array.from(track.children);
indexTotal.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.ariaLabel = `Ir para a imagem ${i + 1}`;
    dot.classList.add("dots");
    dot.addEventListener("click", () => goTo(i));
    dotsCOntainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots");
