// TypeErrors
const testArray = undefined;

// console.log(testArray.length)

// console.log(nietBestaandObject.name);

const x = [32];
// x();

// for (const number of x){
//     console.log(number)
// }

function testArrayFunction(x){
    console.log(x.length)
}

testArrayFunction(x);

// SyntaxErrors / schrijffouten

// for (let index = 0; index < array.length,; index++) {
//     const element = array[index];
    
// }

function testScope(){
    const test = "Een waarde";
}

// console.log(test)

//  RangeError: Maximum call stack size exceeded
// function infiniteRecursion(){
//     infiniteRecursion();
// }

// infiniteRecursion();
const testNumber = 4;
console.log(testNumber.toPrecision(-1))

