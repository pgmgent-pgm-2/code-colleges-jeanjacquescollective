const { generateRandomData } = require("./data");
const { processData, calculateImportanceCount } = require("./processing");
const { generateDataReport } = require("./reporting");
const data = generateRandomData();
const processedData = processData(data);
const importanceCount = calculateImportanceCount(data)

generateDataReport(data, importanceCount);

// console.log(processedData[0]);
// console.log(data[0]);
