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

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  jobDescription: { type: String, required: true, trim: true },
  experience: { type: String, required: true, trim: true },
  careerLevel: { type: String, required: true, trim: true },
  employmentType: { type: String, required: true, trim: true },
  salaryRange: { type: String, required: true, trim: true },
  user: {type: String, required: true, trim: true}
});

const jobModel = mongoose.models.job_tbs || mongoose.model("Jobs", jobSchema)

const companyModel =
  mongoose.models.company_tbs || mongoose.model("Company_Data", companySchema);
const userModel = mongoose.models.user_tbs || mongoose.model("Users_Data", userSchema)

module.exports = { userModel, companyModel, jobModel };