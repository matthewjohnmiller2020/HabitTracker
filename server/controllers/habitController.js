const db = require('../dataModel.js');
const habitController = {};

habitController.getHabits = async(req, res, next) => {
  const {username} = req.body;
  //replace username with userid

  if(!username){
    res.locals.message = 'Username field is empty';
    return res.status(400).json({message: res.locals.message});
  }

  const sql = `WITH ids as (SELECT userid from Users WHERE username = '${username}')
  SELECT habitid, habitname, moneyspent from Habits
  INNER JOIN ids ON Habits.userid = ids.userid`;

  const foundHabits = await db.query(sql);

  if (!foundHabits.rows.length) {
    res.locals.errorMessage = 'No habits were found for this user. Please try again.';
    return res.status(400).json({message: res.locals.message})
  }
  res.locals.habits = foundHabits.rows;
  next();
}

habitController.getOneHabit = async(req, res, next) => {
  const {habitID} = req.body;
  const sql = `SELECT * FROM Habits WHERE habitid = '${habitID}'`;
  const foundHabit = await db.query(sql);
  if (!foundHabit.rows.length) {
    res.locals.errorMessage = 'No habit was found with this id. Please try again.';
    return res.status(400).json({message: res.locals.message})
  }
  res.locals.habitData = foundHabit.rows[0];
  next();
}

habitController.createHabit = async (req, res, next) => {
  const {username, name, money} = req.body;

  //Ensure that all fields are not blank
  if(!username || !name || !money) {
    res.locals.message = 'One or more of the fields was blank. Please try again.'
    return res.status(400).json({ message: res.locals.message})
  }

  //Check to see if a user with the requested name already exists
  const sql = `SELECT habitname from Habits INNER JOIN Users on Users.username = '${username}' and Habits.habitname = '${name}'`;
  const foundHabit = await db.query(sql);
  if (foundHabit.rows.length){
    res.locals.message = 'Another habit was found with this name. Please try again.'
    return res.status(400).json({ message: res.locals.message})
  }
try{
  const findID = `SELECT userid from Users WHERE username = '${username}'`
  const foundid = await db.query(findID);
  const id = foundid.rows[0].userid;
  const insert = `INSERT INTO Habits (userid, habitname, moneyspent)
  VALUES ($1, $2, $3);`

  const values = [id, name, money];

  await db.query(insert, values);
  next();
  } catch(err) {
    console.log(err);
    next({
      message: err
    })
  }
}

module.exports = habitController;