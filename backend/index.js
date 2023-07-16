const express = require('express');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose")

const uri = "mongodb+srv://Blaze001:%40Love2006@cluster0.twkcu8h.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri)
.then(()=>{
    console.log("Mongodb connected successfully");
}).catch((err)=>{
    console.log(err);
    console.log('Mongodb dinnor conntect ooo');
})
const port = 5000
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})