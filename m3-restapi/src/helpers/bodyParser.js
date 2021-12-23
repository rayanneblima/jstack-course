function bodyParser (request, callback) {
  let body = '';

  request.on('data', (chunk) => {
    body += chunk;
  });

  request.on('end', () => {
    if (!body) return callback();

    body = JSON.parse(body);
    request.body = body;

    callback();
  });
}

module.exports = bodyParser;