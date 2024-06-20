# Contact Management System - Back-end

Este projeto é um sistema simples de gerenciamento de contatos desenvolvido em Node.js, com uma base de dados MySQL para armazenar informações de contato e seus números de telefone associados.

## Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas antes de iniciar:

-   [Node.js](https://nodejs.org/) (versão 16.0.0 ou superior)
-   Pacotes [npm](https://www.npmjs.com/) (Node Package Manager)

Opção 1

-   [MySQL](https://www.mysql.com/downloads/) (versão 8.0.35 ou superior)

Opção 2
-   [Docker](https://docs.docker.com/get-docker/)
-   [Docker Compose](https://docs.docker.com/compose/install/)

## Instruções de Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/JoseEduardoMartins/contacts-backend.git

cd contacts-backend
```

### 2. Configurar as variáveis de ambiente.

Criar um arquivo `.env` na raiz do projeto com base no `.env.example` e mude as variaveis se necessario.

```bash
APP_PORT=3000
APP_PATH=/api
```

### 3. Configurar o Banco de Dados

#### Opção 1: Criar o Banco de Dados e adicionar Dados Iniciais:

- Se você ainda não o tiver instalado, siga as instruções na [documentação oficial](https://www.mysql.com/downloads/) para instalar o MySQL.

- Configure as credenciais do banco de dados no arquivo `.env`:

    ```bash
    DB_HOST=localhost
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=contacts_db
    ```

- Abra um terminal e execute o seguinte comando para criar um banco de dados e aplicar a estrutura inicial a partir do arquivo `schema.sql`:

    ```bash
    mysql -u seu_usuario -p sua_senha -h seu_host < ./database/schema.sql

    ```

- Se você tiver um arquivo `seeds.sql` com dados iniciais, execute o seguinte comando para adicioná-los:
    ```bash
    mysql -u seu_usuario -p sua_senha -h seu_host < ./database/seed.sql
    ```

#### Opção 2: Utilizando Docker

- Certifique-se de que o [Docker](https://docs.docker.com/get-docker/) e o [Docker Compose](https://docs.docker.com/compose/install/) estão instalados e rodando em sua máquina.

- Adicione no arquivo `.env` o seguinte conteúdo:

    ```bash
    DB_HOST=db
    DB_USER=root
    DB_PASSWORD=root
    DB_NAME=contacts_db
    ```

### 4. Executar a Aplicação

#### Opção 1: Modo Desenvolvimento (Local)

- Inicie a aplicação:

    ```bash
    npm run start:prod
    ```

- Observe o código-fonte e reconstrua/atualize a aplicação quando os arquivos forem atualizados:

    ```bash
    npm run start:dev
    ```

#### Opção 2: Utilizando Docker

- Inicie a aplicação:

    ```bash
    docker-compose up
    ```

- Crie imagens antes de iniciar contêineres:

    ```bash
    docker-compose up --build
    ```

- Observe o código-fonte e reconstrua/atualize contêineres quando os arquivos forem atualizados:

    ```bash
    docker-compose up --watch
    ```

- Interrompe contêineres e remove contêineres, redes, volumes e imagens criadas pelo `up`:

    ```bash
    docker-compose down
    ```

O servidor estará disponível em http://localhost:3000/api.


## Uso

Acesse a API para gerenciar contatos e números de telefone.

-   Listar todos os contatos: GET /contacts/
-   Obter um contato específico: GET /contacts/:id
-   Criar um novo contato: POST /contacts/
-   Atualizar um contato existente: PUT /contacts/:id
-   Excluir um contato: DELETE /contacts/:id

## Exemplo de Payload para Criação/Atualização de Contato

```script
{
    "name": "Nome do Contato",
    "age": 20,
    "phones": [
        {
            "number": "99 99999-99999"
        },
    ]
}
```

## Contribuição

Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões, por favor, abra uma [issue](https://github.com/JoseEduardoMartins/contacts-backend/issues/new).

## Autor

-   José Eduardo Martins

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo LICENSE.md para obter detalhes.

## Contato

Para qualquer dúvida ou problema, entre em contato com `m4rt1ns.jose@gmail.com`.
