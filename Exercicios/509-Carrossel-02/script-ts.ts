const track = document.querySelector<HTMLDivElement>(".track");
const prevBtn = document.querySelector<HTMLButtonElement>(".prev");
const nextBtn = document.querySelector<HTMLButtonElement>(".next");
const dotsContainer = document.querySelector<HTMLDivElement>(".dots-container");

if (!track || !prevBtn || !nextBtn || !dotsContainer) throw new Error("Algum elemento não está ligado ao DOM");

let indexAtual = 0;
const indexTotal = Array.from(track.children);

