const mongoose = require("mongoose")



const hotelSchema =mongoose.Schema({
     
    
    hotelname: {
        type: String,
        required: true
     },
     facilities: {
        type: Array,
        required: true,
        
     },
    location: {
        type: String,
        required: true
     },
      services: {
        type: String,
        required: true
     },
     address: {
        gps: String,
        box: String,
     },
     contact: {
        phone: String,
        email: String,
    },
    images:{
      type: String,
      required: true,
    }

    }, {
       timestamps:true
    }
    )

    const Hotel = mongoose.model("hotels", hotelSchema)
    module.exports=Hotel