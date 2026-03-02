const containerCaixas = document.querySelector<HTMLDivElement>("#containerCaixas");
const adicionarBtn = document.querySelector<HTMLButtonElement>("#adicionarBtn");

if(!containerCaixas||!adicionarBtn) throw new Error("Algum elemento não está ligado ao DOM");

