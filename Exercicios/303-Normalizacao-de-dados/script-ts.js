"use strict";
const nomei = document.querySelector("#nome");
const precoi = document.querySelector("#preco");
const addBtn = document.querySelector(".add");
const calcBtn = document.querySelector(".calc");
if (!nomei || !precoi || !addBtn || !calcBtn)
    throw new Error("Algum elemento não está ligado ao DOM");
