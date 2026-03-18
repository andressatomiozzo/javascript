"use strict";
const postsQuantidadeInput = document.querySelector("#posts-quantidade");
const form = document.querySelector("form");
const alerta = document.querySelector("#alerta");
const respostaContainer = document.querySelector("#resposta-container");
if (!postsQuantidadeInput || !form || !alerta || !respostaContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
const reset = () => {
    respostaContainer.innerHTML = "";
};
const mostrarResposta = (dados) => {
    reset();
    dados.forEach((d) => {
        const divDados = document.createElement("div");
        const idDados = document.createElement("p");
        const titleDados = document.createElement("p");
        const bodyDados = document.createElement("p");
        idDados.innerText = `Post ${d.id}`;
        titleDados.innerText = `Título: ${d.title}`;
        bodyDados.innerText = `Corpo: ${d.body}`;
        divDados.appendChild(idDados);
        divDados.appendChild(titleDados);
        divDados.appendChild(bodyDados);
        respostaContainer.appendChild(divDados);
    });
};
const buscarPosts = async (postsQuantidade) => {
    try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postsQuantidade}`);
        if (!resposta.ok) {
            alerta.innerText = "Houve algum erro na busca";
        }
        else {
            const dados = await resposta.json();
            mostrarResposta(dados);
        }
    }
    catch (err) {
        console.log(err);
        alerta.innerText = "Houve algum erro na busca";
    }
};
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const postsQuantidade = Number(postsQuantidadeInput.value);
    if (Number.isInteger(postsQuantidade)) {
        buscarPosts(postsQuantidade);
    }
    else {
        alerta.innerText = `Digite apenas números`;
    }
    postsQuantidadeInput.value = "";
});
