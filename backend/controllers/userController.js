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
            return res.status(200).send({ message: `Welcome, ${user.firstName}`, status: true, })
        }
        return res.status(401).send({ message: "Invalid Password", status: false })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {register, login}