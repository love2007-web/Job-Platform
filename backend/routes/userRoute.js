const userRoutes = require("express").Router()
const {register} = require("../controllers/userController")

userRoutes.post("/register", register);
// userRoutes.get("/viewUsers", viewUsers);
// userRoutes.post("/login", login)

module.exports = userRoutes