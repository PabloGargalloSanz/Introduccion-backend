import {getAllPedidos} from '../services/pedidos.service.js';

export const getPedidos = (req, res) => {
    getAllPedidos()
        .then((pedidos) => {
            res.send(pedidos);
        })
}

