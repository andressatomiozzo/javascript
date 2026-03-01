"use strict";
const nomei = document.querySelector("#nome");
const nota1i = document.querySelector("#nota1");
const nota2i = document.querySelector("#nota2");
const nota3i = document.querySelector("#nota3");
const addBtn = document.querySelector(".add");
const arrayContainer = document.querySelector("#array-container");
const calcBtn = document.querySelector(".calc");
const respostaContainer = document.querySelector("#resposta-container");
if (!nomei || !nota1i || !nota2i || !nota3i || !addBtn || !arrayContainer || !calcBtn || !respostaContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
addBtn.addEventListener("click", () => {
    const nome = nomei.value;
    const nota1 = Number(nota1i.value);
    const nota2 = Number(nota2i.value);
    const nota3 = Number(nota3i.value);
    if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota1 < 0 || nota2 < 0 || nota3 < 0) {
        arrayContainer.innerHTML = `<p>Escreva um valor válido: entre 0 e 10`;
        arrayContainer.style.color = `red`;
    }
    else {
        let notas = [nota1, nota2, nota3];
        dados.push({ nome, notas });
        arrayContainer.innerHTML = dados.map((d) => `<p>Nome: ${d.nome}, notas: ${d.notas} </p>`).join(" ");
        arrayContainer.style.color = `black`;
    }
    console.log(dados);
});
