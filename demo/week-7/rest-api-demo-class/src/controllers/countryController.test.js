const utils = require('./utils');
const countryController = require('./countryController');

describe('getCountryById', () => {
  it('should return the country with the specified ID', async () => {
    const request = { params: { id: 1 } };
    const response = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    const countries = [
      { id: 1, name: 'Country 1' },
      { id: 2, name: 'Country 2' },
    ];
    utils.fetchData = jest.fn().mockResolvedValue({ countries });

    await countryController.getCountryById(request, response);

    expect(response.json).toHaveBeenCalledWith({ country: countries[0] });
  });

  it('should return a 404 status if the country is not found', async () => {
    const request = { params: { id: 3 } };
    const response = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    const countries = [
      { id: 1, name: 'Country 1' },
      { id: 2, name: 'Country 2' },
    ];
    utils.fetchData = jest.fn().mockResolvedValue({ countries });

    await countryController.getCountryById(request, response);

    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.json).toHaveBeenCalledWith({
      message: 'Country ID 3 not found.',
    });
  });

  it('should return a 500 status if an error occurs', async () => {
    const request = { params: { id: 1 } };
    const response = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    utils.fetchData = jest.fn().mockRejectedValue(new Error('Some error'));

    await countryController.getCountryById(request, response);

    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.json).toHaveBeenCalledWith({ error: 'Internal Server Error ' });
  });
});