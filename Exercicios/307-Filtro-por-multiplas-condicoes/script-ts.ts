const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const idadeInput = document.querySelector<HTMLInputElement>("#idade");
const estadoInput = document.querySelector<HTMLInputElement>("#estado");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const arrayContainer = document.querySelector<HTMLDivElement>("#array-container");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");

if (!nomeInput || !idadeInput || !estadoInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
  throw new Error("Algum elemento não está ligado ao DOM");

let dados: { nome: string; idade: number; estado: string }[] = [];

addBtn.addEventListener("click", () => {
  if (nomeInput.value === `` || idadeInput.value === `` || Number(idadeInput.value) < 0 || Number(idadeInput.value) > 130) {
    arrayContainer.innerHTML = `<p>Escreva um valor válido <p>`;
    arrayContainer.style.color = "red";
  } else {
    const nome = nomeInput.value;
    const idade = Number(idadeInput.value);
    const estado = estadoInput.value;
  
    dados.push({ nome: nome, idade: idade, estado: estado });
  
    arrayContainer.innerHTML = `${dados.map((d) => `<p>Nome: ${d.nome}, idade: ${d.idade}, estado: ${d.estado}</p>`).join("")}`;
    arrayContainer.style.color = "black";

    nomeInput.value = "";
    idadeInput.value = "";
    estadoInput.value = "";
  }
});

calcBtn.addEventListener("click", () => {
  const maioresIdade = dados.filter((d) => d.idade >= 18);
  const moramEmSP = dados.filter((d) => d.estado === `SP`);
  const moramEmSPMaioresIdade = maioresIdade.filter((d) => d.estado === `SP`)
  
  respostasContainer.innerHTML = `<p>Pessoas que moram em SP e são maiores de idade: ${moramEmSPMaioresIdade.length === 0? `ninguém` : moramEmSPMaioresIdade.map((d) => d.nome).join(", ")}`
})
