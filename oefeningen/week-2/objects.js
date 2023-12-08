// oefening auto
const auto = {
  merk: "Toyota",
  model: "Camry",
  jaar: 2022,
  kleur: "blauw",
};

auto.jaar = "rood";

// oefening persoon

// opbjecten vergelijken

function zijnObjectenIdentiek(obj1, obj2) {
  // Implementeer de logica hier
  // methode 1
  return JSON.stringify(obj1) == JSON.stringify(obj2);
}

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(zijnObjectenIdentiek(objectA, objectB)); // true

// oefening winkelwagen

const shoppingCart = {
  item1: { name: "Product 1", price: 20 },
  item2: { name: "Product 2", price: 30 },
  item3: { name: "Product 3", price: 15 },
};

// Gebruik Object.keys() om de namen van de items weer te geven
const itemNames = Object.keys(shoppingCart); // vul hier aan
console.log("Namen van items:", itemNames);

// Gebruik Object.values() om de prijzen van de items weer te geven
const itemPrices = Object.values(shoppingCart); // vul hier aan
console.log("Prijzen van items:", itemPrices);

// Gebruik Object.entries() om zowel de namen als prijzen van de items weer te geven
const itemEntries = Object.entries(shoppingCart); // vul hier aan
console.log("Namen en prijzen van items:", itemEntries);

/*
      naam: “Alice”
    leeftijd: 22
    cijfers: [90, 85, 95]
    isActief: true
  */

// json object aanmaken

const jsonObjectPErson = {
  naam: "Alice",
  leeftijd: 22,
  cijfers: [90, 85, 95],
  isActief: true,
};

// json-array met objecten

const personen = {
  personen: [
    {
      voornaam: "John",
      achternaam: "Doe",
      leeftijd: 30,
      adres: {
        straat: "123 Main Street",
        stad: "Cityville",
        land: "Netherlands",
      },
    },
    {
      voornaam: "Jane",
      achternaam: "Smith",
      leeftijd: 25,
      adres: {
        straat: "456 Oak Avenue",
        stad: "Townsville",
        land: "Netherlands",
      },
    },
  ],
};

//   JSON-conversie

const auto2 = {
  merk: "BMW",
  model: "X5",
  bouwjaar: 2020,
  isNieuw: true,
};

const jsonAuto = JSON.stringify(auto2);

console.log(jsonAuto);

// IsJSONStringWellformed

function IsJSONStringWellformed(jsonText) {
  try {
    JSON.parse(jsonText);
    return true;
  } catch {
    return false;
  }
}

console.log(IsJSONStringWellformed('{"name":"John","age":25,"city":"New York"}')) 
console.log(IsJSONStringWellformed('{"firstName:John","lastName":"Doe"}')) 
console.log(IsJSONStringWellformed('{"color":"red","wheels":4,"engine":{"cylinders":6,"size":3.6}}')) 

