const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mail: { type: String, unique: true },
  username: { type: String },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: Number ,unique:true},
});

module.exports = mongoose.model("user", userSchema);
