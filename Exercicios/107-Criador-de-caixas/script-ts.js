"use strict";
const containerCaixas = document.querySelector("#containerCaixas");
const adicionarBtn = document.querySelector("#adicionarBtn");
if (!containerCaixas || !adicionarBtn)
    throw new Error("Algum elemento não está ligado ao DOM");
