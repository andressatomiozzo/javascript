const maisBtn = document.querySelector<HTMLButtonElement>("#mais");
const menosBtn = document.querySelector<HTMLButtonElement>("#menos");
const resposta = document.querySelector<HTMLParagraphElement>("#resposta");

let numAtual: number = 0;

if (!maisBtn || !menosBtn) throw new Error("Falta algum botão");

const update = () => {
  if (!resposta) return;
  resposta.innerText = String(numAtual);
  // resposta.innerText = `${numAtual}`;
};

maisBtn.addEventListener("click", () => {
  numAtual++;
  update();
});

menosBtn.addEventListener("click", () => {
  numAtual--;
  update();
});
