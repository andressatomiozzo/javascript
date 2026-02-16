const frase = document.getElementById("frase");

const palavrasBtn = document.getElementById("palavrasBtn");
const letrasBtn = document.getElementById("letrasBtn");
const resetBtn = document.getElementById("resetBtn");

const respostaPalavras = document.getElementById("respostaPalavras");
const respostaLetras = document.getElementById("respostaLetras");

palavrasBtn.addEventListener("click", () => {
  const palavras = frase.value;
  const palavrasArray = palavras.split(" ");
  respostaPalavras.innerText = `Existem ${palavrasArray.length} palavras nesta frase`;
  console.log(palavrasArray);
});

letrasBtn.addEventListener("click", () => {
  const letras = frase.value;
  const letrasArray = letras.split("");
  let letrasArrayNew = [];
  for (let i = 0; i < letrasArray.length; i++) {
    if (letrasArray[i] !== " ") {
      letrasArrayNew.push(letrasArray[i]);
    }
  }
  respostaLetras.innerText = `Existem ${letrasArrayNew.length} letras nesta frase`;
  console.log(letrasArrayNew);
});

resetBtn.addEventListener("click", () => {
  frase.value = "";
  respostaPalavras.innerText = "";
  respostaLetras.innerText = "";
});
