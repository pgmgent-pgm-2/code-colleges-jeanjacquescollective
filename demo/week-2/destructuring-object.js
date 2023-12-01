// kat aanmaken
const cat = {
    name: "Garfield",
    age: 47,
    city: "Marion"
}

// const name = cat.name;

const {name, age, city} = cat;

console.log("The cat is " + name)

// wat met niet itereerbare datatypen
const {test} = true;

console.log(test); // undefined

const {food = "Spaghetti"} = cat;

console.log(food); // undefined

// andere naam geven aan variabele 
const {name: naam, ...rest} = cat;

console.log(naam)
console.log(rest)

const objects = [
    {
        name: "Range Rover",
        size: 4
    },
    {
        name: "Coin",
        size: 2
    },
    {
        name: "Huis",
        size: 10
    },
]

for(const {name, size} of objects){
    console.log(`Het object ${name} heeft de grootte ${size}`)
}

// voorbeeld cursus

// destructuring parameters

function sum({a, b = 3}){
    return a + b;
}
const obj = {
    a:1,
    b:3
}
console.log(sum(obj))

const obj2 = {
    a:1
}

console.log(sum(obj2))