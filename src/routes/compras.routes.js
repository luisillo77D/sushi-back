//routas de compras
//importar la funcion Router de express
import {Router} from 'express';
//importar los metodos del controlador compras.controller
import {obtenerCompras,obtenerTodasCompras,obtenerCompra} from '../controllers/compras.controller.js';
//importar el middleware de autenticacion
import { authRequired } from '../middleware/validateToken.js';

//crear una instancia de Router
const router = Router()
//definir la ruta para obtener las compras de un usuario
router.get('/compras',authRequired,obtenerCompras)
//definir la ruta para obtener todas las compras
router.get('/compras/all',authRequired ,obtenerTodasCompras)
//definir la ruta para obtener una compra por id
router.get('/compras/:id',authRequired,obtenerCompra)
//exportar el router
export default router