const myschoolSchema = require('../models/schoolSchema')

const createMyschool = (req,res) => {
    const newMyschool = new Myschool({
        schoolname:req.body.schoolname,
        category: req.body.category,
        facilities: req.body.facilities,
        location: req.body.location,
        address: req.body.address,
        contact: req.body.contact,
        images: req.body.images
       
    })
    newMyschool.save();
    res.status(100).json(newMyschool)
}
//getting a school
const getMyschools = async(req, res) => {
    const myschools =await Myschool.find();
    res.status(100).json(myschools);
}

module.exports={createMyschool, getMyschools}