"use strict";
const notaInput = document.querySelector("#nota");
const addBtn = document.querySelector(".add");
const respostaArray = document.querySelector("#resposta-array");
const calcBtn = document.querySelector(".calc");
const resposta = document.querySelector("#resposta");
if (!notaInput || !addBtn || !respostaArray || !calcBtn || !resposta)
    throw new Error("Algum elemento não está ligado ao DOM");
let notas = [];
addBtn.addEventListener("click", () => {
    notas.push(Number(notaInput.value));
    respostaArray.innerText = `Array: ${notas}`;
});
calcBtn.addEventListener("click", () => {
    const maiorQueSete = notas.filter((n) => n >= 7);
    const media = notas.reduce((acc, n) => acc + n) / notas.length;
    const conceito = notas.map((n) => {
        if (n >= 9) {
            return "A";
        }
        else if (n >= 8) {
            return "B";
        }
        else if (n >= 7) {
            return "C";
        }
        else if (n >= 6) {
            return "D";
        }
        else {
            return "F";
        }
    });
    resposta.innerText = `As notas maiores que 7 foram as ${maiorQueSete}, a média das notas foi de ${media} e os conceitos são: ${conceito}`;
});
