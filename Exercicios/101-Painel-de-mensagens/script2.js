var nome = document.querySelector("#nome");
var form = document.querySelector("form");
var respostasContainer = document.querySelector("#respostas-container");
if (!form)
    throw new Error("Form não encontrado");
form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (!nome)
        return;
    if (!respostasContainer)
        return;
    var resposta = document.createElement("p");
    resposta.innerText = "O nome digitado foi o ".concat(nome.value);
    respostasContainer.appendChild(resposta);
    nome.value = "";
});
