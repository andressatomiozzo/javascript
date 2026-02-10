const button = document.querySelector("button");
const ordenarBtn = document.getElementById("ordenarBtn");
const dezNumBtn = document.getElementById("dezNumBtn");
const limparBtn = document.getElementById('limparBtn');
const resultado = document.getElementById("resultado");
const resultadoContainer = document.getElementById("resultadoContainer");
const erro = document.createElement("p");
let numeros = [];

button.addEventListener("click", () => {
  let validar = Math.floor(Math.random() * 100);
  if (numeros.includes(validar)) {
    erro.innerText = `Opa, o número sorteado foi o ${validar}, ele já está no array. Sorteie mais um número`;
    resultadoContainer.appendChild(erro);
  } else {
    numeros.push(validar);
  }
  resultado.innerText = `Array: ${numeros}`;
});

ordenarBtn.addEventListener("click", () => {
  numeros.sort(function (a, b) {
    return a - b;
  });
  resultado.innerText = `Array: ${numeros}`;
});

dezNumBtn.addEventListener("click", () => {
  for (i = 0; i < 10; i++) {
    let validar = Math.floor(Math.random() * 100);
    if (!numeros.includes(validar)){
      numeros[i] = validar
    } else {
      i --
    }
  }
  resultado.innerText = `Array: ${numeros}`;
});

limparBtn.addEventListener('click', () => {
  resultado.innerText = "Array:";
  erro.innerText = "";
})
