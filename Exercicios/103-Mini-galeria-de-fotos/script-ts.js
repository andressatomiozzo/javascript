var imagens = document.querySelector(".imagens");
var prevBtn = document.querySelector("#anterior");
var nextBtn = document.querySelector("#proximo");
if (!prevBtn || !nextBtn)
    throw new Error("Algum botão não está conectado do JS.");
if (!imagens)
    throw new Error("O container das imagens não está conectado ao JS.");
var galeria = [];
var indiceAtual = 0;
for (var i = 1; i <= 4; i++) {
    var img = document.createElement("img");
    img.src = "./imagens/".concat(i, ".png");
    img.alt = "Imagem ".concat(i);
    galeria.push(img);
}
if (galeria.length === 0)
    throw new Error("A galeria está vazia.");
var update = function () {
    var imagemAtual = galeria[indiceAtual];
    if (!imagemAtual || !imagens)
        return;
    imagens.innerHTML = "";
    imagens.appendChild(imagemAtual);
};
prevBtn.addEventListener("click", function () {
    indiceAtual = (indiceAtual + galeria.length - 1) % galeria.length;
    update();
});
nextBtn.addEventListener("click", function () {
    indiceAtual = (indiceAtual + 1) % galeria.length;
    update();
});
update();
