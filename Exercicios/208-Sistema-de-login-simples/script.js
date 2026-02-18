const mail = document.getElementById("mail");
const senha = document.getElementById("senha");
const form = document.querySelector("form");
const alerta = document.getElementById("alerta");

let i = 0;

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (i === 2) {
    alerta.innerText = "Você já atingiu o limite de três tentativas, tente novamente mais tarde";
    alerta.style.color = "red";
    document.body.appendChild(alerta);
  } else {
    if (mail.value === "email.valido@mail.com" && senha.value === "senha.valida") {
      document.body.innerHTML = "<h1>Parabéns, você entrou</h1>";
    } else {
      alerta.innerText = "Seu e-mail ou senha estão incorretos";
      alerta.style.color = "red";
      document.body.appendChild(alerta);
    }
  }

  mail.value = "";
  senha.value = "";

  i++;
});
