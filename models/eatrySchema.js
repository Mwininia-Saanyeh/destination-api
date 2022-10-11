const mongoose = require("mongoose")



const eatrySchema =mongoose.Schema({
     
    
    eatryname: {
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
    menu: {
        type:Array,
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
      type:String,
      required: true,
    }

    }, {
       timestamps:true
    }
    )

    const Eatry = mongoose.model("eatries", eatrySchema)
    module.exports=Eatry