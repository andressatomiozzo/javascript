const nome = document.getElementById('nome');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const resposta = document.createElement('p')
    resposta.innerText = `O nome que você digitou foi ${nome.value}`
    document.body.appendChild(resposta);

    nome.value = " "
});