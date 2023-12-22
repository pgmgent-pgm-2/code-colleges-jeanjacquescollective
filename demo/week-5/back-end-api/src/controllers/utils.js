const fsp = require("fs").promises;

async function fetchData(dataPath) {
  const data = await fsp.readFile(dataPath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData;
}


module.exports = {
    fetchData
}