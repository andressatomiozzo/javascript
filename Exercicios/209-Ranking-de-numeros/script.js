const numeros = document.getElementById("numeros");
const addBtn = document.getElementById("add-btn");
const respostaDoArray = document.getElementById("resposta-do-array");
const maiorValorBtn = document.getElementById("maior-valor-btn");
const menorValorBtn = document.getElementById("menor-valor-btn");
const respostaMaior = document.getElementById("resposta-do-maior");
const respostaMenor = document.getElementById("resposta-do-menor");

let arrayNum = [];

addBtn.addEventListener("click", () => {
  arrayNum.push(Number(numeros.value));

  respostaDoArray.innerText = `Array: ${arrayNum}`;

  numeros.value = "";
});

maiorValorBtn.addEventListener("click", () => {
  // const maior = Math.max(...arrayNum);
  let maior = arrayNum[0];
  for (let i = 0; i < arrayNum.length; i++) {
    if (maior < arrayNum[i]) {
      maior = arrayNum[i];
    }
  }

  respostaMaior.innerText = `O maior número é o ${maior}`;
});

menorValorBtn.addEventListener("click", () => {
  // const menor = Math.min(...arrayNum);
  let menor = arrayNum[0];
  for (let i = 1; i < arrayNum.length; i++) {
    if (menor > arrayNum[i]) {
      menor = arrayNum[i];
    }
  }

  respostaMenor.innerText = `O menor número é o ${menor}`;
});
