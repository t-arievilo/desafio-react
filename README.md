# Documentação do projeto

Este projeto é um sistema de autenticação robusto desenvolvido para fins de desafio técnico. Ele utiliza uma arquitetura moderna com **ASP.NET Core 9** no backend e **React** no frontend, implementando login seguro via **JWT (JSON Web Token)**.

## Tecnologias que foram usadas nesse projeto

- **Backend:** .NET 9 SDK (C#), ASP.NET Core Web API, Entity Framework Core.
- **Frontend:** React, Bootstrap 5.
- **Banco de Dados:** SQL Server Express.

## Requisitos

Para rodar este projeto localmente, você precisa ter instalado:

1.  **SDK do .NET 9.0**: [Download .NET 9](https://dotnet.microsoft.com/download/dotnet/9.0)
2.  **Node.js** (versão LTS): [Download Node.js](https://nodejs.org/)
3.  **SQL Server**: LocalDB ou Express. [Download SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads)
4.  **Git** [Download Git](https://git-scm.com/install/)

---

## Clonar projeto e acessar pastas

### 1. Clone o repositorio com o comando:

```
git clone https://github.com/t-arievilo/desafio-react.git
```

### 2. Entre na pasta do projeto:

```
cd desafio-react
```
Nota: para previnir alguns erros de pacotes e certificados, segue alguns comandos que podem ajudar:
```
dotnet dev-certs https --trust
dotnet tool install --global dotnet-ef
```

### 3. Abra sua IDE na pasta

```
code .
```

## Configuração do Backend

### 1. Navegue até a pasta do backend

```
cd backend
```

### 2. Crie o arquivo `appsettings.json`

Dentro da pasta backend crie o arquivo `appsettings.json`. Configure-o conforme o exemplo abaixo:

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=AutenticacaoAPI;Trusted_Connection=True;TrustServerCertificate=True"
  },
  "ConfigToken": {
    "Token": ""
  },
  "AllowedHosts": "*"
}
```

---

Nota: No campo Token, insira uma chave secreta longa (mínimo de 32 caracteres) para garantir a segurança da geração do JWT.
Nota2: No campo DefaultConnection verifique qual SQLServer você está utilizando, no meu caso usei SQL Server EXPRESS.

### 3. Instalar dependências e atualizar o Banco de Dados

Abra o terminal na raiz da pasta do backend e execute:

### Restaurar pacotes do .NET

```
dotnet restore AutenticacaoAPI.csproj
```

### Atualizar o banco de dados com as migrations existentes

```
dotnet ef database update
```

---

# 4. Rodar a API

### A API está configurada para ouvir na porta 5000

```
dotnet run
```

---

# Configuração do Frontend

### 1. Abra um novo terminal e navuegue até a pasta do frontend.
```
cd frontend
```

### 2. Instale as dependências (isso instalará o Bootstrap e o React Router):

```
npm install
```

### 3. Inicie a aplicação:

```
npm start
```

## A aplicação abrirá em https://localhost:3000.

Nota: você pode criar um novo usuário clicando em Registrar no topo da página á direita.

---

## Testando a API com Swagger

O backend conta com documentação interativa via Swagger. Com o projeto rodando, acesse:
https://localhost:5000/swagger

### Para testar o endpoint privado (ApiBloqueadaJwt):

1. Use o endpoint de Login para obter seu Token.

2. Clique no botão Authorize (cadeado) no topo do Swagger.

3. No campo valor, digite Bearer seguido do seu token (Ex: Bearer eyJhbG...).

4. Agora você terá permissão para executar a rota protegida.

# Observações

Status do Usuário: No registro, se você definir o status como "Inativo", o sistema impedirá o login e exibirá uma mensagem de erro apropriada.

Persistência: O token e o nome do usuário são salvos no localStorage para manter a sessão ativa durante a navegação.

Criado por Thiago Oliveira.
