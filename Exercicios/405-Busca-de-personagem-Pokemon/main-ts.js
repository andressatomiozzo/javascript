"use strict";
const nomeInput = document.querySelector("#nome");
const detalhesBtn = document.querySelector(".detalhes");
const respostaFoto = document.querySelector("#resposta-foto");
const respostaNome = document.querySelector("#resposta-nome");
const respostaAltura = document.querySelector("#resposta-altura");
const respostaoPeso = document.querySelector("#respostao-peso");
if (!nomeInput || !detalhesBtn || !respostaFoto || !respostaNome || !respostaAltura || !respostaoPeso)
    throw new Error("Algum elemento não está ligado ao DOM");
