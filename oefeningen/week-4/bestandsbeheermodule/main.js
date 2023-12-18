// Importeer de file-management module
const fileManagement = require('./file-management');

// Geef het bestandsnaam op
const bestandsnaam = 'gegevens.txt';

// Gegevens om naar het bestand te schrijven
const teSchrijvenGegevens = 'Dit zijn de gegevens die naar het bestand worden geschreven.';

// Schrijf gegevens naar het bestand
fileManagement.schrijfNaarBestand(bestandsnaam, teSchrijvenGegevens);

fileManagement.leesUitBestand(bestandsnaam);

// Lees gegevens uit het bestand
leesGegevens();


