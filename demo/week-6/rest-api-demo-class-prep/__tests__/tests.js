const request = require('supertest');
const express = require('express');
const countryController = require('../src/controllers/countryController');

const baseURL = "http://localhost:3000"

jest.mock('../src/controllers/countryController');

// start up server



describe('GET /api/countries', () => {
  it('should return all countries', async () => {

    const response = await request(baseURL).get('/api/countries');
    console.log(response);
    expect(response.status).toBe(200);
  });
});

describe('GET /api/countries/:id', () => {
  it('should return a country by id', async () => {
    const response = await request(baseURL).get('/api/countries/1');
    expect(response.status).toBe(200);
  });
}
);

describe('POST /api/countries', () => {
  it('should create a new country', async () => {
    const response = await request(baseURL).post('/api/countries').send({ name: 'test' });
    expect(response.status).toBe(201);
  });
}
);