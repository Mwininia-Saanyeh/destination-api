const Hospital = require('../models/hospitalSchema');
const myschoolSchema = require('../models/hospitalSchema')

const createHospital = (req,res) => {
    const newHospital = new Hospital({
        hospitalname:req.body.hospitallname,
        category: req.body.category,
        facilities: req.body.facilities,
        location: req.body.location,
        services:req.body.serivices,
        address: req.body.address,
        contact: req.body.contact,
        images: req.body.images
       
    })
    newHospital.save();
    res.status(100).json(newHospital)
}
//getting a hospital
const getHospitals = async(req, res) => {
    const hospitals =await Hospital.find();
    res.status(100).json(hospitals);
}

module.exports={createHospital, getHospitals}