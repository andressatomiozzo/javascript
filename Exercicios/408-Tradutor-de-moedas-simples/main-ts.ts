const valorInput = document.querySelector<HTMLInputElement>("#valor");
const tipoEntradaInput = document.querySelector<HTMLSelectElement>("#tipo-entrada");
const tipoSaidaInput = document.querySelector<HTMLSelectElement>("#tipo-saida");
const form = document.querySelector<HTMLFormElement>("form");
const alerta = document.querySelector<HTMLParagraphElement>("#alerta");

if (!valorInput || !tipoEntradaInput || !tipoSaidaInput || !form || !alerta) throw new Error("Algum elemento não está ligado ao DOM");

const converterValor = async () => {
  try {
    const resposta = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${tipoEntradaInput.value}.json`);
    if(!resposta.ok) {
      alerta.innerText = "Houve algum problema na conversão, tente mais tarde";
    } else {
      const dados = await resposta.json();
      console.log(resposta)
      console.log(dados)
    }
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (tipoEntradaInput.value === ""|| tipoSaidaInput.value === "") {
    alerta.innerText = "Selecione a moeda de troca"
  } else {
    converterValor();
  }
});
