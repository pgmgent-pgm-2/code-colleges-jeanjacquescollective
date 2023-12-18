// file-management.js

const fs = require('fs').promises;

async function writeToFile(data, filePath) {
  try {
    await fs.writeFile(filePath, data);
    console.log('Gegevens zijn naar het bestand geschreven.');
  } catch (error) {
    console.error('Er is een fout opgetreden bij het schrijven naar het bestand:', error.message);
  }
}

async function readFromFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log('Gegevens zijn uit het bestand gelezen:', data);
  } catch (error) {
    console.error('Er is een fout opgetreden bij het lezen van het bestand:', error.message);
  }
}

module.exports = { writeToFile, readFromFile };
