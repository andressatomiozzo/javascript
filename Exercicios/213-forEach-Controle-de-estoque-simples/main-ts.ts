const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const quantidadeInput = document.querySelector<HTMLInputElement>("#quantidade");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const produtosContainer = document.querySelector<HTMLDivElement>("#produtos-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const respostaContent = document.querySelector<HTMLParagraphElement>("#resposta");

if (!nomeInput || !quantidadeInput || !addBtn || !produtosContainer || !calcBtn || !respostaContent)
  throw new Error("Algum elemento não está ligado ao DOM");

let produtos: { nome: string; quantidade: number }[] = [];

addBtn.addEventListener("click", () => {
  produtos.push({ nome: nomeInput.value, quantidade: Number(quantidadeInput.value) });
  produtosContainer.innerHTML = `<p>Produtos:</p>${produtos.map((p) => `<p>Nome do produto: ${p.nome}, quantidade: ${p.quantidade}</p>`).join("")}`;

  nomeInput.value = "";
  quantidadeInput.value = "";
});

calcBtn.addEventListener("click", () => {
  let foraDeEstoque: number = 0;
  let reposicao: string[] = [];

  produtos.forEach((p) => {
    if (p.quantidade <= 0) foraDeEstoque = +1;
    if (p.quantidade <= 1) reposicao.push(p.nome);
  });

  respostaContent.innerText = `Existem ${produtos.length} produtos. ${foraDeEstoque} produtos estão fora de estoque, ${reposicao.length} produtos precisam de reposição: ${reposicao}`;
  console.log(reposicao);
});
