const {companyModel} = require("../models/user.model");
const bcrypt = require("bcryptjs");

const register = async (req, res)=>{
     try {
       let { companyName, companyEmail, companyNumber, password } = req.body;
       const newCompany = new companyModel({
         companyName,
         companyEmail,
         companyNumber,
         password,
       });

       const result = await newCompany.save();
       console.log(result);
       res.status(200).json({
         success: true,
         message: "Company registered successfully!",
       });
     } catch (error) {
       console.log(error);
       res
         .status(500)
         .json({ success: false, message: "Registration failed." });
     }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await companyModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not Found", status: false });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    // const token = generateToken(email)
    if (isMatch) {
      return res
        .status(200)
        .send({ message: `Welcome, ${user.companyName}`, status: true });
    }
    return res.status(401).send({ message: "Invalid Password", status: false });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {register, login}