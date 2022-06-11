const express = require('express');

const habitController = require('../controllers/habitController.js');

const router = express.Router();

router.get('/getHabits:username', habitController.getHabits, (req, res) => {
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
  .status(200).json();
})
router.delete('/deleteHabit:habitID', habitController.deleteHabit, (req, res) => {
  return res
  .set('Content-Type', 'application/json')
  .status(200).json();
})
module.exports = router;