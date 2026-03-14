const idInput = document.querySelector<HTMLInputElement>("#numero");
const gerarBtn = document.querySelector<HTMLButtonElement>(".gerar");
const respostaId = document.querySelector<HTMLParagraphElement>("#resposta-id");
const respostaMensagem = document.querySelector<HTMLParagraphElement>("#resposta-mensagem");

if (!idInput || !gerarBtn || !respostaId || !respostaMensagem) throw new Error("Algum elemento não está ligado ao DOM");

