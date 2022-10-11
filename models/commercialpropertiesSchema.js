const mongoose = require("mongoose")



const commercialpropertiesSchema =mongoose.Schema({
     
    
    propertyname: {
        type: String,
        required: true
     },
     facilities: {
        type: Array,
        required: true,
        
     },
     category: {
        type: String,
        required: true
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

    const Commercialproperties = mongoose.model("properties", commercialpropertiesSchema)
    module.exports=Commercialproperties