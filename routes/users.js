const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");
const getUserByMiddleware = require("../functions/userFunctions/getUserByMiddleware");
const getUserByEmail = require("../functions/userFunctions/getUserByEmail");
const getUserById = require("../functions/userFunctions/getUserById");
const registerUser = require("../functions/userFunctions/registerUser");
const loginUser = require("../functions/userFunctions/loginUser");

const {
  registerUserValidator,
  loginUserValidator,
  checkActualPasswordValidator,
  
} = require("../middleware/express-validator/expressValidator");


router.get("/", authentication, getUserByMiddleware);

router.get("/get_user_by_email/:user_email", getUserByEmail);



router.get("/get_user_by_id/:user_id", getUserById);

router.post("/register", registerUserValidator, registerUser);

router.post("/login", loginUserValidator, loginUser);





module.exports = router;
