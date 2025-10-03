import { Router } from 'express';

import authRoutes from './auth.routes.js';
import authRoutes from './alumnos.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/alumnos', alumnosRoutes);

export default router;