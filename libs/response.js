const success = body => buildResponse(200, body);

const failure = body => buildResponse(500, body);

const buildResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(body),
});

export {
  success,
  failure,
};
