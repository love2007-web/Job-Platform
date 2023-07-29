const companyRoute = require("express").Router();
const { register, login } = require("../controllers/companyController");

companyRoute.post("/register", register),
companyRoute.post("/login", login)

module.exports = companyRoute;