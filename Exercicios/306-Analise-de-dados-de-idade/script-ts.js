"use strict";
const nomeInput = document.querySelector("#nome");
const idadeInput = document.querySelector("#idade");
const addBtn = document.querySelector(".add");
const arrayContainer = document.querySelector("#array-container");
const calcBtn = document.querySelector(".calc");
const respostasContainer = document.querySelector("#respostas-container");
if (!nomeInput || !idadeInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
addBtn.addEventListener("click", () => {
    if (nomeInput.value === "" || idadeInput.value === "" || Number(idadeInput.value) < 0 || Number(idadeInput.value) > 150) {
        arrayContainer.innerHTML = `<p>Adicione um valor válido </p>`;
        arrayContainer.style.color = "red";
    }
    else {
        const nome = nomeInput.value;
        const idade = Number(idadeInput.value);
        dados.push({ nome: nome, idade: idade });
        arrayContainer.innerHTML = `${dados.map((d) => `<p>Nome: ${d.nome}, idade: ${d.idade}</p>`).join("")}`;
        arrayContainer.style.color = "black";
        nomeInput.value = "";
        idadeInput.value = "";
    }
});
// calcBtn.addEventListener("click", () => {
//   const idades = dados.map((d) => d.idade)
//   const somaIdades = idades.reduce((acc, d) => acc + d);
//   const mediaIdades = somaIdades/dados.length;
//   let maiorIdade = idades[0]
//   idades.forEach((d) => {
//     maiorIdade < d? maiorIdade = d : maiorIdade;
//   })
//   let menorIdade = idades[0];
//   for(let i = 1; i < idades.length; i++){
//     menorIdade > idades[i]? menorIdade = idades[i] : menorIdade
//   }
//   respostasContainer.innerHTML = `
//     <p>A soma das idades é ${somaIdades}</p>
//     <p>A média das idades é ${mediaIdades.toFixed(2)}</p>
//     <p>A maior idade é ${maiorIdade}</p>
//     <p>A menor idade é ${menorIdade}</p>
//   `;
// })
// ! ------------ APENAS COM REDUCE ---------------
calcBtn.addEventListener("click", () => {
    const idades = dados.map((d) => d.idade);
    const somaIdades = idades.reduce((acc, d) => acc + d);
    const mediaIdades = somaIdades / idades.length;
    const maiorIdade = idades.reduce((acc, d) => Math.max(acc, d));
    const menorIdade = idades.reduce((acc, d) => Math.min(acc, d));
    const total = [{ media: mediaIdades, maior: maiorIdade, menor: menorIdade }];
    console.log(total);
    respostasContainer.innerHTML = `
    <p>A soma das idades é ${somaIdades}</p>
    <p>A média das idades é ${mediaIdades.toFixed(2)}</p>
    <p>A maior idade é ${maiorIdade}</p>
    <p>A menor idade é ${menorIdade}</p>
  `;
});
