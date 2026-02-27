var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nomei = document.querySelector("#nome");
var idadei = document.querySelector("#idade");
var addBtn = document.querySelector(".add");
var arrayContainer = document.querySelector("#array-container");
var calcBtn = document.querySelector(".calc");
var respostaContainer = document.querySelector("#resposta-container");
if (!nomei || !idadei || !addBtn || !arrayContainer || !calcBtn || !respostaContainer) {
    throw new Error("Algum elemento do DOM não foi encontrado. Verifique IDs/classes no HTML.");
}
var dados = [];
function renderLista() {
    arrayContainer.innerHTML = dados.map(function (d) { return "<p>Nome: ".concat(d.nome, ", idade: ").concat(d.idade, "</p>"); }).join("");
}
addBtn.addEventListener("click", function () {
    var nome = nomei.value.trim();
    var idade = Number(idadei.value);
    if (!nome) {
        respostaContainer.textContent = "Digite um nome válido.";
        return;
    }
    dados.push({ nome: nome, idade: idade });
    nomei.value = "";
    idadei.value = "";
    respostaContainer.textContent = "";
    renderLista();
});
calcBtn.addEventListener("click", function () {
    if (dados.length === 0) {
        respostaContainer.textContent = "Adicione pelo menos uma pessoa antes de calcular.";
        return;
    }
    var maiores = dados.filter(function (d) { return d.idade >= 18; }).map(function (d) { return d.nome; });
    var soma = dados.reduce(function (acc, d) { return acc + d.idade; }, 0);
    var media = soma / dados.length;
    var ordenadoNomes = __spreadArray([], dados, true).sort(function (a, b) { return a.nome.localeCompare(b.nome, "pt-BR", { sensitivity: "base" }); }).map(function (d) { return d.nome; });
    respostaContainer.innerHTML = "\n    <p>Maiores de idade: ".concat(maiores.length ? maiores.join(", ") : "ninguém", "</p>\n    <p>M\u00E9dia das idades: ").concat(media.toFixed(2), "</p>\n    <p>Nomes em ordem alfab\u00E9tica: ").concat(ordenadoNomes.join(", "), "</p>\n  ");
});
