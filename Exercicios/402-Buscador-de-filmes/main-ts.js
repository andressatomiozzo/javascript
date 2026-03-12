"use strict";
const tituloInput = document.querySelector("#titulo");
const anoInput = document.querySelector("#ano");
const pesqBtn = document.querySelector(".pesq");
const resetBtn = document.querySelector(".reset");
const respostaContainer = document.querySelector("#resposta-container");
if (!tituloInput || !anoInput || !pesqBtn || !resetBtn || !respostaContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
const pesquisarFilme = async (chave) => {
    const apiKey = "a226e844";
    const resposta = await fetch(`http://www.omdbapi.com/?${chave}&apikey=${apiKey}`);
    const dados = await resposta.json();
    console.log(dados);
};
pesqBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (tituloInput.value === "") {
        respostaContainer.innerHTML = `<p>Digite um título</p>`;
    }
    else {
        let chave;
        const title = tituloInput.value;
        const tituloQuebrado = title.split(" ").join("+");
        if (anoInput.value == "") {
            chave = `t=${tituloQuebrado}`;
        }
        else {
            chave = `t=${tituloQuebrado}&y=${anoInput.value}`;
        }
        pesquisarFilme(chave);
    }
});
