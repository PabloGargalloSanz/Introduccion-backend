import express from 'express';

const PORT = 80;
const app = express();

//para enviar los paquetes mediante json
app.use(express.json());

//Endpoint raiz
app.get('/', (req,res) => {
    res.send({
        mensaje: "Hola mundodesde mi primer server"
    });
})

// Escuchar en el puerto 80
app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT);
})