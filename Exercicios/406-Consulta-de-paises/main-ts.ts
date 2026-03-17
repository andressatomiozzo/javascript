const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const form = document.querySelector<HTMLButtonElement>("form");
const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const respostaBandeira = document.querySelector<HTMLImageElement>("#resposta-bandeira");
const respostaMaps = document.querySelector<HTMLLinkElement>("#resposta-maps");
const respostaNomeOficial = document.querySelector<HTMLParagraphElement>("#resposta-nomeOficial");
const respostaNomeNativo = document.querySelector<HTMLParagraphElement>("#resposta-nomeNativo");
const respostaCapital = document.querySelector<HTMLParagraphElement>("#resposta-capital");
const respostaContinente = document.querySelector<HTMLParagraphElement>("#resposta-continente");
const respostaLingua = document.querySelector<HTMLParagraphElement>("#resposta-lingua");

if (
  !nomeInput ||
  !form ||
  !alerta ||
  !respostaBandeira ||
  !respostaMaps ||
  !respostaNomeOficial ||
  !respostaNomeNativo ||
  !respostaCapital ||
  !respostaContinente ||
  !respostaLingua
)
  throw new Error("Ops, algum elemento não está ligado ao DOM");

const buscarPaises = async (pais: string) => {
  try {
    const resposta = await fetch(`https://restcountries.com/v3.1/name/${pais}`);
    const dados = await resposta.json();
    mostrarNaTela(dados);
  } catch (err) {
    alerta.innerText = `Houve algum problema, verifique a ortografia.`;
    console.log(err);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  buscarPaises(nomeInput.value);
});
