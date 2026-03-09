"use strict";
const nomeInput = document.querySelector("#nome");
const salarioInput = document.querySelector("#salario");
const addBtn = document.querySelector(".add");
const arrayContainer = document.querySelector("#array-container");
const calcBtn = document.querySelector(".calc");
const respostasContainer = document.querySelector("#respostas-container");
if (!nomeInput || !salarioInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
