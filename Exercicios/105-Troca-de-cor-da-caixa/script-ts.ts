const quadrado = document.querySelector<HTMLDivElement>("#quadrado");
const botaoMudar = document.querySelector<HTMLButtonElement>("#botaoMudar");

if (!quadrado || !botaoMudar) throw new Error ("Algum elemento não está ligado ao DOM");

const cor = ["preto", "vermelho", "rosa"]
let corIndex:number = 0

botaoMudar.addEventListener("click", () => {
    // quadrado.classList.remove(`${cor[corIndex]}`);
    corIndex = (corIndex + 1) % cor.length;
    quadrado.setAttribute("class", `${cor[corIndex]}`);
    // quadrado.classList.add(`${cor[corIndex]}`);
})

//! o código que está comentado remove (.remove) e depois adiciona (.add) uma classe
//* o código que está ativo remove todas as classes que o item tem e adiciona só o que quero (.setAtribute)