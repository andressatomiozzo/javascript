const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const detalhesBtn = document.querySelector<HTMLButtonElement>(".detalhes");
const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const respostaBandeira = document.querySelector<HTMLImageElement>("#resposta-bandeira");
const respostaMaps = document.querySelector<HTMLImageElement>("#resposta-maps");
const respostaNomeOficial = document.querySelector<HTMLImageElement>("#resposta-nomeOficial");
const respostaCapital = document.querySelector<HTMLImageElement>("#resposta-capital");
const respostaContinente = document.querySelector<HTMLImageElement>("#resposta-continente");
const respostaLingua = document.querySelector<HTMLImageElement>("#resposta-lingua");

if(!nomeInput||!detalhesBtn||!alerta||!respostaBandeira||!respostaMaps||!respostaNomeOficial||!respostaCapital||!respostaContinente||!respostaLingua) throw new Error ("Ops, algum elemento não está ligado ao DOM");