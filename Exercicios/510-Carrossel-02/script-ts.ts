const track = document.querySelector<HTMLDivElement>("#track");
const prevBtn = document.querySelector<HTMLButtonElement>("#prev-btn");
const nextBtn = document.querySelector<HTMLButtonElement>("#next-btn");
const dotsCOntainer = document.querySelector<HTMLDivElement>("#dots-container");

if (!track || !prevBtn || !nextBtn || !dotsCOntainer) throw new Error("Alguma variável não está ligada ao DOM");

let indexAtual = 0
const indexTotal = Array.from(track.children);

indexTotal.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.ariaLabel = `Ir para a imagem ${i +1}`
  dot.classList.add("dots");
  dot.addEventListener("click", () => goTo(i))

  dotsCOntainer.appendChild(dot);
})

const dots = document.querySelectorAll<HTMLButtonElement>(".dots");