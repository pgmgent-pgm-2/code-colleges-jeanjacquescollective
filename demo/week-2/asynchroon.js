// voorbeeld synchroon programmeren
function task(message, callback) {
  let n = 10000000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
  callback();
}

// console.log("Start");
// task("Download file...", () => {
//   console.log("Done");
// });

// voorbeeld met data
// CALLBACK HELL
// function fetchData(callback) {
//   let data;
//   console.log("Start ophalen van gegevens");
//   setTimeout(() => {
//     console.log("Gegevens opgehaald");
//     data = "data";
//     callback(data);
//   }, 2000);
// }

// function processData(data, callback) {
//   console.log("Processing Data");
//   callback(data)
// }

// function showData(data){
//     console.log(data)
// }

// fetchData((data) => {
//     processData(data, (processData) => {
//         showData(processData);
//     })
// });

// voorbeeld van callback function in DOM
// document.getElementById("element-1").addEventListener("click", ()=>{
//     console.log("Clicked")
// })

function Counter() {
  this.count = 0;
  console.log(this);
  setInterval(() => {
    this.count++;
    console.log(this);
    console.log(this.count);
  }, 100);
}
// in commentaar geplaatst zodat de counter niet loopt
// const counter = new Counter();

// promises
const gemiddelde = 9;

const isIedereenErdoor = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (gemiddelde >= 10) {
      resolve("Iedereen is er door!");
    } else {
      reject("Jammer! :( ");
    }
  }, 2000);
});

console.log(isIedereenErdoor);

isIedereenErdoor
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Geniet van de zomer!");
    console.log(isIedereenErdoor);
  });

console.log(isIedereenErdoor);

const punten = 80;

// schrijf nu een promise die 3 seconden wacht en waarbij we 10 euro krijgen als de punten boven de 70 zitten
function krijgIkGeld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (punten >= 70) {
        resolve({
          budget: 10000,
        });
      } else {
        reject("Niet goed");
      }
    }, 3000);
  });
}

function spendeerGeld(budget) {
  return new Promise((resolve, reject) => {
    if (budget > 2000) {
      resolve("We kopen een auto");
    } else {
      reject("We gaan met de segway");
    }
  });
}

krijgIkGeld()
  .then((object) => spendeerGeld(object.budget))
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

function belofte1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Belofte 1 gelukt");
    }, 2000);
  });
}

function belofte2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Belofte 2 gelukt");
    }, 3000);
  });
}

Promise.all([belofte1(), belofte2()]).then(([result1, result2]) => {
  console.log(result1, result2);
});

Promise.all([belofte1(), belofte2()]).then((results) => {
  console.log(results);
});

Promise.race([belofte1(), belofte2()]).then((results) => {
    console.log(results);
  });



  
