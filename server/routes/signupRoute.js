const router = require("express").Router();
const signupController = require("../controllers/signupController");
const authControllers = require("../controllers/authController");

router.post(
  "/newuser",
  signupController.duplicateUser,
  signupController.createUser,
  authControllers.generateToken,
  // authControllers.verifyToken,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);


module.exports = router;