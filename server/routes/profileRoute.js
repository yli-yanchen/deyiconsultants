const router = require("express").Router();
const authControllers = require("../controllers/authController");

router.post(
  "/",
  authControllers.generateToken,
  authControllers.verifyToken,
  (req, res) => {
    return res.status(200).json(res.locals.correctUser);
  }
);

module.exports = router;
