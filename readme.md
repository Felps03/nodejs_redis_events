# README - Aplicativo Express com Redis

Este é um arquivo `README` que fornece uma breve visão geral do aplicativo Express que utiliza o Redis para armazenar informações sobre produtos e registros de pedidos de compra.

## Descrição

O aplicativo é uma API RESTful construída com o framework Express.js e utiliza o banco de dados em memória Redis para armazenar dados importantes do sistema. O objetivo do aplicativo é fornecer informações sobre produtos e permitir que os clientes realizem pedidos de compra.

## Requisitos

Para executar este aplicativo, você precisará ter as seguintes dependências instaladas:

1. Node.js (https://nodejs.org)
2. Redis Server (https://redis.io/)
3. Docker (https://docs.docker.com/get-docker/)
4. Docker Compose (https://docs.docker.com/compose/install/)


## Instalação

Siga os passos abaixo para configurar e executar o aplicativo:

1. Clone o repositório ou baixe o arquivo contendo o código-fonte do aplicativo.
2. Certifique-se de que o servidor Redis esteja em execução em `localhost` na porta `6379`. Caso contrário, você pode alterar as configurações no arquivo `index.js`.
3. No terminal, navegue até o diretório do aplicativo e execute o seguinte comando para instalar as dependências:

`docker-compose up -d`

O comando acima irá construir as imagens e iniciar os containers necessários, incluindo o Redis.


`npm install`


## Executando o Aplicativo

Após concluir a instalação, execute o seguinte comando para iniciar o servidor:

`npm start`


O aplicativo será executado na porta `3000`, e você poderá acessá-lo em `http://localhost:3000`.

## Endpoints

O aplicativo possui os seguintes endpoints:

1. `GET /produtos`: Retorna a lista de produtos em formato JSON.

Exemplo de uso com cURL:

`curl --location 'http://localhost:3000/produtos'`


2. `POST /comprar/:id`: Realiza um pedido de compra para o produto com o ID especificado. O pedido será registrado no Redis.

Exemplo de uso com cURL:

`curl --location --request POST 'http://localhost:3000/comprar/1'`


3. `GET /:key`: Recupera um valor do Redis com base na chave fornecida.

Exemplo de uso com cURL:

`curl --location 'http://localhost:3000/pedidoCompra'`


## Eventos

O aplicativo utiliza um EventEmitter para emitir eventos relacionados aos pedidos de compra. Quando um cliente faz um pedido de compra usando o endpoint `POST /comprar/:id`, o evento "pedidoCompra" é emitido e o pedido é registrado no Redis.

## Redis

O aplicativo utiliza o Redis como um banco de dados em memória para armazenar informações sobre pedidos de compra. As informações são armazenadas em formato JSON, usando a chave "pedidoCompra".
# nodejs_redis_events
