"use strict";
const textInput = document.querySelector("#iname");
const resposta = document.querySelector("#resposta");
if (!textInput || !resposta)
    throw new Error("Algum elemento não está ligado ao DOM");
textInput.addEventListener("input", () => {
    resposta.innerText = textInput.value;
});
