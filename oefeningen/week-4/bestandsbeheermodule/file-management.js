const fs = require('fs');

// Functie om gegevens naar een tekstbestand te schrijven
function schrijfNaarBestand(bestandsnaam, gegevens) {
    try {
        fs.writeFileSync(bestandsnaam, gegevens);
        console.log(`Gegevens zijn succesvol naar ${bestandsnaam} geschreven.`);
    } catch (error) {
        console.error(`Fout bij schrijven naar bestand: ${error.message}`);
    }
}

// Functie om gegevens uit een tekstbestand te lezen
function leesUitBestand(bestandsnaam) {
    try {
        const gegevens = fs.readFileSync(bestandsnaam, 'utf-8');
        console.log(`Gegevens uit ${bestandsnaam}: ${gegevens}`);
        return gegevens;
    } catch (error) {
        console.error(`Fout bij lezen van bestand: ${error.message}`);
        return null;
    }
}

module.exports = { schrijfNaarBestand, leesUitBestand };
