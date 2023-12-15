// data.js
const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 25; i++) {
    data.push({
        id: i,
        value: Math.floor(Math.random() * 100),
        category: i % 2 === 0 ? 'Even' : 'Odd',
        isSpecial: i % 3 === 0,
        details: {
        importance: Math.floor(Math.random() * 5) + 1,
        complexity: Math.floor(Math.random() * 10) + 1,
        },
    });
    }
    return data;
};
module.exports = {generateRandomData};
