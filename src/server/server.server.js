const express = require('express');
const cors = require('cors');


class Server{
    constructor() {
        console.log("Se instacia el servidor");
        this.app = express();
        this.port = process.env.API_PORT || 3000;
        this.pre= "/api";
        this.path = {
            roles: `${this.pre}/roles`
        };
        this.middleware();
        this.routers();
    }

    routers = () => {
        this.app.use(this.path.roles, require('../routers/role.routers'));
    }

    middleware = () => {
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.static('./src/public'));
    }

    listen = () => {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`)
            console.log("servidor escuchando en el puerto " + this.port)
        });
    }
}

module.exports ={
    Server
};

