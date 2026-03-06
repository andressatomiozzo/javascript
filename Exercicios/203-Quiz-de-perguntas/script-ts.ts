const perguntaInput = document.querySelector<HTMLInputElement>("#pergunta");
const respostaInput = document.querySelector<HTMLInputElement>("#resposta");
const pontosInput = document.querySelector<HTMLInputElement>("#pontos");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const pontuacaoContent = document.querySelector<HTMLParagraphElement>("#pontuacao-content");

if (!perguntaInput || !respostaInput || !pontosInput || !addBtn || !respostasContainer || !calcBtn || !pontuacaoContent)
  throw new Error("Algum elemento não está ligado ao DOM");
