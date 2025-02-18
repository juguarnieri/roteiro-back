# 🚀 API Node.js para Gerenciamento de Usuários  

Este projeto é uma API simples desenvolvida em **Node.js** para gerenciar usuários, utilizando **Express, CORS, dotenv e UUID**.  

## 🛠️ Passo a Passo do que foi realizado:

### 1️⃣ Configurei o Ambiente  

- Instalei o **Node.js** e verifiquei a instalação.  
- Criei a pasta do projeto e inicializei o **Node.js**.  
- Instalei as dependências necessárias: **Express, CORS, dotenv e UUID**.  
- Instalei o **Nodemon** (opcional) para reiniciar o servidor automaticamente.  
- Editei o `package.json` e adicionei scripts de execução.  
- Iniciei o servidor para rodar automaticamente.  

---

### 2️⃣ Criei o Arquivo `.env`  

- Criei o arquivo `.env` na raiz do projeto.  
- Defini a variável de ambiente para a porta do servidor.  

---

### 3️⃣ Configurei o `.gitignore`  

- Adicionei `node_modules` e `.env` ao `.gitignore` para evitar versionamento de arquivos desnecessários.  

---

### 4️⃣ Configurei o Servidor  

- Usei **Express** para criar o servidor.  
- Adicionei **CORS** para permitir requisições externas.  
- Configurei o middleware para aceitar **JSON**.  
- Defini a porta do servidor com base no `.env`.  
- Configurei as rotas da API.  
- Iniciei o servidor.  

---

### 5️⃣ Organizei a Estrutura do Projeto  

- Estruturei o projeto com pastas para **models, controllers e routes**, facilitando a organização do código.  

---

### 6️⃣ Criei a Classe `User`  

- Defini o modelo de usuário contendo **id, nome, e-mail e idade**.  
- Usei **UUID** para gerar identificadores únicos.  

---

### 7️⃣ Implementei a Classe `UserList`  

- Criei uma classe para armazenar e gerenciar os usuários.  
- Adicionei métodos para **adicionar, buscar, atualizar e remover usuários**.  

---

### 8️⃣ Desenvolvi o Controller  

- Implementei as funções responsáveis por manipular os usuários:  
  - **Listar todos os usuários**.  
  - **Adicionar um novo usuário**, garantindo que todos os campos sejam preenchidos.  
  - **Buscar um usuário pelo ID**.  
  - **Atualizar os dados de um usuário existente**.  
  - **Remover um usuário pelo ID**.  

---

### 9️⃣ Configurei as Rotas  

- Defini as rotas para manipulação dos usuários via **GET, POST, PUT e DELETE**.  
- Conectei as rotas ao **Controller** para processar as requisições.  

---

### 🔟 Integrei as Rotas ao Servidor  

- Importei e configurei as rotas no `server.js`.  

---

### 1️⃣1️⃣ Testei a API  

- Usei **Postman** e **Insomnia** para testar as rotas:  
  - Criar um usuário.  
  - Listar todos os usuários.  
  - Buscar um usuário por ID.  
  - Atualizar um usuário existente.  
  - Remover um  usuário.

