const userRoutes = require("express").Router()
const {register, login, setup, getjobs,} = require("../controllers/userController")

userRoutes.post("/register", register);
// userRoutes.get("/viewUsers", viewUsers);
userRoutes.post("/login", login);
userRoutes.post("/setup", setup);
userRoutes.post("/getjobs", getjobs)


module.exports = userRoutes