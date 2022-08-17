const express = require("express");
const { Register, login } = require("../controlles/user");
const { isAuth } = require("../Middlewaer/isAuth");
const {
  Validationlogin,
  Validationregister,
  Validation,
} = require("../Middlewaer/validation");
const user = require("../models/user");
const userRoutes = express.Router();

userRoutes.post("/register", Validationregister, Validation, Register);
userRoutes.post("/login", Validationlogin, Validation, login);
userRoutes.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});

module.exports = userRoutes;
