const numeroInput = document.querySelector<HTMLInputElement>("#numeros");
const addBtn = document.querySelector<HTMLInputElement>("#add-btn");
const arrayContainer = document.querySelector<HTMLParagraphElement>("#resposta-do-array");
const maiorBtn = document.querySelector<HTMLButtonElement>("#maior-valor-btn");
const menorBtn = document.querySelector<HTMLButtonElement>("#menor-valor-btn");
const maiorContainer = document.querySelector<HTMLParagraphElement>("#resposta-do-maior");
const menorContainer = document.querySelector<HTMLParagraphElement>("#resposta-do-menor");

if (!numeroInput || !addBtn || !arrayContainer || !maiorBtn || !menorBtn || !maiorContainer || !menorContainer)
  throw new Error("Algum elemento não está ligado ao DOM");

let dados: number[] = [];

addBtn.addEventListener("click", () => {
  if (numeroInput.value === "") {
    arrayContainer.textContent = "Digite um valor válido";
  } else {
    dados.push(Number(numeroInput.value));
    arrayContainer.textContent = `Array: ${dados}`;
  }
});

maiorBtn.addEventListener("click", () => {
  let maior = dados[0];
  dados.forEach((d) => {
    if (d > maior) maior = d;
  });
  maiorContainer.innerText = `Maior número: ${maior}`;
});

menorBtn.addEventListener("click", () => {
  let menor = dados[0];
  for (let i = 1; i < dados.length; i++) {
    if (dados[i] < menor) menor = dados[i];
  }
  menorContainer.innerText = `Menor número: ${menor}`;
});
