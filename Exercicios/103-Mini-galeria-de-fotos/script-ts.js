"use strict";
const imagens = document.querySelector(".imagens");
const prevBtn = document.querySelector("#anterior");
const nextBtn = document.querySelector("#proximo");
if (!prevBtn || !nextBtn)
    throw new Error("Algum botão não está conectado do JS.");
if (!imagens)
    throw new Error("O container das imagens não está conectado ao JS.");
let galeria = [];
let indiceAtual = 0;
for (let i = 1; i <= 4; i++) {
    const img = document.createElement("img");
    img.src = `./imagens/${i}.png`;
    img.alt = `Imagem ${i}`;
    galeria.push(img);
}
if (galeria.length === 0)
    throw new Error("A galeria está vazia.");
const update = () => {
    const imagemAtual = galeria[indiceAtual];
    if (!imagemAtual || !imagens)
        return;
    imagens.innerHTML = "";
    imagens.appendChild(imagemAtual);
};
prevBtn.addEventListener("click", () => {
    indiceAtual = (indiceAtual + galeria.length - 1) % galeria.length;
    update();
});
nextBtn.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % galeria.length;
    update();
});
update();
