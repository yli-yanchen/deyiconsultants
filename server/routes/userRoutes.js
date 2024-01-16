const router = require("express").Router();
const path = require("path");
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers, (req, res) => {
  return res.json("this is sign in page");
});

router.post("/register", userController.createUser, (req, res) => {
  res.json( req.body );
  // res.redirect('/about');
});

module.exports = router;