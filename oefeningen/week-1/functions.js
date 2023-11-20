// oefening 1 t.e.m. 3
function greetings(naam = "daar") {
  // return "Hallo " + naam + "!";
  // alternatief
  return `Hallo ${naam}!`;
}

console.log(greetings("Anna")); // Hallo Anna!
console.log(greetings()); // Hallo Anna!

// oefening 4
function controlAge(age) {
  if (age < 18) {
    return "Nog niet volwassen";
  } else {
    return "Volwassen";
  }
  // alternatieve methode
//   return age < 18 ? "Nog niet volwassen" : "Volwassen";
}

console.log(controlAge(16)); // Nog niet volwassen
console.log(controlAge(21)); // Volwassen


// oefening 5
function mainLogic(callback){
  callback();
}
function myCallback(){
  console.log("Dit is een callback-functie.")
}
mainLogic(myCallback); // Dit is de callback-functie.