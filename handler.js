const { success, failure } = require('./libs/response');
const { queryDBpool } = require('./libs/mysql-lib');

export const createtable = async () => {
  const greeting = 'Table created';
  const queryDB = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
  try {
    const myPool = await queryDBpool(queryDB);
    console.log('myPool:', myPool);
    return success(greeting);
  } catch (e) {
    console.log(`[ERROR] hello lambda threw error: ${e.message}`);
    return failure({ status: false, error: e.message });
  }
};

export const droptable = async () => {
  const greeting = 'Table dropped';
  const queryDB = 'DROP TABLE customers ';
  try {
    const myPool = await queryDBpool(queryDB);
    console.log('myPool:', myPool);
    return success(greeting);
  } catch (e) {
    console.log(`[ERROR] hello lambda threw error: ${e.message}`);
    return failure({ status: false, error: e.message });
  }
};
