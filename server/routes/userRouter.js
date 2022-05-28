const express = require('express');

const userController = require('../controllers/userController.js');

const router = express.Router();

router.post('/signup', userController.signup, (req, res) => {
  return res
  .set('Content-Type', 'application/json')
  .status(200).json({username : res.locals.username})
});

router.post('/login', userController.login, (req, res)=> {
  return res
  .set ('Content-Type', 'application/json')
  .status(200).json({username : res.locals.username})
})

module.exports = router;