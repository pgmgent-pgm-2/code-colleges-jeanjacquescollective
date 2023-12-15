/*
checkPositive

Schrijf een functie die een RangeError werpt als het argument kleiner is dan 0.


*/

// Opgave
function checkPositive(value) {
  if (value < 0) {
    throw new RangeError("Getal is kleiner dan 0");
  }
}

try {
  checkPositive(-1);
} catch (error) {
  console.log(error.message);
}

/*

devideNumbers

Maak een functie genaamd divideNumbers die twee parameters, 
num1 en num2, accepteert. Binnen de functie, 
controleer of num2 gelijk is aan 0. 
Als dat het geval is, 
gooi dan een nieuwe foutmelding met de boodschap “Kan niet door nul delen”. Anders, retourneer het resultaat van de deling van num1 door num2.
*/

function devideNumbers(num1, num2) {
  if (num2 === 0) {
    throw new Error("Kan niet door nul delen.");
  }
  return num1 / num2;
}

try {
  devideNumbers(2, 0);
} catch (error) {
  console.log(error.message);
}

/*

Maak een functie genaamd findElement die een array arr en een waarde element accepteert. 
Binnen de functie, controleer of arr een array is. 
Als dat niet het geval is, gooi dan een nieuwe TypeError met de boodschap “Ongeldige invoer: arr moet een array zijn”. 
Controleer vervolgens of element aanwezig is in de array. 
Als dat het geval is, retourneer dan de index van het element. 
Als dat niet het geval is, 
gooi dan een nieuwe foutmelding met de boodschap “Element niet gevonden”.
*/

function findElement(array, elementToFind) {
  // kijken of array effectief een array is
  // we kunnen dit ook met instance of bekomen
  if (!Array.isArray(array)) {
    throw new TypeError("Element is geen array");
  }

  // controleren of element in array zit
  let index = array.findIndex((element) => element === elementToFind);
  if (index === -1) {
    throw new Error("Element niet gevonden");
  }
  return index;
}

try {
  console.log(findElement([1, 2], 2));
} catch (error) {
  console.log(error.message);
}
