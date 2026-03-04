const form = document.querySelector<HTMLFormElement>("form");
const nomeInput = document.querySelector<HTMLInputElement>("#iname");
const senhaInput = document.querySelector<HTMLInputElement>("#ipassword");

if (!form || !nomeInput || !senhaInput) throw new Error("Algum elemento não está ligado ao DOM");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (nomeInput.value === "" || senhaInput.value === "") {
    window.alert("Você não preencheu algum campo");
  } else {
    nomeInput.value = "";
    senhaInput.value = "";
  }
});
