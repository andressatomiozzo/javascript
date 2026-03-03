const textInput = document.querySelector<HTMLInputElement>("#iname");
const resposta = document.querySelector<HTMLParagraphElement>("#resposta");

if (!textInput || !resposta) throw new Error("Algum elemento não está ligado ao DOM");

textInput.addEventListener("input", () => {
  resposta.innerText = textInput.value;
});
