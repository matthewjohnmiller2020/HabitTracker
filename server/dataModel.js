const {Pool} = require("pg");
const URI = 'postgres://hoqahjhr:VeWUq3o4fgmy6u0tH5pX5g1c9_hVwUhR@ruby.db.elephantsql.com/hoqahjhr';

const pool = new Pool({
  connectionString: URI,
})

module.exports = {
  query: function(queryString, params, callback) {
    console.log(`Executed query: ${queryString}`);
    return pool.query(queryString, params, callback);
  },
};