const track = document.querySelector<HTMLDivElement>("#track");
const prevBtn = document.querySelector<HTMLButtonElement>(".prev");
const nextBtn = document.querySelector<HTMLButtonElement>(".next");
const dotsContainer = document.querySelector<HTMLDivElement>("#dots-container");

if (!track || !prevBtn || !nextBtn || !dotsContainer) throw new Error ("Alguma variável não está ligado ao DOM")

