const cidadeInput = document.querySelector<HTMLInputElement>("#cidade");
const latInput = document.querySelector<HTMLInputElement>("#lat");
const lonInput = document.querySelector<HTMLInputElement>("#lon");
const form = document.querySelector<HTMLFormElement>("form");

const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const respostaContainer = document.querySelector<HTMLDivElement>("#resposta-container");
const respostaCidade = document.querySelector<HTMLParagraphElement>("#cidade-resposta");
const respostaLat = document.querySelector<HTMLParagraphElement>("#lat-resposta");
const respostaLon = document.querySelector<HTMLParagraphElement>("#lon-resposta");
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
  !respostaCidade ||
  !respostaLat ||
  !respostaLon ||
  !tempo ||
  !temperatura ||
  !sensacaoTermica ||
  !tempMax ||
  !tempMin ||
  !umidade
)
  throw new Error("Alguma variável não está ligada ao DOM");

const resetar = () => {
  alerta.innerText = "";
  respostaCidade.innerText = "";
  respostaLat.innerText = "";
  respostaLon.innerText = "";
  tempo.innerText = "";
  temperatura.innerText = "";
  sensacaoTermica.innerText = "";
  tempMax.innerText = "";
  tempMin.innerText = "";
  umidade.innerText = "";
};

type data = {
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      main: string;
    },
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
};

const mostrarDados = (dados: data) => {
  respostaCidade.innerText = `Cidade: ${dados.name}`;
  respostaLat.innerText = `Latitude: ${dados.coord.lat}`;
  respostaLon.innerText = `Longitude: ${dados.coord.lon}`;
  tempo.innerText = `Tempo: ${dados.weather[0].main}`;
  temperatura.innerText = `Temperatura: ${(dados.main.temp - 273.15).toFixed(2)}ºC`;
  sensacaoTermica.innerText = `Sensação térmica: ${(dados.main.feels_like - 273.15).toFixed(2)}ºC`;
  tempMax.innerText = `Temperatura mínima: ${(dados.main.temp_min - 273.15).toFixed(2)}ºC`;
  tempMin.innerText = `Temperatura máxima: ${(dados.main.temp_max - 273.15).toFixed(2)}ºC`;
  umidade.innerText = `Umidade: ${dados.main.humidity}`;
};

const minhaKey = `af0c221d7e46cecd00f11fbb9eb17c63`;

const buscarClimaLatLon = async (lat: number, lon: number) => {
  try {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${minhaKey}`);
    if (!resposta.ok) {
      alerta.innerText = "Algo deu errado, verifique a ortografia";
    } else {
      const dados = await resposta.json();
      console.log(dados);
      mostrarDados(dados);
    }
  } catch (err) {
    console.log(err);
    alerta.innerText = "Algo deu errado, verifique a ortografia";
  }
};

const buscarClimaCidade = async (cidade: string) => {
  try {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${minhaKey}`);
    if (!resposta.ok) {
      alerta.innerText = "Algo deu errado, verifique a ortografia";
    } else {
      const dados = await resposta.json();
      mostrarDados(dados);
      console.log(dados);
    }
  } catch (err) {
    console.log(err);
    alerta.innerText = "Algo deu errado, verifique a ortografia";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (cidadeInput.value === "" && latInput.value !== "" && lonInput.value !== "") {
    resetar();
    buscarClimaLatLon(Number(latInput.value), Number(lonInput.value));
  } else if (cidadeInput.value !== "" && latInput.value === "" && lonInput.value === "") {
    resetar();
    buscarClimaCidade(cidadeInput.value);
  } else {
    resetar();
    alerta.innerText = "Digite o nome da cidade OU as coordenadas.";
  }
});
