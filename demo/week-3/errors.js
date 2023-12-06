// DONT
console.log("5" == 5); // true
// DO
console.log("5" === 5); // false
console.log(5 === 5); // true

// Duidelijke naamgeving
// DONT
const num = 25; // leeftijd
const userN = "John";
// DO
const userAge = 25;
const userName = "John";

// DONT
const students = 50;
const number_of_students = 50
// DO : camelcase
const numberOfStudents = 50;

// DONT
function calculateTotal(){
}

// DO
function calculateTotalPrice(quantity, unitPrice){

}
// DO : gebruik werkwoorden
function fetchData(){

}

// DONT
function data(){}

// DO : constanten met hoofdletters
const PI = 3.14;
const MAX_NUMBERS = 10;

// DONT: TE lange namen
function processInputAndDisplayToScreen(){
}


