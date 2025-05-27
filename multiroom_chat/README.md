# ~ ~ ~ Curso Completo do Desenvolvedor NodeJS e MongoDB ~ ~ ~

# --- Seção 13: Projeto prático - Multiroom Chat real-time com WebSocket

Andamento das aulas: estou na aula 61

# Dependências necessárias para o projeto:

- `Express`
- `Engine de view EJS`
- `Consign` (autoloader)
- `Body-parser` (middleware que popula a variável body que contém os elementos de formulário transitados nas requisições)
- `Express Validator` (módulo que valida as infos digitadas em fomulários)

# Passos

1. Criar um diretório
2. Iniciar com NPM (para iniciar a app)
    - npm init
3. Express
    - npm install express@4.15.3 --save
4. EJS
    - npm install ejs@2.5.6 --save
5. Consign
    - npm install consign@0.1.6 --save
6. Body-parser
    - npm install body-parser@1.17.2 --save
7. Express Validator
    - npm install express-validator@3.2.0 --save
8. Socket.io
    - npm install socket.io@2.0.3 --save

# Instalações para desenvolvimento

Nodemon (para rodar a app)
```bash
npm install -g nodemon --save-dev
```

# Como iniciar a app

Iniciar o Nodemon
```bash
nodemon app
```

# Intro ao Websocket e Socket.io

» `O que é Socket?`  
Mecanismo de comunicação usado para implementar um modelo cli-server que permite a troca de mensagens entre processos  
    ...de uma máquina ou app servidor
    ...e de uma máquina ou app cliente.

» `O que é um Websocket?`  
É uma tech muito mais específica. Permite a comunicação bidirecional entre `browsers`, `clientes` e `servers web` sobre um único socket.  
Ou seja, podemos criar uma conexão persiste entre o cliente e servidor, e ambas as partes podem começar a enviar dados a qualquer momento.  
Ele foge do sistema tradicional de requisição-resposta dos sistemas web, em que um cliente sempre faz uma req e fica aguardando uma resposta do servidor.  
Através de um WebSocket, o próprio server pode efetuar uma req diretamente para o browser cli.  
O NodeJS disponibiliza essa tecnologia através do SocketIO.  

Para estabelecer um diálogo, é necessário que, de um lado, alguém esteja ouvindo » `on()`
...e do outro lado é necessário que alguém esteja falando » emit()

`on('nome', function(data) {})`
Ouvindo pedidos de execução

`emit('nome', {})`
O emit() faz um pedido para executar alguma ação.