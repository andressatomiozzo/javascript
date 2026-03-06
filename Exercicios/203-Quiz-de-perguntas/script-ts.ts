const perguntaInput = document.querySelector<HTMLInputElement>("#pergunta");
const respostaInput = document.querySelector<HTMLInputElement>("#resposta");
const pontosInput = document.querySelector<HTMLInputElement>("#pontos");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const pontuacaoContent = document.querySelector<HTMLParagraphElement>("#pontuacao-content");

if (!perguntaInput || !respostaInput || !pontosInput || !addBtn || !respostasContainer || !calcBtn || !pontuacaoContent)
  throw new Error("Algum elemento não está ligado ao DOM");

let dados: { pergunta: string; resposta: string; pontos: number }[] = [];

addBtn.addEventListener("click", () => {
  const pergunta = perguntaInput.value;
  const resposta = respostaInput.value;
  const pontos = Number(pontosInput.value);

  if (pontos < 0 || pontos > 10) {
    respostasContainer.innerHTML = `<p>Adicione um valor para pontos válido. Entre 0 a 10.</p>`;
    respostasContainer.style.color = "red";
  } else {
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
})
