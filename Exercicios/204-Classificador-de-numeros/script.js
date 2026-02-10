const num = document.getElementById("num");
const addBtn = document.getElementById("addBtn");
const array = document.getElementById("array");
const calcBtn = document.getElementById("calcBtn");
const resetBtn = document.getElementById("resetBtn");
let arrayNum = [];

addBtn.addEventListener("click", () => {
  arrayNum.push(num.value);
  array.innerHTML = `Array: ${arrayNum}`;
  num.value = ``;
});

let resetFunc = function () {
  const respostasAntigas = document.querySelectorAll(".respostas");

  respostasAntigas.forEach((resposta) => { // esse 'resposta' só quer dizer como você vai se refirir a cada elemento dentro do array
    resposta.remove();
  });
};

calcBtn.addEventListener("click", () => {
  resetFunc();

  for (i = 0; i < arrayNum.length; i++) {
    const resposta = document.createElement("p");
    resposta.classList.add("respostas");

    if (arrayNum[i] % 2 === 0 && arrayNum[i] < 10) {
      resposta.innerText = `O valor ${arrayNum[i]} é par e menor do que 10`;
    } else if (arrayNum[i] % 2 === 0 && arrayNum[i] > 10) {
      resposta.innerText = `O valor ${arrayNum[i]} é par e maior do que 10`;
    } else if (!arrayNum[i] % 2 === 0 && arrayNum[i] < 10) {
      resposta.innerText = `O valor ${arrayNum[i]} é ímpar e menor do que 10`;
    } else {
      resposta.innerText = `O valor ${arrayNum[i]} é ímpar e maior do que 10`;
    }
    document.body.appendChild(resposta);
  }
});

resetBtn.addEventListener("click", () => {
  arrayNum = [];
  array.innerText = `Array: `;
  resetFunc();
});
