const track = document.querySelector<HTMLDivElement>("#track");
const imagens = document.querySelectorAll<HTMLImageElement>(".imagens");
const dotsContainer = document.querySelector<HTMLDivElement>("#dots-container");

if (!track || !dotsContainer) throw new Error("Alguma variável não está ligada ao DOM");

let indexAtual = 0
const indexTotal = Array.from(track.children);

indexTotal.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.ariaLabel = `Ir para a imagem ${i +1}`
  dot.classList.add("dots");
  dot.addEventListener("click", () => goTo(i))

  dotsContainer.appendChild(dot);
})

const dots = document.querySelectorAll<HTMLButtonElement>(".dots");

const update = () => {
  

  dots.forEach((dot, i) => {
    dot.classList.remove("dots-active");
    if(i === indexAtual) {
      dot.classList.add("dots-active")
    }
  })
}

const goTo = (i:number) => {
  indexAtual = (i + indexTotal.length) % indexTotal.length
  update();
}


update();