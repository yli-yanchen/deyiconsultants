const router = require("express").Router();
const path = require("path");
const userController = require("../controllers/userController");

router.post("/newUser", userController.createUser, async (req, res) => {
    res.send("new user created");
})

router.get("/", async (req, res) => {
    res.send("this is sign in page");
});

module.exports = router;