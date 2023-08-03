const { companyModel, jobModel } = require("../models/user.model");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
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
    res.status(500).json({ success: false, message: "Registration failed." });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await companyModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "Company not Found", status: false });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    // const token = generateToken(email)
    if (isMatch) {
      return res
        .status(200)
        .send({ message: `${user.companyName}`, status: true });
    }
    return res.status(401).send({ message: "Invalid Password", status: false });
  } catch (error) {
    console.log(error);
  }
};

const createjob = async (req, res)=>{
  try {
    const {
      jobTitle,
      location,
      category,
      jobDescription,
      experience,
      careerLevel,
      employmentType,
      salaryRange,
      user,
    } = req.body;
    console.log(req.body);

    const newJob = new jobModel({
      jobTitle,
      location,
      category,
      jobDescription,
      experience,
      careerLevel,
      employmentType,
      salaryRange,
      user,
    });

    const result = await newJob.save();
    console.log(result);
    res.status(200).json({
      success: true,
      message: "Job Published successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error Publishing Job" });
  }
}

const fetchjobs = async (req, res)=>{
    try {
      const { email } = req.body
      const jobs = await jobModel.find({user: email})
      res.status(200).send(jobs)
    } catch (error) {
      
    }
}

module.exports = { register, login, createjob, fetchjobs };
