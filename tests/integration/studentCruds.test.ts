import request from 'supertest';
import app from '../../src/app';

import { connection } from '../Helper/database.config';

// you need to be running the back-end for this test to work
// because it tests the database (run "docker-compose up")

describe('Student CRUDS', () => {
  beforeAll(async () => connection.create());

  beforeEach(async () => connection.clear());

  afterAll(async () => {
    await connection.clear();
    await connection.close();
  });

  it('should create a student', async () => {
    const fakeStudent = {
      name: 'Fake Name',
      registration: '123456789',
      email: 'fakeEmail@gmail.com',
      password: 'aaaaaaaa',
    };

    const response = await request(app).post('/student').send(fakeStudent);
    expect(response.status).toBe(201);
  });

  it('should not create a student with an existing email', async () => {
    const fakeStudent = {
      name: 'Fake Name',
      registration: '123456789',
      email: 'fakeEmail@gmail.com',
      password: 'aaaaaaaa',
    };

    await request(app).post('/student').send(fakeStudent);

    const response = await request(app).post('/Student').send(fakeStudent);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'This email is already registred');
  });

  it('should be able to get a student', async () => {
    const fakeStudent = {
      name: 'Fake Name',
      registration: '123456789',
      email: 'fakeEmail@gmail.com',
      password: 'aaaaaaaa',
    };

    const { body: { data: { id } } } = await request(app).post('/student').send(fakeStudent);

    const response = await request(app).get(`/student/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('name', fakeStudent.name);
    expect(response.body.data).toHaveProperty('email', fakeStudent.email);
  });

  it('should be able to update a Student', async () => {
    const fakeStudent = {
      name: 'Fake Name',
      registration: '123456789',
      email: 'fakeEmail@gmail.com',
      password: 'aaaaaaaa',
    };

    const { body: { data: { id } } } = await request(app).post('/student').send(fakeStudent);

    const response = await request(app).patch(`/student/${id}`).send({ name: 'New Name' });
    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('name', 'New Name');
    expect(response.body.data).toHaveProperty('email', fakeStudent.email);

    const { body: { data: { name } } } = await request(app).get(`/student/${id}`);
    expect(name).toBe('New Name');
  });

  it('should be able to delete a student', async () => {
    const fakeStudent = {
      name: 'Fake Name',
      registration: '123456789',
      email: 'fakeEmail@gmail.com',
      password: 'aaaaaaaa',
    };

    const { body: { data: { id } } } = await request(app).post('/student').send(fakeStudent);

    const response = await request(app).delete(`/student/${id}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Student deleted');

    const deleteResponse = await request(app).get(`/student/${id}`);
    expect(deleteResponse.status).toBe(404);
  });

  it('should not create a student with an invalid email', async () => {
    const fakeStudent = {
      name: 'Fake Name',
      registration: '123456789',
      email: 'fakeEmail',
      password: 'aaaaaaaa',
    };

    const response = await request(app).post('/student').send(fakeStudent);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Endereço de email inválido');
  });
});
