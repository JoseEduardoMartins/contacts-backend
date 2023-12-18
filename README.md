# Contact Management System

Este projeto é um sistema simples de gerenciamento de contatos desenvolvido em Node.js, com uma base de dados MySQL para armazenar informações de contato e seus números de telefone associados.

## Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas antes de iniciar:

-   Node.js (versão 16.17.0 ou superior)
-   MySQL (versão 8.0.35 ou superior)
-   Pacotes npm (Node Package Manager)

## Instruções de Configuração

1. Clone o repositório

```bash
git clone https://github.com/JoseEduardoMartins/contacts-backend.git

cd contacts-backend
```

2. Criar o Banco de Dados e adicionar Dados Iniciais:

    - Se você ainda não o tiver instalado, siga as instruções na [documentação oficial](https://www.mysql.com/downloads/) para instalar o MySQL.

    - Abra um terminal e execute o seguinte comando para criar um banco de dados e aplicar a estrutura inicial a partir do arquivo `schema.sql`:

        ```
        mysql -u seu_usuario -p sua_senha -h seu_host < ./database/schema.sql

        ```

    - Se você tiver um arquivo `seeds.sql` com dados iniciais, execute o seguinte comando para adicioná-los:
        ```
        mysql -u seu_usuario -p sua_senha -h seu_host < ./database/seed.sql
        ```

3. Instale as dependências:

```bash
 npm install
```

6. Configure as variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e preencha as informações necessárias, como segredos para tokens JWT e configurações de banco de dados.

7. Inicie o microserviço:

```bash
npm run dev
```

O servidor estará disponível em http://localhost:3000.

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

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos para este microserviço. Basta seguir estas etapas:

1. Faça um fork no repositório.
2. Troque a branch atual para a de desenvolvimento.
3. Crie uma branch para sua contribuição: git checkout -b feature/nova-funcionalidade.
4. Faça as alterações necessárias e adicione testes, se aplicável.
5. Envie um pull request para a branch de desenvolvimento.

## Autor

-   José Eduardo Martins

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo LICENSE.md para obter detalhes.

## Contato

Para qualquer dúvida ou problema, entre em contato com `m4rt1ns.jose@gmail.com`.
