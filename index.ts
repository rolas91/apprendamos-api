import  'reflect-metadata';
import Server from "./clasess/server";
import {createConnection} from 'typeorm';
import bodyParser from 'body-parser';
import userRoutes from "./routes/auth";

const server = new Server();

server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

createConnection();

//rutas del api
server.app.use('/user', userRoutes)

server.start(()=>{
    console.log(`Server on port ${server.port}`);
});