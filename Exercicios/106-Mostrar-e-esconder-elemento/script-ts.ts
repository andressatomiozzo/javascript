const textoConfidencial = document.querySelector<HTMLParagraphElement>("#textoConfidencial");
const botaoMagico = document.querySelector<HTMLButtonElement>("#botaoMagico");

if(!textoConfidencial || !botaoMagico) throw new Error ("ALgum elemento do DOM não está ligado do JS");

botaoMagico.addEventListener("click", () => {
    textoConfidencial.classList.toggle(`displayNone`);
})