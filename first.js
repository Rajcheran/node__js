const http = require('http');

const route = require('./requests');

const server = http.createServer (route.handler);
 
server.listen(3000);