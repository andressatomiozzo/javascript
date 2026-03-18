const postsQuantidadeInput = document.querySelector<HTMLInputElement>("#posts-quantidade");
const form = document.querySelector<HTMLButtonElement>("form");
const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const respostaContainer = document.querySelector<HTMLDivElement>("#posts-quantidade");

if (!postsQuantidadeInput || !form || !alerta || !respostaContainer) throw new Error("Algum elemento não está ligado ao DOM");

const buscarPosts = async (postsQuantidade: number) => {
  const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postsQuantidade}`);
  const dados = await resposta.json();
  console.log(dados);
};

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const postsQuantidade = Number(postsQuantidadeInput.value);
  if (Number.isInteger(postsQuantidade)) {
    buscarPosts(postsQuantidade);
  } else {
    alerta.innerText = `Digite apenas números`;
  }
});
