const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const mensagemInput = document.querySelector<HTMLTextAreaElement>("#mensagem");
const form = document.querySelector<HTMLFormElement>("form");
const alerta = document.querySelector<HTMLParagraphElement>("#alerta");
const respostaContainer = document.querySelector<HTMLDivElement>("#resposta-container");

if (!nomeInput || !mensagemInput || !form || !alerta || !respostaContainer) throw new Error("Algum elemento não está ligado ao DOM!");

const enviarComentario = async () => {
  try {
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit`, {
      method: "POST",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify({
        name: nomeInput.value,
        comment: mensagemInput.value,
      }),
    });
    const dados = await resposta.json();
    if (!resposta.ok) {
      throw new Error(dados);
    }
    console.log(`Dados enviados: Nome: ${nomeInput.value}, Comentário: ${mensagemInput.value}`);
    nomeInput.value = "";
    mensagemInput.value = "";
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  enviarComentario();
});
