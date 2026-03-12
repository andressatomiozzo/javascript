const tituloInput = document.querySelector<HTMLInputElement>("#titulo");
const anoInput = document.querySelector<HTMLInputElement>("#ano");
const pesqBtn = document.querySelector<HTMLButtonElement>(".pesq");
const resetBtn = document.querySelector<HTMLButtonElement>(".reset");
const respostaContainer = document.querySelector<HTMLDivElement>("#resposta-container");

if (!tituloInput || !anoInput || !pesqBtn || !resetBtn || !respostaContainer) throw new Error("Algum elemento não está ligado ao DOM");

const pesquisarFilme = async (chave: string) => {
  const apiKey = "a226e844"
  const resposta = await fetch(`http://www.omdbapi.com/?${chave}&apikey=${apiKey}`);
  const dados = await resposta.json();
  console.log(dados);
};

pesqBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (tituloInput.value === "") {
    respostaContainer.innerHTML = `<p>Digite um título</p>`;
  } else {
    let chave: string;
    const title = tituloInput.value;
    const tituloQuebrado = title.split(" ").join("+");
    if (anoInput.value == "") {
      chave = `t=${tituloQuebrado}`;
    } else {
      chave = `t=${tituloQuebrado}&y=${anoInput.value}`;
    }
    pesquisarFilme(chave);
  }
});
