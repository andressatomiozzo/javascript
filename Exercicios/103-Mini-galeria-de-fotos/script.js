const imagensContainer = document.querySelector(".imagens");        // Container
const anterior = document.getElementById("anterior");               // Botão de anterior
const proximo = document.getElementById("proximo");                 // Botão de próximo

let imagens = [];                                                   // Array que vai conter as imagens

for (let i = 1; i <= 4; i++) {                                      // Inserir as imagens
  const img = document.createElement("img");
  img.src = `imagens/${i}.png`;
  img.alt = `Imagem ${i}`;
  imagens.push(img);
  imagensContainer.appendChild(img);
}

let indiceAtual = 0;                                            // Variável que vai mostrar qual imagem vai ser adicionada na tela
render();

anterior.addEventListener("click", () => {
  if (indiceAtual > 0) {
    indiceAtual--;
  } else {
    indiceAtual = imagens.length - 1;                          // Loop infinito
  }
  render();
  console.log(indiceAtual);
});

proximo.addEventListener("click", () => {
  if (indiceAtual < imagens.length - 1) {
    indiceAtual++;
  } else {
    indiceAtual = 0;
  }
  render();
  console.log(indiceAtual);
});

function render() {
  imagensContainer.innerHTML = "";                            // Limpa o que tinha
  imagensContainer.appendChild(imagens[indiceAtual]);         // Adiciona a imagem com o índice atual
}
