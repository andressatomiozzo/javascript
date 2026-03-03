const track = document.querySelector<HTMLDivElement>(".track");
const prevBtn = document.querySelector<HTMLButtonElement>(".prev");
const nextBtn = document.querySelector<HTMLButtonElement>(".next");
const dotsContainer = document.querySelector<HTMLDivElement>(".dots-container");

if (!track||!prevBtn||!nextBtn||!dotsContainer) throw new Error ("Algum elemento não está ligado ao DOM");

const slides = Array.from(track.children);
let indiceAtual = 0

// ? ------------- Criar as bolinhas ----------------

slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dots");
  dot.ariaLabel = `Ir para a imagem ${i+1}`
  dotsContainer.appendChild(dot);
  dot.addEventListener("click", () => goTo(i));
});

// ! =============== Função para o índice mudar =================

const goTo = (i:number) => {
  indiceAtual = (i + slides.length) % slides.length;
  update();
}

// ? ============= Função que passa o slide ============

const update = () => {
  track.style.transform = `translateX(-${indiceAtual * 100}%)`
}

// ! ------------------- Interação com os botões -----------------

prevBtn.addEventListener("click", () => goTo(indiceAtual - 1));
nextBtn.addEventListener("click", () => goTo(indiceAtual + 1));