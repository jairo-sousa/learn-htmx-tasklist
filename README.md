# Tasklist

## 📋 O que é esse app?

Este é um aplicativo de lista de tarefas (Tasklist) simples, desenvolvido com foco em aprendizado da biblioteca [Htmx](https://htmx.org/). O projeto segue o [curso do Mateus Batisti](https://www.youtube.com/watch?v=hsZzlmPdrIU) no YouTube.

🔧 Tecnologias usadas:

-   [Htmx](https://htmx.org/)
-   [Node](https://nodejs.org/pt)
-   [Sqlite](https://www.sqlite.org/)
-   [Docker](https://www.docker.com/)

## 🚀 Como executar?

#### 1. Clone o repositório

```bash
git clone https://github.com/jairo-sousa/learn-htmx-tasklist.git
cd learn-htmx-tasklist
```

#### 2. Instale as dependências

```bash
npm install
```

### ▶️ Rodar localmente (node instalado)

```bash
npm start
```

-   O app estará disponível em [`http://0.0.0.0:3000`](http://0.0.0.0:3000)

### 🐳 Usando docker

Você pode rodar o app em modo desenvolvimento ou produção usando Docker. Em ambos os casos, o app estará disponível em [`http://0.0.0.0`](http://0.0.0.0)

#### Modo desenvolvimento

```bash
docker compose up -d
```

#### Modo produção

1. Certifique-se de que `node_modules` está listado no `.dockerignore`, caso já tenha rodado `npm install` localmente.
2. Execute

```bash
docker compose -f docker-compose.yml up --build -d
```

## ✨ Funcionalidades

-   Adicionar tarefas

-   Marcar como concluídas

-   Excluir tarefas

-   Pesquisar tarefas
