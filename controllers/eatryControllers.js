const Eatry = require('../models/eatrySchema')

const createEatry = (req,res) => {
    const newEatry = new Eatry({
        eatryname:req.body.eatryname,
        location: req.body.location,
        services: req.body.services,
        menu: req.body.menu,
        address: req.body.address,
        contact: req.body.contact,
        images: req.body.images
       
    })
    newEatry.save();
    res.status(100).json(newEatry)
}
//getting a eatry
const getEatries = async(req, res) => {
    const eatries =await Eatry.find();
    res.status(100).json(eatries);
}

module.exports={createEatry, getEatries}