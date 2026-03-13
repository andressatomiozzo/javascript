"use strict";
const buscarBtn = document.querySelector(".buscar");
const respostaContainer = document.querySelector("#resposta-container");
const nomeContent = document.querySelector("#nome");
const mailContent = document.querySelector("#mail");
const paisContent = document.querySelector("#pais");
const fotoContent = document.querySelector("#foto");
if (!buscarBtn || !respostaContainer || !nomeContent || !mailContent || !paisContent || !fotoContent)
    throw new Error("Algum elemento não está ligado ao DOM");
const mostrarNaTela = (pessoa) => {
    fotoContent.src = `${pessoa.results[0].picture.large}`;
    const nome = pessoa.results[0].name;
    nomeContent.innerText = `${nome.title + " " + nome.first + " " + nome.last}`;
    mailContent.innerText = `${pessoa.results[0].email}`;
    paisContent.innerText = `${pessoa.results[0].location.country}`;
};
// const buscarPessoa = () => {
//   fetch("https://randomuser.me/api/")
//     .then((resposta) => {
//       if (!resposta.ok) {
//         console.log("A promisse foi rejeitada");
//       }
//       return resposta.json();
//     })
//     .then((pessoa) => mostrarNaTela(pessoa));
// };
const buscarPessoa = async () => {
    try {
        const resposta = await fetch("https://randomuser.me/api/");
        if (!resposta.ok) {
            console.log("A promisse foi rejeitada");
        }
        else {
            const dados = await resposta.json();
            mostrarNaTela(dados);
        }
    }
    catch (err) {
        console.log(err);
    }
};
buscarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    buscarPessoa();
});
