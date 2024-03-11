const router = require("express").Router();
const profileController = require("../controllers/profileController");
const authControllers = require("../controllers/authController");

router.get("/getuser", profileController.getuser, (req, res) => {
  res.status(200).json(res.locals.user);
});

module.exports = router;
