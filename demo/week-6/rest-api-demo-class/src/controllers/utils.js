const fsp = require("fs").promises;

async function fetchData(dataPath) {
  const data = await fsp.readFile(dataPath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData;
}

async function writeData(dataPath, data) {
  await fsp.writeFile(dataPath, JSON.stringify({ countries: data }, null, 2));
}

module.exports = {
  fetchData,
  writeData
};
