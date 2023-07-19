const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true},
    lastName: { type: String, required: true, trim: true},
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true, trim: true }
})

let saltRound = 10
userSchema.pre("save", function(next){
    if(this.password != undefined) {
        bcrypt.hash(this.password, saltRound).then((hashed)=>{
            this.password = hashed
            next()
        }).catch((error)=>{
            console.log(error);
        })
    }
})

const userModel = mongoose.models.user_tbs || mongoose.model("Users_Data", userSchema)

module.exports = userModel