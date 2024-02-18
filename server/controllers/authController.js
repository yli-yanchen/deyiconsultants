const jwt = require("jsonwebtoken");
const model = require("../models/userModel");
require("dotenv").config();

const authControllers = {};

authControllers.generateToken = async (req, res, next) => {
  try {
    const accessToken = jwt.sign(
      {
        userid: res.locals.user._id.toString(),
        email: res.locals.user.email,
        role: res.locals.user.role,
      },
      process.env.TOKEN_SECRET,
      {
        algorithm: "HS256",
        expiresIn: "5s",
      }
    );

    const refreshToken = jwt.sign(
      {
        userid: res.locals.user._id.toString(),
        email: res.locals.user.email,
        role: res.locals.user.role,
      },
      process.env.REFRESH_TOKEN,
      {
        algorithm: "HS256",
        expiresIn: "1d",
      }
    );

    res.cookie("accessToken", accessToken, { maxAge: 60000 });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    console.log(">>> before updated user in db.");

    const updateUserwithAccessToken = await model.User.findOneAndUpdate(
      { email: res.locals.user.email },
      {
        $set: {
          accessToken: accessToken.toString(),
          refreshToken: refreshToken.toString(),
        },
      },
      { new: true }
    );
    console.log(">>> res.locals.user after update user accesstion: ", updateUserwithAccessToken);
    res.locals.user = updateUserwithAccessToken;

    return next();
  } catch (err) {
    return next(
      "Error in authControllers.generateToken: " + JSON.stringify(err)
    );
  }
};

authControllers.verifyToken = (req, res, next) => {
  try {
    console.log(
      ">>> token in authControllers.verifyToken.",
      req.cookies.accessToken
    );
    let accessToken = req.cookies.accessToken;

    // if there is no tolen for current user
    if (!accessToken) {
      const notoken = {
        log: "Express error handler caught authControllers.verifyToken error",
        status: 401,
        message: { err: "No Token Found" },
      };
      return next(notoken);
    }

    // if there is token then verify its token
    jwt.verify(accessToken, process.env.TOKEN_SECRET, async (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          res.clearCookie("accessToken");
          return res.redirect("/login");
        } else {
          return next(
            "Error in authControllers.verifyToken jwt.verify: " +
              JSON.stringify(err)
          );
        }
      }

      console.log("decoded content in jwt.verify: ", decoded);

      // verify the refresh token, if expire, then reassign.
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken)
        return res.status(401).json({ message: "Unauthorized" });
      else {
        jwt.sign(
          {
            userid: res.locals.user._id.toString(),
            email: res.locals.user.email,
            role: res.locals.user.role,
          },
          process.env.REFRESH_TOKEN,
          {
            algorithm: "HS256",
            expiresIn: "1d",
          }
        );
      }

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      req.userID = decoded.id;
      return next();
    });
  } catch (err) {
    return next("Error in authControllers.verifyToken: " + JSON.stringify(err));
  }
};

module.exports = authControllers;
