const produtoInput = document.querySelector<HTMLInputElement>("#produto");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");

if (!produtoInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
  throw new Error("Algum elemento não está ligado ao DOM");

let dados: { produto: string; categoria: string }[] = [];

addBtn.addEventListener("click", () => {
  const categoria = document.querySelector<HTMLInputElement>('input[name="categoria"]:checked');
  if (!categoria) throw new Error("Categoria não está ligado ao DOM");
  dados.push({produto:produtoInput.value, categoria: categoria.value})
  console.log(dados);
  produtoInput.value = "";
});
