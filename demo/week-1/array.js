let arr = [];

// ter info
const arr1 = new Array();
const arr2 = Array();

let fruits = ["Appel", "Kiwi", "Mango"]

console.log(fruits)


console.log(fruits[1])

fruits[1] = "Banaan";

console.log(fruits)

arr = [
    "BWM",
    { name: 'name' },
    true,
    function () {
        console.log("Hello")
    }
]

arr[3]();

console.log(arr.length)

console.log(arr)

arr.length = 2;

console.log(arr) // [ 'BWM', { name: 'name' } ]

arr.length = 4;

console.log(arr) // [ 'BWM', { name: 'name' }, <2 empty items> ]

arr[123] = '';

console.log(arr.length) // 124

// array leegmaken
arr.length = 0;

// arrays vergelijken


console.log([] == []); 

let a = [];
b = a
console.log(a == b)

// Methode 1

const getallen = [1,2,3]
const getallen2 = [1,2,3]

const zijnGelijk = JSON.stringify(getallen) === JSON.stringify(getallen2);

console.log(zijnGelijk ? "De arrays zijn gelijk" : "De arrays zijn niet gelijk")

function zijnArraysGelijk(array1, array2){
    // schrijf hier je code
    // TIP: gebruik een for-loop
}

console.log(zijnArraysGelijk(getallen, getallen2) ? "De arrays zijn gelijk" : "De arrays zijn niet gelijk")



