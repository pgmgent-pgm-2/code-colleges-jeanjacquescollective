const fs = require("fs");
const path = require("path");

const bestandsPad = path.join(__dirname, "output.txt");
const tekst = "Hallo, dit wordt naar het bestand geschreven!";

fs.writeFile(bestandsPad, tekst, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Bestand geschreven!");
});
