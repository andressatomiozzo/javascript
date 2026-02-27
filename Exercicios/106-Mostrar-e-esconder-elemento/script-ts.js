"use strict";
const textoConfidencial = document.querySelector("#textoConfidencial");
const botaoMagico = document.querySelector("#botaoMagico");
if (!textoConfidencial || !botaoMagico)
    throw new Error("ALgum elemento do DOM não está ligado do JS");
botaoMagico.addEventListener("click", () => {
    textoConfidencial.classList.toggle(`displayNone`);
});
