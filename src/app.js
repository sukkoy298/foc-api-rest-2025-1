const { Server } = require("./server/server.server");
require('dotenv').config();


console.log('Hello, World!');

//instancia del servidor
const server = new Server();
server.listen();
 