const notasInput = document.querySelector<HTMLInputElement>("#notas");
const addBtn = document.querySelector<HTMLButtonElement>("#adicBtn");
const arrayContent = document.querySelector<HTMLParagraphElement>("#mostrarNotas");
const calcBtn = document.querySelector<HTMLButtonElement>("#calcBtn");
const apagarBtn = document.querySelector<HTMLButtonElement>("#apagarBtn");
const resultadoContent = document.querySelector<HTMLParagraphElement>("#resultado");

if (!notasInput || !addBtn || !arrayContent || !calcBtn || !apagarBtn || !resultadoContent) throw new Error("Alguma variável não está ligada ao DOM");

let notas: number[] = [];

addBtn.addEventListener("click", () => {
  const nota = Number(notasInput.value)

  if (nota < 0 || nota > 10 ){
    arrayContent.innerText = "Digite um valor válido entre 0 e 10"
  } else {
    notas.push(nota);
    arrayContent.innerText = `Notas: ${notas}`;
  }
  notasInput.value = "";
});

calcBtn.addEventListener("click", () => {
  const media = notas.reduce((acc, n) => acc + n) / notas.length;
  resultadoContent.innerText = `Média final: ${media.toFixed(2)}. Aluno ${media >= 7 ? `aprovado` : `reprovado`}`;
});
