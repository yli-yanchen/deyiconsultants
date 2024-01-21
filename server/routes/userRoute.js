const router = require("express").Router();
const path = require("path");
const userController = require("../controllers/userController");

router.post(
  "/validation",
  userController.createUser,
  (req, res) => {
    return res.json("new user created!");
  }
);


module.exports = router;