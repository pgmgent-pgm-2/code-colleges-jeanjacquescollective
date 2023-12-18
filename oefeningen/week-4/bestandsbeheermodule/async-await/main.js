// main.js

const { writeToFile, readFromFile } = require('./file-management');

const filePath = 'voorbeeldbestand.txt';
const dataToWrite = 'Dit is wat gegevens om naar het bestand te schrijven.';

// Schrijf gegevens naar het bestand
writeToFile(dataToWrite, filePath).then(() => {
  // Lees gegevens uit het bestand nadat ze zijn geschreven
  readFromFile(filePath);
});
