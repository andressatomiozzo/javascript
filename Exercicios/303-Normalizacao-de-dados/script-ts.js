"use strict";
const nomei = document.querySelector("#nome");
const precoi = document.querySelector("#preco");
const addBtn = document.querySelector(".add");
const arrayContainer = document.querySelector("#array-container");
const calcBtn = document.querySelector(".calc");
const respostasContainer = document.querySelector("#respostas-container");
if (!nomei || !precoi || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
const atualizarLista = () => {
    arrayContainer.innerHTML = dados.map((d) => `<p>Nome: ${d.nome}, preço: ${d.preco}. </p>`).join("");
};
addBtn.addEventListener("click", () => {
    const nome = nomei.value;
    const preco = Number(precoi.value);
    dados.push({ nome, preco });
    atualizarLista();
    nomei.value = "";
    precoi.value = "";
});
calcBtn.addEventListener("click", () => {
    const novoArray = dados.map((d) => {
        return {
            nome: d.nome.toLowerCase(),
            preco: d.preco * 0.9
        };
    });
    respostasContainer.innerHTML = novoArray.map((d) => `<p>Nome: ${d.nome}, preço: ${d.preco}. </p>`).join("");
});
