# OpenNutri
Repositório destinado ao Projeto Aplicado para colação de grau na Pós-Graduação da XP Educação

## API Routes Documentation

Este repositório contém a implementação de rotas para a API de um sistema de gerenciamento de nutricionistas, pacientes, consultas e metas. Abaixo estão descritas as rotas disponíveis para cada recurso.

## Rotas de Nutricionistas

Arquivo: [src/routes/nutricionistaRouter.js](src/routes/nutricionistaRouter.js)

- `GET /nutricionistas`: Retorna todos os nutricionistas.
- `GET /nutricionistas/:id`: Retorna um nutricionista específico pelo ID.
- `POST /nutricionistas`: Cria um novo nutricionista.
  - **Entrada**:
    ```json
    {
      "nome": "João Silva",
      "email": "joao.silva@example.com",
      "senha": "senhaSegura123",
      "telefone": "123456789"
    }
    ```
- `DELETE /nutricionistas/:id`: Deleta um nutricionista específico pelo ID.
- `PUT /nutricionistas/:id`: Atualiza um nutricionista específico pelo ID.
  - **Entrada**:
    ```json
    {
      "nome": "João Silva Atualizado",
      "email": "joao.silva@example.com",
      "senha": "novaSenhaSegura123",
      "telefone": "987654321"
    }
    ```

## Rotas de Pacientes

Arquivo: [src/routes/pacienteRouter.js](src/routes/pacienteRouter.js)

- `GET /pacientes`: Retorna todos os pacientes.
- `GET /pacientes/:id`: Retorna um paciente específico pelo ID.
- `POST /pacientes`: Cria um novo paciente.
  - **Entrada**:
    ```json
    {
      "nome": "Ana Costa",
      "email": "ana.costa@gmail.com",
      "dataNascimento": "15/11/1990",
      "telefone": "11987654321",
      "senha": "senhaAna123"
    }
    ```
- `DELETE /pacientes/:id`: Deleta um paciente específico pelo ID.
- `PUT /pacientes/:id`: Atualiza um paciente específico pelo ID.
  - **Entrada**:
    ```json
    {
      "nome": "Ana Costa Atualizada",
      "email": "ana.costa@gmail.com",
      "dataNascimento": "15/11/1990",
      "telefone": "11987654321"
    }
    ```

## Rotas de Consultas

Arquivo: [src/routes/consultaRouter.js](src/routes/consultaRouter.js)

- `GET /consultas`: Retorna todas as consultas.
- `GET /consultas/:id`: Retorna uma consulta específica pelo ID.
- `POST /consultas`: Cria uma nova consulta.
  - **Entrada**:
    ```json
    {
      "nutricionistaId": 1,
      "pacienteId": 1,
      "statusId": 1,
      "dataConsulta": "01/10/2024",
      "horarioInicio": "12:00",
      "horarioTermino": "12:30",
      "observacoes": "Consulta inicial para avaliação nutricional."
    }
    ```
- `DELETE /consultas/:id`: Deleta uma consulta específica pelo ID.
- `PUT /consultas/:id`: Atualiza uma consulta específica pelo ID.
  - **Entrada**:
    ```json
    {
      "statusId": 2,
      "dataConsulta": "01/10/2024",
      "horarioInicio": "12:00",
      "horarioTermino": "12:30",
      "observacoes": "Consulta atualizada."
    }
    ```

## Rotas de Metas

Arquivo: [src/routes/metaRouter.js](src/routes/metaRouter.js)

- `GET /metas`: Retorna todas as metas.
- `GET /metas/:id`: Retorna uma meta específica pelo ID.
- `POST /metas`: Cria uma nova meta.
  - **Entrada**:
    ```json
    {
      "pacienteId": 1,
      "tipoMetaId": 1,
      "dataInicio": "01/10/2023",
      "dataFim": "31/12/2023",
      "statusMetaId": 1
    }
    ```
- `DELETE /metas/:id`: Deleta uma meta específica pelo ID.
- `PUT /metas/:id`: Atualiza uma meta específica pelo ID.
  - **Entrada**:
    ```json
    {
      "pacienteId": 1,
      "tipoMetaId": 1,
      "dataInicio": "01/10/2023",
      "dataFim": "31/12/2023",
      "statusMetaId": 1
    }
    ```

## Rotas de Status de Consultas

Arquivo: [src/routes/statusConsultaRouter.js](src/routes/statusConsultaRouter.js)

- `GET /status-consultas`: Retorna todos os status de consultas.
- `GET /status-consultas/:id`: Retorna um status de consulta específico pelo ID.