// arrow functions worden niet gehoist
test();
// testArrow();
function test(){
    console.log('Werkt dit?')
}

const testArrow = () => {
    console.log('Werkt dit ook?')
}

// hoe zit dat met initializations?
// var x 
console.log(x)
let x = 5;

// Good practice
// declareer en indien mogelijk initializeer je variabelen bovenaan