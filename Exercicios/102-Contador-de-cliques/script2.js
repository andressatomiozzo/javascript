"use strict";
const maisBtn = document.querySelector("#mais");
const menosBtn = document.querySelector("#menos");
const resposta = document.querySelector("#resposta");
let numAtual = 0;
if (!maisBtn || !menosBtn)
    throw new Error("Falta algum botão");
const update = () => {
    if (!resposta)
        return;
    resposta.innerText = String(numAtual);
    // resposta.innerText = `${numAtual}`;
};
maisBtn.addEventListener("click", () => {
    numAtual++;
    update();
});
menosBtn.addEventListener("click", () => {
    numAtual--;
    update();
});
