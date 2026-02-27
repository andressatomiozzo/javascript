var quadrado = document.querySelector("#quadrado");
var botaoMudar = document.querySelector("#botaoMudar");
if (!quadrado || !botaoMudar)
    throw new Error("Algum elemento não está ligado ao DOM");
var cor = ["preto", "vermelho", "rosa"];
var corIndex = 0;
botaoMudar.addEventListener("click", function () {
    // quadrado.classList.remove(`${cor[corIndex]}`);
    corIndex = (corIndex + 1) % cor.length;
    quadrado.setAttribute("class", "".concat(cor[corIndex]));
    // quadrado.classList.add(`${cor[corIndex]}`);
});
//! o código que está comentado remove (.remove) e depois adiciona (.add) uma classe
//* o código que está ativo remove todas as classes que o item tem e adiciona só o que quero (.setAtribute)
