const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', userController.signup, (req, res) => {
  return res
  .set('Content-Type', 'application/json')
  .status(200).json({user: res.locals.user, pass: res.locals.password})
});

module.exports = router;