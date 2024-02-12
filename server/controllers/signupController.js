const model = require("../models/userModel");

const signupController = {};

signupController.duplicateUser = async (req, res, next) => {
  try {
    const foundUser = await model.User.findOne({ email: req.body.email });
    console.log(">>> returned from the user.findone(email): ", foundUser);
    if (foundUser) {
      return res
        .status(400)
        .send({ message: "already be a user, please log in." });
    }
    return next();
  } catch (err) {
    const duplicateUserError = {
      log: "Express error handler caught duplicateUser.duplicateUser in try clock",
      status: 401,
      message: { err: "Error happens when there is duplicat user in db." },
    };
    return next(duplicateUserError);
  }
};

signupController.createUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    if (firstName && lastName && email && password) {
      const newUser = new model.User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      const newUserinDB = await model.User.create(newUser);
      res.locals.user = newUserinDB;
      return next();
    }
  } catch (err) {
    const createUserDBError = {
      log: "Express error handler caught userController.createUser error",
      status: 500,
      message: {
        err: "New user cannot be created in the database for some reason",
      },
    };
    return next(createUserDBError);
  }
};

module.exports = signupController;
