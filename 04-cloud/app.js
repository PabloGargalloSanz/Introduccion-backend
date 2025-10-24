import express from "express";

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send({
        mensaje: "Bienvenido a la nube"
    });
})

app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto " + PORT);
})