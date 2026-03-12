const numeroInput = document.querySelector<HTMLInputElement>("#numero");
const addBtn = document.querySelector<HTMLButtonElement>("#add-btn");
const arrayContent = document.querySelector<HTMLParagraphElement>("#array-content");
const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const calcBtn = document.querySelector<HTMLButtonElement>("#calcular-btn");
const respostasContainer = document.querySelector<HTMLDivElement>("#respostas-container");

if (!numeroInput || !addBtn || !arrayContent || !alerta || !calcBtn || !respostasContainer) throw new Error("Algum elemento não está ligado ao DOM");

let dados: number[] = [];

addBtn.addEventListener("click", () => {
  const numero = Number(numeroInput.value);
  if (numero >= 0 && numero <= 10) {
    dados.push(numero);
  } else {
    alerta.innerText = "Digite um número válido entre 0 e 10";
  }
  arrayContent.innerText = `Array: ${dados}`;
  numeroInput.value = "";
});

calcBtn.addEventListener("click", () => {
  let soma: number = 0;
  let maiorQueSete: number = 0;
  let maiorNota: number = dados[0];
  let menorNota: number = dados[0];
  dados.forEach((n) => {
    soma += n;
    if (n >= 7) maiorQueSete += 1;
    if (maiorNota < n) maiorNota = n;
    if (menorNota > n) menorNota = n;
  });
  const media = soma / dados.length;

  respostasContainer.innerHTML = `<p>Média das notas: ${media.toFixed(2)}</p>
  <p>Notas >= 7: ${maiorQueSete}</p>
  <p>Maior nota: ${maiorNota}</p>
  <p>Menior nota: ${menorNota}</p>`;
});
