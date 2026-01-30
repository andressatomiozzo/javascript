const enviarBtn = document.getElementById('enviarBtn');
const nome = document.getElementById('iname');
const resposta = document.getElementById('resposta');

enviarBtn.addEventListener('click', () => {
    const newParag = document.createElement('p');
    newParag.innerText = `Olá ${nome.value}, é um prazer te ter por aqui!`;
    resposta.appendChild(newParag);
    nome.value = ""
})