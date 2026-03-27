function obterProdutosService() {
  return fetch("http://localhost:3000/produtos").then((resposta) =>
    resposta.json(),
  );
}

function obterProdutoPeloIdService(id) {
  return fetch(`http://localhost:3000/produtos/${id}`).then((resposta) =>
    resposta.json(),
  );
}

function cadastrarProdutoService(produto) {
  return fetch("http://localhost:3000/produtos", {
    method: "POST",
    body: JSON.stringify(produto),
  }).then((resposta) => resposta.json());
}

function editarProdutoService(produto) {
  return fetch(`http://localhost:3000/produtos/${produto.id}`, {
    method: "PUT",
    body: JSON.stringify(produto),
  }).then((resposta) => resposta.json());
}

function excluirProdutoService(id) {
  return fetch(`http://localhost:3000/produtos/${id}`, {
    method: "DELETE",
  }).then((resposta) => resposta.json());
}
