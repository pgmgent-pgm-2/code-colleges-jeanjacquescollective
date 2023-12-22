const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/", UserController.getAllUsers);

// dynamische path-parameters
router.get("/:userId", (request, response) => {
  const id = request.params.userId;
  response.send(`Welkom user met id ${id}`);
});

router.post("/", UserController.createUser);



module.exports = router;
