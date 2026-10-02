import Router from 'express'; 
import { crearUsuario } from '../Controllers/usuarioController.js';

const router = Router();
router.post('/registro', crearUsuario); 
export default router;