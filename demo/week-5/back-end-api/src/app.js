const express = require("express");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(bodyParser.json());

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  response.header('Access-Control-Allow-Methods', 'GET, POST');
  response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next();
})

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

// gebruiken van user routes
app.use("/api/users", userRoutes);
