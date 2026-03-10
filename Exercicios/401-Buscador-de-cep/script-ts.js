"use strict";
const nomeInput = document.querySelector("#nome");
const mailInput = document.querySelector("#mail");
const cepInput = document.querySelector("#cep");
const logradouroInput = document.querySelector("#logradouro");
const numeroInput = document.querySelector("#numero");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector("#cidade");
const estadoInput = document.querySelector("#estado");
if (!nomeInput || !mailInput || !cepInput || !logradouroInput || !numeroInput || !bairroInput || !cidadeInput || !estadoInput)
    throw new Error("Algum elemento não está ligado ao DOM");
