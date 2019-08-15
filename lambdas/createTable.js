const qs = require('querystring');
const { success, failure } = require('../libs/response');
const { queryDBpool } = require('../libs/mysql-lib');
const hello = 'customers'
const main = async () => {
  const message = 'Table created';
  const queryDB = `CREATE TABLE ${hello} (name VARCHAR(255), address VARCHAR(255))`;
  try {
    const myPool = await queryDBpool(queryDB);
    console.log('myPool:', myPool);
    return success(message);
  } catch (e) {
    console.log(`[ERROR] hello lambda threw error: ${e.message}`);
    return failure({ status: false, error: e.message });
  }
};

module.exports = {
    main,
  };
  