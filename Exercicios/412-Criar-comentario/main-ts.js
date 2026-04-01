"use strict";
const nomeInput = document.querySelector("#nome");
const mensagemInput = document.querySelector("#mensagem");
const form = document.querySelector("form");
const alerta = document.querySelector("#alerta");
const respostaContainer = document.querySelector("#resposta-container");
if (!nomeInput || !mensagemInput || !form || !alerta || !respostaContainer)
    throw new Error("Algum elemento não está ligado ao DOM!");
