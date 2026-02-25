const nomei = document.querySelector<HTMLInputElement>("#nome");
const idadei = document.querySelector<HTMLInputElement>("#idade");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const respostaContainer = document.querySelector<HTMLDivElement>("#resposta-container");

if (!nomei || !idadei || !addBtn || !arrayContainer || !calcBtn || !respostaContainer) {
  throw new Error("Algum elemento do DOM não foi encontrado. Verifique IDs/classes no HTML.");
}

let dados: { nome: string; idade: number }[] = [];

function renderLista() {
  arrayContainer!.innerHTML = dados.map((d) => `<p>Nome: ${d.nome}, idade: ${d.idade}</p>`).join("");
}

addBtn.addEventListener("click", () => {
  const nome = nomei.value.trim();
  const idade = Number(idadei.value);

  if (!nome) {
    respostaContainer.textContent = "Digite um nome válido.";
    return;
  }

  dados.push({ nome, idade });

  nomei.value = "";
  idadei.value = "";
  respostaContainer.textContent = "";

  renderLista();
});

calcBtn.addEventListener("click", () => {
  if (dados.length === 0) {
    respostaContainer.textContent = "Adicione pelo menos uma pessoa antes de calcular.";
    return;
  }

  const maiores = dados.filter((d) => d.idade >= 18).map((d) => d.nome);

  const soma = dados.reduce((acc, d) => acc + d.idade, 0);
  const media = soma / dados.length;

  const ordenadoNomes = [...dados].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR", { sensitivity: "base" })).map((d) => d.nome);

  respostaContainer.innerHTML = `
    <p>Maiores de idade: ${maiores.length ? maiores.join(", ") : "ninguém"}</p>
    <p>Média das idades: ${media.toFixed(2)}</p>
    <p>Nomes em ordem alfabética: ${ordenadoNomes.join(", ")}</p>
  `;
});
