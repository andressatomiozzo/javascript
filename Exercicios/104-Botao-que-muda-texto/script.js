const textoInicial = document.getElementById("textoInicial");
const botaoMudar = document.getElementById("botaoMudar");

// botaoMudar.addEventListener("click", () => {
//   if (textoInicial.innerText === "ON") {
//     textoInicial.innerText = "OFF";
//     textoInicial.style.color = "red";
//   } else {
//     textoInicial.innerText = "ON";
//     textoInicial.style.color = "blue";
//   }
// });




// MANEIRA MAIS FÁCIL DE MANTER:

let ligado = true;

botaoMudar.addEventListener("click", () => {
  ligado = !ligado;

  textoInicial.innerText = ligado ? "ON" : "OFF";
  textoInicial.style.color = ligado ? "blue" : "red";
});
