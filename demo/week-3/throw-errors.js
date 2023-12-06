try {
  if (typeof x == "undefined") {
    throw new Error("Geef X en Y een waarde.");
  }

  let sum = x + y;
  console.log(sum);
} catch (error) {
  console.log("Er is een fout opgetreden " + error.message);
} finally {
  console.log("Afsluiten programma");
}

const studentNames = ["Alice", "Bob", "Charlie"];

function getStudentName(array, index) {
  if (array[index]) {
    return array[index];
  } else {
    throw new Error("Invalid index for this array");
  }
}

try {
  console.log(getStudentName(studentNames, 4));
} catch (error) {
  console.log(error.message);
}

let woord = "test";

console.log(typeof woord);
