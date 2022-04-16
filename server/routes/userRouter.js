const express = require('express');

const userController = require('../controllers/userController.js');

const router = express.Router();

router.post('/signup', userController.signup, (req, res) => {
  return res
  .set('Content-Type', 'application/json')
  .status(200).json({username : res.locals.username, password : res.locals.password})
});

router.post('/login', userController.login, (re, res)=> {
  return res
  .set ('Content-Type', 'application/json')
  .status(200).json({username : res.locals.username, password : res.locals.password})
})

module.exports = router;