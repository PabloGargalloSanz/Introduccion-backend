import { Router } from "express";

import { getPedidos } from '../controllers/pedidos.controller.js';

const router = Router();

router.get('/pedidos', getPedidos);


export default router;