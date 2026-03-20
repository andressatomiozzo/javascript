"use strict";
const valorInput = document.querySelector("#valor");
const tipoEntradaInput = document.querySelector("#tipo-entrada");
const tipoSaidaInput = document.querySelector("#tipo-saida");
const converterBtn = document.querySelector(".converter");
if (!valorInput || !tipoEntradaInput || !tipoSaidaInput || !converterBtn)
    throw new Error("Algum elemento não está ligado ao DOM");
