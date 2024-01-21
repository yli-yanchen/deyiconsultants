const User = require("../models/userModel");

const userController = {};

userController.createUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    if (firstName && lastName && email && password) {
        const newUser = new User({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
        console.log(">>> new User saved to database: ", newUser);
        const newUserinDB = await User.create(newUser);
        console.log(">>> new User saved to database: ", newUserinDB);
        return next();
    } else {
        const createUserError = {
          log: "Express error handler caught userController.createUser in try clock",
          status: 400,
          message: { err: "Missing Required Fields" },
        };
        return next(createUserError);
    }
  } catch (err) {
        const createUserDBError = {
          log: "Express error handler caught userController.createUser error",
          status: 400,
          message: { err: "New user cannot be created in the database for some reason" },
        };
        return next(createUserDBError);
  }
};



module.exports = userController;