const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const detalhesBtn = document.querySelector<HTMLButtonElement>(".detalhes");
const respostaFoto = document.querySelector<HTMLParagraphElement>("#resposta-foto");
const respostaNome = document.querySelector<HTMLParagraphElement>("#resposta-nome");
const respostaAltura = document.querySelector<HTMLParagraphElement>("#resposta-altura");
const respostaoPeso = document.querySelector<HTMLParagraphElement>("#respostao-peso");

if (!nomeInput || !detalhesBtn || !respostaFoto || !respostaNome || !respostaAltura || !respostaoPeso)
  throw new Error("Algum elemento não está ligado ao DOM");

