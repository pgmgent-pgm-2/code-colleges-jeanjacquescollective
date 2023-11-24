const mySet = new Set();

mySet.add("Ice Spice");
mySet.add("Zwangere Guy");
mySet.add("Madcon");

console.log(mySet.size);

for (let artist of mySet) {
  console.log(artist);
}

mySet.forEach((artist) => {
  console.log(artist);
});

mySet.add("Madcon");

mySet.forEach((artist) => {
  console.log(artist);
});


const artist = {
    name: "Earl Sweatshirt"
}

mySet.add(artist)

console.log(mySet)

// dit voegt wel toe
mySet.add({
    name: "Earl Sweatshirt"
})

console.log(mySet)

console.log(mySet.has(artist))
console.log(mySet.has({
    name: "Earl Sweatshirt"
}))

// delete
console.log(mySet.delete(artist));

// haal rap de unieke waarden uit een array
const array = [1,1,1,1,2,2,2,2,2,3,3,33,3,33];
// console.log([...new Set(array)])
const myArraySet = new Set(array);
// spread operator nog niet gezien
const uniqueValuesArray = [...myArraySet]

const woord = "Ananas";
const uniqueLetters = new Set(woord);

console.log(uniqueLetters)
