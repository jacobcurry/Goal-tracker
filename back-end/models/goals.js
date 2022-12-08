const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  goal: { type: String, required: true },
  isComplete: { type: Boolean, required: true },
  timeframe: { type: String, default: "daily" },
});

module.exports = mongoose.model("Goal", goalSchema);
