import Router from 'express';
import { verifyToken } from '../Middlewares/middleware.js';
import { crearMascota } from '../Controllers/mascotaController.js';

const router = Router();

router.post('/', verifyToken, crearMascota);

export default router;