// models/Evaluation.js
const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema({
  submissionId: { type: mongoose.Schema.Types.ObjectId, ref: "Submission", required: true },
  evaluatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // peer reviewer
  feedback: String,
  score: { type: Number, min: 0, max: 10, required: true },
  evaluatedAt: { type: Date, default: Date.now }
});

// Optional: enforce max 5 evaluations per submission at app logic level

module.exports = mongoose.model("Evaluation", EvaluationSchema);
