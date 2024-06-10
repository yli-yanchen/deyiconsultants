const jwt = require('jsonwebtoken');
const model = require('../models/userModel');
require('dotenv').config();

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
        algorithm: 'HS256',
        expiresIn: '10m',
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
        algorithm: 'HS256',
        expiresIn: '1h',
      }
    );

    res.cookie('accessToken', accessToken);
    res.locals.accessToken = accessToken;

    let newRefreshTokenArray;
    if (req.cookies?.refreshToken) {
      newRefreshTokenArray = [...res.locals.user.refreshToken, refreshToken];

      const foundToken = await model.User.findOne({
        refreshToken: req.cookies.refreshToken,
      }).exec();

      if (!foundToken) {
        console.log('attempted refresh token reuse at login!');
        // clear out ALL previous refresh tokens
        newRefreshTokenArray = [];
        res.clearCookie('refreshToken', {
          httpOnly: true,
          sameSite: 'None',
          secure: true,
        });
      }
    } else {
      newRefreshTokenArray = [refreshToken];
    }

    res.locals.user.refreshToken = newRefreshTokenArray;

    const result = await model.User.findOneAndUpdate(
      { email: res.locals.user.email },
      { refreshToken: newRefreshTokenArray },
      { new: true }
    );
    console.log('>>> check if the refreshToken in the db: ', result);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.locals.refreshToken = refreshToken;
    return next();
  } catch (err) {
    return next(
      'Error in authControllers.generateToken: ' + JSON.stringify(err)
    );
  }
};

authControllers.verifyToken = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    console.log('>>> accessToken from header: ', accessToken);
    if (!accessToken) {
      const notoken = {
        log: 'Express error handler caught authControllers.verifyToken error',
        status: 401,
        message: { err: 'No Token Found' },
      };
      return next(notoken);
    }

    const userid = req.headers.userid;
    const foundUser = await model.User.findById({ _id: userid });
    res.locals.user = foundUser;

    const refreshTokens = foundUser.refreshToken;
    console.log('>>> refreshToken saved in db: ', refreshTokens);

    // if there is token then verify its token
    jwt.verify(
      accessToken,
      process.env.TOKEN_SECRET,
      async (err, decodedAccessToken) => {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            // verify the refresh token, if expire, then reassign.
            console.log('The token is expired.');

            if (!refreshTokens || refreshTokens.length === 0) {
              foundUser.refreshToken = refreshTokens; // Assuming you want to keep it as it is
              await foundUser.save();
              return res.sendStatus(403); // Or handle the error appropriately
            }

            // verify the refreshToken in db
            jwt.verify(
              refreshTokens[refreshTokens.length - 1],
              process.env.REFRESH_TOKEN,
              async (err, decodedRefreshToken) => {
                if (err) {
                  foundUser.refreshToken = refreshTokens;
                  await foundUser.save();
                  return res.sendStatus(403);
                } else {
                  const newAccessToken = jwt.sign(
                    {
                      userid: res.locals.user._id.toString(),
                      email: res.locals.user.email,
                      role: res.locals.user.role,
                    },
                    process.env.TOKEN_SECRET,
                    {
                      algorithm: 'HS256',
                      expiresIn: '10m',
                    }
                  );
                  foundUser.refreshToken = [...refreshTokens, newAccessToken];
                  res.cookie('accessToken', newAccessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'None',
                    maxAge: 24 * 60 * 60 * 1000,
                  });
                }

                return next();
              }
            );
          } else {
            return next(err);
          }
        } else {
          // accessToken is valid, set user information in request body
          res.locals.user = {
            userid: decodedAccessToken.userid,
            email: decodedAccessToken.email,
            role: decodedAccessToken.role,
          };
          return next();
        }
      }
    );
  } catch (err) {
    return next('Error in authControllers.verifyToken: ' + JSON.stringify(err));
  }
};

authControllers.verifyAdmin = async (req, res, next) => {
  console.log('>>> authControllers.verifyAdmin: ', req.body.user);
  if (req.body.user.role !== 'admin') {
    return next('You are not authorized to perform this action');
  } else {
    return next();
  }
};

module.exports = authControllers;
