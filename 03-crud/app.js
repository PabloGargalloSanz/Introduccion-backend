import express from "express";
import logger from './middlewares/logger.js';
import mainRouter from './routes/index.js';


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

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT);
});