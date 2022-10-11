const { Router } = require("express");

const { getHotels, createHotel}=require('../controllers/hotelControllers')

const router = Router();

router.post("/addhotel", createHotel)

router.get("/Hotels", getHotels)

module.exports= router