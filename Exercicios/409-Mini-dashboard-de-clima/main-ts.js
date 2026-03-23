"use strict";
const cidadeInput = document.querySelector("#cidade");
const latInput = document.querySelector("#lat");
const lonInput = document.querySelector("#lon");
const form = document.querySelector("form");
const alerta = document.querySelector("#alerta");
const respostaContainer = document.querySelector("#resposta-container");
if (!cidadeInput || !latInput || !lonInput || !form || !alerta || !respostaContainer)
    throw new Error("Alguma variável não está ligada ao DOM");
