const valorInput = document.querySelector<HTMLInputElement>("#valor");
const tipoEntradaInput = document.querySelector<HTMLSelectElement>("#tipo-entrada");
const tipoSaidaInput = document.querySelector<HTMLSelectElement>("#tipo-saida");
const converterBtn = document.querySelector<HTMLButtonElement>(".converter");

if (!valorInput || !tipoEntradaInput || !tipoSaidaInput || !converterBtn) throw new Error("Algum elemento não está ligado ao DOM");

