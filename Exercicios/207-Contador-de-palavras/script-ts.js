"use strict";
const fraseInput = document.querySelector("#frase");
const palavrasBtn = document.querySelector("#palavrasBtn");
const letrasBtn = document.querySelector("#letrasBtn");
const resetBtn = document.querySelector("#resetBtn");
const respostaPalavras = document.querySelector("#respostaPalavras");
const respostaLetras = document.querySelector("#respostaLetras");
if (!fraseInput || !palavrasBtn || !letrasBtn || !resetBtn || !respostaPalavras || !respostaLetras)
    throw new Error("Algum elemento não está ligado ao DOM");
let frase;
palavrasBtn.addEventListener("click", () => {
    frase = fraseInput.value;
    const palavras = frase.split(" ").filter((d) => d !== "");
    respostaPalavras.innerText = `Número de palavras: ${palavras.length}`;
});
letrasBtn.addEventListener("click", () => {
    frase = fraseInput.value;
    const letras = frase.split("").filter((d) => d !== "" && d !== " ");
    respostaLetras.innerText = `Número de letras: ${letras.length}`;
});
resetBtn.addEventListener("click", () => {
    fraseInput.value = "";
    respostaPalavras.innerText = "";
    respostaLetras.innerText = "";
});
