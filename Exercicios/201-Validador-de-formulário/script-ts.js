"use strict";
const form = document.querySelector("form");
const nomeInput = document.querySelector("#iname");
const senhaInput = document.querySelector("#ipassword");
if (!form || !nomeInput || !senhaInput)
    throw new Error("Algum elemento não está ligado ao DOM");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (nomeInput.value === "" || senhaInput.value === "") {
        window.alert("Você não preencheu algum campo");
    }
    else {
        nomeInput.value = "";
        senhaInput.value = "";
    }
});
