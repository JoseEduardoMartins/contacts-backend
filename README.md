# Contact Management System - Back-end

Este projeto é um sistema simples de gerenciamento de contatos desenvolvido em Node.js, com uma base de dados MySQL para armazenar informações de contato e seus números de telefone associados.

## Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas antes de iniciar:

-   Pacotes [npm](https://www.npmjs.com/) (Node Package Manager)
-   [Node.js](https://nodejs.org/) (versão 16.0.0 ou superior)
-   [Docker](https://docs.docker.com/get-docker/)
-   [Docker Compose](https://docs.docker.com/compose/install/)

## Instruções de Configuração

1. Clone o repositório

```bash
git clone https://github.com/JoseEduardoMartins/contacts-backend.git

cd contacts-backend
```

2. Certifique-se de configurar corretamente as variáveis de ambiente no arquivo docker-compose.yml para conectar ao banco de dados.

3. Inicie o microserviço:

```bash
docker-compose up --build
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

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
