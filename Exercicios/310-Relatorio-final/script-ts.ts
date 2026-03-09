const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const salarioInput = document.querySelector<HTMLInputElement>("#salario");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");

if (!nomeInput || !salarioInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
  throw new Error("Algum elemento não está ligado ao DOM");

