const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')
const schoolRoute= require('./routes/schoolRoute')
const hotelRoute= require('./routes/hotelRoute')
const hospitalRoute= require('./routes/hospitalRoute')
const eatryRoute= require('./routes/eatryRoute')
const userRoute =require("./routes/userRoute")
const commercialpropertiesRoute= require('./routes/commercialpropertiesRoute')
const morgan = require('morgan')

const app = express();
dotenv.config();
connectDB();

//middlewares
app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/myschool", schoolRoute)
app.use("/api/hotel", hotelRoute)
app.use("/api/hospital", hospitalRoute)
app.use("/api/eatry", eatryRoute)
app.use("/api/commercialproperties", commercialpropertiesRoute)
app.use(morgan("dev"))



app.get("/", (req, res) => {
    res.send("welcome to our destination portal")
})


const PORT = process.env.PORT || 7000

app.listen(PORT,() =>
       console.log(`server is running on ${PORT}`)
       )
