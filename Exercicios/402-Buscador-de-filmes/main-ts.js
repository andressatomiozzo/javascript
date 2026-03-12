"use strict";
const tituloInput = document.querySelector("#titulo");
const anoInput = document.querySelector("#ano");
const pesqBtn = document.querySelector(".pesq");
const resetBtn = document.querySelector(".reset");
const respostaContainer = document.querySelector("#resposta-container");
if (!tituloInput || !anoInput || !pesqBtn || !resetBtn || !respostaContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
