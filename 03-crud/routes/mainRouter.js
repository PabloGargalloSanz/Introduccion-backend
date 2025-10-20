import { Router } from 'express';
import clientesRoutes from './clientes.routes.js';
import pedidosRoutes from './pedidos.routes.js';

const router = Router();

router.use(clientesRoutes);
router.use(pedidosRoutes);

export default router;