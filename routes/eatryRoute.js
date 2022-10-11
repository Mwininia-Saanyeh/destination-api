const { Router } = require("express");

const { getEatries, createEatry}=require('../controllers/eatryControllers')

const router = Router();

router.post("/addeatry", createEatry)

router.get("/Eatries", getEatries)

module.exports= router