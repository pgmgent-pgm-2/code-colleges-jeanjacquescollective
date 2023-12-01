// Schrijf een functie genaamd calculateSquare die een getal
// als argument neemt en een callback-functie
// gebruikt om het kwadraat van dat getal te berekenen en
// af te drukken.

function calculateSquare(number, callback) {
  // Jouw code hier
  const square = number * number;
  callback(square);
}

// maak hier nog een functie aan om mee te sturen als callback
function printResult(result) {
  console.log("Het resultaat is " + result);
}

// roep hier de functie aan
calculateSquare(5, printResult);

// Herschrijf de volgende code zonder gebruik te maken van callback hell,
//  gebruikmakend van aparte functies en promises.

function fetchData() {
  // return promise
  return new Promise((resolve, reject) => {
    resolve("Data")
  })
}

function processData(data) {
  // return promise
  console.log(data)
  return new Promise((resolve, reject) => {
    resolve("Processed Data")
  })
}

function displayResult(result) {
  // afdrukken resultaat
  console.log(result)
}

fetchData()
    .then((data) => {
        return processData(data)
    })
    .then((data) => displayResult(data));

// Schrijf een functie genaamd fetchDataWithPromise 
// die een Promise teruggeeft die na 2 seconden 
// wordt opgelost met de tekst “Gegevens opgehaald” en 
// een kans van 30% heeft om te worden afgewezen met de 
// fout “Fout bij ophalen van gegevens”.

