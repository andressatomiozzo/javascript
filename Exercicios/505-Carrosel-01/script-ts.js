var track = document.querySelector(".track");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
if (!prevBtn || !nextBtn || !track)
    throw new Error("Algum elemento não está conectado ao DOM");
var indexAtual = 0;
var indexTotal = 4;
var update = function () {
    track.style.transform = "translateX(-".concat(indexAtual * 100, "%)");
};
prevBtn.addEventListener("click", function () {
    indexAtual = (indexAtual + indexTotal - 1) % indexTotal;
    update();
});
nextBtn.addEventListener("click", function () {
    indexAtual = (indexAtual + 1) % indexTotal;
    update();
});
