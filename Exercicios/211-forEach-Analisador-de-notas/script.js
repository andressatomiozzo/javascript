const numero = document.getElementById("numero");
const addBtn = document.getElementById("add-btn");
const alerta = document.getElementById("alerta");
const arrayContent = document.getElementById("array-content");
const calcularBtn = document.getElementById("calcular-btn");
const respostasContainer = document.getElementById("respostas-container");

let numeros = [];

addBtn.addEventListener("click", () => {
  if (Number(numero.value) > 10 || Number(numero.value) < 0) {
    alerta.innerText = "Escreva um valor válido entre 0 e 10";
    alerta.style.color = "red";
  } else {
    numeros.push(Number(numero.value));
    arrayContent.innerText = `Valores que serão analisados: ${numeros}`;

    numero.value = "";
    alerta.innerText = "";
  }
});

calcularBtn.addEventListener("click", () => {
  let soma = 0;
  let maiorSete = 0;
  let maiorDeSete = [];
  let maiorNota = numeros[0];
  let menorNota = numeros[0];

  numeros.forEach((number) => {
    soma += number;
    if (number >= 7) {
      maiorSete++;
      maiorDeSete.push(number);
    }
    if (number > maiorNota) maiorNota = number;
    if (number < menorNota) menorNota = number;
  });

  let media = soma / numeros.length;

  respostasContainer.innerHTML = `
    <p>A média das notas foi: ${media}. </p>
    <p>A quantidade de notas maior que 7 foi: ${maiorSete}. Estas foram: ${maiorDeSete}</p>
    <p>A maior nota foi: ${maiorNota}.</p>
    <p>A menor nota foi: ${menorNota}.</p>
  `;
});
