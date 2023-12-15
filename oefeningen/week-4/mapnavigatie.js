const fs = require('fs');
const path = require('path');

function lijstBestandenEnMappen(mapPad) {
    try {
        // Lees de inhoud van de map
        const items = fs.readdirSync(mapPad);

        // Loop door alle items en geef aan of het een bestand of een map is
        items.forEach(item => {
            const itemPad = path.join(mapPad, item);
            const isBestand = fs.statSync(itemPad).isFile();
            console.log(`${item} is een ${isBestand ? 'bestand' : 'map'}`);
        });
    } catch (error) {
        console.error(`Fout bij het lezen van de map: ${error.message}`);
    }
}

// Geef het pad naar de gewenste map op
const mapPad = './';

// Roep de functie aan met het opgegeven mapPad
lijstBestandenEnMappen(mapPad);
