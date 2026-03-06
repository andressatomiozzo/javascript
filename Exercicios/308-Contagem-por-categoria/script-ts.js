"use strict";
const produtoInput = document.querySelector("#produto");
const addBtn = document.querySelector(".add");
const arrayContainer = document.querySelector("#array-container");
const calcBtn = document.querySelector(".calc");
const respostasContainer = document.querySelector("#respostas-container");
if (!produtoInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
addBtn.addEventListener("click", () => {
    const categoria = document.querySelector('input[name="categoria"]:checked');
    if (!categoria)
        throw new Error("Categoria não está ligado ao DOM");
    dados.push({ produto: produtoInput.value, categoria: categoria.value });
    console.log(dados);
    produtoInput.value = "";
});
