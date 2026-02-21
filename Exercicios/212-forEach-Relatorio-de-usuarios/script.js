const nomed = document.getElementById("nome");
const idaded = document.getElementById("idade");
const adicionarBtn = document.getElementById("adicionar-btn");
const calcularBtn = document.getElementById("calcular-btn");
const respostasContainer = document.getElementById("respostas-container");

let dados = [];

adicionarBtn.addEventListener("click", () => {
  let nome = nomed.value;
  let idade = Number(idaded.value);
  let dado = { nome, idade };
  dados.push(dado);
  nomed.value = "";
  idaded.value = "";
});

calcularBtn.addEventListener("click", () => {
  respostasContainer.innerHTML = "";

  let maioresIdade = 0;
  let maioresNome = [];
  let usuariosTamanho = 0;

  dados.forEach((dado) => {
    usuariosTamanho++;

    if (dado.idade >= 18) {
      maioresIdade++;
      maioresNome.push(dado.nome);
    }
  });

  const usuarios = document.createElement("p");
  usuarios.innerText = `Existem ${usuariosTamanho} usuários`;
  respostasContainer.appendChild(usuarios);

  const maiorIdade = document.createElement("p");
  maiorIdade.innerText = `${maioresIdade} usuários maiores de 18 anos`;
  respostasContainer.appendChild(maiorIdade);

  const maiorNome = document.createElement("p");
  maiorNome.innerText = `Os maiores de 18 anos são: ${maioresNome}`;
  respostasContainer.appendChild(maiorNome);
});
