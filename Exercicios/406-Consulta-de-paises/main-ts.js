"use strict";
const nomeInput = document.querySelector("#nome");
const detalhesBtn = document.querySelector(".detalhes");
const alerta = document.querySelector("#alerta");
const respostaBandeira = document.querySelector("#resposta-bandeira");
const respostaMaps = document.querySelector("#resposta-maps");
const respostaNomeOficial = document.querySelector("#resposta-nomeOficial");
const respostaCapital = document.querySelector("#resposta-capital");
const respostaContinente = document.querySelector("#resposta-continente");
const respostaLingua = document.querySelector("#resposta-lingua");
if (!nomeInput || !detalhesBtn || !alerta || !respostaBandeira || !respostaMaps || !respostaNomeOficial || !respostaCapital || !respostaContinente || !respostaLingua)
    throw new Error("Ops, algum elemento não está ligado ao DOM");
