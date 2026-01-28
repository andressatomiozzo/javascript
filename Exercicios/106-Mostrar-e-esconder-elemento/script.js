const botaoMagico = document.getElementById('botaoMagico');
const textoConfidencial = document.getElementById('textoConfidencial');

botaoMagico.addEventListener('click', () => {
    textoConfidencial.classList.toggle('displayBlock');
    if (textoConfidencial.classList.contains('displayBlock')){
        botaoMagico.innerText = 'Esconder';
    } else {
        botaoMagico.innerText = 'Mostrar';
    }
    
})