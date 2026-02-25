const nome = document.querySelector<HTMLInputElement>("#nome");
const form = document.querySelector<HTMLFormElement>("form");
const respostasContainer = document.querySelector<HTMLInputElement>("#respostas-container");

if (!form) throw new Error("Form não encontrado");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (!nome) return;
  if (!respostasContainer) return;

  const resposta = document.createElement("p");
  resposta.innerText = `O nome digitado foi o ${nome.value}`;
  respostasContainer.appendChild(resposta);

  nome.value = "";
});
