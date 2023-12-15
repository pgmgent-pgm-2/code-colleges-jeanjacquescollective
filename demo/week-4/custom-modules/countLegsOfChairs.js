const numberOfLegs = 4;

function countLegs(numberOfChairs){
    return numberOfChairs * numberOfLegs;
}

function countSpecialLegs(numberOfChairs){
    return numberOfChairs * (numberOfLegs+1);
}

module.exports = {
    countLegs,
    countSpecialLegs
}