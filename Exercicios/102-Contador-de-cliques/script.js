let numAtualizado = 0;

const number = document.createElement("p");
const mais = document.getElementById("mais");
const menos = document.getElementById("menos");

function render() {
  number.innerText = numAtualizado;
}

mais.addEventListener("click", () => {
  console.log("Você clicou +");
  numAtualizado++;
  render();
});

menos.addEventListener("click", () => {
  console.log("Você clicou -");
  if (numAtualizado > 0) {
    numAtualizado--;
    render();
  }
});

render();

document.body.appendChild(number);
