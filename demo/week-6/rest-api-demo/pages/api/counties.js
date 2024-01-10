// pages/api/countries.js
import { getCountriesData } from '../../lib/middleware';
import fs from 'fs-extra';

const countriesDataPath = './countries.json';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const countriesData = await getCountriesData();
      res.status(200).json(countriesData);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'PUT') {
    // Update country by code
    const { code, updatedData } = req.body;

    try {
      const countriesData = await getCountriesData();
      const updatedCountries = countriesData.countries.map((country) =>
        country.code === code ? { ...country, ...updatedData } : country
      );

      await fs.writeFile(countriesDataPath, JSON.stringify({ countries: updatedCountries }, null, 2));
      res.status(200).json({ message: 'Country updated successfully' });
    } catch (error) {
      console.error('Error updating country:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    // Delete country by code
    const { code } = req.body;

    try {
      const countriesData = await getCountriesData();
      const updatedCountries = countriesData.countries.filter((country) => country.code !== code);

      await fs.writeFile(countriesDataPath, JSON.stringify({ countries: updatedCountries }, null, 2));
      res.status(200).json({ message: 'Country deleted successfully' });
    } catch (error) {
      console.error('Error deleting country:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
