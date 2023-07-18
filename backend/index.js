const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require("./routes/userRoute")

dotenv.config()
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }))
app.use("/users", userRoutes)


const port = process.env.PORT
const uri = process.env.URI

mongoose.connect(uri)
.then(()=>{
    console.log("Mongodb connected successfully");
}).catch((error)=>{
    console.log(error);
})

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})