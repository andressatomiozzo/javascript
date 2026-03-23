"use strict";
const cidadeInput = document.querySelector("#cidade");
const latInput = document.querySelector("#lat");
const lonInput = document.querySelector("#lon");
const form = document.querySelector("form");
const alerta = document.querySelector("#alerta");
const respostaContainer = document.querySelector("#resposta-container");
const tempo = document.querySelector("#tempo");
const temperatura = document.querySelector("#temperatura");
const sensacaoTermica = document.querySelector("#sensacao-termica");
const tempMin = document.querySelector("#temp-min");
const tempMax = document.querySelector("#temp-max");
const umidade = document.querySelector("#umidade");
if (!cidadeInput ||
    !latInput ||
    !lonInput ||
    !form ||
    !alerta ||
    !respostaContainer ||
    !tempo ||
    !temperatura ||
    !sensacaoTermica ||
    !tempMax ||
    !tempMin ||
    !umidade)
    throw new Error("Alguma variável não está ligada ao DOM");
const minhaKey = `af0c221d7e46cecd00f11fbb9eb17c63`;
const buscarClimaCidade = async (cidade) => {
    try {
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${minhaKey}`);
        if (!resposta.ok) {
            alerta.innerText = "Algo deu errado, verifique a ortografia";
        }
        else {
            const dados = await resposta.json();
            console.log(dados);
        }
    }
    catch (err) {
        console.log(err);
        alerta.innerText = "Algo deu errado, verifique a ortografia";
    }
};
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // if (cidadeInput.value === "" && latInput.value !== "" && lonInput.value !== "") {
    //   buscarClimaLatLon(Number(latInput.value), Number(lonInput.value));
    // } else
    if (cidadeInput.value !== "" && latInput.value === "" && lonInput.value === "") {
        buscarClimaCidade(cidadeInput.value);
    }
});
