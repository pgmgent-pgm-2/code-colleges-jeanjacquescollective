const fs = require("fs");

// Functie om gegevens naar een tekstbestand te schrijven
function schrijfNaarBestand(bestandsnaam, gegevens) {
  fs.writeFile(bestandsnaam, gegevens, (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`${gegevens} naar ${bestandsnaam} geschreven.`);
  });
}

// Functie om gegevens uit een tekstbestand te lezen
async function leesUitBestand(bestandsnaam) {
  fs.readFile(bestandsnaam, "utf8", (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(data)
  });
}



module.exports = { schrijfNaarBestand, leesUitBestand };
