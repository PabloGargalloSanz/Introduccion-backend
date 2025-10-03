import express from "express";

const PORT = 80;
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