const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const signupRoute = require('./routes/signupRoute');
const loginRoute = require('./routes/loginRoute');
const profileRoute = require('./routes/profileRoute');
const authControllers = require('./controllers/authController');

app.use(express.json());
// Store session data on the client within a cookie without requiring database
app.use(
  cookieSession({
    name: 'deyi-consultant',
    keys: ['secretekeyinsession'],
    httpOnly: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: 'deyi-session',
    keys: ['secretekeyinsession'],
    httpOnly: true,
  })
);

const CONNECTION_URL = process.env.MONGOOSE_URL;
const PORT = process.env.SERVE_PORT;

mongoose
  .connect(CONNECTION_URL, { dbName: 'test' })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) =>
    console.log('error from mongoose connection', error.message)
  );

app.use('/api/signup', signupRoute);
app.use('/api/login', loginRoute);
app.use('/api/profile', profileRoute);

app.get('/api/auth', authControllers.verifyToken, (req, res) => {
  res.status(200).json(res.locals.user);
});

app.get('/*', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, 'client', './index.html'));
  // return res.status(200);
});

// catch all route for any unknown routes
app.use('*', (req, res) => {
  res.status(404).send('Page not found');
});

// create error handler to replace default express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
