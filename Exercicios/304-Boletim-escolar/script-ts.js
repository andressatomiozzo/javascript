"use strict";
const nomei = document.querySelector("#nome");
const nota1i = document.querySelector("#nota1");
const nota2i = document.querySelector("#nota2");
const nota3i = document.querySelector("#nota3");
const addBtn = document.querySelector(".add");
const arrayContainer = document.querySelector("#array-container");
const calcBtn = document.querySelector(".calc");
const respostaContainer = document.querySelector("#resposta-container");
if (!nomei || !nota1i || !nota2i || !nota3i || !addBtn || !arrayContainer || !calcBtn || !respostaContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
