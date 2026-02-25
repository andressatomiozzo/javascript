var maisBtn = document.querySelector("#mais");
var menosBtn = document.querySelector("#menos");
var resposta = document.querySelector("#resposta");
var numAtual = 0;
if (!maisBtn || !menosBtn)
    throw new Error("Falta algum botão");
var update = function () {
    if (!resposta)
        return;
    resposta.innerText = String(numAtual);
    // resposta.innerText = `${numAtual}`;
};
maisBtn.addEventListener("click", function () {
    numAtual++;
    update();
});
menosBtn.addEventListener("click", function () {
    numAtual--;
    update();
});
