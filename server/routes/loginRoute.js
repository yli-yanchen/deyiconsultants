const router = require("express").Router();
const loginController = require("../controllers/loginController");
const authControllers = require("../controllers/authController");

router.post(
  "/",
  loginController.verifyUser,
  authControllers.generateToken,
  (req, res) => {
    return res.status(200).json({ accessToken: res.locals.accessToken, user: res.locals.user });
  }
);

router.post("/logout", loginController.handleLogout, (req, res) => {
  return res.sendStatus(204);
});
module.exports = router;
