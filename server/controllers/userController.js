const db = require('../dataModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userController = {};

userController.signup = async (req, res, next) => {
  const {username, password} = req.body;

  //Ensure that user and password field are both not blank
  if(!username || !password) {
    res.locals.message = 'One or more of the fields was blank. Please try again.'
    return res.status(400).json({ message: res.locals.message})
  }

  //Check to see if a user with the requested name already exists
  const queryTestString = `
    SELECT * FROM users
    WHERE username = '${username}'
  `;
  const foundUser = await db.query(queryTestString);

  //If user already exists, throw error
  if(foundUser.rows.length) {
    res.locals.message = 'An account with this username already exists. Please try again.'
    return res.status(400).json({message: res.locals.message})
  }
  try{ 
  const hashPassword = bcrypt.hashSync(password, 10); 
  const querySuccessString =  ` 
  INSERT INTO users (username, password)
  VALUES ($1, $2)
  RETURNING username, password`;

  const values = [username, hashPassword];

  const userCreated = await db.query(querySuccessString, values);
  res.locals.username = userCreated.rows[0].username;

  const token = jwt.sign({user : res.locals.username}, "mmmsecret", {expiresIn: 15});

  res.cookie('token', token, {
    httpOnly: true
  })
  next();
  } catch(err) {
    console.log(err);
    next({
      message: err
    })
  }
}

userController.login = async(req, res, next) => {
  const{username, password} = req.body;
  //Ensure that user and password field are both not blank
  if(!username || !password) {
    res.locals.message = 'One or more of the fields was blank. Please try again.'
    return res.status(400).json({message: res.locals.message})
  }
  try{
    const queryString = `SELECT * FROM users WHERE username = '${username}'`

    const foundUser = await db.query(queryString);
  
    //If no results are returned, throw incorrect entry error
    if (!foundUser.rows.length) {
      res.locals.message = 'Your username or password was entered incorrectly. Please try again.';
      return res.status(400).json({message: res.locals.message})
    }

    const compare = bcrypt.compareSync(password, foundUser.rows[0].password)
    if(!compare){
      res.locals.message = 'Your username or password was entered incorrectly. Please try again.';
      return res.status(400).json({message: res.locals.message})
    } 

    const token = jwt.sign({user : foundUser.rows[0].username}, "mmmsecret", {expiresIn: 15000});

    res.cookie('token', token, {
      httpOnly: true
    })
    res.locals.username = username;
    next();
  }
  catch(err) {
    console.log(err);
    next({
      log: err
    })
  }
}

module.exports = userController;