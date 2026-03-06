const produtoInput = document.querySelector<HTMLInputElement>("#produto");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");

if (!produtoInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer) throw new Error("Algum elemento não está ligado ao DOM");

let dados: { produto: string; categoria: string }[] = [];

addBtn.addEventListener("click", () => {
  const categoria = document.querySelector<HTMLInputElement>('input[name="categoria"]:checked');
  if (!categoria) throw new Error("Categoria não está ligado ao DOM");
  dados.push({ produto: produtoInput.value, categoria: categoria.value });
  console.log(dados);
  produtoInput.value = "";

  arrayContainer.innerHTML = dados.map((d) => `<p>Produto: ${d.produto}, categoria: ${d.categoria}`).join("");
});

calcBtn.addEventListener("click", () => {
  const categoria = dados.map((d) => d.categoria);
  let eletronicos = 0;
  let roupas = 0;
  categoria.forEach((d) => {
    d === "Roupas" ? roupas++ : eletronicos++;
  });
  const categoriaContados = { Eletronicos: eletronicos, Roupas: roupas };

  respostasContainer.innerHTML = `
    <p>Quantidade de eletrônicos: ${categoriaContados.Eletronicos}<p>
    <p>Quantidade de roupas: ${categoriaContados.Roupas}<p>
  `;
});
