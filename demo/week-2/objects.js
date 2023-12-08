const person = {
  name: "Joe",
  age: 45,
  gender: "male",
  //   custom method
  sayName() {
    console.log(this.name);
  },
};

console.log(person.name );
console.log(person["name"]);

// voor variabelen gebruiken we square-bracket notatie
const key = "age";
// dit werkt niet
console.log(person.key);
// dit werkt wel
console.log(person[key]);

person.city = "Zelzate";
// liever geen spaties
person["Favorite Food"] = "Kiwi";
console.log(person.city); // Zelzate
console.log(person);

delete person.city;

console.log(person);

// Loops

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// array omzetten naar object

const keyValuePairs = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

const testObj = Object.fromEntries(keyValuePairs);
console.log(testObj);

// aanroepen custom method
person.sayName();

// oefening

const shoppingCart = {
  items: [
    { name: "Product 1", price: 20 },
    { name: "Product 2", price: 12 },
    { name: "Product 3", price: 50 },
  ],
  calculateTotal: function () {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  },
  calculateTotalReduce: function () {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
};

const totalPrice = shoppingCart.calculateTotal();

console.log("De totale prijs is " + totalPrice);
console.log(shoppingCart.calculateTotalReduce());

function calculateTotal(shoppingCart) {
  let total = 0;
  shoppingCart.items.forEach((item) => {
    total += item.price;
  });
  return total;
}

console.log(calculateTotal(shoppingCart))