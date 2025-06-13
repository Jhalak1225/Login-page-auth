// models/Submission.js
const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true }, // could be text, JSON, URL etc.
  submittedAt: { type: Date, default: Date.now },
  isEvaluated: { type: Boolean, default: false }
});

module.exports = mongoose.model("Submission", SubmissionSchema);
