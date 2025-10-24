import express from "express";
import ENV from "./utils/envLoader.js";
//import fileRouter from "./routers/file.router.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send({
        mensaje: "Bienvenido a la nube"
    });
});

//app.use('/cloud', fileRouter);


app.listen(ENV.PORT, () => {
    console.log("Servidor escuchando en el puerto " + ENV.PORT);
})