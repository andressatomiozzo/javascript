"use strict";
const idInput = document.querySelector("#numero");
const gerarBtn = document.querySelector(".gerar");
const respostaId = document.querySelector("#resposta-id");
const respostaMensagem = document.querySelector("#resposta-mensagem");
if (!idInput || !gerarBtn || !respostaId || !respostaMensagem)
    throw new Error("Algum elemento não está ligado ao DOM");
