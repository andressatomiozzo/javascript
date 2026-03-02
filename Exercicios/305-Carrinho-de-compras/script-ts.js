"use strict";
const produto = document.querySelector("#produto");
const preco = document.querySelector("#preco");
const quantidade = document.querySelector("#quantidade");
const addBtn = document.querySelector(".add");
const arrayContainer = document.querySelector("#array-container");
const calcBtn = document.querySelector(".calc");
const respostasContainer = document.querySelector("#respostas-container");
if (!produto || !preco || !quantidade || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
