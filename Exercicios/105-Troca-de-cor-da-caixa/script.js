const quadrado = document.getElementById('quadrado');
const botaoMudar = document.getElementById('botaoMudar');

let cores = ['preto', 'vermelho', 'rosa', 'azul']
let contador = 0

// // Aqui eu estou removendo TODAS as classes que poderiam existir, tipo, se tivesse uma classe que deixasse uma sombra eu removeria ela também, mesmo não sendo a minha intenção
// // O if/else funciona, mas não é o melhr
// botaoMudar.addEventListener('click', () => {
//     if (contador < cores.length-1){
//         contador ++
//     } else {
//         contador = 0;
//     }
//     quadrado.setAttribute('class', cores[contador]);
//     console.log(cores[contador]);
// })


botaoMudar.addEventListener('click', () => {
    quadrado.classList.remove(cores[contador]); // Remove a cor anterior
    contador = (contador + 1) % cores.length;   // Adiciona 1 e quando chegar no fim volta pro 0
    quadrado.classList.add(cores[contador]);    // Acidiona a cor
    console.log(contador);
})