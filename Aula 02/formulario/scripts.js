const form = document.querySelector("#cadastro");
const usuario = document.querySelector("#usuario").value;
const senha = document.querySelector("#senha").value;
const email = document.querySelector("#email").value;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (usuario === "" || senha === "" || email === "") {
    alert("Alguns dos campos obrigatórios não foram preenchidos!");
  }
});
