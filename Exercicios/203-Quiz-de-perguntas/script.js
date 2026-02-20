const perguntai = document.getElementById("pergunta");
const respostai = document.getElementById("resposta");
const pontosi = document.getElementById("pontos");

const addBtn = document.getElementById("add-btn");
const respostasContainer = document.getElementById("respostas-container");

const pontuacaoBtn = document.getElementById("pontuacao-btn");
const pontuacaoContent = document.getElementById("pontuacao-content");

let dados = [];
let { pergunta, resposta, pontos } = dados;

addBtn.addEventListener("click", () => {
  pergunta = perguntai.value;
  resposta = respostai.value;
  pontos = Number(pontosi.value);

  const respostasContent = document.createElement("p");
  respostasContent.innerText = `Pergunta: ${pergunta}. Resposta: ${resposta}. Pontos: ${pontos}`;
  respostasContainer.appendChild(respostasContent);

  dados.push({ pergunta, resposta, pontos });
});

pontuacaoBtn.addEventListener("click", () => {
  //! Para pegar apenas os pontos:
  // const pontuacao = dados.map(item => item.pontos);
  // const maiorPontuacao = Math.max(...pontuacao);
  // console.log(maiorPontuacao);

  const melhorResultado = dados.reduce((melhor, atual) => {
    return atual.pontos > melhor.pontos ? atual : melhor;
  });

  pontuacaoContent.innerHTML = `
    <h3>Sua melhor resposta, com a maior pontuação foi:</h3>
    <h4>${melhorResultado.pergunta}</h4>
    <p>${melhorResultado.resposta}</p>
    <p><strong>${melhorResultado.pontos}</strong></p>
  `;
});
