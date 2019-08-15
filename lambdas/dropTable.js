const qs = require('querystring');
const { success, failure } = require('../libs/response');
const { queryDBpool } = require('../libs/mysql-lib');

const main = async () => {
  const message = 'Table dropped';
  const queryDB = 'DROP TABLE customers ';
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
  