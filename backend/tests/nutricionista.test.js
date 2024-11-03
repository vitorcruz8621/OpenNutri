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


describe('Testes de Nutricionista', () => {
  var nutricionistaId, nutricionistaNome;
  
  test('Deve criar um novo nutricionista', async () => {
    const response = await request(app)
      .post('/api/nutricionistas')
      .send({
        nome: 'Outra Pessoa',
        email: 'outra.pessoa@gmail.com',
        senha: 'senhaSegura123',
        telefone: '12345678901',
      });
    nutricionistaNome = response.body.nome
    nutricionistaId = response.body.id
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(nutricionistaNome).toBe('Outra Pessoa');
    expect(response.body.email).toBe('outra.pessoa@gmail.com');
    expect(response.body.senha).toBe('senhaSegura123');
    expect(response.body.telefone).toBe('12345678901');
  });

  test(`Deve retornar o nutricionista 1 - ${nutricionistaNome}`, async () => {
    const response = await request(app)
      .get(`/api/nutricionistas/${nutricionistaId}`)
      .send();
    expect(response.status).toBe(200);
  });

  test(`Deve retornar o nutricionista com nome: "${nutricionistaNome}"`, async () => {
    const response = await request(app)
      .get('/api/nutricionistas?nome=Outra Pessoa&email=outra.pessoa@gmail.com')
      .send();
    expect(response.status).toBe(200);
  });

  test(`Deve atualizar o nome e telefone do nutricionista "${nutricionistaNome}"`, async () => {
    const response = await request(app)
      .put(`/api/nutricionistas/${nutricionistaId}`)
      .send({
        nome: 'Outra Pessoa Anonima',
        telefone: '81928403728',
      });
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Outra Pessoa Anonima');
    expect(response.body.telefone).toBe('81928403728');
  });

  test(`Deve deletar o nutricionista com nome "${nutricionistaNome}", ID=${nutricionistaId}`, async () => {
    const response = await request(app)
      .delete(`/api/nutricionistas/${nutricionistaId}`)
      .send();
    expect(response.status).toBe(204);
  });
});