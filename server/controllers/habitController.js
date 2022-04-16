const db = require('../dataModel.js');
const habitController = {};

habitController.getHabits = async(req, res, next) => {
  const {username} = req.body;
  //replace username with userid
}

module.exports = habitController;