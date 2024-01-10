const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());


app.use("/api/countries", require("./src/routes/api/countryRoutes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
