const numerosInput = document.querySelector<HTMLInputElement>("#numeros");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const resetBtn = document.querySelector<HTMLButtonElement>(".reset");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const respostaContent = document.querySelector<HTMLParagraphElement>("#resposta-content");

if (!numerosInput || !addBtn || !calcBtn || !resetBtn || !arrayContainer || !respostaContent)
  throw new Error("Algum elemento não está ligado ao DOM");
