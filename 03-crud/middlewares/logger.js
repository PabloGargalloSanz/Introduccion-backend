import fs from 'fs';
import path from 'path';

const logger = (req, res, next) => {
    const today = new Date();
    
    const string = `[${today.toISOString()}] ${req.method} - ${req.url} - ${req.socket.remoteAddress} `;
    console.log(string);
    
    //coge solamente la parte antes de la T, lo de detras es la hora
    const date = today.toISOString().slice(0,10);

    let logPath = path.resolve('./logs/');
    
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