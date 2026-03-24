const form = document.querySelector("#form-produto");
const campoNome = document.querySelector("#nome");
const campoPreco = document.querySelector("#preco");
const campoCategoria = document.querySelector("#categoria");

const produtos = [
  {
    nome: "Teste",
    preco: 1,
    categoria: "Alimentos",
  },
];

exibirProdutos();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = campoNome.value;
  const preco = campoPreco.value;
  const categoria = campoCategoria.value;

  if (nome === "" || preco === "" || categoria === "") {
    alert("Alguns campos obrigatórios não foram preenchidos");
    return;
  }

  salvarProduto({ nome, preco, categoria });
});

function salvarProduto(produto) {
  produtos.push(produto);
  form.reset();
}

function exibirProdutos() {
  const listaProdutos = document.querySelector("#lista-produtos");
  produtos.forEach((produto) => {
    const divCol = criaElemento(
      "div",
      "col-12 col-sm-6 col-md-4 col-lg-3 mb-3",
    );
    const divCard = criaElemento("div", "card");
    const divCardBody = criaElemento("div", "card-body");
    const h5 = criaElemento("h5", "card-title");
    h5.innerText = produto.nome;
    const paragrafoPreco = criaElemento("p", "card-text");
    paragrafoPreco.innerText = produto.preco;
    const paragrafoCategoria = criaElemento("p", "card-text");
    paragrafoCategoria.innerText = produto.categoria;
    const divBotoes = criaElemento("div", "d-flex gap-2");
    const botaoEditar = criaElemento("button", "btn btn-primary");
    botaoEditar.innerText = "Editar";
    const botaoExcluir = criaElemento("button", "btn btn-danger");
    botaoExcluir.innerText = "Excluir";

    divCardBody.append(h5, paragrafoPreco, paragrafoCategoria, divBotoes);
    divBotoes.append(botaoEditar, botaoExcluir);
    divCard.appendChild(divCardBody);
    divCol.appendChild(divCard);
    listaProdutos.appendChild(divCol);

    console.log(divCard);
    console.log(divCardBody);
  });
}

// Cria dinamicamente o elemento, adiciona as classes e retorna o elemento criado
function criaElemento(elemento, classes) {
  const novoElemento = document.createElement(elemento);
  novoElemento.classList.add(...classes.split(" "));
  //   classes.split(" ").forEach((classe) => novoElemento.classList.add(classe));
  return novoElemento;
}

/*
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Nome</h5>
      <p class="card-text">1000</p>
      <p class="card-text">Categoria</p>
      <div class="d-flex gap-2">
        <button type="button" class="btn btn-primary">
          Editar
        </button>
        <button type="button" class="btn btn-danger">
          Excluir
        </button>
      </div>
    </div>
  </div>
</div>;

*/
