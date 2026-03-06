const produtoInput = document.querySelector<HTMLInputElement>("#produto");
const eletroInput = document.querySelector<HTMLInputElement>("#eletro");
const roupaInput = document.querySelector<HTMLInputElement>("#roupa");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");

if (!produtoInput || !eletroInput || !roupaInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
  throw new Error("Algum elemento não está ligado ao DOM");

