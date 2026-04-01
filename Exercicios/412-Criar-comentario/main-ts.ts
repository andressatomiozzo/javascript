const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const mensagemInput = document.querySelector<HTMLTextAreaElement>("#mensagem");
const form = document.querySelector<HTMLFormElement>("form");
const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const respostaContainer = document.querySelector<HTMLDivElement>("#resposta-container");

if (!nomeInput || !mensagemInput || !form || !alerta || !respostaContainer) throw new Error("Algum elemento não está ligado ao DOM!");

