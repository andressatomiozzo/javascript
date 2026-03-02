const produto = document.querySelector<HTMLInputElement>("#produto");
const preco = document.querySelector<HTMLInputElement>("#preco");
const quantidade = document.querySelector<HTMLInputElement>("#quantidade");
const addBtn = document.querySelector<HTMLBRElement>(".add");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const calcBtn = document.querySelector<HTMLBRElement>(".calc");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");

if (!produto || !preco || !quantidade || !addBtn || !arrayContainer || !calcBtn || !respostasContainer) throw new Error("Algum elemento não está ligado ao DOM");

