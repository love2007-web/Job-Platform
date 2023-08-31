const {userModel} = require("../models/user.model");
const {jobModel} = require("../models/user.model");
const bcrypt = require("bcryptjs")

const register = async (req, res)=>{
    try {
        let { firstName, lastName, email, password } = req.body
        const newUser = new userModel({
            firstName,
            lastName,
            email,
            password
        })

        const result = await newUser.save()
        console.log(result)
        res.status(200).json({
            success: true,
            message: "User registered successfully!",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Registration failed." });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({ message: "User not Found", status: false })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        // const token = generateToken(email)
        if (isMatch) {
            return res.status(200).send({user})
        }
        return res.status(401).send({ message: "Invalid Password", status: false })
    } catch (error) {
        console.log(error);
    }
}

const setup = async (req, res) => {
    try {
        const { selectedSkills, email } = req.body;

        // Update the user's selectedSkills field based on their email
        const updatedUser = await userModel.findOneAndUpdate(
            { email }, // Search criteria: Find the user by email
            { selectedSkills }, // Fields to update: Update the selectedSkills field
            { new: true } // Option to return the updated user in the result
        );
        if (updatedUser) {
            console.log('Updated user:', updatedUser);
            res.status(200).json({ message: 'Selected skills updated successfully' });
        } else {
            console.log('User not found');
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating selected skills:', error);
        res.status(500).json({ message: 'Error updating selected skills' });
    }
};

const getskills = async (req, res)=>{
    try {
        

    } catch (error) {
        
    } 
}

const getjobs = (req, res)=>{
    const {skills} = req.body
    console.log(skills);
}


module.exports = {register, login, setup, getjobs}