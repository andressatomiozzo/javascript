const notas = document.getElementById("notas");
const adicBtn = document.getElementById("adicBtn");
const mostrarNotas = document.getElementById("mostrarNotas");
const calcBtn = document.getElementById("calcBtn");
const apagarBtn = document.getElementById("apagarBtn");
const resultado = document.getElementById("resultado");

let notasArray = [];

adicBtn.addEventListener("click", () => {
  notasArray.push(notas.value);
  mostrarNotas.innerText = `Notas: ${notasArray}`;
  notas.value = ``;
});

calcBtn.addEventListener("click", () => {
  let soma = 0;
  for (i = 0; i < notasArray.length; i++) {
    soma += Number(notasArray[i]);
  }

  let media = soma / notasArray.length;

  if (media >= 7 && media <= 10) {
    resultado.innerText = `Você foi aprovado, sua nota média foi de ${media.toFixed(2)}`;
  } else {
    resultado.innerText = `Você foi reprovado, sua nota média foi de ${media.toFixed(2)}`;
  }
});

apagarBtn.addEventListener('click', () => {
  notasArray = [];
  mostrarNotas.innerText = `Notas: ${notasArray}`;
  
  resultado.innerText = ``;
})
