const track = document.querySelector<HTMLDivElement>("#track");
const prevBtn = document.querySelector<HTMLButtonElement>("#prev-btn");
const nextBtn = document.querySelector<HTMLButtonElement>("#next-btn");
const dotsCOntainer = document.querySelector<HTMLDivElement>("#dots-container");

if (!track || !prevBtn || !nextBtn || !dotsCOntainer) throw new Error("Alguma variável não está ligada ao DOM");