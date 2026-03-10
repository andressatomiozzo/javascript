"use strict";
const nomeInput = document.querySelector("#nome");
const mailInput = document.querySelector("#mail");
const cepInput = document.querySelector("#cep");
const logradouroInput = document.querySelector("#logradouro");
const numeroInput = document.querySelector("#numero");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector("#cidade");
const estadoInput = document.querySelector("#estado");
const alerta = document.querySelector("#alerta");
if (!nomeInput || !mailInput || !cepInput || !logradouroInput || !numeroInput || !bairroInput || !cidadeInput || !estadoInput || !alerta)
    throw new Error("Algum elemento não está ligado ao DOM");
const limparInputs = () => {
    logradouroInput.value = "";
    bairroInput.value = "";
    cidadeInput.value = "";
    estadoInput.value = "";
};
const preencherDados = (dados) => {
    logradouroInput.value = dados.logradouro;
    bairroInput.value = dados.bairro;
    cidadeInput.value = dados.localidade;
    estadoInput.value = dados.uf;
};
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length === 8 && eNumero(cep);
const buscarEndereco = async () => {
    limparInputs();
    const cep = cepInput.value;
    if (cepValido(cep)) {
        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const dados = await resposta.json();
            if (!resposta.ok) {
                throw new Error("Algo deu errado na promisse que busca o CEP");
            }
            else if (dados.hasOwnProperty("erro")) {
                alerta.innerText = "Cep não encontrado.";
            }
            else {
                preencherDados(dados);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    else {
        alerta.innerText = "Digite um valor válido, 8 números seguidos";
    }
};
cepInput.addEventListener("focusout", buscarEndereco);
