"use strict";
const nomeInput = document.querySelector("#nome");
const idadeInput = document.querySelector("#idade");
const addBtn = document.querySelector("#add-btn");
const arrayContainer = document.querySelector("#resposta-array-container");
const calcBtn = document.querySelector(".calc");
const respostaContainer = document.querySelector("#resposta-container");
if (!nomeInput || !idadeInput || !addBtn || !arrayContainer || !calcBtn || !respostaContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
addBtn.addEventListener("click", () => {
    const nome = nomeInput.value;
    const idade = Number(idadeInput.value);
    if (nome !== "" && idade > 0 && idade < 130) {
        dados.push({ nome: nome, idade: idade });
        arrayContainer.innerHTML = `${dados.map((d) => `<p>Nome: ${d.nome}, idade: ${d.idade}</p>`).join("")}`;
    }
    else {
        arrayContainer.innerText = "Insira um valor válido";
    }
});
calcBtn.addEventListener("click", () => {
    const pessoas = dados.length;
    const idades = dados.map((d) => d.idade);
    let maioresIdade = 0;
    let soma = 0;
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] >= 18)
            maioresIdade++;
        soma += idades[i];
        console.log(soma);
    }
    const media = soma / idades.length;
    respostaContainer.innerText = `Pessoas no array: ${dados.length}, maiores de idade: ${maioresIdade}, média das idades: ${media.toFixed(2)}.`;
});
