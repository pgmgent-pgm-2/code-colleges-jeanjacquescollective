import utils from './utils.js';

const serverUrl = 'http://localhost:3050'; // Replace with your server URL
const countriesElement = document.getElementById('countries');
const selectedCountryElement = document.getElementById('selectedCountry');
const createCountryForm = document.getElementById('createCountryForm');

async function getAllCountries() {
  try {
    const { countries } = await utils.fetchData(`${serverUrl}/api/countries`);
    countries.forEach(country => {
      const countryElement = document.createElement('div');
      countryElement.textContent = country.name;
      countryElement.classList.add('country');
      countryElement.addEventListener('click', () => getCountryById(country.id));
      countriesElement.appendChild(countryElement);
    });
  } catch (error) {
    console.error(error);
  }
}

async function getCountryById(id) {
  try {
    const country = await utils.fetchData(`${serverUrl}/api/countries/${id}`);
    selectedCountryElement.textContent = country.name;
    // Display other country details here
    console.log(country);
  } catch (error) {
    console.error(error);
  }
}

createCountryForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const countryName = document.getElementById('countryName').value;
  try {
    await utils.postData(`${serverUrl}/api/countries`, { name: countryName });
    // Clear the form
    createCountryForm.reset();
    // Refresh the countries list
    countriesElement.innerHTML = '';
    getAllCountries();
  } catch (error) {
    console.error(error);
  }
});

getAllCountries();