let arr = [];

// ter info
const arr1 = new Array();
const arr2 = Array();

let fruits = ["Appel", "Kiwi", "Mango"];

console.log(fruits);

console.log(fruits[1]);

fruits[1] = "Banaan";

console.log(fruits);

arr = [
  "BWM",
  { name: "name" },
  true,
  function () {
    console.log("Hello");
  },
];

arr[3]();

console.log(arr.length);

console.log(arr);

arr.length = 2;

console.log(arr); // [ 'BWM', { name: 'name' } ]

arr.length = 4;

console.log(arr); // [ 'BWM', { name: 'name' }, <2 empty items> ]

arr[123] = "";

console.log(arr.length); // 124

// array leegmaken
arr.length = 0;

// arrays vergelijken

console.log([] == []);

let a = [];
b = a;
console.log(a == b);

// Methode 1

const getallen = [1, 2, 3];
const getallen2 = [1, 2, 3];

const zijnGelijk = JSON.stringify(getallen) === JSON.stringify(getallen2);

console.log(
  zijnGelijk ? "De arrays zijn gelijk" : "De arrays zijn niet gelijk"
);

function zijnArraysGelijk(array1, array2) {
  // schrijf hier je code
  // TIP: gebruik een for-loop
  if (array1.length !== array2.length) {
    return false;
  }

  // elk element vergelijken
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
}

console.log(
  zijnArraysGelijk(getallen, getallen2)
    ? "De arrays zijn gelijk"
    : "De arrays zijn niet gelijk"
);

const films = [
  ["The Matrix", 10, 12],
  ["The Titanic", 12, 12],
  ["The rmintator", 3, 5],
  ["The Conjuring", 12, 12],
];

console.log(films[0][0]);

films.forEach((movie) => {
  console.log(`Movie ${movie[0]} has a box revenue of 
    ${movie[1]} euro and ${movie[2]} people watched it.`);
});

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// loops

for (let index = 0; index < matrix.length; index++) {
  const element = matrix[index];
  console.log(element);
}

for(let movie of films){
    console.log(movie);
}

for(let [index, element] of films.entries()){
    console.log(`${element} is de film met index ${index}`)
}

const incompleteArray = ['1','2',,'3']
// niet toegewezen elementen worden niet geitereerd
incompleteArray.forEach((currentElement) => {
    console.log(currentElement)
})

for(let element in incompleteArray){
    console.log(`Element van for in ${element}`)
}
