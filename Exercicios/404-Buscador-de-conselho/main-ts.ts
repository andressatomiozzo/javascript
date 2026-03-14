const idInput = document.querySelector<HTMLInputElement>("#numero");
const form = document.querySelector<HTMLButtonElement>("form");
const respostaId = document.querySelector<HTMLParagraphElement>("#resposta-id");
const respostaMensagem = document.querySelector<HTMLParagraphElement>("#resposta-mensagem");

if (!idInput || !form || !respostaId || !respostaMensagem) throw new Error("Algum elemento não está ligado ao DOM");

type data = {
  slip: {
    id: string;
    advice: string;
  };
};

const mostrarDados = (dados: data) => {
  respostaId.innerText = `Conselho nº ${dados.slip.id}`;
  respostaMensagem.innerText = `${dados.slip.advice}`;
  console.log(dados);
};

const buscarConselho = async () => {
  try {
    let resposta;
    if (idInput.value === "") {
      resposta = await fetch(`https://api.adviceslip.com/advice`);
    } else {
      resposta = await fetch(`https://api.adviceslip.com/advice/${idInput.value}`);
    }
    const dados = await resposta.json();
    if (!resposta.ok) {
      console.log("Algo deu errado na promisse");
    } else {
      mostrarDados(dados);
    }
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  buscarConselho();
});
