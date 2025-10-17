import express from "express";
import logger from './middlewares/logger.js';
import mainRouter from './routes/mainRouter.js';
import pool from './db/db.js';


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(logger);
app.use(express.json());


app.get('/',(req,res) => {
    res.send({
        mensaje: "Hola mundo 3"
    });
})

app.use('/api', mainRouter);

// Conectarse a la base de datos
pool.connect()
    .then(() => {
        console.log('✅ Conectado a la base de datos');
    }).catch((error) =>{
        console.log('❌ Error al conectarse a la base de datos ', error);
})


app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT);
});