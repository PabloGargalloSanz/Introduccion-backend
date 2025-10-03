import express from "express";

//Se asigna los vlaores del .env, sino el puerto 3000
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send({
        mensaje: "Hola mundo 2 server"
    });
})

app.listen(PORT, () => {
    console.log("Servidor escuchando " + PORT);
})