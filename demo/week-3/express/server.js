const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

const students = [
  {
    name: "studentName",
  },
];
app.get("/api/students", (request, response) => {
  response.send(students);
});

app.listen(3000, () => {
  console.log("De server luistert op poort 3000");
});
