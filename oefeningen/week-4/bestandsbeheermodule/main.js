// Importeer de file-management module
const fileManagement = require('./file-management');

// Geef het bestandsnaam op
const bestandsnaam = 'gegevens.txt';

// Gegevens om naar het bestand te schrijven
const teSchrijvenGegevens = 'Dit zijn de gegevens die naar het bestand worden geschreven.';

// Schrijf gegevens naar het bestand
fileManagement.schrijfNaarBestand(bestandsnaam, teSchrijvenGegevens);

// Lees gegevens uit het bestand
const gelezenGegevens = fileManagement.leesUitBestand(bestandsnaam);

// Doe iets met de gelezen gegevens (bijvoorbeeld verder verwerken)
if (gelezenGegevens) {
    // Voeg hier je verdere logica toe
    console.log(gelezenGegevens)
}
