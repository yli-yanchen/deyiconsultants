const model = require("../models/userModel");
const profileController = {};

profileController.getuser = async (req, res, next) => {
  try {
    const userid = req.headers.authorization.replace("Bearer ", "");
    if (!userid) {
      const noneUserid = {
        log: "Express error handler caught profileController.getuser error - userid",
        status: 501,
        message: {
          err: "Userid in local storage is none.",
        },
      };
      return next(noneUserid);
    }

    const currentUser = await model.User.findById({ _id: userid });
    if (!currentUser) {
      const missedUser = {
        log: "Express error handler caught profileController.getuser error - missedUser",
        status: 501,
        message: {
          err: "Cannot get user from db.",
        },
      };
      return next(missedUser);
    }
    res.locals.user = currentUser;
    return next();
  } catch (err) {
    const cannotGetCurrentUser = {
      log: "Express error handler caught profileController.getuser error - cannotGetCurrentUser",
      status: 501,
      message: {
        err: "Cannot get user from the database for some reason",
      },
    };
    return next(cannotGetCurrentUser);
  }
};

module.exports = profileController;
