"use strict";
const numerosInput = document.querySelector("#numeros");
const addBtn = document.querySelector(".add");
const calcBtn = document.querySelector(".calc");
const resetBtn = document.querySelector(".reset");
const arrayContainer = document.querySelector("#array-container");
const respostaContent = document.querySelector("#resposta-content");
if (!numerosInput || !addBtn || !calcBtn || !resetBtn || !arrayContainer || !respostaContent)
    throw new Error("Algum elemento não está ligado ao DOM");
