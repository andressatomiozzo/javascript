const form = document.querySelector("form");
const nome = document.getElementById("iname");
const nomeContainer = document.getElementById("nomeContainer");
const password = document.getElementById("ipassword");
const passwordContainer = document.getElementById("passwordContainer");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (nome.value === "" && password.value === "") {
    window.alert("Preencha o nome e senha");
  } else if (nome.value === "") {
    window.alert("Preencha o nome");
  } else if (password.value === "") {
    window.alert("Preencha a senha");
  } else {
    console.log("Formulário enviado com sucesso");
    nome.value = "";
    password.value = "";
  }
});

// form.addEventListener("submit", (evento) => {
//   evento.preventDefault();

//   const allert = document.createElement("p");

//   if (allert.innerTextL === "") {
//     allert.innerText = "Preencha este campo";

//     if (nome.value === "") {
//       nomeContainer.appendChild(allert);
//     } else if (password.value === "") {
//       passwordContainer.appendChild(allert);
//     } else if (nome.value === "" && password.value === "") {
//       nomeContainer.appendChild(allert);
//       passwordContainer.appendChild(allert);
//     } else {
//       const enviado = document.createElement("p");
//       enviado.innerText = "Formulário enviado com sucesso";
//       form.appendChild(enviado);
//       nome.value = "";
//       password.value = "";
//     }
//   } else {
//     allert.remove();
//     allert.innerText = "Preencha este campo";

//     if (nome.value === "") {
//       nomeContainer.appendChild(allert);
//     } else if (password.value === "") {
//       passwordContainer.appendChild(allert);
//     } else if (nome.value === "" && password.value === "") {
//       nomeContainer.appendChild(allert);
//       passwordContainer.appendChild(allert);
//     } else {
//       const enviado = document.createElement("p");
//       enviado.innerText = "Formulário enviado com sucesso";
//       form.appendChild(enviado);
//       nome.value = "";
//       password.value = "";
//     }
//   }
// });
