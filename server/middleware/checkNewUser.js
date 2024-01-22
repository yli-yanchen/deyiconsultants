const model = require("../models/userModel");

duplicateUser = async (req, res, next) => {
  try {
    const foundUser = await model.User.findOne({ email: req.body.email });
    console.log(">>> returned from the user.findone(email): ", foundUser);
    if (foundUser) {
        return res.status(400).send({message: "already be a user, please log in."})
    }
    return next();
  } catch (err) {
    const duplicateUserError = {
      log: "Express error handler caught duplicateUser.duplicateUser in try clock",
      status: 400,
      message: { err: "Error happens when there is duplicat user in db." },
    };
    return next(duplicateUserError);
  }
};

const checkNewUser = { duplicateUser };
module.exports = checkNewUser;
