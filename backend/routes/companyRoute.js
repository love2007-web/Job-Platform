const companyRoute = require("express").Router();
const { register, login, createjob } = require("../controllers/companyController");

companyRoute.post("/register", register),
companyRoute.post("/login", login)
companyRoute.post("/createjob", createjob)

module.exports = companyRoute;