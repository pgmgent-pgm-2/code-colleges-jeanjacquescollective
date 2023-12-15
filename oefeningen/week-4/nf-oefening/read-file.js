const fs = require("fs");

fs.readFile("leesbestand.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});
