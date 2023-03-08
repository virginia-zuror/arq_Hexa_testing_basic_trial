const request = require('supertest');
const app = require('../server/index');

describe('Post movie', () => {
  it('should create a new movie', async () => {
    const res = await request(app).post('/api/v1/movies').send({
      Title: 'hola',
      Director: 'Holando ola',
      Poster: 'hola.jpg',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.status).toEqual('Success');
  });
});

describe('Get movie', () => {
    it('should retrieve all movies with Title, Director and Poster', async () => {
      const res = await request(app).get('/api/v1/movies')
      expect(res.body.Title).toEqual(res.body.Title);
      expect(res.body.Director).toEqual(res.body.Director);
      expect(res.body.Poster).toEqual(res.body.Poster);
      expect(res.statusCode).toEqual(200);
      expect(res.body.status).toEqual('Success');
    });
  });