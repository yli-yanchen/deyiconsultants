const router = require("express").Router();
const signupController = require("../controllers/signupController");
const authControllers = require("../controllers/authController");

router.post(
  "/newuser",
  signupController.duplicateUser,
  signupController.createUser,
  authControllers.generateToken,
  (req, res) => {
    return res.status(200).json({ accessToken: res.locals.accessToken, user: res.locals.user });
  }
);


module.exports = router;