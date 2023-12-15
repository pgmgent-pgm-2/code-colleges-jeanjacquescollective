// oefening 1

function copyArray(arr){
    return [...arr]
}

const originalArray = [1, 2, 3];
const copiedArray = copyArray(originalArray);
console.log(copiedArray); // Output: [1, 2, 3]

// oefening 2
function mergeArrays(array1,array2){
    return [...array1, ...array2]
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// oefening 3
function addProperty(obj, propertyName, propertyValue) {
    // Maak een nieuw object met de eigenschappen van het originele object
    const updatedObject = { ...obj };

    // Voeg de nieuwe eigenschap toe aan het nieuwe object
    updatedObject[propertyName] = propertyValue;

    // Geef het bijgewerkte object terug
    return updatedObject;
}

// Voorbeeldgebruik:
const originalObject = { name: "Alice" };
const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject); // Output: { name: 'Alice', age: 25 }

/*
Maak een functie genaamd mergeObjects die twee objecten ontvangt en deze samenvoegt tot één nieuw object met behulp van de spread operator.

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

*/

function mergeObjects(object1, object2){
    return { ...object1, ...object2 }
}
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
// let op: volgorde is hier van belang omdat een eigenschap wordt overschreven
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

/*
Schrijf een functie genaamd add(), deze functie kan een niet-gespecificeerd aantal argumenten ontvangen. In de functie log je de hoeveelheid argumenten.

add(1, 5, 6); // 3
add(1, 5, 6, 5, 1561, 2, 5); // 7
*/

function add(...argumenten){
    return argumenten.length;
}

console.log(add(1, 5, 6)); // 3
console.log(add(1, 5, 6, 5, 1561, 2, 5)); // 7


/* Maak een functie genaamd combineAllArrays(), deze functie kan een ongelimiteerd aantal arrays ontvangen. Return éen array met enkel de waardes van de doorgegeven arrays.

combineAllArrays([10, 12], [5, 4]); // [10, 12, 5, 4]
combineAllArrays([10, 12], [5, 4], [6, 6, 6]); // [10, 12, 5, 4, 6, 6]

*/

function combineAllArrays(...arrays){
    console.log([...arrays.flat()])
}

combineAllArrays([10, 12], [5, 4]); // [10, 12, 5, 4]
combineAllArrays([10, 12], [5, 4], [6, 6, 6]); // [10, 12, 5, 4, 6, 6]


/*

Schrijf een functie genaamd: addOnlyNumbers(), deze functie kan een ongelimiteerd aantal argumenten ontvangen, zowel strings als nummers, bv. addOnlyNumbers(1,5,6, 'cat', 'dog', 3). Log de volgende zin Er waren ... argumenten, de som van de getallen is ... wanneer je de functie uitvoert.

Tip

Je kan de reduce()-methode gebruiken.

addOnlyNumbers(1, 5, 6, "cat", "dog", 3); // Er waren 6 argumenten, de som van de getallen is 15.


*/

function addOnlyNumbers(...argumenten){
    const beginWaarde = 0;
    const som = argumenten.reduce(
      (vorigeWaarde, huidigeWaarde) => {
        if(typeof huidigeWaarde === 'number')
        {
            return vorigeWaarde + huidigeWaarde;
        }
            return vorigeWaarde + 0;
    },
      beginWaarde,
    );
    console.log(`Er waren ${argumenten.length} argumenten, de som van de getallen is ${som}.`)
}

addOnlyNumbers(1, 5, 6, "cat", "dog", '3');


