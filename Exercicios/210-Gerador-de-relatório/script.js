const nomeV = document.getElementById("nome");
const idadeV = document.getElementById("idade");
const addBtn = document.getElementById("add-btn");
const respostaArrayContainer = document.getElementById("resposta-array-container");

const pessoasExistentesBtn = document.getElementById("pessoas-existentes-btn");
const respostaPessoasExistentes = document.getElementById("resposta-pessoas-existentes");

const maioresDeIdadeBtn = document.getElementById("maiores-de-idade-btn");
const respostaMaioresDeIdade = document.getElementById("resposta-maiores-de-idade");

const mediaDeIdadeBtn = document.getElementById("media-de-idade-btn");
const respostaMediaDeIdade = document.getElementById("media-de-idade");

let dados = [];
let pessoa = {};
let nome = nomeV.value;
let idade = Number(idadeV.value);

addBtn.addEventListener("click", () => {
  pessoa = { nome, idade };
  dados.push(pessoa);
  const respostaDoArray = document.createElement("p");
  respostaDoArray.innerText += `${nome} tem ${idade} anos`;
  respostaArrayContainer.appendChild(respostaDoArray);
});

pessoasExistentesBtn.addEventListener("click", () => {
  if ((dados.length === 1)) {
    respostaPessoasExistentes.innerText = `Existe ${dados.length} pessoa.`;
  } else {
    respostaPessoasExistentes.innerText = `Existem ${dados.length} pessoas.`;
  }
});

maioresDeIdadeBtn.addEventListener("click", () => {
  if (idade >= 18){

  }
})