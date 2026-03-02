const produtoi = document.querySelector<HTMLInputElement>("#produto");
const precoi = document.querySelector<HTMLInputElement>("#preco");
const quantidadei = document.querySelector<HTMLInputElement>("#quantidade");
const addBtn = document.querySelector<HTMLBRElement>(".add");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const calcBtn = document.querySelector<HTMLBRElement>(".calc");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");

if (!produtoi || !precoi || !quantidadei || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
  throw new Error("Algum elemento não está ligado ao DOM");

let dados: { produto: string; preco: number; quantidade: number }[] = [];

addBtn.addEventListener("click", () => {
  if (produtoi.value === "" || precoi.value === "" || quantidadei.value === "" || Number(precoi.value) <= 0 || Number(quantidadei.value) <= 0) {
    arrayContainer.innerHTML = `<p>Preencha todos os campos corretamente</p>`;
    arrayContainer.style.color = "red";
  } else {
    dados.push({ produto: produtoi.value, preco: Number(precoi.value), quantidade: Number(quantidadei.value) });

    arrayContainer.innerHTML = dados.map((d) => `<p>Produto: ${d.produto}, preço: R$${d.preco}, quantidade: ${d.quantidade}. </p>`).join("");
    arrayContainer.style.color = "black";

    produtoi.value = "";
    precoi.value = "";
    quantidadei.value = "";
  }
});

calcBtn.addEventListener("click", () => {
  const quantidade1 = dados.filter((d) => d.quantidade >= 1);
  const subtotal = dados.map((d) => {
    return{produto: d.produto, subtotal: d.preco * d.quantidade}
  });
  const valorTotal = subtotal.map((d) => d.subtotal).reduce((acc, n) => acc + n);

  respostasContainer.innerHTML = `
    <p>Produtos com mais de 1 item: ${quantidade1.length >= 1? quantidade1.map((d) => d.produto).join(", "): "nenhum"} </p>
    <p>Subtotal de cada produto: ${subtotal.map((d) => `${d.produto}: ${d.subtotal}`).join(", ")} </p>
    <p>Valor total do carrinho: R$${valorTotal} </p>
  `
})