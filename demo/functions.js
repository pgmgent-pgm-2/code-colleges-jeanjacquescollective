function printItemsOfArray(stringArray) {
  for (string of stringArray) {
    console.log(string);
  }
}

const daysOfWeek = ["Monday", "Tuesday", "Wednesday"];

printItemsOfArray(daysOfWeek);

// b krijgt nu de default value van 0
function sum(a, b = 0) {
  return a + b;
}

console.log(`De som is ${sum(2, 4)}`);

function makeList(items) {
  return items.join(", ");
}

console.log(makeList(daysOfWeek));

function getFirstItemOfList(items) {
  return items[0];
}

function objectSum(obj) {
  return obj.x + obj.y;
}

const obj = {
  x: 1,
  y: 12,
};

console.log(`De som van het object is ${objectSum(obj)}`);

function doCalculation(x, y, calculation) {
  return calculation(x, y);
}

let sumResult = doCalculation(76, 15, sum);
console.log(`Optelling ${sumResult}`);

function fetchData(callback) {
  // Simuleer een asynchrone taak, zoals een AJAX-verzoek
  setTimeout(function () {
    const data = "Gegevens van de server";
    callback(data); // Roep de callback-functie aan met de opgehaalde gegevens
  }, 1000);
}

// Gebruik van de callback-functie
fetchData(function (result) {
  console.log(result); // Output: Gegevens van de server
});
