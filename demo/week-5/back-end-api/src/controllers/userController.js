const fsp = require("fs").promises;
const path = require("path");
const utils = require("./utils");
const userFilePath = path.join(__dirname, "..", "..", "data", "users.json");

async function getAllUsers(request, response) {
  // invoegen logica om json bestand te lezen
  try {
    const users = await utils.fetchData(userFilePath);
    response.json({ users });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
}

async function createUser(request, response) {
  try {
    const { name } = request.body;
    // Lees de bastaande gebruikersgegeven uit het json bestand
    const users = await utils.fetchData(userFilePath);

    // creeer user met unieke id
    const newUser = { id: users.length + 1, name };

    // voeg user toe aan lijst van users
    users.push(newUser);

    // schrijf weg
    await fsp.writeFile(userFilePath, JSON.stringify(users, null, 2));

    // stuur nieuwe gebruiker als antwoord terug
    response.status(201).json({ user: newUser });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
}


module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};
