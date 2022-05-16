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
    return res.status(400).json({errorMessage: res.locals.errorMessage})
  }
  res.locals.habits = foundHabits.rows;
  next();
}

module.exports = habitController;