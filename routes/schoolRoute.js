const { Router } = require("express");

const { getMyschools, createMyschool}=require('../controllers/schoolControllers')

const router = Router();

router.post("/addmyschool", createMyschool)

router.get("/Myschools", getMyschools)

module.exports= router