const adicionarBtn = document.getElementById('adicionarBtn');
const listaContainer = document.getElementById('listaContainer');

let contador = 0;

adicionarBtn.addEventListener('click', () => {
    contador ++;
    const item = document.createElement('li');
    item.innerText = contador;
    listaContainer.appendChild(item);
})

limparBtn.addEventListener('click', () => {
    listaContainer.innerText = ""
    contador = 0;
})