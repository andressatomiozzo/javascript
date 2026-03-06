const numeroInput = document.querySelector<HTMLInputElement>("#num");
const addBtn = document.querySelector<HTMLButtonElement>("#addBtn");
const arrayContainer = document.querySelector<HTMLParagraphElement>("#array");
const calcBtn = document.querySelector<HTMLButtonElement>("#calcBtn");
const resetBtn = document.querySelector<HTMLButtonElement>("#resetBtn");

if (!numeroInput || !addBtn || !arrayContainer || !calcBtn || !resetBtn) throw new Error("ALgum elemento não está ligado ao DOM");
