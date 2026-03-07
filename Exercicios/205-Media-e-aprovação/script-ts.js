"use strict";
const notasInput = document.querySelector("#notas");
const addBtn = document.querySelector("#adicBtn");
const arrayContent = document.querySelector("#mostrarNotas");
const calcBtn = document.querySelector("#calcBtn");
const apagarBtn = document.querySelector("#apagarBtn");
const resultadoContent = document.querySelector("#resultado");
if (!notasInput || !addBtn || !arrayContent || !calcBtn || !apagarBtn || !resultadoContent)
    throw new Error("Alguma variável não está ligada ao DOM");
let notas = [];
addBtn.addEventListener("click", () => {
    const nota = Number(notasInput.value);
    if (nota < 0 || nota > 10) {
        arrayContent.innerText = "Digite um valor válido entre 0 e 10";
    }
    else {
        notas.push(nota);
        arrayContent.innerText = `Notas: ${notas}`;
    }
    notasInput.value = "";
});
calcBtn.addEventListener("click", () => {
    const media = notas.reduce((acc, n) => acc + n) / notas.length;
    resultadoContent.innerText = `Média final: ${media.toFixed(2)}. Aluno ${media >= 7 ? `aprovado` : `reprovado`}`;
});
