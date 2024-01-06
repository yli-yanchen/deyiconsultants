const User = require("../models/userModel");

const userController = {};

userController.getAllUsers = async (req, res, next) => {
  const users = await User.find();
  return next();

  // User.find({firstName: "Nancy"}, (err, users) => {
  //   console.log("users from user.find: ", users);
  //   if (err)
  //     return next(
  //       "Error in userController.getAllUsers: " + JSON.stringify(err)
  //     );

  //   console.log("users from getAllUsers: ", users);
  //   res.locals.users = users;
  //   return next();
  // })
  // .catch(error => {
  //   console.log("catch error in getAllUsers: ", error);
  // });
};

userController.createUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    if ( firstName && lastName && email && password ) {
      User
      .create({firstName, lastName, email, password})
      .then(next())
      .catch((err) => {
        return next(
            "Error in userController.createUser save new User: " + JSON.stringify(err)
        );
      })
    }
  } catch (err) {
      return next("Error in userController.createUser: " + JSON.stringify(err));
  }
};

module.exports = userController;