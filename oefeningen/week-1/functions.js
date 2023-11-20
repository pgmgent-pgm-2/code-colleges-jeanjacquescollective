function greetings(naam = "daar") {
  // return "Hallo " + naam + "!";
  // alternatief
  return `Hallo ${naam}!`;
}

console.log(greetings("Anna")); // Hallo Anna!
console.log(greetings()); // Hallo Anna!

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
