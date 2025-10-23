import fs from 'fs';
import path from 'path';
import newLog from '../services/logs.service.js'; 

const logger = (req, res, next) => {
    const today = new Date();
    
    const string = `[${today.toISOString()}] ${req.method} - ${req.url} - ${req.socket.remoteAddress} `;
    console.log(string);
    
    //coge solamente la parte antes de la T, lo de detras es la hora
    const date = today.toISOString().slice(0,10);
        
    let logPath = path.resolve('./logs/');
    
    const data = {fecha_log:today.toISOString(), hora_log:today.toTimeString().slice(0,8) , metodo: req.method, ip: req.socket.remoteAddress, direccion: req.url };
    try {
        newLog(data);
    }catch(error){
        console.error('Error al guardar en la base de datos', error);
    }

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