const buscarBtn = document.querySelector<HTMLButtonElement>(".buscar");
const respostaContainer = document.querySelector<HTMLDivElement>("#resposta-container");
const nomeContent = document.querySelector<HTMLParagraphElement>("#nome");
const mailContent = document.querySelector<HTMLParagraphElement>("#mail");
const paisContent = document.querySelector<HTMLParagraphElement>("#pais");
const fotoContent = document.querySelector<HTMLImageElement>("#foto");

if (!buscarBtn || !respostaContainer || !nomeContent || !mailContent || !paisContent || !fotoContent)
  throw new Error("Algum elemento não está ligado ao DOM");

type dadosAPI = {
  results: {
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
    location: {
      country: string;
    };
    picture: {
      large: string;
    };
  }[];
};

const mostrarNaTela = (pessoa: dadosAPI) => {
  fotoContent.src = `${pessoa.results[0].picture.large}`;
  const nome = pessoa.results[0].name;
  nomeContent.innerText = `${nome.title + " " + nome.first + " " + nome.last}`;
  mailContent.innerText = `${pessoa.results[0].email}`;
  paisContent.innerText = `${pessoa.results[0].location.country}`;
};

// const buscarPessoa = () => {
//   fetch("https://randomuser.me/api/")
//     .then((resposta) => {
//       if (!resposta.ok) {
//         console.log("A promisse foi rejeitada");
//       }
//       return resposta.json();
//     })
//     .then((pessoa) => mostrarNaTela(pessoa));
// };

const buscarPessoa = async () => {
  try {
    const resposta = await fetch("https://randomuser.me/api/");
    if (!resposta.ok) {
      console.log("A promisse foi rejeitada");
    } else {
      const dados = await resposta.json();
      mostrarNaTela(dados);
    }
  } catch (err) {
    console.log(err);
  }
};

buscarBtn.addEventListener("click", (event) => {
  event.preventDefault();

  buscarPessoa();
});
