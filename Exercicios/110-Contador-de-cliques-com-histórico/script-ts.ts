const addBtn = document.querySelector<HTMLButtonElement>("#adicionarBtn");
const limparBtn = document.querySelector<HTMLButtonElement>("#limparBtn");
const listaContainer = document.querySelector<HTMLUListElement>("#listaContainer");

if(!addBtn||!limparBtn||!listaContainer) throw new Error ("Algum elemento não está ligado ao DOM")

let contador = 0

addBtn.addEventListener("click", () => {
  contador ++;
  const li = document.createElement("li");
  li.innerText = `${contador}`;
  listaContainer.appendChild(li);
})

