const nomei = document.querySelector<HTMLInputElement>("#nome");
const precoi = document.querySelector<HTMLInputElement>("#preco");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");

if (!nomei || !precoi || !addBtn || !arrayContainer || !calcBtn || !respostasContainer) throw new Error("Algum elemento não está ligado ao DOM");

let dados: { nome: string; preco: number }[] = [];

const atualizarLista = () => {
  arrayContainer.innerHTML = dados.map((d) => `<p>Nome: ${d.nome}, preço: ${d.preco}. </p>`).join("");
};

addBtn.addEventListener("click", () => {
  const nome = nomei.value;
  const preco = Number(precoi.value);

  dados.push({ nome, preco });

  atualizarLista();

  nomei.value = "";
  precoi.value = "";
});

calcBtn.addEventListener("click", () => {
  const novoArray = dados.map((d) => {
    return{
      nome: d.nome.toLowerCase(),
      preco: d.preco * 0.9
    };
  });

  respostasContainer.innerHTML = novoArray.map((d) => `<p>Nome: ${d.nome}, preço: ${d.preco}. </p>`).join("");
});
