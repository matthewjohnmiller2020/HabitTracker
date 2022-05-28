const express = require('express');

const habitController = require('../controllers/habitController.js');

const router = express.Router();

router.post('/getHabits', habitController.getHabits, (req, res) => {
  return res
  .set('Content-Type', 'application/json')
  .status(200).json({habits: res.locals.habits})
});
router.post('/getOneHabit', habitController.getOneHabit, (req, res) => {
  return res
  .set('Content-Type', 'application/json')
  .status(200).json({habitData: res.locals.habitData})
});
router.post('/createHabit', habitController.createHabit, (req, res) => {
  return res
  .set('Content-Type', 'application/json')
  .status(200)
})
module.exports = router;