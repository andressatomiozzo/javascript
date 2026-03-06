"use strict";
const numeroInput = document.querySelector("#num");
const addBtn = document.querySelector("#addBtn");
const arrayContainer = document.querySelector("#array");
const calcBtn = document.querySelector("#calcBtn");
const resetBtn = document.querySelector("#resetBtn");
const respostaContainer = document.querySelector("#resposta-container");
if (!numeroInput || !addBtn || !arrayContainer || !calcBtn || !resetBtn || !respostaContainer)
    throw new Error("ALgum elemento não está ligado ao DOM");
let dados = [];
addBtn.addEventListener("click", () => {
    dados.push(Number(numeroInput.value));
    arrayContainer.innerText = `Array: ${dados}`;
    numeroInput.value = "";
});
calcBtn.addEventListener("click", () => {
    let parMaior10 = [];
    let parMenor10 = [];
    let imparMaior10 = [];
    let imparMenor10 = [];
    dados.forEach((d) => {
        if (d % 2 === 0) {
            if (d >= 10) {
                parMaior10.push(d);
            }
            else {
                parMenor10.push(d);
            }
        }
        else {
            if (d >= 10) {
                imparMaior10.push(d);
            }
            else {
                imparMenor10.push(d);
            }
        }
    });
    respostaContainer.innerHTML = `
    <p>Números pares menores que 10: ${parMenor10.length === 0 ? `nenhum` : parMenor10}</p>
    <p>Números pares maiores ou igual a 10: ${parMaior10.length === 0 ? `nenhum` : parMaior10}</p>
    <p>Números ímpares menores que 10: ${imparMenor10.length === 0 ? `nenhum` : imparMenor10}</p>
    <p>Números ímpares maiores ou igual a 10: ${imparMaior10.length === 0 ? `nenhum` : imparMaior10}</p>
  `;
});
resetBtn.addEventListener("click", () => {
    dados = [];
    arrayContainer.innerText = "Array: ";
    respostaContainer.innerHTML = "";
});
