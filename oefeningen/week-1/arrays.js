// dagenVanDeWeek

const weekDays = ["Monday", "Tuesday", "Wednesday"];

console.log(weekDays);
weekDays.forEach((weekday) => {
  console.log(weekday);
});

// waardeArray

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // ?

// Multidimensional arrays

const multiDimArray = [
  [1, 2, 3],
  [4, 5, 6],
];

function getMatrixElement(multiDimArray, row, column) {
  return multiDimArray[row][column];
}

console.log(getMatrixElement(multiDimArray, 0, 0));

// forOf / forEach
// Gebruik for…of om elk element in de array numbers te loggen.

const numbers = [1, 2, 3, 4, 5];
for (number of numbers) {
  console.log(number);
}

//     Gebruik for…of om elk karakter in de string “Hello” te loggen.
for (character of "Hello") {
  console.log(character);
}
//     Gebruik forEach om elk element in de array colors te loggen, samen met het bijbehorende indexnummer.

const colors = ["red", "blue", "green", "yellow"];

colors.forEach((color) => console.log(color));

// Methods - string

const woorden = [
  "mal",
  "snurkduif",
  "bromvlieg",
  "snottebel",
  "knotsgek",
  "pindakaas",
  "fluitketel",
  "smurfenmuts",
];
//   Maak een string door alle elementen in de array te verbinden met een koppelteken.
console.log(woorden.join("-"));
//   Controleer of ten minste één woord in de array begint met de letter “B”.
function wordStartWithB(woorden) {
  for (woord of woorden) {
    if (woord[0].toLowerCase() == "b") {
      return true;
    }
  }
  return false;
}

console.log(wordStartWithB(woorden));

console.log(
  woorden.some(function (woord) {
    return woord[0].toLowerCase() == "b";
  })
);
// console.log(woorden.some((woord) => woord[0].toLowerCase() == "b"));

//   Voeg het woord “Hello” toe aan het begin van de array.
woorden.unshift("hello");
console.log(woorden);
//   Controleer of alle woorden in de array meer dan twee letters hebben.
console.log(
  woorden.every(function (woord) {
    return woord.length >= 2;
  })
);
//   Sorteer de array in oplopende volgorde.
console.log(woorden.sort());
//   Haal het element op de derde positie in de array op.
console.log(woorden[2]);
//   Filter de woorden die langer zijn dan vier letters uit de array.
console.log(
  woorden.filter(function (woord) {
    return woord.length >= 4;
  })
);

// Methods - numbers

const willekeurigeGetallen = [23, 20, 7, 45, 12, 87, 3, 56, 19, 34, 91];

// Genereer een array met 10 willekeurige getallen tussen 1 en 100`
// const willekeurigeGetallen = Array.from(
//   { length: 10 },
//   () => Math.floor(Math.random() * 100) + 1
// );
console.log(willekeurigeGetallen);

// Filter de getallen groter dan 10 uit de array.
const numbersBiggerThanTen = willekeurigeGetallen.filter(
  (number) => number > 10
);
// Verwijder het laatste element uit de array.
console.log(willekeurigeGetallen);
console.log(willekeurigeGetallen.pop());
console.log(willekeurigeGetallen);
// Verwijder het eerste element uit de array.
console.log(willekeurigeGetallen.shift());
// Voeg het getal 5 toe aan het einde van de array.
console.log(willekeurigeGetallen.push(5));
// Controleer of alle getallen in de array kleiner zijn dan 20.
console.log(
  willekeurigeGetallen.every(function (getal) {
    return getal < 20;
  })
);

// controleren of waarde in de array zit
function valueInArray(array, value) {
  return array.some((element) => {
    return element == value;
  });
}

console.log(valueInArray(willekeurigeGetallen, 20));
// Maak een string door alle elementen in de array te verbinden met een spatie.
console.log(willekeurigeGetallen.join(" "));

// Tel alle getallen in de array op.
let som = 0;
for (getal of willekeurigeGetallen) {
  som += getal;
}
console.log(som);

console.log(
  willekeurigeGetallen.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  })
);

console.log(willekeurigeGetallen.reduce((prev, curr) => prev + curr));

// Verdubbel elk getal in de array.
console.log(willekeurigeGetallen.map((getal) => getal * 2));
// Controleer of ten minste één getal in de array groter is dan 30.
function atLeastOneValueBigger(array, value) {
  return array.some((element) => {
    return element > value;
  });
}

console.log(atLeastOneValueBigger(willekeurigeGetallen, 30));

// Methods - subarrays

const willekeurigeNamenArray = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eva", "Frank"],
  ["Grace", "Hank", "Ivy"],
  ["Jack", "Kelly", "Liam"],
];

console.log(willekeurigeNamenArray);

//   Maak een nieuwe array die alle subarrays flat maakt.
console.log(willekeurigeNamenArray.flat());
//   Verdubbel elke naam en maak een nieuwe array door alle subarrays te flatten.

//   Verwijder het eerste element uit elke subarray.
willekeurigeNamenArray.forEach((array) => array.shift());
console.log(willekeurigeNamenArray);
//   Verwijder het laatste element uit de array.
willekeurigeNamenArray.pop();

// optellen Arrays

function sumOfArrays(array1, array2) {
  let sum = [];
  for (let index = 0; index < Math.max(array1.length, array2.length); index++) {
    if (array1[index] && array2[index]) {
      sum[index] = array1[index] + array2[index];
    } else if (array1[index]) {
      sum[index] = array1[index];
    } else if (array2[index]) {
      sum[index] = array2[index];
    }
  }
  return sum;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 7];

console.log(sumOfArrays(array1, array2));

// const sum = [5,7,9]

// Langste woord in array

// Maak een array met woorden en schrijf een script dat de langste string in de array vindt.

let woordenArray = ["appel", "peer", "kiwi", "banaan"];

function langsteWoord(array) {
  let longestWord = "";
  array.forEach((woord) => {
    if (woord.length > longestWord.length) {
      longestWord = woord;
    }
  });
  return longestWord;
}

function longest(array) {
  return array.reduce((prev, curr) => {
    return prev.length >= curr.length ? prev : curr;
  });
}

console.log(longest(woordenArray));
console.log(langsteWoord(woordenArray)); // schrijf hier de logica om het langste woord te vinden //

// Even getallen filteren

// Schrijf een functie die alle even getallen uit een array filtert en een nieuwe array teruggeeft met enkel de even getallen.

function filterEvenGetallen(getallen) {
  // Implementeer de logica hier
  //   let newArray = [];
  //   for (let index = 0; index < getallen.length; index++) {
  //     const element = getallen[index];
  //     if(element % 2 == 0){
  //         newArray.push(element)
  //     }
  //   }
  //   return newArray
  return getallen.filter((number) => {
    return number % 2 == 0;
  });
}

let evenGetallen = filterEvenGetallen(willekeurigeGetallen);
console.log(evenGetallen);
