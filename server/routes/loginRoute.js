const router = require("express").Router();
const loginController = require("../controllers/loginController");

router.post("/", loginController.verifyUser, (req, res) => {
  return res.status(200).json(res.locals.correctUser);
});

module.exports = router;
