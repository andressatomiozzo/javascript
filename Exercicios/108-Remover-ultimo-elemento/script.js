const adicionarBtn = document.getElementById('adicionarBtn');
const containerCaixas = document.getElementById('containerCaixas');
const removerBtn = document.getElementById('removerBtn');

let caixasCores = ['preto', 'vermelho', 'amarelo', 'azul']
let contador = 0

adicionarBtn.addEventListener('click', () => {
    const newBox = document.createElement('div');
    newBox.innerHTML = `<p class="parag"> ${contador+1} </p>`;
    newBox.classList.add('box', caixasCores[contador]);
    contador = (contador + 1) % caixasCores.length;
    containerCaixas.appendChild(newBox);
    console.log(contador);
})

removerBtn.addEventListener('click', () => {
    containerCaixas.removeChild(containerCaixas.lastElementChild);
    contador = (contador - 1 + caixasCores.length) % caixasCores.length;
})