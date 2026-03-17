"use strict";
const nomeInput = document.querySelector("#nome");
const form = document.querySelector("form");
const alerta = document.querySelector("#alerta");
const respostaBandeira = document.querySelector("#resposta-bandeira");
const respostaMaps = document.querySelector("#resposta-maps");
const respostaNomeOficial = document.querySelector("#resposta-nomeOficial");
const respostaNomeNativo = document.querySelector("#resposta-nomeNativo");
const respostaCapital = document.querySelector("#resposta-capital");
const respostaContinente = document.querySelector("#resposta-continente");
const respostaLingua = document.querySelector("#resposta-lingua");
if (!nomeInput ||
    !form ||
    !alerta ||
    !respostaBandeira ||
    !respostaMaps ||
    !respostaNomeOficial ||
    !respostaNomeNativo ||
    !respostaCapital ||
    !respostaContinente ||
    !respostaLingua)
    throw new Error("Ops, algum elemento não está ligado ao DOM");
const buscarPaises = async (pais) => {
    try {
        const resposta = await fetch(`https://restcountries.com/v3.1/name/${pais}`);
        const dados = await resposta.json();
        mostrarNaTela(dados);
    }
    catch (err) {
        alerta.innerText = `Houve algum problema, verifique a ortografia.`;
        console.log(err);
    }
};
form.addEventListener("submit", (event) => {
    event.preventDefault();
    buscarPaises(nomeInput.value);
});
