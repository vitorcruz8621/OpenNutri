import request from 'supertest';
import app from '../server';

let server;

beforeAll((done) => {
  server = app.listen(process.env.PORT_TEST, () => {
    console.log(`Test server running on port ${process.env.PORT_TEST}`);
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    console.log('Test server closed');
    done();
  });
});

describe('Testes de Meta', () => {
  var metaId;

  test('Deve criar uma nova meta', async () => {
    const response = await request(app)
      .post('/api/metas')
      .send({
        paciente_id: 1,
        tipo_meta_id: 1,
        data_inicio: '01/10/2023',
        data_fim: '31/12/2023',
        status_meta_id: 1,
      });
    metaId = response.body.id;
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.paciente_id).toBe(1);
    expect(response.body.tipo_meta_id).toBe(1);
    expect(response.body.data_inicio).toBe('01/10/2023');
    expect(response.body.data_fim).toBe('31/12/2023');
    expect(response.body.status_meta_id).toBe(1);
  });

  test(`Deve retornar a meta 1`, async () => {
    const response = await request(app)
      .get(`/api/metas/${metaId}`)
      .send();
    expect(response.status).toBe(200);
  });

  test(`Deve retornar as metas do paciente 1`, async () => {
    const response = await request(app)
      .get('/api/metas?paciente_id=1')
      .send();
    expect(response.status).toBe(200);
  });

  test(`Deve atualizar a data_fim da meta`, async () => {
    const response = await request(app)
      .put(`/api/metas/${metaId}`)
      .send({
        data_fim: '31/01/2024',
      });
    expect(response.status).toBe(200);
    expect(response.body.data_fim).toBe('31/01/2024');
  });

  test(`Deve deletar a meta com ID=${metaId}`, async () => {
    const response = await request(app)
      .delete(`/api/metas/${metaId}`)
      .send();
    expect(response.status).toBe(204);
  });
});