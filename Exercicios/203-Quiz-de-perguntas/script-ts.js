"use strict";
const perguntaInput = document.querySelector("#pergunta");
const respostaInput = document.querySelector("#resposta");
const pontosInput = document.querySelector("#pontos");
const addBtn = document.querySelector(".add");
const respostasContainer = document.querySelector("#respostas-container");
const calcBtn = document.querySelector(".calc");
const pontuacaoContent = document.querySelector("#pontuacao-content");
if (!perguntaInput || !respostaInput || !pontosInput || !addBtn || !respostasContainer || !calcBtn || !pontuacaoContent)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
addBtn.addEventListener("click", () => {
    const pergunta = perguntaInput.value;
    const resposta = respostaInput.value;
    const pontos = Number(pontosInput.value);
    if (pontos < 0 || pontos > 10) {
        respostasContainer.innerHTML = `<p>Adicione um valor para pontos válido. Entre 0 a 10.</p>`;
        respostasContainer.style.color = "red";
    }
    else {
        dados.push({ pergunta: pergunta, resposta: resposta, pontos: pontos });
        respostasContainer.innerHTML = dados.map((d) => `<p> Pergunta: ${d.pergunta}. Resposta: ${d.resposta}. Pontos: ${d.pontos}<p>`).join("");
        respostasContainer.style.color = "black";
        perguntaInput.value = "";
        respostaInput.value = "";
        pontosInput.value = "";
    }
});
calcBtn.addEventListener("click", () => {
    const pontosTotal = dados.map((d) => d.pontos).reduce((acc, d) => acc + d);
    pontuacaoContent.innerText = `Pontuação final: ${pontosTotal}`;
});
