const router = require("express").Router();
const userController = require("../controllers/userController");
const checkNewUser = require("../middleware/checkNewUser");

router.post(
  "/newuser",
  checkNewUser.duplicateUser,
  userController.createUser,
  (req, res) => {
    return res.json("new user created!");
  }
);


module.exports = router;