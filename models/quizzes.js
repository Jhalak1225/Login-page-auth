// models/Quiz.js
const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // teacher ID
  createdAt: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true }
});

module.exports = mongoose.model("Quiz", QuizSchema);
