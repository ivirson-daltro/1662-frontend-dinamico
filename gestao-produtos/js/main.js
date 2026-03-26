const form = document.querySelector("#form-produto");
const campoNome = document.querySelector("#nome");
const campoPreco = document.querySelector("#preco");
const campoCategoria = document.querySelector("#categoria");
const campoId = document.querySelector("#id");
const botaoSalvar = document.querySelector("#salvar");

exibirProdutos();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const action = event.target.dataset.action;

  const nome = campoNome.value;
  const preco = Number(campoPreco.value);
  const categoria = campoCategoria.value;
  const id = Number(campoId.value);

  if (!validarProduto(nome, preco, categoria)) {
    return;
  }

  if (action === "editar") {
    editarProduto({ id, nome, preco, categoria });
  } else {
    salvarProduto({ nome, preco, categoria });
  }
});

function salvarProduto(produto) {
  produto.id = new Date().getTime();
  cadastrarProduto(produto);
  form.reset();
  exibirProdutos();
}

function preencheFormularioEdicao(event) {
  const id = event.target.dataset.id;
  const produto = produtos.find((p) => p.id == id);
  campoNome.value = produto.nome;
  campoPreco.value = produto.preco;
  campoCategoria.value = produto.categoria;
  campoId.value = produto.id;
  form.setAttribute("data-action", "editar");
}

function editarProduto(produtoEditado) {
  const produtos = obterProdutos();
  const produto = produtos.find((p) => p.id === produtoEditado.id);
  produto.nome = produtoEditado.nome;
  produto.preco = produtoEditado.preco;
  produto.categoria = produtoEditado.categoria;

  form.setAttribute("data-action", "salvar");
  form.reset();
  exibirProdutos();
}

function excluirProduto(event) {
  const result = confirm("Deseja mesmo excluir o produto?");

  if (result) {
    const id = event.target.dataset.id;
    const produtos = obterProdutos();
    const index = produtos.findIndex((p) => p.id == id);
    produtos.splice(index, 1);
    exibirProdutos();
  }
}
