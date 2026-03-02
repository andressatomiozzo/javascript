"use strict";
const containerCaixas = document.querySelector("#containerCaixas");
const adicionarBtn = document.querySelector("#adicionarBtn");
if (!containerCaixas || !adicionarBtn)
    throw new Error("Algum elemento não está ligado ao DOM");
const arrayCor = ["preto", "vermelho", "amarelo", "azul"];
let i = 0;
adicionarBtn.addEventListener("click", () => {
    const caixa = document.createElement("div");
    caixa.classList.add("box", `${arrayCor[i]}`);
    containerCaixas.appendChild(caixa);
    i = (i + 1) % arrayCor.length;
});
