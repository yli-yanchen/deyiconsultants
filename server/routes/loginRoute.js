const router = require("express").Router();
const loginController = require("../controllers/loginController");
const authControllers = require("../controllers/authController");

router.post(
  "/",
  loginController.verifyUser,
  authControllers.generateToken,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

module.exports = router;
