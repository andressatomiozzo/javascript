"use strict";
const cidadeInput = document.querySelector("#cidade");
const latInput = document.querySelector("#lat");
const lonInput = document.querySelector("#lon");
const form = document.querySelector("form");
const alerta = document.querySelector("#alerta");
const respostaContainer = document.querySelector("#resposta-container");
const respostaCidade = document.querySelector("#cidade-resposta");
const respostaLat = document.querySelector("#lat-resposta");
const respostaLon = document.querySelector("#lon-resposta");
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
    !respostaCidade ||
    !respostaLat ||
    !respostaLon ||
    !tempo ||
    !temperatura ||
    !sensacaoTermica ||
    !tempMax ||
    !tempMin ||
    !umidade)
    throw new Error("Alguma variável não está ligada ao DOM");
const resetar = () => {
    alerta.innerText = "";
    respostaCidade.innerText = "";
    respostaLat.innerText = "";
    respostaLon.innerText = "";
    tempo.innerText = "";
    temperatura.innerText = "";
    sensacaoTermica.innerText = "";
    tempMax.innerText = "";
    tempMin.innerText = "";
    umidade.innerText = "";
};
const mostrarDados = (dados) => {
    respostaCidade.innerText = `Cidade: ${dados.name}`;
    respostaLat.innerText = `Latitude: ${dados.coord.lat}`;
    respostaLon.innerText = `Longitude: ${dados.coord.lon}`;
    tempo.innerText = `Tempo: ${dados.weather[0].main}`;
    temperatura.innerText = `Temperatura: ${(dados.main.temp - 273.15).toFixed(2)}ºC`;
    sensacaoTermica.innerText = `Sensação térmica: ${(dados.main.feels_like - 273.15).toFixed(2)}ºC`;
    tempMax.innerText = `Temperatura mínima: ${(dados.main.temp_min - 273.15).toFixed(2)}ºC`;
    tempMin.innerText = `Temperatura máxima: ${(dados.main.temp_max - 273.15).toFixed(2)}ºC`;
    umidade.innerText = `Umidade: ${dados.main.humidity}`;
};
const minhaKey = `af0c221d7e46cecd00f11fbb9eb17c63`;
const buscarClimaLatLon = async (lat, lon) => {
    try {
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${minhaKey}`);
        if (!resposta.ok) {
            alerta.innerText = "Algo deu errado, verifique a ortografia";
        }
        else {
            const dados = await resposta.json();
            console.log(dados);
            mostrarDados(dados);
        }
    }
    catch (err) {
        console.log(err);
        alerta.innerText = "Algo deu errado, verifique a ortografia";
    }
};
const buscarClimaCidade = async (cidade) => {
    try {
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${minhaKey}`);
        if (!resposta.ok) {
            alerta.innerText = "Algo deu errado, verifique a ortografia";
        }
        else {
            const dados = await resposta.json();
            mostrarDados(dados);
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
    if (cidadeInput.value === "" && latInput.value !== "" && lonInput.value !== "") {
        resetar();
        buscarClimaLatLon(Number(latInput.value), Number(lonInput.value));
    }
    else if (cidadeInput.value !== "" && latInput.value === "" && lonInput.value === "") {
        resetar();
        buscarClimaCidade(cidadeInput.value);
    }
    else {
        resetar();
        alerta.innerText = "Digite o nome da cidade OU as coordenadas.";
    }
});
