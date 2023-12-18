const fs = require("fs").promises;
const path = require("path")

const userFilePath = path.join(__dirname, "..", "data", "users.json");

async function getAllUsers(request, response) {
    // invoegen logica om json bestand te lezen
    response.json( [
        { "id": 1, "name": "Tom" },
        { "id": 2, "name": "Evi" }
      ])
}

module.exports = {
    getAllUsers
}