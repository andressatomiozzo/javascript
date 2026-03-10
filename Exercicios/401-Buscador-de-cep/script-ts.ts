const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const mailInput = document.querySelector<HTMLInputElement>("#mail");
const cepInput = document.querySelector<HTMLInputElement>("#cep");
const logradouroInput = document.querySelector<HTMLInputElement>("#logradouro");
const numeroInput = document.querySelector<HTMLInputElement>("#numero");
const bairroInput = document.querySelector<HTMLInputElement>("#bairro");
const cidadeInput = document.querySelector<HTMLInputElement>("#cidade");
const estadoInput = document.querySelector<HTMLInputElement>("#estado");

if (!nomeInput || !mailInput || !cepInput || !logradouroInput || !numeroInput || !bairroInput || !cidadeInput || !estadoInput)
  throw new Error("Algum elemento não está ligado ao DOM");

