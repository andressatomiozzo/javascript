"use strict";
const nomeInput = document.querySelector("#name");
const idadeInput = document.querySelector("#age");
const addBtn = document.querySelector("#adicBtn");
const resetBtn = document.querySelector("#resetBtn");
const dadosContainer = document.querySelector("#dadosContainer");
const avalBtn = document.querySelector("#avalBtn");
const respostasContainer = document.querySelector("#respostasContainer");
const avalBtnFilter = document.querySelector("#avalBtnFilter");
const respostasContainerFilter = document.querySelector("#respostasContainerFilter");
if (!nomeInput || !idadeInput || !addBtn || !resetBtn || !dadosContainer || !avalBtn || !respostasContainer || !avalBtnFilter || !respostasContainerFilter)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
addBtn.addEventListener("click", () => {
    const nome = nomeInput.value;
    const idade = Number(idadeInput.value);
    if (idade > 130 || idade < 0) {
        dadosContainer.innerHTML = "Digite uma idade válida";
    }
    else {
        dados.push({ nome: nome, idade: idade });
        dadosContainer.innerHTML = `${dados.map((d) => `<p>Nome: ${d.nome}, idade: ${d.idade} </p>`).join("")}`;
        nomeInput.value = "";
        idadeInput.value = "";
    }
});
avalBtn.addEventListener("click", () => {
    const idade = dados.map((d) => d.idade);
    let maioresIdade = [];
    idade.forEach((i) => {
        if (i >= 18)
            maioresIdade.push(i);
    });
    respostasContainer.innerText = `Maiores de idade: ${maioresIdade}`;
});
avalBtnFilter.addEventListener("click", () => {
    const maioresIdade = dados.map((d) => d.idade).filter((d) => d >= 18);
    respostasContainerFilter.innerText = `Maiores de idade: ${maioresIdade}`;
});
