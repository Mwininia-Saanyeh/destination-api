const { Router } = require("express");

const { getCommercialproperties, createCommercialproperty } = require("../controllers/commercialpropertiesControllers");

const router = Router();

router.post("/addcommercialproperty", createCommercialproperty)

router.get("/commercialproperties", getCommercialproperties)

module.exports= router