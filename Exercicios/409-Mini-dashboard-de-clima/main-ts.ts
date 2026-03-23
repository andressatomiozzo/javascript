const cidadeInput = document.querySelector<HTMLInputElement>("#cidade");
const latInput = document.querySelector<HTMLInputElement>("#lat");
const lonInput = document.querySelector<HTMLInputElement>("#lon");
const form = document.querySelector<HTMLFormElement>("form");

const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const respostaContainer = document.querySelector<HTMLDivElement>("#resposta-container");
const tempo = document.querySelector<HTMLParagraphElement>("#tempo");
const temperatura = document.querySelector<HTMLParagraphElement>("#temperatura");
const sensacaoTermica = document.querySelector<HTMLParagraphElement>("#sensacao-termica");
const tempMin = document.querySelector<HTMLParagraphElement>("#temp-min");
const tempMax = document.querySelector<HTMLParagraphElement>("#temp-max");
const umidade = document.querySelector<HTMLParagraphElement>("#umidade");

if (
  !cidadeInput ||
  !latInput ||
  !lonInput ||
  !form ||
  !alerta ||
  !respostaContainer ||
  !tempo ||
  !temperatura ||
  !sensacaoTermica ||
  !tempMax ||
  !tempMin ||
  !umidade
)
  throw new Error("Alguma variável não está ligada ao DOM");

const minhaKey = `af0c221d7e46cecd00f11fbb9eb17c63`;

const buscarClimaCidade = async (cidade: string) => {
  try {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${minhaKey}`);
    if (!resposta.ok) {
      alerta.innerText = "Algo deu errado, verifique a ortografia";
    } else {
      const dados = await resposta.json();
      console.log(dados);
    }
  } catch (err) {
    console.log(err);
    alerta.innerText = "Algo deu errado, verifique a ortografia";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // if (cidadeInput.value === "" && latInput.value !== "" && lonInput.value !== "") {
  //   buscarClimaLatLon(Number(latInput.value), Number(lonInput.value));
  // } else
  if (cidadeInput.value !== "" && latInput.value === "" && lonInput.value === "") {
    buscarClimaCidade(cidadeInput.value);
  }
});
