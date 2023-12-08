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
