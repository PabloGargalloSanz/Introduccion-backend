import express from "express";
import logger from './middlewares/logger.js';
import mainRouter from './routes/auth.routes.js';

//Se asigna los vlaores del .env, sino el puerto 3000
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

//Middleware de logueo
app.use(logger);

//Endpoint raiz
app.get("/", (req,res) => {
    res.send({
        mensaje: "Hola mundo 2 server"
    });
})

//Cargar rutas
app.use('/api', mainRouter);

//Escuchando en el puerto
app.listen(PORT, () => {
    console.log("Servidor escuchando " + PORT);
})