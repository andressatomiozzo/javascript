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

const resetarResposta = () => {
  respostaBandeira.src = "";
  respostaMaps.href = "";
  respostaMaps.innerText = "";
  respostaNomeOficial.innerText = "";
  respostaNomeNativo.innerText = "";
  respostaCapital.innerText = "";
  respostaContinente.innerText = "";
  respostaLingua.innerText = "";
};

type data = [
  {
    name: {
      official: string;
      nativeName: Record<                    //um objeto com chaves desconhecidas mas valores do tipo string: objeto
        string,
        {
          official: string;
          common: string;
        }
      >;
    };
    altSpellings: string[];
    languages: Record<string, string>;
    capital: string[];
    continents: string[];
    flags: { png: string };
    maps: { googleMaps: string };
  },
];

const mostrarNaTela = (dados: data) => {
  alerta.innerText = "";
  nomeInput.value = "";
  respostaBandeira.src = `${dados[0].flags.png ?? "Sem bandeira"}`;
  respostaMaps.href = `${dados[0].maps.googleMaps ?? "#"}` ;
  respostaMaps.innerText = "Clique para ver no Mapa!";
  respostaNomeOficial.innerText = `Nome oficial: ${dados[0].name.official}`;
  respostaNomeNativo.innerText = `Nome nativo: ${Object.values(dados[0].name.nativeName ?? {})
    .map((d) => d.official)
    .join(", ") ?? "Sem nome nativo"}`;
  respostaCapital.innerText = `Capital: ${dados[0].capital  ?? "Sem capital"}`;
  respostaContinente.innerText = `Continente: ${dados[0].continents  ?? "Sem continente"}`;
  respostaLingua.innerText = `Línguas: ${Object.values(dados[0].languages) ?? "Sem línguas faladas"}`;
};

const buscarPaises = async (pais: string) => {
  try {
    const resposta = await fetch(`https://restcountries.com/v3.1/name/${pais}`);
    const dados = await resposta.json();
    console.log(dados)
    mostrarNaTela(dados);
  } catch (err) {
    alerta.innerText = `Houve algum problema, verifique a ortografia.`;
    resetarResposta();
    console.log(err);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  buscarPaises(nomeInput.value);
});
