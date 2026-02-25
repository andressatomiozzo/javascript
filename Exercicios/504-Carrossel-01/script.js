var track = document.getElementById("track");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var slideAtual = 0;
var numTotalDeSlides = 4;
var update = function () {
    if (!track)
        return;
    track.style.transform = "translateX(-".concat(slideAtual * 100, "%)");
};
if (!prevBtn || !nextBtn)
    throw new Error("Botões faltanto");
prevBtn.addEventListener("click", function () {
    slideAtual = (slideAtual + numTotalDeSlides - 1) % numTotalDeSlides;
    console.log(slideAtual);
    update();
});
nextBtn.addEventListener("click", function () {
    slideAtual = (slideAtual + 1) % numTotalDeSlides;
    console.log(slideAtual);
    update();
});
