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

    // res.set("Authorization", `Bearer ${accessToken}`);
    // res.set(
    //   "Set-Cookie",
    //   `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=None; Max-Age=604800`
    // );
    console.log("res accessToken before before: ");
    res.cookie("accessToken", accessToken);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    console.log("res accessToken before: ");
    res.locals.accessToken = accessToken;
    res.locals.refreshToken = refreshToken;
    return next();

  } catch (err) {
    return next(
      "Error in authControllers.generateToken: " + JSON.stringify(err)
    );
  }
};

authControllers.verifyToken = (req, res, next) => {
  try {
    console.log("res accessToken: ");
    // console.log("This is before accessToken: ", req.cookies["accessToken"]);
    // console.log("This is before refreshToken: ", req.cookies["refreshToken"]);
    console.log(">>> res.locals.accessToken: ", res.locals.accessToken);
    console.log(">>> res.locals.refreshToken: ", res.locals.refreshToken);

    const accessToken = res.locals.accessToken || req.cookies["accessToken"];
    const refreshToken = res.locals.refreshToken || req.cookies["refreshToken"];
    // console.log("This is cookie: ", req.cookie)
    // console.log(">>> request.headers: ", req.headers);
    // const accessToken = req.headers.authorization
    //   ? req.headers.authorization.split(" ")[1]
    //   : req.cookies.accessToken;
    // console.log("This is after accessToken");
    // console.log(">>> accessToken: ", accessToken);

    // const refreshToken =
    //   req.headers["refresh-token"] || req.cookies.refreshToken;
    // console.log(">>> refreshToken: ", refreshToken);
    // if there is no tolen for current user
    if (!accessToken && !refreshToken) {
      const notoken = {
        log: "Express error handler caught authControllers.verifyToken error",
        status: 401,
        message: { err: "No Token Found" },
      };
      return next(notoken);
    }

    // if there is token then verify its token
    jwt.verify(
      accessToken,
      process.env.TOKEN_SECRET,
      async (err, decodedAccessToken) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            // verify the refresh token, if expire, then reassign.

            if (!refreshToken)
              return res.status(401).json({ message: "Unauthorized" });
            else {
              jwt.verify(
                refreshToken,
                process.env.TOKEN_SECRET,
                async (err, decodedRefreshToken) => {
                  if (err) {
                    return res.status(401).json({ message: "Unauthorized" });
                  } else {
                    const newAccessToken = jwt.sign(
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
                    res.header("Authorization", `Bearer ${newAccessToken}`);
                    req.user = {
                      userid: decodedRefreshToken.userid,
                      email: decodedRefreshToken.email,
                      role: decodedRefreshToken.role,
                    };
                    return next();
                  }
                }
              );
            }
          } else {
            return next(
              "Error in authControllers.verifyToken jwt.verify: " +
                JSON.stringify(err)
            );
          }
        } else {
          // accessToken is valid, set user information in request body
          req.user = {
            userid: decodedAccessToken.userid,
            email: decodedAccessToken.email,
            role: decodedAccessToken.role,
          };
          return next();
        }
      }
    );
  } catch (err) {
    return next("Error in authControllers.verifyToken: " + JSON.stringify(err));
  }
};

module.exports = authControllers;
