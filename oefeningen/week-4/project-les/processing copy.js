// processing.js
const processSpecialResults = (item) => {
  if (item.isSpecial) {
    item.specialResult =
      item.value > 30 && item.value <= 70
        ? "Intermediate Special"
        : "Extreme Special";
  } else {
    item.specialResult = "Not Special";
  }

  return item;
};

const processAdvancedResults = (item) => {
  if (item.details.importance > 3) {
    item.advancedResult =
      item.details.complexity > 5
        ? "High Importance, High Complexity"
        : "High Importance, Low Complexity";
  } else {
    item.advancedResult = "Low Importance";
  }

  return item;
};

const applyProcessingLogic = (data) => {
  return data.map((item) => {
    return {
      ...processSpecialResults({...item}),
      ...processAdvancedResults({...item}),
    };
  });
};

module.exports = {
  applyProcessingLogic,
};
