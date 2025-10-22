import fs from 'fs';
import path from 'path';

const logger = (req, res, next) => {
    //coge solamente la parte antes de la T, lo de detras es la hora
    const fecha = new Date().toISOString().split('T')[0];
    const string = `[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.ip}`;
    
    //proceso actual, directorio y nombre carpeta
    const direccion = path.join(process.cwd(), 'logs');
    const nombreArchivo = path.join(direccion, fecha +'.log');

    console.log(string);
    console.log(fecha);

    fs.appendFile(nombreArchivo, string + '\n', 
            (error) => {
            if(error) {
                console.log( error);
            }
        }
    );
    next();
};

export default logger;