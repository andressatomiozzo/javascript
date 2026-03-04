"use strict";
const nomeInput = document.querySelector("#nome");
const idadeInput = document.querySelector("#idade");
const estadoInput = document.querySelector("#estado");
const addBtn = document.querySelector(".add");
const arrayContainer = document.querySelector("#array-container");
const calcBtn = document.querySelector(".calc");
const respostasContainer = document.querySelector("#respostas-container");
if (!nomeInput || !idadeInput || !estadoInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
addBtn.addEventListener("click", () => {
    if (nomeInput.value === `` || idadeInput.value === `` || Number(idadeInput.value) < 0 || Number(idadeInput.value) > 130) {
        arrayContainer.innerHTML = `<p>Escreva um valor válido <p>`;
        arrayContainer.style.color = "red";
    }
    else {
        const nome = nomeInput.value;
        const idade = Number(idadeInput.value);
        const estado = estadoInput.value;
        dados.push({ nome: nome, idade: idade, estado: estado });
        arrayContainer.innerHTML = `${dados.map((d) => `<p>Nome: ${d.nome}, idade: ${d.idade}, estado: ${d.estado}</p>`).join("")}`;
        arrayContainer.style.color = "black";
        nomeInput.value = "";
        idadeInput.value = "";
        estadoInput.value = "";
    }
});
