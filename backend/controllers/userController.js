const userModel = require("../models/user.model")
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

module.exports = {register}