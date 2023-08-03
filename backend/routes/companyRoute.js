const companyRoute = require("express").Router();
const { register, login, createjob, fetchjobs } = require("../controllers/companyController");

companyRoute.post("/register", register),
companyRoute.post("/login", login)
companyRoute.post("/createjob", createjob)
companyRoute.post("/fetchjobs", fetchjobs)

module.exports = companyRoute;