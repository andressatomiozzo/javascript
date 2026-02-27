const nomei = document.getElementById("nome");
const idadei = document.getElementById("idade");
const addBtn = document.querySelector(".add");
const arrayContainer = document.getElementById("array-container");
const calcBtn = document.querySelector(".calc");
const respostaContainer = document.getElementById("resposta-container");

let dados = [];
let { nome, idade } = dados;

addBtn.addEventListener("click", () => {
  nome = nomei.value;
  idade = Number(idadei.value);

  dados.push({ nome, idade });

  nomei.value = "";
  idadei.value = "";

  const arrayContent = document.createElement("p");
  arrayContent.innerText = `Nome: ${nome}, idade: ${idade}`;
  arrayContainer.appendChild(arrayContent);
});

calcBtn.addEventListener("click", () => {
  const maiorDeIdade = dados.filter((dado) => dado.idade >= 18);
  const maiorIdadeNome = maiorDeIdade.map((dado) => dado.nome);

  const dadosIdade = dados.map((dado) => dado.idade);
  const soma = dadosIdade.reduce((acc, dado) => {
    return (acc + dado);
  });
  const media = soma/dadosIdade.length;

  const ordenado = [...dados].sort((a, b) => {
    return a.nome.localeCompare(b.nome, "pt-BR", { sensitivity: "base" });
  });
  const ordenadoNome = ordenado.map((dado) => dado.nome);

  console.log(ordenado);

  respostaContainer.innerHTML = `
    <p>As pessoas maiores de idades são ${maiorIdadeNome} </p>
    <p>A média das idades é ${media.toFixed(2)}</p>
    <p>Os nomes inseridos em ordem alfabética é ${ordenadoNome}</p>
  `;
});
