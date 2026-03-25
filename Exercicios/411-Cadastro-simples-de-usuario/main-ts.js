"use strict";
const form = document.querySelector("form");
const alerta = document.querySelector("#alerta");
if (!form || !alerta)
    throw new Error("Algum elemento não está ligado ao DOM");
const enviarFrom = async (bodyObject) => {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-type": "application/json", // Avisa que os dados estão em JSON
            },
            body: JSON.stringify(bodyObject), // Transforma am JSON
        });
        const dados = await resposta.json();
        if (!resposta.ok) {
            throw new Error("Ops! Algo deu errado no POST!");
        }
        console.log(dados);
    }
    catch (err) {
        throw err;
    }
};
form.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const formData = new FormData(form); // Cria um objeto com todos os dados do formulário (tipo especial: FormData)
    const body = Object.fromEntries(formData.entries()); // Transforma o FormData em um objeto JavaScript normal
    try {
        enviarFrom(body);
        console.log("formulário enviado");
    }
    catch (err) {
        console.log(err);
    }
});
