"use strict";
const textoInicial = document.querySelector("#textoInicial");
const botaoMudar = document.querySelector("#botaoMudar");
if (!textoInicial || !botaoMudar)
    throw new Error("Algum elemento não esá ligado ao DOM");
let estado = true;
botaoMudar.addEventListener("click", () => {
    estado = !estado;
    textoInicial.innerText = estado ? "ON" : "OFF";
    textoInicial.style.color = estado ? "blue" : "red";
});
