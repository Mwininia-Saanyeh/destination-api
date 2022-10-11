const Commercialproperties = require('../models/commercialpropertiesSchema')

const createCommercialproperty = (req,res) => {
    const newCommercialproperty = new CommercialEntity({
        propertyname:req.body.propertyname,
        category: req.body.category,
        facilities: req.body.facilities,
        location: req.body.location,
        services: req.body.services,
        address: req.body.address,
        contact: req.body.contact,
        images: req.body.images
       
    })
    newCommercialproperty.save();
    res.status(100).json(newCommercialproperty)
}
//getting a commercialproperty
const getCommercialproperties = async(req, res) => {
    const commercialproperties =await Commercialproperty.find();
    res.status(100).json(commercialproperties);
}

module.exports={createCommercialproperty, getCommercialproperties}