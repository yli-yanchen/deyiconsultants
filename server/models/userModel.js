const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

const SALT_FACTOR = Number(process.env.SALT_FACTOR);
console.log(
  `>>> Checking properties from '.env' file: \n  >>> SALT_FACTOR: ${SALT_FACTOR}`
);


const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", function (next) {
  const user = this;
  console.log(">>> Non-hashed User password: ", user.password);

  bcrypt.hash(user.password, SALT_FACTOR, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    console.log(">>> Hashed user password: ", user.password);
    return next();
  });
});

const User = mongoose.model('User', userSchema);
module.exports = { User };

