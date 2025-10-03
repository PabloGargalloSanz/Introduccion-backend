//Middleware para loggear peticiones
//Export permite importarlo en otros ficheros

const logger = ((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.ip}`);
    //ISOString es la hora para todo el mundo
    //.method es el verbo que se utiliza en este caso get
    //.url es a donde se apunta, en este caso es el root o pagina principal
    //.ip es la ip es la ip desde donde se envia el paquete
    //.socket.remoteAddress es la ip real
    next();
    //Para pasar a la siguiente etapa
});

//Exporta por defecto logger
export default logger;