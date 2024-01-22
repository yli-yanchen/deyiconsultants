const router = require("express").Router();
const signupController = require("../controllers/signupController");
const checkNewUser = require("../middleware/checkNewUser");

router.post(
  "/newuser",
  checkNewUser.duplicateUser,
  signupController.createUser,
  (req, res) => {
    return res.status(200).json(res.locals.userid);
  }
);


module.exports = router;