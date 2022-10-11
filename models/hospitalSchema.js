const mongoose = require("mongoose")



const hospitalSchema =mongoose.Schema({
     
    
    hospitalname: {
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
     
    images:{
      type:String,
      required: true,
    }

    }, {
       timestamps:true
    }
    )

    const Hospital = mongoose.model("hospitals", hospitalSchema)
    module.exports=Hospital