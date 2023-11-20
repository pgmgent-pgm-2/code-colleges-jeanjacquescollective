// variabele in globale scope
let message = "Hallo wereld!";

console.log(message); // Hallo wereld!

function zegHallo() {
  // variabele in lokale scope
  let message;
  console.log(message); // Hallo wereld!
  message = "Vaarwel!";
  function nestedFunction() {
    console.log("Bericht uit nested function " + message); // Vaarwel!
  }
  nestedFunction();
}

zegHallo();
console.log(message); // Vaarwel

// Pass by value

function doubleNumber(number) {
  number = number * 2;
  console.log(`Binnen de functie: ${number}`); // 10 
}
// Bij argumenten met primitieve waarden wordt er een kopie van de waarde doorgegeven als argument
let originalNumber = 5;
doubleNumber(originalNumber);
console.log(`Buiten de functie: ${originalNumber}`); // 5

// Pass by reference

function doubleNumberObj(obj){
    obj.number = obj.number * 2;
    console.log(`Binnen de functie: ${obj.number}`); // 10
}

let originalObject = {
    number: 5,
}

doubleNumberObj(originalObject);
console.log(`Buiten de functie: ${originalObject.number}`); // 10




