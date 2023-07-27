const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  selectedSkills: { type: [String], default: [] },
  registrationDate: {type: Date, default:Date.now()}
});

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

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true, trim: true },
  companyEmail: { type: String, unique: true, required: true, trim: true },
  companyNumber: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  registrationDate: { type: Date, default: Date.now() },
});

companySchema.pre("save", function (next) {
  if (this.password != undefined) {
    bcrypt
      .hash(this.password, saltRound)
      .then((hashed) => {
        this.password = hashed;
        next();
      })
      .catch((error) => {
        console.log(error);
      });
  }
});


const userModel = mongoose.models.user_tbs || mongoose.model("Users_Data", userSchema)
const companyModel = mongoose.models.company_tbs || mongoose.model("Company_Data", companySchema)

module.exports = {userModel, companyModel}