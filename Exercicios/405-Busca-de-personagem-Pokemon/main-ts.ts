const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const form = document.querySelector<HTMLButtonElement>("form");
const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const respostaFoto = document.querySelector<HTMLParagraphElement>("#resposta-foto");
const respostaNome = document.querySelector<HTMLParagraphElement>("#resposta-nome");
const respostaAltura = document.querySelector<HTMLParagraphElement>("#resposta-altura");
const respostaPeso = document.querySelector<HTMLParagraphElement>("#resposta-peso");

if (!nomeInput || !form || !alerta || !respostaFoto || !respostaNome || !respostaAltura || !respostaPeso)
  throw new Error("Algum elemento não está ligado ao DOM");

const buscarPokemon = async (nome:string) => {
  const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
  const dados = await resposta.json();
  console.log(dados);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!nomeInput.value) {
    alerta.innerText = "Digite algum nome de Pokémon"
  } else {
    buscarPokemon(nomeInput.value);
  }

});
