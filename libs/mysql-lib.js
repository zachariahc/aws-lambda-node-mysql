var mysql = require("mysql");
var config = require("../config.json");

async function queryDBpool(q) {
    var pool = mysql.createPool({
        host: config.dbhost,
        user: config.dbuser,
        password: config.dbpassword,
        database: config.dbname
      });
  return new Promise((resolve) => {
    pool.query(q, (error, results) => {
      pool.end();
      resolve(results);
    });
  });
}

module.exports = {
  queryDBpool,
};
