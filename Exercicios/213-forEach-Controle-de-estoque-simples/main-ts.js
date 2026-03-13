"use strict";
const nomeInput = document.querySelector("#nome");
const quantidadeInput = document.querySelector("#quantidade");
const addBtn = document.querySelector(".add");
const produtosContainer = document.querySelector("#produtos-container");
const calcBtn = document.querySelector(".calc");
const respostaContent = document.querySelector("#resposta");
if (!nomeInput || !quantidadeInput || !addBtn || !produtosContainer || !calcBtn || !respostaContent)
    throw new Error("Algum elemento não está ligado ao DOM");
let produtos = [];
addBtn.addEventListener("click", () => {
    produtos.push({ nome: nomeInput.value, quantidade: Number(quantidadeInput.value) });
    produtosContainer.innerHTML = `<p>Produtos:</p>${produtos.map((p) => `<p>Nome do produto: ${p.nome}, quantidade: ${p.quantidade}</p>`).join("")}`;
    nomeInput.value = "";
    quantidadeInput.value = "";
});
calcBtn.addEventListener("click", () => {
    let foraDeEstoque = 0;
    let reposicao = [];
    produtos.forEach((p) => {
        if (p.quantidade <= 0)
            foraDeEstoque = +1;
        if (p.quantidade <= 1)
            reposicao.push(p.nome);
    });
    respostaContent.innerText = `Existem ${produtos.length} produtos. ${foraDeEstoque} produtos estão fora de estoque, ${reposicao.length} produtos precisam de reposição: ${reposicao}`;
    console.log(reposicao);
});
