// maak een array aan
const testArray = [1, 2, 3];
// push iets naar die array
testArray.push(4);
console.log(testArray);
// voeg iets toe aan het begin van de array
testArray.unshift(0);
console.log(testArray);
// verwijder het laatste element
console.log(testArray.pop());
console.log(testArray);
// verwijder het eerste element
console.log(testArray.shift());
console.log(testArray);

console.log(testArray[testArray.length - 1]);

console.log(testArray.at(-1));
console.log(testArray.at(1));
console.log(testArray.at(-2));

// map functie

console.log(`Testarray: ${testArray}`);

const newArray = testArray.map((arrayElement) => arrayElement * 2);

console.log(newArray);

const pows = testArray.map((element, index) => {
  return { key: index, value: element ** 2 };
});

console.log(pows);

// join-methode

const joinArray = testArray.join();
console.log(joinArray);

// filter

// filter alle woorden met minimum 3 letters
const words = [
  "De",
  "Koe",
  "staat",
  "met",
  "haar",
  "voeten",
  "in",
  "het",
  "water",
];
const filteredWords = words.filter((word) => {
  return word.length >= 3;
}); // uw code hier aub
console.log(filteredWords);

console.log(words.every((word) => word.length > 3));

const scores = [12, 19, 12, 14, 15, 8];

console.log(scores.every((score) => score > 10));
console.log(scores.some((score) => score > 18));

// nagaan of een array een waarde bevat

const fruits = ["Buddha`s hand", "Mangosteen", "Chayote", "Jonagold"];

function fruitInArray(array, value) {
  // hier komt de code
  return array.some((element) => element === value);
}

console.log(fruitInArray(fruits, "Jonagold")); // true
console.log(fruitInArray(fruits, "Kiwi")); // false

// flat-methode

const multiDimArray = [[1, 2], 3, [4, 5, [6, 7, [8]]]];

console.log(multiDimArray.flat(Infinity));

// flatmap
let array = ["Het", "regent", "buiten", "heel veel"];

const newArray2 = array.flatMap((element) => element.split(" "));
// stap 1: map => ["Het", "regent", "buiten", ["heel", "veel"]];
// stap 2: flat met diepte 1: [ 'Het', 'regent', 'buiten', 'heel', 'veel' ]
console.log(newArray2);

const person1 = {
  favoriteDishes: ["Pizza", "Broodje jonge kaas van de panos"],
};

const person2 = {
  favoriteDishes: ["Lasagne", "Oesters", "Pizza"],
};

const persons = [person1, person2];

const favoriteDishes = [
  ...new Set(persons.flatMap((person) => person.favoriteDishes)),
];
console.log(favoriteDishes);

// sort

const letters = ["a", "b", "e", "c"];

letters.sort();
console.log(letters);

const numbers = [1, 2, 3, 4, 5];
numbers.sort(function (a, b) {
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
});
console.log(numbers);

// reduce 

const sum = numbers.reduce((prev, next) => {
  return prev + next;
})

console.log(sum)

// voorbeeld

const items = [
  { id: "🍔", name: "Super Burger", price: 3.99 },
  { id: "🍟", name: "Jumbo Fries", price: 1.99 },
  { id: "🥤", name: "Big Slurp", price: 2.99 },
];


const totalPrice = items
  .map((item) => item.price)
  .reduce((prev, next) => prev + next);

console.log(totalPrice); // Total: 8.97

// slice vs splice

const artistArray = ["Ice", "Spice", "Slice", "Splice"];

console.log(artistArray.slice(1,2));
console.log(artistArray)

// splice
console.log(artistArray.splice(1,2))
console.log(artistArray);

console.log(artistArray.splice(1,0,"Test"))

console.log(artistArray);
