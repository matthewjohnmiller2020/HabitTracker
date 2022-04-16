const db = require('../dataModel.js');
const userController = {};

userController.signup = async (req, res, next) => {
  const {username, password} = req.body;

  //Ensure that user and password field are both not blank
  if(!username || !password) {
    res.locals.message = 'One or more of the fields was blank. Please try again.'
    return res.status(400).json({username: '', password: '', message: res.locals.message})
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
    return res.status(400).json({username: '', password: '', message: res.locals.message})
  }

  const querySuccessString =  `
  INSERT INTO users (username, password)
  VALUES ($1, $2)
  RETURNING username, password`;

  const values = [username, password];

  const userCreated = await db.query(querySuccessString, values);

  res.locals.username = userCreated.rows[0].username;
  res.locals.password = userCreated.rows[0].password;

  next();
}

userController.login = async(req, res, next) => {
  const{username, password} = req.body;
  //Ensure that user and password field are both not blank
  if(!username || !password) {
    res.locals.message = 'One or more of the fields was blank. Please try again.'
    return res.status(400).json({username: '', password: '', message: res.locals.message})
  }

  const queryString = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`

  const foundUser = await db.query(queryString);

  //If no results are returned, throw incorrect entry error
  if (!foundUser.rows.length) {
    res.locals.errorMessage = 'Your username or password was entered incorrectly. Please try again.';
    return res.status(400).json({username: '', password: '', errorMessage: res.locals.errorMessage})
  }

  res.locals.username = username;
  res.locals.password = password;
  next();
}

module.exports = userController;