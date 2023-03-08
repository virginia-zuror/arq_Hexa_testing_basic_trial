const request = require('supertest');
const app = require('../server/index');

describe('Post show', () => {
  it('should create a new show', async () => {
    const res = await request(app).post('/api/v1/shows').send({
      Title: 'hola',
      Poster: 'hola.jpg',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.status).toEqual('Success');
  });
});

describe('Get show', () => {
    it('should retrieve all shows with Title and Poster', async () => {
      const res = await request(app).get('/api/v1/shows')
      expect(res.body.Title).toEqual(res.body.Title);
      expect(res.body.Poster).toEqual(res.body.Poster);
      expect(res.statusCode).toEqual(200);
      expect(res.body.status).toEqual('Success');
    });
  });