const carousel = document.querySelector("#carousel");
const track = carousel.querySelector(".track");
const slides = Array.from(track.children);

const prevBtn = carousel.querySelector(".prev");
const nextBtn = carousel.querySelector(".next");
const dotsWrap = carousel.querySelector(".dots");

let index = 0;

// cria as bolinhas
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.type = "button";
  dot.ariaLabel = `Ir para slide ${i + 1}`;
  dot.addEventListener("click", () => goTo(i));
  dotsWrap.appendChild(dot);
});

const dots = Array.from(dotsWrap.children);

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d) => d.classList.remove("active"));
  dots[index].classList.add("active");

  // acessibilidade: desabilita se quiser sem loop
  // prevBtn.disabled = index === 0;
  // nextBtn.disabled = index === slides.length - 1;
}

function goTo(i) {
  index = (i + slides.length) % slides.length; // loop infinito
  update();
}

prevBtn.addEventListener("click", () => goTo(index - 1));
nextBtn.addEventListener("click", () => goTo(index + 1));

// teclado (opcional)
carousel.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goTo(index - 1);
  if (e.key === "ArrowRight") goTo(index + 1);
});

// autoplay (opcional)
let timer = setInterval(() => goTo(index + 1), 3000);

// pausa ao passar mouse (opcional)
carousel.addEventListener("mouseenter", () => clearInterval(timer));
carousel.addEventListener("mouseleave", () => {
  timer = setInterval(() => goTo(index + 1), 3000);
});

// inicializa
update()
