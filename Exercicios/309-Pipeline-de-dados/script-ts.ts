const numerosInput = document.querySelector<HTMLInputElement>("#numeros");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");
const resetBtn = document.querySelector<HTMLButtonElement>(".reset");
const arrayContent = document.querySelector<HTMLParagraphElement>("#array-content");
const respostaContent = document.querySelector<HTMLParagraphElement>("#resposta-content");

if (!numerosInput || !addBtn || !calcBtn || !resetBtn || !arrayContent || !respostaContent)
  throw new Error("Algum elemento não está ligado ao DOM");

let numerosArray: number[] = [];

addBtn.addEventListener("click", () => {
  numerosArray.push(Number(numerosInput.value));
  arrayContent.innerText = `Array: ${numerosArray}`;
  numerosInput.value = ""
})

calcBtn.addEventListener("click", () => {
  const resposta = numerosArray.filter((n) => n % 2 === 0).map((n) => n * 2).reduce((acc, n) => acc + n);
  respostaContent.innerText = `${resposta}`
})

resetBtn.addEventListener("click", () => {
  numerosArray = [];
  arrayContent.innerText = "";
  respostaContent.innerText = "";
})