// toepassing 1: van een string naar een array met characters

const author = "Yuval Noah Harari";

const chars = [...author];

console.log(chars);

// toepassing 2: Kopieren van arrays

const originalArray = [1, 2, 3];

const newArray = originalArray;

newArray[0] = 5;

console.log(originalArray[0]); // Wat gaat er hier getoond worden?

const copiedArray = [...originalArray];

copiedArray[0] = 9;

console.log(originalArray[0]); // Wat gaat er hier getoond worden?
console.log(copiedArray[0]); // Wat gaat er hier getoond worden?

// Toepassing 3: samenvoegen arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(array1.concat(array2));

console.log([...array1, ...array2]);

// Toepassing 4: functieargumenten

const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c; // 6

const result = sum(...numbers); // schrijf hier je code
console.log(result); // 6

console.log(Math.max(1, 4, 6, 4, 324234));

const arr = [1, 4, 6, 4, 324234];
// als dit in een array zou zitten kunnen we de spread operator gebruiken
console.log(Math.max(...arr));

const datum = new Date(2023, 11, 4);
console.log(datum);

const dateField = [2023, 11, 4];
const date2 = new Date(...dateField);

console.log(datum);

// Toepassing 5: Objecten

const object1 = {
    waarde1: "a",
    waarde2: "b"
}

const object2 = {
    waarde2: "c",
    waarde4: "d"
}

const object3 = {...object1, ...object2, waarde2: 4}

console.log(object3)

