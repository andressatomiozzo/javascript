const fraseInput = document.querySelector<HTMLInputElement>("#frase");
const palavrasBtn = document.querySelector<HTMLButtonElement>("#palavrasBtn");
const letrasBtn = document.querySelector<HTMLButtonElement>("#letrasBtn");
const resetBtn = document.querySelector<HTMLButtonElement>("#resetBtn");
const respostaPalavras = document.querySelector<HTMLParagraphElement>("#respostaPalavras");
const respostaLetras = document.querySelector<HTMLParagraphElement>("#respostaLetras");

if (!fraseInput || !palavrasBtn || !letrasBtn || !resetBtn || !respostaPalavras || !respostaLetras)
  throw new Error("Algum elemento não está ligado ao DOM");

let frase;

palavrasBtn.addEventListener("click", () => {
  frase = fraseInput.value;
  const palavras = frase.split(" ").filter((d) => d !== "");
  respostaPalavras.innerText = `Número de palavras: ${palavras.length}`;
});

letrasBtn.addEventListener("click", () => {
  frase = fraseInput.value;
  const letras = frase.split("").filter((d) => d !== "" && d !== " ");
  respostaLetras.innerText = `Número de letras: ${letras.length}`;
});

resetBtn.addEventListener("click", () => {
  fraseInput.value = "";
  respostaPalavras.innerText = "";
  respostaLetras.innerText = "";
});
