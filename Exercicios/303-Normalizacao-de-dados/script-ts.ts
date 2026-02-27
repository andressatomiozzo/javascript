const nomei = document.querySelector<HTMLInputElement>("#nome");
const precoi = document.querySelector<HTMLInputElement>("#preco");
const addBtn = document.querySelector<HTMLButtonElement>(".add");
const calcBtn = document.querySelector<HTMLButtonElement>(".calc");

if (!nomei || !precoi || !addBtn || !calcBtn) throw new Error ("Algum elemento não está ligado ao DOM");

