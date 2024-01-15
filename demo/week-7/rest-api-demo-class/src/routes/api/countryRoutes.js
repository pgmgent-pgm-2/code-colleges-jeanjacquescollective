const express = require("express");
const router = express.Router();
const countryController = require("../../controllers/countryController");


router.route("/")
    .get(countryController.getAllCountries)
    .post(countryController.createCountry)

router.route('/:id').get(countryController.getCountryById)

module.exports = router;
