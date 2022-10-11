const mongoose = require("mongoose")



const MyschoolSchema =mongoose.Schema({
     
    
    schoolname: {
        type: String,
        required: true
     },
     category: {
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

    const Myschool = mongoose.model("myschools", MyschoolSchema)
    module.exports=Myschool