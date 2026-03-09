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
        arrayContainer.innerHTML = `${dados.map((d) => `<p>Nome: ${d.nome}, salário: R$${d.salario.toFixed(2)}, situação: ${d.ativo === true ? "ativo" : "desligado"}</p>`).join("")}`;
        arrayContainer.style.color = "black";
        nomeInput.value = "";
        salarioInput.value = "";
    }
});
calcBtn.addEventListener("click", () => {
    const funcAtivos = dados.filter((d) => d.ativo === true);
    const totalGasto = funcAtivos.map((d) => d.salario).reduce((acc, d) => acc + d);
    const media = totalGasto / funcAtivos.length;
    const final = { total: totalGasto, media: media };
    const funcAtivosNomes = funcAtivos.map((d) => d.nome);
    console.log(final);
    respostasContainer.innerHTML = `<p>Total gasto: ${final.total}. Média: ${final.media.toFixed(2)}. </p>
  <p>Funcionários ativos: ${funcAtivosNomes}.</p>`;
});
