const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const secreat = process.env.JWT_SECRET || "Yadav123"
// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
  },
  email: {
    type: String,
    required: [true, "please enter email"],
    unique: true,
    validate: [validator.isEmail, "please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minLength: [3, "password should be greater than 3 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.methods.getjwtToken = function () {
  return jwt.sign({ id: this._id }, secreat, {
    // expiresIn: process.env.JWT_SECRET,
  });
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Create the User model
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;