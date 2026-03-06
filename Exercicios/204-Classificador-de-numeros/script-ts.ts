const numeroInput = document.querySelector<HTMLInputElement>("#num");
const addBtn = document.querySelector<HTMLButtonElement>("#addBtn");
const arrayContainer = document.querySelector<HTMLParagraphElement>("#array");
const calcBtn = document.querySelector<HTMLButtonElement>("#calcBtn");
const resetBtn = document.querySelector<HTMLButtonElement>("#resetBtn");
const respostaContainer = document.querySelector<HTMLDivElement>("#resposta-container");

if (!numeroInput || !addBtn || !arrayContainer || !calcBtn || !resetBtn || !respostaContainer)
  throw new Error("ALgum elemento não está ligado ao DOM");

let dados: number[] = [];

addBtn.addEventListener("click", () => {
  dados.push(Number(numeroInput.value));
  arrayContainer.innerText = `Array: ${dados}`;
  numeroInput.value = "";
});

calcBtn.addEventListener("click", () => {
  let parMaior10: number[] = [];
  let parMenor10: number[] = [];
  let imparMaior10: number[] = [];
  let imparMenor10: number[] = [];
  dados.forEach((d) => {
    if (d % 2 === 0) {
      if (d >= 10) {
        parMaior10.push(d);
      } else {
        parMenor10.push(d);
      }
    } else {
      if (d >= 10) {
        imparMaior10.push(d);
      } else {
        imparMenor10.push(d);
      }
    }
  });
  respostaContainer.innerHTML = `
    <p>Números pares menores que 10: ${parMenor10.length === 0 ? `nenhum` : parMenor10}</p>
    <p>Números pares maiores ou igual a 10: ${parMaior10.length === 0 ? `nenhum` : parMaior10}</p>
    <p>Números ímpares menores que 10: ${imparMenor10.length === 0 ? `nenhum` : imparMenor10}</p>
    <p>Números ímpares maiores ou igual a 10: ${imparMaior10.length === 0 ? `nenhum` : imparMaior10}</p>
  `;
});

resetBtn.addEventListener("click", () => {
  dados = [];
  arrayContainer.innerText = "Array: ";
  respostaContainer.innerHTML = "";
});
