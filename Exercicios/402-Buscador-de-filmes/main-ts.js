"use strict";
const tituloInput = document.querySelector("#titulo");
const anoInput = document.querySelector("#ano");
const pesqBtn = document.querySelector(".pesq");
const resetBtn = document.querySelector(".reset");
const respostaContainer = document.querySelector("#resposta-container");
const respostaTexto = document.querySelector("#resposta-texto");
const respostaPoster = document.querySelector("#resposta-poster");
if (!tituloInput || !anoInput || !pesqBtn || !resetBtn || !respostaPoster || !respostaTexto)
    throw new Error("Algum elemento não está ligado ao DOM");
const resetarResposta = () => {
    respostaTexto.innerHTML = "";
    respostaPoster.innerHTML = "";
};
const criarElementos = () => {
    for (let i = 0; i < 8; i++) {
        const resposta = document.createElement("p");
        resposta.classList.add("resposta-paragrafos");
        respostaTexto.appendChild(resposta);
    }
};
const mostrarResultado = (dados) => {
    resetarResposta();
    criarElementos();
    if (dados.Poster !== "N/A") {
        respostaPoster.classList.remove("hidden");
        const poster = document.createElement("img");
        respostaPoster.appendChild(poster);
        poster.src = `${dados.Poster}`;
        poster.alt = "Poster do filme";
    }
    else {
        respostaPoster.classList.add("hidden");
    }
    respostaTexto.children[0].innerHTML = `<p><span>Título:</span> ${dados.Title}<p>`;
    respostaTexto.children[1].innerHTML = `<p><span>Data de lançamento:</span> ${dados.Released}<p>`;
    respostaTexto.children[2].innerHTML = `<p><span>Tempo de duração:</span> ${dados.Runtime}<p>`;
    respostaTexto.children[3].innerHTML = `<p><span>Gênero:</span> ${dados.Genre}<p>`;
    respostaTexto.children[4].innerHTML = `<p><span>Diretor:</span> ${dados.Director}<p>`;
    respostaTexto.children[5].innerHTML = `<p><span>Atores:</span> ${dados.Actors}<p>`;
    respostaTexto.children[6].innerHTML = `<p><span>Resumo:</span> ${dados.Plot}<p>`;
    respostaTexto.children[7].innerHTML = `<p><span>Prêmios:</span> ${dados.Awards}<p>`;
};
const pesquisarFilme = async (chave) => {
    try {
        const apiKey = "a226e844";
        const resposta = await fetch(`http://www.omdbapi.com/?${chave}&apikey=${apiKey}`);
        const dados = await resposta.json();
        console.log(dados);
        if (!resposta.ok) {
            throw new Error("ops, algo deu errado");
        }
        else if (dados.hasOwnProperty("Error")) {
            resetarResposta();
            respostaTexto.innerHTML = `<p>O filme não foi encontrado no banco de dados, verifique a ortografia <span>em inglês</span>.</p>`;
        }
        else {
            mostrarResultado(dados);
        }
    }
    catch (err) {
        console.log(err);
    }
};
pesqBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (tituloInput.value === "") {
        respostaTexto.innerHTML = `<p>Digite um título</p>`;
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
