const { Router } = require("express");


const { getHospitals, createHospital}=require('../controllers/hospitalControllers')

const router = Router();

router.post("/addhospital", createHospital)

router.get("/Hospitals", getHospitals)

module.exports= router