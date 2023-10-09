const { Router } = require("express");

// Importting Controllers
const { handleSignUp, handleLogin } = require("../controllers/auth");

// IMPORTING MIDDLEWARES
// signup middleware
const {
  signUpValidationsRules,
  validateSignUp,
} = require("../middlewares/validators/signUpValidator");

// login midleware
const {
  loginValidationsRules,
  validateLogin,
} = require("../middlewares/validators/loginValidator");

const router = Router();

// ROUTE 1 : Create the User (Register the New User)
// API path : /api/auth/signUp
// NO Login required.
router.post("/signUp", signUpValidationsRules(), validateSignUp, handleSignUp);

// ROUTE 2 : User Login
// API path : /api/auth/login
// NO Login Required.
router.post("/login", loginValidationsRules(), validateLogin, handleLogin);

module.exports = router;
