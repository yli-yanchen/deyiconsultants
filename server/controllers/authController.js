const jwt = require("jsonwebtoken");
const model = require("../models/userModel");
require("dotenv").config();

const authControllers = {};

authControllers.generateToken = (req, res, next) => {
  try {
    const token = jwt.sign(
      {
        userid: res.locals.user._id.toString(),
        email: res.locals.user.email,
        role: res.locals.user.role,
      },
      process.env.TOKEN_SECRET,
      {
        algorithm: "HS256",
        allowInsecureKeySizes: true,
        expiresIn: "5s",
        // 86400,
      }
    );
    req.session.token = token;
    res.cookie("token", token);
    return next();
  } catch (err) {
    return next(
      "Error in authControllers.generateToken: " + JSON.stringify(err)
    );
  }
};

authControllers.verifyToken = (req, res, next) => {
  try {
    let token = req.session.token;
    console.log(">>> token in authControllers.verifyToken: ", token);

    // if there is no tolen for current user
    if (!token) {
      const notoken = {
        log: "Express error handler caught authControllers.verifyToken error",
        status: 400,
        message: { err: "No Token Found" },
      };
      return next(notoken);
    }

    // if there is token then verify its token
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.redirect("/login");
        } else {
          return next(
            "Error in authControllers.verifyToken jwt.verify: " +
              JSON.stringify(err)
          );
        }
      }

      console.log("decoded content in jwt.verify: ", decoded);

      const currentUser = await model.User.findOne({ email: decoded.email });
      if (currentUser) {
        res.locals.user = currentUser;
        res.locals.user.accessToken = token;
        console.log(">>> current user: ", res.locals.user);
      } else {
        return next("User not found in the db.");
      }

      req.userID = decoded.id;
      return next();
    });
  } catch (err) {
    return next("Error in authControllers.verifyToken: " + JSON.stringify(err));
  }
};

authControllers.refreshToken = (req, res, next) => {
  try {
    const refreshToken = req.body.token;
    if (!refreshToken) {
      return res.status(401).send({ message: "You are not authenticated." });
    }
  } catch (err) {
    return next("Error in authControllers.verifyToken: " + JSON.stringify(err));
  }
};

module.exports = authControllers;
