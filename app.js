const http = require('http');
const requestHandler = require('./ROUTES.JS');

console.log("write something");

const server = http.createServer(requestHandler);
server.listen(8000);
    
