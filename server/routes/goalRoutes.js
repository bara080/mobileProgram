// server/routes/goalRoutes.js

const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goalController');

router.get('/goals', goalController.getGoals);
router.post('/goals', goalController.addGoal);
router.delete('/goals/:key', goalController.deleteGoal);

module.exports = router;
