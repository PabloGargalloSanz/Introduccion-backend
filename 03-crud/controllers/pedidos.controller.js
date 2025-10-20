import {getAllPedidos, newPedidoService, updatePedidoService} from '../services/pedidos.service.js';

export const getPedidos = (req, res) => {
    getAllPedidos()
        .then((pedidos) => {
            res.send(pedidos);
        })
}

export const createPedido = (req, res) => {
    const data = req.body;
    
    if(data.cantidad <= 0 ) {
        res.status(400).send({ error: 'La cantidad no puede ser menor o igual a 0'});
       
    } else if(data.id_cliente) {
        newPedidoService(data) 
            .then ((newPedido) => {
                res.status(200).send(newPedido);
            })
            .catch((error) => {
                res.status(400).send({error: error.message });
            });

    } else {
        res.status(400).send({ error: 'Faltan datos obligatorios'});
    }
}

