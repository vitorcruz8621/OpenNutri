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

describe('Testes de Paciente', () => {
  var pacienteId, pacienteNome;

  test('Deve criar um novo paciente', async () => {
    const response = await request(app)
      .post('/api/pacientes')
      .send({
        nome: 'Paciente Teste',
        email: 'paciente.teste@gmail.com',
        telefone: '12345678901',
      });
    pacienteNome = response.body.nome;
    pacienteId = response.body.id;
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(pacienteNome).toBe('Paciente Teste');
    expect(response.body.email).toBe('paciente.teste@gmail.com');
    expect(response.body.telefone).toBe('12345678901');
  });

  test(`Deve retornar o paciente 1 - ${pacienteNome}`, async () => {
    const response = await request(app)
      .get(`/api/pacientes/${pacienteId}`)
      .send();
    expect(response.status).toBe(200);
  });

  test(`Deve retornar o paciente com nome: "${pacienteNome}"`, async () => {
    const response = await request(app)
      .get('/api/pacientes?nome=Paciente Teste&email=paciente.teste@gmail.com')
      .send();
    expect(response.status).toBe(200);
  });

  test(`Deve atualizar o nome e telefone do paciente "${pacienteNome}"`, async () => {
    const response = await request(app)
      .put(`/api/pacientes/${pacienteId}`)
      .send({
        nome: 'Paciente Teste Atualizado',
        telefone: '81928403728',
      });
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Paciente Teste Atualizado');
    expect(response.body.telefone).toBe('81928403728');
  });

  test(`Deve deletar o paciente com nome "${pacienteNome}", ID=${pacienteId}`, async () => {
    const response = await request(app)
      .delete(`/api/pacientes/${pacienteId}`)
      .send();
    expect(response.status).toBe(204);
  });
});