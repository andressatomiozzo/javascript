"use strict";
const numerosInput = document.querySelector("#numeros");
const addBtn = document.querySelector(".add");
const calcBtn = document.querySelector(".calc");
const resetBtn = document.querySelector(".reset");
const arrayContent = document.querySelector("#array-content");
const respostaContent = document.querySelector("#resposta-content");
if (!numerosInput || !addBtn || !calcBtn || !resetBtn || !arrayContent || !respostaContent)
    throw new Error("Algum elemento não está ligado ao DOM");
let numerosArray = [];
addBtn.addEventListener("click", () => {
    numerosArray.push(Number(numerosInput.value));
    arrayContent.innerText = `Array: ${numerosArray}`;
    numerosInput.value = "";
});
calcBtn.addEventListener("click", () => {
    const resposta = numerosArray.filter((n) => n % 2 === 0).map((n) => n * 2).reduce((acc, n) => acc + n);
    respostaContent.innerText = `${resposta}`;
});
resetBtn.addEventListener("click", () => {
    numerosArray = [];
    arrayContent.innerText = "";
    respostaContent.innerText = "";
});
