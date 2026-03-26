function obterProdutos() {
  //   return JSON.parse(localStorage.getItem("produtos")) || [];
  return JSON.parse(sessionStorage.getItem("produtos")) || [];
}

function cadastrarProduto(produto) {
  const produtos = obterProdutos();
  produtos.push(produto);
  //   localStorage.setItem("produtos", JSON.stringify(produtos));
  sessionStorage.setItem("produtos", JSON.stringify(produtos));
}

function editarProduto() {}

function excluirProduto() {}
