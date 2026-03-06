"use strict";
const produtoInput = document.querySelector("#produto");
const eletroInput = document.querySelector("#eletro");
const roupaInput = document.querySelector("#roupa");
const addBtn = document.querySelector(".add");
const arrayContainer = document.querySelector("#array-container");
const calcBtn = document.querySelector(".calc");
const respostasContainer = document.querySelector("#respostas-container");
if (!produtoInput || !eletroInput || !roupaInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
