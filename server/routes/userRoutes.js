const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/newUser", userController.createUser, async (req, res) => {
    res.send("new user created");
})

module.exports = router;