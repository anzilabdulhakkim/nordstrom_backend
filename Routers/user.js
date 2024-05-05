const { Router } = require("express");
const getUsers = require("../Controllers/Users/getUsers");
const registerUser = require("../Controllers/Users/registerUser");
const loginUser = require("../Controllers/Users/loginUser");

const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.post("/login", loginUser);
userRoutes.post("/register", registerUser);

module.exports = userRoutes;
