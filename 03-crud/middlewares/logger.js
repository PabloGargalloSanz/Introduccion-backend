import fs from 'fs';
import path from 'path';

const logger = (req, res, next) => {
    const string = `[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.ip}`

    console.log(string);

    fs.appendFile('./logs/request.log',
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