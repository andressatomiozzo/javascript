const nomeInput = document.querySelector<HTMLInputElement>("#nome");
const mailInput = document.querySelector<HTMLInputElement>("#mail");
const cepInput = document.querySelector<HTMLInputElement>("#cep");
const logradouroInput = document.querySelector<HTMLInputElement>("#logradouro");
const numeroInput = document.querySelector<HTMLInputElement>("#numero");
const bairroInput = document.querySelector<HTMLInputElement>("#bairro");
const cidadeInput = document.querySelector<HTMLInputElement>("#cidade");
const estadoInput = document.querySelector<HTMLInputElement>("#estado");
const alerta = document.querySelector<HTMLParagraphElement>("#alerta");

if (!nomeInput || !mailInput || !cepInput || !logradouroInput || !numeroInput || !bairroInput || !cidadeInput || !estadoInput || !alerta)
  throw new Error("Algum elemento não está ligado ao DOM");



const eNumero = (numero: string) => /^[0-9]+$/.test(numero);
const cepValido = (cep: string) => cep.length === 8 && eNumero(cep);

const buscarEndereco = async () => {
  const cep = cepInput.value;
  if (cepValido(cep)) {
    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await resposta.json();
      if (!resposta.ok) {
        throw new Error("Algo deu errado na promisse que busca o CEP");
      } else if (dados.hasOwnProperty("erro")){
        alerta.innerText = "Cep não encontrado."
      } else {
        console.log(dados)
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    alerta.innerText = "Digite um valor válido, 8 números seguidos";
  }
};

cepInput.addEventListener("focusout", buscarEndereco);
