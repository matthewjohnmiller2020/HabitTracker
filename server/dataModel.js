const {Pool} = require("pg");
const URI = 'sample';

const pool = new Pool({
  connectionString: URI,
})

module.exports = {
  query: function(queryString, params, callback) {
    console.log(`Executed query: ${queryString}`);
    return pool.query(queryString, params, callback);
  },
};