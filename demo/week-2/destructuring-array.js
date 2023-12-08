const aanwezigen = ["Jordan", "Arno", "Matthias"];


const [naam1, naam2, naam3, naam4 = "Yusuf"] = aanwezigen;

console.log(naam1);

// spread operator
const dier = "kat";

const [kop, ...staart] = dier;

console.log(staart);

const nummers = [1, 2, 3, 4, 5];

const [getal, ...rest] = nummers;
console.log(rest); // [2, 3, 4, 5]

const letters = ["a", "b"];

for (const [index, element] of letters.entries()){
    console.log(index, element)
}

// for (const entry of letters.entries()){
//     console.log(entry)
// }

const [all, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec("2999-12-31");

console.log(month)
