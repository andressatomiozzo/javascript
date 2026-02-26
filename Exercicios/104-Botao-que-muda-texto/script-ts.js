var textoInicial = document.querySelector("#textoInicial");
var botaoMudar = document.querySelector("#botaoMudar");
if (!textoInicial || !botaoMudar)
    throw new Error("Algum elemento não esá ligado ao DOM");
var estado = true;
botaoMudar.addEventListener("click", function () {
    estado = !estado;
    textoInicial.innerText = estado ? "ON" : "OFF";
    textoInicial.style.color = estado ? "blue" : "red";
});
