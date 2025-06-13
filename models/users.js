const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: { type: String, enum: ["student", "teacher", "admin"] },
  password: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
