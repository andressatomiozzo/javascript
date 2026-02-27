const nota = document.getElementById("nota");
const addBtn = document.querySelector(".add");
const respostaArray = document.getElementById("resposta-array");
const calcBtn = document.querySelector(".calc");
const resposta = document.getElementById("resposta");

let dados = [];

addBtn.addEventListener("click", () => {
  dados.push(Number(nota.value));
  respostaArray.innerText = `Array: ${dados}`;
  nota.value = "";
});

calcBtn.addEventListener("click", () => {
  // let maioresQue7 = dados.filter((nota) => {
  //   if(nota > 7) return nota
  // });
  const maioresQue7 = dados.filter((nota) => nota > 7);

  const soma = dados.reduce((acc, nota) => {
    return acc + nota;
  });

  const media = soma / dados.length;

  const conceito = dados.map((dado) => {
    if (dado >= 9) {
      return "A";
    } else if (dado >= 8) {
      return "B";
    } else if (dado >= 7) {
      return "C";
    } else if (dado >= 6) {
      return "D";
    } else {
      return "F";
    }
  });

  resposta.innerText = `As notas maiores que 7 foram as ${maioresQue7}, a média das notas foi de ${media} e os conceitos são: ${conceito}`;
});
