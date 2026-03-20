const valorInput = document.querySelector<HTMLInputElement>("#valor");
const tipoEntradaInput = document.querySelector<HTMLSelectElement>("#tipo-entrada");
const tipoSaidaInput = document.querySelector<HTMLSelectElement>("#tipo-saida");
const form = document.querySelector<HTMLFormElement>("form");
const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const respostaContainer = document.querySelector<HTMLParagraphElement>("#resposta-container");

if (!valorInput || !tipoEntradaInput || !tipoSaidaInput || !form || !alerta || !respostaContainer) throw new Error("Algum elemento não está ligado ao DOM");

const mostrarNaTela = (valorConvertido: number) => {
  respostaContainer.innerText = `Valor convertido: ${valorConvertido.toFixed(2)}`
}

type data = {
  [key: string]: {
    [key: string]: number;
  };
};

const converterValorLogica = (dados: data) => {
  const entrada = tipoEntradaInput.value
  const saida = tipoSaidaInput.value
  
  const valorConvertido = Number(valorInput.value) * dados[entrada]?.[saida];

  console.log(valorConvertido)
  mostrarNaTela(valorConvertido);
};

const converterValor = async () => {
  try {
    const resposta = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${tipoEntradaInput.value}.json`);
    if (!resposta.ok) {
      alerta.innerText = "Houve algum problema na conversão, tente mais tarde";
    } else {
      const dados = await resposta.json();
      converterValorLogica(dados);
    }
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (tipoEntradaInput.value === "" || tipoSaidaInput.value === "") {
    alerta.innerText = "Selecione a moeda de troca";
  } else {
    converterValor();
  }
});
