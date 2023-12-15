const {generateRandomData} = require('./data');
const {applyProcessingLogic} = require('./processing');
const {displayExtendedReport, displayAdditionalStatistics} = require('./reporting');

// main.js
const data = generateRandomData();

// Process data
applyProcessingLogic(data);

// Display data
displayExtendedReport(data);

// Calculate statistics
let highImportanceCount = 0;
let lowImportanceCount = 0;
let highComplexityCount = 0;
let lowComplexityCount = 0;

data.forEach(item => {
  if (item.details.importance > 3) {
    highImportanceCount++;
  } else {
    lowImportanceCount++;
  }

  if (item.details.complexity > 5) {
    highComplexityCount++;
  } else {
    lowComplexityCount++;
  }
});

// Display statistics
displayAdditionalStatistics(highImportanceCount, lowImportanceCount, highComplexityCount, lowComplexityCount, data.length);
