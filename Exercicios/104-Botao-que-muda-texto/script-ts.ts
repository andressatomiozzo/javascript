const textoInicial = document.querySelector<HTMLParagraphElement>("#textoInicial");
const botaoMudar = document.querySelector<HTMLButtonElement>("#botaoMudar");

if (!textoInicial || !botaoMudar) throw new Error("Algum elemento não esá ligado ao DOM");

let estado:boolean = true;

botaoMudar.addEventListener("click", () => {
  estado = !estado;

  textoInicial.innerText = estado ? "ON" : "OFF";
  textoInicial.style.color = estado ? "blue" :  "red";
});
