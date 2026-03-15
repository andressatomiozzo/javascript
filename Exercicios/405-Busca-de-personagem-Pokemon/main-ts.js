"use strict";
const nomeInput = document.querySelector("#nome");
const form = document.querySelector("form");
const alerta = document.querySelector("#alerta");
const respostaFoto = document.querySelector("#resposta-foto");
const respostaNome = document.querySelector("#resposta-nome");
const respostaAltura = document.querySelector("#resposta-altura");
const respostaPeso = document.querySelector("#resposta-peso");
if (!nomeInput || !form || !alerta || !respostaFoto || !respostaNome || !respostaAltura || !respostaPeso)
    throw new Error("Algum elemento não está ligado ao DOM");
const buscarPokemon = async (nome) => {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    const dados = await resposta.json();
    console.log(dados);
};
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!nomeInput.value) {
        alerta.innerText = "Digite algum nome de Pokémon";
    }
    else {
        buscarPokemon(nomeInput.value);
    }
});
