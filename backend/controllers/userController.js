const register = async (req, res)=>{
    try {
        // const { firstName, lastName, email, password } = req.body;
        console.log(req.body);
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