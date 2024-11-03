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

describe('Testes de Consulta', () => {
  var consultaId;

  test('Deve criar uma nova consulta', async () => {
    const response = await request(app)
      .post('/api/consultas')
      .send({
        paciente_id: 1,
        nutricionista_id: 1,
        data: '2023-10-01',
        hora: '10:00',
        status: 'Agendada',
      });
    consultaId = response.body.id;
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.paciente_id).toBe(1);
    expect(response.body.nutricionista_id).toBe(1);
    expect(response.body.data).toBe('2023-10-01');
    expect(response.body.hora).toBe('10:00');
    expect(response.body.status).toBe('Agendada');
  });

  test(`Deve retornar a consulta 1`, async () => {
    const response = await request(app)
      .get(`/api/consultas/${consultaId}`)
      .send();
    expect(response.status).toBe(200);
  });

  test(`Deve retornar as consultas do paciente 1`, async () => {
    const response = await request(app)
      .get('/api/consultas?paciente_id=1')
      .send();
    expect(response.status).toBe(200);
  });

  test(`Deve atualizar o status da consulta`, async () => {
    const response = await request(app)
      .put(`/api/consultas/${consultaId}`)
      .send({
        status: 'Concluída',
      });
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('Concluída');
  });

  test(`Deve deletar a consulta com ID=${consultaId}`, async () => {
    const response = await request(app)
      .delete(`/api/consultas/${consultaId}`)
      .send();
    expect(response.status).toBe(204);
  });
});