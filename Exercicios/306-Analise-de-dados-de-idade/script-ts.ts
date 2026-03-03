const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const idadeInput = document.querySelector<HTMLInputElement>("#idade");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");

if (!nomeInput || !idadeInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
  throw new Error("Algum elemento não está ligado ao DOM");

let dados: { nome: string; idade: number }[] = [];

addBtn.addEventListener("click", () => {
  if (nomeInput.value === "" || idadeInput.value === "" || Number(idadeInput.value) < 0 || Number(idadeInput.value) > 150) {
    arrayContainer.innerHTML = `<p>Adicione um valor válido </p>`;
    arrayContainer.style.color = "red";
  } else {
    const nome = nomeInput.value;
    const idade = Number(idadeInput.value);

    dados.push({ nome: nome, idade: idade });

    arrayContainer.innerHTML = `${dados.map((d) => `<p>Nome: ${d.nome}, idade: ${d.idade}</p>`).join("")}`;
    arrayContainer.style.color = "black";

    nomeInput.value = "";
    idadeInput.value = "";
  }
});
