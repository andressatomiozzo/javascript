const tituloInput = document.querySelector<HTMLInputElement>("#titulo");
const anoInput = document.querySelector<HTMLInputElement>("#ano");
const pesqBtn = document.querySelector<HTMLButtonElement>(".pesq");
const resetBtn = document.querySelector<HTMLButtonElement>(".reset");
const respostaContainer = document.querySelector<HTMLDivElement>("#resposta-container");

if (!tituloInput || !anoInput || !pesqBtn || !resetBtn || !respostaContainer) throw new Error("Algum elemento não está ligado ao DOM");

