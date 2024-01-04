

const userController = {};

userController.createUser = (req, res, next) => {
  const newUser = new User({
    firstName: req.body.username,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  console.log(newUser);
  try {
    if (
      newUser.firstName &&
      newUser.lastName &&
      newUser.username &&
      newUser.password
    ) {
      newUser
        .save()
        .then((res.locals.ssid = newUser._id))
        .then(next())
        .catch((err) => {
          return next(
            "Error in userController.createUser: " + JSON.stringify(err)
          );
        });
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    return next("Error in userController.createUser: " + JSON.stringify(err));
  }
};

module.exports = userController;