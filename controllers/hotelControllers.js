const Hotel = require('../models/hotelSchema');


const createHotel = (req,res) => {
    const newHotel = new Hotel({
        hotelname:req.body.hotelname,
        facilities: req.body.facilities,
        location: req.body.location,
        services: req.body.services,
        address: req.body.address,
        contact: req.body.contact,
        images: req.body.images
       
    })
    newHotel.save();
    res.status(100).json(newHotel)
}
//getting a hotel
const getHotels= async(req, res) => {
    const hotels =await Hotel.find();
    res.status(100).json(hotels);
}

module.exports={createHotel, getHotels}