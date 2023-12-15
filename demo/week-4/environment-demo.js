require("dotenv").config();
console.log(process.env.PORT);

process.on("exit", (code) => {
  console.log(`About to exit with code ${code}`);
});

