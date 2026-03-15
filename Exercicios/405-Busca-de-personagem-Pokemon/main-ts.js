"use strict";
const nomeInput = document.querySelector("#nome");
const form = document.querySelector("form");
const alerta = document.querySelector("#alerta");
const respostaNome = document.querySelector("#resposta-nome");
const respostaAltura = document.querySelector("#resposta-altura");
const respostaPeso = document.querySelector("#resposta-peso");
if (!nomeInput || !form || !alerta || !respostaNome || !respostaAltura || !respostaPeso)
    throw new Error("Algum elemento não está ligado ao DOM");
const mostrarNaTela = (dados) => {
    respostaNome.innerText = `Nome: ${dados.name}`;
    respostaAltura.innerText = `Altura: ${dados.height * 10}cm`;
    respostaPeso.innerText = `Peso: ${dados.weight / 10}kg`;
};
const buscarPokemon = async (nome) => {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
        const dados = await resposta.json();
        if (!resposta.ok) {
            alerta.innerText = `Houve algum problena com a API.`;
        }
        else {
            mostrarNaTela(dados);
        }
    }
    catch (err) {
        alerta.innerText = `Houve algum problena com a API, verifique se o nome digitado está correto`;
        console.log(err);
    }
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
