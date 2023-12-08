// Gegeven de array letters, gebruik array destructuring om de waarden van het eerste, tweede en derde element toe te kennen aan de variabelen firstLetter, secondLetter en thirdLetter. Log vervolgens deze variabelen in de console.

const letters = ["A", "B", "C"];

const [firstLetter, secondLetter, thirdLetter] = letters;

console.log(firstLetter, secondLetter, thirdLetter);

/* Gegeven de geneste array matrix, 
gebruik array destructuring om de waarden van het eerste 
element van de eerste array (1), 
het tweede element van de tweede array (5), 
en het derde element van de derde array (9) 
toe te kennen aan de variabelen a, b en c. 
Log vervolgens deze variabelen in de console.
*/
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [[a, ,], [, b], [, , c]] = matrix;

console.log(a, b, c);

// destructuring en swap

let x = 5;
let y = 10;

// schrijf hier je code om x en y om te wisselen
[x, y] = [y, x];

console.log(x, y); // Output: 10 5

const sentence = "This is a sentence.";
// schrijf hier je code om de eerste letter en de rest van de letters toe te kennen aan variabelen
const [firstLetter2, ...restOfSentence] = sentence;

console.log(firstLetter2, restOfSentence.join(" ")); // Output: T his is a sentence.

// destructuring in function

function multiply([number1, number2]) {
  return number1 * number2;
}
console.log(multiply([3, 5])); // Output: 15
console.log(multiply([7, 2])); // Output: 14

const numbers = [1, 2, 3, 4, 5];

// schrijf hier je code om de waarden toe te kennen aan variabelen
const [first, second, ...rest] = numbers;

console.log(first, second, rest); // Output: 1 2 [3, 4, 5]

// destructuring met geneste objecten

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

// schrijf hier je code om de waarden toe te kennen aan variabelen
const {
  name,
  age,
  address: { street, city },
} = person;

console.log(name, age, street, city);

// destructuring en default values

const book = { title: "JavaScript Basics", author: "John Doe" };

// schrijf hier je code om de waarden toe te kennen aan variabelen
const {
  title = "JavaScript for dummies",
  author = "John Paul Mueller",
  pages = 1089,
} = book;

console.log(title, author, pages);

// destructing in functieparameters

// Je code hier
function printDetails(person) {
  const { name, age = 25, gender = "Unknown" } = person;
  console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}

// Voorbeeldgebruik:
printDetails({ name: "Alice", age: 30, gender: "Female" }); // Output: Name: Alice, Age: 30, Gender: Female
printDetails({ name: "Bob" }); // Output:  Name: Alice, Age: 25, Gender: Unknown

// object destructuring om nieuw object aan te maken

// Je code hier
function mergeOptions(object1, object2) {
  const object3 = {...object1, ...object2}
  console.log(object3)
}

// Voorbeeldgebruik:
mergeOptions({ option1: "A", option2: "B" }, { option3: "C", option4: "D" }); // Output: { option1: "A", option2: "B", option3: "C", option4: "D" }


