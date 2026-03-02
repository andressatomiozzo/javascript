"use strict";
const produtoi = document.querySelector("#produto");
const precoi = document.querySelector("#preco");
const quantidadei = document.querySelector("#quantidade");
const addBtn = document.querySelector(".add");
const arrayContainer = document.querySelector("#array-container");
const calcBtn = document.querySelector(".calc");
const respostasContainer = document.querySelector("#respostas-container");
if (!produtoi || !precoi || !quantidadei || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
addBtn.addEventListener("click", () => {
    if (produtoi.value === "" || precoi.value === "" || quantidadei.value === "") {
        arrayContainer.innerHTML = `<p>Preencha todos os campos corretamente</p>`;
        arrayContainer.style.color = "red";
    }
    else {
        dados.push({ produto: produtoi.value, preco: Number(precoi.value), quantidade: Number(quantidadei.value) });
        arrayContainer.innerHTML = dados.map((d) => `<p>Produto: ${d.produto}, preço: R$${d.preco}, quantidade: ${d.quantidade}. </p>`).join("");
        produtoi.value = "";
        precoi.value = "";
        quantidadei.value = "";
    }
});
