const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3050;

const app = express();

// laat alle origins toe op je API

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3050', 'http://localhost:5500'],
    methods: 'GET, PUT, PATCH, POST, DELETE',
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use("/api/countries", require("./src/routes/api/countryRoutes"));

app.use("/", require("./src/routes/root"))


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
