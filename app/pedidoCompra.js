const EventEmitter = require("events");
const redisModule = require("./redis");

const eventEmitter = new EventEmitter();

eventEmitter.on("pedidoCompra", (pedido) => {
  console.log("Pedido de compra recebido pelo ouvinte:", pedido);
  redisModule.setValue("pedidoCompra", JSON.stringify(pedido));
});

module.exports = eventEmitter;
