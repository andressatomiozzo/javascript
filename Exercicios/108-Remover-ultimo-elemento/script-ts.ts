const containerCaixas = document.querySelector<HTMLDivElement>("#containerCaixas");
const adicionarBtn = document.querySelector<HTMLButtonElement>("#adicionarBtn");
const removerBtn = document.querySelector<HTMLButtonElement>("#removerBtn");

if (!containerCaixas || !adicionarBtn || !removerBtn) throw new Error("Algum elemento não está ligado ao DOM");

const arrayCor = ["preto", "vermelho", "amarelo", "azul"];
let i = 0;

adicionarBtn.addEventListener("click", () => {
  const caixa = document.createElement("div");
  caixa.classList.add("box", `${arrayCor[i]}`);
  containerCaixas.appendChild(caixa);
  i = (i + 1) % arrayCor.length;
});

removerBtn.addEventListener("click", () => {
  const ultimo = containerCaixas.lastElementChild;
  if(!ultimo) return;

  containerCaixas.removeChild(ultimo);
  i = (i + arrayCor.length - 1) % arrayCor.length;
});
