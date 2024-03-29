// server/models/GoalModel.js

const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
