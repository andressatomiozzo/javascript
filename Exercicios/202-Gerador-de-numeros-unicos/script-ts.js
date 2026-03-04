"use strict";
const resultado = document.querySelector("#resultado");
const addManual = document.querySelector("#manual");
const addDez = document.querySelector("#dezNumBtn");
const ordenarBtn = document.querySelector("#ordenarBtn");
const limparBtn = document.querySelector("#limparBtn");
const erro = document.querySelector("#erro");
if (!resultado || !addManual || !addDez || !ordenarBtn || !limparBtn || !erro)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
const update = () => {
    resultado.innerText = `Array: ${dados}`;
};
const sortear = () => {
    const numeroSorteado = Math.round(Math.random() * 100);
    if (dados.includes(numeroSorteado)) {
        erro.innerText = `O número ${numeroSorteado} já foi sorteado, tente novamente.`;
    }
    else {
        dados.push(numeroSorteado);
    }
};
addManual.addEventListener("click", () => {
    sortear();
    update();
});
addDez.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
        sortear();
    }
    update();
});
ordenarBtn.addEventListener("click", () => {
    dados.sort(function (a, b) { return a - b; });
    update();
});
limparBtn.addEventListener("click", () => {
    dados = [];
    update();
});
