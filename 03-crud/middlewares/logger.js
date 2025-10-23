import fs from 'fs';
import path from 'path';
import newLog from '../services/logs.service.js'; 

const logger = (req, res, next) => {
    const today = new Date();
    
    const string = `[${today.toISOString()}] ${req.method} - ${req.url} - ${req.socket.remoteAddress} `;
    console.log(string);

    const fecha = today.toISOString();
    const metodod = req.method;
    const ip = req.socket.remoteAddress;
    
    //coge solamente la parte antes de la T, lo de detras es la hora
    const date = today.toISOString().slice(0,10);
    
    const data = {fecha, metodod, ip };

    let logPath = path.resolve('./logs/');
    
    
    newLog(data);

    if(!fs.existsSync(logPath)) {
        fs.mkdirSync(logPath);
    }    

    logPath = path.join(logPath, date + '.log');

    fs.appendFile(logPath, 
        string + '\n',
        (error) => {
            if(error) {
                console.log( error);
            }
        }
    );
    next();
};

export default logger;