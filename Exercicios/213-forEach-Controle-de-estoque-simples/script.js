const nomei = document.getElementById("nome");
const quantidadei = document.getElementById("quantidade");
const addBtn = document.querySelector(".add");
const produtosContainer = document.getElementById("produtos-container");
const calcBtn = document.querySelector(".calc");
const resposta = document.getElementById("resposta");

let dados = [];
let { nome, quantidade } = dados;

addBtn.addEventListener("click", () => {
  nome = nomei.value;
  quantidade = Number(quantidadei.value);
  dados.push({ nome, quantidade });

  const produtoAdicionado = document.createElement("p");
  produtoAdicionado.innerText = `Produto: ${nome}. Quantidade: ${quantidade}`;
  produtosContainer.appendChild(produtoAdicionado);
});

calcBtn.addEventListener("click", () => {
  let foraDoEstoque = 0;
  let reposicao = [];
  let quantidadeReposicao = 0;
  dados.forEach((dado) => {
    if (dado.quantidade === 0) {
      foraDoEstoque++;
    }
    if (dado.quantidade <= 1) {
      quantidadeReposicao++;
      reposicao.push(dado.nome);
    }
  });
  
  resposta.innerText = `Existem ${dados.length} produtos no total. ${foraDoEstoque} produtos estão fora de estoque e ${quantidadeReposicao} produtos precisam de reposição, estes são: ${reposicao}`;
});
