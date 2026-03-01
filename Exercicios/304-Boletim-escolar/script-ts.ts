const nomei = document.querySelector<HTMLInputElement>("#nome");
const nota1i = document.querySelector<HTMLInputElement>("#nota1");
const nota2i = document.querySelector<HTMLInputElement>("#nota2");
const nota3i = document.querySelector<HTMLInputElement>("#nota3");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const respostaContainer = document.querySelector<HTMLDivElement>("#resposta-container");

if (!nomei || !nota1i || !nota2i || !nota3i || !addBtn || !arrayContainer || !calcBtn || !respostaContainer) throw new Error ("Algum elemento não está ligado ao DOM")