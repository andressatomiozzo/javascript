"use strict";
const perguntaInput = document.querySelector("#pergunta");
const respostaInput = document.querySelector("#resposta");
const pontosInput = document.querySelector("#pontos");
const addBtn = document.querySelector(".add");
const respostasContainer = document.querySelector("#respostas-container");
const calcBtn = document.querySelector(".calc");
const pontuacaoContent = document.querySelector("#pontuacao-content");
if (!perguntaInput || !respostaInput || !pontosInput || !addBtn || !respostasContainer || !calcBtn || !pontuacaoContent)
    throw new Error("Algum elemento não está ligado ao DOM");
