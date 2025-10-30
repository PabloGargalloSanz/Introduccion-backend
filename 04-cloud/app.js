import express from "express";
import fs from 'fs';
import ENV from "./utils/envLoader.js";
import fileRouter from "./routers/file.router.js";
import logger from './utils/logger.js';

const app = express();

app.use(express.json());

if(!fs.existsSync(ENV.CLOUD_STORAGE_PATH)) {
    fs.mkdirSync(ENV.CLOUD_STORAGE_PATH, {recursive:true});
}

app.use(logger);

app.get("/", (req,res) => {
    res.send({
        mensaje: "Bienvenido a la nube"
    });
});

app.use('/cloud', fileRouter);


app.listen(ENV.PORT, () => {
    console.log("Servidor escuchando en el puerto " + ENV.PORT);
})