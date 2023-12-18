const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT ?? 3000;

const middlewareFunction = (request, response, next) => {
  // voer hier middleware logica uit
  console.log("Dit is de middleware");
  next();
};

app.use("/admin", middlewareFunction, (request, response) => {
  response.send("Welkom op de admin pagina");
});

app.listen(PORT, () => {
  console.log(`De server luistert op poort ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("Welkom");
});

// query parameters

app.get("/search", (request, response) => {
  const searchValue = request.query.q;
  response.send(`Je zocht naar ${searchValue}`);
});

app.use("/users", userRoutes);
