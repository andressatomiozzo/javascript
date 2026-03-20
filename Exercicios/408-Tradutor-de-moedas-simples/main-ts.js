"use strict";
const valorInput = document.querySelector("#valor");
const tipoEntradaInput = document.querySelector("#tipo-entrada");
const tipoSaidaInput = document.querySelector("#tipo-saida");
const form = document.querySelector("form");
const alerta = document.querySelector("#alerta");
const respostaContainer = document.querySelector("#resposta-container");
if (!valorInput || !tipoEntradaInput || !tipoSaidaInput || !form || !alerta || !respostaContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
const mostrarNaTela = (valorConvertido) => {
    respostaContainer.innerText = `Valor convertido: ${valorConvertido.toFixed(2)}`;
};
const converterValorLogica = (dados) => {
    const entrada = tipoEntradaInput.value;
    const saida = tipoSaidaInput.value;
    const valorConvertido = Number(valorInput.value) * dados[entrada]?.[saida];
    console.log(valorConvertido);
    mostrarNaTela(valorConvertido);
};
const converterValor = async () => {
    try {
        const resposta = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${tipoEntradaInput.value}.json`);
        if (!resposta.ok) {
            alerta.innerText = "Houve algum problema na conversão, tente mais tarde";
        }
        else {
            const dados = await resposta.json();
            converterValorLogica(dados);
        }
    }
    catch (err) {
        console.log(err);
    }
};
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (tipoEntradaInput.value === "" || tipoSaidaInput.value === "") {
        alerta.innerText = "Selecione a moeda de troca";
    }
    else {
        converterValor();
    }
});
