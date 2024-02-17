const bcrypt = require("bcryptjs");
const model = require("../models/userModel");

const loginController = {};

loginController.verifyUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // handle missing fields
    if (!email || !password) {
      const missingFieldError = {
        log: "Express error handler caught loginController.verifyUser error",
        status: 401,
        message: {
          err: "cannot login since missing fields",
        },
      };
      return next(missingFieldError);
    }

    // found user in db
    const foundUser = await model.User.findOne({ email: email });
    if (foundUser) {
      console.log(">>> found the user in the db.");
    } else {
      const toSignupError = {
        log: "loginController.verifyUser error: cannot found user in db",
        status: 402,
        message: {
          err: "user not in the db, please go to signup",
        },
      };
      return next(toSignupError);
    }

    // compare the bcrpt
    const validPassword = await bcrypt.compare(password, foundUser.password);
    if (validPassword) {
      res.locals.user = foundUser;
      return next();
    } else {
      console.log(">>> wrong password");
      return res.status(401).json({ error: "Incorrect Password" });
    }
  } catch (err) {
    const verifyUserDBError = {
      log: "Express error handler caught loginController.verifyUser error",
      status: 400,
      message: {
        err: "cannot login through loginController.verifyUser for some reason",
      },
    };
    return next(verifyUserDBError);
  }
};

module.exports = loginController;
