"use strict";
const nomeInput = document.querySelector("#nome");
const salarioInput = document.querySelector("#salario");
const addBtn = document.querySelector(".add");
const arrayContainer = document.querySelector("#array-container");
const calcBtn = document.querySelector(".calc");
const respostasContainer = document.querySelector("#respostas-container");
if (!nomeInput || !salarioInput || !addBtn || !arrayContainer || !calcBtn || !respostasContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
let dados = [];
addBtn.addEventListener("click", () => {
    const ativoInput = document.querySelector("#ativo");
    if (!ativoInput)
        throw new Error("Nenhum ativo está marcado");
    const nome = nomeInput.value;
    const salario = Number(salarioInput.value);
    const ativo = ativoInput.value;
    if (nome === "" || salario < 0 || ativo === "") {
        arrayContainer.innerHTML = `Adicione um valor válido`;
        arrayContainer.style.color = "red";
    }
    else {
        if (ativo === "t") {
            dados.push({ nome: nome, salario: salario, ativo: true });
        }
        else {
            dados.push({ nome: nome, salario: salario, ativo: false });
        }
        arrayContainer.innerHTML = `${dados.map((d) => `<p>Nome: ${d.nome}, salário: R$${d.salario.toFixed(2)}, ativo: ${d.ativo === true ? "pago" : "em atrazo"}</p>`).join("")}`;
        arrayContainer.style.color = "black";
        nomeInput.value = "";
        salarioInput.value = "";
    }
});
