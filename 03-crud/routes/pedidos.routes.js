import { Router } from "express";

import { getPedidos, createPedido, updatePedido } from '../controllers/pedidos.controller.js';

const router = Router();

router.get('/pedidos', getPedidos);
router.post('/pedidos', createPedido);
router.put('/pedidos/:id', updatePedido);

export default router;