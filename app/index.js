const express = require("express");
const redisModule = require("./redis");
const eventEmitter = require("./pedidoCompra");

const produtos = require("../mock/produtos.json");

const app = express();
const port = 3000;

app.get("/produtos", (req, res) => res.json(produtos));

app.post("/comprar/:id", (req, res) => {
  const idProduto = parseInt(req.params.id);
  const produtoSelecionado = produtos.find(
    (produto) => produto.id === idProduto
  );

  if (!produtoSelecionado) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  eventEmitter.emit("pedidoCompra", {
    id: idProduto,
    nome: produtoSelecionado.nome,
    preco: produtoSelecionado.preco,
  });

  return res.status(201).json({
    mensagem: `Pedido para o produto "${produtoSelecionado.nome}" realizado com sucesso!`,
  });
});

app.get("/:key", async (req, res) => {
  const { key } = req.params;
  try {
    const result = await redisModule.getValue(key);

    if (result === null) {
      return res.status(404).json({ error: "Chave não encontrada no Redis." });
    }

    return res.status(200).json({ value: result });
  } catch (error) {
    console.error("Erro ao obter valor do Redis:", err);
    return res.status(500).json({ error: "Erro ao obter valor do Redis." });
  }
});

app.listen(port, () => {
  console.log(`Aplicativo rodando em http://localhost:${port}`);
});
