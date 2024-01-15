const path = require("path");
const utils = require("./utils");

const countriesFilePath = path.join(
  __dirname,
  "..",
  "..",
  "data",
  "countries.json"
);

async function getAllCountries(request, response) {
  try {
    const { countries } = await utils.fetchData(countriesFilePath);
    response.status(200).json({ countries });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error " });
  }
}

async function getCountryById(request, response) {
  try {
    const countryId = request.params.id;
    const { countries } = await utils.fetchData(countriesFilePath);

    const country = countries.find(
      (country) => country.id === parseInt(countryId)
    );

    if (!country) {
      return response
        .status(404)
        .json({ message: `Country ID ${countryId} not found.` });
    }

    response.json({ country });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error " });
  }
}

async function createCountry(request, response) {
  try {
    const { name } = request.body;
    const { countries } = await utils.fetchData(countriesFilePath);

    const newCountry = { id: countries.length + 1, name };

    countries.push(newCountry);

    utils.writeData(countriesFilePath, countries)

    response.status(201).json({ country: newCountry });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error " });
  }
}

module.exports = {
  getAllCountries,
  getCountryById,
  createCountry,
};
