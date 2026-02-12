const iname = document.getElementById("name");
const age = document.getElementById("age");
const adicBtn = document.getElementById("adicBtn");
const resetBtn = document.getElementById("resetBtn");
const dadosContainer = document.getElementById("dadosContainer");

const avalBtn = document.getElementById("avalBtn");
const respostasContainer = document.getElementById("respostasContainer");

const avalBtnFilter = document.getElementById("avalBtnFilter");
const respostasContainerFilter = document.getElementById("respostasContainerFilter");

let dados = [];
let [nome, idade] = dados;

//Adiciona os valores novos ao array "dados"

adicBtn.addEventListener("click", () => {
  nome = iname.value;
  idade = age.value;

  dados.push(nome, idade);

  iname.value = ``;
  age.value = ``;

  const dadosContent = document.createElement("p");
  dadosContent.classList.add("dadosContent");
  dadosContent.innerText = `${nome} tem ${idade} anos`;
  dadosContainer.appendChild(dadosContent);
});

//Reseta tudo, excluir o que o adicBtn e o avalBtn adicionaram

resetBtn.addEventListener("click", () => {
  const respostasAntigas = document.querySelectorAll(".dadosContent");

  respostasAntigas.forEach((resposta) => {
    resposta.remove();
  });

  dados = [];

  resetFunc();

  resetFuncFilter();
});

//Exclui o que o avalBtn fez

let resetFunc = function () {
  const respostasAntigas = document.querySelectorAll(".respostasContent");

  respostasAntigas.forEach((resposta) => {
    // esse 'resposta' só quer dizer como você vai se refirir a cada elemento dentro do array
    resposta.remove();
  });
};

//Exclui o que o avalBtnFilter fez

let resetFuncFilter = function () {
  const respostasAntigas = document.querySelectorAll(".respostasContentFilter");

  respostasAntigas.forEach((resposta) => {
    resposta.remove();
  });
};

//Filtra os dados dos maiores de 18 e imprimi na tela

avalBtn.addEventListener("click", () => {
  let maiorIdadeDados = [];
  let [maiorIdadeNome, maiorIdadeIdade] = maiorIdadeDados;

  for (i = 1; i < dados.length; i = i + 2) {
    if (dados[i] >= 18) {
      maiorIdadeNome = dados[i - 1];
      maiorIdadeIdade = dados[i];
      maiorIdadeDados.push(maiorIdadeNome, maiorIdadeIdade);
    }
  }

  // console.log(dados.length);

  // console.log(maiorIdadeDados);

  resetFunc();

  for (i = 0; i < maiorIdadeDados.length; i = i + 2) {
    const respostasContent = document.createElement("p");
    respostasContent.classList.add("respostasContent");
    respostasContent.innerText = `${maiorIdadeDados[i]} é maior de idade e tem ${maiorIdadeDados[i + 1]} anos`;
    respostasContainer.appendChild(respostasContent);
  }
});

//Cria um array apenas com as idades, filtra as idades maiores de 18 e imprimi na tela

avalBtnFilter.addEventListener("click", () => {
  let idadeDados = [];

  for (i = 1; i < dados.length; i = i + 2) {
    idadeDados.push(dados[i]);
  }

  let maiorIdadeDados = idadeDados.filter(myFunction);

  function myFunction(value) {
    return value > 18;
  }

  let soma = maiorIdadeDados.length;

  const respostasContentFilter = document.createElement("p");
  respostasContentFilter.classList.add("respostasContentFilter");
  respostasContentFilter.innerText = `Nos dados apresentados, ${soma} pessoas são maiores de idade. Estas pessoas tem ${maiorIdadeDados} anos.`;
  respostasContainerFilter.appendChild(respostasContentFilter);
});
