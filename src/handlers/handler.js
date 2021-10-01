exports.handler = async (event) => {
  console.info('received:', event);
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello")
  };
  console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
  return response;
}
