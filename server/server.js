const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const signupRoute = require("./routes/signupRoute");
const loginRoute = require("./routes/loginRoute");
const profileRoute = require("./routes/profileRoute");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../build")));
app.use(cors());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow the specified HTTP methods
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   ); // Allow the specified headers
//   next();
// });

app.use(
  cookieSession({
    name: "deyi-session",
    keys: ["secretekeyinsession"],
    httpOnly: true,
  })
);

const CONNECTION_URL = process.env.MONGOOSE_URL;
const PORT = process.env.SERVE_PORT;

mongoose
  .connect(CONNECTION_URL, { dbName: "test" })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log("error from mongoose connection", error.message));


app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/profile", profileRoute);


app.get("/*", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "client", "./index.html"));
  // return res.status(200);
});


// catch all route for any unknown routes
app.use("*", (req, res) => {
  res.status(404).send("Page not found");
});

// create error handler to replace default express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
