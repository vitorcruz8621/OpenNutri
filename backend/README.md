# API Routes Documentation

Este repositório contém a implementação de rotas para a API de um sistema de gerenciamento de nutricionistas, pacientes, consultas e metas. Abaixo estão descritas as rotas disponíveis para cada recurso.

## Rotas de Nutricionistas

Arquivo: [src/routes/nutricionistaRouter.js](src/routes/nutricionistaRouter.js)

> **GraphQL Query**: `{ nutricionista(id: 1) { id, nome, email, telefone } }`(sem aspas)
> **CREATE Nutricionista** : `{
  "nome": "João Silva",
  "email": "joao.silva@example.com",
  "senha": "senhaSegura123",
  "telefone": "123456789"
}`

- `GET /nutricionistas`: Retorna todos os nutricionistas.
- `GET /nutricionistas/:id`: Retorna um nutricionista específico pelo ID.
- `POST /nutricionistas`: Cria um novo nutricionista.
- `DELETE /nutricionistas/:id`: Deleta um nutricionista específico pelo ID.
- `PUT /nutricionistas/:id`: Atualiza um nutricionista específico pelo ID.

## Rotas de Pacientes

Arquivo: [src/routes/pacienteRouter.js](src/routes/pacienteRouter.js)

- `GET /pacientes`: Retorna todos os pacientes.
- `GET /pacientes/:id`: Retorna um paciente específico pelo ID.
- `POST /pacientes`: Cria um novo paciente.
- `DELETE /pacientes/:id`: Deleta um paciente específico pelo ID.
- `PUT /pacientes/:id`: Atualiza um paciente específico pelo ID.

## Rotas de Consultas

Arquivo: [src/routes/consultaRouter.js](src/routes/consultaRouter.js)

- `GET /consultas`: Retorna todas as consultas.
- `GET /consultas/:id`: Retorna uma consulta específica pelo ID.
- `POST /consultas`: Cria uma nova consulta.
- `DELETE /consultas/:id`: Deleta uma consulta específica pelo ID.
- `PUT /consultas/:id`: Atualiza uma consulta específica pelo ID.

## Rotas de Metas

Arquivo: [src/routes/metaRouter.js](src/routes/metaRouter.js)

- `GET /metas`: Retorna todas as metas.
- `GET /metas/:id`: Retorna uma meta específica pelo ID.
- `POST /metas`: Cria uma nova meta.
- `DELETE /metas/:id`: Deleta uma meta específica pelo ID.
- `PUT /metas/:id`: Atualiza uma meta específica pelo ID.

## Configuração e Execução

Para configurar e executar o projeto, siga os passos abaixo:

1. Instale as dependências:
   ```sh
   npm install
   ```
