import multer from "multer";
import path from 'path';
import ENV from './routers/file.router.js';

const storage = multer.diskStorage({
    //Define el directorio donde se guarde los ficheros
    //cb = function cb(error, dato);

    destination: ENVCLOUD_STORAGE_PATH,
    
    filename: (_req, file, cb) => {
        //basename quta toda la ruta y debuelve el nombre
        const safeName = path.basename(file.originalname)
        cb(null,safeName)
    } 
});

export const upload = multer ({ 
    storage: storage,
    limits:{
        fileSize: ENV.MAX_FILE_SIZE_MB * 1024 * 1024 //MB
    }
});