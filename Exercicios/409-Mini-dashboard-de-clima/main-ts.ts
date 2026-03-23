const cidadeInput = document.querySelector<HTMLInputElement>("#cidade");
const latInput = document.querySelector<HTMLInputElement>("#lat");
const lonInput = document.querySelector<HTMLInputElement>("#lon");
const form = document.querySelector<HTMLFormElement>("form");

const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const respostaContainer = document.querySelector<HTMLDivElement>("#resposta-container");

if (!cidadeInput || !latInput || !lonInput || !form || !alerta || !respostaContainer) throw new Error("Alguma variável não está ligada ao DOM");
