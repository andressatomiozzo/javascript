"use strict";
const nomeInput = document.querySelector("#nome");
const idadeInput = document.querySelector("#idade");
const addBtn = document.querySelector("#adicionar-btn");
const calcBtn = document.querySelector("#calcular-btn");
const respostasContaoner = document.querySelector("#respostas-container");
if (!nomeInput || !idadeInput || !addBtn || !calcBtn || !respostasContaoner)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
addBtn.addEventListener("click", () => {
    dados.push({ nome: nomeInput.value, idade: Number(idadeInput.value) });
    nomeInput.value = "";
    idadeInput.value = "";
});
calcBtn.addEventListener("click", () => {
    let maioresIdade = 0;
    let maioresIdadeNomes = [];
    dados.forEach((d) => {
        if (d.idade >= 18) {
            maioresIdade += 1;
            maioresIdadeNomes.push(d.nome);
        }
    });
    respostasContaoner.innerText = `Existem ${dados.length} pessoas nesse relatório. ${maioresIdade} pessoas são maiores de idade: ${maioresIdadeNomes}`;
});
