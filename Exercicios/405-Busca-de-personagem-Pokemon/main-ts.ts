const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const form = document.querySelector<HTMLButtonElement>("form");
const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const respostaFoto = document.querySelector<HTMLImageElement>("#resposta-foto");
const respostaNome = document.querySelector<HTMLParagraphElement>("#resposta-nome");
const respostaAltura = document.querySelector<HTMLParagraphElement>("#resposta-altura");
const respostaPeso = document.querySelector<HTMLParagraphElement>("#resposta-peso");

if (!nomeInput || !form || !alerta || !respostaFoto || !respostaNome || !respostaAltura || !respostaPeso)
  throw new Error("Algum elemento não está ligado ao DOM");

const resetar = () => {
  respostaNome.innerHTML = "";
  respostaAltura.innerText = "";
  respostaPeso.innerText = "";
  respostaFoto.src = "";
  alerta.innerText = "";
};

type data = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
};

const mostrarNaTela = (dados: data) => {
  resetar();
  respostaNome.innerHTML = `Nome: <span>${dados.name}<span>`;
  respostaAltura.innerText = `Altura: ${dados.height * 10}cm`;
  respostaPeso.innerText = `Peso: ${dados.weight / 10}kg`;
  respostaFoto.src = `${dados.sprites.front_default}`;
};

const buscarPokemon = async (nome: string) => {
  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    const dados = await resposta.json();
    if (!resposta.ok) {
      resetar();
      alerta.innerText = `Houve algum problena com a API.`;
    } else {
      mostrarNaTela(dados);
    }
  } catch (err) {
    resetar();
    alerta.innerText = `Houve algum problena com a API, verifique se o nome digitado está correto`;
    console.log(err);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!nomeInput.value) {
    alerta.innerText = "Digite algum nome de Pokémon";
  } else {
    buscarPokemon(nomeInput.value);
  }
});
