var textoConfidencial = document.querySelector("#textoConfidencial");
var botaoMagico = document.querySelector("#botaoMagico");
if (!textoConfidencial || !botaoMagico)
    throw new Error("ALgum elemento do DOM não está ligado do JS");
botaoMagico.addEventListener("click", function () {
    textoConfidencial.classList.toggle("displayNone");
});
