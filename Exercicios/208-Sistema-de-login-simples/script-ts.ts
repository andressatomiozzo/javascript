const mail = document.querySelector<HTMLInputElement>("#mail");
const senha = document.querySelector<HTMLInputElement>("#senha");
const form = document.querySelector<HTMLFormElement>("form");
const alerta = document.querySelector<HTMLInputElement>("#alerta");

if (!mail || !senha || !form || !alerta) throw new Error("Algum elemento não está ligado ao DOM");

let i = 0;

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (i === 2) {
    alerta.innerText = "Você já atingiu o limite de três tentativas, tente novamente mais tarde";
    alerta.style.color = "red";
  } else {
    if (mail.value === "email.valido@mail.com" && senha.value === "senha.valida") {
      document.body.innerHTML = "<h1>Parabéns, você entrou</h1>";
    } else {
      alerta.innerText = "Seu e-mail ou senha estão incorretos";
      alerta.style.color = "red";
    }
  }

  console.log("email.valido@mail.com, senha.valida");

  mail.value = "";
  senha.value = "";

  i++;
});
