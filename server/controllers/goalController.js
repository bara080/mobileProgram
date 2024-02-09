// server/controllers/goalController.js

const Goal = require('../models/GoalModel');

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addGoal = async (req, res) => {
  const { text, key } = req.body;
  try {
    const newGoal = new Goal({ text, key });
    await newGoal.save();
    res.json(newGoal);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteGoal = async (req, res) => {
  const key = req.params.key;
  try {
    await Goal.deleteOne({ key });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
