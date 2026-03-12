const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const idadeInput = document.querySelector<HTMLInputElement>("#idade");
const addBtn = document.querySelector<HTMLButtonElement>("#adicionar-btn");
const calcBtn = document.querySelector<HTMLButtonElement>("#calcular-btn");
const respostasContaoner = document.querySelector<HTMLDivElement>("#respostas-container");

if (!nomeInput || !idadeInput || !addBtn || !calcBtn || !respostasContaoner) throw new Error("Algum elemento não está ligado ao DOM");

let dados: { nome: string; idade: number }[] = [];

addBtn.addEventListener("click", () => {
  dados.push({ nome: nomeInput.value, idade: Number(idadeInput.value) });
  nomeInput.value = ""
  idadeInput.value = ""
});

calcBtn.addEventListener("click", () => {
  let maioresIdade = 0;
  let maioresIdadeNomes: string[] = [];
  dados.forEach((d) => {
    if (d.idade >= 18) {
      maioresIdade += 1;
      maioresIdadeNomes.push(d.nome);
    }
  });

  respostasContaoner.innerText = `Existem ${dados.length} pessoas nesse relatório. ${maioresIdade} pessoas são maiores de idade: ${maioresIdadeNomes}`;
});
