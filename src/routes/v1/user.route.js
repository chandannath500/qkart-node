const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const auth = require("../../middlewares/auth");

const router = express.Router();

const passport = require("passport");
const authenticate = passport.authenticate("jwt", { session: false });


// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement a route definition for `/v1/users/:userId`


router.post('/create', validate(userValidation.createUser), userController.createNewUser);

//router.get('/all', userController.getAllUsers)

 router.get('/:userId',auth,validate(userValidation.getUser), userController.getUser)



router.put(
  "/:userId",
  auth,
  validate(userValidation.setAddress),
  userController.setAddress
);

module.exports = router;
