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
const words = ['De', 'Koe',  'staat', 'met', 'haar', 'voeten', 'in', 'het', 'water'];
const filteredWords = // uw code hier aub
console.log(filteredWords);
