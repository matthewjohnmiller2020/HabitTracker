const express = require('express');

const habitController = require('../controllers/habitController.js');

const router = express.Router();

router.post('/getHabits', habitController.getHabits, (req, res) => {
  return res
  .set('Content-Type', 'application/json')
  .status(200).json({username : res.locals.username, habits: res.locals.habits})
});

module.exports = router;